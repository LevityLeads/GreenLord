import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PoundSterling,
  AlertTriangle,
  CheckCircle,
  XCircle,
  FileText,
  Calculator,
  Clock,
  ArrowRight,
  Shield,
  Building2,
  Users,
  Home,
  FileCheck,
  Scale
} from 'lucide-react';

import { Container, Section, Sidebar } from '@/components/layout';
import { Card, CardBody, CardTitle, CardDescription } from '@/components/ui';
import { Badge } from '@/components/ui';
import { Button } from '@/components/ui';
import {
  KeyFactBox,
  WarningBox,
  TipBox,
  InfoBox,
  ArticleHeader,
  RelatedContentCard,
  SourceCitation,
  ImagePlaceholder,
  Breadcrumbs
} from '@/components/content';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency, formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'EPC Cost Cap and Exemptions Guide for Landlords | GreenLord',
  description: 'Complete guide to the GBP 10,000 cost cap exemption and all exemption types for UK landlords. Learn when you qualify and how to register.',
};

const breadcrumbs = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Regulations', url: `${SITE_CONFIG.url}/regulations` },
  { name: 'Cost Cap and Exemptions', url: `${SITE_CONFIG.url}/regulations/cost-cap-exemptions` },
];

const tocItems = [
  { id: 'understanding-cost-cap', title: 'Understanding the Cost Cap', level: 2 },
  { id: 'calculating-costs', title: 'What Counts Towards the Cap', level: 2 },
  { id: 'exemption-types', title: 'Types of Exemptions', level: 2 },
  { id: 'cost-cap-exemption', title: 'Cost Cap Exemption', level: 3 },
  { id: 'consent-exemption', title: 'Third Party Consent Exemption', level: 3 },
  { id: 'devaluation-exemption', title: 'Devaluation Exemption', level: 3 },
  { id: 'wall-exemption', title: 'Wall Insulation Exemption', level: 3 },
  { id: 'new-landlord-exemption', title: 'New Landlord Exemption', level: 3 },
  { id: 'registration-process', title: 'How to Register an Exemption', level: 2 },
  { id: 'risks', title: 'Risks of Relying on Exemptions', level: 2 },
];

const relatedArticles = [
  {
    title: 'EPC C 2030 Deadline',
    href: '/regulations/epc-c-2030-deadline',
    description: 'Full details on the October 2030 deadline',
  },
  {
    title: 'MEES Regulations Guide',
    href: '/regulations/mees-regulations-guide',
    description: 'Complete guide to minimum standards',
  },
  {
    title: 'Upgrade Cost Calculator',
    href: '/tools/cost-calculator',
    description: 'Estimate your improvement costs',
  },
];

