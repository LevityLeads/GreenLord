import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Thermometer,
  Calendar,
  CheckCircle,
  XCircle,
  ArrowRight,
  Home,
  Users,
  PoundSterling,
  FileText,
  Clock,
  AlertTriangle,
  Building2,
  Flame,
  Shield
} from 'lucide-react';

import { Container, Section, Sidebar } from '@/components/layout';
import { Card, CardBody, CardTitle } from '@/components/ui';
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
  Breadcrumbs,
  ComparisonTable
} from '@/components/content';
import { SITE_CONFIG } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'ECO4 Scheme for Landlords: Complete Guide 2026 | GreenLord',
  description: 'Complete guide to the ECO4 scheme for UK landlords. Free insulation and heating improvements for rental properties with eligible tenants. Eligibility, what is covered, and how to apply.',
  openGraph: {
    title: 'ECO4 Scheme for Landlords: Complete Guide 2026',
    description: 'Access free insulation and heating improvements for your rental property through the ECO4 scheme. Full eligibility guide and application process.',
    type: 'article',
  },
};

const breadcrumbs = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
  { name: 'Grants & Funding', url: `${SITE_CONFIG.url}/costs/grants` },
  { name: 'ECO4 Scheme', url: `${SITE_CONFIG.url}/costs/grants/eco4` },
];

const tocItems = [
  { id: 'what-is-eco4', title: 'What is ECO4?', level: 2 },
  { id: 'eligibility', title: 'Eligibility Criteria', level: 2 },
  { id: 'property-eligibility', title: 'Property Requirements', level: 3 },
  { id: 'tenant-eligibility', title: 'Tenant Requirements', level: 3 },
  { id: 'what-is-covered', title: 'What ECO4 Covers', level: 2 },
  { id: 'how-to-apply', title: 'How to Apply', level: 2 },
  { id: 'important-dates', title: 'Important Dates', level: 2 },
  { id: 'tips-for-landlords', title: 'Tips for Landlords', level: 2 },
  { id: 'common-questions', title: 'Common Questions', level: 2 },
];

const relatedArticles = [
  {
    title: 'Boiler Upgrade Scheme',
    href: '/costs/grants/boiler-upgrade-scheme',
    description: 'Up to £7,500 for heat pumps',
  },
  {
    title: 'Warm Homes: Local Grant',
    href: '/costs/grants/warm-homes-local',
    description: 'Up to £30,000 for comprehensive upgrades',
  },
  {
    title: 'Complete Upgrade Cost Guide',
    href: '/costs',
    description: 'Understand the full cost of improvements',
  },
];

const qualifyingBenefits = [
  'Universal Credit',
  'Pension Credit (Guarantee Credit)',
  'Income-based Jobseeker\'s Allowance (JSA)',
  'Income-related Employment and Support Allowance (ESA)',
  'Income Support',
  'Child Tax Credit (income below £18,500)',
  'Working Tax Credit (income below £18,500)',
  'Housing Benefit',
  'Pension Credit (Savings Credit)',
  'Child Benefit (income below £18,500)',
];

const coveredMeasures = [
  {
    category: 'Insulation',
    measures: [
      'Loft insulation',
      'Cavity wall insulation',
      'Solid wall insulation (internal or external)',
      'Flat roof insulation',
      'Room-in-roof insulation',
      'Underfloor insulation',
    ],
  },
  {
    category: 'Heating',
    measures: [
      'First-time central heating',
      'Boiler replacement (in some cases)',
      'Electric storage heater upgrade',
      'Heat pumps (air source or ground source)',
    ],
  },
  {
    category: 'Other',
    measures: [
      'Heating controls upgrade',
      'Hot water tank insulation',
      'Draught proofing',
      'Ventilation improvements',
    ],
  },
];

