'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  PoundSterling,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Calendar,
  Building2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { formatCurrency, formatConfidence, formatVerificationDate } from '@/lib/grants';
import type { GrantEligibilityMatch, EligibilityConfidence } from '@/lib/types';

interface GrantCardProps {
  match: GrantEligibilityMatch;
  rank?: number;
  showDetails?: boolean;
}

const confidenceConfig: Record<
  EligibilityConfidence,
  {
    variant: 'success' | 'primary' | 'warning' | 'danger';
    icon: typeof CheckCircle;
    bgClass: string;
    borderClass: string;
  }
> = {
  definite: {
    variant: 'success',
    icon: CheckCircle,
    bgClass: 'bg-success-50',
    borderClass: 'border-l-success-500',
  },
  likely: {
    variant: 'primary',
    icon: CheckCircle,
    bgClass: 'bg-primary-50',
    borderClass: 'border-l-primary-500',
  },
  possible: {
    variant: 'warning',
    icon: HelpCircle,
    bgClass: 'bg-warning-50',
    borderClass: 'border-l-warning-500',
  },
  ineligible: {
    variant: 'danger',
    icon: AlertCircle,
    bgClass: 'bg-danger-50',
    borderClass: 'border-l-danger-500',
  },
};

export function GrantCard({ match, rank, showDetails = true }: GrantCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { scheme, confidence, potentialValue, requiresContribution, estimatedContribution } = match;

  const config = confidenceConfig[confidence];
  const confidenceInfo = formatConfidence(confidence);
  const ConfidenceIcon = config.icon;

  return (
    <Card
      variant="default"
      padding="none"
      className={cn(
        'overflow-hidden transition-all duration-200 border-l-4',
        config.borderClass,
        isExpanded && 'shadow-md'
      )}
    >
      {/* Main Card Content */}
      <div className="p-5">
        {/* Header Row */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0 flex-1">
            {/* Rank Badge */}
            {rank !== undefined && (
              <div
                className={cn(
                  'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold',
                  rank <= 3
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-neutral-100 text-neutral-600'
                )}
                aria-label={`Rank ${rank}`}
              >
                {rank}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-neutral-900 leading-tight">{scheme.name}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Badge variant={config.variant} size="sm" icon={<ConfidenceIcon className="h-3 w-3" />}>
                  {confidenceInfo.label}
                </Badge>
                {scheme.administrator === 'local-authority' && (
                  <Badge variant="secondary" size="sm" icon={<Building2 className="h-3 w-3" />}>
                    Local Authority
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Grant Value */}
          <div className="text-right flex-shrink-0">
            <div className="flex items-center justify-end gap-1 text-lg font-bold text-primary-700">
              <span className="text-sm font-normal text-neutral-500">up to</span>
              <PoundSterling className="h-4 w-4" aria-hidden="true" />
              <span>{formatCurrency(potentialValue).replace('£', '')}</span>
            </div>
            {requiresContribution && estimatedContribution && (
              <p className="mt-1 text-xs text-neutral-500">
                Est. contribution: {formatCurrency(estimatedContribution)}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm text-neutral-600 line-clamp-2">{scheme.description}</p>

        {/* Key Info Pills */}
        <div className="mb-4 flex flex-wrap gap-2">
          {scheme.coverageCategories.map((category) => (
            <span
              key={category}
              className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 capitalize"
            >
              {category.replace('-', ' ')}
            </span>
          ))}
        </div>

        {/* Eligibility Reasons - Compact View */}
        {match.eligibilityReasons.length > 0 && (
          <div className="mb-4 space-y-1">
            {match.eligibilityReasons.slice(0, 2).map((reason, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-success-600">
                <CheckCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        )}

        {/* Caveats if any */}
        {match.ineligibilityReasons && match.ineligibilityReasons.length > 0 && confidence !== 'ineligible' && (
          <div className="mb-4 rounded-lg border border-warning-200 bg-warning-50 p-3">
            <p className="flex items-start gap-2 text-sm text-warning-700">
              <Info className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{match.ineligibilityReasons[0]}</span>
            </p>
          </div>
        )}

        {/* Expand/Collapse Button */}
        {showDetails && (
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
      {isExpanded && (
        <div className="border-t border-neutral-200 bg-neutral-50 p-5">
          <div className="space-y-5">
            {/* Detailed Description */}
            {scheme.detailedDescription && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-800">About This Scheme</h4>
                <p className="text-sm text-neutral-600 whitespace-pre-line">
                  {scheme.detailedDescription}
                </p>
              </div>
            )}

            {/* What's Covered */}
            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-800">What is Covered</h4>
              <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {scheme.coveredImprovements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-success-500 mt-0.5" aria-hidden="true" />
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Not Covered */}
            {scheme.excludedImprovements && scheme.excludedImprovements.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-800">Not Covered</h4>
                <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {scheme.excludedImprovements.map((exclusion, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-500">
                      <AlertCircle className="h-4 w-4 flex-shrink-0 text-neutral-400 mt-0.5" aria-hidden="true" />
                      <span>{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Eligibility Notes */}
            {scheme.eligibility.additionalNotes && scheme.eligibility.additionalNotes.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-800">Important Notes</h4>
                <ul className="space-y-2">
                  {scheme.eligibility.additionalNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Info className="h-4 w-4 flex-shrink-0 text-primary-500 mt-0.5" aria-hidden="true" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Next Steps */}
            {match.nextSteps.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-800">Next Steps</h4>
                <ol className="space-y-2">
                  {match.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-neutral-600">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-medium text-primary-700">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Scheme Dates & Info */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-neutral-200 text-xs text-neutral-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" aria-hidden="true" />
                <span>
                  Runs until: {scheme.endDate ? formatVerificationDate(scheme.endDate) : 'Ongoing'}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Building2 className="h-3 w-3" aria-hidden="true" />
                <span>Administrator: {scheme.administratorName}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <Button
                variant="primary"
                size="sm"
                rightIcon={<ExternalLink className="h-4 w-4" />}
                onClick={() => window.open(scheme.applicationUrl, '_blank', 'noopener,noreferrer')}
                className="flex-1"
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                size="sm"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                onClick={() => window.open(scheme.infoUrl, '_blank', 'noopener,noreferrer')}
                className="flex-1"
              >
                Learn More
              </Button>
            </div>

            {/* Data freshness notice */}
            <p className="text-xs text-neutral-400">
              Data last verified: {formatVerificationDate(scheme.lastVerified)} | Source: {scheme.dataSource}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}

export default GrantCard;
