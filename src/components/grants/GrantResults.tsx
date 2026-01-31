'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import {
  CheckCircle,
  AlertCircle,
  HelpCircle,
  XCircle,
  ExternalLink,
  PoundSterling,
  ArrowRight,
  RefreshCw,
  Printer,
  Calendar,
  Building2,
  FileText,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Alert } from '@/components/ui/Alert';
import { cn, formatCurrency } from '@/lib/utils';
import {
  type GrantCheckerInputs,
  type GrantEligibilityResult,
  type EligibilityConfidence,
  calculateTotalPotentialFunding,
  getNextSteps,
} from '@/data/grant-schemes';

interface GrantResultsProps {
  results: GrantEligibilityResult[];
  inputs: GrantCheckerInputs;
  onReset: () => void;
}

const confidenceConfig: Record<
  EligibilityConfidence,
  { label: string; icon: typeof CheckCircle; badgeVariant: 'success' | 'primary' | 'warning' | 'danger'; className: string }
> = {
  'definite': {
    label: 'Definite',
    icon: CheckCircle,
    badgeVariant: 'success',
    className: 'text-success-600 bg-success-50 border-success-200',
  },
  'likely': {
    label: 'Likely',
    icon: CheckCircle,
    badgeVariant: 'primary',
    className: 'text-primary-600 bg-primary-50 border-primary-200',
  },
  'possible': {
    label: 'Possible',
    icon: HelpCircle,
    badgeVariant: 'warning',
    className: 'text-warning-600 bg-warning-50 border-warning-200',
  },
  'not-eligible': {
    label: 'Not Eligible',
    icon: XCircle,
    badgeVariant: 'danger',
    className: 'text-danger-600 bg-danger-50 border-danger-200',
  },
};

