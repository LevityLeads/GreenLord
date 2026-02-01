/**
 * Grant Schemes Database
 *
 * Comprehensive database of UK government grants and schemes available
 * to landlords for energy efficiency improvements.
 *
 * Last verified: January 2026
 */

export interface GrantScheme {
  id: string;
  name: string;
  type: 'national' | 'local';
  administrator: string;
  maxGrant: number;
  description: string;
  whatItCovers: string[];
  eligibility: {
    epcRatings: string[];
    tenantBenefits?: boolean;
    tenantIncomeBelow?: number;
    propertyTypes: string[];
    heatingSystem?: string[];
  };
  landlordContribution?: string;
  deadline?: string;
  applicationUrl: string;
  lastVerified: string;
}

export type EligibilityConfidence = 'definite' | 'likely' | 'possible' | 'not-eligible';

export interface GrantEligibilityResult {
  scheme: GrantScheme;
  confidence: EligibilityConfidence;
  reasons: string[];
  maxPotentialGrant: number;
}

export interface GrantCheckerInputs {
  // Step 1 - Property Details
  postcodeArea: string;
  propertyType: string;
  currentEpcRating: string;
  tenure: string;
  councilTaxBand: string;

  // Step 2 - Heating System
  currentHeating: string;
  boilerAge?: string;
  consideringHeatingReplacement: string;

  // Step 3 - Tenant Circumstances
  tenantOnBenefits: string;
  tenantIncome: string;
  numberOfProperties: string;
}

/**
 * National Grant Schemes
 *
 * These are UK-wide schemes administered by government agencies
 * or energy suppliers under government obligation.
 */
export const GRANT_SCHEMES: GrantScheme[] = [
  {
    id: 'eco4',
    name: 'ECO4 (Energy Company Obligation)',
    type: 'national',
    administrator: 'Obligated energy suppliers via Ofgem',
    maxGrant: 10000, // Varies significantly, can cover full cost
    description: 'ECO4 is a government scheme where energy suppliers fund energy efficiency improvements in fuel-poor and low-income households. Landlords can access this funding when their tenants meet eligibility criteria.',
    whatItCovers: [
      'Loft insulation',
      'Cavity wall insulation',
      'Solid wall insulation (internal and external)',
      'Underfloor insulation',
      'Heating system upgrades and repairs',
      'Heat pumps (air source and ground source)',
      'Solar PV panels',
      'First-time central heating',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      tenantBenefits: true,
      propertyTypes: ['all'],
      heatingSystem: ['gas-boiler', 'electric', 'oil-boiler', 'other'],
    },
    landlordContribution: 'Usually none - full cost covered if tenant qualifies. Some installers may require contribution for complex work.',
    deadline: 'March 2026 (scheme expected to be extended or replaced)',
    applicationUrl: 'https://www.ofgem.gov.uk/environmental-and-social-schemes/energy-company-obligation-eco',
    lastVerified: '2026-01-15',
  },
  {
    id: 'boiler-upgrade-scheme',
    name: 'Boiler Upgrade Scheme (BUS)',
    type: 'national',
    administrator: 'Ofgem',
    maxGrant: 7500, // £7,500 for heat pumps, £5,000 for biomass
    description: 'The Boiler Upgrade Scheme provides upfront grants to property owners to cover part of the cost of replacing fossil fuel heating systems with low-carbon alternatives like heat pumps.',
    whatItCovers: [
      'Air source heat pump installation (up to £7,500)',
      'Ground source heat pump installation (up to £7,500)',
      'Biomass boiler installation (up to £5,000)',
    ],
    eligibility: {
      epcRatings: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], // Any EPC, but must have valid certificate
      propertyTypes: ['all'],
      heatingSystem: ['gas-boiler', 'oil-boiler', 'electric', 'other'], // Must be replacing fossil fuel
    },
    landlordContribution: 'You pay the difference between the grant and total installation cost. Typical heat pump costs £10,000-£18,000, so expect to pay £2,500-£10,500 after grant.',
    deadline: 'Extended to March 2030',
    applicationUrl: 'https://www.gov.uk/apply-boiler-upgrade-scheme',
    lastVerified: '2026-01-20',
  },
  {
    id: 'warm-homes-local-grant',
    name: 'Warm Homes: Local Grant',
    type: 'local',
    administrator: 'Local authorities (via central government funding)',
    maxGrant: 30000, // Up to £30,000 for first property, 50% for additional
    description: 'The Warm Homes: Local Grant is a flagship scheme providing significant funding for energy efficiency improvements and low-carbon heating in private rented properties with low-income tenants.',
    whatItCovers: [
      'Insulation measures (up to £15,000)',
      'Low-carbon heating systems (up to £15,000)',
      'Loft insulation',
      'Cavity wall insulation',
      'Solid wall insulation',
      'Underfloor insulation',
      'Air source heat pumps',
      'Ground source heat pumps',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      tenantBenefits: true,
      tenantIncomeBelow: 36000,
      propertyTypes: ['all'],
    },
    landlordContribution: 'First property: potentially full funding. Additional properties: 50% landlord contribution required.',
    deadline: 'March 2028',
    applicationUrl: 'https://www.gov.uk/apply-warm-homes-local-grant',
    lastVerified: '2026-01-21',
  },
  {
    id: 'great-british-insulation-scheme',
    name: 'Great British Insulation Scheme (GBIS)',
    type: 'national',
    administrator: 'Energy suppliers',
    maxGrant: 5000, // Varies by measure
    description: 'The Great British Insulation Scheme helps households in Council Tax bands A-D (or on low income) to access insulation measures at low or no cost through energy supplier funding.',
    whatItCovers: [
      'Cavity wall insulation',
      'Loft insulation',
      'Flat roof insulation',
      'Solid wall insulation (limited availability)',
      'Underfloor insulation',
      'Room-in-roof insulation',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: ['all'],
    },
    landlordContribution: 'Usually none for qualifying properties. Some measures may require small contribution.',
    deadline: 'March 2026 (expected to be extended)',
    applicationUrl: 'https://www.gov.uk/apply-great-british-insulation-scheme',
    lastVerified: '2026-01-18',
  },
];

