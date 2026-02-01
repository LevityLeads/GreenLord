// EPC Analysis logic and data for the EPC Analyser Tool

import type { EPCRating, PropertyType } from './types';

// Construction age bands
export type ConstructionAgeBand =
  | 'pre-1919'
  | '1919-1944'
  | '1945-1964'
  | '1965-1979'
  | '1980-1991'
  | '1992-2006'
  | '2007-present';

// Wall types as noted on EPC
export type WallTypeNoted = 'solid' | 'cavity-unfilled' | 'cavity-filled' | 'unknown';

// Wall insulation as noted on EPC
export type WallInsulationNoted = 'none' | 'partial' | 'full' | 'unknown';

// Roof insulation depths
export type RoofInsulationNoted = 'none' | 'under-100mm' | '100-199mm' | '200-270mm' | '270mm-plus' | 'unknown';

// Floor insulation types
export type FloorInsulationNoted = 'none' | 'insulated' | 'suspended' | 'unknown';

// Glazing types
export type GlazingTypeNoted = 'single' | 'double-pre-2002' | 'double-post-2002' | 'triple' | 'mixed';

// Heating systems
export type MainHeatingSystem = 'gas-boiler' | 'oil-boiler' | 'electric' | 'heat-pump' | 'other';

// Heating controls
export type HeatingControls = 'none' | 'programmer' | 'programmer-thermostat' | 'programmer-trvs' | 'smart';

// Hot water systems
export type HotWaterSystem = 'from-boiler' | 'electric-immersion' | 'heat-pump' | 'unknown';

// EPC Recommendations that might be listed
export type EPCRecommendation =
  | 'loft-insulation'
  | 'cavity-wall-insulation'
  | 'solid-wall-insulation'
  | 'floor-insulation'
  | 'glazing'
  | 'new-boiler'
  | 'heating-controls'
  | 'solar-panels'
  | 'low-energy-lighting'
  | 'hot-water-cylinder-insulation'
  | 'draught-proofing';

// Form input data structure
export interface EPCAnalyserInputs {
  // Step 1 - Basic Details
  currentRating: EPCRating;
  currentScore: number;
  propertyType: PropertyType;
  constructionAge: ConstructionAgeBand;

  // Step 2 - What Your EPC Says
  wallType: WallTypeNoted;
  wallInsulation: WallInsulationNoted;
  roofInsulation: RoofInsulationNoted;
  floorInsulation: FloorInsulationNoted;
  glazingType: GlazingTypeNoted;
  heatingSystem: MainHeatingSystem;
  heatingControls: HeatingControls;
  hotWater: HotWaterSystem;

  // Step 3 - Recommendations Listed
  recommendations: EPCRecommendation[];
}

// Impact level for score factors
export type ImpactLevel = 'high' | 'medium' | 'low';

// Individual factor analysis
export interface FactorAnalysis {
  id: string;
  name: string;
  category: 'walls' | 'roof' | 'floor' | 'windows' | 'heating' | 'hot-water';
  currentStatus: string;
  impact: ImpactLevel;
  typicalForProperty: string;
  potentialPoints: number;
  explanation: string;
}

// Assessor assumption warning
export interface AssessorAssumption {
  id: string;
  title: string;
  description: string;
  checkWith: string;
  severity: 'high' | 'medium' | 'low';
}

// Quick win suggestion
export interface QuickWin {
  id: string;
  title: string;
  description: string;
  estimatedCost: string;
  potentialBenefit: string;
}

// Recommendation analysis
export interface RecommendationAnalysis {
  id: EPCRecommendation;
  name: string;
  estimatedCostLow: number;
  estimatedCostHigh: number;
  estimatedPoints: number;
  priority: 1 | 2 | 3 | 4 | 5;
  contentLink: string;
  notes: string;
}

// Full analysis results
export interface EPCAnalysisResults {
  // Context
  scoreComparison: {
    userScore: number;
    typicalScore: number;
    typicalRating: EPCRating;
    comparison: 'above' | 'below' | 'average';
    explanation: string;
  };

  // Factor analysis
  factors: FactorAnalysis[];

