import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  PoundSterling,
  AlertTriangle,
  FileCheck,
  Scale,
  Clock,
  ArrowRight,
  CheckCircle,
  XCircle,
  Building2,
  Zap
} from 'lucide-react';

import { Container, Section, PageHeader } from '@/components/layout';
import { Card, CardBody, CardTitle, CardDescription } from '@/components/ui';
import { Badge } from '@/components/ui';
import { Button } from '@/components/ui';
import { EPCRatingBadge, EPCRatingScale } from '@/components/ui';
import {
  KeyFactBox,
  WarningBox,
  TipBox,
  InfoBox,
  TableOfContents,
  RelatedContentCard,
  SourceCitation,
  ImagePlaceholder,
  Breadcrumbs
} from '@/components/content';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency, formatDate, daysUntilDeadline } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'EPC Regulations for Landlords - Complete Guide | GreenLord',
  description: 'Comprehensive guide to EPC requirements for UK landlords. Understand MEES regulations, the 2030 deadline, cost caps, exemptions, and penalties.',
};

const tocItems = [
  { id: 'overview', text: 'Overview', level: 2 as const },
  { id: 'what-is-epc', text: 'What is an EPC?', level: 2 as const },
  { id: 'key-dates', text: 'Key Dates and Deadlines', level: 2 as const },
  { id: 'mees-regulations', text: 'MEES Regulations Explained', level: 2 as const },
  { id: 'current-vs-2030', text: 'Current vs 2030 Requirements', level: 3 as const },
  { id: 'properties-affected', text: 'Which Properties Are Affected', level: 2 as const },
  { id: 'cost-cap', text: 'The Cost Cap', level: 2 as const },
  { id: 'exemptions', text: 'Exemptions Overview', level: 2 as const },
  { id: 'penalties', text: 'Penalties for Non-Compliance', level: 2 as const },
  { id: 'rdsap-10', text: 'RdSAP 10 Changes', level: 2 as const },
  { id: 'action-steps', text: 'What You Should Do Now', level: 2 as const },
  { id: 'further-reading', text: 'Further Reading', level: 2 as const },
];

const breadcrumbs = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Regulations', url: `${SITE_CONFIG.url}/regulations` },
];

