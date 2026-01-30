// Core types for the GreenLord platform

export type EPCRating = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type PropertyType =
  | 'victorian-terrace'
  | 'edwardian-1920s'
  | '1930s-semi'
  | '1950s-1960s'
  | '1970s-1980s'
  | '1990s-later'
  | 'purpose-built-flat'
  | 'converted-flat'
  | 'hmo';

export type WallConstruction = 'solid' | 'cavity' | 'mixed' | 'unknown';

export type HeatingSystem = 'gas-boiler' | 'electric' | 'oil-boiler' | 'heat-pump' | 'other';

export type LoftInsulation = 'none' | 'under-100mm' | '100-270mm' | 'over-270mm' | 'no-loft' | 'unknown';

export type GlazingType = 'single' | 'double' | 'triple' | 'mixed' | 'unknown';

export type Region =
  | 'london'
  | 'south-east'
  | 'south-west'
  | 'east-anglia'
  | 'east-midlands'
  | 'west-midlands'
  | 'north-west'
  | 'north-east'
  | 'yorkshire'
  | 'wales'
  | 'scotland'
  | 'northern-ireland';

// Calculator types
export interface CalculatorInputs {
  currentRating: EPCRating | 'unknown';
  propertyType: PropertyType;
  bedrooms: number;
  wallConstruction: WallConstruction;
  heatingSystem: HeatingSystem;
  loftInsulation: LoftInsulation;
  glazingType: GlazingType;
  region: Region;
}

export interface ImprovementRecommendation {
  id: string;
  name: string;
  description: string;
  estimatedCostLow: number;
  estimatedCostHigh: number;
  estimatedEPCPoints: number;
  costPerPoint: number;
  priority: number;
  applicableTo: PropertyType[];
  notApplicableReasons?: Record<string, string>;
}

export interface CalculatorResults {
  totalCostLow: number;
  totalCostMid: number;
  totalCostHigh: number;
  recommendations: ImprovementRecommendation[];
  estimatedFinalRating: EPCRating;
  costCapExemptionLikely: boolean;
  propertyTypeGuideUrl: string;
}

// Content types
export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedDate: string;
  lastUpdated: string;
  author: string;
  pillar?: string;
  excerpt: string;
  readingTime: number;
}

export interface PropertyGuide extends Article {
  propertyType: PropertyType;
  typicalStartingEPC: EPCRating;
  commonIssues: string[];
  priorityUpgrades: string[];
  costRangeLow: number;
  costRangeHigh: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

// Form types for calculator
export interface FormStep {
  id: string;
  title: string;
  description: string;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    section: string;
  };
}

// Schema.org types
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  description: string;
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
}

// ============================================================
// GRANT ELIGIBILITY CHECKER TYPES
// ============================================================

/**
 * Eligibility confidence levels for grant scheme matching
 * - definite: All criteria clearly met based on provided inputs
 * - likely: Most criteria met, some assumptions made in user's favour
 * - possible: Some criteria may be met, user should verify
 * - ineligible: Criteria clearly not met
 */
export type EligibilityConfidence = 'definite' | 'likely' | 'possible' | 'ineligible';

/**
 * Tenure type for property ownership
 */
export type TenureType = 'freehold' | 'leasehold';

/**
 * Tenant benefit status for ECO4 eligibility
 */
export type TenantBenefitStatus = 'yes' | 'no' | 'unknown';

/**
 * Tenant income bracket for Warm Homes: Local eligibility
 */
export type TenantIncomeStatus = 'below-36000' | 'above-36000' | 'unknown';

/**
 * Geographic coverage for grant schemes
 */
export type GeographicCoverage = 'england' | 'wales' | 'scotland' | 'northern-ireland' | 'england-and-wales' | 'great-britain' | 'uk-wide';

/**
 * Type of grant scheme administrator
 */
export type SchemeAdministrator = 'government' | 'energy-supplier' | 'local-authority' | 'ofgem';

/**
 * Categories of improvements covered by grants
 */
export type GrantCoverageCategory =
  | 'insulation'
  | 'heating'
  | 'glazing'
  | 'renewable'
  | 'ventilation'
  | 'multiple';

/**
 * Local authority information for grant schemes
 */
export interface LocalAuthority {
  /** Unique identifier (lowercase, hyphenated) */
  id: string;
  /** Display name */
  name: string;
  /** Region for grouping */
  region: Region;
  /** Postcode prefixes covered by this authority */
  postcodeAreas: string[];
  /** Contact website URL */
  websiteUrl: string;
  /** Contact email if available */
  contactEmail?: string;
  /** Contact phone if available */
  contactPhone?: string;
}