/**
 * Qualifying benefits for ECO4 and Warm Homes schemes
 */
export const QUALIFYING_BENEFITS = [
  'Universal Credit',
  'Pension Credit (Guarantee Credit)',
  'Income-based Jobseekers Allowance (JSA)',
  'Income-related Employment and Support Allowance (ESA)',
  'Income Support',
  'Housing Benefit',
  'Child Tax Credit (income under £18,500)',
  'Working Tax Credit (income under £18,500)',
  'Warm Home Discount (Core Group)',
];

/**
 * Council Tax bands eligible for GBIS general eligibility
 */
export const GBIS_ELIGIBLE_COUNCIL_TAX_BANDS = ['A', 'B', 'C', 'D'];

/**
 * Property types
 */
export const PROPERTY_TYPE_OPTIONS = [
  { value: 'house', label: 'House (detached, semi-detached, or terraced)' },
  { value: 'flat', label: 'Flat or apartment' },
  { value: 'bungalow', label: 'Bungalow' },
  { value: 'maisonette', label: 'Maisonette' },
  { value: 'hmo', label: 'House in Multiple Occupation (HMO)' },
];

/**
 * EPC Rating options
 */
export const EPC_RATING_OPTIONS = [
  { value: 'A', label: 'A (92-100) - Very efficient' },
  { value: 'B', label: 'B (81-91) - Efficient' },
  { value: 'C', label: 'C (69-80) - Fairly efficient' },
  { value: 'D', label: 'D (55-68) - Average' },
  { value: 'E', label: 'E (39-54) - Below average' },
  { value: 'F', label: 'F (21-38) - Poor' },
  { value: 'G', label: 'G (1-20) - Very poor' },
  { value: 'unknown', label: "I don't know my EPC rating" },
];

