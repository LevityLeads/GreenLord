/**
 * Grant Eligibility Logic
 *
 * This module provides the core logic for determining landlord eligibility
 * for UK energy efficiency grant schemes based on property and tenant criteria.
 *
 * The eligibility checker handles:
 * - National schemes (ECO4, Boiler Upgrade Scheme, Warm Homes: Local)
 * - Local authority schemes
 * - Complex eligibility rules with multiple criteria
 * - Confidence levels (definite, likely, possible, ineligible)
 */

import type {
  EPCRating,
  EligibilityConfidence,
  GrantEligibilityInputs,
  GrantEligibilityMatch,
  GrantEligibilityResult,
  GrantScheme,
  HeatingSystem,
  LocalAuthority,
  PropertyType,
  Region,
  TenantBenefitStatus,
  TenantIncomeStatus,
} from './types';

import {
  ALL_GRANT_SCHEMES,
  LOCAL_AUTHORITIES,
  POSTCODE_TO_REGION,
  GRANT_ELIGIBILITY_DISCLAIMER,
} from '@/data/grants-data';

// ============================================================
// POSTCODE UTILITIES
// ============================================================

/**
 * Extract the outward code (first part) from a UK postcode
 * e.g., "M1 4BT" -> "M1", "NW1 6XE" -> "NW1"
 */
export function getOutwardCode(postcode: string): string {
  const normalized = postcode.toUpperCase().replace(/\s+/g, '');
  // UK postcodes: outward code is everything except last 3 characters
  if (normalized.length < 4) return normalized;
  return normalized.slice(0, -3).trim();
}

/**
 * Extract the postcode area (letters only) from a UK postcode
 * e.g., "M1 4BT" -> "M", "NW1 6XE" -> "NW"
 */
export function getPostcodeArea(postcode: string): string {
  const outward = getOutwardCode(postcode);
  // Extract letters only from the start
  const match = outward.match(/^[A-Z]+/);
  return match ? match[0] : '';
}

/**
 * Get region from postcode
 */
export function getRegionFromPostcode(postcode: string): Region | undefined {
  const area = getPostcodeArea(postcode);
  return POSTCODE_TO_REGION[area];
}

/**
 * Find local authority from postcode
 * Returns the first matching local authority based on postcode area
 */
export function getLocalAuthorityFromPostcode(postcode: string): LocalAuthority | undefined {
  const outwardCode = getOutwardCode(postcode);

  for (const authority of LOCAL_AUTHORITIES) {
    if (authority.postcodeAreas.some(area => outwardCode.startsWith(area))) {
      return authority;
    }
  }

  return undefined;
}

// ============================================================
// ELIGIBILITY CHECKING
// ============================================================

/**
 * Check if a geographic coverage matches the property location
 */
function coverageMatches(
  coverage: string,
  region: Region | undefined,
  localAuthorityIds?: string[],
  propertyLocalAuthority?: LocalAuthority
): boolean {
  // If specific local authorities are required, check for match
  if (localAuthorityIds && localAuthorityIds.length > 0) {
    if (!propertyLocalAuthority) return false;
    return localAuthorityIds.includes(propertyLocalAuthority.id);
  }

  // Check general geographic coverage
  switch (coverage) {
    case 'uk-wide':
      return true;
    case 'great-britain':
      return region !== 'northern-ireland';
    case 'england-and-wales':
      return region !== 'scotland' && region !== 'northern-ireland';
    case 'england':
      return region !== 'scotland' && region !== 'wales' && region !== 'northern-ireland';
    case 'wales':
      return region === 'wales';
    case 'scotland':
      return region === 'scotland';
    case 'northern-ireland':
      return region === 'northern-ireland';
    default:
      return false;
  }
}

/**
 * Check if EPC rating meets scheme criteria
 */
function epcMatches(
  currentRating: EPCRating | 'unknown',
  requiredRatings?: EPCRating[]
): { matches: boolean; reason?: string } {
  // If no EPC requirement, all ratings qualify
  if (!requiredRatings || requiredRatings.length === 0) {
    return { matches: true };
  }

  // If user doesn't know their rating, we can't be definite
  if (currentRating === 'unknown') {
    return {
      matches: true,
      reason: 'EPC rating unknown - eligibility depends on actual rating',
    };
  }

  if (requiredRatings.includes(currentRating)) {
    return { matches: true };
  }

  return {
    matches: false,
    reason: `Property EPC rating ${currentRating} does not meet requirement (needs ${requiredRatings.join(' or ')})`,
  };
}