/**
 * Eligibility criteria for a grant scheme
 */
export interface GrantEligibilityCriteria {
  /** EPC ratings that qualify (null = any rating) */
  epcRatings?: EPCRating[];
  /** Property types that qualify (null = any property type) */
  propertyTypes?: PropertyType[];
  /** Tenure types that qualify (null = any tenure) */
  tenureTypes?: TenureType[];
  /** Heating systems that qualify or are targeted for replacement (null = any) */
  heatingSystemsEligible?: HeatingSystem[];
  /** Heating systems that are excluded (e.g., already have heat pump) */
  heatingSystemsExcluded?: HeatingSystem[];
  /** Whether tenant must be on qualifying benefits */
  requiresTenantOnBenefits?: boolean;
  /** Whether tenant income threshold applies */
  tenantIncomeThreshold?: number;
  /** Geographic coverage */
  coverage: GeographicCoverage;
  /** Specific local authority IDs if council scheme */
  localAuthorityIds?: string[];
  /** Whether property must be owner-occupied or can be rented */
  allowsRentalProperties: boolean;
  /** Whether landlord must contribute */
  requiresLandlordContribution?: boolean;
  /** Landlord contribution percentage if required */
  landlordContributionPercent?: number;
  /** Additional eligibility notes */
  additionalNotes?: string[];
}

/**
 * A grant scheme with all associated data
 */
export interface GrantScheme {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** Short description */
  description: string;
  /** Detailed description for expanded view */
  detailedDescription?: string;
  /** Who administers the scheme */
  administrator: SchemeAdministrator;
  /** Administrator name for display */
  administratorName: string;
  /** Maximum grant value in GBP */
  maxGrantValue: number;
  /** Minimum grant value if applicable */
  minGrantValue?: number;
  /** What the grant covers */
  coverageCategories: GrantCoverageCategory[];
  /** Detailed list of what's covered */
  coveredImprovements: string[];
  /** What's specifically excluded */
  excludedImprovements?: string[];
  /** Eligibility criteria */
  eligibility: GrantEligibilityCriteria;
  /** Application URL */
  applicationUrl: string;
  /** Information URL for more details */
  infoUrl: string;
  /** Scheme start date */
  startDate: string;
  /** Scheme end date (null if ongoing) */
  endDate?: string;
  /** Whether scheme is currently active */
  isActive: boolean;
  /** Date this data was last verified */
  lastVerified: string;
  /** Source of the information */
  dataSource: string;
  /** Priority for display ordering (lower = higher priority) */
  displayPriority: number;
  /** Tags for filtering */
  tags: string[];
}

/**
 * User inputs for the grant eligibility checker
 */
export interface GrantEligibilityInputs {
  /** Full UK postcode */
  postcode: string;
  /** Property type */
  propertyType: PropertyType;
  /** Current EPC rating */
  currentEpcRating: EPCRating | 'unknown';
  /** Property tenure */
  tenure: TenureType;
  /** Current heating system */
  heatingSystem: HeatingSystem;
  /** Whether tenant receives qualifying benefits */
  tenantBenefitStatus?: TenantBenefitStatus;
  /** Tenant income bracket */
  tenantIncomeStatus?: TenantIncomeStatus;
}

/**
 * Result for a single grant scheme eligibility check
 */
export interface GrantEligibilityMatch {
  /** The grant scheme */
  scheme: GrantScheme;
  /** Eligibility confidence */
  confidence: EligibilityConfidence;
  /** Maximum potential grant value */
  potentialValue: number;
  /** Reasons for eligibility (what criteria are met) */
  eligibilityReasons: string[];
  /** Reasons for reduced confidence or ineligibility */
  ineligibilityReasons?: string[];
  /** Suggested next steps */
  nextSteps: string[];
  /** Whether landlord contribution is required */
  requiresContribution: boolean;
  /** Estimated landlord contribution if applicable */
  estimatedContribution?: number;
}

/**
 * Complete results from the grant eligibility checker
 */
export interface GrantEligibilityResult {
  /** User inputs used for the check */
  inputs: GrantEligibilityInputs;
  /** Local authority identified from postcode */
  localAuthority?: LocalAuthority;
  /** All grant matches (eligible schemes) */
  eligibleGrants: GrantEligibilityMatch[];
  /** Schemes user is definitely ineligible for with reasons */
  ineligibleGrants: GrantEligibilityMatch[];
  /** Total potential grant value across all eligible schemes */
  totalPotentialValue: number;
  /** Summary message for the user */
  summaryMessage: string;
  /** Timestamp of the check */
  checkedAt: string;
  /** Disclaimer text */
  disclaimer: string;
}
