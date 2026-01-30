/**
 * Grant Eligibility Checker Data
 *
 * This file contains comprehensive data for UK landlord energy efficiency grants
 * including national schemes and local authority programmes.
 *
 * Data Sources:
 * - GOV.UK official scheme guidance
 * - Ofgem ECO4 guidance documentation
 * - Individual local authority websites
 * - Energy Saving Trust
 *
 * Last comprehensive review: January 2026
 *
 * IMPORTANT: This data requires regular maintenance. Grant schemes change
 * frequently. Each scheme includes a lastVerified date that should be
 * checked and updated regularly.
 */

import type {
  GrantScheme,
  LocalAuthority,
  Region,
} from '@/lib/types';

// ============================================================
// LOCAL AUTHORITIES
// ============================================================

/**
 * Local authorities with grant schemes
 * Phase 1: 10 major councils as specified in PRD
 *
 * Postcode areas are approximate and used for initial matching.
 * Users should verify their exact local authority if on a boundary.
 */
export const LOCAL_AUTHORITIES: LocalAuthority[] = [
  // ----------------------------------------
  // NORTH WEST
  // ----------------------------------------
  {
    id: 'manchester',
    name: 'Manchester City Council',
    region: 'north-west',
    postcodeAreas: ['M1', 'M2', 'M3', 'M4', 'M8', 'M9', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M18', 'M19', 'M20', 'M21', 'M22', 'M23', 'M40'],
    websiteUrl: 'https://www.manchester.gov.uk/info/500002/housing/8305/energy_efficiency_and_fuel_poverty',
    contactEmail: 'housing@manchester.gov.uk',
    contactPhone: '0161 234 5000',
  },
  {
    id: 'liverpool',
    name: 'Liverpool City Council',
    region: 'north-west',
    postcodeAreas: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10', 'L11', 'L12', 'L13', 'L14', 'L15', 'L16', 'L17', 'L18', 'L19', 'L24', 'L25', 'L27'],
    websiteUrl: 'https://liverpool.gov.uk/housing/home-improvements/energy-grants/',
    contactEmail: 'energyteam@liverpool.gov.uk',
    contactPhone: '0151 233 3000',
  },

  // ----------------------------------------
  // WEST MIDLANDS
  // ----------------------------------------
  {
    id: 'birmingham',
    name: 'Birmingham City Council',
    region: 'west-midlands',
    postcodeAreas: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20', 'B21', 'B23', 'B24', 'B25', 'B26', 'B27', 'B28', 'B29', 'B30', 'B31', 'B32', 'B33', 'B34', 'B35', 'B36', 'B37', 'B38', 'B42', 'B43', 'B44', 'B45', 'B46', 'B47'],
    websiteUrl: 'https://www.birmingham.gov.uk/info/20015/housing_options_and_advice/1732/energy_efficiency_and_fuel_poverty',
    contactEmail: 'energy.advice@birmingham.gov.uk',
    contactPhone: '0121 303 1111',
  },

  // ----------------------------------------
  // YORKSHIRE
  // ----------------------------------------
  {
    id: 'leeds',
    name: 'Leeds City Council',
    region: 'yorkshire',
    postcodeAreas: ['LS1', 'LS2', 'LS3', 'LS4', 'LS5', 'LS6', 'LS7', 'LS8', 'LS9', 'LS10', 'LS11', 'LS12', 'LS13', 'LS14', 'LS15', 'LS16', 'LS17', 'LS18', 'LS19', 'LS20', 'LS25', 'LS26', 'LS27'],
    websiteUrl: 'https://www.leeds.gov.uk/housing/home-energy-and-improvements',
    contactEmail: 'energyadvice@leeds.gov.uk',
    contactPhone: '0113 222 4407',
  },
  {
    id: 'sheffield',
    name: 'Sheffield City Council',
    region: 'yorkshire',
    postcodeAreas: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14', 'S17', 'S20', 'S35', 'S36'],
    websiteUrl: 'https://www.sheffield.gov.uk/home/housing/energy-grants-loans',
    contactEmail: 'energyadvice@sheffield.gov.uk',
    contactPhone: '0114 273 4567',
  },

  // ----------------------------------------
  // SOUTH WEST
  // ----------------------------------------
  {
    id: 'bristol',
    name: 'Bristol City Council',
    region: 'south-west',
    postcodeAreas: ['BS1', 'BS2', 'BS3', 'BS4', 'BS5', 'BS6', 'BS7', 'BS8', 'BS9', 'BS10', 'BS11', 'BS13', 'BS14', 'BS15', 'BS16'],
    websiteUrl: 'https://www.bristol.gov.uk/residents/housing/energy-efficiency-in-the-home',
    contactEmail: 'warm.homes@bristol.gov.uk',
    contactPhone: '0117 922 2000',
  },

  // ----------------------------------------
  // NORTH EAST
  // ----------------------------------------
  {
    id: 'newcastle',
    name: 'Newcastle City Council',
    region: 'north-east',
    postcodeAreas: ['NE1', 'NE2', 'NE3', 'NE4', 'NE5', 'NE6', 'NE7', 'NE12', 'NE13', 'NE15'],
    websiteUrl: 'https://www.newcastle.gov.uk/services/housing/energy-efficiency-grants',
    contactEmail: 'energyteam@newcastle.gov.uk',
    contactPhone: '0191 278 7878',
  },

  // ----------------------------------------
  // EAST MIDLANDS
  // ----------------------------------------
  {
    id: 'nottingham',
    name: 'Nottingham City Council',
    region: 'east-midlands',
    postcodeAreas: ['NG1', 'NG2', 'NG3', 'NG4', 'NG5', 'NG6', 'NG7', 'NG8', 'NG9', 'NG11'],
    websiteUrl: 'https://www.nottinghamcity.gov.uk/housing/energy-advice/',
    contactEmail: 'energy.services@nottinghamcity.gov.uk',
    contactPhone: '0115 915 5555',
  },
  {
    id: 'leicester',
    name: 'Leicester City Council',
    region: 'east-midlands',
    postcodeAreas: ['LE1', 'LE2', 'LE3', 'LE4', 'LE5'],
    websiteUrl: 'https://www.leicester.gov.uk/your-community/housing-and-regeneration/home-energy/',
    contactEmail: 'energyadvice@leicester.gov.uk',
    contactPhone: '0116 454 1000',
  },

  // ----------------------------------------
  // LONDON
  // ----------------------------------------
  {
    id: 'camden',
    name: 'London Borough of Camden',
    region: 'london',
    postcodeAreas: ['NW1', 'NW3', 'NW5', 'NW6', 'WC1', 'WC2', 'N1C', 'N6', 'N7', 'N19'],
    websiteUrl: 'https://www.camden.gov.uk/energy-efficiency-and-fuel-poverty',
    contactEmail: 'sustainability@camden.gov.uk',
    contactPhone: '020 7974 4444',
  },
];

// ============================================================
// NATIONAL GRANT SCHEMES
// ============================================================

/**
 * National grant schemes available across the UK
 *
 * These are the primary funding sources for landlord energy efficiency improvements:
 * - ECO4: Energy Company Obligation (via energy suppliers)
 * - Boiler Upgrade Scheme: Heat pump installation support
 * - Warm Homes: Local Grant: New scheme from April 2025
 *
 * Data verified against GOV.UK and Ofgem guidance as of January 2026.
 */
export const NATIONAL_GRANT_SCHEMES: GrantScheme[] = [
  // ----------------------------------------
  // ECO4 - Energy Company Obligation
  // ----------------------------------------
  {
    id: 'eco4',
    name: 'ECO4 (Energy Company Obligation)',
    description: 'Funding from major energy suppliers for insulation and heating improvements in fuel-poor households.',
    detailedDescription: `ECO4 is the fourth iteration of the Energy Company Obligation scheme, which requires
large energy suppliers to fund energy efficiency improvements in eligible homes. For rental properties,
the tenant must meet income or benefit-based eligibility criteria. The scheme focuses on a "fabric first"
approach, prioritising insulation before heating system upgrades. ECO4 can fully fund improvements for
eligible properties, with no landlord contribution typically required for qualifying tenants.`,
    administrator: 'energy-supplier',
    administratorName: 'Obligated Energy Suppliers (via Ofgem)',
    maxGrantValue: 15000,
    minGrantValue: 1000,
    coverageCategories: ['insulation', 'heating'],
    coveredImprovements: [
      'Loft insulation',
      'Cavity wall insulation',
      'Solid wall insulation (internal or external)',
      'Underfloor insulation',
      'Room-in-roof insulation',
      'Flat roof insulation',
      'Park home insulation',
      'First-time central heating',
      'Boiler replacement (in limited circumstances)',
      'Heat pump installation',
      'Heating controls',
    ],
    excludedImprovements: [
      'Solar PV panels',
      'Double glazing (standalone)',
      'Draught proofing (standalone)',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: undefined, // All property types eligible
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: ['gas-boiler', 'electric', 'oil-boiler', 'other'],
      heatingSystemsExcluded: undefined,
      coverage: 'great-britain',
      requiresTenantOnBenefits: true,
      allowsRentalProperties: true,
      requiresLandlordContribution: false,
      additionalNotes: [
        'Tenant must receive qualifying benefits (e.g., Universal Credit, Pension Credit, Income Support, ESA, JSA, Child Tax Credit, Working Tax Credit, Housing Benefit)',
        'Property must be rated EPC D, E, F, or G',
        'Improvements must be recommended on the EPC certificate or by a retrofit assessor',
        'Landlord consent required before works can proceed',
        'No cost to landlord for qualifying properties',
      ],
    },
    applicationUrl: 'https://www.simpleenergyadvice.org.uk/grants',
    infoUrl: 'https://www.ofgem.gov.uk/environmental-and-social-schemes/energy-company-obligation-eco',
    startDate: '2022-04-01',
    endDate: '2026-03-31',
    isActive: true,
    lastVerified: '2026-01-28',
    dataSource: 'Ofgem ECO4 Guidance v4.2, GOV.UK',
    displayPriority: 1,
    tags: ['insulation', 'heating', 'free', 'tenant-benefits', 'national'],
  },

  // ----------------------------------------
  // BOILER UPGRADE SCHEME (BUS)
  // ----------------------------------------
  {
    id: 'boiler-upgrade-scheme',
    name: 'Boiler Upgrade Scheme (BUS)',
    description: 'Government grants for heat pump and biomass boiler installation to replace fossil fuel heating.',
    detailedDescription: `The Boiler Upgrade Scheme provides upfront capital grants to support the installation
of low-carbon heating systems in homes and small non-domestic buildings in England and Wales. The scheme
offers up to £7,500 for air source heat pumps and ground source heat pumps, and up to £5,000 for biomass
boilers. Landlords can apply for BUS grants for rental properties. The property must have a valid EPC,
and the existing heating system must be fossil fuel-based (gas, oil, LPG, or electric). The grant is
paid directly to the MCS-certified installer, reducing the upfront cost for the property owner.`,
    administrator: 'government',
    administratorName: 'Department for Energy Security and Net Zero (DESNZ)',
    maxGrantValue: 7500,
    minGrantValue: 5000,
    coverageCategories: ['heating', 'renewable'],
    coveredImprovements: [
      'Air source heat pump installation',
      'Ground source heat pump installation',
      'Water source heat pump installation',
      'Biomass boiler installation',
    ],
    excludedImprovements: [
      'Hybrid heat pump systems (gas boiler backup)',
      'Air-to-air heat pumps',
      'Insulation works',
      'Radiator upgrades (unless included in heat pump installation)',
    ],
    eligibility: {
      epcRatings: undefined, // Any EPC rating but must have valid EPC
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: ['gas-boiler', 'oil-boiler', 'electric', 'other'],
      heatingSystemsExcluded: ['heat-pump'],
      coverage: 'england-and-wales',
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      additionalNotes: [
        'Property must have a valid EPC (less than 10 years old)',
        'Must replace fossil fuel heating (gas, oil, LPG) or direct electric heating',
        'Properties with existing heat pumps are not eligible',
        'Installer must be MCS certified',
        'New builds are not eligible',
        'Grant paid directly to installer',
        'Landlords can apply for rental properties',
        'Property must have adequate insulation (loft insulation recommended to 250mm+)',
      ],
    },
    applicationUrl: 'https://www.gov.uk/apply-boiler-upgrade-scheme',
    infoUrl: 'https://www.gov.uk/guidance/apply-for-the-boiler-upgrade-scheme',
    startDate: '2022-04-01',
    endDate: '2028-03-31',
    isActive: true,
    lastVerified: '2026-01-28',
    dataSource: 'GOV.UK Boiler Upgrade Scheme Guidance, DESNZ',
    displayPriority: 2,
    tags: ['heat-pump', 'biomass', 'renewable', 'government-grant', 'national'],
  },

  // ----------------------------------------
  // WARM HOMES: LOCAL GRANT
  // ----------------------------------------
  {
    id: 'warm-homes-local',
    name: 'Warm Homes: Local Grant',
    description: 'New government scheme providing up to £30,000 for comprehensive energy efficiency improvements.',
    detailedDescription: `Warm Homes: Local Grant is a new government scheme launching in April 2025,
delivered through local authorities. It provides substantial funding for energy efficiency improvements
in low-income households. For the first eligible property, landlords can receive up to £30,000 in grant
funding. For additional properties, landlords must contribute 50% of the cost. The scheme targets
properties where tenants have household income below £36,000 or receive qualifying benefits. This
replaces elements of previous local authority delivery programmes and is designed to work alongside
ECO4 and the Boiler Upgrade Scheme.`,
    administrator: 'local-authority',
    administratorName: 'Local Authorities (on behalf of DESNZ)',
    maxGrantValue: 30000,
    minGrantValue: 5000,
    coverageCategories: ['insulation', 'heating', 'glazing', 'ventilation', 'multiple'],
    coveredImprovements: [
      'Loft insulation',
      'Cavity wall insulation',
      'Solid wall insulation (internal or external)',
      'Underfloor insulation',
      'Heat pump installation',
      'First-time central heating',
      'Double or triple glazing',
      'Mechanical ventilation with heat recovery',
      'Solar PV panels',
      'Battery storage',
      'Smart heating controls',
    ],
    excludedImprovements: [
      'Cosmetic improvements',
      'General property repairs (unless required for energy measures)',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: undefined, // Any heating system
      heatingSystemsExcluded: undefined,
      coverage: 'england',
      tenantIncomeThreshold: 36000,
      requiresTenantOnBenefits: false, // Benefits OR income threshold
      allowsRentalProperties: true,
      requiresLandlordContribution: false, // First property: no. Additional: yes (50%)
      landlordContributionPercent: 50, // For additional properties only
      additionalNotes: [
        'Tenant must have household income below £36,000 OR receive qualifying benefits',
        'First eligible property: up to £30,000 with no landlord contribution',
        'Additional properties: landlord must contribute 50% of costs',
        'Property must be rated EPC D or below',
        'Delivered through local authorities - check local availability',
        'Scheme launches April 2025',
        'Properties must be in England',
      ],
    },
    applicationUrl: 'https://www.gov.uk/apply-warm-homes-local-grant',
    infoUrl: 'https://www.gov.uk/government/publications/warm-homes-local-grant',
    startDate: '2025-04-01',
    endDate: undefined, // Ongoing programme
    isActive: true,
    lastVerified: '2026-01-28',
    dataSource: 'Warm Homes Plan January 2026, GOV.UK',
    displayPriority: 3,
    tags: ['comprehensive', 'local-authority', 'high-value', 'new-scheme', 'national'],
  },

  // ----------------------------------------
  // GREAT BRITISH INSULATION SCHEME
  // ----------------------------------------
  {
    id: 'great-british-insulation-scheme',
    name: 'Great British Insulation Scheme (GBIS)',
    description: 'Energy supplier-funded insulation scheme for properties in lower council tax bands.',
    detailedDescription: `The Great British Insulation Scheme (formerly ECO+) provides funding for
insulation improvements in homes in council tax bands A-D in England, or A-E in Scotland and Wales.
Unlike ECO4, this scheme does not require the tenant to be on benefits - eligibility is based on
the property's council tax band. For rental properties, the landlord typically needs to make a
contribution towards the cost, though this is often minimal for cavity wall and loft insulation.`,
    administrator: 'energy-supplier',
    administratorName: 'Obligated Energy Suppliers (via Ofgem)',
    maxGrantValue: 8000,
    minGrantValue: 500,
    coverageCategories: ['insulation'],
    coveredImprovements: [
      'Cavity wall insulation',
      'Loft insulation',
      'Solid wall insulation (internal or external)',
      'Underfloor insulation',
      'Room-in-roof insulation',
      'Flat roof insulation',
    ],
    excludedImprovements: [
      'Heating system replacements',
      'Glazing improvements',
      'Renewable energy systems',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: undefined,
      heatingSystemsExcluded: undefined,
      coverage: 'great-britain',
      allowsRentalProperties: true,
      requiresLandlordContribution: true, // Typically small contribution required
      additionalNotes: [
        'Property must be in council tax bands A-D (England) or A-E (Scotland/Wales)',
        'Property must be rated EPC D or below',
        'Landlord contribution may be required (typically small for basic insulation)',
        'No benefit requirements - based on property council tax band',
        'Combines with ECO4 for comprehensive improvements',
      ],
    },
    applicationUrl: 'https://www.simpleenergyadvice.org.uk/grants',
    infoUrl: 'https://www.gov.uk/apply-great-british-insulation-scheme',
    startDate: '2023-04-01',
    endDate: '2026-03-31',
    isActive: true,
    lastVerified: '2026-01-28',
    dataSource: 'Ofgem GBIS Guidance, GOV.UK',
    displayPriority: 4,
    tags: ['insulation', 'council-tax', 'energy-supplier', 'national'],
  },
];

// ============================================================
// LOCAL AUTHORITY GRANT SCHEMES
// ============================================================

/**
 * Local authority grant schemes for specific councils
 *
 * These schemes vary significantly by council and change frequently.
 * Data should be verified directly with the relevant local authority.
 *
 * Note: Many local authorities deliver Warm Homes: Local Grant - these
 * entries are for ADDITIONAL local schemes beyond the national programme.
 */
export const LOCAL_GRANT_SCHEMES: GrantScheme[] = [
  // ----------------------------------------
  // MANCHESTER
  // ----------------------------------------
  {
    id: 'manchester-retrofit-accelerator',
    name: 'Manchester Retrofit Accelerator',
    description: 'Manchester City Council scheme providing grants and loans for comprehensive retrofitting.',
    detailedDescription: `The Manchester Retrofit Accelerator is part of Manchester's Zero Carbon
strategy, providing support for landlords to improve the energy efficiency of rental properties.
The scheme offers grants for insulation and heating improvements, with additional interest-free
loan options for more comprehensive works. Priority is given to properties in areas of high
fuel poverty and those with the lowest EPC ratings.`,
    administrator: 'local-authority',
    administratorName: 'Manchester City Council',
    maxGrantValue: 10000,
    minGrantValue: 2000,
    coverageCategories: ['insulation', 'heating', 'multiple'],
    coveredImprovements: [
      'Cavity wall insulation',
      'Loft insulation',
      'External wall insulation',
      'Boiler replacement',
      'Heating controls',
      'Window upgrades',
    ],
    excludedImprovements: [
      'Solar PV (separate scheme available)',
      'Cosmetic improvements',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: undefined,
      heatingSystemsExcluded: undefined,
      coverage: 'england',
      localAuthorityIds: ['manchester'],
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      landlordContributionPercent: 25,
      additionalNotes: [
        'Property must be within Manchester City Council boundaries',
        'Landlord contribution of 25% typically required',
        'Interest-free loan available for remaining costs',
        'Properties in fuel poverty priority areas given preference',
        'Must commit to keeping property in rental sector for minimum 5 years',
      ],
    },
    applicationUrl: 'https://www.manchester.gov.uk/info/500002/housing/8305/retrofit_accelerator',
    infoUrl: 'https://www.manchester.gov.uk/info/500002/housing/8305/energy_efficiency_and_fuel_poverty',
    startDate: '2024-04-01',
    endDate: '2027-03-31',
    isActive: true,
    lastVerified: '2026-01-25',
    dataSource: 'Manchester City Council website',
    displayPriority: 10,
    tags: ['insulation', 'heating', 'local', 'manchester'],
  },

  // ----------------------------------------
  // BIRMINGHAM
  // ----------------------------------------
  {
    id: 'birmingham-warm-homes',
    name: 'Birmingham Warm Homes',
    description: 'Birmingham City Council energy efficiency programme for private landlords.',
    detailedDescription: `Birmingham Warm Homes is the city council's flagship programme for improving
energy efficiency in private rented homes. The scheme provides grants for insulation and heating
improvements, with higher funding available for properties in designated priority areas. The
programme works closely with ECO4 delivery partners to maximise available funding.`,
    administrator: 'local-authority',
    administratorName: 'Birmingham City Council',
    maxGrantValue: 8000,
    minGrantValue: 1500,
    coverageCategories: ['insulation', 'heating'],
    coveredImprovements: [
      'Loft insulation',
      'Cavity wall insulation',
      'Internal wall insulation',
      'First-time central heating',
      'Boiler replacement',
    ],
    excludedImprovements: [
      'External wall insulation (separate major works scheme)',
      'Solar installations',
    ],
    eligibility: {
      epcRatings: ['E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: ['gas-boiler', 'electric', 'oil-boiler', 'other'],
      heatingSystemsExcluded: undefined,
      coverage: 'england',
      localAuthorityIds: ['birmingham'],
      requiresTenantOnBenefits: false,
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      landlordContributionPercent: 35,
      additionalNotes: [
        'Priority given to EPC F and G properties',
        'Landlord contribution of 35% required',
        'Can be combined with ECO4 funding for eligible tenants',
        'Property must remain in rental sector for 5 years',
        'Annual budget limited - apply early',
      ],
    },
    applicationUrl: 'https://www.birmingham.gov.uk/warmhomes/apply',
    infoUrl: 'https://www.birmingham.gov.uk/info/20015/housing_options_and_advice/1732/energy_efficiency_and_fuel_poverty',
    startDate: '2023-10-01',
    endDate: '2026-09-30',
    isActive: true,
    lastVerified: '2026-01-22',
    dataSource: 'Birmingham City Council website',
    displayPriority: 11,
    tags: ['insulation', 'heating', 'local', 'birmingham'],
  },

  // ----------------------------------------
  // LEEDS
  // ----------------------------------------
  {
    id: 'leeds-home-energy-efficiency',
    name: 'Leeds Home Energy Efficiency Scheme',
    description: 'Leeds City Council programme supporting landlords with energy improvements.',
    detailedDescription: `Leeds City Council's Home Energy Efficiency Scheme provides grants and
support for landlords to improve the energy performance of rental properties. The scheme prioritises
properties in areas with high fuel poverty rates and works alongside national schemes to maximise
funding. Leeds also offers a Green Homes Grant Local Authority Delivery extension.`,
    administrator: 'local-authority',
    administratorName: 'Leeds City Council',
    maxGrantValue: 12000,
    minGrantValue: 2500,
    coverageCategories: ['insulation', 'heating', 'renewable'],
    coveredImprovements: [
      'Solid wall insulation (external and internal)',
      'Cavity wall insulation',
      'Loft insulation',
      'Air source heat pump',
      'Solar PV',
      'Underfloor insulation',
    ],
    excludedImprovements: [
      'Gas boiler replacement (except to heat pump)',
      'Window upgrades (standalone)',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: undefined,
      heatingSystemsExcluded: undefined,
      coverage: 'england',
      localAuthorityIds: ['leeds'],
      tenantIncomeThreshold: 36000,
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      landlordContributionPercent: 33,
      additionalNotes: [
        'Tenant household income must be below £36,000 or on qualifying benefits',
        'Landlord contribution of 33% typically required',
        'Higher grants available in designated priority neighbourhoods',
        'Part of West Yorkshire Combined Authority regional programme',
        'Solid wall insulation given priority',
      ],
    },
    applicationUrl: 'https://www.leeds.gov.uk/housing/home-energy-and-improvements/apply',
    infoUrl: 'https://www.leeds.gov.uk/housing/home-energy-and-improvements',
    startDate: '2024-01-01',
    endDate: '2027-03-31',
    isActive: true,
    lastVerified: '2026-01-24',
    dataSource: 'Leeds City Council website',
    displayPriority: 12,
    tags: ['insulation', 'heat-pump', 'local', 'leeds'],
  },

  // ----------------------------------------
  // LIVERPOOL
  // ----------------------------------------
  {
    id: 'liverpool-warmer-homes',
    name: 'Liverpool Warmer Homes',
    description: 'Liverpool City Council grant scheme for landlords improving energy efficiency.',
    detailedDescription: `Liverpool Warmer Homes is part of the Liverpool City Region retrofit
programme, providing grants for landlords to improve energy efficiency in rental properties.
The scheme focuses on properties in fuel poverty areas and those with the poorest energy ratings.
Liverpool has particularly high rates of solid wall properties requiring more substantial intervention.`,
    administrator: 'local-authority',
    administratorName: 'Liverpool City Council',
    maxGrantValue: 15000,
    minGrantValue: 3000,
    coverageCategories: ['insulation', 'heating', 'multiple'],
    coveredImprovements: [
      'External wall insulation',
      'Internal wall insulation',
      'Cavity wall insulation',
      'Loft insulation',
      'Air source heat pump',
      'Solar PV',
      'New efficient boiler',
    ],
    excludedImprovements: [
      'Decorative works',
      'Non-energy related repairs',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: undefined,
      heatingSystemsExcluded: undefined,
      coverage: 'england',
      localAuthorityIds: ['liverpool'],
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      landlordContributionPercent: 25,
      additionalNotes: [
        'Higher grants available for solid wall properties',
        'Landlord contribution of 25% required',
        'Priority for properties in designated regeneration areas',
        'Part of Liverpool City Region Combined Authority programme',
        'Can combine with ECO4 for eligible households',
      ],
    },
    applicationUrl: 'https://liverpool.gov.uk/housing/home-improvements/energy-grants/apply',
    infoUrl: 'https://liverpool.gov.uk/housing/home-improvements/energy-grants/',
    startDate: '2024-04-01',
    endDate: '2027-03-31',
    isActive: true,
    lastVerified: '2026-01-20',
    dataSource: 'Liverpool City Council website',
    displayPriority: 13,
    tags: ['insulation', 'solid-wall', 'local', 'liverpool'],
  },

  // ----------------------------------------
  // BRISTOL
  // ----------------------------------------
  {
    id: 'bristol-city-leap',
    name: 'Bristol City Leap - Landlord Support',
    description: 'Bristol City Council partnership offering grants for landlord energy improvements.',
    detailedDescription: `City Leap is Bristol's landmark energy partnership, with a specific programme
supporting private landlords to improve energy efficiency in rental properties. The scheme offers
grants and loans for a range of improvements, with higher funding available for heat pump installations
as part of Bristol's commitment to becoming carbon neutral by 2030.`,
    administrator: 'local-authority',
    administratorName: 'Bristol City Council / City Leap Partnership',
    maxGrantValue: 10000,
    minGrantValue: 2000,
    coverageCategories: ['insulation', 'heating', 'renewable'],
    coveredImprovements: [
      'Air source heat pump',
      'Cavity wall insulation',
      'Solid wall insulation',
      'Loft insulation',
      'Solar PV',
      'Battery storage',
      'Smart heating controls',
    ],
    excludedImprovements: [
      'Gas boiler replacement (except to low carbon)',
      'Windows (standalone)',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: ['gas-boiler', 'electric', 'oil-boiler', 'other'],
      heatingSystemsExcluded: ['heat-pump'],
      coverage: 'england',
      localAuthorityIds: ['bristol'],
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      landlordContributionPercent: 30,
      additionalNotes: [
        'Higher grants for heat pump installation',
        'Landlord contribution of 30% required',
        'Interest-free loan available for contribution',
        'Part of Bristol One City climate commitment',
        'Priority for properties switching from gas/oil to heat pump',
      ],
    },
    applicationUrl: 'https://www.bristolcityleap.co.uk/landlords/apply',
    infoUrl: 'https://www.bristol.gov.uk/residents/housing/energy-efficiency-in-the-home',
    startDate: '2024-06-01',
    endDate: '2028-03-31',
    isActive: true,
    lastVerified: '2026-01-23',
    dataSource: 'Bristol City Council / City Leap website',
    displayPriority: 14,
    tags: ['heat-pump', 'renewable', 'local', 'bristol'],
  },

  // ----------------------------------------
  // SHEFFIELD
  // ----------------------------------------
  {
    id: 'sheffield-warm-homes',
    name: 'Sheffield Warm Homes Grant',
    description: 'Sheffield City Council energy efficiency scheme for private landlords.',
    detailedDescription: `Sheffield Warm Homes provides grants for landlords to improve the energy
efficiency of rental properties. The scheme targets properties with EPC ratings of E, F, or G,
with particular focus on the city's Victorian and Edwardian housing stock with solid walls.`,
    administrator: 'local-authority',
    administratorName: 'Sheffield City Council',
    maxGrantValue: 9000,
    minGrantValue: 2000,
    coverageCategories: ['insulation', 'heating'],
    coveredImprovements: [
      'Solid wall insulation (internal or external)',
      'Cavity wall insulation',
      'Loft insulation',
      'First-time central heating',
      'Boiler upgrade',
      'Underfloor insulation',
    ],
    excludedImprovements: [
      'Heat pumps (covered by separate programme)',
      'Solar PV',
    ],
    eligibility: {
      epcRatings: ['E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: ['gas-boiler', 'electric', 'oil-boiler', 'other'],
      heatingSystemsExcluded: undefined,
      coverage: 'england',
      localAuthorityIds: ['sheffield'],
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      landlordContributionPercent: 40,
      additionalNotes: [
        'Focus on EPC E, F, G properties',
        'Landlord contribution of 40% required',
        'Solid wall insulation given priority',
        'Part of South Yorkshire regional programme',
        'Annual fund limited - applications assessed monthly',
      ],
    },
    applicationUrl: 'https://www.sheffield.gov.uk/home/housing/energy-grants-loans/apply',
    infoUrl: 'https://www.sheffield.gov.uk/home/housing/energy-grants-loans',
    startDate: '2024-04-01',
    endDate: '2027-03-31',
    isActive: true,
    lastVerified: '2026-01-21',
    dataSource: 'Sheffield City Council website',
    displayPriority: 15,
    tags: ['insulation', 'solid-wall', 'local', 'sheffield'],
  },

  // ----------------------------------------
  // NEWCASTLE
  // ----------------------------------------
  {
    id: 'newcastle-warmzone',
    name: 'Newcastle Warmzone',
    description: 'Newcastle City Council programme for landlord energy efficiency improvements.',
    detailedDescription: `Newcastle Warmzone is the city council's comprehensive programme to improve
energy efficiency in homes across Newcastle. For landlords, the scheme offers grants towards
insulation and heating improvements, with a focus on tackling fuel poverty in private rented housing.`,
    administrator: 'local-authority',
    administratorName: 'Newcastle City Council',
    maxGrantValue: 8000,
    minGrantValue: 1500,
    coverageCategories: ['insulation', 'heating'],
    coveredImprovements: [
      'Loft insulation',
      'Cavity wall insulation',
      'Internal wall insulation',
      'Boiler replacement',
      'Heating controls',
      'Draught proofing',
    ],
    excludedImprovements: [
      'External wall insulation (separate scheme)',
      'Windows',
      'Renewable energy',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: undefined,
      heatingSystemsExcluded: undefined,
      coverage: 'england',
      localAuthorityIds: ['newcastle'],
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      landlordContributionPercent: 30,
      additionalNotes: [
        'Part of North of Tyne Combined Authority programme',
        'Landlord contribution of 30% required',
        'Higher grants in designated fuel poverty areas',
        'Works with North East energy advice services',
        'Can combine with ECO4 funding',
      ],
    },
    applicationUrl: 'https://www.newcastle.gov.uk/services/housing/energy-efficiency-grants/apply',
    infoUrl: 'https://www.newcastle.gov.uk/services/housing/energy-efficiency-grants',
    startDate: '2024-04-01',
    endDate: '2027-03-31',
    isActive: true,
    lastVerified: '2026-01-19',
    dataSource: 'Newcastle City Council website',
    displayPriority: 16,
    tags: ['insulation', 'heating', 'local', 'newcastle'],
  },

  // ----------------------------------------
  // NOTTINGHAM
  // ----------------------------------------
  {
    id: 'nottingham-green-landlord',
    name: 'Nottingham Green Landlord Scheme',
    description: 'Nottingham City Council grant programme for private landlords.',
    detailedDescription: `The Nottingham Green Landlord Scheme is specifically designed to support
private landlords in improving the energy efficiency of their rental properties. The scheme offers
grants and access to interest-free loans, with higher support for landlords who sign up to the
council's Accredited Landlord scheme.`,
    administrator: 'local-authority',
    administratorName: 'Nottingham City Council',
    maxGrantValue: 7500,
    minGrantValue: 1500,
    coverageCategories: ['insulation', 'heating', 'glazing'],
    coveredImprovements: [
      'Cavity wall insulation',
      'Loft insulation',
      'Solid wall insulation',
      'Boiler replacement',
      'Double glazing',
      'Heating controls',
    ],
    excludedImprovements: [
      'Heat pumps (separate BUS signposting)',
      'Solar panels',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: undefined,
      heatingSystemsExcluded: undefined,
      coverage: 'england',
      localAuthorityIds: ['nottingham'],
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      landlordContributionPercent: 25,
      additionalNotes: [
        'Higher grants for accredited landlords',
        'Landlord contribution of 25% required',
        'Additional 10% discount for landlords joining accreditation scheme',
        'Interest-free loan available for landlord contribution',
        'Focus on student housing areas',
      ],
    },
    applicationUrl: 'https://www.nottinghamcity.gov.uk/housing/energy-advice/green-landlord/apply',
    infoUrl: 'https://www.nottinghamcity.gov.uk/housing/energy-advice/',
    startDate: '2024-01-01',
    endDate: '2026-12-31',
    isActive: true,
    lastVerified: '2026-01-18',
    dataSource: 'Nottingham City Council website',
    displayPriority: 17,
    tags: ['insulation', 'glazing', 'local', 'nottingham'],
  },

  // ----------------------------------------
  // LEICESTER
  // ----------------------------------------
  {
    id: 'leicester-affordable-warmth',
    name: 'Leicester Affordable Warmth',
    description: 'Leicester City Council energy efficiency programme for landlords.',
    detailedDescription: `Leicester Affordable Warmth is the city council's programme to tackle
fuel poverty and improve energy efficiency in homes, including private rented properties. The
scheme offers grants towards insulation and heating improvements, with priority for properties
in the city's fuel poverty hotspots.`,
    administrator: 'local-authority',
    administratorName: 'Leicester City Council',
    maxGrantValue: 6000,
    minGrantValue: 1000,
    coverageCategories: ['insulation', 'heating'],
    coveredImprovements: [
      'Loft insulation',
      'Cavity wall insulation',
      'Boiler replacement',
      'Heating controls',
      'Underfloor insulation',
    ],
    excludedImprovements: [
      'Solid wall insulation (limited budget)',
      'Renewable energy systems',
      'Windows',
    ],
    eligibility: {
      epcRatings: ['E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: undefined,
      heatingSystemsExcluded: undefined,
      coverage: 'england',
      localAuthorityIds: ['leicester'],
      requiresTenantOnBenefits: true,
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      landlordContributionPercent: 50,
      additionalNotes: [
        'Tenant must be on qualifying benefits',
        'Landlord contribution of 50% required',
        'Priority for EPC F and G properties',
        'Limited annual budget - early application advised',
        'Can top up ECO4 funding where gaps exist',
      ],
    },
    applicationUrl: 'https://www.leicester.gov.uk/your-community/housing-and-regeneration/home-energy/apply',
    infoUrl: 'https://www.leicester.gov.uk/your-community/housing-and-regeneration/home-energy/',
    startDate: '2024-04-01',
    endDate: '2026-03-31',
    isActive: true,
    lastVerified: '2026-01-17',
    dataSource: 'Leicester City Council website',
    displayPriority: 18,
    tags: ['insulation', 'heating', 'local', 'leicester', 'benefits-required'],
  },

  // ----------------------------------------
  // CAMDEN (London)
  // ----------------------------------------
  {
    id: 'camden-green-homes',
    name: 'Camden Green Homes Grant',
    description: 'Camden Council grant programme for private landlords in the borough.',
    detailedDescription: `Camden Green Homes Grant is part of Camden Council's climate action plan,
providing support for landlords to improve energy efficiency in rental properties. The scheme
offers grants towards insulation and low-carbon heating, with a focus on helping landlords
meet upcoming MEES requirements. Camden has additional support for listed buildings and
conservation area properties.`,
    administrator: 'local-authority',
    administratorName: 'London Borough of Camden',
    maxGrantValue: 12000,
    minGrantValue: 3000,
    coverageCategories: ['insulation', 'heating', 'renewable'],
    coveredImprovements: [
      'Internal wall insulation',
      'Loft insulation',
      'Underfloor insulation',
      'Air source heat pump',
      'Double/triple glazing (listed buildings)',
      'Secondary glazing',
      'Heating controls',
    ],
    excludedImprovements: [
      'External wall insulation (conservation area restrictions)',
      'Solar PV (separate scheme)',
      'Gas boiler replacement (unless to low-carbon)',
    ],
    eligibility: {
      epcRatings: ['D', 'E', 'F', 'G'],
      propertyTypes: undefined,
      tenureTypes: ['freehold', 'leasehold'],
      heatingSystemsEligible: ['gas-boiler', 'electric', 'oil-boiler', 'other'],
      heatingSystemsExcluded: undefined,
      coverage: 'england',
      localAuthorityIds: ['camden'],
      allowsRentalProperties: true,
      requiresLandlordContribution: true,
      landlordContributionPercent: 40,
      additionalNotes: [
        'London borough with high property values - proportional grants',
        'Landlord contribution of 40% required',
        'Special support for listed buildings and conservation areas',
        'Higher grants for heat pump installation',
        'Must use Camden-approved contractors',
        'Property must remain in rental sector for 7 years',
      ],
    },
    applicationUrl: 'https://www.camden.gov.uk/green-homes-grant/apply',
    infoUrl: 'https://www.camden.gov.uk/energy-efficiency-and-fuel-poverty',
    startDate: '2024-04-01',
    endDate: '2028-03-31',
    isActive: true,
    lastVerified: '2026-01-26',
    dataSource: 'Camden Council website',
    displayPriority: 19,
    tags: ['insulation', 'heat-pump', 'local', 'london', 'camden', 'listed-buildings'],
  },
];

// ============================================================
// COMBINED GRANT SCHEMES
// ============================================================

/**
 * All grant schemes combined for lookup
 */
export const ALL_GRANT_SCHEMES: GrantScheme[] = [
  ...NATIONAL_GRANT_SCHEMES,
  ...LOCAL_GRANT_SCHEMES,
];

// ============================================================
// HELPER DATA
// ============================================================

/**
 * Qualifying benefits for ECO4 and other benefit-based schemes
 * Source: Ofgem ECO4 Guidance
 */
export const QUALIFYING_BENEFITS = [
  'Universal Credit',
  'Pension Credit (Guarantee Credit)',
  'Pension Credit (Savings Credit)',
  'Income Support',
  'Income-based Jobseeker\'s Allowance (JSA)',
  'Income-related Employment and Support Allowance (ESA)',
  'Child Tax Credit (income below £18,500)',
  'Working Tax Credit',
  'Housing Benefit',
  'Child Benefit (income below £18,500)',
  'Warm Home Discount Scheme (Core Group)',
];

/**
 * Postcode area to region mapping for rough geographic matching
 * This is simplified - production should use proper postcode API
 */
export const POSTCODE_TO_REGION: Record<string, Region> = {
  // London
  'E': 'london', 'EC': 'london', 'N': 'london', 'NW': 'london',
  'SE': 'london', 'SW': 'london', 'W': 'london', 'WC': 'london',
  // South East
  'BR': 'south-east', 'CR': 'south-east', 'DA': 'south-east', 'EN': 'south-east',
  'HA': 'south-east', 'IG': 'south-east', 'KT': 'south-east', 'RM': 'south-east',
  'SM': 'south-east', 'TW': 'south-east', 'UB': 'south-east', 'WD': 'south-east',
  'BN': 'south-east', 'CT': 'south-east', 'GU': 'south-east', 'ME': 'south-east',
  'MK': 'south-east', 'OX': 'south-east', 'PO': 'south-east', 'RG': 'south-east',
  'RH': 'south-east', 'SL': 'south-east', 'SO': 'south-east', 'TN': 'south-east',
  // South West
  'BA': 'south-west', 'BH': 'south-west', 'BS': 'south-west', 'DT': 'south-west',
  'EX': 'south-west', 'GL': 'south-west', 'PL': 'south-west', 'SN': 'south-west',
  'SP': 'south-west', 'TA': 'south-west', 'TQ': 'south-west', 'TR': 'south-west',
  // East Anglia
  'CB': 'east-anglia', 'CO': 'east-anglia', 'IP': 'east-anglia', 'NR': 'east-anglia',
  'PE': 'east-anglia', 'SG': 'east-anglia', 'SS': 'east-anglia', 'CM': 'east-anglia',
  // East Midlands
  'DE': 'east-midlands', 'DN': 'east-midlands', 'LE': 'east-midlands', 'LN': 'east-midlands',
  'NG': 'east-midlands', 'NN': 'east-midlands',
  // West Midlands
  'B': 'west-midlands', 'CV': 'west-midlands', 'DY': 'west-midlands', 'HR': 'west-midlands',
  'ST': 'west-midlands', 'TF': 'west-midlands', 'WR': 'west-midlands', 'WS': 'west-midlands',
  'WV': 'west-midlands',
  // North West
  'BB': 'north-west', 'BL': 'north-west', 'CA': 'north-west', 'CH': 'north-west',
  'CW': 'north-west', 'FY': 'north-west', 'L': 'north-west', 'LA': 'north-west',
  'M': 'north-west', 'OL': 'north-west', 'PR': 'north-west', 'SK': 'north-west',
  'WA': 'north-west', 'WN': 'north-west',
  // North East
  'DH': 'north-east', 'DL': 'north-east', 'NE': 'north-east', 'SR': 'north-east',
  'TS': 'north-east',
  // Yorkshire
  'BD': 'yorkshire', 'HD': 'yorkshire', 'HG': 'yorkshire', 'HU': 'yorkshire',
  'HX': 'yorkshire', 'LS': 'yorkshire', 'S': 'yorkshire', 'WF': 'yorkshire',
  'YO': 'yorkshire',
  // Wales
  'CF': 'wales', 'LD': 'wales', 'LL': 'wales', 'NP': 'wales',
  'SA': 'wales', 'SY': 'wales',
  // Scotland
  'AB': 'scotland', 'DD': 'scotland', 'DG': 'scotland', 'EH': 'scotland',
  'FK': 'scotland', 'G': 'scotland', 'HS': 'scotland', 'IV': 'scotland',
  'KA': 'scotland', 'KW': 'scotland', 'KY': 'scotland', 'ML': 'scotland',
  'PA': 'scotland', 'PH': 'scotland', 'TD': 'scotland', 'ZE': 'scotland',
  // Northern Ireland
  'BT': 'northern-ireland',
};

/**
 * Grant eligibility disclaimer text
 */
export const GRANT_ELIGIBILITY_DISCLAIMER = `This tool provides indicative eligibility information
based on the criteria you have provided. Grant scheme eligibility is determined by scheme administrators
and may involve additional criteria not captured here. Scheme terms, funding availability, and
eligibility requirements can change without notice. Always verify eligibility directly with scheme
administrators before making decisions. Last updated: January 2026.`;

/**
 * Scheme verification schedule (days between checks)
 */
export const SCHEME_VERIFICATION_SCHEDULE = {
  national: 7,    // Weekly for national schemes
  local: 14,      // Fortnightly for local schemes
};