  // Potential issues
  assessorAssumptions: AssessorAssumption[];

  // Quick wins
  quickWins: QuickWin[];

  // Recommendation analysis
  recommendationAnalysis: RecommendationAnalysis[];

  // Property guide URL
  propertyGuideUrl: string;
}

// Typical EPC scores by property type and age
const typicalScores: Record<PropertyType, Partial<Record<ConstructionAgeBand, { score: number; rating: EPCRating }>>> = {
  'victorian-terrace': {
    'pre-1919': { score: 38, rating: 'F' },
    '1919-1944': { score: 42, rating: 'E' },
  },
  'edwardian-1920s': {
    'pre-1919': { score: 40, rating: 'E' },
    '1919-1944': { score: 45, rating: 'E' },
  },
  '1930s-semi': {
    '1919-1944': { score: 48, rating: 'E' },
    '1945-1964': { score: 52, rating: 'D' },
  },
  '1950s-1960s': {
    '1945-1964': { score: 55, rating: 'D' },
    '1965-1979': { score: 58, rating: 'D' },
  },
  '1970s-1980s': {
    '1965-1979': { score: 58, rating: 'D' },
    '1980-1991': { score: 62, rating: 'D' },
  },
  '1990s-later': {
    '1992-2006': { score: 68, rating: 'D' },
    '2007-present': { score: 78, rating: 'C' },
  },
  'purpose-built-flat': {
    '1945-1964': { score: 52, rating: 'D' },
    '1965-1979': { score: 58, rating: 'D' },
    '1980-1991': { score: 65, rating: 'D' },
    '1992-2006': { score: 72, rating: 'C' },
    '2007-present': { score: 80, rating: 'C' },
  },
  'converted-flat': {
    'pre-1919': { score: 42, rating: 'E' },
    '1919-1944': { score: 48, rating: 'E' },
    '1945-1964': { score: 52, rating: 'D' },
  },
  'hmo': {
    'pre-1919': { score: 35, rating: 'F' },
    '1919-1944': { score: 42, rating: 'E' },
    '1945-1964': { score: 50, rating: 'E' },
    '1965-1979': { score: 55, rating: 'D' },
  },
};

// Default typical score if not found
const defaultTypicalScore = { score: 52, rating: 'D' as EPCRating };

// Recommendation details
const recommendationDetails: Record<EPCRecommendation, {
  name: string;
  costLow: number;
  costHigh: number;
  points: number;
  priority: 1 | 2 | 3 | 4 | 5;
  link: string;
  notes: string;
}> = {
  'loft-insulation': {
    name: 'Increase loft insulation',
    costLow: 300,
    costHigh: 600,
    points: 4,
    priority: 1,
    link: '/improvements/loft-insulation',
    notes: 'One of the most cost-effective improvements. Target 270mm+ depth.',
  },
  'cavity-wall-insulation': {
    name: 'Cavity wall insulation',
    costLow: 500,
    costHigh: 1500,
    points: 8,
    priority: 2,
    link: '/improvements/cavity-wall-insulation',
    notes: 'Only applicable if walls are cavity construction and currently unfilled.',
  },
  'solid-wall-insulation': {
    name: 'Solid wall insulation',
    costLow: 8000,
    costHigh: 22000,
    points: 12,
    priority: 4,
    link: '/improvements/solid-wall-insulation',
    notes: 'Major investment. Can be internal or external. Often required for older properties.',
  },
  'floor-insulation': {
    name: 'Floor insulation',
    costLow: 800,
    costHigh: 2500,
    points: 3,
    priority: 3,
    link: '/improvements/floor-insulation',
    notes: 'Easier to install with suspended timber floors. Less impactful than walls.',
  },
  'glazing': {
    name: 'Double or triple glazing',
    costLow: 4000,
    costHigh: 10000,
    points: 6,
    priority: 4,
    link: '/improvements/glazing',
    notes: 'High upfront cost but long lifespan. Consider secondary glazing as alternative.',
  },
  'new-boiler': {
    name: 'New condensing boiler',
    costLow: 2500,
    costHigh: 4500,
    points: 8,
    priority: 2,
    link: '/improvements/boiler-upgrade',
    notes: 'If boiler is over 15 years old, replacement typically worthwhile.',
  },
  'heating-controls': {
    name: 'Improved heating controls',
    costLow: 150,
    costHigh: 500,
    points: 3,
    priority: 1,
    link: '/improvements/heating-controls',
    notes: 'Low cost, good impact. TRVs on all radiators plus programmer/thermostat.',
  },
  'solar-panels': {
    name: 'Solar photovoltaic panels',
    costLow: 5000,
    costHigh: 10000,
    points: 10,
    priority: 5,
    link: '/improvements/solar-panels',
    notes: 'Significant upfront cost but ongoing savings. Check roof orientation.',
  },
  'low-energy-lighting': {
    name: 'Low energy lighting',
    costLow: 50,
    costHigh: 200,
    points: 2,
    priority: 1,
    link: '/improvements/lighting',
    notes: 'Quick win. Replace all bulbs with LED. Low cost, easy DIY.',
  },
  'hot-water-cylinder-insulation': {
    name: 'Hot water cylinder insulation',
    costLow: 20,
    costHigh: 50,
    points: 1,
    priority: 1,
    link: '/improvements/hot-water-insulation',
    notes: 'Very low cost DIY improvement. Often overlooked.',
  },
  'draught-proofing': {
    name: 'Draught proofing',
    costLow: 100,
    costHigh: 350,
    points: 2,
    priority: 1,
    link: '/improvements/draught-proofing',
    notes: 'Low cost with noticeable comfort improvement. DIY-friendly.',
  },
};

