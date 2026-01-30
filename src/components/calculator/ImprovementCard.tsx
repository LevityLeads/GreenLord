'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  TrendingUp,
  PoundSterling,
  Zap,
  Info,
  Clock,
  AlertTriangle,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tooltip } from '@/components/ui/Tooltip';
import { cn, formatCurrency } from '@/lib/utils';
import { getImprovementDetails } from '@/lib/calculator';
import type { ImprovementRecommendation } from '@/lib/types';

interface ImprovementCardProps {
  recommendation: ImprovementRecommendation;
  index: number;
  showDetails?: boolean;
  isSelected?: boolean;
  onToggleSelect?: (id: string) => void;
}

const priorityLabels: Record<number, { label: string; variant: 'success' | 'default' | 'warning' }> = {
  1: { label: 'Best Value', variant: 'success' },
  2: { label: 'Recommended', variant: 'default' },
  3: { label: 'Good Option', variant: 'warning' },
};

const disruptionColors = {
  low: 'text-success-600',
  medium: 'text-warning-600',
  high: 'text-danger-600',
};

export function ImprovementCard({
  recommendation,
  index,
  showDetails = true,
  isSelected,
  onToggleSelect,
}: ImprovementCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const details = getImprovementDetails(recommendation.id);

  const priorityInfo = priorityLabels[recommendation.priority];
  const costMid = Math.round(
    (recommendation.estimatedCostLow + recommendation.estimatedCostHigh) / 2
  );

  return (
    <Card
      variant={isSelected ? 'highlighted' : 'default'}
      padding="none"
      className={cn(
        'transition-all duration-200',
        isSelected && 'ring-2 ring-primary-500'
      )}
    >
      {/* Main Card Content */}
      <div className="p-4">
        {/* Header Row */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {/* Priority Number */}
            <div
              className={cn(
                'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold',
                index < 3
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-neutral-100 text-neutral-600'
              )}
              aria-label={`Priority ${recommendation.priority}`}
            >
              {recommendation.priority}
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">{recommendation.name}</h3>
              {priorityInfo && (
                <Badge variant={priorityInfo.variant} size="sm" className="mt-1">
                  {priorityInfo.label}
                </Badge>
              )}
            </div>
          </div>

          {/* Cost and Points Summary */}
          <div className="text-right">
            <div className="flex items-center justify-end gap-1 text-lg font-bold text-primary-700">
              <PoundSterling className="h-4 w-4" aria-hidden="true" />
              <span>{formatCurrency(costMid).replace('£', '')}</span>
            </div>
            <div className="flex items-center justify-end gap-1 text-sm text-neutral-600">
              <Zap className="h-3 w-3 text-accent-600" aria-hidden="true" />
              <span>+{recommendation.estimatedEPCPoints} EPC pts</span>
            </div>
          </div>
        </div>

        {/* Key Metrics Row */}
        <div className="mb-3 grid grid-cols-3 gap-2 rounded-lg bg-neutral-50 p-3">
          <div className="text-center">
            <p className="text-xs text-neutral-500">Cost Range</p>
            <p className="text-sm font-medium text-neutral-700">
              {formatCurrency(recommendation.estimatedCostLow)} -{' '}
              {formatCurrency(recommendation.estimatedCostHigh)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-neutral-500">EPC Points</p>
            <p className="text-sm font-medium text-accent-700">
              +{recommendation.estimatedEPCPoints} points
            </p>
          </div>
          <div className="text-center">
            <Tooltip content="Lower is better - cost per EPC point gained">
              <div className="cursor-help">
                <p className="flex items-center justify-center gap-1 text-xs text-neutral-500">
                  Value
                  <Info className="h-3 w-3" aria-hidden="true" />
                </p>
                <p className="text-sm font-medium text-primary-700">
                  {formatCurrency(recommendation.costPerPoint)}/pt
                </p>
              </div>
            </Tooltip>
          </div>
        </div>

        {/* Description */}
        <p className="mb-3 text-sm text-neutral-600 line-clamp-2">
          {recommendation.description}
        </p>

        {/* Expand/Collapse Button */}
        {showDetails && details && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex w-full items-center justify-center gap-1 rounded-lg border border-neutral-200 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-800"
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
                Hide Details
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
                Show Details
              </>
            )}
          </button>
        )}
      </div>

      {/* Expanded Details */}
      {isExpanded && details && (
        <div className="border-t border-neutral-200 bg-neutral-50 p-4">
          <div className="space-y-4">
            {/* Installation Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-400" aria-hidden="true" />
                <div>
                  <p className="font-medium text-neutral-700">Install Time</p>
                  <p className="text-neutral-600">{details.typicalInstallDays}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle
                  className={cn(
                    'mt-0.5 h-4 w-4 flex-shrink-0',
                    disruptionColors[details.disruptionLevel]
                  )}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium text-neutral-700">Disruption</p>
                  <p className={disruptionColors[details.disruptionLevel]}>
                    {details.disruptionLevel.charAt(0).toUpperCase() +
                      details.disruptionLevel.slice(1)}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            {details.notes && (
              <div className="rounded-lg border border-primary-100 bg-primary-50 p-3">
                <p className="flex items-start gap-2 text-sm text-primary-800">
                  <Info className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>{details.notes}</span>
                </p>
              </div>
            )}

            {/* Data Source */}
            <p className="text-xs text-neutral-500">
              Data source: {details.dataSource}
            </p>
          </div>
        </div>
      )}

      {/* Selection Toggle (if enabled) */}
      {onToggleSelect && (
        <div className="border-t border-neutral-200 px-4 py-3">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onToggleSelect(recommendation.id)}
              className="h-5 w-5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm font-medium text-neutral-700">
              Include in my upgrade plan
            </span>
          </label>
        </div>
      )}
    </Card>
  );
}

export default ImprovementCard;
