import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Flame,
  Calendar,
  CheckCircle,
  XCircle,
  ArrowRight,
  Home,
  PoundSterling,
  FileText,
  Award,
  AlertTriangle,
  Building2,
  Thermometer,
  Leaf,
  Zap,
  Users
} from 'lucide-react';

import { Container, Section, Sidebar } from '@/components/layout';
import { Card, CardBody, CardTitle } from '@/components/ui';
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
  Breadcrumbs,
  CostTable,
  ComparisonTable
} from '@/components/content';
import { SITE_CONFIG } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Boiler Upgrade Scheme (BUS) for Landlords: Complete Guide 2026 | GreenLord',
  description: 'Complete guide to the Boiler Upgrade Scheme for UK landlords. Up to £7,500 for heat pumps. Eligibility, how it works, MCS certified installers, and how to apply.',
  openGraph: {
    title: 'Boiler Upgrade Scheme for Landlords: Get Up to £7,500',
    description: 'Access up to £7,500 towards heat pump installation for your rental property. Full eligibility guide and application process.',
    type: 'article',
  },
};

const breadcrumbs = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
  { name: 'Grants & Funding', url: `${SITE_CONFIG.url}/costs/grants` },
  { name: 'Boiler Upgrade Scheme', url: `${SITE_CONFIG.url}/costs/grants/boiler-upgrade-scheme` },
];

const tocItems = [
  { id: 'what-is-bus', title: 'What is the Boiler Upgrade Scheme?', level: 2 },
  { id: 'grant-amounts', title: 'Grant Amounts', level: 2 },
  { id: 'eligibility', title: 'Eligibility Requirements', level: 2 },
  { id: 'property-requirements', title: 'Property Requirements', level: 3 },
  { id: 'technology-requirements', title: 'Technology Requirements', level: 3 },
  { id: 'how-it-works', title: 'How It Works', level: 2 },
  { id: 'how-to-apply', title: 'How to Apply', level: 2 },
  { id: 'finding-installer', title: 'Finding an MCS Installer', level: 2 },
  { id: 'heat-pump-considerations', title: 'Heat Pump Considerations', level: 2 },
  { id: 'landlord-tips', title: 'Tips for Landlords', level: 2 },
];