function SchemeCard({ result }: { result: GrantEligibilityResult }) {
  const { scheme, confidence, reasons, maxPotentialGrant } = result;
  const config = confidenceConfig[confidence];
  const Icon = config.icon;
  const isEligible = confidence !== 'not-eligible';

  return (
    <Card
      className={cn(
        'h-full border-l-4 transition-all',
        isEligible ? 'border-l-success-500' : 'border-l-danger-300'
      )}
      padding="none"
    >
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-neutral-800 mb-1">
              {scheme.name}
            </h3>
            <p className="text-sm text-neutral-500">
              Administered by: {scheme.administrator}
            </p>
          </div>
          <Badge variant={config.badgeVariant} size="md">
            <Icon className="h-3.5 w-3.5 mr-1" />
            {config.label}
          </Badge>
        </div>

        {/* Max Grant Amount */}
        {isEligible && maxPotentialGrant > 0 && (
          <div className="mb-4 p-3 rounded-lg bg-success-50 border border-success-200">
            <div className="flex items-center gap-2">
              <PoundSterling className="h-5 w-5 text-success-600" />
              <span className="text-sm text-success-700">Maximum potential grant:</span>
              <span className="text-lg font-bold text-success-700">
                {formatCurrency(maxPotentialGrant)}
              </span>
            </div>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-neutral-600 mb-4">
          {scheme.description}
        </p>

        {/* What It Covers */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-neutral-700 mb-2">What it covers:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {scheme.whatItCovers.slice(0, 6).map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                <CheckCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-success-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {scheme.whatItCovers.length > 6 && (
            <p className="text-xs text-neutral-500 mt-1">
              +{scheme.whatItCovers.length - 6} more measures covered
            </p>
          )}
        </div>

        {/* Eligibility Reasons */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-neutral-700 mb-2">
            {isEligible ? 'Why you may qualify:' : 'Why you may not qualify:'}
          </h4>
          <ul className="space-y-1">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                {isEligible ? (
                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-primary-500" />
                ) : (
                  <AlertCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-danger-500" />
                )}
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Landlord Contribution */}
        {scheme.landlordContribution && isEligible && (
          <div className="mb-4 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
            <h4 className="text-sm font-medium text-neutral-700 mb-1">Your contribution:</h4>
            <p className="text-sm text-neutral-600">{scheme.landlordContribution}</p>
          </div>
        )}

        {/* Deadline */}
        {scheme.deadline && (
          <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
            <Calendar className="h-4 w-4" />
            <span>Scheme deadline: {scheme.deadline}</span>
          </div>
        )}
      </CardContent>

      {/* Footer with Link */}
      <CardFooter className="px-5 py-4 bg-neutral-50 border-t border-neutral-200">
        <div className="flex items-center justify-between w-full">
          <span className="text-xs text-neutral-500">
            Last verified: {scheme.lastVerified}
          </span>
          <a
            href={scheme.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-1 text-sm font-medium',
              'text-primary-600 hover:text-primary-700 transition-colors'
            )}
          >
            Learn more & apply
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}

export function GrantResults({ results, inputs, onReset }: GrantResultsProps) {
  const eligibleResults = useMemo(
    () => results.filter((r) => r.confidence !== 'not-eligible'),
    [results]
  );

  const ineligibleResults = useMemo(
    () => results.filter((r) => r.confidence === 'not-eligible'),
    [results]
  );

  const totalPotentialFunding = useMemo(
    () => calculateTotalPotentialFunding(results),
    [results]
  );

  const nextSteps = useMemo(() => getNextSteps(results, inputs), [results, inputs]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Summary Card */}
      <Card variant="highlighted" padding="lg">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-100 mb-4">
            <PoundSterling className="h-8 w-8 text-success-600" />
          </div>
          <h2 className="text-2xl font-bold text-primary-800 mb-2">
            Your Grant Eligibility Results
          </h2>
          {eligibleResults.length > 0 ? (
            <>
              <p className="text-lg text-neutral-600 mb-4">
                Based on your answers, you may be eligible for up to:
              </p>
              <div className="text-4xl font-bold text-success-600 mb-2">
                {formatCurrency(totalPotentialFunding)}
              </div>
              <p className="text-sm text-neutral-500">
                in potential grants across {eligibleResults.length} scheme{eligibleResults.length !== 1 ? 's' : ''}
              </p>
            </>
          ) : (
            <p className="text-lg text-neutral-600">
              Based on your current circumstances, you may not qualify for the main grant schemes.
              See recommendations below for next steps.
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Button variant="primary" onClick={handlePrint} leftIcon={<Printer className="h-4 w-4" />}>
            Print Results
          </Button>
          <Button variant="outline" onClick={onReset} leftIcon={<RefreshCw className="h-4 w-4" />}>
            Check Another Property
          </Button>
        </div>
      </Card>

      {/* Eligible Schemes */}
      {eligibleResults.length > 0 && (
        <section aria-labelledby="eligible-schemes-heading">
          <h2 id="eligible-schemes-heading" className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success-600" />
            Schemes You May Qualify For ({eligibleResults.length})
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {eligibleResults.map((result) => (
              <SchemeCard key={result.scheme.id} result={result} />
            ))}
          </div>
        </section>
      )}

      {/* Ineligible Schemes */}
      {ineligibleResults.length > 0 && (
        <section aria-labelledby="ineligible-schemes-heading">
          <h2
            id="ineligible-schemes-heading"
            className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2"
          >
            <XCircle className="h-5 w-5 text-danger-500" />
            Schemes You May Not Qualify For ({ineligibleResults.length})
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ineligibleResults.map((result) => (
              <SchemeCard key={result.scheme.id} result={result} />
            ))}
          </div>
        </section>
      )}

      {/* Next Steps */}
      <section aria-labelledby="next-steps-heading">
        <Card variant="default" padding="lg">
          <CardHeader className="pb-4">
            <CardTitle as="h2" className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-primary-600" />
              Recommended Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-sm font-medium flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-neutral-700">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Disclaimer */}
      <Alert variant="warning" title="Important Disclaimer">
        <div className="space-y-2">
          <p>
            <strong>Eligibility is indicative only.</strong> This tool provides guidance based on general scheme
            criteria. Actual eligibility must be confirmed directly with the scheme administrator or an approved
            installer.
          </p>
          <p>
            Grant availability, funding, and eligibility criteria may change. We recommend contacting the relevant
            scheme before making any financial commitments.
          </p>
          <p className="text-xs mt-3">
            <strong>Last updated:</strong> January 2026. Grant scheme information sourced from GOV.UK and Ofgem.
          </p>
        </div>
      </Alert>

      {/* Related Content */}
      <section aria-labelledby="related-content-heading">
        <h2 id="related-content-heading" className="text-lg font-semibold text-neutral-800 mb-4">
          Related Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/costs" className="group">
            <Card hoverable padding="md" className="h-full">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary-100">
                  <PoundSterling className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 group-hover:text-primary-700 transition-colors">
                    Complete Cost Guide
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    Understand what EPC upgrades cost and plan your budget.
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/tools/cost-calculator" className="group">
            <Card hoverable padding="md" className="h-full">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent-100">
                  <Building2 className="h-5 w-5 text-accent-700" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 group-hover:text-primary-700 transition-colors">
                    Cost Calculator
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    Get personalised cost estimates for your specific property.
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/regulations/cost-cap-exemptions" className="group">
            <Card hoverable padding="md" className="h-full">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-success-100">
                  <FileText className="h-5 w-5 text-success-700" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 group-hover:text-primary-700 transition-colors">
                    Cost Cap Exemptions
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    Learn about exemptions if costs exceed the threshold.
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default GrantResults;
