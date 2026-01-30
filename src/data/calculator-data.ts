/**
 * Calculator Data for GreenLord EPC Upgrade Cost Calculator
 *
 * Cost data is based on UK averages from:
 * - Energy Saving Trust estimates (2025-2026)
 * - BEIS household energy efficiency statistics
 * - Industry surveys and installer quotes
 *
 * These are estimates only. Actual costs vary significantly based on:
 * - Property size and condition
 * - Local labour rates
 * - Specific product choices
 * - Access and installation complexity
 * - Current market conditions
 */

import type {
  PropertyType,
  WallConstruction,
  HeatingSystem,
  LoftInsulation,
  GlazingType,
} from '@/lib/types';

/**
 * Improvement definition with all associated data
 */
export interface ImprovementData {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** Detailed description */
  description: string;
  /** Category for grouping */
  category: 'insulation' | 'heating' | 'glazing' | 'controls' | 'renewable' | 'other';
  /** Minimum estimated cost in GBP */
  baseCostLow: number;
  /** Maximum estimated cost in GBP */
  baseCostHigh: number;
  /** Typical EPC points improvement (approximate) */
  typicalEPCPoints: number;
  /** Wall types this improvement applies to (null = all) */
  applicableWallTypes: WallConstruction[] | null;
  /** Property types this improvement applies to (null = all) */
  applicablePropertyTypes: PropertyType[] | null;
  /** Prerequisites for this improvement */
  prerequisites: {
    /** Required wall construction type */
    wallConstruction?: WallConstruction[];
    /** Current heating system */
    heatingSystem?: HeatingSystem[];
    /** Current loft insulation level */
    loftInsulation?: LoftInsulation[];
    /** Current glazing type */
    glazingType?: GlazingType[];
    /** Other requirements description */
    other?: string;
  };
  /** Exclusions - when this improvement is NOT applicable */
  exclusions: {
    /** Wall types where not applicable */
    wallConstruction?: WallConstruction[];
    /** Heating systems where not applicable */
    heatingSystem?: HeatingSystem[];
    /** Loft insulation where not applicable (already done) */
    loftInsulation?: LoftInsulation[];
    /** Glazing where not applicable */
    glazingType?: GlazingType[];
    /** Property types where not applicable */
    propertyTypes?: PropertyType[];
  };
  /** Typical installation time */
  typicalInstallDays: string;
  /** Disruption level */
  disruptionLevel: 'low' | 'medium' | 'high';
  /** Is this commonly recommended? */
  commonlyRecommended: boolean;
  /** Notes about the improvement */
  notes?: string;
  /** Data source reference */
  dataSource: string;
}

/**
 * Comprehensive list of EPC improvement measures
 */