/**
 * Check if heating system meets scheme criteria
 */
function heatingSystemMatches(
  heatingSystem: HeatingSystem,
  eligibleSystems?: HeatingSystem[],
  excludedSystems?: HeatingSystem[]
): { matches: boolean; reason?: string } {
  // Check exclusions first
  if (excludedSystems && excludedSystems.includes(heatingSystem)) {
    return {
      matches: false,
      reason: `Heating system type (${formatHeatingSystem(heatingSystem)}) is not eligible for this scheme`,
    };
  }

  // If no eligibility list, all systems qualify
  if (!eligibleSystems || eligibleSystems.length === 0) {
    return { matches: true };
  }

  if (eligibleSystems.includes(heatingSystem)) {
    return { matches: true };
  }

  return {
    matches: false,
    reason: `Current heating system (${formatHeatingSystem(heatingSystem)}) does not meet scheme requirements`,
  };
}

/**
 * Check benefit status for ECO4-style schemes
 */
function benefitStatusMatches(
  requiresBenefits: boolean | undefined,
  tenantStatus: TenantBenefitStatus | undefined
): { matches: boolean; confidence: EligibilityConfidence; reason?: string } {
  // If scheme doesn't require benefits
  if (!requiresBenefits) {
    return { matches: true, confidence: 'definite' };
  }

  // Scheme requires benefits
  if (tenantStatus === 'yes') {
    return { matches: true, confidence: 'definite' };
  }

  if (tenantStatus === 'no') {
    return {
      matches: false,
      confidence: 'ineligible',
      reason: 'Tenant must receive qualifying benefits for this scheme',
    };
  }

  // Status unknown
  return {
    matches: true,
    confidence: 'possible',
    reason: 'Eligibility depends on tenant receiving qualifying benefits',
  };
}

/**
 * Check income threshold for Warm Homes: Local style schemes
 */
function incomeStatusMatches(
  incomeThreshold: number | undefined,
  tenantIncome: TenantIncomeStatus | undefined,
  requiresBenefits: boolean | undefined,
  tenantBenefits: TenantBenefitStatus | undefined
): { matches: boolean; confidence: EligibilityConfidence; reason?: string } {
  // If no income threshold
  if (!incomeThreshold) {
    return { matches: true, confidence: 'definite' };
  }

  // Warm Homes: Local allows benefits OR income threshold
  if (requiresBenefits === false) {
    // Check if on benefits (automatic qualify)
    if (tenantBenefits === 'yes') {
      return { matches: true, confidence: 'definite' };
    }

    // Check income
    if (tenantIncome === 'below-36000') {
      return { matches: true, confidence: 'definite' };
    }

    // If income is above threshold and we already checked they're not on benefits
    // (tenantBenefits would be 'no' or 'unknown' at this point, not 'yes')
    if (tenantIncome === 'above-36000' && tenantBenefits === 'no') {
      return {
        matches: false,
        confidence: 'ineligible',
        reason: `Tenant income exceeds threshold (${formatCurrency(incomeThreshold)}) and not on qualifying benefits`,
      };
    }
  }

  // Unknown - possible eligibility
  return {
    matches: true,
    confidence: 'possible',
    reason: `Eligibility depends on tenant income (below ${formatCurrency(incomeThreshold)}) or benefit status`,
  };
}

/**
 * Evaluate a single scheme against user inputs
 */