const relatedArticles = [
  {
    title: 'ECO4 Scheme',
    href: '/costs/grants/eco4',
    description: 'Free insulation for eligible tenants',
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

export default function BoilerUpgradeSchemePage() {
  return (
    <>
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <Breadcrumbs items={breadcrumbs} />

              <ArticleHeader
                title="Boiler Upgrade Scheme for Landlords: Complete Guide"
                publishedDate="2026-01-18"
                lastUpdated="2026-01-28"
                author={SITE_CONFIG.author}
                readingTime={10}
                subtitle="Access up to £7,500 towards heat pump installation for your rental property through the Boiler Upgrade Scheme."
              />

              {/* Introduction */}
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  The Boiler Upgrade Scheme (BUS) provides substantial grants to help property owners
                  replace fossil fuel heating with low-carbon alternatives like heat pumps. Unlike other
                  energy efficiency schemes, BUS does not require your tenant to be on benefits, making
                  it accessible to all landlords with eligible properties.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  This guide explains how landlords can access BUS funding to install heat pumps, reduce
                  their properties&apos; carbon emissions, and achieve significant EPC improvements.
                </p>
              </div>

              {/* Key Facts */}
              <KeyFactBox title="BUS at a Glance" icon={Flame}>
                <ul className="space-y-2 mt-2">
                  <li><strong>Air source heat pump:</strong> Up to {formatCurrency(7500)} grant</li>
                  <li><strong>Ground source heat pump:</strong> Up to {formatCurrency(7500)} grant</li>
                  <li><strong>Biomass boiler:</strong> Up to {formatCurrency(5000)} grant (rural only)</li>
                  <li><strong>No tenant eligibility required:</strong> Property-based scheme</li>
                  <li><strong>Grant paid to installer:</strong> Reduces your upfront cost</li>
                  <li><strong>Scheme runs until:</strong> March 2028</li>
                </ul>
              </KeyFactBox>

              {/* What is BUS */}
              <section id="what-is-bus" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What is the Boiler Upgrade Scheme?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Boiler Upgrade Scheme is a UK government initiative launched in April 2022 to help
                  property owners transition from fossil fuel heating systems to low-carbon alternatives.
                  It provides upfront grants that reduce the cost of installing heat pumps and, in some
                  cases, biomass boilers.
                </p>

                <div className="bg-success-50 border border-success-200 rounded-lg p-6 my-8">
                  <h3 className="font-semibold text-success-800 mb-4 flex items-center gap-2">
                    <Leaf className="h-5 w-5" />
                    Why Heat Pumps?
                  </h3>
                  <p className="text-success-700 mb-4">
                    Heat pumps are the government&apos;s preferred low-carbon heating solution. They use
                    electricity to extract heat from the air or ground, delivering 3-4 units of heat for
                    every unit of electricity consumed.
                  </p>
                  <ul className="space-y-2 text-sm text-success-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span><strong>EPC improvement:</strong> Typically 10-20 points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span><strong>Lower carbon:</strong> Significantly reduces property emissions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span><strong>Future-proof:</strong> Ahead of gas boiler phase-out</span>
                    </li>
                  </ul>
                </div>

                <InfoBox title="BUS is Different from ECO4">
                  Unlike ECO4, the Boiler Upgrade Scheme does not require your tenant to receive benefits.
                  Eligibility is based on property characteristics alone. This makes BUS accessible to
                  landlords whose tenants would not qualify for other schemes. You can also combine BUS
                  with ECO4 if your tenant qualifies; use ECO4 for insulation and BUS for the heat pump.
                </InfoBox>
              </section>

              {/* Grant Amounts */}
              <section id="grant-amounts" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Grant Amounts</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Boiler Upgrade Scheme provides different grant amounts depending on the type of
                  heating system being installed.
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary-100">
                        <th className="text-left p-4 border border-primary-200 font-semibold text-primary-800">Technology</th>
                        <th className="text-left p-4 border border-primary-200 font-semibold text-primary-800">Grant Amount</th>
                        <th className="text-left p-4 border border-primary-200 font-semibold text-primary-800">Typical Total Cost</th>
                        <th className="text-left p-4 border border-primary-200 font-semibold text-primary-800">Your Cost After Grant</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-neutral-200">
                          <div className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-primary-600" />
                            <span className="font-medium">Air Source Heat Pump</span>
                          </div>
                        </td>
                        <td className="p-4 border border-neutral-200 font-bold text-success-600">{formatCurrency(7500)}</td>
                        <td className="p-4 border border-neutral-200">{formatCurrency(10000)} - {formatCurrency(15000)}</td>
                        <td className="p-4 border border-neutral-200">{formatCurrency(2500)} - {formatCurrency(7500)}</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">
                          <div className="flex items-center gap-2">
                            <Home className="h-5 w-5 text-primary-600" />
                            <span className="font-medium">Ground Source Heat Pump</span>
                          </div>
                        </td>
                        <td className="p-4 border border-neutral-200 font-bold text-success-600">{formatCurrency(7500)}</td>
                        <td className="p-4 border border-neutral-200">{formatCurrency(18000)} - {formatCurrency(35000)}</td>
                        <td className="p-4 border border-neutral-200">{formatCurrency(10500)} - {formatCurrency(27500)}</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-neutral-200">
                          <div className="flex items-center gap-2">
                            <Flame className="h-5 w-5 text-warning-600" />
                            <span className="font-medium">Biomass Boiler</span>
                          </div>
                        </td>
                        <td className="p-4 border border-neutral-200 font-bold text-success-600">{formatCurrency(5000)}</td>
                        <td className="p-4 border border-neutral-200">{formatCurrency(12000)} - {formatCurrency(20000)}</td>
                        <td className="p-4 border border-neutral-200">{formatCurrency(7000)} - {formatCurrency(15000)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <TipBox title="Air Source is Usually Best Value">
                  For most rental properties, an air source heat pump (ASHP) offers the best return on
                  investment. The {formatCurrency(7500)} grant covers a larger proportion of the total
                  cost compared to ground source systems, and installation is simpler and faster. Ground
                  source heat pumps are typically only worthwhile for larger properties with extensive
                  outdoor space.
                </TipBox>

                <WarningBox title="Biomass Eligibility is Limited">
                  Biomass boilers are only eligible for BUS funding in properties that are not connected
                  to the gas grid (or where a connection would be prohibitively expensive) and are in a
                  rural location. Most rental properties will not qualify for biomass grants.
                </WarningBox>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Eligibility Requirements</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Boiler Upgrade Scheme has specific requirements relating to both the property and
                  the heating technology being installed.
                </p>

                {/* Property Requirements */}
                <section id="property-requirements" className="mt-8">
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
                            <span>Located in <strong>England or Wales</strong></span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>Has a valid EPC (less than 10 years old)</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>Does <strong>not</strong> already have a heat pump</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span>Currently heated by fossil fuel system (gas, oil, LPG, coal, electric)</span>
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
                            <span>Properties in Scotland or Northern Ireland</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                            <span>Properties that already have a heat pump</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                            <span>New build properties</span>
                          </li>
                          <li className="flex items-start gap-3 text-neutral-700">
                            <XCircle className="h-5 w-5 text-danger-500 mt-0.5 flex-shrink-0" />
                            <span>Properties with no valid EPC</span>
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                  </div>

                  <InfoBox title="No EPC Rating Requirement">
                    Unlike ECO4, the Boiler Upgrade Scheme does not require your property to have a specific
                    EPC rating. You can apply with any EPC from A to G, as long as the certificate is valid
                    (less than 10 years old). However, heat pumps work most efficiently in well-insulated
                    properties, so consider addressing insulation first.
                  </InfoBox>
                </section>

                {/* Technology Requirements */}
                <section id="technology-requirements" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">Technology Requirements</h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    The heating system being installed must meet specific standards to qualify for BUS funding.
                  </p>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 my-8">
                    <h4 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      MCS Certification Required
                    </h4>
                    <p className="text-primary-700 mb-4">
                      All equipment installed under BUS must be MCS certified, and the installation must be
                      carried out by an MCS certified installer. MCS (Microgeneration Certification Scheme)
                      is the quality assurance standard for renewable energy installations in the UK.
                    </p>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Heat pump must be on the MCS product directory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Installer must hold current MCS certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Installation must meet MCS standards</span>
                      </li>
                    </ul>
                  </div>
                </section>
              </section>

              {/* How It Works */}
              <section id="how-it-works" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">How the Grant Works</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  A key feature of the Boiler Upgrade Scheme is that the grant is paid directly to the
                  installer, not to you. This means you only pay the difference between the total cost
                  and the grant amount.
                </p>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 my-8">
                  <h3 className="font-semibold text-neutral-800 mb-4">Payment Flow</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">1</span>
                      <div>
                        <p className="text-neutral-700">
                          <strong>Installer quotes {formatCurrency(12000)}</strong> for an air source heat pump installation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">2</span>
                      <div>
                        <p className="text-neutral-700">
                          <strong>You pay {formatCurrency(4500)}</strong> to the installer (total minus grant).
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">3</span>
                      <div>
                        <p className="text-neutral-700">
                          <strong>Installer applies for {formatCurrency(7500)}</strong> grant from Ofgem after installation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">4</span>
                      <div>
                        <p className="text-neutral-700">
                          <strong>Ofgem pays the installer</strong> directly, completing the transaction.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <TipBox title="No Paperwork for You">
                  The installer handles all the grant paperwork. Your main responsibility is to verify that
                  you want to proceed with the installation and to pay your contribution. The installer
                  manages the grant application and receives the funds directly from Ofgem.
                </TipBox>
              </section>

              {/* How to Apply */}
              <section id="how-to-apply" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">How to Apply</h2>

                <div className="space-y-6 my-8">
                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Check Your EPC</h3>
                        <p className="text-neutral-600 mb-4">
                          Ensure you have a valid EPC (less than 10 years old). If not, arrange for a new
                          assessment before proceeding. You can check at gov.uk/find-energy-certificate.
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
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Find an MCS Certified Installer</h3>
                        <p className="text-neutral-600 mb-4">
                          Use the MCS installer search to find certified heat pump installers in your area.
                          Get quotes from at least three installers to compare prices and service.
                        </p>
                        <Link href="https://mcscertified.com/find-an-installer/" target="_blank" className="text-primary-600 hover:underline text-sm">
                          MCS Certified Installer Search
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Site Survey and Quote</h3>
                        <p className="text-neutral-600">
                          The installer will visit your property to assess suitability for a heat pump. They
                          will provide a detailed quote showing the total cost and how the BUS grant will be
                          applied to reduce your payment.
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
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Installer Applies for Voucher</h3>
                        <p className="text-neutral-600">
                          Before installation begins, the installer applies to Ofgem for a BUS voucher. Once
                          approved, the voucher is valid for 3 months. You will receive confirmation that the
                          grant is reserved for your property.
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
                          The installer completes the heat pump installation. This typically takes 2-3 days
                          for an air source system. You pay your contribution (total cost minus grant) at
                          this stage.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        6
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-800 text-lg mb-2">Installer Redeems Voucher</h3>
                        <p className="text-neutral-600">
                          After installation, the installer submits proof of completion to Ofgem and redeems
                          the voucher. Ofgem pays the grant amount directly to the installer. You receive an
                          MCS certificate for the installation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Finding an Installer */}
              <section id="finding-installer" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Finding an MCS Installer</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Choosing the right installer is crucial for a successful heat pump installation. All BUS
                  work must be carried out by MCS certified installers.
                </p>

                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100 my-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <Award className="h-12 w-12 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 text-lg mb-2">MCS Certified Installer Search</h3>
                      <p className="text-neutral-600">
                        Use the official MCS directory to find certified heat pump installers in your area.
                      </p>
                    </div>
                    <Link href="https://mcscertified.com/find-an-installer/" target="_blank">
                      <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                        Search Now
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <h4 className="font-semibold text-success-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      What to Look For
                    </h4>
                    <ul className="space-y-2 text-sm text-success-700">
                      <li>Current MCS certification for heat pumps</li>
                      <li>Experience with similar property types</li>
                      <li>Positive customer reviews</li>
                      <li>Clear, itemised quotes</li>
                      <li>Willingness to explain the system</li>
                      <li>Warranty and aftercare offerings</li>
                    </ul>
                  </div>

                  <div className="bg-danger-50 border border-danger-200 rounded-lg p-5">
                    <h4 className="font-semibold text-danger-800 mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Red Flags to Avoid
                    </h4>
                    <ul className="space-y-2 text-sm text-danger-700">
                      <li>No MCS certification</li>
                      <li>Pressure to sign quickly</li>
                      <li>Unusually low quotes</li>
                      <li>Vague about specifications</li>
                      <li>No site survey before quoting</li>
                      <li>Reluctant to provide references</li>
                    </ul>
                  </div>
                </div>

                <TipBox title="Get Multiple Quotes">
                  Heat pump installation costs vary significantly between installers. Get at least three
                  quotes and compare not just price, but the equipment specified, warranty terms, and
                  aftercare provisions. The cheapest quote is not always the best value.
                </TipBox>
              </section>

              {/* Heat Pump Considerations */}
              <section id="heat-pump-considerations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Heat Pump Considerations for Landlords</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Before installing a heat pump in a rental property, consider these practical factors.
                </p>

                <ComparisonTable
                  title="Air Source vs Ground Source Heat Pumps"
                  featureLabels={{
                    cost: 'Typical Cost (before grant)',
                    grant: 'BUS Grant',
                    epcGain: 'Typical EPC Improvement',
                    space: 'Outdoor Space Required',
                    install: 'Installation Time',
                    running: 'Running Costs',
                    best: 'Best For',
                  }}
                  options={[
                    {
                      name: 'Air Source',
                      recommended: true,
                      features: {
                        cost: '£10,000-£15,000',
                        grant: '£7,500',
                        epcGain: '10-20 points',
                        space: 'Small - outdoor unit only',
                        install: '2-3 days',
                        running: 'Lower than gas for well-insulated homes',
                        best: 'Most rental properties',
                      },
                    },
                    {
                      name: 'Ground Source',
                      features: {
                        cost: '£18,000-£35,000',
                        grant: '£7,500',
                        epcGain: '12-22 points',
                        space: 'Large - ground loops required',
                        install: '2-4 weeks',
                        running: 'Lowest of all heat pumps',
                        best: 'Large properties with land',
                      },
                    },
                  ]}
                  footerNote="For most landlords, air source heat pumps offer the best value and practicality."
                />

                <WarningBox title="Insulation First">
                  Heat pumps work best in well-insulated properties. If your property has poor insulation
                  (EPC E or below), consider addressing insulation first, potentially through ECO4 if your
                  tenant qualifies. A heat pump in a poorly insulated property will struggle to maintain
                  comfortable temperatures and result in high running costs for your tenant.
                </WarningBox>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 my-8">
                  <h3 className="font-semibold text-neutral-800 mb-4">Tenant Considerations</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-800">Running Costs:</strong>
                        <span className="text-neutral-600 block">
                          Heat pumps use electricity, which is more expensive per unit than gas. However, they
                          are 3-4 times more efficient, so overall running costs should be similar or lower in
                          a well-insulated property. Explain this to your tenant.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Thermometer className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-800">Operating Differently:</strong>
                        <span className="text-neutral-600 block">
                          Heat pumps work best when run continuously at a lower temperature, rather than being
                          switched on and off. Tenants may need guidance on optimal use.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Home className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-800">Radiator Sizing:</strong>
                        <span className="text-neutral-600 block">
                          Some properties may need larger radiators to work efficiently with a heat pump.
                          Discuss this with your installer and factor any upgrades into your budget.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Tips for Landlords */}
              <section id="landlord-tips" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Tips for Landlords</h2>

                <div className="space-y-4 my-8">
                  <div className="bg-white border border-neutral-200 rounded-lg p-5">
                    <h4 className="font-semibold text-neutral-800 mb-2">Consider Combining with ECO4</h4>
                    <p className="text-neutral-600 text-sm">
                      If your tenant qualifies for ECO4, use that scheme to fund insulation first, then
                      apply for BUS to cover the heat pump. This combination can provide comprehensive
                      upgrades at minimal cost to you.
                    </p>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5">
                    <h4 className="font-semibold text-neutral-800 mb-2">Plan for Void Periods</h4>
                    <p className="text-neutral-600 text-sm">
                      Heat pump installation typically takes 2-3 days. Where possible, schedule this during
                      void periods or work with your tenant to minimise disruption. Installation in winter
                      may be less practical.
                    </p>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5">
                    <h4 className="font-semibold text-neutral-800 mb-2">Factor in Maintenance</h4>
                    <p className="text-neutral-600 text-sm">
                      Heat pumps require annual servicing, similar to gas boilers. Factor this into your
                      ongoing property maintenance costs. Most installers offer service packages.
                    </p>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5">
                    <h4 className="font-semibold text-neutral-800 mb-2">Document the EPC Improvement</h4>
                    <p className="text-neutral-600 text-sm">
                      After installation, get a new EPC to document the improvement. Heat pumps typically
                      add 10-20 points to your EPC score, potentially moving you into a higher band and
                      closer to the 2030 EPC C requirement.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Ready to Apply for BUS?</h2>
                <p className="text-primary-700 mb-6">
                  Take advantage of up to {formatCurrency(7500)} towards a heat pump for your rental property.
                  Find an MCS certified installer to get started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://mcscertified.com/find-an-installer/" target="_blank">
                    <Button variant="primary" size="lg" leftIcon={<Award className="h-5 w-5" />}>
                      Find MCS Installer
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
                    excerpt="Free insulation and heating for properties with eligible tenants."
                    href="/costs/grants/eco4"
                    category="Grants"
                    readingTime={12}
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
                    sourceName="GOV.UK"
                    documentTitle="Boiler Upgrade Scheme: guidance for property owners"
                    url="https://www.gov.uk/guidance/apply-for-the-boiler-upgrade-scheme"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Ofgem"
                    documentTitle="Boiler Upgrade Scheme"
                    url="https://www.ofgem.gov.uk/environmental-and-social-schemes/boiler-upgrade-scheme-bus"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="MCS"
                    documentTitle="Find an MCS Certified Installer"
                    url="https://mcscertified.com/find-an-installer/"
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