export const IMPROVEMENTS: ImprovementData[] = [
  // ============================================================
  // INSULATION IMPROVEMENTS
  // ============================================================
  {
    id: 'loft-insulation-topup',
    name: 'Loft Insulation Top-Up',
    description:
      'Top up existing loft insulation to the recommended 300mm depth with mineral wool or similar material. One of the most cost-effective energy efficiency improvements.',
    category: 'insulation',
    baseCostLow: 400,
    baseCostHigh: 600,
    typicalEPCPoints: 4,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      loftInsulation: ['none', 'under-100mm', '100-270mm'],
    },
    exclusions: {
      loftInsulation: ['over-270mm', 'no-loft'],
      propertyTypes: ['purpose-built-flat'],
    },
    typicalInstallDays: '1-2 hours',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    notes: 'DIY possible for competent householders. Professional install recommended for full coverage.',
    dataSource: 'Energy Saving Trust 2025',
  },
  {
    id: 'loft-insulation-full',
    name: 'Full Loft Insulation',
    description:
      'Complete loft insulation installation from scratch to 300mm depth. Includes laying 270mm between joists plus 100mm cross-layer.',
    category: 'insulation',
    baseCostLow: 600,
    baseCostHigh: 1000,
    typicalEPCPoints: 8,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      loftInsulation: ['none'],
    },
    exclusions: {
      loftInsulation: ['under-100mm', '100-270mm', 'over-270mm', 'no-loft'],
      propertyTypes: ['purpose-built-flat'],
    },
    typicalInstallDays: '2-4 hours',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    dataSource: 'Energy Saving Trust 2025',
  },
  {
    id: 'cavity-wall-insulation',
    name: 'Cavity Wall Insulation',
    description:
      'Fill the cavity between inner and outer walls with insulation material (typically mineral wool, EPS beads, or foam). Reduces heat loss through walls by up to 35%.',
    category: 'insulation',
    baseCostLow: 800,
    baseCostHigh: 1500,
    typicalEPCPoints: 10,
    applicableWallTypes: ['cavity'],
    applicablePropertyTypes: null,
    prerequisites: {
      wallConstruction: ['cavity'],
    },
    exclusions: {
      wallConstruction: ['solid', 'mixed'],
    },
    typicalInstallDays: '2-3 hours',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    notes: 'Not suitable for all cavity walls. Survey required to check suitability. Properties in exposed locations may need alternative approaches.',
    dataSource: 'Energy Saving Trust 2025',
  },
  {
    id: 'internal-wall-insulation',
    name: 'Internal Solid Wall Insulation',
    description:
      'Insulation boards or stud walls with insulation fitted to inside of external walls. Suitable for solid wall properties. Reduces room size slightly.',
    category: 'insulation',
    baseCostLow: 8000,
    baseCostHigh: 14000,
    typicalEPCPoints: 14,
    applicableWallTypes: ['solid', 'mixed'],
    applicablePropertyTypes: null,
    prerequisites: {
      wallConstruction: ['solid', 'mixed'],
    },
    exclusions: {
      wallConstruction: ['cavity'],
    },
    typicalInstallDays: '1-2 weeks',
    disruptionLevel: 'high',
    commonlyRecommended: true,
    notes: 'Requires redecoration. May need skirting boards, coving, and electrical fittings to be moved. Less disruptive than external insulation to streetscape.',
    dataSource: 'Energy Saving Trust 2025, BEIS estimates',
  },
  {
    id: 'external-wall-insulation',
    name: 'External Solid Wall Insulation',
    description:
      'Insulation boards fixed to outside walls and covered with render or cladding. Maintains internal room sizes and reduces thermal bridging.',
    category: 'insulation',
    baseCostLow: 10000,
    baseCostHigh: 20000,
    typicalEPCPoints: 16,
    applicableWallTypes: ['solid', 'mixed'],
    applicablePropertyTypes: null,
    prerequisites: {
      wallConstruction: ['solid', 'mixed'],
    },
    exclusions: {
      wallConstruction: ['cavity'],
      propertyTypes: ['purpose-built-flat', 'converted-flat'],
    },
    typicalInstallDays: '2-4 weeks',
    disruptionLevel: 'medium',
    commonlyRecommended: true,
    notes: 'May require planning permission, especially in conservation areas. Changes external appearance. Often best combined with other external works.',
    dataSource: 'Energy Saving Trust 2025, BEIS estimates',
  },
  {
    id: 'floor-insulation-suspended',
    name: 'Suspended Floor Insulation',
    description:
      'Insulation fitted between floor joists from below (if accessible) or from above. Suitable for properties with suspended timber floors and accessible void.',
    category: 'insulation',
    baseCostLow: 800,
    baseCostHigh: 1500,
    typicalEPCPoints: 4,
    applicableWallTypes: null,
    applicablePropertyTypes: [
      'victorian-terrace',
      'edwardian-1920s',
      '1930s-semi',
      '1950s-1960s',
    ],
    prerequisites: {
      other: 'Suspended timber floor with accessible void',
    },
    exclusions: {
      propertyTypes: ['purpose-built-flat'],
    },
    typicalInstallDays: '1-2 days',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    notes: 'Access from below preferred to avoid disrupting floor finishes. May require ventilation adjustments.',
    dataSource: 'Energy Saving Trust 2025',
  },
  {
    id: 'floor-insulation-solid',
    name: 'Solid Floor Insulation',
    description:
      'Insulation added above solid concrete floors during renovation. Requires lifting and relaying floor finishes or screeding over insulation.',
    category: 'insulation',
    baseCostLow: 2000,
    baseCostHigh: 5000,
    typicalEPCPoints: 3,
    applicableWallTypes: null,
    applicablePropertyTypes: [
      '1950s-1960s',
      '1970s-1980s',
      '1990s-later',
      'purpose-built-flat',
    ],
    prerequisites: {
      other: 'Solid concrete floor, major renovation planned',
    },
    exclusions: {},
    typicalInstallDays: '3-7 days',
    disruptionLevel: 'high',
    commonlyRecommended: false,
    notes: 'Only practical during major renovation. Consider when replacing floor finishes anyway.',
    dataSource: 'Energy Saving Trust 2025',
  },

  // ============================================================
  // GLAZING IMPROVEMENTS
  // ============================================================
  {
    id: 'double-glazing',
    name: 'Double Glazing Installation',
    description:
      'Replace single glazed windows with A-rated double glazing throughout the property. Modern units have low-e coatings and argon fill for best performance.',
    category: 'glazing',
    baseCostLow: 4000,
    baseCostHigh: 8000,
    typicalEPCPoints: 6,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      glazingType: ['single', 'mixed'],
    },
    exclusions: {
      glazingType: ['double', 'triple'],
    },
    typicalInstallDays: '1-3 days',
    disruptionLevel: 'medium',
    commonlyRecommended: true,
    notes: 'Listed buildings and conservation areas may have restrictions. Secondary glazing may be an alternative.',
    dataSource: 'Energy Saving Trust 2025, glazing industry estimates',
  },
  {
    id: 'triple-glazing',
    name: 'Triple Glazing Installation',
    description:
      'Premium triple glazed windows for maximum thermal performance. Best suited to new builds or major renovations in colder regions.',
    category: 'glazing',
    baseCostLow: 6000,
    baseCostHigh: 12000,
    typicalEPCPoints: 8,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      glazingType: ['single', 'mixed', 'double'],
    },
    exclusions: {
      glazingType: ['triple'],
    },
    typicalInstallDays: '1-3 days',
    disruptionLevel: 'medium',
    commonlyRecommended: false,
    notes: 'Marginal benefit over double glazing in most cases. Consider only for very cold regions or where noise reduction also needed.',
    dataSource: 'Energy Saving Trust 2025',
  },
  {
    id: 'secondary-glazing',
    name: 'Secondary Glazing',
    description:
      'Additional internal window fitted inside existing single glazed windows. Good option for listed buildings and conservation areas.',
    category: 'glazing',
    baseCostLow: 1500,
    baseCostHigh: 3500,
    typicalEPCPoints: 3,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      glazingType: ['single'],
    },
    exclusions: {
      glazingType: ['double', 'triple'],
    },
    typicalInstallDays: '1-2 days',
    disruptionLevel: 'low',
    commonlyRecommended: false,
    notes: 'Preserves original windows. Good for heritage properties. Less effective than replacement double glazing.',
    dataSource: 'Energy Saving Trust 2025',
  },
  {
    id: 'draught-proofing',
    name: 'Draught Proofing',
    description:
      'Seal gaps around windows, doors, letterboxes, and other openings. Low-cost measure with immediate comfort and efficiency benefits.',
    category: 'other',
    baseCostLow: 200,
    baseCostHigh: 400,
    typicalEPCPoints: 2,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {},
    exclusions: {},
    typicalInstallDays: '2-4 hours',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    notes: 'DIY possible for many applications. Professional install for comprehensive treatment.',
    dataSource: 'Energy Saving Trust 2025',
  },

  // ============================================================
  // HEATING SYSTEM IMPROVEMENTS
  // ============================================================
  {
    id: 'new-gas-boiler',
    name: 'New A-Rated Gas Boiler',
    description:
      'Replace old inefficient boiler with modern A-rated condensing gas boiler. Modern boilers are 90%+ efficient vs 60-70% for older models.',
    category: 'heating',
    baseCostLow: 2500,
    baseCostHigh: 4000,
    typicalEPCPoints: 8,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      heatingSystem: ['gas-boiler'],
    },
    exclusions: {
      heatingSystem: ['heat-pump', 'electric'],
    },
    typicalInstallDays: '1-2 days',
    disruptionLevel: 'medium',
    commonlyRecommended: true,
    notes: 'Gas boiler replacements may become more restricted as UK moves toward net zero. Consider future-proofing with heat pump.',
    dataSource: 'Energy Saving Trust 2025, Boiler Guide surveys',
  },
  {
    id: 'air-source-heat-pump',
    name: 'Air Source Heat Pump',
    description:
      'Low-carbon heating system that extracts heat from outside air. Eligible for Boiler Upgrade Scheme grants (up to £7,500). Running costs depend on electricity prices.',
    category: 'heating',
    baseCostLow: 10000,
    baseCostHigh: 15000,
    typicalEPCPoints: 12,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {},
    exclusions: {
      heatingSystem: ['heat-pump'],
      propertyTypes: ['purpose-built-flat', 'converted-flat'],
    },
    typicalInstallDays: '2-5 days',
    disruptionLevel: 'medium',
    commonlyRecommended: true,
    notes: 'Works best with good insulation and larger radiators or underfloor heating. May require planning permission for outdoor unit. BUS grant can reduce cost significantly.',
    dataSource: 'Energy Saving Trust 2025, Heat Pump Association',
  },
  {
    id: 'ground-source-heat-pump',
    name: 'Ground Source Heat Pump',
    description:
      'Premium heat pump system using ground loops or boreholes. Higher efficiency than air source but requires garden space and higher install cost.',
    category: 'heating',
    baseCostLow: 18000,
    baseCostHigh: 35000,
    typicalEPCPoints: 14,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      other: 'Adequate garden/land for ground loop installation',
    },
    exclusions: {
      heatingSystem: ['heat-pump'],
      propertyTypes: ['purpose-built-flat', 'converted-flat', 'victorian-terrace'],
    },
    typicalInstallDays: '3-7 days',
    disruptionLevel: 'high',
    commonlyRecommended: false,
    notes: 'Higher upfront cost but lower running costs than ASHP. BUS grant up to £7,500 available.',
    dataSource: 'Energy Saving Trust 2025',
  },
  {
    id: 'oil-to-heat-pump',
    name: 'Oil to Heat Pump Conversion',
    description:
      'Replace oil boiler with air source heat pump. Particularly beneficial given oil price volatility and carbon emissions from oil heating.',
    category: 'heating',
    baseCostLow: 11000,
    baseCostHigh: 16000,
    typicalEPCPoints: 14,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      heatingSystem: ['oil-boiler'],
    },
    exclusions: {
      heatingSystem: ['gas-boiler', 'heat-pump', 'electric'],
    },
    typicalInstallDays: '2-5 days',
    disruptionLevel: 'medium',
    commonlyRecommended: true,
    notes: 'Oil tank can be removed. BUS grant available. May require radiator upgrades.',
    dataSource: 'Energy Saving Trust 2025',
  },

  // ============================================================
  // HEATING CONTROLS
  // ============================================================
  {
    id: 'smart-heating-controls',
    name: 'Smart Heating Controls',
    description:
      'Smart thermostat with app control, learning features, and room-by-room temperature management. Optimises heating based on occupancy and preferences.',
    category: 'controls',
    baseCostLow: 200,
    baseCostHigh: 400,
    typicalEPCPoints: 2,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      heatingSystem: ['gas-boiler', 'oil-boiler', 'heat-pump'],
    },
    exclusions: {
      heatingSystem: ['electric'],
    },
    typicalInstallDays: '2-4 hours',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    notes: 'Requires WiFi. Many options available (Hive, Nest, tado, etc.). DIY install possible for some models.',
    dataSource: 'Energy Saving Trust 2025',
  },
  {
    id: 'heating-zone-controls',
    name: 'Heating Zone Controls',
    description:
      'Divide property into heating zones with independent thermostats and motorised valves. Heat only occupied areas.',
    category: 'controls',
    baseCostLow: 400,
    baseCostHigh: 800,
    typicalEPCPoints: 3,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      heatingSystem: ['gas-boiler', 'oil-boiler', 'heat-pump'],
    },
    exclusions: {
      heatingSystem: ['electric'],
      propertyTypes: ['purpose-built-flat'],
    },
    typicalInstallDays: '1 day',
    disruptionLevel: 'low',
    commonlyRecommended: false,
    notes: 'Most beneficial for larger properties. Requires 2-port valves on each zone.',
    dataSource: 'Energy Saving Trust 2025',
  },
  {
    id: 'trv-upgrade',
    name: 'Thermostatic Radiator Valves',
    description:
      'Fit TRVs to all radiators to allow individual room temperature control. Prevents overheating and saves energy.',
    category: 'controls',
    baseCostLow: 150,
    baseCostHigh: 300,
    typicalEPCPoints: 1,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      heatingSystem: ['gas-boiler', 'oil-boiler', 'heat-pump'],
    },
    exclusions: {
      heatingSystem: ['electric'],
    },
    typicalInstallDays: '2-4 hours',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    notes: 'Do not fit TRV to radiator in same room as main thermostat. Smart TRVs available at higher cost.',
    dataSource: 'Energy Saving Trust 2025',
  },

  // ============================================================
  // HOT WATER IMPROVEMENTS
  // ============================================================
  {
    id: 'hot-water-cylinder-insulation',
    name: 'Hot Water Cylinder Insulation',
    description:
      'Add or upgrade insulation jacket on hot water cylinder. Very cost-effective if cylinder has no or thin existing jacket.',
    category: 'other',
    baseCostLow: 30,
    baseCostHigh: 80,
    typicalEPCPoints: 1,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      other: 'Property has hot water cylinder (not combi boiler)',
    },
    exclusions: {},
    typicalInstallDays: '30 minutes',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    notes: 'DIY task. Ensure jacket is at least 80mm thick. Factory-insulated cylinders may not need additional jacket.',
    dataSource: 'Energy Saving Trust 2025',
  },
  {
    id: 'pipe-insulation',
    name: 'Hot Water Pipe Insulation',
    description:
      'Insulate hot water pipes, particularly in unheated areas like lofts and garages. Reduces heat loss from pipework.',
    category: 'other',
    baseCostLow: 50,
    baseCostHigh: 150,
    typicalEPCPoints: 1,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {},
    exclusions: {},
    typicalInstallDays: '1-2 hours',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    notes: 'DIY task. Focus on pipes in unheated spaces first.',
    dataSource: 'Energy Saving Trust 2025',
  },

  // ============================================================
  // LIGHTING
  // ============================================================
  {
    id: 'led-lighting',
    name: 'LED Lighting Upgrade',
    description:
      'Replace all halogen and incandescent bulbs with LED equivalents. LEDs use 75-90% less energy and last much longer.',
    category: 'other',
    baseCostLow: 100,
    baseCostHigh: 300,
    typicalEPCPoints: 2,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {},
    exclusions: {},
    typicalInstallDays: '1-2 hours',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    notes: 'DIY task for most fittings. Some specialist fittings may need electrician. Check dimmer compatibility.',
    dataSource: 'Energy Saving Trust 2025',
  },

  // ============================================================
  // RENEWABLES
  // ============================================================
  {
    id: 'solar-pv',
    name: 'Solar PV Panels',
    description:
      'Rooftop solar photovoltaic panels to generate electricity. Typical 3-4kW system suits most homes. Excess can be exported to grid.',
    category: 'renewable',
    baseCostLow: 5000,
    baseCostHigh: 8000,
    typicalEPCPoints: 8,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      other: 'Suitable roof orientation (ideally south-facing) and structural capacity',
    },
    exclusions: {
      propertyTypes: ['purpose-built-flat', 'converted-flat'],
    },
    typicalInstallDays: '1-2 days',
    disruptionLevel: 'low',
    commonlyRecommended: true,
    notes: 'Planning permission usually not required. Listed buildings and conservation areas may have restrictions. Battery storage adds £2,000-4,000.',
    dataSource: 'Energy Saving Trust 2025, MCS installer data',
  },
  {
    id: 'solar-thermal',
    name: 'Solar Water Heating',
    description:
      'Solar thermal panels to heat hot water. Best combined with a hot water cylinder system. Provides 50-70% of hot water needs in summer.',
    category: 'renewable',
    baseCostLow: 3000,
    baseCostHigh: 5000,
    typicalEPCPoints: 4,
    applicableWallTypes: null,
    applicablePropertyTypes: null,
    prerequisites: {
      other: 'Compatible hot water cylinder and suitable roof space',
    },
    exclusions: {
      propertyTypes: ['purpose-built-flat', 'converted-flat'],
    },
    typicalInstallDays: '1-2 days',
    disruptionLevel: 'medium',
    commonlyRecommended: false,
    notes: 'Solar PV generally offers better value now. Consider if PV not suitable.',
    dataSource: 'Energy Saving Trust 2025',
  },
];