function evaluateScheme(
  scheme: GrantScheme,
  inputs: GrantEligibilityInputs,
  region: Region | undefined,
  localAuthority: LocalAuthority | undefined
): GrantEligibilityMatch | null {
  const eligibilityReasons: string[] = [];
  const ineligibilityReasons: string[] = [];
  let overallConfidence: EligibilityConfidence = 'definite';

  // Check if scheme is active
  if (!scheme.isActive) {
    return null;
  }

  // Check geographic coverage
  if (!coverageMatches(
    scheme.eligibility.coverage,
    region,
    scheme.eligibility.localAuthorityIds,
    localAuthority
  )) {
    return {
      scheme,
      confidence: 'ineligible',
      potentialValue: 0,
      eligibilityReasons: [],
      ineligibilityReasons: [`Scheme not available in your area (${region || 'location unknown'})`],
      nextSteps: [],
      requiresContribution: false,
    };
  }
  eligibilityReasons.push('Property location covered by scheme');

  // Check if rental properties allowed
  if (!scheme.eligibility.allowsRentalProperties) {
    return {
      scheme,
      confidence: 'ineligible',
      potentialValue: 0,
      eligibilityReasons: [],
      ineligibilityReasons: ['Scheme only available for owner-occupied properties'],
      nextSteps: [],
      requiresContribution: false,
    };
  }
  eligibilityReasons.push('Rental properties eligible');

  // Check EPC rating
  const epcCheck = epcMatches(inputs.currentEpcRating, scheme.eligibility.epcRatings);
  if (!epcCheck.matches) {
    return {
      scheme,
      confidence: 'ineligible',
      potentialValue: 0,
      eligibilityReasons: [],
      ineligibilityReasons: [epcCheck.reason || 'EPC rating does not meet requirements'],
      nextSteps: [],
      requiresContribution: false,
    };
  }
  if (epcCheck.reason) {
    ineligibilityReasons.push(epcCheck.reason);
    overallConfidence = reduceConfidence(overallConfidence, 'possible');
  } else {
    eligibilityReasons.push('EPC rating meets scheme requirements');
  }

  // Check heating system
  const heatingCheck = heatingSystemMatches(
    inputs.heatingSystem,
    scheme.eligibility.heatingSystemsEligible,
    scheme.eligibility.heatingSystemsExcluded
  );
  if (!heatingCheck.matches) {
    return {
      scheme,
      confidence: 'ineligible',
      potentialValue: 0,
      eligibilityReasons,
      ineligibilityReasons: [heatingCheck.reason || 'Heating system not eligible'],
      nextSteps: [],
      requiresContribution: false,
    };
  }
  eligibilityReasons.push('Heating system eligible for improvements');

  // Check property type if specified
  if (scheme.eligibility.propertyTypes && scheme.eligibility.propertyTypes.length > 0) {
    if (!scheme.eligibility.propertyTypes.includes(inputs.propertyType)) {
      return {
        scheme,
        confidence: 'ineligible',
        potentialValue: 0,
        eligibilityReasons,
        ineligibilityReasons: [`Property type (${formatPropertyType(inputs.propertyType)}) not eligible`],
        nextSteps: [],
        requiresContribution: false,
      };
    }
  }

  // Check tenure type if specified
  if (scheme.eligibility.tenureTypes && scheme.eligibility.tenureTypes.length > 0) {
    if (!scheme.eligibility.tenureTypes.includes(inputs.tenure)) {
      return {
        scheme,
        confidence: 'ineligible',
        potentialValue: 0,
        eligibilityReasons,
        ineligibilityReasons: [`Tenure type (${inputs.tenure}) not eligible`],
        nextSteps: [],
        requiresContribution: false,
      };
    }
  }

  // Check benefit status
  const benefitCheck = benefitStatusMatches(
    scheme.eligibility.requiresTenantOnBenefits,
    inputs.tenantBenefitStatus
  );
  if (!benefitCheck.matches) {
    return {
      scheme,
      confidence: 'ineligible',
      potentialValue: 0,
      eligibilityReasons,
      ineligibilityReasons: [benefitCheck.reason || 'Tenant benefit requirements not met'],
      nextSteps: [],
      requiresContribution: false,
    };
  }
  if (benefitCheck.reason) {
    ineligibilityReasons.push(benefitCheck.reason);
  }
  overallConfidence = reduceConfidence(overallConfidence, benefitCheck.confidence);

  // Check income threshold
  const incomeCheck = incomeStatusMatches(
    scheme.eligibility.tenantIncomeThreshold,
    inputs.tenantIncomeStatus,
    scheme.eligibility.requiresTenantOnBenefits,
    inputs.tenantBenefitStatus
  );
  if (!incomeCheck.matches) {
    return {
      scheme,
      confidence: 'ineligible',
      potentialValue: 0,
      eligibilityReasons,
      ineligibilityReasons: [incomeCheck.reason || 'Tenant income requirements not met'],
      nextSteps: [],
      requiresContribution: false,
    };
  }
  if (incomeCheck.reason) {
    ineligibilityReasons.push(incomeCheck.reason);
  }
  overallConfidence = reduceConfidence(overallConfidence, incomeCheck.confidence);

  // Calculate potential value and contribution
  const requiresContribution = scheme.eligibility.requiresLandlordContribution || false;
  const contributionPercent = scheme.eligibility.landlordContributionPercent || 0;
  const potentialValue = scheme.maxGrantValue;

  // Estimate landlord contribution if required
  const estimatedContribution = requiresContribution && contributionPercent > 0
    ? Math.round((scheme.maxGrantValue * contributionPercent) / (100 - contributionPercent))
    : undefined;

  // Generate next steps
  const nextSteps = generateNextSteps(scheme, inputs, overallConfidence);

  return {
    scheme,
    confidence: overallConfidence,
    potentialValue,
    eligibilityReasons,
    ineligibilityReasons: ineligibilityReasons.length > 0 ? ineligibilityReasons : undefined,
    nextSteps,
    requiresContribution,
    estimatedContribution,
  };
}

