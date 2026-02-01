/**
 * Default images for the site - high-quality Unsplash stock photos
 * These are used when no generated image exists in localStorage
 */

export const DEFAULT_IMAGES: Record<string, string> = {
  // ============================================
  // AI-GENERATED IMAGES (from KIE AI)
  // Note: These are from tempfile.aiquickdraw.com - may need to migrate to permanent storage
  // ============================================

  // Homepage
  'homepage-hero-landlord': 'https://tempfile.aiquickdraw.com/images/1769942554802-5d2i0o98mo.png',

  // Property Types - AI Generated
  '1930s-semi-exterior': 'https://tempfile.aiquickdraw.com/images/1769944346395-ibpefqhvfoi.png',
  'purpose-built-flat-exterior': 'https://tempfile.aiquickdraw.com/images/1769944403098-h34keghqu8e.png',
  'edwardian-house-cross-section': 'https://tempfile.aiquickdraw.com/images/1769944910099-7j6u1sk8fb.png',
  '1950s-house-wall-comparison': 'https://tempfile.aiquickdraw.com/images/1769944634147-05ryol0u2637.png',

  // Costs - AI Generated
  'costs-overview-hero': 'https://tempfile.aiquickdraw.com/images/1769945057843-6eb0e53nw1.png',
  'cheapest-improvements-hero': 'https://tempfile.aiquickdraw.com/images/1769941580751-jinvre718g.png',
  'eco4-landlords-hero': 'https://tempfile.aiquickdraw.com/images/1769945059750-ou3eno9v2qk.png',
  'boiler-upgrade-scheme-hero': 'https://tempfile.aiquickdraw.com/images/1769945079381-xbz6u4hjpt.png',

  // ============================================
  // FALLBACK IMAGES (Unsplash) - for images not yet generated
  // ============================================

  // Property Types - Fallbacks
  'victorian-terrace-hero': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80',
  'victorian-terrace-wall-cross-section': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=400&fit=crop&q=80',
  'victorian-terrace-iwi-before-after': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=700&h=400&fit=crop&q=80',
  'victorian-terrace-epc-comparison': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=400&fit=crop&q=80',

  '1930s-semi-cavity-wall-insulation': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=400&fit=crop&q=80',
  '1930s-semi-epc-journey-infographic': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=400&fit=crop&q=80',

  '1950s-house-exterior': 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=500&fit=crop&q=80',
  '1950s-house-wall-measurement': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=700&h=400&fit=crop&q=80',
  '1950s-house-epc-comparison': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=400&fit=crop&q=80',

  '1960s-1970s-house-exterior': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop&q=80',
  '1960s-1970s-house-cavity-wall-cross-section': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=400&fit=crop&q=80',
  '1960s-1970s-house-epc-comparison': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=400&fit=crop&q=80',

  '1980s-1990s-house-exterior': 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=500&fit=crop&q=80',

  'purpose-built-flat-secondary-glazing': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=400&fit=crop&q=80',
  'purpose-built-flat-improvement-options': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=700&h=400&fit=crop&q=80',

  'converted-flat-exterior': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80',
  'converted-flat-cross-section': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=400&fit=crop&q=80',
  'converted-flat-epc-comparison': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=400&fit=crop&q=80',

  'edwardian-house-exterior': 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=500&fit=crop&q=80',

  'hmo-property-exterior': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80',

  'pre-1919-semi-exterior': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80',
  'pre-1919-semi-heat-loss-comparison': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=400&fit=crop&q=80',

  'property-types-hero-grid': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&q=80',

  // Regulations - Fallbacks
  'regulations-overview-timeline': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=400&fit=crop&q=80',
  'regulations-rdsap-comparison': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=400&fit=crop&q=80',
  'epc-c-2030-deadline-hero': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80',
  'mees-guide-hero': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80',
  'cost-cap-exemptions-hero': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80',
  'rdsap-10-changes-hero': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=500&fit=crop&q=80',
  'warm-homes-plan-hero': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&q=80',

  // Costs - Fallbacks
  'costs-property-types-comparison': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=400&fit=crop&q=80',
  'costs-effective-improvements': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=700&h=400&fit=crop&q=80',
  'd-to-c-upgrade-hero': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80',
  'd-to-c-upgrade-journey': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=400&fit=crop&q=80',
  'd-to-c-upgrade-loft-insulation': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=400&fit=crop&q=80',
  'e-to-c-upgrade-hero': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80',
  'warm-homes-local-grant-hero': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&q=80',

  // Tools - Fallbacks
  'cost-calculator-hero': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80',
  'cost-calculator-planning': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=400&fit=crop&q=80',
  'exemption-checker-hero': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80',

  // Local Guides - Fallbacks
  'local-guides-uk-map': 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&h=500&fit=crop&q=80',
};

/**
 * Get default image URL for an image ID
 * Returns undefined if no default exists
 */
export function getDefaultImage(imageId: string): string | undefined {
  return DEFAULT_IMAGES[imageId];
}
