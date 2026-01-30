import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PoundSterling,
  Leaf,
  Home,
  Building2,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  MapPin,
  Flame,
  Thermometer,
  ClipboardCheck
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
  Breadcrumbs
} from '@/components/content';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'EPC Grants for Landlords: Complete Funding Guide 2026 | GreenLord',
  description: 'Complete guide to government grants for landlord EPC improvements. ECO4, Boiler Upgrade Scheme, Warm Homes: Local Grant and more. Find out what funding you can access.',
  openGraph: {
    title: 'EPC Grants for Landlords: Complete Funding Guide 2026',
    description: 'Discover government grants that can fund your EPC improvements. Up to £30,000 available through various schemes.',
    type: 'article',
  },
};

const breadcrumbs = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
  { name: 'Grants & Funding', url: `${SITE_CONFIG.url}/costs/grants` },
];

const tocItems = [
  { id: 'overview', title: 'Funding Overview', level: 2 },
  { id: 'available-schemes', title: 'Available Schemes', level: 2 },
  { id: 'eco4', title: 'ECO4 Scheme', level: 3 },
  { id: 'boiler-upgrade-scheme', title: 'Boiler Upgrade Scheme', level: 3 },
  { id: 'warm-homes-local', title: 'Warm Homes: Local Grant', level: 3 },
  { id: 'gbis', title: 'Great British Insulation Scheme', level: 3 },
  { id: 'eligibility-checker', title: 'Check Your Eligibility', level: 2 },
  { id: 'combining-grants', title: 'Combining Multiple Grants', level: 2 },
  { id: 'application-tips', title: 'Application Tips', level: 2 },
];

const relatedArticles = [
  {
    title: 'Complete Upgrade Cost Guide',
    href: '/costs',
    description: 'Understand the full cost of EPC improvements',
  },
  {
    title: 'Cost Cap and Exemptions',
    href: '/regulations/cost-cap-exemptions',
    description: 'The £10,000 spending cap explained',
  },
  {
    title: 'D to C Upgrade Costs',
    href: '/costs/d-to-c-upgrade',
    description: 'Specific costs for D to C improvements',
  },
];

const grantSchemes = [
  {
    id: 'eco4',
    name: 'ECO4 Scheme',
    fundingAmount: 'Typically £5,000 - £15,000',
    bestFor: 'Insulation and heating for low-income tenants',
    deadline: 'March 2026',
    href: '/costs/grants/eco4',
    icon: Thermometer,
    status: 'active' as const,
  },
  {
    id: 'boiler-upgrade-scheme',
    name: 'Boiler Upgrade Scheme (BUS)',
    fundingAmount: 'Up to £7,500',
    bestFor: 'Heat pump installation',
    deadline: 'March 2028',
    href: '/costs/grants/boiler-upgrade-scheme',
    icon: Flame,
    status: 'active' as const,
  },
  {
    id: 'warm-homes-local',
    name: 'Warm Homes: Local Grant',
    fundingAmount: 'Up to £30,000',
    bestFor: 'Comprehensive upgrades via local authority',
    deadline: 'Ongoing',
    href: '/costs/grants/warm-homes-local',
    icon: Home,
    status: 'new' as const,
  },
  {
    id: 'gbis',
    name: 'Great British Insulation Scheme',
    fundingAmount: 'Typically £1,000 - £5,000',
    bestFor: 'Single insulation measures',
    deadline: 'March 2026',
    href: '#gbis',
    icon: Building2,
    status: 'active' as const,
  },
];