/**
 * Reduce confidence level (towards less certain)
 */
function reduceConfidence(
  current: EligibilityConfidence,
  check: EligibilityConfidence
): EligibilityConfidence {
  const levels: EligibilityConfidence[] = ['definite', 'likely', 'possible', 'ineligible'];
  const currentIndex = levels.indexOf(current);
  const checkIndex = levels.indexOf(check);
  return levels[Math.max(currentIndex, checkIndex)];
}

/**
 * Generate next steps based on scheme and eligibility
 */
function generateNextSteps(
  scheme: GrantScheme,
  inputs: GrantEligibilityInputs,
  confidence: EligibilityConfidence
): string[] {
  const steps: string[] = [];

  if (confidence === 'possible') {
    if (inputs.currentEpcRating === 'unknown') {
      steps.push('Get a valid EPC assessment for your property');
    }
    if (!inputs.tenantBenefitStatus || inputs.tenantBenefitStatus === 'unknown') {
      steps.push('Confirm whether your tenant receives qualifying benefits');
    }
    if (!inputs.tenantIncomeStatus || inputs.tenantIncomeStatus === 'unknown') {
      steps.push('Confirm tenant household income status');
    }
  }

  // Scheme-specific steps
  if (scheme.id === 'eco4') {
    steps.push('Contact an ECO4 approved installer or energy supplier');
    steps.push('Gather tenant benefit documentation');
  } else if (scheme.id === 'boiler-upgrade-scheme') {
    steps.push('Find an MCS-certified heat pump installer');
    steps.push('Ensure property has valid EPC (less than 10 years old)');
  } else if (scheme.id === 'warm-homes-local') {
    steps.push('Contact your local authority energy team');
    steps.push('Gather tenant income/benefit documentation');
  } else if (scheme.eligibility.localAuthorityIds) {
    steps.push(`Contact ${scheme.administratorName} for application details`);
  }

  // General application step
  if (scheme.applicationUrl) {
    steps.push(`Visit ${new URL(scheme.applicationUrl).hostname} to apply`);
  }

  return steps;
}

// ============================================================
// MAIN ELIGIBILITY CHECKER
// ============================================================

/**
 * Check grant eligibility for all schemes based on user inputs
 *
 * @param inputs - User-provided property and tenant information
 * @returns Complete eligibility results with eligible and ineligible schemes
 */