// Property type guide URLs
const propertyGuideUrls: Record<PropertyType, string> = {
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

// Helper function to get typical score
function getTypicalScore(propertyType: PropertyType, age: ConstructionAgeBand): { score: number; rating: EPCRating } {
  const typeScores = typicalScores[propertyType];
  if (typeScores && typeScores[age]) {
    return typeScores[age]!;
  }
  // Fallback: find closest age band for property type
  if (typeScores) {
    const ages = Object.keys(typeScores) as ConstructionAgeBand[];
    if (ages.length > 0) {
      return typeScores[ages[0]]!;
    }
  }
  return defaultTypicalScore;
}

// Analyze factors affecting score
function analyzeFactors(inputs: EPCAnalyserInputs): FactorAnalysis[] {
  const factors: FactorAnalysis[] = [];
  const { constructionAge, wallType, wallInsulation, roofInsulation, floorInsulation, glazingType, heatingSystem, heatingControls, hotWater } = inputs;

  // Wall analysis
  const wallStatus = getWallStatusDescription(wallType, wallInsulation);
  const wallTypical = getTypicalWallForAge(constructionAge);
  const wallImpact = calculateWallImpact(wallType, wallInsulation);

  factors.push({
    id: 'walls',
    name: 'Wall Construction & Insulation',
    category: 'walls',
    currentStatus: wallStatus,
    impact: wallImpact,
    typicalForProperty: wallTypical,
    potentialPoints: wallType === 'solid' && wallInsulation === 'none' ? 12 :
                     wallType === 'cavity-unfilled' ? 8 : 2,
    explanation: getWallExplanation(wallType, wallInsulation, constructionAge),
  });

  // Roof analysis
  const roofStatus = getRoofStatusDescription(roofInsulation);
  const roofImpact: ImpactLevel = roofInsulation === 'none' ? 'high' :
                                   roofInsulation === 'under-100mm' ? 'medium' : 'low';

  factors.push({
    id: 'roof',
    name: 'Roof Insulation',
    category: 'roof',
    currentStatus: roofStatus,
    impact: roofImpact,
    typicalForProperty: 'Modern standard is 270mm+',
    potentialPoints: roofInsulation === 'none' ? 5 :
                     roofInsulation === 'under-100mm' ? 4 :
                     roofInsulation === '100-199mm' ? 2 : 0,
    explanation: getRoofExplanation(roofInsulation),
  });

  // Floor analysis
  const floorStatus = getFloorStatusDescription(floorInsulation);
  const floorImpact: ImpactLevel = floorInsulation === 'none' ? 'medium' : 'low';

  factors.push({
    id: 'floor',
    name: 'Floor Insulation',
    category: 'floor',
    currentStatus: floorStatus,
    impact: floorImpact,
    typicalForProperty: 'Often uninsulated in older properties',
    potentialPoints: floorInsulation === 'none' ? 3 : 0,
    explanation: 'Floor insulation has a moderate impact on EPC score. Suspended timber floors are easier to insulate.',
  });

  // Windows analysis
  const windowStatus = getWindowStatusDescription(glazingType);
  const windowImpact: ImpactLevel = glazingType === 'single' ? 'high' :
                                     glazingType === 'mixed' || glazingType === 'double-pre-2002' ? 'medium' : 'low';

  factors.push({
    id: 'windows',
    name: 'Windows & Glazing',
    category: 'windows',
    currentStatus: windowStatus,
    impact: windowImpact,
    typicalForProperty: 'Most properties now have double glazing',
    potentialPoints: glazingType === 'single' ? 6 :
                     glazingType === 'mixed' ? 3 :
                     glazingType === 'double-pre-2002' ? 2 : 0,
    explanation: getWindowExplanation(glazingType),
  });

  // Heating analysis
  const heatingStatus = getHeatingStatusDescription(heatingSystem, heatingControls);
  const heatingImpact = calculateHeatingImpact(heatingSystem, heatingControls);

  factors.push({
    id: 'heating',
    name: 'Heating System & Controls',
    category: 'heating',
    currentStatus: heatingStatus,
    impact: heatingImpact,
    typicalForProperty: 'Modern condensing gas boiler with full controls',
    potentialPoints: getHeatingPotentialPoints(heatingSystem, heatingControls),
    explanation: getHeatingExplanation(heatingSystem, heatingControls),
  });

  // Hot water analysis
  const hotWaterStatus = getHotWaterDescription(hotWater);
  const hotWaterImpact: ImpactLevel = hotWater === 'electric-immersion' ? 'high' : 'low';

  factors.push({
    id: 'hot-water',
    name: 'Hot Water System',
    category: 'hot-water',
    currentStatus: hotWaterStatus,
    impact: hotWaterImpact,
    typicalForProperty: 'Typically from main heating system',
    potentialPoints: hotWater === 'electric-immersion' ? 5 : 0,
    explanation: hotWater === 'electric-immersion'
      ? 'Electric immersion heaters are inefficient and score poorly on EPCs.'
      : 'Hot water from the boiler or heat pump is typically efficient.',
  });

  return factors;
}

// Identify potential assessor assumptions
function identifyAssessorAssumptions(inputs: EPCAnalyserInputs): AssessorAssumption[] {
  const assumptions: AssessorAssumption[] = [];
  const { constructionAge, wallType, wallInsulation, roofInsulation, propertyType } = inputs;

  // Pre-1919 property marked as cavity walls
  if ((constructionAge === 'pre-1919' || constructionAge === '1919-1944') &&
      (wallType === 'cavity-filled' || wallType === 'cavity-unfilled')) {
    assumptions.push({
      id: 'cavity-wall-pre-1930',
      title: 'Cavity walls recorded for older property',
      description: `Your EPC says your property has ${wallType === 'cavity-filled' ? 'filled cavity' : 'unfilled cavity'} walls, but properties built before 1930 typically have solid walls. Cavity wall construction became standard in the 1930s.`,
      checkWith: 'Request a surveyor to confirm wall construction type',
      severity: 'high',
    });
  }

  // 1980s+ property marked as no loft insulation
  if (['1980-1991', '1992-2006', '2007-present'].includes(constructionAge) &&
      roofInsulation === 'none' &&
      !['purpose-built-flat', 'converted-flat'].includes(propertyType)) {
    assumptions.push({
      id: 'no-insulation-modern',
      title: 'No loft insulation recorded for modern property',
      description: 'Your EPC shows no loft insulation, but properties built after 1980 were generally required to have some insulation. The assessor may not have been able to access the loft.',
      checkWith: 'Check your loft space if accessible, or request a reassessment with loft access',
      severity: 'medium',
    });
  }

  // Pre-1919 marked as having full wall insulation
  if (constructionAge === 'pre-1919' && wallInsulation === 'full' && wallType !== 'solid') {
    assumptions.push({
      id: 'full-insulation-victorian',
      title: 'Full wall insulation recorded for Victorian property',
      description: 'Victorian properties with solid walls are rarely fully insulated throughout. This may be an assessor assumption rather than a verified finding.',
      checkWith: 'Check if you have documentation confirming wall insulation installation',
      severity: 'medium',
    });
  }

  // Unknown wall type defaults
  if (wallType === 'unknown') {
    assumptions.push({
      id: 'unknown-wall-default',
      title: 'Wall type marked as unknown',
      description: 'When assessors cannot determine wall type, they often assume the worst case (solid uninsulated). This may be hurting your score unnecessarily.',
      checkWith: 'A survey or bore test can confirm wall construction type',
      severity: 'medium',
    });
  }

  // Room-in-roof insulation often missed
  if (['pre-1919', '1919-1944', '1945-1964'].includes(constructionAge) &&
      (roofInsulation === 'none' || roofInsulation === 'under-100mm')) {
    assumptions.push({
      id: 'room-in-roof',
      title: 'Room-in-roof insulation may be missed',
      description: 'If your property has converted loft rooms, insulation in the roof slope may not have been properly recorded. This is a common oversight.',
      checkWith: 'Confirm with assessor that any room-in-roof insulation was recorded',
      severity: 'low',
    });
  }

  return assumptions;
}

// Identify quick wins
function identifyQuickWins(inputs: EPCAnalyserInputs): QuickWin[] {
  const quickWins: QuickWin[] = [];
  const { recommendations, heatingControls, roofInsulation, hotWater } = inputs;

  // LED lighting - often not on recommendations but easy win
  if (!recommendations.includes('low-energy-lighting')) {
    quickWins.push({
      id: 'led-lighting',
      title: 'Switch to LED bulbs throughout',
      description: 'Even if not on your EPC recommendations, replacing all bulbs with LED can add 1-2 points and reduce energy bills immediately.',
      estimatedCost: '50-150',
      potentialBenefit: '1-2 EPC points',
    });
  }

  // Draught proofing
  if (!recommendations.includes('draught-proofing')) {
    quickWins.push({
      id: 'draught-proofing',
      title: 'Draught proofing doors and windows',
      description: 'Sealing gaps around doors and windows is low-cost and can improve both comfort and energy efficiency.',
      estimatedCost: '100-300',
      potentialBenefit: '1-2 EPC points',
    });
  }

  // Heating controls upgrade
  if (heatingControls === 'none' || heatingControls === 'programmer') {
    quickWins.push({
      id: 'trv-installation',
      title: 'Add thermostatic radiator valves (TRVs)',
      description: 'TRVs on all radiators allow room-by-room temperature control and are relatively inexpensive to fit.',
      estimatedCost: '150-400',
      potentialBenefit: '2-3 EPC points',
    });
  }

  // Loft insulation top-up
  if (roofInsulation === 'under-100mm' || roofInsulation === '100-199mm') {
    quickWins.push({
      id: 'loft-topup',
      title: 'Top up loft insulation to 270mm+',
      description: 'Adding extra insulation on top of existing is straightforward and cost-effective.',
      estimatedCost: '200-400',
      potentialBenefit: '2-4 EPC points',
    });
  }

  // Hot water cylinder jacket
  if (hotWater === 'from-boiler' || hotWater === 'electric-immersion') {
    quickWins.push({
      id: 'cylinder-jacket',
      title: 'Insulate hot water cylinder',
      description: 'If you have a hot water cylinder without a factory-fitted foam jacket, adding one is very cheap and effective.',
      estimatedCost: '15-25',
      potentialBenefit: '1 EPC point',
    });
  }

  // Pipe lagging
  quickWins.push({
    id: 'pipe-lagging',
    title: 'Insulate hot water pipes',
    description: 'Lagging exposed hot water pipes in lofts and under floors reduces heat loss.',
    estimatedCost: '20-50',
    potentialBenefit: 'Minor improvement',
  });

  return quickWins;
}

// Analyze listed recommendations
function analyzeRecommendations(recommendations: EPCRecommendation[]): RecommendationAnalysis[] {
  return recommendations
    .map(rec => {
      const details = recommendationDetails[rec];
      return {
        id: rec,
        name: details.name,
        estimatedCostLow: details.costLow,
        estimatedCostHigh: details.costHigh,
        estimatedPoints: details.points,
        priority: details.priority,
        contentLink: details.link,
        notes: details.notes,
      };
    })
    .sort((a, b) => a.priority - b.priority);
}

// Main analysis function
export function analyzeEPC(inputs: EPCAnalyserInputs): EPCAnalysisResults {
  const { propertyType, constructionAge, currentScore } = inputs;

  // Get typical score for comparison
  const typical = getTypicalScore(propertyType, constructionAge);

  // Determine comparison
  let comparison: 'above' | 'below' | 'average';
  let explanation: string;

  if (currentScore > typical.score + 5) {
    comparison = 'above';
    explanation = `Your score of ${currentScore} is ${currentScore - typical.score} points above the typical score of ${typical.score} for this type of property. This suggests your property has some beneficial features already.`;
  } else if (currentScore < typical.score - 5) {
    comparison = 'below';
    explanation = `Your score of ${currentScore} is ${typical.score - currentScore} points below the typical score of ${typical.score} for this type of property. There may be specific issues dragging your score down.`;
  } else {
    comparison = 'average';
    explanation = `Your score of ${currentScore} is typical for this type of property (average: ${typical.score}). Common improvements for this property type should help improve your rating.`;
  }

  return {
    scoreComparison: {
      userScore: currentScore,
      typicalScore: typical.score,
      typicalRating: typical.rating,
      comparison,
      explanation,
    },
    factors: analyzeFactors(inputs),
    assessorAssumptions: identifyAssessorAssumptions(inputs),
    quickWins: identifyQuickWins(inputs),
    recommendationAnalysis: analyzeRecommendations(inputs.recommendations),
    propertyGuideUrl: propertyGuideUrls[propertyType],
  };
}

// Helper functions for status descriptions
function getWallStatusDescription(wallType: WallTypeNoted, insulation: WallInsulationNoted): string {
  const typeStr = {
    'solid': 'Solid walls',
    'cavity-unfilled': 'Unfilled cavity walls',
    'cavity-filled': 'Filled cavity walls',
    'unknown': 'Wall type unknown',
  }[wallType];

  const insStr = {
    'none': 'no insulation',
    'partial': 'partial insulation',
    'full': 'full insulation',
    'unknown': 'insulation unknown',
  }[insulation];

  return `${typeStr} with ${insStr}`;
}

function getTypicalWallForAge(age: ConstructionAgeBand): string {
  if (age === 'pre-1919' || age === '1919-1944') {
    return 'Typically solid walls (9-inch brick or stone)';
  } else if (age === '1945-1964' || age === '1965-1979') {
    return 'Usually cavity walls, often unfilled';
  } else {
    return 'Cavity walls with some insulation';
  }
}

function calculateWallImpact(wallType: WallTypeNoted, insulation: WallInsulationNoted): ImpactLevel {
  if (wallType === 'solid' && insulation === 'none') return 'high';
  if (wallType === 'cavity-unfilled') return 'high';
  if (insulation === 'none' || insulation === 'partial') return 'medium';
  return 'low';
}

function getWallExplanation(wallType: WallTypeNoted, insulation: WallInsulationNoted, age: ConstructionAgeBand): string {
  if (wallType === 'solid' && insulation === 'none') {
    return 'Uninsulated solid walls are one of the biggest drags on EPC scores. Internal or external wall insulation can add 10-15 points but is a significant investment.';
  }
  if (wallType === 'cavity-unfilled') {
    return 'Unfilled cavity walls represent a good opportunity - cavity wall insulation is relatively affordable and can add 6-10 points.';
  }
  if (wallType === 'cavity-filled' && insulation === 'full') {
    return 'Your walls are well insulated, which is positive for your EPC score.';
  }
  return 'Wall insulation is typically one of the most impactful factors for EPC scores.';
}

function getRoofStatusDescription(insulation: RoofInsulationNoted): string {
  return {
    'none': 'No loft insulation',
    'under-100mm': 'Less than 100mm loft insulation',
    '100-199mm': '100-199mm loft insulation',
    '200-270mm': '200-270mm loft insulation',
    '270mm-plus': '270mm+ loft insulation (recommended level)',
    'unknown': 'Loft insulation depth unknown',
  }[insulation];
}

function getRoofExplanation(insulation: RoofInsulationNoted): string {
  if (insulation === 'none' || insulation === 'under-100mm') {
    return 'Topping up loft insulation to 270mm+ is one of the most cost-effective improvements you can make.';
  }
  if (insulation === '100-199mm') {
    return 'Your loft has some insulation but is below the recommended 270mm. Topping up is straightforward and inexpensive.';
  }
  if (insulation === '270mm-plus') {
    return 'Your loft insulation meets the current recommended standard.';
  }
  return 'Loft insulation is typically a quick win for improving EPC scores.';
}

function getFloorStatusDescription(insulation: FloorInsulationNoted): string {
  return {
    'none': 'No floor insulation',
    'insulated': 'Floor insulated',
    'suspended': 'Suspended floor (may be insulated)',
    'unknown': 'Floor insulation status unknown',
  }[insulation];
}

function getWindowStatusDescription(glazing: GlazingTypeNoted): string {
  return {
    'single': 'Single glazed windows',
    'double-pre-2002': 'Double glazing installed before 2002',
    'double-post-2002': 'Double glazing installed after 2002',
    'triple': 'Triple glazed windows',
    'mixed': 'Mixed glazing (some single, some double)',
  }[glazing];
}

function getWindowExplanation(glazing: GlazingTypeNoted): string {
  if (glazing === 'single') {
    return 'Single glazing significantly impacts your EPC score. Consider secondary glazing as a lower-cost alternative to full replacement.';
  }
  if (glazing === 'mixed') {
    return 'Upgrading remaining single-glazed windows would improve your score.';
  }
  if (glazing === 'double-pre-2002') {
    return 'Older double glazing is less efficient than modern units. Replacement may be worthwhile if other issues are addressed.';
  }
  return 'Your windows are performing well for EPC purposes.';
}

function getHeatingStatusDescription(system: MainHeatingSystem, controls: HeatingControls): string {
  const systemStr = {
    'gas-boiler': 'Gas boiler',
    'oil-boiler': 'Oil boiler',
    'electric': 'Electric heating',
    'heat-pump': 'Heat pump',
    'other': 'Other heating system',
  }[system];

  const controlsStr = {
    'none': 'no controls',
    'programmer': 'programmer only',
    'programmer-thermostat': 'programmer and room thermostat',
    'programmer-trvs': 'programmer, thermostat and TRVs',
    'smart': 'smart controls',
  }[controls];

  return `${systemStr} with ${controlsStr}`;
}

function calculateHeatingImpact(system: MainHeatingSystem, controls: HeatingControls): ImpactLevel {
  if (system === 'electric') return 'high';
  if (system === 'oil-boiler') return 'medium';
  if (controls === 'none' || controls === 'programmer') return 'medium';
  return 'low';
}

function getHeatingPotentialPoints(system: MainHeatingSystem, controls: HeatingControls): number {
  let points = 0;
  if (system === 'electric') points += 8;
  else if (system === 'oil-boiler') points += 4;

  if (controls === 'none') points += 4;
  else if (controls === 'programmer') points += 3;

  return points;
}

function getHeatingExplanation(system: MainHeatingSystem, controls: HeatingControls): string {
  if (system === 'electric') {
    return 'Electric heating scores poorly on EPCs due to higher carbon emissions. A heat pump or gas boiler would significantly improve your rating.';
  }
  if (controls === 'none' || controls === 'programmer') {
    return 'Adding thermostatic radiator valves (TRVs) and a room thermostat is an affordable way to improve your score.';
  }
  if (system === 'heat-pump') {
    return 'Heat pumps score very well on EPCs due to their high efficiency.';
  }
  return 'Your heating system and controls are contributing positively to your EPC score.';
}

function getHotWaterDescription(hotWater: HotWaterSystem): string {
  return {
    'from-boiler': 'Hot water from main boiler',
    'electric-immersion': 'Electric immersion heater',
    'heat-pump': 'Hot water from heat pump',
    'unknown': 'Hot water system unknown',
  }[hotWater];
}

// Form options exports
export const CONSTRUCTION_AGE_OPTIONS = [
  { value: 'pre-1919', label: 'Pre-1919 (Victorian/Edwardian)' },
  { value: '1919-1944', label: '1919-1944 (Interwar)' },
  { value: '1945-1964', label: '1945-1964 (Post-war)' },
  { value: '1965-1979', label: '1965-1979' },
  { value: '1980-1991', label: '1980-1991' },
  { value: '1992-2006', label: '1992-2006' },
  { value: '2007-present', label: '2007-present' },
];

export const WALL_TYPE_OPTIONS = [
  { value: 'solid', label: 'Solid walls' },
  { value: 'cavity-unfilled', label: 'Cavity walls (unfilled)' },
  { value: 'cavity-filled', label: 'Cavity walls (filled)' },
  { value: 'unknown', label: 'Unknown' },
];

export const WALL_INSULATION_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'partial', label: 'Partial' },
  { value: 'full', label: 'Full' },
  { value: 'unknown', label: 'Unknown' },
];

