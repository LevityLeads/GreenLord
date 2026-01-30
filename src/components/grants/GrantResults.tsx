'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Download,
  PoundSterling,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  MapPin,
  Building2,
  Info,
  Phone,
  Mail,
  ExternalLink,
  ThumbsUp,
  XCircle,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Alert } from '@/components/ui/Alert';
import { Badge } from '@/components/ui/Badge';
import { GrantCard } from './GrantCard';
import { cn, formatCurrency } from '@/lib/utils';
import type { GrantEligibilityResult, EligibilityConfidence } from '@/lib/types';

interface GrantResultsProps {
  results: GrantEligibilityResult;
  onReset: () => void;
}

type ViewMode = 'all' | 'definite' | 'likely' | 'possible';

export function GrantResults({ results, onReset }: GrantResultsProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [showIneligible, setShowIneligible] = useState(false);
  const [showAllEligible, setShowAllEligible] = useState(false);

  const {
    eligibleGrants,
    ineligibleGrants,
    totalPotentialValue,
    summaryMessage,
    localAuthority,
    disclaimer,
    inputs,
  } = results;

  // Group eligible grants by confidence
  const definiteGrants = eligibleGrants.filter((g) => g.confidence === 'definite');
  const likelyGrants = eligibleGrants.filter((g) => g.confidence === 'likely');
  const possibleGrants = eligibleGrants.filter((g) => g.confidence === 'possible');

  // Filter displayed grants based on view mode
  const displayedGrants = (() => {
    switch (viewMode) {
      case 'definite':
        return definiteGrants;
      case 'likely':
        return likelyGrants;
      case 'possible':
        return possibleGrants;
      default:
        return showAllEligible ? eligibleGrants : eligibleGrants.slice(0, 5);
    }
  })();

  // Calculate totals by confidence
  const totals = {
    definite: definiteGrants.reduce((sum, g) => sum + g.potentialValue, 0),
    likely: likelyGrants.reduce((sum, g) => sum + g.potentialValue, 0),
    possible: possibleGrants.reduce((sum, g) => sum + g.potentialValue, 0),
  };

  const hasResults = eligibleGrants.length > 0;

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-primary-800 sm:text-3xl">
          {hasResults ? 'Your Grant Eligibility Results' : 'Grant Check Complete'}
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600">
          Based on your property in <strong>{inputs.postcode}</strong>
          {localAuthority && (
            <> ({localAuthority.name} area)</>
          )}
        </p>
      </div>

      {/* Summary Alert */}
      {hasResults ? (
        <Alert
          variant={definiteGrants.length > 0 ? 'success' : 'info'}
          title={definiteGrants.length > 0 ? 'Good news!' : 'Potential grants found'}
        >
          <p>{summaryMessage}</p>
        </Alert>
      ) : (
        <Alert variant="warning" title="No grants found">
          <p>{summaryMessage}</p>
        </Alert>
      )}

      {/* Total Potential Value Summary */}
      {hasResults && (
        <Card variant="highlighted" padding="lg">
          <div className="text-center">
            <p className="text-sm font-medium text-neutral-600 mb-2">Total Potential Grant Funding</p>
            <div className="flex items-center justify-center gap-2 text-4xl font-bold text-primary-700">
              <PoundSterling className="h-8 w-8" aria-hidden="true" />
              <span>{formatCurrency(totalPotentialValue).replace('£', '')}</span>
            </div>
            <p className="mt-2 text-sm text-neutral-500">
              Across {eligibleGrants.length} scheme{eligibleGrants.length !== 1 ? 's' : ''} you may be eligible for
            </p>
          </div>

          {/* Breakdown by confidence */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-success-50 p-4 text-center">
              <div className="flex items-center justify-center gap-1 text-success-600 mb-1">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                <span className="text-sm font-medium">Definite</span>
              </div>
              <p className="text-xl font-bold text-success-700">{formatCurrency(totals.definite)}</p>
              <p className="text-xs text-success-600">{definiteGrants.length} scheme{definiteGrants.length !== 1 ? 's' : ''}</p>
            </div>
            <div className="rounded-lg bg-primary-50 p-4 text-center">
              <div className="flex items-center justify-center gap-1 text-primary-600 mb-1">
                <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                <span className="text-sm font-medium">Likely</span>
              </div>
              <p className="text-xl font-bold text-primary-700">{formatCurrency(totals.likely)}</p>
              <p className="text-xs text-primary-600">{likelyGrants.length} scheme{likelyGrants.length !== 1 ? 's' : ''}</p>
            </div>
            <div className="rounded-lg bg-warning-50 p-4 text-center">
              <div className="flex items-center justify-center gap-1 text-warning-600 mb-1">
                <HelpCircle className="h-4 w-4" aria-hidden="true" />
                <span className="text-sm font-medium">Possible</span>
              </div>
              <p className="text-xl font-bold text-warning-700">{formatCurrency(totals.possible)}</p>
              <p className="text-xs text-warning-600">{possibleGrants.length} scheme{possibleGrants.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
        </Card>
      )}

      {/* Local Authority Info */}
      {localAuthority && (
        <Card padding="md" variant="default">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 flex-shrink-0 text-primary-600 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-primary-800">{localAuthority.name}</h3>
                <p className="text-sm text-neutral-600">
                  Your local authority may have additional schemes not listed here.
                </p>
                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                  {localAuthority.contactPhone && (
                    <a
                      href={`tel:${localAuthority.contactPhone.replace(/\s/g, '')}`}
                      className="flex items-center gap-1 text-primary-600 hover:underline"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {localAuthority.contactPhone}
                    </a>
                  )}
                  {localAuthority.contactEmail && (
                    <a
                      href={`mailto:${localAuthority.contactEmail}`}
                      className="flex items-center gap-1 text-primary-600 hover:underline"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      {localAuthority.contactEmail}
                    </a>
                  )}
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              rightIcon={<ExternalLink className="h-4 w-4" />}
              onClick={() => window.open(localAuthority.websiteUrl, '_blank', 'noopener,noreferrer')}
            >
              Visit Council Website
            </Button>
          </div>
        </Card>
      )}

      {/* Eligible Grants Section */}
      {hasResults && (
        <Card padding="md">
          <CardHeader>
            <CardTitle as="h3" className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success-500" aria-hidden="true" />
              Eligible Grant Schemes ({eligibleGrants.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Filter Tabs */}
            <div className="mb-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setViewMode('all')}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  viewMode === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                )}
              >
                All ({eligibleGrants.length})
              </button>
              <button
                type="button"
                onClick={() => setViewMode('definite')}
                disabled={definiteGrants.length === 0}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  viewMode === 'definite'
                    ? 'bg-success-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
                  definiteGrants.length === 0 && 'opacity-50 cursor-not-allowed'
                )}
              >
                Definite ({definiteGrants.length})
              </button>
              <button
                type="button"
                onClick={() => setViewMode('likely')}
                disabled={likelyGrants.length === 0}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  viewMode === 'likely'
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
                  likelyGrants.length === 0 && 'opacity-50 cursor-not-allowed'
                )}
              >
                Likely ({likelyGrants.length})
              </button>
              <button
                type="button"
                onClick={() => setViewMode('possible')}
                disabled={possibleGrants.length === 0}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  viewMode === 'possible'
                    ? 'bg-warning-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
                  possibleGrants.length === 0 && 'opacity-50 cursor-not-allowed'
                )}
              >
                Possible ({possibleGrants.length})
              </button>
            </div>

            {/* View mode description */}
            <div className="mb-6 rounded-lg bg-neutral-50 p-3">
              <p className="text-sm text-neutral-600">
                {viewMode === 'all' && (
                  <>Showing all {eligibleGrants.length} schemes you may be eligible for, sorted by eligibility confidence.</>
                )}
                {viewMode === 'definite' && (
                  <><strong>Definite:</strong> You meet all requirements for these schemes based on the information provided.</>
                )}
                {viewMode === 'likely' && (
                  <><strong>Likely:</strong> You likely qualify for these schemes, but some details may need confirmation.</>
                )}
                {viewMode === 'possible' && (
                  <><strong>Possible:</strong> Eligibility depends on tenant circumstances or other factors to be confirmed.</>
                )}
              </p>
            </div>

            {/* Grant Cards */}
            {displayedGrants.length > 0 ? (
              <div className="space-y-4">
                {displayedGrants.map((match, index) => (
                  <GrantCard key={match.scheme.id} match={match} rank={index + 1} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
                <Info className="mx-auto mb-3 h-10 w-10 text-neutral-400" aria-hidden="true" />
                <p className="text-neutral-600">
                  No {viewMode} grants found for your property.
                </p>
                <Button variant="outline" size="sm" onClick={() => setViewMode('all')} className="mt-4">
                  View All Schemes
                </Button>
              </div>
            )}

            {/* Show More/Less Button */}
            {viewMode === 'all' && eligibleGrants.length > 5 && (
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowAllEligible(!showAllEligible)}
                  rightIcon={
                    showAllEligible ? (
                      <ChevronUp className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    )
                  }
                >
                  {showAllEligible
                    ? 'Show Less'
                    : `Show ${eligibleGrants.length - 5} More Schemes`}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Ineligible Schemes Section (Collapsible) */}
      {ineligibleGrants.length > 0 && (
        <Card padding="md">
          <button
            type="button"
            onClick={() => setShowIneligible(!showIneligible)}
            className="flex w-full items-center justify-between text-left"
            aria-expanded={showIneligible}
          >
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-neutral-400" aria-hidden="true" />
              <span className="font-semibold text-neutral-700">
                Schemes You Are Not Eligible For ({ineligibleGrants.length})
              </span>
            </div>
            {showIneligible ? (
              <ChevronUp className="h-5 w-5 text-neutral-500" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-5 w-5 text-neutral-500" aria-hidden="true" />
            )}
          </button>

          {showIneligible && (
            <div className="mt-4 space-y-4 border-t border-neutral-200 pt-4">
              <p className="text-sm text-neutral-600 mb-4">
                Based on the information provided, you do not currently meet the eligibility criteria for these schemes.
              </p>
              {ineligibleGrants.map((match) => (
                <div
                  key={match.scheme.id}
                  className="rounded-lg border border-neutral-200 bg-neutral-50 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-neutral-700">{match.scheme.name}</h4>
                      <p className="mt-1 text-sm text-neutral-500">
                        Up to {formatCurrency(match.scheme.maxGrantValue)}
                      </p>
                    </div>
                    <Badge variant="danger" size="sm">Not eligible</Badge>
                  </div>
                  {match.ineligibilityReasons && match.ineligibilityReasons.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-neutral-200">
                      <p className="text-sm text-neutral-600">
                        <strong>Reason:</strong> {match.ineligibilityReasons[0]}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {/* Disclaimer */}
      <Alert variant="info" title="Important Notice">
        <p className="text-sm">{disclaimer}</p>
      </Alert>

      {/* Recommended Next Steps */}
      <Card padding="lg" variant="default">
        <CardHeader>
          <CardTitle as="h3" className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success-500" aria-hidden="true" />
            Recommended Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                1
              </span>
              <div>
                <p className="font-medium text-neutral-800">Review the schemes above</p>
                <p className="text-sm text-neutral-600">
                  Prioritise the "Definite" and "Likely" schemes first, as these have the highest chance of success.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                2
              </span>
              <div>
                <p className="font-medium text-neutral-800">Gather required documentation</p>
                <p className="text-sm text-neutral-600">
                  Most schemes require proof of property ownership, a valid EPC certificate, and tenant consent.
                  ECO4 requires evidence of tenant benefits.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                3
              </span>
              <div>
                <p className="font-medium text-neutral-800">Contact scheme administrators</p>
                <p className="text-sm text-neutral-600">
                  Use the "Apply Now" links on each scheme card to begin the application process.
                  {localAuthority && (
                    <> For local schemes, contact {localAuthority.name} directly.</>
                  )}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                4
              </span>
              <div>
                <p className="font-medium text-neutral-800">Consider combining schemes</p>
                <p className="text-sm text-neutral-600">
                  Some schemes can be used together. For example, ECO4 can cover insulation while the
                  Boiler Upgrade Scheme covers heat pump installation.
                </p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button
          variant="outline"
          onClick={onReset}
          leftIcon={<RefreshCw className="h-4 w-4" aria-hidden="true" />}
        >
          Start New Check
        </Button>
        <Button
          variant="primary"
          onClick={() => window.print()}
          leftIcon={<Download className="h-4 w-4" aria-hidden="true" />}
        >
          Save Results
        </Button>
      </div>
    </div>
  );
}

export default GrantResults;
