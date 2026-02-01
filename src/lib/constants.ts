import type { NavItem, PropertyType, Region, EPCRating } from './types';

// Site metadata
export const SITE_CONFIG = {
  name: 'GreenLord',
  tagline: 'UK Landlord EPC Compliance Made Simple',
  description:
    'The authoritative resource for UK private landlords navigating EPC compliance requirements. Clear guidance, interactive tools, and property-specific recommendations.',
  url: 'https://greenlord.co.uk',
};

// Key dates
export const KEY_DATES = {
  epcDeadline: '2030-10-01',
  rdsap10Launch: '2025-06-01',
  warmHomesPlanAnnouncement: '2026-01-21',
  costCap: 10000,
  maxPenalty: 30000,
  exemptionDuration: 5,
};

// Navigation structure matching PRD
export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: 'Regulations',
    href: '/regulations',
    description: 'Understand EPC requirements and deadlines',
    children: [
      { label: 'EPC C 2030 Deadline Explained', href: '/regulations/epc-c-2030-deadline' },
      { label: 'MEES Regulations Complete Guide', href: '/regulations/mees-regulations-guide' },
      { label: 'Cost Cap and Exemptions', href: '/regulations/cost-cap-exemptions' },
      { label: 'RdSAP 10 Changes Explained', href: '/regulations/rdsap-10-changes' },
      { label: 'Warm Homes Plan Summary', href: '/regulations/warm-homes-plan' },
    ],
  },
  {
    label: 'Property Guides',
    href: '/property-types',
    description: 'Upgrade guides by property type',
    children: [
      { label: 'Victorian Terrace (pre-1919)', href: '/property-types/victorian-terrace' },
      { label: '1930s Semi-Detached', href: '/property-types/1930s-semi' },
      { label: 'Purpose-Built Flat', href: '/property-types/purpose-built-flat' },
      { label: '1960s-1970s House', href: '/property-types/1960s-1970s-house' },
      { label: '1950s House', href: '/property-types/1950s-house' },
      { label: 'Converted Flat', href: '/property-types/converted-flat' },
      { label: 'Edwardian House', href: '/property-types/edwardian-house' },
      { label: '1980s-1990s House', href: '/property-types/1980s-1990s-house' },
      { label: 'HMO', href: '/property-types/hmo' },
      { label: 'Pre-1919 Semi-Detached', href: '/property-types/pre-1919-semi' },
    ],
  },
  {
    label: 'Local Guides',
    href: '/local-guides',
    description: 'City-specific EPC compliance guides',
    children: [
      { label: 'Manchester', href: '/local-guides/manchester' },
      { label: 'Birmingham', href: '/local-guides/birmingham' },
      { label: 'Leeds', href: '/local-guides/leeds' },
      { label: 'Liverpool', href: '/local-guides/liverpool' },
      { label: 'Bristol', href: '/local-guides/bristol' },
      { label: 'Sheffield', href: '/local-guides/sheffield' },
      { label: 'Newcastle', href: '/local-guides/newcastle' },
      { label: 'Nottingham', href: '/local-guides/nottingham' },
      { label: 'Leicester', href: '/local-guides/leicester' },
      { label: 'Hackney', href: '/local-guides/hackney' },
    ],
  },
  {
    label: 'Costs & Funding',
    href: '/costs',
    description: 'Cost estimates and grant information',
    children: [
      { label: 'Complete Upgrade Cost Guide', href: '/costs' },
      { label: 'D to C Upgrade Costs', href: '/costs/d-to-c-upgrade' },
      { label: 'E to C Upgrade Costs', href: '/costs/e-to-c-upgrade' },
      { label: 'Cheapest Improvements Ranked', href: '/costs/cheapest-improvements' },
      { label: 'ECO4 for Landlords', href: '/costs/eco4-landlords' },
      { label: 'Boiler Upgrade Scheme', href: '/costs/boiler-upgrade-scheme' },
      { label: 'Warm Homes Local Grant', href: '/costs/warm-homes-local-grant' },
    ],
  },
  {
    label: 'Tools',
    href: '/tools',
    description: 'Interactive calculators and planners',
    children: [
      { label: 'Upgrade Cost Calculator', href: '/tools/cost-calculator' },
      { label: 'Grant Eligibility Checker', href: '/tools/grant-checker' },
      { label: 'Exemption Pathway Tool', href: '/tools/exemption-checker' },
      { label: 'EPC Analyser', href: '/tools/epc-analyser' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    description: 'FAQs, glossary, and more',
    children: [
      { label: 'FAQ', href: '/resources/faq' },
      { label: 'Glossary', href: '/resources/glossary' },
    ],
  },
];

// Property type options for forms
export const PROPERTY_TYPE_OPTIONS: { value: PropertyType; label: string }[] = [
  { value: 'victorian-terrace', label: 'Victorian Terrace (pre-1919)' },
  { value: 'edwardian-1920s', label: 'Edwardian and 1920s Property' },
  { value: '1930s-semi', label: '1930s Semi-Detached' },
  { value: '1950s-1960s', label: '1950s and 1960s Property' },
  { value: '1970s-1980s', label: '1970s and 1980s Property' },
  { value: '1990s-later', label: '1990s and Later New Build' },
  { value: 'purpose-built-flat', label: 'Purpose-Built Flat' },
  { value: 'converted-flat', label: 'Converted Flat' },
  { value: 'hmo', label: 'House in Multiple Occupation (HMO)' },
];

// Region options for forms
export const REGION_OPTIONS: { value: Region; label: string }[] = [
  { value: 'london', label: 'London' },
  { value: 'south-east', label: 'South East England' },
  { value: 'south-west', label: 'South West England' },
  { value: 'east-anglia', label: 'East Anglia' },
  { value: 'east-midlands', label: 'East Midlands' },
  { value: 'west-midlands', label: 'West Midlands' },
  { value: 'north-west', label: 'North West England' },
  { value: 'north-east', label: 'North East England' },
  { value: 'yorkshire', label: 'Yorkshire and the Humber' },
  { value: 'wales', label: 'Wales' },
  { value: 'scotland', label: 'Scotland' },
  { value: 'northern-ireland', label: 'Northern Ireland' },
];

// EPC rating options
export const EPC_RATING_OPTIONS: { value: EPCRating | 'unknown'; label: string }[] = [
  { value: 'A', label: 'A (92-100)' },
  { value: 'B', label: 'B (81-91)' },
  { value: 'C', label: 'C (69-80)' },
  { value: 'D', label: 'D (55-68)' },
  { value: 'E', label: 'E (39-54)' },
  { value: 'F', label: 'F (21-38)' },
  { value: 'G', label: 'G (1-20)' },
  { value: 'unknown', label: "I don't know" },
];

// Wall construction options
export const WALL_CONSTRUCTION_OPTIONS = [
  { value: 'solid', label: 'Solid walls (typically pre-1930)' },
  { value: 'cavity', label: 'Cavity walls (typically post-1930)' },
  { value: 'mixed', label: 'Mixed construction' },
  { value: 'unknown', label: "Don't know" },
];

// Heating system options
export const HEATING_SYSTEM_OPTIONS = [
  { value: 'gas-boiler', label: 'Gas boiler' },
  { value: 'electric', label: 'Electric heating' },
  { value: 'oil-boiler', label: 'Oil boiler' },
  { value: 'heat-pump', label: 'Heat pump' },
  { value: 'other', label: 'Other' },
];

// Loft insulation options
export const LOFT_INSULATION_OPTIONS = [
  { value: 'none', label: 'No insulation' },
  { value: 'under-100mm', label: 'Under 100mm' },
  { value: '100-270mm', label: '100-270mm' },
  { value: 'over-270mm', label: 'Over 270mm (recommended level)' },
  { value: 'no-loft', label: 'No loft / Not applicable' },
  { value: 'unknown', label: "Don't know" },
];

// Glazing options
export const GLAZING_OPTIONS = [
  { value: 'single', label: 'Single glazing' },
  { value: 'double', label: 'Double glazing' },
  { value: 'triple', label: 'Triple glazing' },
  { value: 'mixed', label: 'Mixed (some single, some double)' },
  { value: 'unknown', label: "Don't know" },
];

// Bedroom options
export const BEDROOM_OPTIONS = [
  { value: 1, label: '1 bedroom' },
  { value: 2, label: '2 bedrooms' },
  { value: 3, label: '3 bedrooms' },
  { value: 4, label: '4 bedrooms' },
  { value: 5, label: '5 bedrooms' },
  { value: 6, label: '6+ bedrooms' },
];

// Footer links
export const FOOTER_LINKS = {
  regulations: [
    { label: 'EPC C 2030 Deadline', href: '/regulations/epc-c-2030-deadline' },
    { label: 'MEES Regulations', href: '/regulations/mees-regulations-guide' },
    { label: 'Cost Cap & Exemptions', href: '/regulations/cost-cap-exemptions' },
    { label: 'RdSAP 10 Changes', href: '/regulations/rdsap-10-changes' },
  ],
  propertyGuides: [
    { label: 'Victorian Terrace', href: '/property-types/victorian-terrace' },
    { label: '1930s Semi-Detached', href: '/property-types/1930s-semi' },
    { label: 'Purpose-Built Flat', href: '/property-types/purpose-built-flat' },
    { label: '1960s-1970s House', href: '/property-types/1960s-1970s-house' },
    { label: '1950s House', href: '/property-types/1950s-house' },
    { label: 'Converted Flat', href: '/property-types/converted-flat' },
    { label: 'Edwardian House', href: '/property-types/edwardian-house' },
    { label: '1980s-1990s House', href: '/property-types/1980s-1990s-house' },
    { label: 'HMO', href: '/property-types/hmo' },
    { label: 'Pre-1919 Semi-Detached', href: '/property-types/pre-1919-semi' },
  ],
  localGuides: [
    { label: 'Manchester', href: '/local-guides/manchester' },
    { label: 'Birmingham', href: '/local-guides/birmingham' },
    { label: 'Leeds', href: '/local-guides/leeds' },
    { label: 'Liverpool', href: '/local-guides/liverpool' },
    { label: 'Bristol', href: '/local-guides/bristol' },
    { label: 'Sheffield', href: '/local-guides/sheffield' },
    { label: 'Newcastle', href: '/local-guides/newcastle' },
    { label: 'Nottingham', href: '/local-guides/nottingham' },
    { label: 'Leicester', href: '/local-guides/leicester' },
    { label: 'Hackney', href: '/local-guides/hackney' },
  ],
  costsAndFunding: [
    { label: 'Upgrade Cost Guide', href: '/costs' },
    { label: 'E to C Upgrade Costs', href: '/costs/e-to-c-upgrade' },
    { label: 'Cheapest Improvements', href: '/costs/cheapest-improvements' },
    { label: 'ECO4 for Landlords', href: '/costs/eco4-landlords' },
    { label: 'Boiler Upgrade Scheme', href: '/costs/boiler-upgrade-scheme' },
    { label: 'Warm Homes Local Grant', href: '/costs/warm-homes-local-grant' },
  ],
  tools: [
    { label: 'Upgrade Cost Calculator', href: '/tools/cost-calculator' },
    { label: 'Grant Eligibility Checker', href: '/tools/grant-checker' },
    { label: 'Exemption Pathway Tool', href: '/tools/exemption-checker' },
    { label: 'EPC Analyser', href: '/tools/epc-analyser' },
  ],
  resources: [
    { label: 'FAQ', href: '/resources/faq' },
    { label: 'Glossary', href: '/resources/glossary' },
  ],
};

// Social links (placeholders)
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/greenlord',
  linkedin: 'https://linkedin.com/company/greenlord',
};