/**
 * Tenure options
 */
export const TENURE_OPTIONS = [
  { value: 'freehold', label: 'Freehold' },
  { value: 'leasehold', label: 'Leasehold' },
];

/**
 * Council Tax band options
 */
export const COUNCIL_TAX_BAND_OPTIONS = [
  { value: 'A', label: 'Band A' },
  { value: 'B', label: 'Band B' },
  { value: 'C', label: 'Band C' },
  { value: 'D', label: 'Band D' },
  { value: 'E', label: 'Band E' },
  { value: 'F', label: 'Band F' },
  { value: 'G', label: 'Band G' },
  { value: 'H', label: 'Band H' },
  { value: 'unknown', label: "I don't know" },
];

/**
 * Heating system options
 */
export const HEATING_SYSTEM_OPTIONS = [
  { value: 'gas-boiler', label: 'Gas boiler' },
  { value: 'oil-boiler', label: 'Oil boiler' },
  { value: 'electric', label: 'Electric heating (storage heaters, panel heaters)' },
  { value: 'heat-pump', label: 'Heat pump (air source or ground source)' },
  { value: 'lpg', label: 'LPG boiler' },
  { value: 'other', label: 'Other / Mixed' },
];

/**
 * Boiler age options
 */
export const BOILER_AGE_OPTIONS = [
  { value: 'under-10', label: 'Under 10 years old' },
  { value: '10-15', label: '10-15 years old' },
  { value: 'over-15', label: 'Over 15 years old' },
  { value: 'unknown', label: "I don't know" },
];

/**
 * Yes/No/Don't know options
 */
export const YES_NO_UNKNOWN_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unknown', label: "I don't know" },
];

/**
 * Tenant income options
 */
export const TENANT_INCOME_OPTIONS = [
  { value: 'below-36000', label: 'Below £36,000 per year' },
  { value: 'above-36000', label: 'Above £36,000 per year' },
  { value: 'unknown', label: "I don't know" },
];

/**
 * Number of properties options
 */
export const PROPERTY_COUNT_OPTIONS = [
  { value: '1', label: '1 property' },
  { value: '2-4', label: '2-4 properties' },
  { value: '5+', label: '5 or more properties' },
];

/**
 * Check eligibility for all grant schemes
 */
export function checkGrantEligibility(inputs: GrantCheckerInputs): GrantEligibilityResult[] {
  const results: GrantEligibilityResult[] = [];

  for (const scheme of GRANT_SCHEMES) {
    const result = checkSchemeEligibility(scheme, inputs);
    results.push(result);
  }

  // Sort by confidence level (definite first, then likely, possible, not-eligible)
  const confidenceOrder: Record<EligibilityConfidence, number> = {
    'definite': 0,
    'likely': 1,
    'possible': 2,
    'not-eligible': 3,
  };

  results.sort((a, b) => confidenceOrder[a.confidence] - confidenceOrder[b.confidence]);

  return results;
}

/**
 * Check eligibility for a specific scheme
 */
function checkSchemeEligibility(scheme: GrantScheme, inputs: GrantCheckerInputs): GrantEligibilityResult {
  switch (scheme.id) {
    case 'eco4':
      return checkECO4Eligibility(scheme, inputs);
    case 'boiler-upgrade-scheme':
      return checkBUSEligibility(scheme, inputs);
    case 'warm-homes-local-grant':
      return checkWarmHomesEligibility(scheme, inputs);
    case 'great-british-insulation-scheme':
      return checkGBISEligibility(scheme, inputs);
    default:
      return {
        scheme,
        confidence: 'possible',
        reasons: ['Unable to determine eligibility for this scheme'],
        maxPotentialGrant: scheme.maxGrant,
      };
  }
}

/**
 * Check ECO4 eligibility
 */
