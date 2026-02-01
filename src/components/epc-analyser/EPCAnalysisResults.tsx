'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  RefreshCw,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Minus,
  Lightbulb,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  PoundSterling,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { EPCRatingBadge, EPCRatingScale } from '@/components/ui/EPCRatingBadge';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { WarningBox } from '@/components/content/WarningBox';
import { TipBox } from '@/components/content/TipBox';
import { InfoBox } from '@/components/content/InfoBox';
import { cn, formatCurrency, getPropertyTypeName } from '@/lib/utils';
import type { EPCRating } from '@/lib/types';
import type {
  EPCAnalysisResults as EPCAnalysisResultsType,
  EPCAnalyserInputs,
  FactorAnalysis,
  ImpactLevel,
} from '@/lib/epc-analysis';

interface EPCAnalysisResultsProps {
  results: EPCAnalysisResultsType;
  inputs: EPCAnalyserInputs;
  onReset: () => void;
}

// Impact level badge styling
function getImpactBadge(impact: ImpactLevel) {
  const styles = {
    high: { variant: 'danger' as const, label: 'High drag on score' },
    medium: { variant: 'warning' as const, label: 'Medium impact' },
    low: { variant: 'success' as const, label: 'Low impact' },
  };
  return styles[impact];
}

// Priority badge
function getPriorityBadge(priority: 1 | 2 | 3 | 4 | 5) {
  const labels = {
    1: 'Quick Win',
    2: 'High Priority',
    3: 'Medium Priority',
    4: 'Major Investment',
    5: 'Long-term',
  };
  const variants = {
    1: 'success' as const,
    2: 'warning' as const,
    3: 'secondary' as const,
    4: 'secondary' as const,
    5: 'secondary' as const,
  };
  return { label: labels[priority], variant: variants[priority] };
}

