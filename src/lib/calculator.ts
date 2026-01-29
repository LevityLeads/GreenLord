/**
 * Calculator Logic for GreenLord EPC Upgrade Cost Calculator
 *
 * This module provides functions to:
 * - Filter applicable improvements based on property characteristics
 * - Calculate adjusted costs with regional and property multipliers
 * - Sort recommendations by cost-effectiveness
 * - Estimate final EPC rating after improvements
 * - Determine if cost cap exemption might apply
 */

import type {
  CalculatorInputs,
  CalculatorResults,
  ImprovementRecommendation,
  EPCRating,
  PropertyType,
} from './types';
import { getRegionalCostMultiplier } from './utils';
import {
  IMPROVEMENTS,
  PROPERTY_TYPE_FACTORS,
  SIZE_FACTORS,
  EPC_RATING_POINTS,
  PROPERTY_TYPE_GUIDE_URLS,
  COST_CAP_THRESHOLD,
  type ImprovementData,
} from '@/data/calculator-data';

/**
 * Check if an improvement is applicable to the given property
 */
function isImprovementApplicable(
  improvement: ImprovementData,
  inputs: CalculatorInputs
): { applicable: boolean; reason?: string } {
  // Check property type exclusions
  if (
    improvement.exclusions.propertyTypes?.includes(inputs.propertyType)
  ) {
    return {
      applicable: false,
      reason: `Not suitable for ${inputs.propertyType.replace(/-/g, ' ')} properties`,
    };
  }

  // Check wall construction requirements
  if (
    improvement.prerequisites.wallConstruction &&
    !improvement.prerequisites.wallConstruction.includes(inputs.wallConstruction)
  ) {
    return {
      applicable: false,
      reason: `Requires ${improvement.prerequisites.wallConstruction.join(' or ')} wall construction`,
    };
  }

  // Check wall construction exclusions
  if (
    improvement.exclusions.wallConstruction?.includes(inputs.wallConstruction)
  ) {
    return {
      applicable: false,
      reason: `Not suitable for ${inputs.wallConstruction} wall construction`,
    };
  }

  // Check heating system requirements
  if (
    improvement.prerequisites.heatingSystem &&
    !improvement.prerequisites.heatingSystem.includes(inputs.heatingSystem)
  ) {
    return {
      applicable: false,
      reason: `Requires ${improvement.prerequisites.heatingSystem.join(' or ')} heating system`,
    };
  }

  // Check heating system exclusions
  if (
    improvement.exclusions.heatingSystem?.includes(inputs.heatingSystem)
  ) {
    return {
      applicable: false,
      reason: `Not applicable with ${inputs.heatingSystem.replace(/-/g, ' ')} heating`,
    };
  }

  // Check loft insulation requirements (only applicable if below recommended)
  if (improvement.prerequisites.loftInsulation) {
    if (!improvement.prerequisites.loftInsulation.includes(inputs.loftInsulation)) {
      return {
        applicable: false,
        reason: 'Loft insulation already at recommended level or not applicable',
      };
    }
  }

  // Check loft insulation exclusions
  if (
    improvement.exclusions.loftInsulation?.includes(inputs.loftInsulation)
  ) {
    return {
      applicable: false,
      reason: 'Loft insulation already adequate or property has no loft',
    };
  }

  // Check glazing requirements
  if (improvement.prerequisites.glazingType) {
    if (!improvement.prerequisites.glazingType.includes(inputs.glazingType)) {
      return {
        applicable: false,
        reason: 'Current glazing meets or exceeds this upgrade',
      };
    }
  }

  // Check glazing exclusions
  if (improvement.exclusions.glazingType?.includes(inputs.glazingType)) {
    return {
      applicable: false,
      reason: 'Already has adequate glazing',
    };
  }

  // Check applicable property types (if specified)
  if (
    improvement.applicablePropertyTypes &&
    !improvement.applicablePropertyTypes.includes(inputs.propertyType)
  ) {
    return {
      applicable: false,
      reason: `Not typically applicable to ${inputs.propertyType.replace(/-/g, ' ')} properties`,
    };
  }

  return { applicable: true };
}

/**
 * Get applicable improvements for a property
 */
export function getApplicableImprovements(
  inputs: CalculatorInputs
): ImprovementData[] {
  return IMPROVEMENTS.filter(
    (improvement) => isImprovementApplicable(improvement, inputs).applicable
  );
}

/**
 * Calculate adjusted cost for an improvement based on region, property type, and size
 */
export function calculateAdjustedCost(
  improvement: ImprovementData,
  inputs: CalculatorInputs
): { low: number; high: number; mid: number } {
  const regionalMultiplier = getRegionalCostMultiplier(inputs.region);
  const propertyMultiplier = PROPERTY_TYPE_FACTORS[inputs.propertyType];
  const sizeMultiplier = SIZE_FACTORS[Math.min(inputs.bedrooms, 6)] || SIZE_FACTORS[6];

  // Some improvements scale with property size, others don't
  const sizeScaledCategories = ['insulation', 'glazing'];
  const applySizeMultiplier = sizeScaledCategories.includes(improvement.category);

  const totalMultiplier = applySizeMultiplier
    ? regionalMultiplier * propertyMultiplier * sizeMultiplier
    : regionalMultiplier * propertyMultiplier;

  const low = Math.round(improvement.baseCostLow * totalMultiplier);
  const high = Math.round(improvement.baseCostHigh * totalMultiplier);
  const mid = Math.round((low + high) / 2);

  return { low, high, mid };
}

