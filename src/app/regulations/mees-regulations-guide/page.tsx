import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Scale,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  FileText,
  Building2,
  Clock,
  ArrowRight,
  Gavel,
  BookOpen,
  Home,
  PoundSterling,
  TrendingUp
} from 'lucide-react';

import { Container, Section, Sidebar } from '@/components/layout';
import { Card, CardBody, CardTitle, CardDescription } from '@/components/ui';
import { Badge } from '@/components/ui';
import { Button } from '@/components/ui';
import { EPCRatingBadge } from '@/components/ui';
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
  title: 'MEES Regulations Guide for Landlords | GreenLord',
  description: 'Complete guide to Minimum Energy Efficiency Standards for UK landlords. Understand the law, which tenancies apply, enforcement, and how to comply.',
};

const breadcrumbs = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Regulations', url: `${SITE_CONFIG.url}/regulations` },
  { name: 'MEES Regulations Guide', url: `${SITE_CONFIG.url}/regulations/mees-regulations-guide` },
];

const tocItems = [
  { id: 'what-is-mees', title: 'What is MEES?', level: 2 },
  { id: 'history', title: 'History and Evolution', level: 2 },
  { id: 'current-requirements', title: 'Current Requirements', level: 2 },
  { id: '2030-requirements', title: '2030 Requirements', level: 2 },
  { id: 'tenancy-types', title: 'Which Tenancies Apply', level: 2 },
  { id: 'enforcement', title: 'Enforcement and Penalties', level: 2 },
  { id: 'compliance-steps', title: 'How to Comply', level: 2 },
];

const relatedArticles = [
  {
    title: 'EPC C 2030 Deadline',
    href: '/regulations/epc-c-2030-deadline',
    description: 'Everything about the October 2030 deadline',
  },
  {
    title: 'Cost Cap and Exemptions',
    href: '/regulations/cost-cap-exemptions',
    description: 'When you can claim an exemption',
  },
  {
    title: 'Warm Homes Plan',
    href: '/regulations/warm-homes-plan',
    description: 'January 2026 policy announcement',
  },
];

