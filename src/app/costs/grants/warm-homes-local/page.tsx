import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Home,
  Calendar,
  CheckCircle,
  XCircle,
  ArrowRight,
  Users,
  PoundSterling,
  FileText,
  MapPin,
  Building2,
  Thermometer,
  Flame,
  Shield,
  Clock,
  AlertTriangle,
  Sparkles
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
  CostTable
} from '@/components/content';
import { SITE_CONFIG } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Warm Homes: Local Grant for Landlords - Up to £30,000 | GreenLord',
  description: 'Complete guide to the Warm Homes: Local Grant for UK landlords. Up to £30,000 for comprehensive EPC improvements. Eligibility, funding levels, and how to apply through your local authority.',
  openGraph: {
    title: 'Warm Homes: Local Grant for Landlords - Up to £30,000',
    description: 'Access up to £30,000 for comprehensive energy efficiency upgrades. The new local authority scheme explained.',
    type: 'article',
  },
};

const breadcrumbs = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
  { name: 'Grants & Funding', url: `${SITE_CONFIG.url}/costs/grants` },
  { name: 'Warm Homes: Local Grant', url: `${SITE_CONFIG.url}/costs/grants/warm-homes-local` },
];

const tocItems = [
  { id: 'what-is-whlg', title: 'What is Warm Homes: Local Grant?', level: 2 },
  { id: 'funding-levels', title: 'Funding Levels', level: 2 },
  { id: 'eligibility', title: 'Eligibility Requirements', level: 2 },
  { id: 'property-eligibility', title: 'Property Requirements', level: 3 },
  { id: 'tenant-eligibility', title: 'Tenant Requirements', level: 3 },
  { id: 'what-is-covered', title: 'What is Covered', level: 2 },
  { id: 'how-to-apply', title: 'How to Apply', level: 2 },
  { id: 'local-authority-delivery', title: 'Local Authority Delivery', level: 2 },
  { id: 'landlord-contribution', title: 'Landlord Contribution', level: 2 },
  { id: 'tips-for-landlords', title: 'Tips for Landlords', level: 2 },
];

const relatedArticles = [
  {
    title: 'ECO4 Scheme',
    href: '/costs/grants/eco4',
    description: 'Free insulation for eligible tenants',
  },
  {
    title: 'Boiler Upgrade Scheme',
    href: '/costs/grants/boiler-upgrade-scheme',
    description: 'Up to £7,500 for heat pumps',
  },
  {
    title: 'Complete Upgrade Cost Guide',
    href: '/costs',
    description: 'Understand the full cost of improvements',
  },
];

const qualifyingBenefits = [
  'Universal Credit',
  'Pension Credit',
  'Income-based Jobseeker\'s Allowance (JSA)',
  'Income-related Employment and Support Allowance (ESA)',
  'Income Support',
  'Housing Benefit',
  'Child Tax Credit',
  'Working Tax Credit',
  'Child Benefit (income under £36,000)',
];

const coveredMeasures = [
  {
    category: 'Insulation',
    icon: Building2,
    measures: [
      'Loft insulation (new or top-up)',
      'Cavity wall insulation',
      'Solid wall insulation (internal or external)',
      'Underfloor insulation',
      'Room-in-roof insulation',
      'Flat roof insulation',
    ],
  },
  {
    category: 'Heating',
    icon: Flame,
    measures: [
      'Air source heat pump',
      'Ground source heat pump',
      'High-efficiency boiler (in some cases)',
      'Heating controls upgrade',
      'Smart thermostat installation',
    ],
  },
  {
    category: 'Windows & Ventilation',
    icon: Home,
    measures: [
      'Double glazing',
      'Draught proofing',
      'Mechanical ventilation with heat recovery',
      'Secondary glazing',
    ],
  },
  {
    category: 'Renewables',
    icon: Sparkles,
    measures: [
      'Solar PV panels',
      'Solar thermal (water heating)',
      'Battery storage',
    ],
  },
];