export default function RegulationsPage() {
  const daysRemaining = daysUntilDeadline();

  return (
    <>
      <PageHeader
        title="EPC Regulations for UK Landlords"
        subtitle="Everything you need to know about EPC requirements, the 2030 deadline, MEES regulations, exemptions, and penalties. Updated for the Warm Homes Plan January 2026."
        breadcrumbs={[{ name: 'Regulations', url: '/regulations' }]}
        background="muted"
      >
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <Badge variant="primary" size="lg">
            <Clock className="h-4 w-4" />
            20 min read
          </Badge>
          <Badge variant="neutral" size="lg">
            Updated {formatDate('2026-01-25')}
          </Badge>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="prose prose-neutral max-w-none">
              <Breadcrumbs items={breadcrumbs} />

              {/* Overview */}
              <section id="overview">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Overview</h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  The private rented sector in England and Wales faces significant energy efficiency requirements.
                  Following years of consultation and delay, the government&apos;s Warm Homes Plan, published on
                  21 January 2026, confirmed that all rental properties must achieve an Energy Performance Certificate
                  (EPC) rating of C or above by 1 October 2030.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  This applies to both new and existing tenancies, meaning landlords cannot simply wait for a
                  tenancy to end before taking action. An estimated 2.6 to 2.9 million properties currently fall
                  below this threshold and will require improvement.
                </p>

                <KeyFactBox title="The Bottom Line" icon={FileCheck}>
                  By 1 October 2030, your rental property must have an EPC rating of C (score 69 or above).
                  If you cannot achieve this after spending up to {formatCurrency(KEY_DATES.costCap)}, you can
                  register for a cost cap exemption. Non-compliance carries penalties of up to {formatCurrency(KEY_DATES.maxPenalty)}.
                </KeyFactBox>
              </section>

              {/* What is an EPC */}
              <section id="what-is-epc" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What is an EPC?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  An Energy Performance Certificate (EPC) rates a property&apos;s energy efficiency on a scale from
                  A (most efficient) to G (least efficient). The certificate includes a numerical score from 1 to 100,
                  with higher scores indicating better efficiency. Each letter band corresponds to a score range:
                </p>

                <div className="my-8">
                  <EPCRatingScale activeRating="C" />
                </div>

                <p className="text-neutral-700 leading-relaxed mb-6">
                  EPCs are produced by qualified Domestic Energy Assessors and are valid for 10 years. The assessment
                  considers factors including wall construction, insulation levels, heating system efficiency, glazing,
                  and renewable energy installations.
                </p>

                <InfoBox title="EPC vs SAP">
                  The EPC rating is derived from a Standard Assessment Procedure (SAP) calculation. While EPCs show
                  the letter grade, the underlying SAP score (out of 100) determines exactly where your property sits.
                  A score of 69 is the minimum for a C rating.
                </InfoBox>
              </section>

              {/* Key Dates */}
              <section id="key-dates" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Key Dates and Deadlines</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The regulatory timeline has evolved significantly since MEES regulations were first introduced.
                  Here are the dates that matter for landlords:
                </p>

                <ImagePlaceholder
                  alt="Timeline infographic showing key EPC regulation dates from 2018 to 2030"
                  description="A horizontal timeline showing: April 2018 (MEES begins for new tenancies), April 2020 (MEES extends to existing tenancies), June 2025 (RdSAP 10 launches), January 2026 (Warm Homes Plan published), October 2030 (EPC C deadline for all properties)."
                  width={800}
                  height={300}
                  instructions={[
                    'Clean, modern timeline design with clear date markers',
                    'Use GreenLord brand colours (deep blue primary, teal accent)',
                    'Highlight the October 2030 deadline prominently',
                    'Include brief description under each date',
                    'Make it suitable for both light and dark backgrounds',
                  ]}
                />

                <div className="grid sm:grid-cols-2 gap-4 my-8">
                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-neutral-100 rounded-lg">
                          <Calendar className="h-5 w-5 text-neutral-600" />
                        </div>
                        <span className="text-sm text-neutral-500">Historical</span>
                      </div>
                      <CardTitle className="text-lg">1 April 2018</CardTitle>
                      <CardDescription>
                        MEES regulations came into force for new tenancies. Properties rated F or G could no longer be let.
                      </CardDescription>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-neutral-100 rounded-lg">
                          <Calendar className="h-5 w-5 text-neutral-600" />
                        </div>
                        <span className="text-sm text-neutral-500">Historical</span>
                      </div>
                      <CardTitle className="text-lg">1 April 2020</CardTitle>
                      <CardDescription>
                        MEES extended to all existing tenancies. All private rentals must be E-rated or above.
                      </CardDescription>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-accent-100 rounded-lg">
                          <Zap className="h-5 w-5 text-accent-700" />
                        </div>
                        <span className="text-sm text-accent-700">Technical Change</span>
                      </div>
                      <CardTitle className="text-lg">June 2025</CardTitle>
                      <CardDescription>
                        RdSAP 10 launches, changing how EPCs are calculated. Existing EPCs remain valid.
                      </CardDescription>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <AlertTriangle className="h-5 w-5 text-primary-700" />
                        </div>
                        <span className="text-sm text-primary-700 font-medium">Key Deadline</span>
                      </div>
                      <CardTitle className="text-lg">1 October 2030</CardTitle>
                      <CardDescription>
                        All rental properties must achieve EPC C or above. Penalties apply for non-compliance.
                      </CardDescription>
                    </CardBody>
                  </Card>
                </div>

                <WarningBox title="Single Deadline for All Tenancies">
                  Unlike the original MEES implementation, the 2030 deadline applies to both new and existing
                  tenancies simultaneously. You cannot delay compliance by maintaining an existing tenancy.
                </WarningBox>
              </section>

              {/* MEES Regulations */}
              <section id="mees-regulations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">MEES Regulations Explained</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  MEES stands for Minimum Energy Efficiency Standards. These regulations, set out in The Energy Efficiency
                  (Private Rented Property) (England and Wales) Regulations 2015, establish the minimum EPC rating
                  required for privately rented properties.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The regulations apply to properties let under an assured tenancy, a regulated tenancy, or a domestic
                  agricultural tenancy. This covers the vast majority of private rented sector tenancies including
                  Assured Shorthold Tenancies (ASTs), which are the most common form of rental agreement.
                </p>

                <section id="current-vs-2030" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">Current Requirements vs 2030 Requirements</h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-neutral-100">
                          <th className="text-left p-4 border border-neutral-200 font-semibold text-neutral-800">Requirement</th>
                          <th className="text-left p-4 border border-neutral-200 font-semibold text-neutral-800">Current (2020-2030)</th>
                          <th className="text-left p-4 border border-neutral-200 font-semibold text-neutral-800">From October 2030</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-4 border border-neutral-200">Minimum EPC rating</td>
                          <td className="p-4 border border-neutral-200">
                            <EPCRatingBadge rating="E" size="sm" />
                          </td>
                          <td className="p-4 border border-neutral-200">
                            <EPCRatingBadge rating="C" size="sm" />
                          </td>
                        </tr>
                        <tr className="bg-neutral-50">
                          <td className="p-4 border border-neutral-200">Minimum score</td>
                          <td className="p-4 border border-neutral-200">39</td>
                          <td className="p-4 border border-neutral-200">69</td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-neutral-200">Cost cap for exemption</td>
                          <td className="p-4 border border-neutral-200">{formatCurrency(3500)}</td>
                          <td className="p-4 border border-neutral-200">{formatCurrency(10000)}</td>
                        </tr>
                        <tr className="bg-neutral-50">
                          <td className="p-4 border border-neutral-200">Maximum penalty</td>
                          <td className="p-4 border border-neutral-200">{formatCurrency(5000)}</td>
                          <td className="p-4 border border-neutral-200">{formatCurrency(30000)}</td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-neutral-200">Exemption duration</td>
                          <td className="p-4 border border-neutral-200">5 years</td>
                          <td className="p-4 border border-neutral-200">5 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <SourceCitation
                  sourceName="legislation.gov.uk"
                  documentTitle="The Energy Efficiency (Private Rented Property) (England and Wales) Regulations 2015"
                  url="https://www.legislation.gov.uk/uksi/2015/962/contents"
                  accessedDate="January 2026"
                />
              </section>

              {/* Properties Affected */}
              <section id="properties-affected" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Which Properties Are Affected?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The regulations apply to most privately rented residential properties in England and Wales.
                  Understanding whether your property falls within scope is essential for compliance planning.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="h-6 w-6 text-success-500" />
                        <CardTitle className="text-lg text-success-700">In Scope</CardTitle>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-1 flex-shrink-0" />
                          Properties let under Assured Shorthold Tenancies (ASTs)
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-1 flex-shrink-0" />
                          Properties let under regulated tenancies
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-1 flex-shrink-0" />
                          Domestic agricultural tenancies
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-1 flex-shrink-0" />
                          Houses in Multiple Occupation (HMOs)
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-1 flex-shrink-0" />
                          Properties that have an EPC (required by law to have one)
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <XCircle className="h-6 w-6 text-danger-500" />
                        <CardTitle className="text-lg text-danger-700">Out of Scope</CardTitle>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-neutral-700">
                          <XCircle className="h-4 w-4 text-danger-500 mt-1 flex-shrink-0" />
                          Listed buildings where improvements would alter character
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <XCircle className="h-4 w-4 text-danger-500 mt-1 flex-shrink-0" />
                          Properties not legally required to have an EPC
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <XCircle className="h-4 w-4 text-danger-500 mt-1 flex-shrink-0" />
                          Social housing (separate regulations apply)
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <XCircle className="h-4 w-4 text-danger-500 mt-1 flex-shrink-0" />
                          Holiday lets under 4 months per year
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <XCircle className="h-4 w-4 text-danger-500 mt-1 flex-shrink-0" />
                          Temporary buildings planned for under 2 years use
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="HMO Considerations">
                  Houses in Multiple Occupation (HMOs) fall within scope but may have unique challenges. The EPC
                  covers the whole property, but individual rooms may have different heating arrangements. Read our
                  <Link href="/property-types/hmo" className="text-primary-600 hover:underline ml-1">HMO-specific guide</Link>
                  for detailed advice.
                </InfoBox>
              </section>

              {/* Cost Cap */}
              <section id="cost-cap" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">The {formatCurrency(KEY_DATES.costCap)} Cost Cap</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Warm Homes Plan sets a cost cap of {formatCurrency(KEY_DATES.costCap)} including VAT. This
                  represents the maximum amount a landlord is required to spend on energy efficiency improvements
                  before being eligible for a cost cap exemption.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  It is important to understand that this is not a spending limit, but rather the threshold for
                  exemption eligibility. Landlords must first make improvements up to this value before they can
                  claim an exemption if the property still does not reach EPC C.
                </p>

                <KeyFactBox title="How the Cost Cap Works" icon={PoundSterling}>
                  <ol className="list-decimal ml-4 space-y-2">
                    <li>Identify the most cost-effective improvements for your property</li>
                    <li>Implement improvements up to the {formatCurrency(KEY_DATES.costCap)} cap</li>
                    <li>If EPC C is not achieved, you can register for a cost cap exemption</li>
                    <li>The exemption lasts 5 years, after which you must reassess</li>
                  </ol>
                </KeyFactBox>

                <TipBox title="Cost Calculation Tips">
                  The cost cap includes VAT and the cost of improvements only, not the cost of the EPC assessment itself.
                  Keep all invoices and quotes as evidence for any potential exemption claim. If multiple quotes are available,
                  you must use the lowest reasonable quote for the cost calculation.
                </TipBox>
              </section>

              {/* Exemptions */}
              <section id="exemptions" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Exemptions Overview</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Landlords who cannot achieve EPC C may be eligible for an exemption. All exemptions must be registered
                  on the PRS Exemptions Register, a public database maintained by local authorities. There are several
                  exemption categories:
                </p>

                <div className="space-y-4 my-8">
                  <Card>
                    <CardBody>
                      <CardTitle className="text-lg mb-2">Cost Cap Exemption</CardTitle>
                      <CardDescription>
                        Available when spending up to {formatCurrency(KEY_DATES.costCap)} on qualifying improvements would
                        not achieve EPC C. You must have spent up to the cap or demonstrate that the cheapest pathway exceeds it.
                      </CardDescription>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <CardTitle className="text-lg mb-2">Third Party Consent Exemption</CardTitle>
                      <CardDescription>
                        Applies when a required third party (such as a freeholder, superior landlord, or planning authority)
                        refuses consent for necessary improvements. Written evidence of refusal is required.
                      </CardDescription>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <CardTitle className="text-lg mb-2">Devaluation Exemption</CardTitle>
                      <CardDescription>
                        Available if a qualified surveyor provides written opinion that the improvements would devalue
                        the property by more than 5%. An independent valuation is required.
                      </CardDescription>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <CardTitle className="text-lg mb-2">Wall Insulation Exemption</CardTitle>
                      <CardDescription>
                        Specific exemption for properties where wall insulation would have a negative impact on the
                        structure or fabric, based on expert assessment.
                      </CardDescription>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <CardTitle className="text-lg mb-2">New Landlord Exemption</CardTitle>
                      <CardDescription>
                        Temporary exemption of 6 months for new landlords who acquire a non-compliant property,
                        allowing time to make improvements.
                      </CardDescription>
                    </CardBody>
                  </Card>
                </div>

                <WarningBox title="Exemptions Are Not a Free Pass">
                  Relying on exemptions carries risks. Exemptions last only 5 years, after which you must reapply.
                  Regulations may tighten. Exemption status is publicly visible and may affect property value and
                  tenant interest. Most importantly, selling a property may be complicated if it cannot achieve compliance.
                </WarningBox>

                <p className="text-neutral-700 mt-6">
                  <Link href="/regulations/cost-cap-exemptions" className="text-primary-600 hover:underline font-medium">
                    Read our detailed guide to exemptions <ArrowRight className="inline h-4 w-4" />
                  </Link>
                </p>
              </section>

              {/* Penalties */}
              <section id="penalties" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Penalties for Non-Compliance</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Local authorities are responsible for enforcing MEES regulations. Penalties are significant and
                  designed to be proportionate to the breach. From October 2030, the penalty structure is as follows:
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-danger-50">
                        <th className="text-left p-4 border border-danger-200 font-semibold text-danger-800">Breach Type</th>
                        <th className="text-left p-4 border border-danger-200 font-semibold text-danger-800">Penalty Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-neutral-200">Letting a non-compliant property for less than 3 months</td>
                        <td className="p-4 border border-neutral-200 font-semibold">{formatCurrency(5000)}</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">Letting a non-compliant property for 3 months or more</td>
                        <td className="p-4 border border-neutral-200 font-semibold">{formatCurrency(15000)}</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-neutral-200">Providing false or misleading information on exemptions register</td>
                        <td className="p-4 border border-neutral-200 font-semibold">{formatCurrency(5000)}</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">Failure to comply with compliance notice</td>
                        <td className="p-4 border border-neutral-200 font-semibold">{formatCurrency(5000)}</td>
                      </tr>
                      <tr className="bg-danger-50">
                        <td className="p-4 border border-danger-200 font-semibold text-danger-800">Maximum total penalty per property</td>
                        <td className="p-4 border border-danger-200 font-bold text-danger-800">{formatCurrency(30000)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <WarningBox title="Public Listing" critical>
                  In addition to financial penalties, non-compliant landlords are publicly listed on the PRS Exemptions
                  Register for at least 12 months. This can damage reputation and may affect future letting prospects.
                </WarningBox>
              </section>

              {/* RdSAP 10 */}
              <section id="rdsap-10" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">RdSAP 10 Changes</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Reduced Data Standard Assessment Procedure (RdSAP) is the methodology used to calculate EPC
                  ratings for existing dwellings. RdSAP 10 launched in June 2025 and introduces significant changes
                  to how properties are assessed.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Key changes include updated carbon emission factors reflecting the UK&apos;s decarbonised electricity
                  grid, revised assumptions for heating system efficiency, and new calculations for improvement
                  recommendations. Some properties may see their ratings change under the new methodology.
                </p>

                <ImagePlaceholder
                  alt="Comparison of RdSAP 9 versus RdSAP 10 ratings for a sample property"
                  description="Split-screen comparison showing the same property rated under RdSAP 9 (old methodology) and RdSAP 10 (new methodology). Shows how the overall rating and specific improvement recommendations may differ."
                  width={800}
                  height={400}
                  instructions={[
                    'Show a clear before/after comparison layout',
                    'Include example EPC ratings that might change (e.g., D to C or C to D)',
                    'Highlight key differences in how improvements are valued',
                    'Use realistic property example like a 1930s semi',
                    'Make the comparison visually intuitive',
                  ]}
                />

                <TipBox title="Should You Wait for RdSAP 10?">
                  If your property is close to the C threshold, waiting for RdSAP 10 might result in a better or
                  worse rating depending on your property characteristics. Generally, properties with electric heating
                  may score better under RdSAP 10 due to grid decarbonisation, while gas-heated properties may see
                  little change. See our <Link href="/regulations/rdsap-10-changes" className="text-accent-700 hover:underline">detailed RdSAP 10 guide</Link> for specific advice.
                </TipBox>
              </section>

              {/* Action Steps */}
              <section id="action-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What You Should Do Now</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  With {daysRemaining.toLocaleString()} days until the October 2030 deadline, now is the time to assess
                  your portfolio and plan improvements. Here is a practical action plan:
                </p>

                <div className="space-y-4 my-8">
                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Check Your Current EPC Rating</h4>
                      <p className="text-neutral-600 text-sm">
                        Find your current EPC on the government&apos;s EPC register. If your certificate is more than 5 years
                        old or you have made improvements, consider getting a new assessment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Estimate Your Upgrade Costs</h4>
                      <p className="text-neutral-600 text-sm">
                        Use our <Link href="/tools/cost-calculator" className="text-primary-600 hover:underline">Upgrade Cost Calculator</Link> to
                        get a realistic estimate of what improvements will cost for your property type.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Explore Funding Options</h4>
                      <p className="text-neutral-600 text-sm">
                        Check eligibility for ECO4, Warm Homes: Local Grant, and other funding sources. Some improvements
                        may be fully funded if your tenants receive certain benefits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Plan and Budget Improvements</h4>
                      <p className="text-neutral-600 text-sm">
                        Create a timeline for improvements across your portfolio. Prioritise properties closer to the
                        C threshold or those with tenancy renewals due.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Consider Exemption Eligibility</h4>
                      <p className="text-neutral-600 text-sm">
                        If improvements are likely to exceed the cost cap without achieving EPC C, understand the
                        exemption pathway and document your spending carefully.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" leftIcon={<FileCheck className="h-5 w-5" />}>
                    <Link href="/tools/cost-calculator">Calculate Your Costs</Link>
                  </Button>
                  <Button variant="outline" size="lg" leftIcon={<Building2 className="h-5 w-5" />}>
                    <Link href="/property-types">Find Your Property Guide</Link>
                  </Button>
                </div>
              </section>

              {/* Further Reading */}
              <section id="further-reading" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Further Reading</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Explore our detailed guides on specific aspects of EPC compliance:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <RelatedContentCard
                    title="EPC C 2030 Deadline Explained"
                    excerpt="Deep dive into what the October 2030 deadline means for your properties and tenancies."
                    href="/regulations/epc-c-2030-deadline"
                    category="Regulations"
                    readingTime={8}
                  />
                  <RelatedContentCard
                    title="MEES Regulations Complete Guide"
                    excerpt="Comprehensive guide to Minimum Energy Efficiency Standards and their application."
                    href="/regulations/mees-regulations-guide"
                    category="Regulations"
                    readingTime={12}
                  />
                  <RelatedContentCard
                    title="Cost Cap and Exemptions"
                    excerpt="Understand the GBP 10,000 cost cap and when you might qualify for an exemption."
                    href="/regulations/cost-cap-exemptions"
                    category="Regulations"
                    readingTime={10}
                  />
                  <RelatedContentCard
                    title="RdSAP 10 Changes Explained"
                    excerpt="How the new EPC methodology affects ratings and whether you should wait to get assessed."
                    href="/regulations/rdsap-10-changes"
                    category="Technical"
                    readingTime={6}
                  />
                  <RelatedContentCard
                    title="Warm Homes Plan Summary"
                    excerpt="Key takeaways from the January 2026 government announcement for landlords."
                    href="/regulations/warm-homes-plan"
                    category="Policy"
                    readingTime={8}
                  />
                </div>
              </section>

              {/* Sources */}
              <section className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Sources</h3>
                <div className="space-y-2">
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Warm Homes Plan"
                    url="https://www.gov.uk/government/publications/warm-homes-plan"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="legislation.gov.uk"
                    documentTitle="The Energy Efficiency (Private Rented Property) (England and Wales) Regulations 2015"
                    url="https://www.legislation.gov.uk/uksi/2015/962/contents"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Domestic Private Rented Property: Minimum Energy Efficiency Standard - Landlord Guidance"
                    url="https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="DLUHC"
                    documentTitle="English Housing Survey 2023"
                    url="https://www.gov.uk/government/collections/english-housing-survey"
                    accessedDate="January 2026"
                  />
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <TableOfContents items={tocItems} />

                <Card variant="highlighted">
                  <CardBody>
                    <CardTitle className="text-lg mb-2">Need Help?</CardTitle>
                    <CardDescription className="mb-4">
                      Use our calculator to estimate upgrade costs for your specific property type.
                    </CardDescription>
                    <Button size="sm" fullWidth>
                      <Link href="/tools/cost-calculator">Calculate Costs</Link>
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