export default function GrantsHubPage() {
  return (
    <>
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <Breadcrumbs items={breadcrumbs} />

              <ArticleHeader
                title="EPC Grants for Landlords: Complete Funding Guide"
                publishedDate="2026-01-20"
                lastUpdated="2026-01-28"
                author={SITE_CONFIG.author}
                readingTime={10}
                subtitle="Government grants can significantly reduce your EPC upgrade costs. This guide covers all available schemes, eligibility requirements, and how to apply."
              />

              {/* Introduction */}
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  With the October 2030 EPC C deadline approaching, many landlords are looking for ways to fund
                  the required improvements. The good news is that several government-backed schemes can cover
                  a significant portion of your upgrade costs, and in some cases, the full amount.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  This guide provides an overview of all available funding schemes for landlords, helping you
                  understand which grants you may be eligible for and how to access them.
                </p>
              </div>

              {/* Key Facts */}
              <KeyFactBox title="Key Funding Facts for Landlords" icon={PoundSterling}>
                <ul className="space-y-2 mt-2">
                  <li><strong>Up to {formatCurrency(30000)}</strong> available through Warm Homes: Local Grant (first property)</li>
                  <li><strong>Up to {formatCurrency(7500)}</strong> towards heat pumps via Boiler Upgrade Scheme</li>
                  <li><strong>Free insulation and heating</strong> possible through ECO4 if tenant receives benefits</li>
                  <li><strong>Multiple schemes can be combined</strong> in some circumstances</li>
                </ul>
              </KeyFactBox>

              {/* Funding Overview */}
              <section id="overview" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Understanding Landlord Funding</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Government energy efficiency grants exist to help the UK meet its net zero targets. While
                  many schemes were originally designed for homeowners, landlords can access significant
                  funding through several pathways, particularly when their properties house lower-income tenants.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-primary-50 rounded-lg p-5 border border-primary-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Users className="h-5 w-5 text-primary-700" />
                      </div>
                      <h3 className="font-semibold text-primary-800">Tenant-Based</h3>
                    </div>
                    <p className="text-sm text-primary-700">
                      ECO4 and Warm Homes: Local Grant eligibility often depends on tenant income or benefits status.
                    </p>
                  </div>

                  <div className="bg-accent-50 rounded-lg p-5 border border-accent-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-accent-100 rounded-lg">
                        <Building2 className="h-5 w-5 text-accent-700" />
                      </div>
                      <h3 className="font-semibold text-accent-800">Property-Based</h3>
                    </div>
                    <p className="text-sm text-accent-700">
                      Boiler Upgrade Scheme eligibility is based on property characteristics, not tenant income.
                    </p>
                  </div>

                  <div className="bg-neutral-100 rounded-lg p-5 border border-neutral-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-neutral-200 rounded-lg">
                        <MapPin className="h-5 w-5 text-neutral-700" />
                      </div>
                      <h3 className="font-semibold text-neutral-800">Location-Based</h3>
                    </div>
                    <p className="text-sm text-neutral-700">
                      Some schemes have geographic restrictions or are delivered through local authorities.
                    </p>
                  </div>
                </div>

                <InfoBox title="Funding vs Cost Cap">
                  Government grants do not count towards the {formatCurrency(KEY_DATES.costCap)} cost cap for MEES exemptions.
                  The cost cap only considers what you, the landlord, have personally spent. This means you should
                  maximise grant funding first, then consider the cost cap exemption for any remaining shortfall.
                </InfoBox>
              </section>

              {/* Available Schemes */}
              <section id="available-schemes" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Available Funding Schemes</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Below is an overview of the main grant schemes available to landlords. Click through to each
                  scheme for detailed eligibility criteria and application guidance.
                </p>

                <div className="space-y-6">
                  {grantSchemes.map((scheme) => (
                    <Card key={scheme.id} variant="default" className="hover:border-primary-300 transition-colors">
                      <CardBody>
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="p-3 bg-primary-100 rounded-lg">
                              <scheme.icon className="h-8 w-8 text-primary-700" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-lg">{scheme.name}</CardTitle>
                              {scheme.status === 'new' && (
                                <Badge variant="success">New for 2025</Badge>
                              )}
                              {scheme.status === 'active' && (
                                <Badge variant="primary">Active</Badge>
                              )}
                            </div>
                            <div className="grid sm:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="text-neutral-500">Funding:</span>
                                <p className="font-semibold text-primary-700">{scheme.fundingAmount}</p>
                              </div>
                              <div>
                                <span className="text-neutral-500">Best for:</span>
                                <p className="text-neutral-700">{scheme.bestFor}</p>
                              </div>
                              <div>
                                <span className="text-neutral-500">Deadline:</span>
                                <p className="text-neutral-700">{scheme.deadline}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <Link href={scheme.href}>
                              <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                                Full Guide
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </section>

              {/* ECO4 Summary */}
              <section id="eco4" className="mt-12">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">ECO4 Scheme</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  The Energy Company Obligation (ECO4) is the largest energy efficiency scheme in the UK.
                  It is funded by the major energy suppliers and provides free or heavily subsidised insulation
                  and heating improvements for households in fuel poverty.
                </p>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-3">Key Points for Landlords</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Property must have EPC rating of D, E, F, or G</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Tenant must receive qualifying benefits (Universal Credit, Pension Credit, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Covers insulation, heating systems, and renewable energy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Scheme ends March 2026</span>
                    </li>
                  </ul>
                </div>

                <Link href="/costs/grants/eco4">
                  <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Read Full ECO4 Guide
                  </Button>
                </Link>
              </section>

              {/* BUS Summary */}
              <section id="boiler-upgrade-scheme" className="mt-12">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Boiler Upgrade Scheme (BUS)</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  The Boiler Upgrade Scheme provides grants to help property owners install low-carbon heating
                  systems such as heat pumps. Unlike ECO4, this scheme does not require the tenant to be on benefits.
                </p>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-3">Key Points for Landlords</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Up to {formatCurrency(7500)} for air source heat pumps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Up to {formatCurrency(5000)} for biomass boilers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Property must have a valid EPC (less than 10 years old)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Must use an MCS certified installer</span>
                    </li>
                  </ul>
                </div>

                <Link href="/costs/grants/boiler-upgrade-scheme">
                  <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Read Full BUS Guide
                  </Button>
                </Link>
              </section>

              {/* Warm Homes: Local Summary */}
              <section id="warm-homes-local" className="mt-12">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Warm Homes: Local Grant</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  The Warm Homes: Local Grant is a new scheme launched in April 2025. It provides substantial
                  funding for comprehensive energy efficiency upgrades, delivered through local authorities.
                </p>

                <div className="bg-success-50 border border-success-200 rounded-lg p-5 mb-6">
                  <h4 className="font-semibold text-success-800 mb-3">Key Points for Landlords</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                      <span className="text-success-800">Up to {formatCurrency(30000)} for first property (100% funded)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                      <span className="text-success-800">50% landlord contribution required for additional properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                      <span className="text-success-800">Tenant income must be below {formatCurrency(36000)} or on qualifying benefits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                      <span className="text-success-800">Apply through your local authority</span>
                    </li>
                  </ul>
                </div>

                <Link href="/costs/grants/warm-homes-local">
                  <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Read Full Warm Homes: Local Guide
                  </Button>
                </Link>
              </section>

              {/* GBIS Summary */}
              <section id="gbis" className="mt-12">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Great British Insulation Scheme</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  The Great British Insulation Scheme (GBIS) focuses specifically on insulation measures.
                  It has two eligibility routes: one based on household income and one based on property
                  characteristics (Council Tax band and EPC rating).
                </p>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-3">Key Points for Landlords</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Covers cavity wall, loft, and solid wall insulation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">General eligibility: Council Tax bands A-D and EPC D, E, F, or G</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Low-income route available for tenants on benefits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Scheme runs until March 2026</span>
                    </li>
                  </ul>
                </div>

                <InfoBox title="GBIS vs ECO4">
                  GBIS and ECO4 are separate schemes but cover similar improvements. If your tenant qualifies
                  for ECO4 (based on benefits), that route typically provides more comprehensive funding.
                  GBIS is useful when tenants do not qualify for ECO4 but the property meets the general
                  eligibility criteria.
                </InfoBox>
              </section>

              {/* Eligibility Checker */}
              <section id="eligibility-checker" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Check Your Eligibility</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Determining which grants you can access depends on several factors including your property
                  characteristics, tenant circumstances, and location.
                </p>

                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <ClipboardCheck className="h-12 w-12 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 text-lg mb-2">Grant Eligibility Checker</h3>
                      <p className="text-neutral-600">
                        Answer a few questions about your property and tenant to see which grants you may be eligible for.
                      </p>
                    </div>
                    <Link href="/tools/grant-eligibility">
                      <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                        Check Eligibility
                      </Button>
                    </Link>
                  </div>
                </div>

                <TipBox title="Ask Your Tenant">
                  Many grant schemes require tenant cooperation to verify eligibility. Have an open conversation
                  with your tenant about the potential for free or subsidised improvements. Frame it as a
                  benefit to them, as it will reduce their energy bills.
                </TipBox>
              </section>

              {/* Combining Grants */}
              <section id="combining-grants" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Combining Multiple Grants</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  In some cases, you may be able to access multiple funding sources for the same property.
                  However, there are rules about what can be combined.
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="text-left p-4 border border-neutral-200 font-semibold text-neutral-800">Combination</th>
                        <th className="text-center p-4 border border-neutral-200 font-semibold text-neutral-800">Allowed?</th>
                        <th className="text-left p-4 border border-neutral-200 font-semibold text-neutral-800">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-neutral-200">ECO4 + BUS</td>
                        <td className="p-4 border border-neutral-200 text-center">
                          <CheckCircle className="h-5 w-5 text-success-500 mx-auto" />
                        </td>
                        <td className="p-4 border border-neutral-200 text-sm">Use ECO4 for insulation, BUS for heat pump</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">Warm Homes: Local + BUS</td>
                        <td className="p-4 border border-neutral-200 text-center">
                          <CheckCircle className="h-5 w-5 text-success-500 mx-auto" />
                        </td>
                        <td className="p-4 border border-neutral-200 text-sm">BUS can top up heat pump funding</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-neutral-200">ECO4 + GBIS</td>
                        <td className="p-4 border border-neutral-200 text-center">
                          <span className="text-warning-600 font-semibold">Partial</span>
                        </td>
                        <td className="p-4 border border-neutral-200 text-sm">Different measures only, not the same work</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="p-4 border border-neutral-200">ECO4 + Warm Homes: Local</td>
                        <td className="p-4 border border-neutral-200 text-center">
                          <span className="text-warning-600 font-semibold">Partial</span>
                        </td>
                        <td className="p-4 border border-neutral-200 text-sm">Subject to local authority rules</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <WarningBox title="Do Not Double-Fund">
                  You cannot claim funding from multiple schemes for the same measure. For example, you cannot
                  use both ECO4 and GBIS to fund the same cavity wall insulation. This is treated as fraud and
                  can result in clawback of funding and penalties.
                </WarningBox>
              </section>

              {/* Application Tips */}
              <section id="application-tips" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Application Tips for Landlords</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-white border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Get an Up-to-Date EPC</h4>
                        <p className="text-neutral-600 text-sm">
                          Most schemes require a valid EPC. If yours is more than 10 years old, get a new assessment
                          before applying. The new EPC will also show which improvements are recommended.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Speak to Your Tenant First</h4>
                        <p className="text-neutral-600 text-sm">
                          Many schemes require tenant cooperation, either to verify benefits status or to allow
                          access for surveys and installation. Get their agreement before applying.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Apply Early</h4>
                        <p className="text-neutral-600 text-sm">
                          Schemes have limited budgets and many close to applications once funding is exhausted.
                          Do not wait until the last minute, especially for ECO4 which ends in March 2026.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Use Approved Installers Only</h4>
                        <p className="text-neutral-600 text-sm">
                          All schemes require work to be completed by certified installers (TrustMark, MCS, or
                          PAS 2030 accredited). Using non-approved contractors will void your grant application.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Keep All Documentation</h4>
                        <p className="text-neutral-600 text-sm">
                          Retain copies of all grant applications, approval letters, installer certificates, and
                          completion documents. You may need these for future compliance evidence or if you
                          sell the property.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <TipBox title="Start with the Highest Value Grant">
                  If you think you may qualify for multiple schemes, start with the one offering the most
                  comprehensive funding. For most landlords with low-income tenants, this means ECO4 or
                  Warm Homes: Local Grant. Then use BUS to top up for heat pump funding if needed.
                </TipBox>
              </section>

              {/* CTA */}
              <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Ready to Find Your Funding?</h2>
                <p className="text-primary-700 mb-6">
                  Explore our detailed guides for each scheme or use our eligibility checker to find out
                  what grants are available for your property.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/costs/grants/eco4">
                    <Button variant="primary" size="lg" leftIcon={<Thermometer className="h-5 w-5" />}>
                      ECO4 Guide
                    </Button>
                  </Link>
                  <Link href="/costs/grants/boiler-upgrade-scheme">
                    <Button variant="outline" size="lg" leftIcon={<Flame className="h-5 w-5" />}>
                      Boiler Upgrade Scheme
                    </Button>
                  </Link>
                  <Link href="/costs/grants/warm-homes-local">
                    <Button variant="outline" size="lg" leftIcon={<Home className="h-5 w-5" />}>
                      Warm Homes: Local
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Related Content */}
              <section className="mt-12">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Related Guides</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <RelatedContentCard
                    title="Complete Upgrade Cost Guide"
                    excerpt="Understand the full cost of EPC improvements before applying for grants."
                    href="/costs"
                    category="Costs"
                    readingTime={18}
                  />
                  <RelatedContentCard
                    title="Cost Cap and Exemptions"
                    excerpt="Learn how grants interact with the £10,000 cost cap for MEES exemptions."
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
                    documentTitle="Boiler Upgrade Scheme: guidance for property owners"
                    url="https://www.gov.uk/guidance/apply-for-the-boiler-upgrade-scheme"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Ofgem"
                    documentTitle="Energy Company Obligation (ECO4)"
                    url="https://www.ofgem.gov.uk/environmental-and-social-schemes/energy-company-obligation-eco"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Warm Homes: Local Grant"
                    url="https://www.gov.uk/government/publications/warm-homes-local-grant"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Ofgem"
                    documentTitle="Great British Insulation Scheme"
                    url="https://www.ofgem.gov.uk/environmental-and-social-schemes/great-british-insulation-scheme"
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
