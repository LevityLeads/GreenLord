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
