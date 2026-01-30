'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronUp,
  Download,
  RefreshCw,
  ExternalLink,
  CheckCircle,
  Info,
  Lightbulb,
  ArrowRight,
  FileText,
  Loader2,
  PoundSterling,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Alert } from '@/components/ui/Alert';
import { ImprovementCard } from './ImprovementCard';
import { CostBreakdown } from './CostBreakdown';
import { cn, getPropertyTypeName } from '@/lib/utils';
import { getQuickWins, getHighImpactImprovements } from '@/lib/calculator';
import { CALCULATOR_DISCLAIMER, CALCULATOR_METHODOLOGY } from '@/data/calculator-data';
import { exportResultsToPDF } from '@/lib/pdf-export';
import type { CalculatorResults as CalculatorResultsType, CalculatorInputs } from '@/lib/types';

interface CalculatorResultsProps {
  results: CalculatorResultsType;
  inputs: CalculatorInputs;
  onReset: () => void;
}

type ViewMode = 'all' | 'quick-wins' | 'high-impact';

export function CalculatorResults({ results, inputs, onReset }: CalculatorResultsProps) {
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [showMethodology, setShowMethodology] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const quickWins = getQuickWins(results.recommendations);
  const highImpact = getHighImpactImprovements(results.recommendations);

  const displayedRecommendations = (() => {
    switch (viewMode) {
      case 'quick-wins':
        return quickWins;
      case 'high-impact':
        return highImpact;
      default:
        return showAllRecommendations
          ? results.recommendations
          : results.recommendations.slice(0, 5);
    }
  })();

  const meetsRequirement = ['A', 'B', 'C'].includes(results.estimatedFinalRating);

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-primary-800 sm:text-3xl">
          Your Upgrade Cost Estimate
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600">
          Based on your {getPropertyTypeName(inputs.propertyType).toLowerCase()} property
          {inputs.currentRating !== 'unknown' && (
            <> with current EPC rating {inputs.currentRating}</>
          )}
        </p>
      </div>

      {/* Summary Alert */}
      {meetsRequirement ? (
        <Alert variant="success" title="Good news!">
          With the recommended improvements, your property could reach EPC{' '}
          <strong>{results.estimatedFinalRating}</strong>, meeting the 2030 requirement.
        </Alert>
      ) : results.costCapExemptionLikely ? (
        <Alert variant="warning" title="Cost Cap May Apply">
          Based on these estimates, the cost of improvements exceeds the £10,000 cost cap. You may
          qualify for a cost cap exemption if improvements cannot bring your property to EPC C
          within this budget.
        </Alert>
      ) : (
        <Alert variant="info" title="Additional Work May Be Needed">
          The estimated improvements may not fully reach EPC C. Consider additional measures or
          consult with an energy assessor for a detailed assessment.
        </Alert>
      )}

      {/* Cost Breakdown Section */}
      <CostBreakdown
        recommendations={results.recommendations}
        totalCostLow={results.totalCostLow}
        totalCostMid={results.totalCostMid}
        totalCostHigh={results.totalCostHigh}
        currentRating={inputs.currentRating}
        estimatedFinalRating={results.estimatedFinalRating}
        costCapExemptionLikely={results.costCapExemptionLikely}
      />

      {/* View Mode Tabs */}
      <Card padding="md">
        <CardHeader>
          <CardTitle as="h3" className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-accent-600" aria-hidden="true" />
            Recommended Improvements
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
              All ({results.recommendations.length})
            </button>
            <button
              type="button"
              onClick={() => setViewMode('quick-wins')}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                viewMode === 'quick-wins'
                  ? 'bg-success-500 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              )}
            >
              Quick Wins ({quickWins.length})
            </button>
            <button
              type="button"
              onClick={() => setViewMode('high-impact')}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                viewMode === 'high-impact'
                  ? 'bg-accent-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              )}
            >
              High Impact ({highImpact.length})
            </button>
          </div>

          {/* Description of current filter */}
          <div className="mb-6 rounded-lg bg-neutral-50 p-3">
            <p className="text-sm text-neutral-600">
              {viewMode === 'all' && (
                <>
                  Showing all applicable improvements, sorted by cost-effectiveness (best value
                  first).
                </>
              )}
              {viewMode === 'quick-wins' && (
                <>
                  <strong>Quick Wins:</strong> Low-cost improvements under £500 that are easy to
                  implement.
                </>
              )}
              {viewMode === 'high-impact' && (
                <>
                  <strong>High Impact:</strong> Improvements that significantly boost your EPC
                  rating (6+ points).
                </>
              )}
            </p>
          </div>

          {/* Improvement Cards */}
          {displayedRecommendations.length > 0 ? (
            <div className="space-y-4">
              {displayedRecommendations.map((rec, index) => (
                <ImprovementCard key={rec.id} recommendation={rec} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
              <Info className="mx-auto mb-3 h-10 w-10 text-neutral-400" aria-hidden="true" />
              <p className="text-neutral-600">
                No {viewMode === 'quick-wins' ? 'quick win' : 'high impact'} improvements found for
                your property configuration.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode('all')}
                className="mt-4"
              >
                View All Improvements
              </Button>
            </div>
          )}

          {/* Show More/Less Button */}
          {viewMode === 'all' && results.recommendations.length > 5 && (
            <div className="mt-6 text-center">
              <Button
                variant="outline"
                onClick={() => setShowAllRecommendations(!showAllRecommendations)}
                rightIcon={
                  showAllRecommendations ? (
                    <ChevronUp className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  )
                }
              >
                {showAllRecommendations
                  ? 'Show Less'
                  : `Show ${results.recommendations.length - 5} More Improvements`}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Property Guide Link */}
      <Card variant="highlighted" padding="md">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <FileText className="mt-1 h-6 w-6 flex-shrink-0 text-primary-600" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-primary-800">
                {getPropertyTypeName(inputs.propertyType)} Guide
              </h3>
              <p className="text-sm text-neutral-600">
                Get detailed advice specific to your property type, including common issues and
                recommended approaches.
              </p>
            </div>
          </div>
          <Link href={results.propertyTypeGuideUrl} className="flex-shrink-0">
            <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Read Guide
            </Button>
          </Link>
        </div>
      </Card>

      {/* Grant Eligibility Checker CTA */}
      <Card variant="default" padding="md" className="border-accent-200 bg-accent-50">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <PoundSterling className="mt-1 h-6 w-6 flex-shrink-0 text-accent-600" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-accent-800">
                You May Be Eligible for Funding
              </h3>
              <p className="text-sm text-accent-700">
                Check if you qualify for ECO4, Boiler Upgrade Scheme, Warm Homes: Local Grant, or local council grants.
                {results.recommendations.some(r => r.id.includes('heat-pump')) && (
                  <span className="block mt-1 font-medium">
                    Up to £7,500 available for heat pump installation!
                  </span>
                )}
              </p>
            </div>
          </div>
          <Link href="/tools/grant-eligibility" className="flex-shrink-0">
            <Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Check Grant Eligibility
            </Button>
          </Link>
        </div>
      </Card>

      {/* Methodology Section */}
      <Card padding="md">
        <button
          type="button"
          onClick={() => setShowMethodology(!showMethodology)}
          className="flex w-full items-center justify-between text-left"
          aria-expanded={showMethodology}
        >
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary-600" aria-hidden="true" />
            <span className="font-semibold text-primary-800">
              How are these estimates calculated?
            </span>
          </div>
          {showMethodology ? (
            <ChevronUp className="h-5 w-5 text-neutral-500" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-5 w-5 text-neutral-500" aria-hidden="true" />
          )}
        </button>

        {showMethodology && (
          <div className="mt-4 space-y-4 border-t border-neutral-200 pt-4">
            <div className="whitespace-pre-line text-sm text-neutral-600">
              {CALCULATOR_METHODOLOGY}
            </div>
            <div className="rounded-lg bg-neutral-50 p-4">
              <h4 className="mb-2 font-medium text-neutral-700">Your Property Factors:</h4>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <dt className="text-neutral-500">Property Type Factor:</dt>
                <dd className="font-medium text-neutral-700">Applied</dd>
                <dt className="text-neutral-500">Regional Multiplier:</dt>
                <dd className="font-medium text-neutral-700">Applied ({inputs.region})</dd>
                <dt className="text-neutral-500">Size Adjustment:</dt>
                <dd className="font-medium text-neutral-700">{inputs.bedrooms} bedrooms</dd>
              </dl>
            </div>
          </div>
        )}
      </Card>

      {/* Disclaimer */}
      <Alert variant="info" title="Important Notice">
        <p className="text-sm">{CALCULATOR_DISCLAIMER}</p>
      </Alert>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button
          variant="outline"
          onClick={onReset}
          leftIcon={<RefreshCw className="h-4 w-4" aria-hidden="true" />}
        >
          Start New Calculation
        </Button>
        <Button
          variant="primary"
          onClick={async () => {
            setIsExporting(true);
            try {
              await exportResultsToPDF({
                results,
                inputs,
                filename: `GreenLord-EPC-Report-${inputs.propertyType}-${new Date().toISOString().split('T')[0]}.pdf`,
              });
            } catch (error) {
              console.error('PDF export failed:', error);
              // Fallback to print
              window.print();
            } finally {
              setIsExporting(false);
            }
          }}
          disabled={isExporting}
          leftIcon={
            isExporting ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Download className="h-4 w-4" aria-hidden="true" />
            )
          }
        >
          {isExporting ? 'Generating PDF...' : 'Download Report'}
        </Button>
      </div>

      {/* Next Steps */}
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
                <p className="font-medium text-neutral-800">Get a professional EPC assessment</p>
                <p className="text-sm text-neutral-600">
                  An accredited assessor can provide an accurate current rating and identify the
                  most impactful improvements for your specific property.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                2
              </span>
              <div>
                <p className="font-medium text-neutral-800">Obtain multiple quotes</p>
                <p className="text-sm text-neutral-600">
                  Get at least 3 quotes from certified installers for each improvement you are
                  considering. Ensure they are MCS certified for renewables.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                3
              </span>
              <div>
                <p className="font-medium text-neutral-800">Check available funding</p>
                <p className="text-sm text-neutral-600">
                  Explore the Boiler Upgrade Scheme (up to £7,500 for heat pumps), ECO4 scheme, and
                  any local authority grants that may be available.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                4
              </span>
              <div>
                <p className="font-medium text-neutral-800">Plan your upgrade timeline</p>
                <p className="text-sm text-neutral-600">
                  The 2030 deadline gives time to plan improvements around tenancy changes. Start
                  with quick wins and plan major works for void periods.
                </p>
              </div>
            </li>
          </ol>
        </CardContent>
        <CardFooter align="left">
          <Link href="/regulations/cost-cap-exemptions" className="text-sm text-primary-600 hover:underline">
            Learn about cost cap exemptions
            <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CalculatorResults;