/**
 * Property type cost multipliers
 * Victorian and Edwardian properties typically cost more due to:
 * - Solid walls requiring more expensive insulation
 * - Period features requiring careful handling
 * - Often listed or in conservation areas
 * - Complex layouts and construction details
 */
export const PROPERTY_TYPE_FACTORS: Record<PropertyType, number> = {
  'victorian-terrace': 1.30,      // Highest - solid walls, period features, complexity
  'edwardian-1920s': 1.25,        // Similar to Victorian but slightly simpler
  '1930s-semi': 1.10,             // Cavity walls but still some complexity
  '1950s-1960s': 1.00,            // Baseline - straightforward construction
  '1970s-1980s': 0.95,            // Modern construction, easier to work with
  '1990s-later': 0.90,            // Newest, most standardised construction
  'purpose-built-flat': 0.85,     // Smaller, often better insulated already
  'converted-flat': 1.15,         // Can be complex due to conversion constraints
  'hmo': 1.20,                    // Multiple units, fire safety requirements, complexity
};

/**
 * Size factors based on bedroom count
 * Larger properties have more wall area, windows, and heating requirements
 */
export const SIZE_FACTORS: Record<number, number> = {
  1: 0.70,    // Studio/1-bed - significantly smaller
  2: 0.85,    // 2-bed - small house or flat
  3: 1.00,    // 3-bed - baseline (typical UK property)
  4: 1.20,    // 4-bed - larger family home
  5: 1.40,    // 5-bed - large property
  6: 1.60,    // 6+ bed - very large property
};