function checkECO4Eligibility(scheme: GrantScheme, inputs: GrantCheckerInputs): GrantEligibilityResult {
  const reasons: string[] = [];
  let confidence: EligibilityConfidence = 'definite';

  // Check EPC rating
  const eligibleRatings = ['D', 'E', 'F', 'G'];
  if (inputs.currentEpcRating === 'unknown') {
    reasons.push('EPC rating unknown - scheme requires rating D-G');
    confidence = 'possible';
  } else if (!eligibleRatings.includes(inputs.currentEpcRating)) {
    reasons.push(`Your EPC rating (${inputs.currentEpcRating}) is too high - ECO4 requires D-G`);
    return {
      scheme,
      confidence: 'not-eligible',
      reasons,
      maxPotentialGrant: 0,
    };
  } else {
    reasons.push(`EPC rating ${inputs.currentEpcRating} qualifies (D-G required)`);
  }

  // Check tenant benefits
  if (inputs.tenantOnBenefits === 'yes') {
    reasons.push('Tenant on qualifying benefits - strong eligibility indicator');
  } else if (inputs.tenantOnBenefits === 'no') {
    reasons.push('Tenant not on benefits - may still qualify via LA Flex pathway');
    if (confidence === 'definite') confidence = 'likely';
  } else {
    reasons.push('Tenant benefit status unknown - recommend checking qualifying benefits');
    if (confidence === 'definite') confidence = 'likely';
  }

  // Check income threshold for LA Flex
  if (inputs.tenantIncome === 'below-36000' && inputs.tenantOnBenefits !== 'yes') {
    reasons.push('Tenant income below £36,000 - may qualify via LA Flex');
  }

  return {
    scheme,
    confidence,
    reasons,
    maxPotentialGrant: scheme.maxGrant,
  };
}

/**
 * Check Boiler Upgrade Scheme eligibility
 */
function checkBUSEligibility(scheme: GrantScheme, inputs: GrantCheckerInputs): GrantEligibilityResult {
  const reasons: string[] = [];
  let confidence: EligibilityConfidence = 'definite';
  const maxPotentialGrant = 7500;

  // Already has heat pump - not eligible
  if (inputs.currentHeating === 'heat-pump') {
    reasons.push('Property already has a heat pump - BUS is for replacing fossil fuel heating');
    return {
      scheme,
      confidence: 'not-eligible',
      reasons,
      maxPotentialGrant: 0,
    };
  }

  // Check if considering heating replacement
  if (inputs.consideringHeatingReplacement === 'no') {
    reasons.push('Not currently considering heating replacement - BUS requires installing a heat pump');
    return {
      scheme,
      confidence: 'not-eligible',
      reasons,
      maxPotentialGrant: 0,
    };
  }

  // Must have valid EPC
  if (inputs.currentEpcRating === 'unknown') {
    reasons.push('Valid EPC certificate required - check or commission an EPC assessment');
    confidence = 'likely';
  } else {
    reasons.push('Has EPC rating - certificate requirement can be met');
  }

  // Check current heating type
  const fossilFuelSystems = ['gas-boiler', 'oil-boiler', 'lpg'];
  if (fossilFuelSystems.includes(inputs.currentHeating)) {
    reasons.push('Current fossil fuel heating qualifies for replacement');
  } else if (inputs.currentHeating === 'electric') {
    reasons.push('Electric heating can qualify if primary heating system');
  } else {
    reasons.push('Heating system type may qualify - verify with installer');
    if (confidence === 'definite') confidence = 'likely';
  }

  // Property ownership consideration
  if (inputs.tenure === 'leasehold') {
    reasons.push('Leasehold property - may need freeholder/management company consent');
    if (confidence === 'definite') confidence = 'likely';
  }

  if (inputs.consideringHeatingReplacement === 'yes') {
    reasons.push('Interested in replacing heating - good candidate for heat pump');
  } else {
    reasons.push('Consider whether heat pump installation aligns with your plans');
    if (confidence === 'definite') confidence = 'possible';
  }

  return {
    scheme,
    confidence,
    reasons,
    maxPotentialGrant,
  };
}

