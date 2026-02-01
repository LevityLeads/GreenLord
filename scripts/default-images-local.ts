/**
 * Default images for the site - locally stored AI-generated images
 * Copy this file to src/lib/default-images.ts after downloading images
 */

export const DEFAULT_IMAGES: Record<string, string> = {
  // ============================================
  // HOMEPAGE
  // ============================================
  'homepage-hero-landlord': '/images/generated/homepage-hero-landlord.png',
  'homepage-author-headshot': '/images/generated/homepage-author-headshot.png',

  // ============================================
  // PROPERTY TYPES
  // ============================================

  // Victorian Terrace
  'victorian-terrace-hero': '/images/generated/victorian-terrace-hero.png',
  'victorian-terrace-wall-cross-section': '/images/generated/victorian-terrace-wall-cross-section.png',
  'victorian-terrace-epc-comparison': '/images/generated/victorian-terrace-epc-comparison.png',

  // 1930s Semi
  '1930s-semi-exterior': '/images/generated/1930s-semi-exterior.png',
  '1930s-semi-cavity-wall-insulation': '/images/generated/1930s-semi-cavity-wall-insulation.png',
  '1930s-semi-epc-journey-infographic': '/images/generated/1930s-semi-epc-journey-infographic.png',

  // 1950s House
  '1950s-house-exterior': '/images/generated/1950s-house-exterior.png',
  '1950s-house-wall-measurement': '/images/generated/1950s-house-wall-measurement.png',
  '1950s-house-wall-comparison': '/images/generated/1950s-house-wall-comparison.png',
  '1950s-house-epc-comparison': '/images/generated/1950s-house-epc-comparison.png',

  // 1960s-1970s House
  '1960s-1970s-house-exterior': '/images/generated/1960s-1970s-house-exterior.png',
  '1960s-1970s-house-cavity-wall-cross-section': '/images/generated/1960s-1970s-house-cavity-wall-cross-section.png',
  '1960s-1970s-house-epc-comparison': '/images/generated/1960s-1970s-house-epc-comparison.png',

  // 1980s-1990s House
  '1980s-1990s-house-exterior': '/images/generated/1980s-1990s-house-exterior.png',

  // Purpose-Built Flat
  'purpose-built-flat-exterior': '/images/generated/purpose-built-flat-exterior.png',
  'purpose-built-flat-secondary-glazing': '/images/generated/purpose-built-flat-secondary-glazing.png',
  'purpose-built-flat-improvement-options': '/images/generated/purpose-built-flat-improvement-options.png',

  // Converted Flat
  'converted-flat-exterior': '/images/generated/converted-flat-exterior.png',
  'converted-flat-cross-section': '/images/generated/converted-flat-cross-section.png',
  'converted-flat-epc-comparison': '/images/generated/converted-flat-epc-comparison.png',

  // Edwardian House
  'edwardian-house-exterior': '/images/generated/edwardian-house-exterior.png',
  'edwardian-house-cross-section': '/images/generated/edwardian-house-cross-section.png',

  // HMO
  'hmo-property-exterior': '/images/generated/hmo-property-exterior.png',

  // Pre-1919 Semi
  'pre-1919-semi-exterior': '/images/generated/pre-1919-semi-exterior.png',
  'pre-1919-semi-heat-loss-comparison': '/images/generated/pre-1919-semi-heat-loss-comparison.png',

  // ============================================
  // REGULATIONS
  // ============================================
  'epc-c-2030-deadline-hero': '/images/generated/epc-c-2030-deadline-hero.png',
  'mees-guide-hero': '/images/generated/mees-guide-hero.png',
  'cost-cap-exemptions-hero': '/images/generated/cost-cap-exemptions-hero.png',
  'rdsap-10-changes-hero': '/images/generated/rdsap-10-changes-hero.png',
  'warm-homes-plan-hero': '/images/generated/warm-homes-plan-hero.png',

  // ============================================
  // COSTS & FUNDING
  // ============================================
  'costs-overview-hero': '/images/generated/costs-overview-hero.png',
  'costs-property-types-comparison': '/images/generated/costs-property-types-comparison.png',
  'costs-effective-improvements': '/images/generated/costs-effective-improvements.png',
  'cheapest-improvements-hero': '/images/generated/cheapest-improvements-hero.png',
  'd-to-c-upgrade-hero': '/images/generated/d-to-c-upgrade-hero.png',
  'd-to-c-upgrade-journey': '/images/generated/d-to-c-upgrade-journey.png',
  'd-to-c-upgrade-loft-insulation': '/images/generated/d-to-c-upgrade-loft-insulation.png',
  'e-to-c-upgrade-hero': '/images/generated/e-to-c-upgrade-hero.png',
  'eco4-landlords-hero': '/images/generated/eco4-landlords-hero.png',
  'boiler-upgrade-scheme-hero': '/images/generated/boiler-upgrade-scheme-hero.png',
  'warm-homes-local-grant-hero': '/images/generated/warm-homes-local-grant-hero.png',

  // ============================================
  // TOOLS
  // ============================================
  'cost-calculator-hero': '/images/generated/cost-calculator-hero.png',
  'cost-calculator-planning': '/images/generated/cost-calculator-planning.png',
  'exemption-checker-hero': '/images/generated/exemption-checker-hero.png',

  // ============================================
  // FALLBACK IMAGES (Unsplash) - for images not yet generated
  // ============================================
  'victorian-terrace-iwi-before-after': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=700&h=400&fit=crop&q=80',
  'property-types-hero-grid': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&q=80',
  'regulations-overview-timeline': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=400&fit=crop&q=80',
  'regulations-rdsap-comparison': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=400&fit=crop&q=80',
  'local-guides-uk-map': 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&h=500&fit=crop&q=80',
};

/**
 * Get default image URL for an image ID
 * Returns undefined if no default exists
 */
export function getDefaultImage(imageId: string): string | undefined {
  return DEFAULT_IMAGES[imageId];
}