export function checkGrantEligibility(inputs: GrantEligibilityInputs): GrantEligibilityResult {
  // Determine region and local authority from postcode
  const region = getRegionFromPostcode(inputs.postcode);
  const localAuthority = getLocalAuthorityFromPostcode(inputs.postcode);

  const eligibleGrants: GrantEligibilityMatch[] = [];
  const ineligibleGrants: GrantEligibilityMatch[] = [];

  // Evaluate each scheme
  for (const scheme of ALL_GRANT_SCHEMES) {
    const match = evaluateScheme(scheme, inputs, region, localAuthority);

    if (match) {
      if (match.confidence === 'ineligible') {
        ineligibleGrants.push(match);
      } else {
        eligibleGrants.push(match);
      }
    }
  }

  // Sort eligible grants by confidence (definite first) then by value (highest first)
  eligibleGrants.sort((a, b) => {
    const confidenceOrder: EligibilityConfidence[] = ['definite', 'likely', 'possible'];
    const aConfIndex = confidenceOrder.indexOf(a.confidence);
    const bConfIndex = confidenceOrder.indexOf(b.confidence);

    if (aConfIndex !== bConfIndex) {
      return aConfIndex - bConfIndex;
    }

    return b.potentialValue - a.potentialValue;
  });

  // Sort ineligible grants by display priority
  ineligibleGrants.sort((a, b) => a.scheme.displayPriority - b.scheme.displayPriority);

  // Calculate total potential value
  const totalPotentialValue = eligibleGrants.reduce(
    (sum, match) => sum + match.potentialValue,
    0
  );

  // Generate summary message
  const summaryMessage = generateSummaryMessage(eligibleGrants, inputs);

  return {
    inputs,
    localAuthority,
    eligibleGrants,
    ineligibleGrants,
    totalPotentialValue,
    summaryMessage,
    checkedAt: new Date().toISOString(),
    disclaimer: GRANT_ELIGIBILITY_DISCLAIMER,
  };
}

/**
 * Generate a human-readable summary message
 */
function generateSummaryMessage(
  eligibleGrants: GrantEligibilityMatch[],
  inputs: GrantEligibilityInputs
): string {
  if (eligibleGrants.length === 0) {
    return `Based on the information provided, we could not identify any grant schemes you are currently eligible for. This may be because your property's EPC rating is too high, or tenant eligibility criteria are not met. Consider checking back as new schemes are regularly announced.`;
  }

  const definiteCount = eligibleGrants.filter(g => g.confidence === 'definite').length;
  const likelyCount = eligibleGrants.filter(g => g.confidence === 'likely').length;
  const possibleCount = eligibleGrants.filter(g => g.confidence === 'possible').length;

  const totalValue = eligibleGrants.reduce((sum, g) => sum + g.potentialValue, 0);

  let message = `Good news! We found ${eligibleGrants.length} grant scheme${eligibleGrants.length > 1 ? 's' : ''} you may be eligible for, with combined potential funding of up to ${formatCurrency(totalValue)}.`;

  if (definiteCount > 0) {
    message += ` You appear to definitely qualify for ${definiteCount} scheme${definiteCount > 1 ? 's' : ''}.`;
  }

  if (likelyCount > 0) {
    message += ` ${likelyCount} scheme${likelyCount > 1 ? 's are' : ' is'} likely to be available.`;
  }

  if (possibleCount > 0) {
    message += ` ${possibleCount} scheme${possibleCount > 1 ? 's' : ''} may be possible pending confirmation of tenant eligibility.`;
  }

  return message;
}

// ============================================================
// FORMATTING UTILITIES
// ============================================================

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format heating system for display
 */
export function formatHeatingSystem(system: HeatingSystem): string {
  const labels: Record<HeatingSystem, string> = {
    'gas-boiler': 'Gas boiler',
    'electric': 'Electric heating',
    'oil-boiler': 'Oil boiler',
    'heat-pump': 'Heat pump',
    'other': 'Other',
  };
  return labels[system] || system;
}

/**
 * Format property type for display
 */
export function formatPropertyType(type: PropertyType): string {
  const labels: Record<PropertyType, string> = {
    'victorian-terrace': 'Victorian terrace',
    'edwardian-1920s': 'Edwardian/1920s',
    '1930s-semi': '1930s semi-detached',
    '1950s-1960s': '1950s-1960s property',
    '1970s-1980s': '1970s-1980s property',
    '1990s-later': '1990s or later',
    'purpose-built-flat': 'Purpose-built flat',
    'converted-flat': 'Converted flat',
    'hmo': 'HMO',
  };
  return labels[type] || type;
}

/**
 * Format EPC rating for display
 */
export function formatEPCRating(rating: EPCRating | 'unknown'): string {
  if (rating === 'unknown') {
    return 'Unknown';
  }
  return `EPC ${rating}`;
}

/**
 * Format eligibility confidence for display
 */
