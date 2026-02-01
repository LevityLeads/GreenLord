'use client';

import { useState, useCallback } from 'react';
import {
  PoundSterling,
  Info,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  Zap,
  Home,
  Users,
  FileText,
  HelpCircle,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { GrantCheckerForm } from '@/components/grants/GrantCheckerForm';
import { GrantResults } from '@/components/grants/GrantResults';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { WarningBox } from '@/components/content/WarningBox';
import { InfoBox } from '@/components/content/InfoBox';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { SourceCitation } from '@/components/content/SourceCitation';
import { Card, CardContent } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants';
import {
  type GrantCheckerInputs,
  type GrantEligibilityResult,
  checkGrantEligibility,
  QUALIFYING_BENEFITS,
} from '@/data/grant-schemes';

export default function GrantCheckerPage() {
  const [results, setResults] = useState<GrantEligibilityResult[] | null>(null);
  const [inputs, setInputs] = useState<GrantCheckerInputs | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [showQualifyingBenefits, setShowQualifyingBenefits] = useState(false);

  const handleSubmit = useCallback((formInputs: GrantCheckerInputs) => {
    setIsChecking(true);
    setInputs(formInputs);

    // Simulate processing delay for better UX
    setTimeout(() => {
      const eligibilityResults = checkGrantEligibility(formInputs);
      setResults(eligibilityResults);
      setIsChecking(false);

      // Scroll to results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  }, []);

  const handleReset = useCallback(() => {
    setResults(null);
    setInputs(null);
  }, []);

  return (
    <>
      <PageHeader
        title="Grant Eligibility Checker"
        subtitle="Find out which government grants and energy efficiency schemes you may qualify for based on your property and tenant circumstances."
        breadcrumbs={[
          { name: 'Tools', url: `${SITE_CONFIG.url}/tools` },
          { name: 'Grant Eligibility Checker', url: `${SITE_CONFIG.url}/tools/grant-checker` },
        ]}
      >
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <Zap className="h-4 w-4" />
            Free to use
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            Results in 2 minutes
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
          {results && inputs ? (
            <GrantResults results={results} inputs={inputs} onReset={handleReset} />
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Check Your Grant Eligibility
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Several government grants and energy supplier schemes can help fund energy efficiency
                  improvements for rental properties. This tool checks your eligibility based on your
                  property details and tenant circumstances.
                </p>

                <KeyFactBox title="Schemes We Check" icon={PoundSterling}>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <strong>ECO4:</strong> Up to full cost of measures for tenants on qualifying benefits
                    </li>
                    <li>
                      <strong>Boiler Upgrade Scheme:</strong> Up to £7,500 for heat pump installation
                    </li>
                    <li>
                      <strong>Warm Homes: Local Grant:</strong> Up to £30,000 for insulation and heating
                    </li>
                    <li>
                      <strong>Great British Insulation Scheme:</strong> Free or subsidised insulation
                    </li>
                  </ul>
                </KeyFactBox>
              </div>

              {/* What You'll Need */}
              <div className="mb-8 grid md:grid-cols-3 gap-4">
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="h-5 w-5 text-primary-600" />
                    <h3 className="font-semibold text-neutral-800">Property Details</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Postcode area, property type, EPC rating, and Council Tax band.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-primary-600" />
                    <h3 className="font-semibold text-neutral-800">Heating System</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Current heating type and whether you are considering replacement.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary-600" />
                    <h3 className="font-semibold text-neutral-800">Tenant Info</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Tenant benefit status and approximate household income.
                  </p>
                </div>
              </div>

              {/* The Grant Checker Form */}
              <div className="mb-12">
                <GrantCheckerForm onSubmit={handleSubmit} isChecking={isChecking} />
              </div>

              {/* Qualifying Benefits Reference */}
              <Card padding="md" className="mb-8">
                <button
                  type="button"
                  onClick={() => setShowQualifyingBenefits(!showQualifyingBenefits)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={showQualifyingBenefits}
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary-600" aria-hidden="true" />
                    <span className="font-semibold text-primary-800">
                      What are qualifying benefits for ECO4?
                    </span>
                  </div>
                  {showQualifyingBenefits ? (
                    <ChevronUp className="h-5 w-5 text-neutral-500" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-neutral-500" aria-hidden="true" />
                  )}
                </button>

                {showQualifyingBenefits && (
                  <CardContent className="mt-4 pt-4 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600 mb-4">
                      Tenants receiving any of the following benefits may automatically qualify for ECO4
                      funding:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {QUALIFYING_BENEFITS.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-sm text-neutral-700"
                        >
                          <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-neutral-500 mt-4">
                      Properties may also qualify through the LA Flex pathway if the local authority
                      has determined the household is in fuel poverty or on a low income.
                    </p>
                  </CardContent>
                )}
              </Card>
            </div>
          )}

          {/* About Section - Always visible */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card padding="md">
              <button
                type="button"
                onClick={() => {}}
                className="flex w-full items-center gap-2 text-left"
              >
                <Info className="h-5 w-5 text-primary-600" aria-hidden="true" />
                <span className="font-semibold text-primary-800 text-lg">About These Schemes</span>
              </button>

              <CardContent className="mt-4 pt-4 border-t border-neutral-200">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">ECO4 (Energy Company Obligation)</h4>
                    <p className="text-sm text-neutral-600">
                      ECO4 is the fourth iteration of the Energy Company Obligation scheme, running until
                      March 2026 (with potential extension). Large energy suppliers are obligated to fund
                      energy efficiency measures in low-income and fuel-poor households. For landlords,
                      this means free or heavily subsidised improvements when tenants are on qualifying
                      benefits.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Boiler Upgrade Scheme (BUS)</h4>
                    <p className="text-sm text-neutral-600">
                      The Boiler Upgrade Scheme provides upfront capital grants to support the installation
                      of low-carbon heating systems like heat pumps. Originally set to end in 2025, the
                      scheme has been extended to March 2030. Grants of up to £7,500 are available for air
                      source and ground source heat pumps, and up to £5,000 for biomass boilers.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Warm Homes: Local Grant</h4>
                    <p className="text-sm text-neutral-600">
                      Announced in January 2026 as part of the Warm Homes Plan, this scheme provides
                      substantial funding for private rented properties with low-income tenants. Landlords
                      can receive up to £30,000 for their first property (full funding) or 50% contribution
                      on additional properties. Delivered through local authorities.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Great British Insulation Scheme</h4>
                    <p className="text-sm text-neutral-600">
                      GBIS focuses specifically on insulation measures, targeting properties in Council Tax
                      bands A-D with poor energy efficiency (EPC D or below). The scheme is funded by
                      energy suppliers and covers cavity wall, loft, and other insulation measures at no
                      cost to qualifying households.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Caveats */}
            <div className="mt-8 space-y-4">
              <WarningBox title="Eligibility Must Be Confirmed">
                <p>
                  This tool provides indicative eligibility based on general scheme criteria. Actual
                  eligibility is determined by scheme administrators, installers, or local authorities.
                  Always verify eligibility before making financial decisions.
                </p>
              </WarningBox>

              <InfoBox title="Scheme Availability Varies">
                <p>
                  Funding availability can vary by region and over time. Some schemes have limited
                  budgets that may be exhausted. Contact the relevant scheme administrator to confirm
                  current availability in your area.
                </p>
              </InfoBox>

              <InfoBox title="Combining Schemes">
                <p>
                  In some cases, you may be able to combine funding from multiple schemes (e.g., using
                  ECO4 for insulation and BUS for a heat pump). However, you cannot claim funding for
                  the same measure from multiple schemes. Speak to installers about optimising your
                  funding mix.
                </p>
              </InfoBox>
            </div>

            {/* Related Content */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <RelatedContentCard
                  title="Upgrade Cost Calculator"
                  excerpt="Get personalised cost estimates for EPC improvements based on your property."
                  href="/tools/cost-calculator"
                  category="Tools"
                  readingTime={3}
                />
                <RelatedContentCard
                  title="Cost Cap and Exemptions"
                  excerpt="Understanding when the £10,000 cap applies and how to register for exemption."
                  href="/regulations/cost-cap-exemptions"
                  category="Regulations"
                  readingTime={12}
                />
                <RelatedContentCard
                  title="Warm Homes Plan Summary"
                  excerpt="Overview of the government's Warm Homes Plan and what it means for landlords."
                  href="/regulations/warm-homes-plan"
                  category="Regulations"
                  readingTime={8}
                />
              </div>
            </div>

            {/* Sources */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Data Sources</h3>
              <div className="space-y-2">
                <SourceCitation
                  sourceName="Ofgem"
                  documentTitle="Energy Company Obligation (ECO4) Guidance"
                  url="https://www.ofgem.gov.uk/environmental-and-social-schemes/energy-company-obligation-eco"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="Boiler Upgrade Scheme"
                  url="https://www.gov.uk/apply-boiler-upgrade-scheme"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="Warm Homes: Local Grant"
                  url="https://www.gov.uk/apply-warm-homes-local-grant"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="Great British Insulation Scheme"
                  url="https://www.gov.uk/apply-great-british-insulation-scheme"
                  accessedDate="January 2026"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
