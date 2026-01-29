'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  Calculator,
  Info,
  ChevronDown,
  ChevronUp,
  FileText,
  TrendingUp,
  PoundSterling,
  AlertTriangle,
  MapPin,
  Home,
  Thermometer,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { CalculatorForm } from '@/components/calculator/CalculatorForm';
import { CalculatorResults } from '@/components/calculator/CalculatorResults';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { WarningBox } from '@/components/content/WarningBox';
import { TipBox } from '@/components/content/TipBox';
import { InfoBox } from '@/components/content/InfoBox';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { ImagePlaceholder } from '@/components/content/ImagePlaceholder';
import { SourceCitation } from '@/components/content/SourceCitation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { calculateUpgradeCosts } from '@/lib/calculator';
import { SITE_CONFIG } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';
import type { CalculatorInputs, CalculatorResults as CalculatorResultsType } from '@/lib/types';

// Note: Metadata must be in a separate file for client components
// or we can export it from a layout.tsx or separate metadata file

export default function CostCalculatorPage() {
  const [results, setResults] = useState<CalculatorResultsType | null>(null);
  const [inputs, setInputs] = useState<CalculatorInputs | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);

  const handleSubmit = useCallback((formInputs: CalculatorInputs) => {
    setIsCalculating(true);
    setInputs(formInputs);

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const calculatedResults = calculateUpgradeCosts(formInputs);
      setResults(calculatedResults);
      setIsCalculating(false);

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
        title="Upgrade Cost Calculator"
        subtitle="Get a personalised estimate for improving your rental property's EPC rating based on your property type, location, and current condition."
        breadcrumbs={[
          { name: 'Tools', url: `${SITE_CONFIG.url}/tools` },
          { name: 'Cost Calculator', url: `${SITE_CONFIG.url}/tools/cost-calculator` },
        ]}
      >
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <Calculator className="h-4 w-4" />
            Free to use
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            Updated January 2026
          </span>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container size="lg">
          {/* Show results if available, otherwise show form */}
          {results && inputs ? (
            <CalculatorResults
              results={results}
              inputs={inputs}
              onReset={handleReset}
            />
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Estimate Your EPC Upgrade Costs
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  This calculator provides indicative costs for improving your rental property to meet the EPC C requirement by 2030. Answer a few questions about your property to receive a personalised estimate.
                </p>

                <KeyFactBox title="What You'll Get" icon={Calculator}>
                  <ul className="space-y-1 text-sm">
                    <li>Estimated total cost range (low, mid, high scenarios)</li>
                    <li>Recommended improvements in priority order</li>
                    <li>EPC point improvement estimates per measure</li>
                    <li>Cost-effectiveness ranking to maximise your investment</li>
                    <li>Indication of whether cost cap exemption may apply</li>
                  </ul>
                </KeyFactBox>
              </div>

              {/* Hero Image Placeholder */}
              <ImagePlaceholder
                alt="Calculator and planning tools for EPC upgrades"
                description="An inviting image showing calculator/planning elements - could include a laptop showing a calculator interface, printed estimate documents, a clipboard with cost breakdowns, or a property professional reviewing figures. Should convey the tool's purpose of helping landlords plan their upgrade investments."
                width={1200}
                height={500}
                instructions={[
                  'Show calculator or planning elements prominently',
                  'Include some EPC-related visual cues (rating charts, property images)',
                  'Professional but approachable tone',
                  'Clean, modern setting',
                ]}
                className="mb-8"
              />

              {/* What You'll Need */}
              <div className="mb-8 grid md:grid-cols-3 gap-4">
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="h-5 w-5 text-primary-600" />
                    <h3 className="font-semibold text-neutral-800">Property Details</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Property type, number of bedrooms, and construction type (cavity or solid walls).
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="h-5 w-5 text-primary-600" />
                    <h3 className="font-semibold text-neutral-800">Current Systems</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Heating type, existing insulation levels, and glazing details.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <h3 className="font-semibold text-neutral-800">Location</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Your region in the UK (costs vary by area).
                  </p>
                </div>
              </div>

              {/* The Calculator Form */}
              <div className="mb-12">
                <CalculatorForm
                  onSubmit={handleSubmit}
                  isCalculating={isCalculating}
                />
              </div>

              {/* Screenshot Placeholder */}
              <ImagePlaceholder
                alt="Example calculator results showing cost breakdown"
                description="A screenshot or mockup showing example calculator results - including the cost breakdown chart, recommended improvements list with costs and EPC points, and the progress toward EPC C. Should demonstrate the value and detail users will receive."
                width={1200}
                height={700}
                instructions={[
                  'Show realistic sample results (not blank state)',
                  'Include cost range visualization',
                  'Show improvement recommendations list',
                  'Display EPC rating progression',
                  'Clean UI design matching the site style',
                ]}
                className="mb-12"
              />
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
                    How Our Estimates Are Calculated
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
                    {/* Data Sources */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Cost Data Sources</h4>
                      <p className="text-sm text-neutral-600 mb-3">
                        Our baseline cost figures come from multiple authoritative sources to ensure accuracy:
                      </p>
                      <ul className="text-sm text-neutral-600 space-y-1 list-disc list-inside">
                        <li>Energy Saving Trust published cost guidance (2025-2026)</li>
                        <li>BEIS household energy efficiency statistics</li>
                        <li>Industry surveys from TrustMark registered installers</li>
                        <li>Warm Homes Plan cost assumptions (January 2026)</li>
                      </ul>
                    </div>

                    {/* Regional Multipliers */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Regional Adjustments</h4>
                      <p className="text-sm text-neutral-600 mb-3">
                        Labour and material costs vary significantly across the UK. We apply regional multipliers based on construction cost indices:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                        <div className="bg-neutral-50 p-2 rounded">
                          <span className="font-medium">London:</span> +25%
                        </div>
                        <div className="bg-neutral-50 p-2 rounded">
                          <span className="font-medium">South East:</span> +15%
                        </div>
                        <div className="bg-neutral-50 p-2 rounded">
                          <span className="font-medium">South West:</span> +5%
                        </div>
                        <div className="bg-neutral-50 p-2 rounded">
                          <span className="font-medium">Midlands:</span> -2% to -5%
                        </div>
                        <div className="bg-neutral-50 p-2 rounded">
                          <span className="font-medium">North:</span> -5% to -10%
                        </div>
                        <div className="bg-neutral-50 p-2 rounded">
                          <span className="font-medium">Wales/Scotland:</span> -5% to -8%
                        </div>
                      </div>
                    </div>

                    {/* Property Type Factors */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Property Type Factors</h4>
                      <p className="text-sm text-neutral-600 mb-3">
                        Different property types have different complexity and costs. Victorian terraces typically cost 20-30% more due to solid walls and period features, while newer builds may cost 10-15% less due to standardised construction.
                      </p>
                    </div>

                    {/* Size Adjustments */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Size Adjustments</h4>
                      <p className="text-sm text-neutral-600">
                        Larger properties have more wall area, more windows, and larger heating systems. We use bedroom count as a proxy for property size, applying adjustments ranging from -30% for 1-bed properties to +60% for 6+ bedroom homes.
                      </p>
                    </div>

                    {/* EPC Point Estimates */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">EPC Point Estimates</h4>
                      <p className="text-sm text-neutral-600">
                        The EPC points shown are indicative based on typical impacts seen in EPC assessments. Actual improvements depend on your property&apos;s specific characteristics and current performance. RdSAP methodology determines official EPC scores, which may differ from our estimates.
                      </p>
                    </div>

                    {/* Limitations */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Limitations of Estimates</h4>
                      <p className="text-sm text-neutral-600">
                        These estimates cannot account for:
                      </p>
                      <ul className="text-sm text-neutral-600 space-y-1 list-disc list-inside mt-2">
                        <li>Specific property condition and access challenges</li>
                        <li>Current contractor availability in your area</li>
                        <li>Specialist requirements (listed buildings, conservation areas)</li>
                        <li>Product choices and quality variations</li>
                        <li>Complex or non-standard construction</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Caveats */}
            <div className="mt-8 space-y-4">
              <WarningBox title="These Are Estimates Only">
                <p>
                  Actual costs will vary based on property condition, access, contractor availability, and specific product choices. These figures are intended to help you budget and plan, but you should always obtain multiple quotes from qualified installers before committing to any work.
                </p>
              </WarningBox>

              <WarningBox title="Professional Assessment Required">
                <p>
                  A professional EPC assessment is essential for accurate recommendations. An accredited assessor will evaluate your specific property and identify the improvements that will have the greatest impact on your EPC rating.
                </p>
              </WarningBox>

              <InfoBox title="Price Data Currency">
                <p>
                  Prices shown are based on January 2026 data from the Energy Saving Trust and industry sources. Construction costs can change due to material prices, labour availability, and market conditions. Check current prices with installers before planning work.
                </p>
              </InfoBox>
            </div>

            {/* Related Content */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <RelatedContentCard
                  title="D to C Upgrade Costs"
                  excerpt="Detailed breakdown for the most common upgrade path from D to C rating."
                  href="/costs/d-to-c-upgrade"
                  category="Costs"
                  readingTime={10}
                />
                <RelatedContentCard
                  title="Cost Cap and Exemptions"
                  excerpt="Understanding when the £10,000 cap applies and how to register for exemption."
                  href="/regulations/cost-cap-exemptions"
                  category="Regulations"
                  readingTime={12}
                />
                <RelatedContentCard
                  title="Complete Cost Guide"
                  excerpt="Full breakdown of all improvement costs by type and property."
                  href="/costs"
                  category="Costs"
                  readingTime={18}
                />
              </div>
            </div>

            {/* Sources */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Data Sources</h3>
              <div className="space-y-2">
                <SourceCitation
                  sourceName="Energy Saving Trust"
                  documentTitle="Home energy efficiency cost data"
                  url="https://energysavingtrust.org.uk/"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="Warm Homes Plan documentation"
                  url="https://www.gov.uk/government/publications/warm-homes-plan"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="BEIS"
                  documentTitle="Household Energy Efficiency Statistics"
                  url="https://www.gov.uk/government/collections/household-energy-efficiency-national-statistics"
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
