'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  PoundSterling,
  Info,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Zap,
  Building2,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { GrantCheckerForm } from '@/components/grants/GrantCheckerForm';
import { GrantResults } from '@/components/grants/GrantResults';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { TipBox } from '@/components/content/TipBox';
import { InfoBox } from '@/components/content/InfoBox';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { checkGrantEligibility } from '@/lib/grants';
import { SITE_CONFIG } from '@/lib/constants';
import type { GrantEligibilityInputs, GrantEligibilityResult } from '@/lib/types';

export default function GrantEligibilityPage() {
  const [results, setResults] = useState<GrantEligibilityResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);

  const handleSubmit = useCallback((inputs: GrantEligibilityInputs) => {
    setIsChecking(true);

    // Simulate a brief delay for UX
    setTimeout(() => {
      const eligibilityResults = checkGrantEligibility(inputs);
      setResults(eligibilityResults);
      setIsChecking(false);

      // Scroll to results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  }, []);

  const handleReset = useCallback(() => {
    setResults(null);
  }, []);

  return (
    <>
      <PageHeader
        title="Grant Eligibility Checker"
        subtitle="Find out which government grants and funding schemes you may qualify for based on your property and tenant circumstances."
        breadcrumbs={[
          { name: 'Tools', url: `${SITE_CONFIG.url}/tools` },
          { name: 'Grant Eligibility', url: `${SITE_CONFIG.url}/tools/grant-eligibility` },
        ]}
      >
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <PoundSterling className="h-4 w-4" />
            Free to use
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            Results in minutes
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4" />
            Updated January 2026
          </span>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container size="lg">
          {/* Show results if available, otherwise show form */}
          {results ? (
            <GrantResults results={results} onReset={handleReset} />
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="mb-8">
                <KeyFactBox title="Funding Available Now">
                  <ul className="space-y-1 list-disc pl-4">
                    <li>Boiler Upgrade Scheme: Up to £7,500 for heat pumps</li>
                    <li>ECO4: Free insulation and heating for eligible tenants</li>
                    <li>Warm Homes: Local: Up to £30,000 for comprehensive improvements</li>
                    <li>Local authority schemes: Additional funding by area</li>
                  </ul>
                </KeyFactBox>
              </div>

              {/* The Form */}
              <Card padding="lg">
                <GrantCheckerForm onSubmit={handleSubmit} isChecking={isChecking} />
              </Card>

              {/* Supporting Information */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <TipBox title="For Best Results">
                  <ul className="space-y-2 text-sm">
                    <li>Enter your full postcode for local scheme matching</li>
                    <li>Know your property's current EPC rating (check your certificate)</li>
                    <li>If possible, confirm your tenant's benefit status</li>
                    <li>Check if your tenant's household income is below £36,000</li>
                  </ul>
                </TipBox>

                <InfoBox title="About This Tool">
                  <p className="text-sm">
                    This tool checks your eligibility against national schemes (ECO4, BUS, Warm
                    Homes: Local) and local authority grants from 10 major councils. Results are
                    indicative - always verify with scheme administrators.
                  </p>
                </InfoBox>
              </div>

              {/* Schemes Covered */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-primary-800">Schemes We Check</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-success-100">
                      <Zap className="h-5 w-5 text-success-600" />
                    </div>
                    <h4 className="font-medium text-neutral-800">ECO4</h4>
                    <p className="mt-1 text-sm text-neutral-600">
                      Free improvements via energy suppliers
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                      <PoundSterling className="h-5 w-5 text-primary-600" />
                    </div>
                    <h4 className="font-medium text-neutral-800">Boiler Upgrade Scheme</h4>
                    <p className="mt-1 text-sm text-neutral-600">
                      £5,000-£7,500 for low-carbon heating
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent-100">
                      <Building2 className="h-5 w-5 text-accent-600" />
                    </div>
                    <h4 className="font-medium text-neutral-800">Warm Homes: Local</h4>
                    <p className="mt-1 text-sm text-neutral-600">
                      Up to £30,000 via local authorities
                    </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-4">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-warning-100">
                      <Building2 className="h-5 w-5 text-warning-600" />
                    </div>
                    <h4 className="font-medium text-neutral-800">Local Council Schemes</h4>
                    <p className="mt-1 text-sm text-neutral-600">
                      10 major councils included
                    </p>
                  </div>
                </div>
              </div>

              {/* Methodology Section */}
              <Card padding="md" className="mt-8">
                <button
                  type="button"
                  onClick={() => setShowMethodology(!showMethodology)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={showMethodology}
                >
                  <div className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary-600" aria-hidden="true" />
                    <span className="font-semibold text-primary-800">
                      How does this tool work?
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
                    <p className="text-sm text-neutral-600">
                      This tool compares your property and tenant details against the published
                      eligibility criteria for each grant scheme. We check:
                    </p>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-neutral-600">
                      <li>Geographic coverage (national vs local schemes)</li>
                      <li>EPC rating requirements</li>
                      <li>Heating system eligibility (for heat pump grants)</li>
                      <li>Tenant benefit status (for ECO4)</li>
                      <li>Tenant income thresholds (for Warm Homes: Local)</li>
                      <li>Property type and tenure</li>
                    </ul>
                    <p className="text-sm text-neutral-600">
                      Results are categorized by confidence level. "Definite" means all criteria are
                      clearly met. "Likely" means most criteria are met with reasonable assumptions.
                      "Possible" means some criteria may be met but require verification.
                    </p>
                    <p className="text-sm text-neutral-500">
                      Data is sourced from GOV.UK, Ofgem, and local authority websites. Last updated:
                      January 2026.
                    </p>
                  </div>
                )}
              </Card>
            </div>
          )}
        </Container>
      </Section>

      {/* Related Tools */}
      {!results && (
        <Section background="muted" padding="lg">
          <Container>
            <h2 className="mb-6 text-center text-xl font-semibold text-primary-800">
              Related Tools
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <RelatedContentCard
                title="Upgrade Cost Calculator"
                href="/tools/cost-calculator"
                excerpt="Get personalised cost estimates for EPC improvements based on your property type and location."
                category="Tool"
              />
              <RelatedContentCard
                title="ECO4 Guide"
                href="/costs/grants/eco4"
                excerpt="Complete guide to the Energy Company Obligation scheme for landlords."
                category="Guide"
              />
              <RelatedContentCard
                title="Boiler Upgrade Scheme"
                href="/costs/grants/boiler-upgrade-scheme"
                excerpt="Everything you need to know about the heat pump grant."
                category="Guide"
              />
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ Section */}
      <Section background="white" padding="lg">
        <Container size="md">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">
                Can I claim multiple grants for the same property?
              </h3>
              <p className="text-neutral-600">
                Yes, in many cases. For example, you could use ECO4 for insulation and the Boiler
                Upgrade Scheme for a heat pump. However, you cannot use multiple grants for the same
                specific improvement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">
                What if my tenant doesn't receive benefits?
              </h3>
              <p className="text-neutral-600">
                You may still qualify for schemes without benefit requirements, such as the Boiler
                Upgrade Scheme, Great British Insulation Scheme, or local authority grants based on
                income thresholds.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">
                Do I need to contribute as a landlord?
              </h3>
              <p className="text-neutral-600">
                It depends on the scheme. ECO4 is typically free for qualifying tenants. The Boiler
                Upgrade Scheme covers most of the cost but you pay the difference. Local authority
                schemes often require 25-50% landlord contribution.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">
                How accurate are these results?
              </h3>
              <p className="text-neutral-600">
                This tool provides indicative guidance based on published eligibility criteria.
                Scheme administrators make final eligibility decisions. We recommend contacting
                schemes directly to confirm eligibility before planning work.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