/**
 * Calculate cost per EPC point (cost effectiveness metric)
 */
function calculateCostPerPoint(
  costMid: number,
  epcPoints: number
): number {
  if (epcPoints <= 0) return Infinity;
  return Math.round(costMid / epcPoints);
}

/**
 * Generate prioritized improvement recommendations
 */
export function generateRecommendations(
  inputs: CalculatorInputs
): ImprovementRecommendation[] {
  const applicableImprovements = getApplicableImprovements(inputs);

  const recommendations: ImprovementRecommendation[] = applicableImprovements.map(
    (improvement) => {
      const costs = calculateAdjustedCost(improvement, inputs);
      const costPerPoint = calculateCostPerPoint(costs.mid, improvement.typicalEPCPoints);

      return {
        id: improvement.id,
        name: improvement.name,
        description: improvement.description,
        estimatedCostLow: costs.low,
        estimatedCostHigh: costs.high,
        estimatedEPCPoints: improvement.typicalEPCPoints,
        costPerPoint,
        priority: 0, // Will be set after sorting
        applicableTo: improvement.applicablePropertyTypes || [],
      };
    }
  );

  // Sort by cost-effectiveness (cost per point, lower is better)
  recommendations.sort((a, b) => a.costPerPoint - b.costPerPoint);

  // Assign priorities
  recommendations.forEach((rec, index) => {
    rec.priority = index + 1;
  });

  return recommendations;
}

/**
 * Get the starting EPC score based on current rating
 */
function getStartingEPCScore(rating: EPCRating | 'unknown'): number {
  return EPC_RATING_POINTS[rating]?.midpoint || EPC_RATING_POINTS.unknown.midpoint;
}

/**
 * Convert EPC score to rating letter
 */
function scoreToRating(score: number): EPCRating {
  if (score >= 92) return 'A';
  if (score >= 81) return 'B';
  if (score >= 69) return 'C';
  if (score >= 55) return 'D';
  if (score >= 39) return 'E';
  if (score >= 21) return 'F';
  return 'G';
}

/**
 * Estimate final EPC rating after applying recommended improvements
 * Note: This is a rough estimate. Actual EPC calculation is more complex.
 */
export function estimateFinalRating(
  currentRating: EPCRating | 'unknown',
  recommendations: ImprovementRecommendation[]
): EPCRating {
  const startingScore = getStartingEPCScore(currentRating);

  // Calculate total potential improvement
  // Apply diminishing returns - each subsequent improvement has slightly less impact
  let totalImprovement = 0;
  recommendations.forEach((rec, index) => {
    // Diminishing returns factor (first improvements have most impact)
    const diminishingFactor = Math.max(0.5, 1 - index * 0.05);
    totalImprovement += rec.estimatedEPCPoints * diminishingFactor;
  });

  // Cap improvement - can't exceed 100 and real-world gains are often less than sum of parts
  const estimatedFinalScore = Math.min(100, startingScore + totalImprovement * 0.85);

  return scoreToRating(Math.round(estimatedFinalScore));
}

/**
 * Determine if cost cap exemption is likely to apply
 * If the cost of improvements to reach EPC C exceeds £10,000, landlord may qualify
 */
export function checkCostCapExemption(
  inputs: CalculatorInputs,
  recommendations: ImprovementRecommendation[]
): { likely: boolean; totalCostToC: number; wouldReachC: boolean } {
  const startingScore = getStartingEPCScore(inputs.currentRating);
  const targetScore = 69; // Minimum for EPC C

  // If already at C or better, no exemption needed
  if (startingScore >= targetScore) {
    return { likely: false, totalCostToC: 0, wouldReachC: true };
  }

  // Calculate cumulative cost and points until we reach C
  let cumulativePoints = startingScore;
  let cumulativeCost = 0;
  let improvementIndex = 0;

  // Sort by cost-effectiveness for this calculation
  const sortedRecs = [...recommendations].sort((a, b) => a.costPerPoint - b.costPerPoint);

  while (cumulativePoints < targetScore && improvementIndex < sortedRecs.length) {
    const rec = sortedRecs[improvementIndex];
    cumulativeCost += (rec.estimatedCostLow + rec.estimatedCostHigh) / 2;
    cumulativePoints += rec.estimatedEPCPoints * 0.85; // Apply diminishing factor
    improvementIndex++;
  }

  const wouldReachC = cumulativePoints >= targetScore;
  const likely = cumulativeCost > COST_CAP_THRESHOLD && !wouldReachC;

  return {
    likely,
    totalCostToC: Math.round(cumulativeCost),
    wouldReachC,
  };
}

/**
 * Get the property type guide URL
 */