export default function ECO4Page() {
  return (
    <>
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <Breadcrumbs items={breadcrumbs} />

              <ArticleHeader
                title="ECO4 Scheme for Landlords: Complete Guide"
                publishedDate="2026-01-15"
                lastUpdated="2026-01-28"
                author={SITE_CONFIG.author}
                readingTime={12}
                subtitle="Access free or heavily subsidised insulation and heating improvements for your rental property through the Energy Company Obligation scheme."
              />

              {/* Introduction */}
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  The Energy Company Obligation 4 (ECO4) is the UK government&apos;s flagship scheme for funding
                  energy efficiency improvements in homes with low-income or vulnerable residents. For landlords
                  with eligible tenants, ECO4 can provide free insulation, heating systems, and other improvements
                  worth thousands of pounds.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  This guide explains everything you need to know about accessing ECO4 funding for your rental
                  property, including eligibility requirements, what is covered, and how to apply.
                </p>
              </div>

              {/* Key Facts */}
              <KeyFactBox title="ECO4 at a Glance" icon={Thermometer}>
                <ul className="space-y-2 mt-2">
                  <li><strong>Funding value:</strong> Typically {formatCurrency(5000)} to {formatCurrency(15000)} per property</li>
                  <li><strong>Property requirement:</strong> EPC rating D, E, F, or G</li>
                  <li><strong>Tenant requirement:</strong> Must receive qualifying benefits</li>
                  <li><strong>Landlord cost:</strong> Usually free (no contribution required)</li>
                  <li><strong>Scheme ends:</strong> March 2026</li>
                </ul>
              </KeyFactBox>

              <WarningBox title="Time is Running Out" critical>
                ECO4 closes to new applications in <strong>March 2026</strong>. With the 2030 EPC C deadline
                approaching, this is one of the last opportunities to access substantial free funding for
                rental property improvements. Act now to avoid missing out.
              </WarningBox>

              {/* What is ECO4 */}
              <section id="what-is-eco4" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What is ECO4?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  ECO4 is a government scheme that requires the largest energy suppliers (British Gas, EDF, E.ON,
                  OVO, Octopus, and Scottish Power) to fund energy efficiency improvements in eligible households.
                  The scheme specifically targets fuel poverty, focusing on properties with lower EPC ratings
                  where residents are on low incomes or receive means-tested benefits.
                </p>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 my-8">
                  <h3 className="font-semibold text-neutral-800 mb-4">How ECO4 Works</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">1</span>
                      <div>
                        <p className="text-neutral-700">
                          <strong>Energy suppliers fund the scheme</strong> - They are legally required to achieve
                          energy savings targets by funding improvements in eligible homes.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">2</span>
                      <div>
                        <p className="text-neutral-700">
                          <strong>Installers deliver the work</strong> - Approved installation companies assess
                          properties and carry out improvements on behalf of the energy suppliers.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">3</span>
                      <div>
                        <p className="text-neutral-700">
                          <strong>Landlords receive free improvements</strong> - There is typically no cost to the
                          property owner as the energy supplier covers the full cost of eligible measures.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <InfoBox title="Why It Is Called ECO4">
                  ECO4 is the fourth version of the Energy Company Obligation scheme. Previous versions (ECO1, ECO2,
                  ECO3) ran from 2013 to 2022. ECO4 began in April 2022 and runs until March 2026, with the most
                  significant changes being a greater focus on whole-house improvements and fabric-first approaches.
                </InfoBox>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Eligibility Criteria</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  To access ECO4 funding for your rental property, both the property and the tenant must meet
                  specific eligibility criteria.
                </p>

                {/* Property Eligibility */}
                <section id="property-eligibility" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">Property Requirements</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Card>
                      <CardBody>
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle className="h-6 w-6 text-success-500" />
                          <CardTitle className="text-lg text-success-700">Eligible Properties</CardTitle>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-neutral-700">
                            <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>EPC rating of <strong>D, E, F, or G</strong></span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>Located in England, Wales, or Scotland</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>Privately rented residential property</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>Not already had ECO4 improvements</span>
                          </li>
                        </ul>
                      </CardBody>
                    </Card>

                    <Card>
                      <CardBody>
                        <div className="flex items-center gap-2 mb-4">
                          <XCircle className="h-6 w-6 text-danger-500" />
                          <CardTitle className="text-lg text-danger-700">Not Eligible</CardTitle>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-neutral-700">
                            <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                            <span>Properties with EPC A, B, or C</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                            <span>Properties in Northern Ireland</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                            <span>Social housing (separate schemes apply)</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                            <span>Empty properties or second homes</span>
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="flex items-center gap-4 my-6">
                    <span className="text-neutral-600">Your property must have an EPC of:</span>
                    <div className="flex gap-2">
                      <EPCRatingBadge rating="D" size="sm" />
                      <EPCRatingBadge rating="E" size="sm" />
                      <EPCRatingBadge rating="F" size="sm" />
                      <EPCRatingBadge rating="G" size="sm" />
                    </div>
                  </div>

                  <TipBox title="Check Your EPC">
                    Not sure of your property&apos;s EPC rating? You can check for free at
                    <a href="https://www.gov.uk/find-energy-certificate" target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:underline ml-1">
                      gov.uk/find-energy-certificate
                    </a>.
                    If your EPC is more than 10 years old, you will need a new assessment.
                  </TipBox>
                </section>

                {/* Tenant Eligibility */}
                <section id="tenant-eligibility" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">Tenant Requirements</h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    Under ECO4, eligibility is primarily determined by whether the household receives certain
                    means-tested benefits. At least one person living at the property must receive one of the
                    following:
                  </p>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 my-8">
                    <h4 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Qualifying Benefits
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {qualifyingBenefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-primary-800">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <InfoBox title="ECO4 Flex Route">
                    If your tenant does not receive qualifying benefits, they may still be eligible through the
                    ECO4 Flex route. This allows local authorities to refer households that are vulnerable to
                    the cold or living in fuel poverty, based on factors such as low income, health conditions,
                    or living in a hard-to-treat property. Contact your local council to enquire.
                  </InfoBox>
                </section>
              </section>

              {/* What is Covered */}
              <section id="what-is-covered" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What ECO4 Covers</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  ECO4 takes a &quot;fabric-first&quot; approach, prioritising insulation improvements before heating
                  upgrades. The specific measures installed will depend on your property&apos;s current condition
                  and what is technically feasible.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  {coveredMeasures.map((category) => (
                    <Card key={category.category}>
                      <CardBody>
                        <CardTitle className="text-lg mb-4">{category.category}</CardTitle>
                        <ul className="space-y-2">
                          {category.measures.map((measure) => (
                            <li key={measure} className="flex items-start gap-2 text-sm text-neutral-700">
                              <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0 mt-0.5" />
                              <span>{measure}</span>
                            </li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  ))}
                </div>

                <KeyFactBox title="Minimum Improvement Requirement" icon={Building2}>
                  <p>
                    ECO4 requires that improvements raise the property by at least <strong>two EPC bands</strong>
                    where possible, and achieve a minimum of EPC D (or EPC C for properties starting at F or G).
                    This whole-house approach means you will typically receive multiple measures, not just one.
                  </p>
                </KeyFactBox>

                <WarningBox title="Some Measures Have Conditions">
                  Heating improvements under ECO4 are usually only available after insulation has been installed.
                  The scheme prioritises reducing heat loss first, then upgrading heating systems. This means you
                  may not be able to get a free boiler replacement alone; it will typically be part of a package
                  that includes insulation.
                </WarningBox>
              </section>

              {/* How to Apply */}
              <section id="how-to-apply" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">How to Apply</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Applying for ECO4 involves several steps. Unlike some grants where you apply directly to the
                  government, ECO4 applications go through approved installers who work with the energy suppliers.
                </p>

                <div className="space-y-6 my-8">
                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Confirm Eligibility</h3>
                        <p className="text-neutral-600 mb-4">
                          Check that your property has an EPC of D, E, F, or G, and that your tenant receives
                          one of the qualifying benefits. You will need evidence of both.
                        </p>
                        <div className="flex gap-4">
                          <Link href="https://www.gov.uk/find-energy-certificate" target="_blank" className="text-primary-600 hover:underline text-sm">
                            Check EPC rating
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Speak to Your Tenant</h3>
                        <p className="text-neutral-600">
                          Get your tenant&apos;s agreement to participate. They will need to provide proof of their
                          benefits status and allow access to the property for surveys and installation work.
                          Explain the benefits: lower energy bills and a warmer home.
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
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Find an ECO4 Installer</h3>
                        <p className="text-neutral-600 mb-4">
                          Contact approved ECO4 installers in your area. You can find them through the Simple
                          Energy Advice service or by searching for &quot;ECO4 installers&quot; in your area. Get quotes
                          from at least two installers.
                        </p>
                        <Link href="https://www.simpleenergyadvice.org.uk/" target="_blank" className="text-primary-600 hover:underline text-sm">
                          Simple Energy Advice website
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        4
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Property Survey</h3>
                        <p className="text-neutral-600">
                          The installer will conduct a technical survey to assess which improvements are suitable
                          for your property. They will produce a quote showing the measures to be installed and
                          confirm eligibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        5
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Installation</h3>
                        <p className="text-neutral-600">
                          Once approved, the installer will schedule the work. Installation times vary from a
                          single day for loft insulation to several weeks for major works like solid wall
                          insulation. You will receive completion certificates and an updated EPC.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <TipBox title="Be Wary of Cold Callers">
                  While ECO4 is a legitimate government scheme, it has attracted some unscrupulous operators.
                  Be cautious of unsolicited calls or door-to-door salespeople. Always verify that installers
                  are TrustMark registered and check reviews before proceeding.
                </TipBox>
              </section>

              {/* Important Dates */}
              <section id="important-dates" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Important Dates</h2>

                <div className="space-y-6 my-8">
                  <div className="border-l-4 border-neutral-300 pl-6 py-2">
                    <div className="text-sm font-semibold text-neutral-500 mb-1">April 2022</div>
                    <h4 className="font-semibold text-neutral-800 mb-2">ECO4 Launched</h4>
                    <p className="text-neutral-600 text-sm">
                      The current version of ECO began, replacing ECO3 with stricter eligibility and a focus
                      on whole-house improvements.
                    </p>
                  </div>

                  <div className="border-l-4 border-warning-500 pl-6 py-2 bg-warning-50 rounded-r-lg">
                    <div className="text-sm font-semibold text-warning-600 mb-1">March 2026</div>
                    <h4 className="font-semibold text-warning-800 mb-2">ECO4 Ends</h4>
                    <p className="text-warning-700 text-sm">
                      The scheme closes to new applications. All work must be completed by this date. After
                      this, similar funding may be available through the proposed ECO+ or successor schemes,
                      but this is not guaranteed.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary-500 pl-6 py-2 bg-primary-50 rounded-r-lg">
                    <div className="text-sm font-semibold text-primary-600 mb-1">October 2030</div>
                    <h4 className="font-semibold text-primary-800 mb-2">EPC C Deadline</h4>
                    <p className="text-primary-700 text-sm">
                      All rental properties must achieve EPC C. Using ECO4 now can help you meet this deadline
                      at no cost, rather than paying for improvements yourself later.
                    </p>
                  </div>
                </div>

                <WarningBox title="Do Not Wait">
                  With ECO4 ending in March 2026, time is running out. Applications are processed on a first-come,
                  first-served basis, and installers are becoming increasingly busy as the deadline approaches.
                  Start your application as soon as possible to avoid disappointment.
                </WarningBox>
              </section>

              {/* Tips for Landlords */}
              <section id="tips-for-landlords" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Tips for Landlords</h2>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-5">
                    <h4 className="font-semibold text-accent-800 mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Protect Yourself
                    </h4>
                    <ul className="space-y-2 text-sm text-accent-700">
                      <li>Verify installers are TrustMark and PAS 2030 certified</li>
                      <li>Get everything in writing before work begins</li>
                      <li>Keep copies of all completion certificates</li>
                      <li>Ensure you receive an updated EPC after installation</li>
                    </ul>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-5">
                    <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Work with Your Tenant
                    </h4>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li>Explain the benefits clearly (warmer home, lower bills)</li>
                      <li>Be flexible on installation timing</li>
                      <li>Provide notice before property surveys</li>
                      <li>Minimise disruption where possible</li>
                    </ul>
                  </div>

                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <h4 className="font-semibold text-success-800 mb-3 flex items-center gap-2">
                      <PoundSterling className="h-5 w-5" />
                      Maximise Value
                    </h4>
                    <ul className="space-y-2 text-sm text-success-700">
                      <li>Get quotes from multiple installers</li>
                      <li>Ask about all available measures, not just one</li>
                      <li>Consider combining with BUS for heat pump top-up</li>
                      <li>Use ECO4 as leverage to improve multiple properties</li>
                    </ul>
                  </div>

                  <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-5">
                    <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Act Quickly
                    </h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>Start the application process now</li>
                      <li>Allow time for surveys and approvals</li>
                      <li>Book installation slots early</li>
                      <li>Remember the March 2026 deadline</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Common Questions */}
              <section id="common-questions" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Common Questions</h2>

                <div className="space-y-6 my-8">
                  <div className="border-b border-neutral-200 pb-6">
                    <h4 className="font-semibold text-neutral-800 mb-2">
                      Do I need to pay anything as a landlord?
                    </h4>
                    <p className="text-neutral-600">
                      In most cases, no. ECO4 funding covers the full cost of eligible measures for properties
                      with qualifying tenants. However, some installers may ask for a small contribution for
                      complex installations or if the property requires preparatory work that falls outside
                      the scheme.
                    </p>
                  </div>

                  <div className="border-b border-neutral-200 pb-6">
                    <h4 className="font-semibold text-neutral-800 mb-2">
                      Can I use ECO4 if my tenant moves out?
                    </h4>
                    <p className="text-neutral-600">
                      Eligibility is assessed at the time of application and typically requires the eligible
                      tenant to be in residence when the work is completed. If your tenant gives notice, speak
                      to the installer urgently to understand your options.
                    </p>
                  </div>

                  <div className="border-b border-neutral-200 pb-6">
                    <h4 className="font-semibold text-neutral-800 mb-2">
                      What if my property already has some insulation?
                    </h4>
                    <p className="text-neutral-600">
                      The scheme can fund top-up measures. For example, if you have some loft insulation but
                      less than 300mm, ECO4 can top it up to the full depth. The technical survey will assess
                      what is already in place and what additional measures are needed.
                    </p>
                  </div>

                  <div className="border-b border-neutral-200 pb-6">
                    <h4 className="font-semibold text-neutral-800 mb-2">
                      Can I combine ECO4 with other grants?
                    </h4>
                    <p className="text-neutral-600">
                      Yes, in some cases. You can use ECO4 for insulation and then apply for the Boiler Upgrade
                      Scheme separately for a heat pump. However, you cannot use ECO4 and GBIS for the same
                      measure, as they serve similar purposes.
                    </p>
                  </div>

                  <div className="border-b border-neutral-200 pb-6">
                    <h4 className="font-semibold text-neutral-800 mb-2">
                      How long does the process take?
                    </h4>
                    <p className="text-neutral-600">
                      From initial enquiry to completed installation, expect 2-4 months for straightforward
                      cases (loft and cavity wall insulation). More complex projects involving solid wall
                      insulation or heating systems can take 4-6 months or longer.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Ready to Apply for ECO4?</h2>
                <p className="text-primary-700 mb-6">
                  Do not miss out on free improvements worth thousands of pounds. Start your application
                  today while funding is still available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://www.simpleenergyadvice.org.uk/" target="_blank">
                    <Button variant="primary" size="lg" leftIcon={<ArrowRight className="h-5 w-5" />}>
                      Find ECO4 Installers
                    </Button>
                  </Link>
                  <Link href="/costs/grants">
                    <Button variant="outline" size="lg">
                      View All Grant Schemes
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Related Content */}
              <section className="mt-12">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Related Guides</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <RelatedContentCard
                    title="Boiler Upgrade Scheme"
                    excerpt="Up to £7,500 for heat pump installation - can be combined with ECO4 insulation."
                    href="/costs/grants/boiler-upgrade-scheme"
                    category="Grants"
                    readingTime={10}
                  />
                  <RelatedContentCard
                    title="Warm Homes: Local Grant"
                    excerpt="The new local authority scheme offering up to £30,000 for comprehensive upgrades."
                    href="/costs/grants/warm-homes-local"
                    category="Grants"
                    readingTime={12}
                  />
                </div>
              </section>

              {/* Sources */}
              <section className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Sources</h3>
                <div className="space-y-2">
                  <SourceCitation
                    sourceName="Ofgem"
                    documentTitle="Energy Company Obligation (ECO4)"
                    url="https://www.ofgem.gov.uk/environmental-and-social-schemes/energy-company-obligation-eco"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Energy Company Obligation (ECO4): guidance for landlords"
                    url="https://www.gov.uk/guidance/energy-company-obligation-eco4"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Simple Energy Advice"
                    documentTitle="ECO4 scheme information"
                    url="https://www.simpleenergyadvice.org.uk/eco"
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
