'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  FileSearch,
  Info,
  ChevronDown,
  ChevronUp,
  FileText,
  HelpCircle,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { EPCAnalyserForm } from '@/components/epc-analyser/EPCAnalyserForm';
import { EPCAnalysisResults } from '@/components/epc-analyser/EPCAnalysisResults';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { WarningBox } from '@/components/content/WarningBox';
import { TipBox } from '@/components/content/TipBox';
import { InfoBox } from '@/components/content/InfoBox';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { Card, CardContent } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants';
import { analyzeEPC } from '@/lib/epc-analysis';
import type { EPCAnalyserInputs, EPCAnalysisResults as EPCAnalysisResultsType } from '@/lib/epc-analysis';

export default function EPCAnalyserPage() {
  const [results, setResults] = useState<EPCAnalysisResultsType | null>(null);
  const [inputs, setInputs] = useState<EPCAnalyserInputs | null>(null);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const handleSubmit = useCallback((formInputs: EPCAnalyserInputs) => {
    setIsAnalysing(true);
    setInputs(formInputs);

    // Simulate analysis delay for better UX
    setTimeout(() => {
      const analysisResults = analyzeEPC(formInputs);
      setResults(analysisResults);
      setIsAnalysing(false);

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
        title="EPC Analyser"
        subtitle="Understand your EPC certificate better than the assessor explained it. Get insights into what's affecting your score and what might be wrong."
        breadcrumbs={[
          { name: 'Tools', url: `${SITE_CONFIG.url}/tools` },
          { name: 'EPC Analyser', url: `${SITE_CONFIG.url}/tools/epc-analyser` },
        ]}
      >
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <FileSearch className="h-4 w-4" />
            Free analysis tool
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4" />
            No login required
          </span>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container size="lg">
          {/* Show results if available, otherwise show form */}
          {results && inputs ? (
            <EPCAnalysisResults
              results={results}
              inputs={inputs}
              onReset={handleReset}
            />
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Understand Your EPC Better
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Many landlords receive their EPC certificate without a proper explanation of what it means.
                  Assessors are often rushed and may make assumptions that could be wrong. This tool helps you
                  understand your EPC and identify potential issues.
                </p>

                <KeyFactBox title="What This Tool Does" icon={FileSearch}>
                  <ul className="space-y-1 text-sm">
                    <li>Compares your score to typical properties of the same type</li>
                    <li>Identifies what&apos;s dragging your score down</li>
                    <li>Flags potential assessor assumptions that may be incorrect</li>
                    <li>Suggests quick wins that might be missing from your recommendations</li>
                    <li>Analyses each recommendation with cost and impact estimates</li>
                  </ul>
                </KeyFactBox>
              </div>

              {/* Why This Matters */}
              <div className="mb-8 grid md:grid-cols-3 gap-4">
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="h-5 w-5 text-primary-600" />
                    <h3 className="font-semibold text-neutral-800">Assessor Assumptions</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    EPC assessors often make assumptions when they can&apos;t see inside walls or access lofts.
                    These assumptions can hurt your score.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-warning-600" />
                    <h3 className="font-semibold text-neutral-800">Missing Information</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    If you have documentation proving insulation or upgrades, a reassessment with this
                    evidence could improve your rating.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-success-600" />
                    <h3 className="font-semibold text-neutral-800">Better Planning</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Understanding what affects your score helps you prioritise improvements and avoid
                    wasting money on the wrong upgrades.
                  </p>
                </div>
              </div>

              {/* What You'll Need */}
              <TipBox title="Have Your EPC Certificate Ready">
                <p className="mb-2">
                  To get the most accurate analysis, you&apos;ll need the details from your current EPC certificate:
                </p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Your current rating (A-G) and score (1-100)</li>
                  <li>The property details section (wall type, insulation, etc.)</li>
                  <li>The list of recommendations</li>
                </ul>
                <p className="mt-2 text-sm">
                  Don&apos;t have your EPC to hand?{' '}
                  <a
                    href="https://www.gov.uk/find-energy-certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-700 hover:underline font-medium"
                  >
                    Find it on the EPC Register
                  </a>
                </p>
              </TipBox>

              {/* The Analyser Form */}
              <div className="my-12">
                <EPCAnalyserForm
                  onSubmit={handleSubmit}
                  isAnalysing={isAnalysing}
                />
              </div>
            </div>
          )}

          {/* How It Works Section - Always visible */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card padding="md">
              <button
                type="button"
                onClick={() => setShowHowItWorks(!showHowItWorks)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={showHowItWorks}
              >
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  <span className="font-semibold text-primary-800 text-lg">
                    How This Analysis Works
                  </span>
                </div>
                {showHowItWorks ? (
                  <ChevronUp className="h-5 w-5 text-neutral-500" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neutral-500" aria-hidden="true" />
                )}
              </button>

              {showHowItWorks && (
                <CardContent className="mt-4 pt-4 border-t border-neutral-200">
                  <div className="space-y-6">
                    {/* Comparison Data */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Score Comparisons</h4>
                      <p className="text-sm text-neutral-600">
                        We compare your score against typical EPCs for similar property types and ages.
                        This data comes from analysis of the national EPC database and helps put your
                        score in context.
                      </p>
                    </div>

                    {/* Assumption Detection */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Assumption Detection</h4>
                      <p className="text-sm text-neutral-600">
                        We look for common patterns that suggest an assessor may have made assumptions.
                        For example, cavity walls being recorded for properties built before 1930 (when
                        solid walls were standard) is a common error.
                      </p>
                    </div>

                    {/* Cost Estimates */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Cost Estimates</h4>
                      <p className="text-sm text-neutral-600">
                        Our cost estimates are based on industry data and Energy Saving Trust guidance.
                        Actual costs vary by region, property specifics, and contractor availability.
                        Always get multiple quotes before proceeding with work.
                      </p>
                    </div>

                    {/* EPC Points */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">EPC Point Estimates</h4>
                      <p className="text-sm text-neutral-600">
                        The point improvements shown are indicative based on typical impacts. The actual
                        improvement for your property depends on its specific characteristics and current
                        state. Only an accredited EPC assessor can provide official scores.
                      </p>
                    </div>

                    {/* Limitations */}
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">Limitations</h4>
                      <p className="text-sm text-neutral-600">
                        This tool provides guidance based on the information you enter. It cannot account for:
                      </p>
                      <ul className="text-sm text-neutral-600 space-y-1 list-disc list-inside mt-2">
                        <li>Specific property conditions not visible on an EPC</li>
                        <li>Regional variations in construction methods</li>
                        <li>Non-standard property features</li>
                        <li>Changes made since the EPC was issued</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Caveats */}
            <div className="mt-8 space-y-4">
              <WarningBox title="This Is Not a Professional Assessment">
                <p>
                  This tool provides indicative analysis only. It is not a substitute for a professional
                  EPC assessment. If you believe your EPC contains errors, you should contact an accredited
                  assessor for a reassessment.
                </p>
              </WarningBox>

              <InfoBox title="When to Get a New EPC">
                <p>
                  Consider getting a new EPC assessment if: you have documentation proving improvements
                  (receipts, guarantees, etc.), the assessor couldn&apos;t access key areas during the original
                  survey, or you&apos;ve made improvements since the last assessment.
                </p>
              </InfoBox>
            </div>

            {/* Related Content */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <RelatedContentCard
                  title="Upgrade Cost Calculator"
                  excerpt="Get detailed cost estimates for improving your property's EPC rating."
                  href="/tools/cost-calculator"
                  category="Tools"
                  readingTime={5}
                />
                <RelatedContentCard
                  title="Understanding Your EPC"
                  excerpt="A complete guide to reading and understanding your EPC certificate."
                  href="/resources/understanding-your-epc"
                  category="Resources"
                  readingTime={8}
                />
                <RelatedContentCard
                  title="Common EPC Mistakes"
                  excerpt="The most common errors found on EPC certificates and how to spot them."
                  href="/resources/common-epc-mistakes"
                  category="Resources"
                  readingTime={6}
                />
              </div>
            </div>

            {/* External Links */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Official Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="https://www.gov.uk/find-energy-certificate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-neutral-800">Find Your EPC</p>
                    <p className="text-sm text-neutral-600">
                      Search the official EPC register to find your certificate
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-neutral-800">Official MEES Guidance</p>
                    <p className="text-sm text-neutral-600">
                      Government guidance on minimum energy efficiency standards
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