export const ROOF_INSULATION_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'under-100mm', label: 'Under 100mm' },
  { value: '100-199mm', label: '100-199mm' },
  { value: '200-270mm', label: '200-270mm' },
  { value: '270mm-plus', label: '270mm+ (recommended)' },
  { value: 'unknown', label: 'Unknown' },
];

export const FLOOR_INSULATION_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'insulated', label: 'Insulated' },
  { value: 'suspended', label: 'Suspended floor' },
  { value: 'unknown', label: 'Unknown' },
];

export const GLAZING_TYPE_OPTIONS = [
  { value: 'single', label: 'Single glazing' },
  { value: 'double-pre-2002', label: 'Double glazing (pre-2002)' },
  { value: 'double-post-2002', label: 'Double glazing (post-2002)' },
  { value: 'triple', label: 'Triple glazing' },
  { value: 'mixed', label: 'Mixed (some single, some double)' },
];

export const HEATING_SYSTEM_OPTIONS = [
  { value: 'gas-boiler', label: 'Gas boiler' },
  { value: 'oil-boiler', label: 'Oil boiler' },
  { value: 'electric', label: 'Electric heating' },
  { value: 'heat-pump', label: 'Heat pump' },
  { value: 'other', label: 'Other' },
];

export const HEATING_CONTROLS_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'programmer', label: 'Programmer only' },
  { value: 'programmer-thermostat', label: 'Programmer + room thermostat' },
  { value: 'programmer-trvs', label: 'Programmer + thermostat + TRVs' },
  { value: 'smart', label: 'Smart controls' },
];

export const HOT_WATER_OPTIONS = [
  { value: 'from-boiler', label: 'From main boiler' },
  { value: 'electric-immersion', label: 'Electric immersion heater' },
  { value: 'heat-pump', label: 'From heat pump' },
  { value: 'unknown', label: 'Unknown' },
];

export const EPC_RECOMMENDATION_OPTIONS: { value: EPCRecommendation; label: string }[] = [
  { value: 'loft-insulation', label: 'Increase loft insulation' },
  { value: 'cavity-wall-insulation', label: 'Cavity wall insulation' },
  { value: 'solid-wall-insulation', label: 'Solid wall insulation' },
  { value: 'floor-insulation', label: 'Floor insulation' },
  { value: 'glazing', label: 'Double/triple glazing' },
  { value: 'new-boiler', label: 'New boiler' },
  { value: 'heating-controls', label: 'Heating controls' },
  { value: 'solar-panels', label: 'Solar panels' },
  { value: 'low-energy-lighting', label: 'Low energy lighting' },
  { value: 'hot-water-cylinder-insulation', label: 'Hot water cylinder insulation' },
  { value: 'draught-proofing', label: 'Draught proofing' },
];