export default function WarmHomesLocalPage() {
  return (
    <>
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <Breadcrumbs items={breadcrumbs} />

              <div className="mb-4">
                <Badge variant="success" className="text-sm">New for 2025</Badge>
              </div>

              <ArticleHeader
                title="Warm Homes: Local Grant for Landlords"
                publishedDate="2026-01-20"
                lastUpdated="2026-01-28"
                author={SITE_CONFIG.author}
                readingTime={12}
                subtitle="Access up to £30,000 for comprehensive energy efficiency upgrades through the new local authority-delivered grant scheme."
              />

              {/* Introduction */}
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  The Warm Homes: Local Grant (WHLG) is one of the most significant new funding schemes
                  for landlords, launched in April 2025 as part of the government&apos;s Warm Homes Plan.
                  Delivered through local authorities, it provides substantial funding for comprehensive
                  energy efficiency improvements, including full packages of insulation, heating, and
                  renewable energy measures.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  This guide explains how landlords can access this new funding stream, what is covered,
                  and the contribution requirements for multiple property applications.
                </p>
              </div>

              {/* Key Facts */}
              <KeyFactBox title="Warm Homes: Local Grant at a Glance" icon={Home}>
                <ul className="space-y-2 mt-2">
                  <li><strong>First property:</strong> Up to {formatCurrency(30000)} (100% grant funded)</li>
                  <li><strong>Additional properties:</strong> Up to {formatCurrency(15000)} grant (50% contribution required)</li>
                  <li><strong>Tenant requirement:</strong> Income below {formatCurrency(36000)} or on benefits</li>
                  <li><strong>Delivered by:</strong> Local authorities</li>
                  <li><strong>Available from:</strong> April 2025</li>
                  <li><strong>Scheme duration:</strong> Ongoing (subject to funding)</li>
                </ul>
              </KeyFactBox>

              {/* What is WHLG */}
              <section id="what-is-whlg" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What is the Warm Homes: Local Grant?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Warm Homes: Local Grant is a new government scheme that replaces and expands upon
                  previous local authority energy efficiency programmes (such as the Local Authority
                  Delivery scheme and Home Upgrade Grant). It provides funding directly to local councils,
                  who then deliver improvements to eligible households in their area.
                </p>

                <div className="bg-success-50 border border-success-200 rounded-lg p-6 my-8">
                  <h3 className="font-semibold text-success-800 mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    What Makes WHLG Different
                  </h3>
                  <ul className="space-y-3 text-success-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Higher funding:</strong> Up to {formatCurrency(30000)} per property, significantly more than ECO4</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Whole-house approach:</strong> Covers comprehensive upgrades, not just single measures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Local delivery:</strong> Tailored to your area&apos;s needs and property types</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Broader eligibility:</strong> Income threshold of {formatCurrency(36000)}, not just benefits</span>
                    </li>
                  </ul>
                </div>

                <InfoBox title="Relationship to Other Schemes">
                  Warm Homes: Local Grant is separate from ECO4 and the Boiler Upgrade Scheme. In some cases,
                  you may be able to combine WHLG with BUS (for heat pump top-up funding). However, you cannot
                  claim WHLG and ECO4 for the same property or the same measures. Speak to your local authority
                  to understand the options available in your area.
                </InfoBox>
              </section>

              {/* Funding Levels */}
              <section id="funding-levels" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Funding Levels</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The amount of funding available depends on whether this is your first property accessing
                  the scheme or an additional property in your portfolio.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <Badge variant="success" className="mb-4">First Property</Badge>
                      <div className="text-4xl font-bold text-primary-800 mb-2">
                        {formatCurrency(30000)}
                      </div>
                      <p className="text-primary-600 font-medium mb-4">Maximum grant (100% funded)</p>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0 mt-0.5" />
                          <span>No landlord contribution required</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0 mt-0.5" />
                          <span>Full package of measures covered</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0 mt-0.5" />
                          <span>Can cover insulation, heating, and renewables</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="default">
                    <CardBody>
                      <Badge variant="neutral" className="mb-4">Additional Properties</Badge>
                      <div className="text-4xl font-bold text-neutral-800 mb-2">
                        {formatCurrency(15000)}
                      </div>
                      <p className="text-neutral-600 font-medium mb-4">Maximum grant (50% of cost)</p>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-warning-500 flex-shrink-0 mt-0.5" />
                          <span>50% landlord contribution required</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0 mt-0.5" />
                          <span>Still substantial funding available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0 mt-0.5" />
                          <span>Same range of measures covered</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <TipBox title="First Property vs Additional Properties">
                  The &quot;first property&quot; is determined per landlord, not per local authority. If you have
                  already received 100% WHLG funding for one property (in any council area), subsequent
                  applications will be treated as additional properties requiring a 50% contribution.
                </TipBox>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 my-8">
                  <h3 className="font-semibold text-neutral-800 mb-4">Worked Example: Additional Property</h3>
                  <div className="space-y-3 text-neutral-700">
                    <p>
                      <strong>Scenario:</strong> You own two rental properties. You have already received
                      WHLG funding for Property A (your first property, 100% funded). Now you want to apply
                      for Property B.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Property B upgrade cost:</strong> {formatCurrency(20000)}</li>
                      <li><strong>Maximum grant (50%):</strong> {formatCurrency(10000)}</li>
                      <li><strong>Your contribution (50%):</strong> {formatCurrency(10000)}</li>
                    </ul>
                    <p className="text-sm text-neutral-600 mt-4">
                      If the upgrade cost exceeds {formatCurrency(30000)}, the grant is capped at
                      {formatCurrency(15000)} and you pay the remainder.
                    </p>
                  </div>
                </div>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Eligibility Requirements</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Eligibility for the Warm Homes: Local Grant is based on both property and tenant criteria.
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
                            <span>Located in England</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>EPC rating of D, E, F, or G</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>Privately rented (not social housing)</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>Has a current tenant</span>
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
                            <span>Properties in Wales, Scotland, or NI</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                            <span>Properties with EPC A, B, or C</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                            <span>Empty properties</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                            <span>Social housing</span>
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="flex items-center gap-4 my-6">
                    <span className="text-neutral-600">Property EPC must be:</span>
                    <div className="flex gap-2">
                      <EPCRatingBadge rating="D" size="sm" />
                      <EPCRatingBadge rating="E" size="sm" />
                      <EPCRatingBadge rating="F" size="sm" />
                      <EPCRatingBadge rating="G" size="sm" />
                    </div>
                  </div>

                  <WarningBox title="Local Authority Discretion">
                    Individual local authorities may have additional eligibility criteria or prioritisation
                    rules based on their area&apos;s needs. Some councils may focus on specific property types,
                    areas of high fuel poverty, or households with health vulnerabilities. Contact your
                    local authority for their specific requirements.
                  </WarningBox>
                </section>

                {/* Tenant Eligibility */}
                <section id="tenant-eligibility" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">Tenant Requirements</h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    To qualify for Warm Homes: Local Grant, the tenant must meet one of the following criteria:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                      <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <PoundSterling className="h-5 w-5" />
                        Income Route
                      </h4>
                      <p className="text-primary-700 mb-4">
                        Household income (combined for all adults) must be <strong>below {formatCurrency(36000)}</strong>
                        per year before tax.
                      </p>
                      <p className="text-sm text-primary-600">
                        This is a significantly higher threshold than many other schemes, making more tenants eligible.
                      </p>
                    </div>

                    <div className="bg-accent-50 border border-accent-200 rounded-lg p-6">
                      <h4 className="font-semibold text-accent-800 mb-3 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Benefits Route
                      </h4>
                      <p className="text-accent-700 mb-4">
                        At least one household member receives a qualifying means-tested benefit.
                      </p>
                      <p className="text-sm text-accent-600">
                        This route typically provides faster verification of eligibility.
                      </p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 my-8">
                    <h4 className="font-semibold text-neutral-800 mb-4">Qualifying Benefits</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {qualifyingBenefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-neutral-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <TipBox title="Broader Eligibility Than ECO4">
                    The {formatCurrency(36000)} income threshold means many working tenants qualify, even if
                    they do not receive means-tested benefits. This makes WHLG accessible for properties where
                    ECO4 would not apply. Ask your tenant if they are comfortable sharing their approximate
                    household income to assess eligibility.
                  </TipBox>
                </section>
              </section>

              {/* What is Covered */}
              <section id="what-is-covered" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What Warm Homes: Local Grant Covers</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  WHLG takes a whole-house approach, funding comprehensive packages of improvements rather
                  than single measures. This can transform a poorly performing property into one that meets
                  or exceeds the 2030 EPC C requirement.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  {coveredMeasures.map((category) => (
                    <Card key={category.category}>
                      <CardBody>
                        <div className="flex items-center gap-2 mb-4">
                          <category.icon className="h-5 w-5 text-primary-600" />
                          <CardTitle className="text-lg">{category.category}</CardTitle>
                        </div>
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

                <KeyFactBox title="Fabric-First Approach" icon={Building2}>
                  <p>
                    Like ECO4, WHLG prioritises insulation before heating upgrades. The scheme aims to reduce
                    heat demand first, then install efficient heating systems. This means you will typically
                    receive a combination of measures: insulation to reduce heat loss, then heating or
                    renewable technologies to provide efficient warmth.
                  </p>
                </KeyFactBox>

                <InfoBox title="Measures Are Tailored to Your Property">
                  The specific measures installed will depend on your property&apos;s current condition and
                  what is technically feasible. The local authority will arrange a survey to assess needs
                  and recommend an appropriate package of improvements.
                </InfoBox>
              </section>

              {/* How to Apply */}
              <section id="how-to-apply" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">How to Apply</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Unlike ECO4 (where you contact installers directly), Warm Homes: Local Grant applications
                  go through your local authority.
                </p>

                <div className="space-y-6 my-8">
                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Check Scheme Availability</h3>
                        <p className="text-neutral-600 mb-4">
                          Not all local authorities are running WHLG yet. Contact your local council (usually
                          the housing or environmental health department) to check if the scheme is available
                          in your area and whether they are accepting applications.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Confirm Eligibility</h3>
                        <p className="text-neutral-600">
                          Verify that your property has an EPC of D, E, F, or G, and that your tenant meets
                          the income or benefits criteria. You will need to provide evidence of both during
                          the application process.
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
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Submit Application</h3>
                        <p className="text-neutral-600">
                          Complete the local authority&apos;s application form. This typically requires property
                          details, EPC certificate, proof of ownership, tenant details, and evidence of tenant
                          income or benefits status.
                        </p>
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
                          If your application is accepted, the local authority will arrange a property survey
                          to assess what improvements are needed and technically feasible. This informs the
                          package of measures to be installed.
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
                          The local authority arranges installation through their approved contractors. For
                          additional properties, you pay your 50% contribution at this stage. A new EPC is
                          produced after completion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <TipBox title="Contact Your Council Early">
                  Local authority funding is allocated in phases. Contact your council as early as possible
                  to register your interest, even if they are not currently accepting applications. Being on
                  their radar may help when new funding becomes available.
                </TipBox>
              </section>

              {/* Local Authority Delivery */}
              <section id="local-authority-delivery" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Local Authority Delivery</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  WHLG is delivered by local authorities, which means the experience can vary depending on
                  where your property is located.
                </p>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 my-8">
                  <h3 className="font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-neutral-600" />
                    What to Expect
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-800">Timelines Vary:</strong>
                        <span className="text-neutral-600 block">
                          Processing times differ between councils. Some may have waiting lists, while others
                          can process applications quickly. Ask your local authority for their expected timeline.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-800">Priority Areas:</strong>
                        <span className="text-neutral-600 block">
                          Some councils prioritise certain areas (high fuel poverty, off-gas-grid properties)
                          or property types. Your property may be more or less likely to be accepted depending
                          on local priorities.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-800">Contractor Selection:</strong>
                        <span className="text-neutral-600 block">
                          Unlike ECO4 where you choose an installer, WHLG work is typically carried out by
                          contractors chosen by the local authority. You may have limited input on the specific
                          contractors used.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <WarningBox title="Not All Areas Covered Yet">
                  Warm Homes: Local Grant funding is being rolled out in phases. Not all local authorities
                  have received funding yet, and some may be fully subscribed. If your local council is not
                  currently running the scheme, consider ECO4 or the Boiler Upgrade Scheme as alternatives.
                </WarningBox>
              </section>

              {/* Landlord Contribution */}
              <section id="landlord-contribution" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Landlord Contribution Requirements</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  For your first property, WHLG is 100% funded with no landlord contribution. For additional
                  properties, you must contribute 50% of the cost (up to a maximum grant of {formatCurrency(15000)}).
                </p>

                <CostTable
                  title="Landlord Contribution Examples"
                  items={[
                    {
                      improvement: 'First property: £20,000 upgrade',
                      lowEstimate: 0,
                      highEstimate: 0,
                      notes: '100% grant funded',
                    },
                    {
                      improvement: 'Second property: £20,000 upgrade',
                      lowEstimate: 10000,
                      highEstimate: 10000,
                      notes: '50% contribution = £10,000',
                    },
                    {
                      improvement: 'Third property: £40,000 upgrade',
                      lowEstimate: 25000,
                      highEstimate: 25000,
                      notes: 'Grant capped at £15,000, you pay £25,000',
                    },
                  ]}
                  footerNote="For additional properties, your contribution is 50% of the cost up to a maximum grant of £15,000."
                />

                <TipBox title="Strategic Property Selection">
                  If you own multiple rental properties, consider which one would benefit most from 100%
                  funding. Properties with the worst EPC ratings or highest upgrade costs should typically
                  be prioritised as your &quot;first property&quot; application.
                </TipBox>

                <InfoBox title="Contribution Counts Towards Cost Cap">
                  If you do not achieve EPC C after WHLG improvements, your 50% contribution to additional
                  properties counts towards the {formatCurrency(10000)} cost cap for MEES exemption purposes.
                  Keep all receipts and payment records.
                </InfoBox>
              </section>

              {/* Tips for Landlords */}
              <section id="tips-for-landlords" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Tips for Landlords</h2>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <h4 className="font-semibold text-success-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Do
                    </h4>
                    <ul className="space-y-2 text-sm text-success-700">
                      <li>Contact your local authority early to register interest</li>
                      <li>Have your EPC and tenant income evidence ready</li>
                      <li>Consider which property to use as your &quot;first&quot; application</li>
                      <li>Discuss the scheme benefits with your tenant</li>
                      <li>Keep records of all communications and payments</li>
                      <li>Ask about combining with BUS for heat pump top-up</li>
                    </ul>
                  </div>

                  <div className="bg-danger-50 border border-danger-200 rounded-lg p-5">
                    <h4 className="font-semibold text-danger-800 mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5" />
                      Avoid
                    </h4>
                    <ul className="space-y-2 text-sm text-danger-700">
                      <li>Assuming the scheme is available everywhere</li>
                      <li>Starting ECO4 work if WHLG is available (may conflict)</li>
                      <li>Delaying application if your council has a waiting list</li>
                      <li>Expecting to choose your own contractors</li>
                      <li>Underestimating the time the process takes</li>
                      <li>Forgetting to factor in your 50% contribution for additional properties</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-accent-50 border border-accent-200 rounded-lg p-6 my-8">
                  <h3 className="font-semibold text-accent-800 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Tenant Communication Template
                  </h3>
                  <p className="text-accent-700 text-sm mb-4">
                    When approaching your tenant about WHLG, consider covering these points:
                  </p>
                  <ul className="space-y-2 text-sm text-accent-700">
                    <li>The scheme can provide free/subsidised improvements to make the home warmer</li>
                    <li>Lower energy bills are a direct benefit to them</li>
                    <li>You need their cooperation to confirm eligibility (income or benefits)</li>
                    <li>There will be some disruption during installation, but it is temporary</li>
                    <li>The improvements will remain with the property, benefiting them long-term</li>
                  </ul>
                </div>
              </section>

              {/* CTA */}
              <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Ready to Apply?</h2>
                <p className="text-primary-700 mb-6">
                  Contact your local authority to check if Warm Homes: Local Grant is available in your
                  area and start your application.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://www.gov.uk/find-local-council" target="_blank">
                    <Button variant="primary" size="lg" leftIcon={<MapPin className="h-5 w-5" />}>
                      Find Your Local Council
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
                    title="ECO4 Scheme"
                    excerpt="An alternative route to free improvements if WHLG is not available in your area."
                    href="/costs/grants/eco4"
                    category="Grants"
                    readingTime={12}
                  />
                  <RelatedContentCard
                    title="Boiler Upgrade Scheme"
                    excerpt="Can be combined with WHLG for additional heat pump funding."
                    href="/costs/grants/boiler-upgrade-scheme"
                    category="Grants"
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
                    documentTitle="Warm Homes: Local Grant scheme"
                    url="https://www.gov.uk/government/publications/warm-homes-local-grant"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Warm Homes Plan"
                    url="https://www.gov.uk/government/publications/warm-homes-plan"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Local Government Association"
                    documentTitle="Energy efficiency funding for councils"
                    url="https://www.local.gov.uk/topics/environment-and-waste/energy"
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
