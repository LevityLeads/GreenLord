import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Building2,
  TrendingUp,
  ArrowRight,
  FileCheck,
  Users,
  Home,
  PoundSterling
} from 'lucide-react';

import { Container, Section, PageHeader, Sidebar } from '@/components/layout';
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
  GeneratedImage,
  Breadcrumbs
} from '@/components/content';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency, formatDate, daysUntilDeadline, formatNumber } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'EPC C 2030 Deadline for Landlords - Complete Guide | GreenLord',
  description: 'Everything UK landlords need to know about the October 2030 EPC C deadline. Which properties are affected, what to do now, and penalties for non-compliance.',
  alternates: {
    canonical: 'https://greenlord.co.uk/regulations/epc-c-2030-deadline',
  },
};

const breadcrumbs = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Regulations', url: `${SITE_CONFIG.url}/regulations` },
  { name: 'EPC C 2030 Deadline', url: `${SITE_CONFIG.url}/regulations/epc-c-2030-deadline` },
];

const tocItems = [
  { id: 'what-deadline-means', title: 'What the Deadline Means', level: 2 },
  { id: 'properties-affected', title: 'Which Properties Are Affected', level: 2 },
  { id: 'timeline', title: 'Implementation Timeline', level: 2 },
  { id: 'non-compliance', title: 'What Happens If You Do Not Comply', level: 2 },
  { id: 'action-steps', title: 'Action Steps for Landlords', level: 2 },
  { id: 'common-questions', title: 'Common Questions', level: 2 },
];

const relatedArticles = [
  {
    title: 'MEES Regulations Guide',
    href: '/regulations/mees-regulations-guide',
    description: 'Complete guide to Minimum Energy Efficiency Standards',
  },
  {
    title: 'Cost Cap and Exemptions',
    href: '/regulations/cost-cap-exemptions',
    description: 'When you might qualify for an exemption',
  },
  {
    title: 'Warm Homes Plan Summary',
    href: '/regulations/warm-homes-plan',
    description: 'January 2026 government announcement explained',
  },
];