export default function MEESRegulationsGuidePage() {
  return (
    <>
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <Breadcrumbs items={breadcrumbs} />

              <ArticleHeader
                title="MEES Regulations: The Complete Guide for UK Landlords"
                publishedDate="2026-01-22"
                lastUpdated="2026-01-25"
                author={SITE_CONFIG.author}
                readingTime={12}
                subtitle="Everything you need to know about Minimum Energy Efficiency Standards, from the law itself to practical compliance steps."
              />

              {/* Introduction */}
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  MEES stands for Minimum Energy Efficiency Standards. These regulations set the minimum energy
                  efficiency level that privately rented properties must achieve. First introduced in 2015 and
                  coming into force in 2018, MEES has progressively raised the bar for rental property standards.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Understanding MEES is essential for every landlord in England and Wales. Non-compliance carries
                  significant financial penalties and can affect your ability to let properties. This guide explains
                  exactly what the regulations require and how to ensure you are compliant.
                </p>
              </div>

              {/* What is MEES */}
              <section id="what-is-mees" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What is MEES?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  MEES regulations are set out in The Energy Efficiency (Private Rented Property) (England and Wales)
                  Regulations 2015. They establish the minimum Energy Performance Certificate (EPC) rating that
                  privately rented properties must achieve before they can be let.
                </p>

                <KeyFactBox title="The Legal Framework" icon={Scale}>
                  <p>
                    MEES regulations are secondary legislation made under the Energy Act 2011. They apply to all
                    domestic private rented properties in England and Wales that are required by law to have an EPC.
                  </p>
                </KeyFactBox>

                <p className="text-neutral-700 leading-relaxed mt-6 mb-6">
                  The regulations work by making it unlawful to grant a new tenancy (or renew an existing tenancy)
                  of a property that does not meet the minimum energy efficiency standard, unless a valid exemption
                  has been registered.
                </p>

                <ImagePlaceholder
                  alt="MEES compliance flowchart showing decision process for landlords"
                  description="A flowchart showing the MEES compliance process: Starting with 'Do you have an EPC?', branching to 'Does it meet minimum standard?', then either 'You can let the property' or 'Can you make improvements?', finally leading to either compliance or exemption registration."
                  width={800}
                  height={450}
                  instructions={[
                    'Create a clear flowchart with yes/no decision points',
                    'Use colour coding (green for compliant paths, amber for exemption paths)',
                    'Include the key thresholds (currently E, from 2030 C)',
                    'Make it scannable and easy to follow',
                    'Include a clear starting point and end points',
                  ]}
                  priority
                />

                <InfoBox title="MEES vs EPC">
                  MEES refers to the regulations that set minimum standards. EPC (Energy Performance Certificate)
                  is the assessment that determines whether a property meets those standards. You need an EPC to
                  demonstrate MEES compliance.
                </InfoBox>
              </section>

              {/* History and Evolution */}
              <section id="history" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">History and Evolution of MEES</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  MEES regulations have evolved significantly since their introduction. Understanding this history
                  helps explain the current framework and where it is heading.
                </p>

                <div className="space-y-6 my-8">
                  <div className="border-l-4 border-neutral-300 pl-6 py-2">
                    <div className="text-sm font-semibold text-neutral-500 mb-1">2015</div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Regulations Enacted</h4>
                    <p className="text-neutral-600 text-sm">
                      The Energy Efficiency (Private Rented Property) (England and Wales) Regulations 2015 were
                      made under the Energy Act 2011. They established the framework for minimum standards but
                      did not come into force immediately.
                    </p>
                  </div>

                  <div className="border-l-4 border-neutral-300 pl-6 py-2">
                    <div className="text-sm font-semibold text-neutral-500 mb-1">1 April 2018</div>
                    <h4 className="font-semibold text-neutral-800 mb-2">MEES for New Tenancies</h4>
                    <p className="text-neutral-600 text-sm">
                      The first phase came into force. Landlords could no longer grant new tenancies for properties
                      rated F or G. The minimum standard was EPC E (score of 39 or above).
                    </p>
                  </div>

                  <div className="border-l-4 border-neutral-300 pl-6 py-2">
                    <div className="text-sm font-semibold text-neutral-500 mb-1">1 April 2020</div>
                    <h4 className="font-semibold text-neutral-800 mb-2">MEES for All Tenancies</h4>
                    <p className="text-neutral-600 text-sm">
                      The second phase extended requirements to existing tenancies. All privately rented properties
                      had to meet the E minimum, regardless of when the tenancy began. The cost cap was
                      {formatCurrency(3500)} and maximum penalty was {formatCurrency(5000)}.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-500 pl-6 py-2 bg-primary-50 rounded-r-lg">
                    <div className="text-sm font-semibold text-primary-600 mb-1">1 October 2030</div>
                    <h4 className="font-semibold text-primary-800 mb-2">EPC C Requirement</h4>
                    <p className="text-primary-700 text-sm">
                      Confirmed in the Warm Homes Plan (January 2026). All rental properties must achieve EPC C
                      (score 69+). Cost cap increases to {formatCurrency(KEY_DATES.costCap)}, maximum penalty
                      to {formatCurrency(KEY_DATES.maxPenalty)}.
                    </p>
                  </div>
                </div>

                <TipBox title="Learning from History">
                  The phased approach used in 2018-2020 (new tenancies first, then existing) is not being repeated
                  for the 2030 change. The EPC C requirement applies to all tenancies from day one, giving landlords
                  less flexibility to delay improvements.
                </TipBox>
              </section>

              {/* Current Requirements */}
              <section id="current-requirements" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Current Requirements (Until October 2030)</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Until the 2030 deadline takes effect, the current MEES requirements remain in force. Understanding
                  these is important for immediate compliance and for context on the upcoming changes.
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="text-left p-4 border border-neutral-200 font-semibold text-neutral-800">Requirement</th>
                        <th className="text-left p-4 border border-neutral-200 font-semibold text-neutral-800">Current Standard</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-neutral-200">Minimum EPC rating</td>
                        <td className="p-4 border border-neutral-200">
                          <EPCRatingBadge rating="E" size="sm" />
                        </td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">Minimum EPC score</td>
                        <td className="p-4 border border-neutral-200">39 out of 100</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-neutral-200">Cost cap for exemption</td>
                        <td className="p-4 border border-neutral-200">{formatCurrency(3500)} (including VAT)</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">Maximum penalty</td>
                        <td className="p-4 border border-neutral-200">{formatCurrency(5000)} per property</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-neutral-200">Exemption duration</td>
                        <td className="p-4 border border-neutral-200">5 years from registration</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">Applies to</td>
                        <td className="p-4 border border-neutral-200">All new and existing tenancies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <WarningBox title="Current Compliance Still Required">
                  Properties rated F or G cannot be legally let right now. If you have a property below E, you are
                  already in breach of MEES. Do not wait until 2030 to address this; act immediately.
                </WarningBox>
              </section>

              {/* 2030 Requirements */}
              <section id="2030-requirements" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">2030 Requirements</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Warm Homes Plan (January 2026) confirmed the new requirements that take effect from
                  1 October 2030. These represent a significant increase in standards.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card variant="default">
                    <CardBody>
                      <Badge variant="neutral" className="mb-4">Current (2020-2030)</Badge>
                      <div className="flex items-center gap-4 mb-4">
                        <EPCRatingBadge rating="E" size="lg" />
                        <div>
                          <div className="text-sm text-neutral-500">Minimum rating</div>
                          <div className="text-lg font-semibold text-neutral-800">E (39+)</div>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-neutral-600">
                        <li>Cost cap: {formatCurrency(3500)}</li>
                        <li>Max penalty: {formatCurrency(5000)}</li>
                        <li>Exemption: 5 years</li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <Badge variant="primary" className="mb-4">From October 2030</Badge>
                      <div className="flex items-center gap-4 mb-4">
                        <EPCRatingBadge rating="C" size="lg" />
                        <div>
                          <div className="text-sm text-primary-600">Minimum rating</div>
                          <div className="text-lg font-semibold text-primary-800">C (69+)</div>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-primary-700">
                        <li>Cost cap: {formatCurrency(KEY_DATES.costCap)}</li>
                        <li>Max penalty: {formatCurrency(KEY_DATES.maxPenalty)}</li>
                        <li>Exemption: 5 years</li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <KeyFactBox title="The 30-Point Gap" icon={TrendingUp}>
                  Moving from EPC E (39) to EPC C (69) requires an improvement of at least 30 points. For many
                  properties, this means significant investment in measures like insulation, heating upgrades, or
                  renewable energy. The increased cost cap of {formatCurrency(KEY_DATES.costCap)} reflects this
                  higher bar.
                </KeyFactBox>
              </section>

              {/* Which Tenancies Apply */}
              <section id="tenancy-types" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Which Tenancies Are Covered?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  MEES regulations apply to properties let under specific tenancy types. The vast majority of
                  private rentals fall within scope, but some arrangements are excluded.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="h-6 w-6 text-success-500" />
                        <CardTitle className="text-lg text-success-700">Covered by MEES</CardTitle>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-neutral-700">
                          <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Assured Shorthold Tenancies (ASTs)</strong>
                            <p className="text-sm text-neutral-600">The most common tenancy type for private rentals in England</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 text-neutral-700">
                          <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Assured Tenancies</strong>
                            <p className="text-sm text-neutral-600">Less common but still within scope</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 text-neutral-700">
                          <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Regulated Tenancies</strong>
                            <p className="text-sm text-neutral-600">Pre-1989 tenancies with rent control</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 text-neutral-700">
                          <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Domestic Agricultural Tenancies</strong>
                            <p className="text-sm text-neutral-600">Farm worker accommodation</p>
                          </div>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <XCircle className="h-6 w-6 text-danger-500" />
                        <CardTitle className="text-lg text-danger-700">Not Covered by MEES</CardTitle>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-neutral-700">
                          <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Social Housing</strong>
                            <p className="text-sm text-neutral-600">Council and housing association properties have separate regulations</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 text-neutral-700">
                          <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Licences to Occupy</strong>
                            <p className="text-sm text-neutral-600">Not a tenancy, so MEES does not apply</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 text-neutral-700">
                          <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Holiday Lets (under 4 months/year)</strong>
                            <p className="text-sm text-neutral-600">Short-term lets do not require EPC</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 text-neutral-700">
                          <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Properties Not Requiring EPC</strong>
                            <p className="text-sm text-neutral-600">Some listed buildings, temporary structures, etc.</p>
                          </div>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="HMOs (Houses in Multiple Occupation)">
                  HMOs are covered by MEES when let under qualifying tenancies. The EPC covers the whole building,
                  not individual rooms. This can create challenges where different rooms have different heating
                  or where common areas affect the overall rating. See our
                  <Link href="/property-types/hmo" className="text-primary-600 hover:underline ml-1">HMO guide</Link>
                  for specific advice.
                </InfoBox>
              </section>

              {/* Enforcement and Penalties */}
              <section id="enforcement" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Enforcement and Penalties</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Local authorities (usually Trading Standards or Environmental Health) are responsible for
                  enforcing MEES. They have powers to request information, issue compliance notices, and
                  impose financial penalties.
                </p>

                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-8">
                  <h3 className="font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                    <Gavel className="h-5 w-5 text-neutral-600" />
                    Enforcement Powers
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-neutral-600">1</span>
                      </div>
                      <div className="text-neutral-700">
                        <strong>Request for Information:</strong> Local authorities can require landlords to
                        produce EPC certificates, tenancy agreements, and other evidence of compliance.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-neutral-600">2</span>
                      </div>
                      <div className="text-neutral-700">
                        <strong>Compliance Notice:</strong> A formal notice requiring the landlord to take action
                        to comply with MEES within a specified timeframe.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-neutral-600">3</span>
                      </div>
                      <div className="text-neutral-700">
                        <strong>Penalty Notice:</strong> Financial penalties can be imposed without court
                        proceedings. Penalties are proportionate to the breach.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-neutral-600">4</span>
                      </div>
                      <div className="text-neutral-700">
                        <strong>Publication:</strong> Details of penalties are published on the PRS Exemptions
                        Register for a minimum of 12 months.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-primary-700 mb-4">Penalty Amounts (From 2030)</h3>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-danger-50">
                        <th className="text-left p-4 border border-danger-200 font-semibold text-danger-800">Offence</th>
                        <th className="text-left p-4 border border-danger-200 font-semibold text-danger-800">Penalty</th>
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
                        <td className="p-4 border border-neutral-200">Registering false or misleading exemption information</td>
                        <td className="p-4 border border-neutral-200 font-semibold">{formatCurrency(5000)}</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">Failure to comply with a compliance notice</td>
                        <td className="p-4 border border-neutral-200 font-semibold">{formatCurrency(5000)}</td>
                      </tr>
                      <tr className="bg-danger-100">
                        <td className="p-4 border border-danger-200 font-semibold text-danger-800">Maximum per property (cumulative)</td>
                        <td className="p-4 border border-danger-200 font-bold text-danger-800 text-xl">{formatCurrency(30000)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <WarningBox title="Penalties Can Accumulate" critical>
                  Penalties are per breach, per property. A landlord with multiple non-compliant properties could
                  face substantial total penalties. Continued non-compliance can result in multiple penalty notices.
                </WarningBox>
              </section>

              {/* How to Comply */}
              <section id="compliance-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">How to Comply with MEES</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Compliance with MEES requires either achieving the minimum EPC rating or registering a valid
                  exemption. Here is the practical process:
                </p>

                <div className="space-y-6 my-8">
                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Obtain a Valid EPC</h3>
                        <p className="text-neutral-600 mb-4">
                          If you do not have a current EPC, or if your EPC has expired, you must get one from a
                          qualified Domestic Energy Assessor. The EPC must be valid on the date you enter into
                          a new tenancy or on the compliance deadline date.
                        </p>
                        <a
                          href="https://www.gov.uk/find-an-energy-assessor"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Find an energy assessor on GOV.UK
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Check the Rating</h3>
                        <p className="text-neutral-600 mb-4">
                          Compare your EPC rating to the minimum requirement. Currently this is E (score 39+).
                          From October 2030 it will be C (score 69+). If you meet the requirement, you are compliant.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">If Below Minimum: Improve or Exempt</h3>
                        <p className="text-neutral-600 mb-4">
                          If your rating is below the minimum, you have two options:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="p-4 bg-success-50 rounded-lg border border-success-200">
                            <h4 className="font-semibold text-success-800 mb-2">Option A: Improve</h4>
                            <p className="text-sm text-success-700">
                              Make energy efficiency improvements to raise the rating above the minimum threshold.
                            </p>
                          </div>
                          <div className="p-4 bg-warning-50 rounded-lg border border-warning-200">
                            <h4 className="font-semibold text-warning-800 mb-2">Option B: Exempt</h4>
                            <p className="text-sm text-warning-700">
                              If qualifying for an exemption, register it on the PRS Exemptions Register before letting.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        4
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Document Everything</h3>
                        <p className="text-neutral-600 mb-4">
                          Keep records of your EPC, any improvement works carried out (including quotes and invoices),
                          and any exemption registration. You may need to provide this evidence to local authority
                          enforcement officers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <TipBox title="Planning for 2030">
                  If you are currently at E or D, start planning improvements now. Use our
                  <Link href="/tools/cost-calculator" className="text-accent-700 hover:underline mx-1">Cost Calculator</Link>
                  to estimate what it will take to reach C. Acting early gives you more flexibility and avoids
                  the contractor shortage expected closer to the deadline.
                </TipBox>
              </section>

              {/* CTA */}
              <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Understand Your Compliance Position</h2>
                <p className="text-primary-700 mb-6">
                  Use our tools to check where you stand and plan your path to compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" leftIcon={<PoundSterling className="h-5 w-5" />}>
                    <Link href="/tools/cost-calculator">Estimate Upgrade Costs</Link>
                  </Button>
                  <Button variant="outline" size="lg" leftIcon={<Building2 className="h-5 w-5" />}>
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
                    excerpt="Everything you need to know about the October 2030 deadline and what it means for your properties."
                    href="/regulations/epc-c-2030-deadline"
                    category="Regulations"
                    readingTime={8}
                  />
                  <RelatedContentCard
                    title="Cost Cap and Exemptions"
                    excerpt="Detailed guide to the cost cap exemption and other exemption categories."
                    href="/regulations/cost-cap-exemptions"
                    category="Regulations"
                    readingTime={10}
                  />
                </div>
              </section>

              {/* Sources */}
              <section className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Sources</h3>
                <div className="space-y-2">
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