export function getPropertyTypeGuideUrl(propertyType: PropertyType): string {
  return PROPERTY_TYPE_GUIDE_URLS[propertyType] || '/property-types';
}

/**
 * Calculate total costs across all recommendations
 */
export function calculateTotalCosts(
  recommendations: ImprovementRecommendation[]
): { low: number; mid: number; high: number } {
  const totals = recommendations.reduce(
    (acc, rec) => ({
      low: acc.low + rec.estimatedCostLow,
      high: acc.high + rec.estimatedCostHigh,
    }),
    { low: 0, high: 0 }
  );

  return {
    low: totals.low,
    mid: Math.round((totals.low + totals.high) / 2),
    high: totals.high,
  };
}

/**
 * Get top recommended improvements (most cost-effective)
 */
export function getTopRecommendations(
  recommendations: ImprovementRecommendation[],
  count: number = 5
): ImprovementRecommendation[] {
  return recommendations.slice(0, count);
}

/**
 * Filter recommendations by category
 */
export function filterByCategory(
  recommendations: ImprovementRecommendation[],
  category: string
): ImprovementRecommendation[] {
  const categoryImprovements = IMPROVEMENTS.filter(
    (imp) => imp.category === category
  ).map((imp) => imp.id);

  return recommendations.filter((rec) => categoryImprovements.includes(rec.id));
}

/**
 * Get improvement details by ID
 */
export function getImprovementDetails(id: string): ImprovementData | undefined {
  return IMPROVEMENTS.find((imp) => imp.id === id);
}

/**
 * Main calculator function - generates complete results
 */
export function calculateUpgradeCosts(inputs: CalculatorInputs): CalculatorResults {
  // Generate recommendations
  const recommendations = generateRecommendations(inputs);

  // Calculate totals
  const totals = calculateTotalCosts(recommendations);

  // Estimate final rating
  const estimatedFinalRating = estimateFinalRating(inputs.currentRating, recommendations);

  // Check cost cap
  const costCapCheck = checkCostCapExemption(inputs, recommendations);

  // Get property guide URL
  const propertyTypeGuideUrl = getPropertyTypeGuideUrl(inputs.propertyType);

  return {
    totalCostLow: totals.low,
    totalCostMid: totals.mid,
    totalCostHigh: totals.high,
    recommendations,
    estimatedFinalRating,
    costCapExemptionLikely: costCapCheck.likely,
    propertyTypeGuideUrl,
  };
}

/**
 * Get reasons why certain improvements are not applicable
 */
export function getExcludedImprovements(
  inputs: CalculatorInputs
): { improvement: ImprovementData; reason: string }[] {
  const excluded: { improvement: ImprovementData; reason: string }[] = [];

  IMPROVEMENTS.forEach((improvement) => {
    const { applicable, reason } = isImprovementApplicable(improvement, inputs);
    if (!applicable && reason) {
      excluded.push({ improvement, reason });
    }
  });

  return excluded;
}

/**
 * Get quick wins - low cost, easy to implement improvements
 */
export function getQuickWins(
  recommendations: ImprovementRecommendation[]
): ImprovementRecommendation[] {
  const quickWinThreshold = 500; // Max cost for a "quick win"

  return recommendations.filter(
    (rec) => (rec.estimatedCostLow + rec.estimatedCostHigh) / 2 <= quickWinThreshold
  );
}

/**
 * Get high impact improvements (regardless of cost)
 */
export function getHighImpactImprovements(
  recommendations: ImprovementRecommendation[]
): ImprovementRecommendation[] {
  const highImpactThreshold = 6; // Minimum EPC points for "high impact"

  return recommendations
    .filter((rec) => rec.estimatedEPCPoints >= highImpactThreshold)
    .sort((a, b) => b.estimatedEPCPoints - a.estimatedEPCPoints);
}

/**
 * Calculate improvements needed to reach target rating
 */
export function getImprovementsToReachTarget(
  inputs: CalculatorInputs,
  targetRating: EPCRating
): {
  improvements: ImprovementRecommendation[];
  totalCost: { low: number; mid: number; high: number };
  canReachTarget: boolean;
} {
  const targetScore = EPC_RATING_POINTS[targetRating].min;
  const startingScore = getStartingEPCScore(inputs.currentRating);

  if (startingScore >= targetScore) {
    return {
      improvements: [],
      totalCost: { low: 0, mid: 0, high: 0 },
      canReachTarget: true,
    };
  }

  const allRecommendations = generateRecommendations(inputs);
  const selectedImprovements: ImprovementRecommendation[] = [];
  let currentScore = startingScore;

  // Select improvements by cost-effectiveness until target is reached
  for (const rec of allRecommendations) {
    if (currentScore >= targetScore) break;

    selectedImprovements.push(rec);
    currentScore += rec.estimatedEPCPoints * 0.85; // Diminishing returns
  }

  const totalCost = calculateTotalCosts(selectedImprovements);
  const canReachTarget = currentScore >= targetScore;

  return {
    improvements: selectedImprovements,
    totalCost,
    canReachTarget,
  };
}
