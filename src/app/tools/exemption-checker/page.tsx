'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  FileCheck,
  Info,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Clock,
  AlertTriangle,
  FileText,
  CheckCircle,
  Home,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { ExemptionForm } from '@/components/exemption/ExemptionForm';
import { ExemptionResults } from '@/components/exemption/ExemptionResults';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { WarningBox } from '@/components/content/WarningBox';
import { InfoBox } from '@/components/content/InfoBox';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { GeneratedImage } from '@/components/content';
import { SourceCitation } from '@/components/content/SourceCitation';
import { Card, CardContent } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants';
import type { ExemptionInputs } from '@/components/exemption/ExemptionForm';

export default function ExemptionCheckerPage() {
  const [results, setResults] = useState<ExemptionInputs | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);

  const handleSubmit = useCallback((formInputs: ExemptionInputs) => {
    setIsProcessing(true);

    // Simulate processing delay for better UX
    setTimeout(() => {
      setResults(formInputs);
      setIsProcessing(false);

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
        title="Exemption Pathway Checker"
        subtitle="Find out if you qualify for an EPC C exemption and what evidence you need to register on the PRS Exemptions Register."
        breadcrumbs={[
          { name: 'Tools', url: `${SITE_CONFIG.url}/tools` },
          { name: 'Exemption Checker', url: `${SITE_CONFIG.url}/tools/exemption-checker` },
        ]}
      >
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <FileCheck className="h-4 w-4" />
            Free to use
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            Takes 5 minutes
          </span>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container size="lg">
          {/* Show results if available, otherwise show form */}
          {results ? (
            <ExemptionResults inputs={results} onReset={handleReset} />
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Check Your Exemption Eligibility
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Not all properties can reach EPC C, and the regulations recognise this.
                  If you have genuine barriers to improving your rental property, you may qualify
                  for an exemption. This tool will help you understand your options and what
                  evidence you need.
                </p>

                <KeyFactBox title="What You'll Learn" icon={FileCheck}>
                  <ul className="space-y-1 text-sm">
                    <li>Which exemption category applies to your situation</li>
                    <li>Your likely eligibility based on your circumstances</li>
                    <li>Exactly what evidence documents you need</li>
                    <li>Step-by-step registration process</li>
                    <li>Important rules about exemption duration and renewal</li>
                  </ul>
                </KeyFactBox>
              </div>

              {/* Hero Image */}
              <GeneratedImage
                imageId="exemption-checker-hero"
                alt="Landlord reviewing EPC exemption documents at a desk"
                description="A landlord carefully reviews official exemption paperwork at a tidy desk, with a laptop open to a government portal in the background. The scene shows the careful documentation process, with printed forms and a pen ready for notes. The atmosphere is professional and methodical."
                width={1200}
                height={500}
                instructions={[
                  'Show a person reviewing official-looking documents with focused attention',
                  'Include a laptop or computer screen in the background suggesting online registration',
                  'Convey a sense of careful compliance and thorough documentation',
                ]}
                className="mb-8"
              />

              {/* Exemption Types Overview */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Types of Exemption</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="h-5 w-5 text-primary-600" />
                      <h4 className="font-semibold text-neutral-800">Cost Cap Exemption</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      If you cannot reach EPC C even after spending £10,000 on improvements,
                      you can register for a cost cap exemption.
                    </p>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-5 w-5 text-primary-600" />
                      <h4 className="font-semibold text-neutral-800">Consent Exemption</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      If a third party (freeholder, planning authority, tenant) refuses consent
                      for necessary works.
                    </p>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-primary-600" />
                      <h4 className="font-semibold text-neutral-800">Devaluation Exemption</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      If improvements would reduce property value by more than the cost
                      of the improvements.
                    </p>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Home className="h-5 w-5 text-primary-600" />
                      <h4 className="font-semibold text-neutral-800">Heritage Exemption</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      For listed buildings or properties in conservation areas where
                      improvements would harm the building&apos;s character.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Exemption Form */}
              <div className="mb-12">
                <ExemptionForm onSubmit={handleSubmit} isProcessing={isProcessing} />
              </div>

              {/* Important Notice Before Form */}
              <WarningBox title="Exemptions Are Not Permanent">
                <p>
                  All exemptions are valid for 5 years from registration. After this period,
                  you must either improve the property to meet the minimum standard or re-apply
                  for exemption if the circumstances still apply.
                </p>
              </WarningBox>
            </div>
          )}

          {/* Methodology Section - Always visible */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card padding="md">
              <button
                type="button"
                onClick={() => setShowMethodology(!showMethodology)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={showMethodology}
              >
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  <span className="font-semibold text-primary-800 text-lg">
                    About Exemption Eligibility
                  </span>
                </div>
                {showMethodology ? (
                  <ChevronUp className="h-5 w-5 text-neutral-500" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neutral-500" aria-hidden="true" />
                )}
              </button>

              {showMethodology && (
                <CardContent className="mt-4 pt-4 border-t border-neutral-200">
                  <div className="space-y-6">
                    {/* How It Works */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">How This Tool Works</h4>
                      <p className="text-sm text-neutral-600 mb-3">
                        This tool provides guidance based on your responses. It assesses your
                        situation against the published exemption criteria from the Minimum
                        Energy Efficiency Standards (MEES) regulations.
                      </p>
                    </div>

                    {/* Exemption Categories */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Exemption Categories Explained</h4>
                      <ul className="text-sm text-neutral-600 space-y-2">
                        <li>
                          <strong>Cost Cap Exemption:</strong> Requires evidence that you have
                          obtained quotes showing EPC C cannot be achieved for £10,000 or less.
                        </li>
                        <li>
                          <strong>Consent Exemption:</strong> Requires written evidence that a
                          relevant third party has refused consent for the necessary works.
                        </li>
                        <li>
                          <strong>Devaluation Exemption:</strong> Requires an independent surveyor&apos;s
                          report showing improvements would reduce property value.
                        </li>
                        <li>
                          <strong>Heritage Exemption:</strong> Requires written confirmation from
                          the local authority that works would unacceptably alter the building&apos;s character.
                        </li>
                      </ul>
                    </div>

                    {/* Registration Process */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Registration Process</h4>
                      <p className="text-sm text-neutral-600">
                        Exemptions must be registered on the PRS Exemptions Register before they
                        take effect. Self-certification is permitted for most exemption types,
                        but you must retain evidence in case of challenge by the local authority.
                      </p>
                    </div>

                    {/* Limitations */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Limitations</h4>
                      <p className="text-sm text-neutral-600">
                        This tool provides guidance only. It cannot guarantee that an exemption
                        application will be accepted. Local authorities have the power to verify
                        exemption claims and may request additional evidence. Always ensure your
                        documentation is comprehensive and accurate.
                      </p>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Additional Information Boxes */}
            <div className="mt-8 space-y-4">
              <InfoBox title="The £10,000 Cost Cap">
                <p>
                  The cost cap applies to the total cost of making energy efficiency improvements,
                  not individual measures. You can combine multiple smaller improvements up to
                  this limit. The cap includes VAT and installation costs but excludes any
                  costs that would have been incurred anyway (e.g., replacing a broken boiler).
                </p>
              </InfoBox>

              <InfoBox title="New Tenancies vs Existing Tenancies">
                <p>
                  Exemption requirements apply when granting a new tenancy or renewing an existing
                  one. If you have an existing tenancy, the regulations will apply when it comes
                  up for renewal. Register your exemption before the tenancy renewal date.
                </p>
              </InfoBox>

              <WarningBox title="Enforcement and Penalties">
                <p>
                  Local authorities can issue penalties of up to £30,000 for non-compliance.
                  Claiming an invalid exemption or failing to register properly can also result
                  in enforcement action. Ensure you have genuine grounds and proper documentation.
                </p>
              </WarningBox>
            </div>

            {/* Related Content */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <RelatedContentCard
                  title="Cost Cap and Exemptions Guide"
                  excerpt="Complete guide to the £10,000 cost cap and all exemption types."
                  href="/regulations/cost-cap-exemptions"
                  category="Regulations"
                  readingTime={12}
                />
                <RelatedContentCard
                  title="MEES Regulations Explained"
                  excerpt="Understand the full Minimum Energy Efficiency Standards requirements."
                  href="/regulations/mees-regulations-guide"
                  category="Regulations"
                  readingTime={15}
                />
                <RelatedContentCard
                  title="Upgrade Cost Calculator"
                  excerpt="Estimate costs for improving your property's EPC rating."
                  href="/tools/cost-calculator"
                  category="Tools"
                  readingTime={5}
                />
              </div>
            </div>

            {/* External Resources */}
            <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-primary-800 mb-4">
                <CheckCircle className="inline h-5 w-5 mr-2" aria-hidden="true" />
                Official Resources
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://www.gov.uk/government/publications/private-rented-sector-exemptions-register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 hover:underline font-medium"
                  >
                    PRS Exemptions Register (GOV.UK)
                  </a>
                  <p className="text-neutral-600 mt-1">
                    Official register for landlord exemptions - create an account and submit your exemption.
                  </p>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 hover:underline font-medium"
                  >
                    MEES Landlord Guidance (GOV.UK)
                  </a>
                  <p className="text-neutral-600 mt-1">
                    Official government guidance on minimum energy efficiency standards for landlords.
                  </p>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/find-energy-certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 hover:underline font-medium"
                  >
                    Find an Energy Certificate (GOV.UK)
                  </a>
                  <p className="text-neutral-600 mt-1">
                    Look up existing EPC certificates for any property in England and Wales.
                  </p>
                </li>
              </ul>
            </div>

            {/* Sources */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Sources</h3>
              <div className="space-y-2">
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="The Energy Efficiency (Private Rented Property) (England and Wales) Regulations 2015"
                  url="https://www.legislation.gov.uk/uksi/2015/962/contents"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="Domestic private rented property: minimum energy efficiency standard - landlord guidance"
                  url="https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="PRS Exemptions Register"
                  url="https://www.gov.uk/government/publications/private-rented-sector-exemptions-register"
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