// Factor Card component
function FactorCard({ factor }: { factor: FactorAnalysis }) {
  const impactBadge = getImpactBadge(factor.impact);

  const categoryIcons = {
    walls: '🧱',
    roof: '🏠',
    floor: '🪵',
    windows: '🪟',
    heating: '🔥',
    'hot-water': '🚿',
  };

  return (
    <Card padding="md" className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl" aria-hidden="true">
              {categoryIcons[factor.category]}
            </span>
            <CardTitle as="h4" className="text-base">
              {factor.name}
            </CardTitle>
          </div>
          <Badge variant={impactBadge.variant} size="sm">
            {impactBadge.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="text-neutral-500 mb-1">Current Status</dt>
            <dd className="font-medium text-neutral-800">{factor.currentStatus}</dd>
          </div>
          <div>
            <dt className="text-neutral-500 mb-1">Typical for Property Type</dt>
            <dd className="text-neutral-700">{factor.typicalForProperty}</dd>
          </div>
          {factor.potentialPoints > 0 && (
            <div>
              <dt className="text-neutral-500 mb-1">Potential Improvement</dt>
              <dd className="font-medium text-success-600">
                Up to {factor.potentialPoints} EPC points
              </dd>
            </div>
          )}
        </dl>
        <p className="mt-4 text-sm text-neutral-600">{factor.explanation}</p>
      </CardContent>
    </Card>
  );
}

export function EPCAnalysisResults({ results, inputs, onReset }: EPCAnalysisResultsProps) {
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);

  const { scoreComparison, factors, assessorAssumptions, quickWins, recommendationAnalysis, propertyGuideUrl } = results;

  // Get comparison icon
  const ComparisonIcon = scoreComparison.comparison === 'above' ? TrendingUp :
                         scoreComparison.comparison === 'below' ? TrendingDown : Minus;

  const comparisonColor = scoreComparison.comparison === 'above' ? 'text-success-600' :
                          scoreComparison.comparison === 'below' ? 'text-warning-600' : 'text-neutral-600';

  // Filter high impact factors
  const highImpactFactors = factors.filter((f) => f.impact === 'high');
  const otherFactors = factors.filter((f) => f.impact !== 'high');

  // Display recommendations (limited or all)
  const displayedRecommendations = showAllRecommendations
    ? recommendationAnalysis
    : recommendationAnalysis.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-primary-800 sm:text-3xl">
          Your EPC Analysis
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600">
          Understanding your {getPropertyTypeName(inputs.propertyType).toLowerCase()} property&apos;s EPC rating
        </p>
      </div>

      {/* Score Comparison Section */}
      <Card variant="highlighted" padding="lg">
        <CardHeader>
          <CardTitle as="h3" className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary-600" aria-hidden="true" />
            Your Score in Context
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Score Visualization */}
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-primary-100">
              <p className="text-sm text-neutral-600 mb-2">Your Current Rating</p>
              <div className="flex items-center gap-4">
                <EPCRatingBadge rating={inputs.currentRating} size="lg" />
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-800">{inputs.currentScore}</p>
                  <p className="text-sm text-neutral-500">points</p>
                </div>
              </div>
              <div className="mt-4">
                <EPCRatingScale activeRating={inputs.currentRating} size="sm" />
              </div>
            </div>

            {/* Comparison Text */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <ComparisonIcon className={cn('h-6 w-6', comparisonColor)} aria-hidden="true" />
                <span className={cn('font-semibold text-lg', comparisonColor)}>
                  {scoreComparison.comparison === 'above' && 'Above Average'}
                  {scoreComparison.comparison === 'below' && 'Below Average'}
                  {scoreComparison.comparison === 'average' && 'Typical for Property Type'}
                </span>
              </div>
              <p className="text-neutral-700">{scoreComparison.explanation}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                <span>Typical for {getPropertyTypeName(inputs.propertyType)}:</span>
                <EPCRatingBadge rating={scoreComparison.typicalRating} size="sm" />
                <span>({scoreComparison.typicalScore} points)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What's Affecting Your Score */}
      <div>
        <h3 className="text-xl font-semibold text-primary-800 mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent-600" aria-hidden="true" />
          What&apos;s Affecting Your Score
        </h3>

        {highImpactFactors.length > 0 && (
          <>
            <p className="text-neutral-600 mb-4">
              These factors are having the biggest impact on your EPC score:
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
              {highImpactFactors.map((factor) => (
                <FactorCard key={factor.id} factor={factor} />
              ))}
            </div>
          </>
        )}

        {otherFactors.length > 0 && (
          <>
            <p className="text-neutral-600 mb-4 mt-6">Other factors:</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherFactors.map((factor) => (
                <FactorCard key={factor.id} factor={factor} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Potential Assessor Assumptions */}
      {assessorAssumptions.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-primary-800 mb-4 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-warning-600" aria-hidden="true" />
            Potential Assessor Assumptions to Check
          </h3>
          <p className="text-neutral-600 mb-4">
            We&apos;ve identified some things on your EPC that might be worth verifying:
          </p>
          <div className="space-y-4">
            {assessorAssumptions.map((assumption) => (
              <WarningBox
                key={assumption.id}
                title={assumption.title}
                critical={assumption.severity === 'high'}
              >
                <p className="mb-2">{assumption.description}</p>
                <p className="font-medium text-sm">
                  <strong>Recommendation:</strong> {assumption.checkWith}
                </p>
              </WarningBox>
            ))}
          </div>
        </div>
      )}

      {/* Quick Wins */}
      {quickWins.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-primary-800 mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-accent-600" aria-hidden="true" />
            Quick Wins You May Have Missed
          </h3>
          <p className="text-neutral-600 mb-4">
            These improvements may not have been on your EPC recommendations but could still help:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {quickWins.map((win) => (
              <TipBox key={win.id} title={win.title}>
                <p className="mb-2">{win.description}</p>
                <div className="flex flex-wrap gap-4 text-sm mt-3">
                  <span className="flex items-center gap-1">
                    <PoundSterling className="h-4 w-4" aria-hidden="true" />
                    Est. cost: {win.estimatedCost}
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" aria-hidden="true" />
                    {win.potentialBenefit}
                  </span>
                </div>
              </TipBox>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations Analysis */}
      {recommendationAnalysis.length > 0 && (
        <Card padding="md">
          <CardHeader>
            <CardTitle as="h3" className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success-500" aria-hidden="true" />
              Your EPC Recommendations Analysed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-600 mb-6">
              Here&apos;s our analysis of the recommendations listed on your EPC, sorted by priority:
            </p>

            <div className="space-y-4">
              {displayedRecommendations.map((rec) => {
                const priorityBadge = getPriorityBadge(rec.priority);

                return (
                  <div
                    key={rec.id}
                    className="p-4 border border-neutral-200 rounded-lg hover:border-primary-200 transition-colors"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-neutral-800">{rec.name}</h4>
                        <Badge variant={priorityBadge.variant} size="sm" className="mt-1">
                          {priorityBadge.label}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-neutral-500">Estimated cost</p>
                        <p className="font-semibold text-neutral-800">
                          {formatCurrency(rec.estimatedCostLow)} - {formatCurrency(rec.estimatedCostHigh)}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-neutral-500">Potential EPC points</p>
                        <p className="font-medium text-success-600">+{rec.estimatedPoints} points</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">Priority ranking</p>
                        <p className="font-medium text-neutral-700">{rec.priority} of 5</p>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-600 mb-3">{rec.notes}</p>

                    <Link
                      href={rec.contentLink}
                      className="text-sm text-primary-600 hover:underline inline-flex items-center gap-1"
                    >
                      Learn more about this improvement
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {recommendationAnalysis.length > 5 && (
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
                    : `Show ${recommendationAnalysis.length - 5} More`}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* No Recommendations Message */}
      {recommendationAnalysis.length === 0 && (
        <InfoBox title="No Recommendations Selected">
          <p>
            You didn&apos;t select any recommendations from your EPC. If your EPC does have recommendations,
            you can start again and select them to get a detailed analysis of each one.
          </p>
        </InfoBox>
      )}

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
          <Link href={propertyGuideUrl} className="flex-shrink-0">
            <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Read Guide
            </Button>
          </Link>
        </div>
      </Card>

      {/* Next Steps */}
      <Card padding="lg" variant="default">
        <CardHeader>
          <CardTitle as="h3" className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-primary-600" aria-hidden="true" />
            Recommended Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            {assessorAssumptions.length > 0 && (
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-warning-100 text-sm font-medium text-warning-700">
                  1
                </span>
                <div>
                  <p className="font-medium text-neutral-800">Verify potential assessor assumptions</p>
                  <p className="text-sm text-neutral-600">
                    If any of the assumptions we flagged seem incorrect, consider getting a new EPC assessment
                    with accurate information. This could improve your score without making any physical changes.
                  </p>
                </div>
              </li>
            )}
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                {assessorAssumptions.length > 0 ? '2' : '1'}
              </span>
              <div>
                <p className="font-medium text-neutral-800">Start with quick wins</p>
                <p className="text-sm text-neutral-600">
                  Low-cost improvements like LED lighting, draught proofing, and heating controls can often
                  be done immediately and will start improving your energy efficiency.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                {assessorAssumptions.length > 0 ? '3' : '2'}
              </span>
              <div>
                <p className="font-medium text-neutral-800">Use the cost calculator to plan upgrades</p>
                <p className="text-sm text-neutral-600">
                  Get detailed cost estimates for the improvements that will have the biggest impact on your
                  EPC rating.
                </p>
                <Link href="/tools/cost-calculator" className="text-sm text-primary-600 hover:underline mt-1 inline-block">
                  Go to Cost Calculator
                </Link>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-medium text-primary-700">
                {assessorAssumptions.length > 0 ? '4' : '3'}
              </span>
              <div>
                <p className="font-medium text-neutral-800">Check available funding</p>
                <p className="text-sm text-neutral-600">
                  Explore the Boiler Upgrade Scheme, ECO4 scheme, and local authority grants that may help
                  fund your improvements.
                </p>
              </div>
            </li>
          </ol>
        </CardContent>
        <CardFooter align="left">
          <Link href="/regulations/cost-cap-exemptions" className="text-sm text-primary-600 hover:underline">
            Learn about cost cap exemptions if improvements exceed budget
          </Link>
        </CardFooter>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button
          variant="outline"
          onClick={onReset}
          leftIcon={<RefreshCw className="h-4 w-4" aria-hidden="true" />}
        >
          Start New Analysis
        </Button>
        <Link href="/tools/cost-calculator">
          <Button
            variant="primary"
            rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          >
            Calculate Upgrade Costs
          </Button>
        </Link>
      </div>

      {/* Disclaimer */}
      <InfoBox title="About This Analysis">
        <p className="text-sm">
          This analysis is based on the information you provided and general patterns for your property type.
          It is not a substitute for a professional EPC assessment. Actual EPC scores are calculated using the
          RdSAP methodology by accredited assessors who inspect your property in person. The estimates and
          suggestions provided here are indicative only.
        </p>
      </InfoBox>
    </div>
  );
}

export default EPCAnalysisResults;