export function formatConfidence(confidence: EligibilityConfidence): {
  label: string;
  description: string;
  color: string;
} {
  switch (confidence) {
    case 'definite':
      return {
        label: 'Eligible',
        description: 'You meet all the requirements for this scheme',
        color: 'green',
      };
    case 'likely':
      return {
        label: 'Likely eligible',
        description: 'You likely qualify, but some details need confirmation',
        color: 'blue',
      };
    case 'possible':
      return {
        label: 'Possibly eligible',
        description: 'Eligibility depends on tenant circumstances',
        color: 'amber',
      };
    case 'ineligible':
      return {
        label: 'Not eligible',
        description: 'You do not meet the requirements for this scheme',
        color: 'red',
      };
  }
}

// ============================================================
// SCHEME LOOKUP UTILITIES
// ============================================================

/**
 * Get a single scheme by ID
 */
export function getSchemeById(id: string): GrantScheme | undefined {
  return ALL_GRANT_SCHEMES.find(scheme => scheme.id === id);
}

/**
 * Get all schemes for a specific local authority
 */
export function getSchemesForLocalAuthority(authorityId: string): GrantScheme[] {
  return ALL_GRANT_SCHEMES.filter(scheme =>
    scheme.eligibility.localAuthorityIds?.includes(authorityId)
  );
}

/**
 * Get all national schemes
 */
export function getNationalSchemes(): GrantScheme[] {
  return ALL_GRANT_SCHEMES.filter(scheme =>
    !scheme.eligibility.localAuthorityIds || scheme.eligibility.localAuthorityIds.length === 0
  );
}

/**
 * Get schemes by coverage category
 */
export function getSchemesByCoverage(category: string): GrantScheme[] {
  return ALL_GRANT_SCHEMES.filter(scheme =>
    scheme.coverageCategories.includes(category as GrantScheme['coverageCategories'][number])
  );
}

/**
 * Get local authority by ID
 */
export function getLocalAuthorityById(id: string): LocalAuthority | undefined {
  return LOCAL_AUTHORITIES.find(authority => authority.id === id);
}

/**
 * Get all local authorities for a region
 */
export function getLocalAuthoritiesForRegion(region: Region): LocalAuthority[] {
  return LOCAL_AUTHORITIES.filter(authority => authority.region === region);
}

// ============================================================
// VALIDATION UTILITIES
// ============================================================

/**
 * Validate UK postcode format
 */
export function isValidUKPostcode(postcode: string): boolean {
  // UK postcode regex (loose validation)
  const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i;
  return postcodeRegex.test(postcode.trim());
}

/**
 * Validate grant eligibility inputs
 */
export function validateGrantInputs(inputs: Partial<GrantEligibilityInputs>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!inputs.postcode || !isValidUKPostcode(inputs.postcode)) {
    errors.postcode = 'Please enter a valid UK postcode';
  }

  if (!inputs.propertyType) {
    errors.propertyType = 'Please select a property type';
  }

  if (!inputs.currentEpcRating) {
    errors.currentEpcRating = 'Please select your current EPC rating';
  }

  if (!inputs.tenure) {
    errors.tenure = 'Please select property tenure (freehold or leasehold)';
  }

  if (!inputs.heatingSystem) {
    errors.heatingSystem = 'Please select your current heating system';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

// ============================================================
// DATA FRESHNESS UTILITIES
// ============================================================

/**
 * Check if scheme data needs refreshing
 */
export function schemeNeedsRefresh(scheme: GrantScheme): boolean {
  const lastVerified = new Date(scheme.lastVerified);
  const now = new Date();
  const daysSinceVerification = Math.floor(
    (now.getTime() - lastVerified.getTime()) / (1000 * 60 * 60 * 24)
  );

  // National schemes: 7 days, local: 14 days
  const isLocal = scheme.eligibility.localAuthorityIds && scheme.eligibility.localAuthorityIds.length > 0;
  const threshold = isLocal ? 14 : 7;

  return daysSinceVerification > threshold;
}

/**
 * Get all schemes needing data refresh
 */
export function getSchemesNeedingRefresh(): GrantScheme[] {
  return ALL_GRANT_SCHEMES.filter(schemeNeedsRefresh);
}

/**
 * Format date for display
 */
export function formatVerificationDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