/**
 * EPC rating points mapping
 * Used to estimate final rating after improvements
 */
export const EPC_RATING_POINTS: Record<string, { min: number; max: number; midpoint: number }> = {
  A: { min: 92, max: 100, midpoint: 96 },
  B: { min: 81, max: 91, midpoint: 86 },
  C: { min: 69, max: 80, midpoint: 75 },
  D: { min: 55, max: 68, midpoint: 62 },
  E: { min: 39, max: 54, midpoint: 47 },
  F: { min: 21, max: 38, midpoint: 30 },
  G: { min: 1, max: 20, midpoint: 11 },
  unknown: { min: 39, max: 54, midpoint: 47 }, // Assume E rating if unknown
};

/**
 * Form step definitions for the calculator
 */
export const CALCULATOR_STEPS = [
  {
    id: 'basics',
    title: 'Property Basics',
    description: 'Tell us about your property type and location',
  },
  {
    id: 'current-state',
    title: 'Current State',
    description: 'What is the current EPC rating and construction?',
  },
  {
    id: 'details',
    title: 'Additional Details',
    description: 'Help us refine the estimate with more details',
  },
];

/**
 * Property type to guide URL mapping
 */
export const PROPERTY_TYPE_GUIDE_URLS: Record<PropertyType, string> = {
  'victorian-terrace': '/property-types/victorian-terrace',
  'edwardian-1920s': '/property-types/edwardian-1920s',
  '1930s-semi': '/property-types/1930s-semi',
  '1950s-1960s': '/property-types/1950s-1960s',
  '1970s-1980s': '/property-types/1970s-1980s',
  '1990s-later': '/property-types/1990s-later',
  'purpose-built-flat': '/property-types/purpose-built-flat',
  'converted-flat': '/property-types/converted-flat',
  'hmo': '/property-types/hmo',
};

/**
 * Cost cap threshold for exemptions (GBP)
 * If improvements to reach EPC C exceed this amount, landlord may qualify for exemption
 */
export const COST_CAP_THRESHOLD = 10000;

/**
 * Disclaimer text for calculator results
 */
export const CALCULATOR_DISCLAIMER = `These cost estimates are indicative only and based on UK national averages from the Energy Saving Trust and industry data (2025-2026 figures). Actual costs will vary significantly depending on your specific property, local labour rates, chosen products, and installer. Always obtain multiple quotes from qualified installers before proceeding. EPC point improvements are estimates and the actual impact will depend on your property's individual assessment under RdSAP methodology.`;

/**
 * Methodology text explaining how costs are calculated
 */
export const CALCULATOR_METHODOLOGY = `Our estimates are based on:
- Energy Saving Trust national average cost data (2025-2026)
- Regional cost multipliers reflecting local labour rate variations
- Property type factors accounting for construction complexity
- Size adjustments based on bedroom count as a proxy for floor area

The EPC points improvement figures are indicative based on typical impacts seen in EPC assessments. Your actual improvement will depend on your property's specific characteristics and current energy performance.`;