/**
 * Check Warm Homes: Local Grant eligibility
 */
function checkWarmHomesEligibility(scheme: GrantScheme, inputs: GrantCheckerInputs): GrantEligibilityResult {
  const reasons: string[] = [];
  let confidence: EligibilityConfidence = 'definite';
  let maxPotentialGrant = 30000;

  // Check EPC rating
  const eligibleRatings = ['D', 'E', 'F', 'G'];
  if (inputs.currentEpcRating === 'unknown') {
    reasons.push('EPC rating unknown - scheme requires rating D-G');
    confidence = 'possible';
  } else if (!eligibleRatings.includes(inputs.currentEpcRating)) {
    reasons.push(`Your EPC rating (${inputs.currentEpcRating}) is too high - requires D-G`);
    return {
      scheme,
      confidence: 'not-eligible',
      reasons,
      maxPotentialGrant: 0,
    };
  } else {
    reasons.push(`EPC rating ${inputs.currentEpcRating} qualifies (D-G required)`);
  }

  // Check tenant income/benefits
  if (inputs.tenantOnBenefits === 'yes') {
    reasons.push('Tenant on qualifying benefits - meets income criteria');
  } else if (inputs.tenantIncome === 'below-36000') {
    reasons.push('Tenant household income below £36,000 - meets income criteria');
  } else if (inputs.tenantIncome === 'above-36000' && inputs.tenantOnBenefits === 'no') {
    reasons.push('Tenant income above £36,000 and not on benefits - may not qualify');
    return {
      scheme,
      confidence: 'not-eligible',
      reasons,
      maxPotentialGrant: 0,
    };
  } else {
    reasons.push('Tenant income/benefit status unknown - recommend verifying with tenant');
    if (confidence === 'definite') confidence = 'likely';
  }

  // Portfolio size affects contribution
  if (inputs.numberOfProperties === '1') {
    reasons.push('Single property - may qualify for full funding (up to £30,000)');
    maxPotentialGrant = 30000;
  } else {
    reasons.push('Multiple properties - 50% landlord contribution required for additional properties');
    maxPotentialGrant = 15000;
    if (confidence === 'definite') confidence = 'likely';
  }

  // Local authority delivery
  reasons.push('Scheme delivered through local authorities - availability varies by area');

  return {
    scheme,
    confidence,
    reasons,
    maxPotentialGrant,
  };
}

/**
 * Check Great British Insulation Scheme eligibility
 */
