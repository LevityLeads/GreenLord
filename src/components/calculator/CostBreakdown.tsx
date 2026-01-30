'use client';

import { PoundSterling, TrendingDown, TrendingUp, Minus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { Tooltip } from '@/components/ui/Tooltip';
import { cn, formatCurrency } from '@/lib/utils';
import type { ImprovementRecommendation, EPCRating } from '@/lib/types';

interface CostBreakdownProps {
  recommendations: ImprovementRecommendation[];
  totalCostLow: number;
  totalCostMid: number;
  totalCostHigh: number;
  currentRating: EPCRating | 'unknown';
  estimatedFinalRating: EPCRating;
  costCapExemptionLikely: boolean;
}

const categoryConfig: Record<string, { label: string; color: string }> = {
  insulation: { label: 'Insulation', color: 'bg-primary-500' },
  heating: { label: 'Heating', color: 'bg-accent-500' },
  glazing: { label: 'Glazing', color: 'bg-success-500' },
  controls: { label: 'Controls', color: 'bg-warning-500' },
  renewable: { label: 'Renewables', color: 'bg-purple-500' },
  other: { label: 'Other', color: 'bg-neutral-400' },
};

const ratingColors: Record<EPCRating | 'unknown', string> = {
  A: 'bg-[#008054]',
  B: 'bg-[#19b459]',
  C: 'bg-[#8dce46]',
  D: 'bg-[#ffd500]',
  E: 'bg-[#fcaa65]',
  F: 'bg-[#ef8023]',
  G: 'bg-[#e9153b]',
  unknown: 'bg-neutral-400',
};

const ratingTextColors: Record<EPCRating | 'unknown', string> = {
  A: 'text-white',
  B: 'text-white',
  C: 'text-neutral-900',
  D: 'text-neutral-900',
  E: 'text-neutral-900',
  F: 'text-white',
  G: 'text-white',
  unknown: 'text-white',
};

export function CostBreakdown({
  recommendations,
  totalCostLow,
  totalCostMid,
  totalCostHigh,
  currentRating,
  estimatedFinalRating,
  costCapExemptionLikely,
}: CostBreakdownProps) {
  // Calculate costs by category
  const costsByCategory = recommendations.reduce(
    (acc, rec) => {
      // Try to get category from improvement details, default to 'other'
      const category = 'other'; // In real implementation, would look this up
      const cost = (rec.estimatedCostLow + rec.estimatedCostHigh) / 2;
      acc[category] = (acc[category] || 0) + cost;
      return acc;
    },
    {} as Record<string, number>
  );

  // Better category assignment based on improvement names
  const getCategoryFromName = (name: string): string => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('insulation') || nameLower.includes('loft') || nameLower.includes('wall') || nameLower.includes('floor')) return 'insulation';
    if (nameLower.includes('boiler') || nameLower.includes('heat pump') || nameLower.includes('heating')) return 'heating';
    if (nameLower.includes('glazing') || nameLower.includes('window')) return 'glazing';
    if (nameLower.includes('control') || nameLower.includes('thermostat') || nameLower.includes('trv')) return 'controls';
    if (nameLower.includes('solar') || nameLower.includes('pv')) return 'renewable';
    return 'other';
  };

  // Recalculate with better categorization
  const improvedCostsByCategory = recommendations.reduce(
    (acc, rec) => {
      const category = getCategoryFromName(rec.name);
      const cost = (rec.estimatedCostLow + rec.estimatedCostHigh) / 2;
      acc[category] = (acc[category] || 0) + cost;
      return acc;
    },
    {} as Record<string, number>
  );

  // Sort categories by cost
  const sortedCategories = Object.entries(improvedCostsByCategory)
    .sort(([, a], [, b]) => b - a)
    .filter(([, cost]) => cost > 0);

  return (
    <div className="space-y-6">
      {/* Total Cost Summary */}
      <Card variant="highlighted" padding="lg">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium text-primary-700">Estimated Total Investment</p>
          <div className="mb-4 flex items-center justify-center gap-2">
            <PoundSterling className="h-8 w-8 text-primary-600" aria-hidden="true" />
            <span className="text-4xl font-bold text-primary-800">
              {formatCurrency(totalCostMid)}
            </span>
          </div>
          <p className="text-sm text-neutral-600">
            Range: {formatCurrency(totalCostLow)} - {formatCurrency(totalCostHigh)}
          </p>
        </div>

        {/* Cost Cap Warning */}
        {costCapExemptionLikely && (
          <div className="mt-4 rounded-lg border border-warning-200 bg-warning-50 p-4">
            <p className="flex items-start gap-2 text-sm text-warning-800">
              <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span>
                <strong>Cost Cap Exemption:</strong> Based on these estimates, you may qualify for
                the £10,000 cost cap exemption if improvements cannot bring your property to EPC C.
              </span>
            </p>
          </div>
        )}
      </Card>

      {/* EPC Rating Comparison */}
      <Card padding="md">
        <CardHeader className="pb-4">
          <CardTitle as="h3" className="text-lg">EPC Rating Improvement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-4">
            {/* Current Rating */}
            <div className="text-center">
              <p className="mb-2 text-xs font-medium uppercase text-neutral-500">Current</p>
              <div
                className={cn(
                  'flex h-16 w-16 items-center justify-center rounded-lg text-2xl font-bold',
                  ratingColors[currentRating],
                  ratingTextColors[currentRating]
                )}
              >
                {currentRating === 'unknown' ? '?' : currentRating}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center">
              <TrendingUp className="h-8 w-8 text-success-500" aria-hidden="true" />
              <span className="mt-1 text-xs text-neutral-500">After upgrades</span>
            </div>

            {/* Estimated Rating */}
            <div className="text-center">
              <p className="mb-2 text-xs font-medium uppercase text-neutral-500">Estimated</p>
              <div
                className={cn(
                  'flex h-16 w-16 items-center justify-center rounded-lg text-2xl font-bold',
                  ratingColors[estimatedFinalRating],
                  ratingTextColors[estimatedFinalRating]
                )}
              >
                {estimatedFinalRating}
              </div>
            </div>
          </div>

          {/* Compliance Status */}
          <div className="mt-4 text-center">
            {['A', 'B', 'C'].includes(estimatedFinalRating) ? (
              <Badge variant="success" size="lg">
                Would meet 2030 requirements (EPC C)
              </Badge>
            ) : (
              <Badge variant="warning" size="lg">
                May need additional improvements to reach EPC C
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Cost by Category */}
      <Card padding="md">
        <CardHeader className="pb-4">
          <CardTitle as="h3" className="text-lg">Cost Breakdown by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sortedCategories.map(([category, cost]) => {
              const config = categoryConfig[category] || categoryConfig.other;
              const percentage = (cost / totalCostMid) * 100;

              return (
                <div key={category}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-neutral-700">{config.label}</span>
                    <span className="text-neutral-600">{formatCurrency(Math.round(cost))}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className={cn('h-full rounded-full transition-all duration-500', config.color)}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">{Math.round(percentage)}% of total</p>
                </div>
              );
            })}
          </div>

          {/* Visual Summary */}
          <div className="mt-6 flex h-6 overflow-hidden rounded-full">
            {sortedCategories.map(([category, cost], index) => {
              const config = categoryConfig[category] || categoryConfig.other;
              const percentage = (cost / totalCostMid) * 100;

              return (
                <Tooltip key={category} content={`${config.label}: ${formatCurrency(Math.round(cost))}`}>
                  <div
                    className={cn('h-full transition-all duration-500', config.color)}
                    style={{ width: `${percentage}%` }}
                  />
                </Tooltip>
              );
            })}
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {sortedCategories.map(([category]) => {
              const config = categoryConfig[category] || categoryConfig.other;
              return (
                <div key={category} className="flex items-center gap-1.5 text-xs text-neutral-600">
                  <span className={cn('h-3 w-3 rounded-full', config.color)} aria-hidden="true" />
                  <span>{config.label}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Individual Improvements Summary */}
      <Card padding="md">
        <CardHeader className="pb-4">
          <CardTitle as="h3" className="text-lg">Running Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recommendations.slice(0, 8).map((rec, index) => {
              const runningTotal = recommendations
                .slice(0, index + 1)
                .reduce((sum, r) => sum + (r.estimatedCostLow + r.estimatedCostHigh) / 2, 0);

              return (
                <div
                  key={rec.id}
                  className="flex items-center justify-between border-b border-neutral-100 py-2 last:border-b-0"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-600">
                      {index + 1}
                    </span>
                    <span className="text-sm text-neutral-700">{rec.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-neutral-800">
                      {formatCurrency(Math.round((rec.estimatedCostLow + rec.estimatedCostHigh) / 2))}
                    </p>
                    <p className="text-xs text-neutral-500">
                      Total: {formatCurrency(Math.round(runningTotal))}
                    </p>
                  </div>
                </div>
              );
            })}
            {recommendations.length > 8 && (
              <p className="pt-2 text-center text-sm text-neutral-500">
                + {recommendations.length - 8} more improvements
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CostBreakdown;