export default function CostCapExemptionsPage() {
  return (
    <>
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <Breadcrumbs items={breadcrumbs} />

              <ArticleHeader
                title="Cost Cap and Exemptions: Complete Guide for Landlords"
                publishedDate="2026-01-22"
                lastUpdated="2026-01-25"
                author={SITE_CONFIG.author}
                readingTime={10}
                subtitle="Understanding the GBP 10,000 cost cap, how to calculate if you qualify for exemption, and the risks of relying on the exemption pathway."
              />

              {/* Introduction */}
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  The EPC regulations include exemptions for landlords who cannot achieve the minimum rating
                  despite reasonable effort. The most important of these is the cost cap exemption, which from
                  October 2030 is set at {formatCurrency(KEY_DATES.costCap)} including VAT.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  However, exemptions are not a simple escape route. You must first invest up to the cap on
                  qualifying improvements, maintain detailed evidence, and re-register every five years.
                  This guide explains exactly how the cost cap works and when you might qualify for exemption.
                </p>
              </div>

              {/* Key Fact Box */}
              <KeyFactBox title="The Cost Cap in Brief" icon={PoundSterling}>
                <p className="mb-2">
                  The {formatCurrency(KEY_DATES.costCap)} cost cap is not a spending limit. It is the threshold
                  that determines exemption eligibility. You must:
                </p>
                <ol className="list-decimal ml-4 space-y-1">
                  <li>Identify all cost-effective improvements for your property</li>
                  <li>Spend up to {formatCurrency(KEY_DATES.costCap)} on improvements</li>
                  <li>Only claim exemption if EPC C cannot be achieved after this spend</li>
                </ol>
              </KeyFactBox>

              {/* Understanding the Cost Cap */}
              <section id="understanding-cost-cap" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Understanding the {formatCurrency(KEY_DATES.costCap)} Cost Cap</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The cost cap exists to protect landlords from disproportionate expense. If the cost of achieving
                  EPC C would exceed the cap, the landlord can register for exemption after making improvements
                  up to that value. The key principle is that exemption is a last resort, not a first option.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="h-6 w-6 text-success-500" />
                        <CardTitle className="text-lg">What the Cost Cap IS</CardTitle>
                      </div>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          A threshold for exemption eligibility
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          The maximum you must spend before claiming exemption
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Inclusive of VAT on improvement costs
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Applied per property, not per landlord
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <XCircle className="h-6 w-6 text-danger-500" />
                        <CardTitle className="text-lg">What the Cost Cap is NOT</CardTitle>
                      </div>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-danger-500 mt-0.5 flex-shrink-0" />
                          A limit on how much you can or should spend
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-danger-500 mt-0.5 flex-shrink-0" />
                          An automatic exemption without evidence
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-danger-500 mt-0.5 flex-shrink-0" />
                          A way to avoid all improvements
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-danger-500 mt-0.5 flex-shrink-0" />
                          Inclusive of EPC assessment costs (only improvements count)
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <ImagePlaceholder
                  alt="Decision tree showing cost cap exemption eligibility"
                  description="A flowchart decision tree showing: Does EPC meet minimum? If no, can improvements achieve it? If yes, what is the cost? If under GBP 10,000, must proceed. If over GBP 10,000, can claim exemption after spending up to cap."
                  width={800}
                  height={450}
                  priority
                  instructions={[
                    'Create a clear decision tree flowchart',
                    'Use colour coding (green = compliant, amber = exemption path, red = non-compliant)',
                    'Include the key cost threshold clearly',
                    'Show both pathways (compliance vs exemption)',
                    'Make it easy to follow from start to end',
                  ]}
                />
              </section>

              {/* What Counts Towards the Cap */}
              <section id="calculating-costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What Counts Towards the Cap?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Not all expenses count towards the {formatCurrency(KEY_DATES.costCap)} cap. Understanding
                  what is included is crucial for accurate calculation and valid exemption claims.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-success-200 bg-success-50">
                    <CardBody>
                      <CardTitle className="text-lg text-success-800 mb-4">Counts Towards Cap</CardTitle>
                      <ul className="space-y-2 text-sm text-success-900">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          Cost of energy efficiency improvements (materials and labour)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          VAT on improvement works
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          Installation costs for qualifying measures
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          Scaffolding if required for improvement installation
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          Making good after improvement works
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card className="border-danger-200 bg-danger-50">
                    <CardBody>
                      <CardTitle className="text-lg text-danger-800 mb-4">Does NOT Count Towards Cap</CardTitle>
                      <ul className="space-y-2 text-sm text-danger-900">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-danger-600 mt-0.5 flex-shrink-0" />
                          EPC assessment fees
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-danger-600 mt-0.5 flex-shrink-0" />
                          Professional advice or survey costs
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-danger-600 mt-0.5 flex-shrink-0" />
                          General repairs or maintenance
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-danger-600 mt-0.5 flex-shrink-0" />
                          Decorative works
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-danger-600 mt-0.5 flex-shrink-0" />
                          Works not recommended on EPC or by qualified assessor
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="Qualifying Improvements">
                  Qualifying improvements are those recommended on your EPC certificate or by a qualified energy
                  assessor. They must be designed to improve energy efficiency. General repairs, even if they
                  incidentally improve efficiency, do not count towards the cap.
                </InfoBox>

                <h3 className="text-xl font-semibold text-primary-700 mt-8 mb-4">Cost Cap Calculation Example</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Consider a Victorian terrace currently rated E (score 48). The EPC recommends these improvements:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="text-left p-4 border border-neutral-200 font-semibold text-neutral-800">Improvement</th>
                        <th className="text-right p-4 border border-neutral-200 font-semibold text-neutral-800">Estimated Cost</th>
                        <th className="text-center p-4 border border-neutral-200 font-semibold text-neutral-800">EPC Points</th>
                        <th className="text-center p-4 border border-neutral-200 font-semibold text-neutral-800">Running Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-neutral-200">Loft insulation (top-up to 270mm)</td>
                        <td className="p-4 border border-neutral-200 text-right">{formatCurrency(450)}</td>
                        <td className="p-4 border border-neutral-200 text-center">+4</td>
                        <td className="p-4 border border-neutral-200 text-center">{formatCurrency(450)}</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">Cavity wall insulation</td>
                        <td className="p-4 border border-neutral-200 text-right">{formatCurrency(1200)}</td>
                        <td className="p-4 border border-neutral-200 text-center">+8</td>
                        <td className="p-4 border border-neutral-200 text-center">{formatCurrency(1650)}</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-neutral-200">New condensing boiler</td>
                        <td className="p-4 border border-neutral-200 text-right">{formatCurrency(3500)}</td>
                        <td className="p-4 border border-neutral-200 text-center">+6</td>
                        <td className="p-4 border border-neutral-200 text-center">{formatCurrency(5150)}</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">Double glazing (single to double)</td>
                        <td className="p-4 border border-neutral-200 text-right">{formatCurrency(6500)}</td>
                        <td className="p-4 border border-neutral-200 text-center">+5</td>
                        <td className="p-4 border border-neutral-200 text-center">{formatCurrency(11650)}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="bg-primary-50">
                        <td className="p-4 border border-primary-200 font-semibold text-primary-800">Total</td>
                        <td className="p-4 border border-primary-200 text-right font-semibold text-primary-800">{formatCurrency(11650)}</td>
                        <td className="p-4 border border-primary-200 text-center font-semibold text-primary-800">+23</td>
                        <td className="p-4 border border-primary-200 text-center">-</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <p className="text-neutral-700 leading-relaxed mb-4">
                  <strong>Result:</strong> Total improvements would cost {formatCurrency(11650)} and raise the score
                  from 48 to 71 (C rating). Since the first three improvements ({formatCurrency(5150)}) only raise
                  the score to 66 (D rating), and the fourth improvement ({formatCurrency(6500)}) exceeds the
                  remaining {formatCurrency(4850)} of the cap, this landlord could:
                </p>

                <ol className="list-decimal ml-6 space-y-2 text-neutral-700">
                  <li>Complete the first three improvements for {formatCurrency(5150)}</li>
                  <li>Attempt partial glazing improvements within the remaining {formatCurrency(4850)} budget</li>
                  <li>If still below C after spending {formatCurrency(10000)}, register cost cap exemption</li>
                </ol>

                <WarningBox title="Must Spend Up To Cap">
                  You cannot claim exemption without first making improvements up to the cap value. Estimating
                  that costs would exceed the cap is not sufficient; you must demonstrate actual spend or
                  detailed quotes showing the cheapest pathway exceeds the threshold.
                </WarningBox>
              </section>

              {/* Types of Exemptions */}
              <section id="exemption-types" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Types of Exemptions</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  There are several exemption categories under MEES regulations. Each has specific requirements
                  and evidence needed for registration. All exemptions must be registered on the PRS Exemptions
                  Register before letting the property.
                </p>

                {/* Cost Cap Exemption */}
                <section id="cost-cap-exemption" className="mt-8">
                  <Card className="border-l-4 border-l-primary-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary-100 rounded-lg">
                          <PoundSterling className="h-6 w-6 text-primary-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-primary-800 mb-2">Cost Cap Exemption</h3>
                          <p className="text-neutral-600 mb-4">
                            Available when spending up to {formatCurrency(KEY_DATES.costCap)} on qualifying
                            improvements would not achieve the minimum EPC rating. This is the most commonly
                            used exemption type.
                          </p>

                          <h4 className="font-semibold text-neutral-800 mb-2">Requirements:</h4>
                          <ul className="space-y-2 text-sm text-neutral-700 mb-4">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              Evidence that improvements have been made up to the cap value
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              Invoices and receipts for improvement works
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              Updated EPC showing rating after improvements (if improvements made)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              OR three quotes demonstrating cheapest pathway exceeds cap
                            </li>
                          </ul>

                          <Badge variant="primary">Duration: 5 years</Badge>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>

                {/* Consent Exemption */}
                <section id="consent-exemption" className="mt-6">
                  <Card className="border-l-4 border-l-warning-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-warning-100 rounded-lg">
                          <Users className="h-6 w-6 text-warning-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-warning-800 mb-2">Third Party Consent Exemption</h3>
                          <p className="text-neutral-600 mb-4">
                            Available when a required third party refuses consent for necessary improvements.
                            This typically applies to leasehold properties or properties in conservation areas.
                          </p>

                          <h4 className="font-semibold text-neutral-800 mb-2">Third Parties Include:</h4>
                          <ul className="space-y-2 text-sm text-neutral-700 mb-4">
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                              Freeholder or superior landlord (for leasehold properties)
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                              Planning authority (conservation area, listed building consent)
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                              Mortgage lender (if consent required in mortgage terms)
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                              Tenant (if their consent is legally required for access)
                            </li>
                          </ul>

                          <h4 className="font-semibold text-neutral-800 mb-2">Evidence Required:</h4>
                          <ul className="space-y-2 text-sm text-neutral-700 mb-4">
                            <li className="flex items-start gap-2">
                              <FileText className="h-4 w-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                              Written request for consent sent to third party
                            </li>
                            <li className="flex items-start gap-2">
                              <FileText className="h-4 w-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                              Written refusal or evidence of no response after reasonable time
                            </li>
                          </ul>

                          <Badge variant="warning">Duration: 5 years</Badge>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>

                {/* Devaluation Exemption */}
                <section id="devaluation-exemption" className="mt-6">
                  <Card className="border-l-4 border-l-accent-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-accent-100 rounded-lg">
                          <TrendingDown className="h-6 w-6 text-accent-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-accent-800 mb-2">Devaluation Exemption</h3>
                          <p className="text-neutral-600 mb-4">
                            Available when a qualifying surveyor provides written opinion that the required
                            improvements would reduce the market value of the property by more than 5%.
                          </p>

                          <h4 className="font-semibold text-neutral-800 mb-2">Requirements:</h4>
                          <ul className="space-y-2 text-sm text-neutral-700 mb-4">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              Written valuation from RICS-qualified surveyor
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              Surveyor must assess value before and after proposed improvements
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              Devaluation must exceed 5% of current market value
                            </li>
                          </ul>

                          <Badge variant="secondary">Duration: 5 years</Badge>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>

                {/* Wall Insulation Exemption */}
                <section id="wall-exemption" className="mt-6">
                  <Card className="border-l-4 border-l-neutral-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-neutral-100 rounded-lg">
                          <Building2 className="h-6 w-6 text-neutral-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-neutral-800 mb-2">Wall Insulation Exemption</h3>
                          <p className="text-neutral-600 mb-4">
                            Available when wall insulation is the only recommended improvement but installing
                            it would have a negative impact on the property. This exemption applies specifically
                            to solid wall, cavity wall, or external wall insulation.
                          </p>

                          <h4 className="font-semibold text-neutral-800 mb-2">Qualifying Conditions:</h4>
                          <ul className="space-y-2 text-sm text-neutral-700 mb-4">
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                              Wall insulation would cause damage to the structure or fabric
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                              Property has existing moisture or damp issues that would worsen
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                              Wall type is unsuitable for available insulation methods
                            </li>
                          </ul>

                          <h4 className="font-semibold text-neutral-800 mb-2">Evidence Required:</h4>
                          <ul className="space-y-2 text-sm text-neutral-700 mb-4">
                            <li className="flex items-start gap-2">
                              <FileText className="h-4 w-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                              Written report from a suitably qualified expert
                            </li>
                            <li className="flex items-start gap-2">
                              <FileText className="h-4 w-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                              Expert must be a member of a relevant professional body
                            </li>
                          </ul>

                          <Badge variant="neutral">Duration: 5 years</Badge>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>

                {/* New Landlord Exemption */}
                <section id="new-landlord-exemption" className="mt-6">
                  <Card className="border-l-4 border-l-success-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-success-100 rounded-lg">
                          <Clock className="h-6 w-6 text-success-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-success-800 mb-2">New Landlord Exemption</h3>
                          <p className="text-neutral-600 mb-4">
                            A temporary exemption for landlords who have recently become landlords of a
                            non-compliant property, allowing time to make improvements.
                          </p>

                          <h4 className="font-semibold text-neutral-800 mb-2">Situations Covered:</h4>
                          <ul className="space-y-2 text-sm text-neutral-700 mb-4">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              Property acquired with existing tenant in place
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              Property inherited or received as gift with existing tenancy
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              Tenancy becomes qualifying through change in circumstances
                            </li>
                          </ul>

                          <Badge variant="success">Duration: 6 months only</Badge>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>
              </section>

              {/* Registration Process */}
              <section id="registration-process" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">How to Register an Exemption</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  All exemptions must be registered on the PRS Exemptions Register before the property can be
                  legally let. Registration is an online process but requires supporting evidence.
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Gather Evidence</h4>
                      <p className="text-neutral-600 text-sm">
                        Collect all documentation supporting your exemption claim: invoices, quotes, expert reports,
                        correspondence with third parties, and before/after EPCs as applicable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Access the Register</h4>
                      <p className="text-neutral-600 text-sm mb-2">
                        Visit the PRS Exemptions Register website and create an account or log in.
                      </p>
                      <a
                        href="https://prsregister.beis.gov.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        Go to PRS Exemptions Register
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Complete the Form</h4>
                      <p className="text-neutral-600 text-sm">
                        Provide property details, select exemption type, and upload supporting evidence.
                        You will need: property address, current EPC reference number, exemption category,
                        and evidence documents.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Submit and Confirm</h4>
                      <p className="text-neutral-600 text-sm">
                        Submit your application. Once registered, the exemption is valid from the registration
                        date. You will receive confirmation which you should keep for your records.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-warning-50 rounded-lg border border-warning-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-warning-600 text-white font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-warning-800 mb-1">Set Renewal Reminder</h4>
                      <p className="text-warning-700 text-sm">
                        Exemptions last 5 years (6 months for new landlord exemption). Set a reminder to
                        reassess and re-register before expiry. Requirements may have changed by then.
                      </p>
                    </div>
                  </div>
                </div>

                <TipBox title="Keep Copies of Everything">
                  Local authorities can request evidence of your exemption at any time. Keep organised records
                  of all documentation submitted, including copies of invoices, quotes, reports, and the
                  exemption confirmation itself. Store these for at least 5 years after the exemption expires.
                </TipBox>
              </section>

              {/* Risks of Relying on Exemptions */}
              <section id="risks" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Risks of Relying on Exemptions</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  While exemptions provide a legitimate pathway for properties that cannot achieve compliance,
                  relying on them carries significant risks that landlords should consider carefully.
                </p>

                <WarningBox title="Exemptions Are Not a Permanent Solution" critical>
                  Exemptions last only 5 years. When they expire, you must re-apply and meet whatever requirements
                  are in place at that time. Regulations may have tightened, the cost cap may have increased,
                  and your property circumstances may have changed.
                </WarningBox>

                <div className="space-y-4 my-8">
                  <Card>
                    <CardBody className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-warning-500 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-lg mb-2">Public Visibility</CardTitle>
                        <CardDescription>
                          The PRS Exemptions Register is public. Prospective tenants, letting agents, and others
                          can see that your property has an exemption registered. This may affect tenant interest
                          and perceived property quality.
                        </CardDescription>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-warning-500 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-lg mb-2">Sale Complications</CardTitle>
                        <CardDescription>
                          Non-compliant properties may be harder to sell. Buyers who want to let the property
                          inherit the compliance problem. Lenders may be reluctant to mortgage non-compliant
                          buy-to-let properties.
                        </CardDescription>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-warning-500 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-lg mb-2">Future Regulatory Risk</CardTitle>
                        <CardDescription>
                          Regulations may tighten. The cost cap may increase. Exemption categories may narrow.
                          What qualifies for exemption today may not qualify when you need to renew. Energy
                          efficiency requirements have consistently increased over time.
                        </CardDescription>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-warning-500 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-lg mb-2">Tenant Expectations</CardTitle>
                        <CardDescription>
                          Tenants increasingly expect energy-efficient homes with lower running costs.
                          Poor energy efficiency may lead to higher turnover, void periods, or difficulty
                          attracting quality tenants.
                        </CardDescription>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <KeyFactBox title="Consider the Long Term" icon={Scale}>
                  Before relying on exemption, consider whether improvements might be worthwhile anyway.
                  Energy efficiency improvements can reduce tenant complaints, potentially allow higher rents,
                  reduce void periods, and increase property value. The cost cap is not the ceiling of what
                  is sensible to spend.
                </KeyFactBox>
              </section>

              {/* CTA */}
              <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Assess Your Options</h2>
                <p className="text-primary-700 mb-6">
                  Use our calculator to estimate improvement costs and see whether compliance or exemption
                  is the right path for your property.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" leftIcon={<Calculator className="h-5 w-5" />}>
                    <Link href="/tools/cost-calculator">Calculate Upgrade Costs</Link>
                  </Button>
                  <Button variant="outline" size="lg" leftIcon={<Home className="h-5 w-5" />}>
                    <Link href="/property-types">Property Type Guides</Link>
                  </Button>
                </div>
              </section>

              {/* Related Content */}
              <section className="mt-12">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Related Guides</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <RelatedContentCard
                    title="EPC C 2030 Deadline"
                    excerpt="Full details on the October 2030 deadline and what it means for your properties."
                    href="/regulations/epc-c-2030-deadline"
                    category="Regulations"
                    readingTime={8}
                  />
                  <RelatedContentCard
                    title="MEES Regulations Guide"
                    excerpt="Comprehensive guide to Minimum Energy Efficiency Standards and how they apply."
                    href="/regulations/mees-regulations-guide"
                    category="Regulations"
                    readingTime={12}
                  />
                </div>
              </section>

              {/* Sources */}
              <section className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Sources</h3>
                <div className="space-y-2">
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Domestic Private Rented Property: Minimum Energy Efficiency Standard - Landlord Guidance"
                    url="https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="PRS Exemptions Register"
                    url="https://prsregister.beis.gov.uk/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Warm Homes Plan"
                    url="https://www.gov.uk/government/publications/warm-homes-plan"
                    accessedDate="January 2026"
                  />
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <Sidebar
              tableOfContents={tocItems}
              relatedArticles={relatedArticles}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

// TrendingDown icon component (not in lucide-react by default)
function TrendingDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
      <polyline points="16 17 22 17 22 11"></polyline>
    </svg>
  );
}