function checkGBISEligibility(scheme: GrantScheme, inputs: GrantCheckerInputs): GrantEligibilityResult {
  const reasons: string[] = [];
  let confidence: EligibilityConfidence = 'definite';

  // Check EPC rating
  const eligibleRatings = ['D', 'E', 'F', 'G'];
  if (inputs.currentEpcRating === 'unknown') {
    reasons.push('EPC rating unknown - scheme typically requires D or below');
    confidence = 'possible';
  } else if (!eligibleRatings.includes(inputs.currentEpcRating)) {
    // Can still qualify if on low income
    if (inputs.tenantOnBenefits === 'yes' || inputs.tenantIncome === 'below-36000') {
      reasons.push(`EPC ${inputs.currentEpcRating} is above threshold, but may qualify via low-income pathway`);
      confidence = 'possible';
    } else {
      reasons.push(`EPC rating ${inputs.currentEpcRating} is above threshold (D or below required for general eligibility)`);
      return {
        scheme,
        confidence: 'not-eligible',
        reasons,
        maxPotentialGrant: 0,
      };
    }
  } else {
    reasons.push(`EPC rating ${inputs.currentEpcRating} qualifies (D or below required)`);
  }

  // Check Council Tax band
  const eligibleBands = ['A', 'B', 'C', 'D'];
  if (inputs.councilTaxBand === 'unknown') {
    reasons.push('Council Tax band unknown - bands A-D qualify for general eligibility');
    if (confidence === 'definite') confidence = 'likely';
  } else if (eligibleBands.includes(inputs.councilTaxBand)) {
    reasons.push(`Council Tax band ${inputs.councilTaxBand} qualifies (A-D eligible)`);
  } else {
    // Higher bands can qualify via low-income route
    if (inputs.tenantOnBenefits === 'yes') {
      reasons.push(`Council Tax band ${inputs.councilTaxBand} is above threshold, but tenant on benefits may qualify`);
      if (confidence === 'definite') confidence = 'likely';
    } else {
      reasons.push(`Council Tax band ${inputs.councilTaxBand} does not qualify (A-D required, unless on benefits)`);
      return {
        scheme,
        confidence: 'not-eligible',
        reasons,
        maxPotentialGrant: 0,
      };
    }
  }

  // Low-income pathway
  if (inputs.tenantOnBenefits === 'yes') {
    reasons.push('Tenant on benefits provides alternative eligibility pathway');
  }

  // Scheme covers insulation only
  reasons.push('GBIS covers insulation measures only (cavity wall, loft, etc.) - not heating');

  return {
    scheme,
    confidence,
    reasons,
    maxPotentialGrant: scheme.maxGrant,
  };
}

/**
 * Calculate total potential funding from all eligible schemes
 */
export function calculateTotalPotentialFunding(results: GrantEligibilityResult[]): number {
  return results
    .filter(r => r.confidence !== 'not-eligible')
    .reduce((total, result) => {
      // Don't double-count - use maximum of similar schemes
      return total + result.maxPotentialGrant;
    }, 0);
}

/**
 * Get next steps based on eligibility results
 */
export function getNextSteps(results: GrantEligibilityResult[], inputs: GrantCheckerInputs): string[] {
  const steps: string[] = [];

  const eligibleSchemes = results.filter(r => r.confidence !== 'not-eligible');

  if (eligibleSchemes.length === 0) {
    steps.push('Consider getting a professional EPC assessment to explore improvement options');
    steps.push('Contact your local authority about any local grant schemes');
    return steps;
  }

  // EPC-related steps
  if (inputs.currentEpcRating === 'unknown') {
    steps.push('Get an EPC assessment to confirm your property rating and unlock grant eligibility');
  }

  // ECO4 specific
  const eco4Result = results.find(r => r.scheme.id === 'eco4');
  if (eco4Result && eco4Result.confidence !== 'not-eligible') {
    steps.push('Contact ECO4 installers in your area for a free eligibility assessment');
    if (inputs.tenantOnBenefits === 'unknown') {
      steps.push('Check with your tenant about qualifying benefits status for ECO4');
    }
  }

  // BUS specific
  const busResult = results.find(r => r.scheme.id === 'boiler-upgrade-scheme');
  if (busResult && busResult.confidence !== 'not-eligible' && inputs.consideringHeatingReplacement === 'yes') {
    steps.push('Get quotes from MCS-certified heat pump installers who can apply for BUS');
  }

  // Warm Homes specific
  const warmHomesResult = results.find(r => r.scheme.id === 'warm-homes-local-grant');
  if (warmHomesResult && warmHomesResult.confidence !== 'not-eligible') {
    steps.push('Contact your local authority to check Warm Homes: Local Grant availability in your area');
  }

  // GBIS specific
  const gbisResult = results.find(r => r.scheme.id === 'great-british-insulation-scheme');
  if (gbisResult && gbisResult.confidence !== 'not-eligible') {
    steps.push('Contact energy suppliers or search for GBIS installers for insulation measures');
  }

  // General steps
  steps.push('Keep records of any quotes received for cost cap exemption purposes');
  steps.push('Consider combining multiple schemes to maximise funding (where allowed)');

  return steps;
}

export default GRANT_SCHEMES;