export default function EpcC2030DeadlinePage() {
  const daysRemaining = daysUntilDeadline();
  const yearsRemaining = Math.floor(daysRemaining / 365);
  const monthsRemaining = Math.floor((daysRemaining % 365) / 30);

  return (
    <>
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <Breadcrumbs items={breadcrumbs} />

              <ArticleHeader
                title="EPC C 2030 Deadline: What Every Landlord Needs to Know"
                publishedDate="2026-01-22"
                lastUpdated="2026-01-25"
                author={SITE_CONFIG.author}
                readingTime={8}
                subtitle="The deadline is confirmed. Here is exactly what it means for your rental properties, which tenancies are affected, and what you should do now."
              />

              {/* Quick Facts Box */}
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
                <h2 className="text-lg font-semibold text-primary-800 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Quick Facts
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-primary-800">{formatNumber(daysRemaining)}</div>
                    <div className="text-sm text-primary-600">Days remaining</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-primary-800">1 Oct 2030</div>
                    <div className="text-sm text-primary-600">Deadline date</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-primary-800">EPC C</div>
                    <div className="text-sm text-primary-600">Minimum rating</div>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  The government&apos;s Warm Homes Plan, published on 21 January 2026, confirmed what landlords have been
                  anticipating for years: all rental properties in England and Wales must achieve an EPC rating of C
                  or above by 1 October 2030. This is not a proposal or consultation. It is now law.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  This deadline represents the most significant change to private rented sector energy efficiency
                  requirements since MEES regulations first came into force in 2018. Unlike the original implementation,
                  which phased in requirements for new and existing tenancies separately, the 2030 deadline applies to
                  all tenancies simultaneously.
                </p>
              </div>

              {/* What the Deadline Means */}
              <section id="what-deadline-means" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What the Deadline Actually Means</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  From 1 October 2030, it will be illegal to continue letting a property with an EPC rating below C.
                  This applies regardless of when the tenancy began. There is no grace period for existing tenancies
                  and no option to wait until a tenancy naturally ends.
                </p>

                <KeyFactBox title="The Legal Requirement" icon={FileCheck}>
                  <p>
                    On or before 1 October 2030, your rental property must have a valid EPC with a rating of C or above
                    (score of 69 or higher). This applies to both new lettings and continuing tenancies.
                  </p>
                </KeyFactBox>

                <p className="text-neutral-700 leading-relaxed mt-6 mb-6">
                  The requirement is for a valid EPC certificate. This means:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>Your EPC must not have expired.</strong> EPCs are valid for 10 years from the date of assessment.
                      If your current EPC expires before October 2030, you will need a new one.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>The rating must be C or above.</strong> D, E, F, and G ratings will not be compliant.
                      You need a score of at least 69 out of 100.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>Or you must have a valid exemption.</strong> Registered on the PRS Exemptions Register
                      before the deadline.
                    </span>
                  </li>
                </ul>

                <WarningBox title="No Exemption for Existing Tenancies">
                  Unlike previous MEES implementations, you cannot avoid compliance by simply keeping an existing
                  tenant in place. The deadline applies to all tenancies, whether they started in 2020 or 2029.
                </WarningBox>
              </section>

              {/* Which Properties Are Affected */}
              <section id="properties-affected" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Which Properties Are Affected?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The regulations apply to privately rented residential properties in England and Wales that are
                  let under certain tenancy types. The scope is broad and covers most standard rental arrangements.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="h-6 w-6 text-success-500" />
                        <CardTitle className="text-lg text-success-700">Properties In Scope</CardTitle>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Properties let on Assured Shorthold Tenancies (ASTs)
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Properties let on assured tenancies
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Regulated tenancies
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Domestic agricultural tenancies
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Houses in Multiple Occupation (HMOs)
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="h-6 w-6 text-warning-500" />
                        <CardTitle className="text-lg text-warning-700">Properties Potentially Exempt</CardTitle>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2 text-neutral-700">
                          <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                          Listed buildings where improvements would unacceptably alter character
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                          Properties not legally required to have an EPC
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                          Holiday lets used for fewer than 4 months per year
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <AlertTriangle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                          Temporary buildings (under 2 years planned use)
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="61% of Properties Currently Below C">
                  According to the English Housing Survey, approximately 61% of private rented sector properties
                  are currently rated below EPC C. This translates to an estimated 2.6 to 2.9 million properties
                  that will need improvement before the deadline.
                </InfoBox>
              </section>

              {/* Timeline */}
              <section id="timeline" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Implementation Timeline</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Understanding the timeline helps you plan improvements effectively. Here are the key dates
                  between now and the deadline:
                </p>

                <GeneratedImage
                  imageId="epc-c-2030-deadline-hero"
                  alt="Timeline showing key dates from January 2026 to October 2030 for EPC compliance"
                  prompt="A close-up of official documents and paperwork spread across a desk, with an EPC certificate prominently visible alongside a wall calendar turned to October 2030. A red circle marks the deadline date, with government policy documents and a landlord's planning notes visible nearby. Emphasise the urgency and importance of the deadline through visual composition. Include authentic-looking UK property compliance documents. Create a sense of organised planning and preparation."
                  width={800}
                  height={350}
                  priority
                />

                <div className="space-y-4 my-8">
                  <div className="flex items-start gap-4 p-4 bg-neutral-100 rounded-lg border-l-4 border-neutral-400">
                    <div className="text-sm font-semibold text-neutral-500 w-28 flex-shrink-0">June 2025</div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">RdSAP 10 Launched</h4>
                      <p className="text-neutral-600 text-sm">
                        New EPC assessment methodology now in use. Existing EPCs remain valid until expiry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-500">
                    <div className="text-sm font-semibold text-primary-600 w-28 flex-shrink-0">January 2026</div>
                    <div>
                      <h4 className="font-semibold text-primary-800">Warm Homes Plan Published</h4>
                      <p className="text-primary-700 text-sm">
                        Government confirms EPC C requirement and {formatCurrency(KEY_DATES.costCap)} cost cap.
                        Regulations are now certain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-accent-50 rounded-lg border-l-4 border-accent-500">
                    <div className="text-sm font-semibold text-accent-600 w-28 flex-shrink-0">2026-2029</div>
                    <div>
                      <h4 className="font-semibold text-accent-800">Recommended Action Period</h4>
                      <p className="text-accent-700 text-sm">
                        Best time to plan and implement improvements. Avoid the rush closer to deadline.
                        Contractor availability will be highest during this period.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-warning-50 rounded-lg border-l-4 border-warning-500">
                    <div className="text-sm font-semibold text-warning-600 w-28 flex-shrink-0">2029-2030</div>
                    <div>
                      <h4 className="font-semibold text-warning-800">Final Year Rush Expected</h4>
                      <p className="text-warning-700 text-sm">
                        Contractor availability likely to be limited. Prices may increase due to demand.
                        Do not leave it this late if you can avoid it.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-danger-50 rounded-lg border-l-4 border-danger-500">
                    <div className="text-sm font-semibold text-danger-600 w-28 flex-shrink-0">1 Oct 2030</div>
                    <div>
                      <h4 className="font-semibold text-danger-800">Compliance Deadline</h4>
                      <p className="text-danger-700 text-sm">
                        All rental properties must have EPC C or valid exemption. Penalties apply from this date.
                      </p>
                    </div>
                  </div>
                </div>

                <TipBox title="Why Act Early?">
                  Acting early gives you more options. You can time improvements between tenancies, spread costs
                  over multiple tax years, and avoid the contractor shortage that will inevitably occur as the
                  deadline approaches. Early adopters also benefit from learning what works before making
                  commitments across a portfolio.
                </TipBox>
              </section>

              {/* What Happens If You Don't Comply */}
              <section id="non-compliance" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What Happens If You Do Not Comply?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Non-compliance carries significant financial penalties and reputational consequences.
                  Local authorities are responsible for enforcement and have the power to issue fines
                  without court proceedings.
                </p>

                <div className="bg-danger-50 border border-danger-200 rounded-xl p-6 my-8">
                  <h3 className="text-lg font-semibold text-danger-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Penalty Structure
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-neutral-700">Letting non-compliant property (under 3 months)</span>
                      <span className="font-bold text-danger-700">{formatCurrency(5000)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-neutral-700">Letting non-compliant property (3+ months)</span>
                      <span className="font-bold text-danger-700">{formatCurrency(15000)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-neutral-700">False/misleading exemption registration</span>
                      <span className="font-bold text-danger-700">{formatCurrency(5000)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-neutral-700">Failure to comply with compliance notice</span>
                      <span className="font-bold text-danger-700">{formatCurrency(5000)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-danger-100 rounded-lg border border-danger-300">
                      <span className="font-semibold text-danger-800">Maximum penalty per property</span>
                      <span className="font-bold text-danger-800 text-xl">{formatCurrency(30000)}</span>
                    </div>
                  </div>
                </div>

                <WarningBox title="Public Listing" critical>
                  Beyond financial penalties, non-compliant landlords are published on the PRS Exemptions Register
                  for a minimum of 12 months. This public record can affect your reputation, relationships with
                  letting agents, and ability to attract quality tenants.
                </WarningBox>

                <p className="text-neutral-700 leading-relaxed mt-6">
                  There are also practical consequences beyond formal penalties:
                </p>

                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>Mortgage implications.</strong> Some lenders may refuse to lend on non-compliant properties
                      or require evidence of a compliance plan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>Sale complications.</strong> Non-compliant properties may be harder to sell, particularly
                      to other landlords, and may attract lower offers.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>Insurance concerns.</strong> Some landlord insurance policies may have clauses relating
                      to regulatory compliance.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Action Steps */}
              <section id="action-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Action Steps for Landlords</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  With {yearsRemaining} years and {monthsRemaining} months until the deadline, here is what you should
                  be doing now:
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Check Your Current EPC Ratings</h3>
                        <p className="text-neutral-600 mb-4">
                          Visit the government&apos;s EPC register to find your current ratings. Note the certificate
                          date, current rating, potential rating after improvements, and recommended measures.
                        </p>
                        <a
                          href="https://www.gov.uk/find-energy-certificate"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Find your EPC on GOV.UK
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
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Assess the Gap</h3>
                        <p className="text-neutral-600 mb-4">
                          Determine how far your property is from EPC C. A property at D (score 65) is much easier
                          to improve than one at E (score 45). Look at your EPC&apos;s improvement recommendations.
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-neutral-500">Your rating:</span>
                          <div className="flex items-center gap-2">
                            <EPCRatingBadge rating="D" size="sm" />
                            <ArrowRight className="h-4 w-4 text-neutral-400" />
                            <EPCRatingBadge rating="C" size="sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Estimate Improvement Costs</h3>
                        <p className="text-neutral-600 mb-4">
                          Use our calculator to get a realistic estimate based on your property type, current rating,
                          and location. This helps you budget and plan.
                        </p>
                        <Button size="sm">
                          <Link href="/tools/cost-calculator">Use Cost Calculator</Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        4
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Check Funding Options</h3>
                        <p className="text-neutral-600 mb-4">
                          Explore ECO4, Warm Homes: Local Grant, and other funding sources. You may be able to get
                          improvements fully or partially funded, especially if your tenants receive certain benefits.
                        </p>
                        <Link
                          href="/costs"
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Explore funding options
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        5
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Create Your Compliance Plan</h3>
                        <p className="text-neutral-600 mb-4">
                          Decide when to make improvements (between tenancies is often easiest), prioritise
                          properties, and set a budget. If you have multiple properties, plan which to tackle first.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Questions */}
              <section id="common-questions" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Common Questions</h2>

                <div className="space-y-6">
                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      What if my EPC expires before October 2030?
                    </h3>
                    <p className="text-neutral-600">
                      You will need to get a new EPC. If you have made improvements since your last assessment,
                      the new EPC may show a better rating. Remember that EPCs are valid for 10 years, so an
                      assessment in 2025 would be valid until 2035.
                    </p>
                  </div>

                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      Can I wait until RdSAP 10 before getting assessed?
                    </h3>
                    <p className="text-neutral-600">
                      RdSAP 10 is already in use (launched June 2025). If your current EPC is recent and valid,
                      there is no need to rush a new assessment. If you need a new EPC anyway, it will automatically
                      be calculated using RdSAP 10.
                    </p>
                  </div>

                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      What if I cannot afford the improvements?
                    </h3>
                    <p className="text-neutral-600">
                      If improvements would cost more than {formatCurrency(KEY_DATES.costCap)} without achieving EPC C,
                      you can register for a cost cap exemption. You must still make improvements up to the cap value.
                      Also explore grant funding which may cover some or all costs.
                    </p>
                  </div>

                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      What happens if I am planning to sell before 2030?
                    </h3>
                    <p className="text-neutral-600">
                      If you sell with a tenant in place, the buyer inherits the compliance obligation. Non-compliant
                      properties may attract lower offers from landlord buyers. If selling vacant, the regulations
                      do not apply to owner-occupied homes, but EPC rating still affects buyer interest and value.
                    </p>
                  </div>

                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      Does this apply to Scotland and Northern Ireland?
                    </h3>
                    <p className="text-neutral-600">
                      No. These regulations apply to England and Wales only. Scotland has separate energy efficiency
                      requirements, and Northern Ireland has its own regulations. This guide covers England and Wales.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Ready to Plan Your Compliance?</h2>
                <p className="text-primary-700 mb-6">
                  With {formatNumber(daysRemaining)} days until the deadline, start planning now. Use our tools and
                  guides to understand your options and create a practical action plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" leftIcon={<PoundSterling className="h-5 w-5" />}>
                    <Link href="/tools/cost-calculator">Estimate Your Costs</Link>
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
                    title="MEES Regulations Complete Guide"
                    excerpt="Deep dive into the Minimum Energy Efficiency Standards framework and how it applies to your properties."
                    href="/regulations/mees-regulations-guide"
                    category="Regulations"
                    readingTime={12}
                  />
                  <RelatedContentCard
                    title="Cost Cap and Exemptions Guide"
                    excerpt="Understand when you might qualify for an exemption and how the cost cap works in practice."
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
                    sourceName="GOV.UK"
                    documentTitle="Warm Homes Plan"
                    url="https://www.gov.uk/government/publications/warm-homes-plan"
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
