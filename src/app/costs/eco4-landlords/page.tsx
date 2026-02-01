import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  CheckCircle,
  AlertCircle,
  Clock,
  PoundSterling,
  Home,
  FileText,
  Users,
  Building,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Sidebar } from '@/components/layout/Sidebar';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { WarningBox } from '@/components/content/WarningBox';
import { TipBox } from '@/components/content/TipBox';
import { InfoBox } from '@/components/content/InfoBox';
import { CostTable } from '@/components/content/CostTable';
import { SourceCitation } from '@/components/content/SourceCitation';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { GeneratedImage } from '@/components/content';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'ECO4 Scheme for Landlords | Free Insulation & Heating Grants | GreenLord',
  description:
    'Complete guide to the ECO4 scheme for UK landlords. Free or heavily subsidised insulation and heating upgrades. Eligibility requirements, tenant benefits, and how to apply.',
  openGraph: {
    title: 'ECO4 Scheme for Landlords: Free Insulation and Heating',
    description:
      'How landlords can access free insulation and heating upgrades through the ECO4 Energy Company Obligation scheme.',
    type: 'article',
  },
};

const tableOfContents = [
  { id: 'what-is-eco4', title: 'What is ECO4?', level: 2 },
  { id: 'landlord-eligibility', title: 'Landlord-Specific Eligibility', level: 2 },
  { id: 'tenant-benefits', title: 'Tenant Benefit Requirements', level: 2 },
  { id: 'la-flex-route', title: 'LA Flex Route', level: 2 },
  { id: 'measures-covered', title: 'What Measures Are Covered', level: 2 },
  { id: 'how-to-apply', title: 'How to Apply', level: 2 },
  { id: 'working-with-installers', title: 'Working with ECO Installers', level: 2 },
  { id: 'eco4-vs-other-schemes', title: 'ECO4 vs Other Schemes', level: 2 },
  { id: 'deadline-extension', title: 'Deadline and ECO5', level: 2 },
  { id: 'next-steps', title: 'Your Next Steps', level: 2 },
];

const relatedArticles = [
  {
    title: 'Boiler Upgrade Scheme',
    href: '/costs/boiler-upgrade-scheme',
    description: 'Heat pump grants up to £7,500.',
  },
  {
    title: 'Warm Homes Local Grant',
    href: '/costs/warm-homes-local-grant',
    description: 'Up to £30,000 for qualifying properties.',
  },
  {
    title: 'E to C Upgrade Costs',
    href: '/costs/e-to-c-upgrade',
    description: 'Tackling the hardest EPC improvements.',
  },
];

export default function ECO4LandlordsPage() {
  return (
    <>
      <PageHeader
        title="ECO4 Scheme for Landlords"
        subtitle="Access free or heavily subsidised insulation and heating upgrades through the Energy Company Obligation scheme."
        breadcrumbs={[
          { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
          { name: 'ECO4 for Landlords', url: `${SITE_CONFIG.url}/costs/eco4-landlords` },
        ]}
      >
        <div className="flex items-center gap-2 text-success-700 font-medium">
          <PoundSterling className="h-5 w-5" />
          <span>Potentially free improvements</span>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1 max-w-4xl">
              <ArticleHeader
                title="ECO4 Scheme for Landlords: Complete Guide to Free Upgrades"
                publishedDate="2025-09-01"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={12}
                subtitle="How to access free insulation and heating improvements through the Energy Company Obligation"
              />

              {/* Hero Image */}
              <GeneratedImage
                imageId="eco4-landlords-hero"
                alt="ECO4 installer fitting cavity wall insulation in a British rental property"
                description="Two installers in high-visibility workwear operate cavity wall insulation injection equipment outside a 1960s British semi-detached house. One worker holds the injection lance while another monitors the pump equipment mounted in a branded van. Drilled holes in the brickwork are visible, showing the installation in progress. The scene captures the professional, government-backed nature of ECO4 funded work."
                width={1200}
                height={630}
                instructions={[
                  'Professional installers in branded hi-vis workwear',
                  'Cavity wall insulation injection equipment visible',
                  'Typical British residential property as backdrop',
                ]}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="lead text-xl text-neutral-700">
                  The ECO4 scheme (Energy Company Obligation 4) is one of the most valuable funding sources for UK landlords looking to improve their properties&apos; energy efficiency. If your tenant receives certain benefits, you may qualify for free insulation, heating upgrades, or both.
                </p>

                <p>
                  ECO4 runs until March 2026 and is funded by energy companies who are obligated to help improve energy efficiency in homes. For landlords with eligible tenants, this can mean thousands of pounds in free improvements, often including cavity wall insulation, loft insulation, and even new heating systems.
                </p>
              </div>

              <KeyFactBox title="ECO4 at a Glance" icon={PoundSterling}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-600">Scheme Runs Until</p>
                    <p className="font-semibold text-lg">March 2026</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Funding Available</p>
                    <p className="font-semibold text-lg">Up to 100% free</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Key Requirement</p>
                    <p className="font-semibold">Tenant on qualifying benefits</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Property Requirement</p>
                    <p className="font-semibold">EPC D, E, F, or G</p>
                  </div>
                </div>
              </KeyFactBox>

              {/* What is ECO4 */}
              <section id="what-is-eco4" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What is ECO4?</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    ECO4 (Energy Company Obligation 4) is a government scheme that requires large energy suppliers to fund energy efficiency improvements in homes. The scheme specifically targets fuel-poor and vulnerable households, with a focus on properties with low EPC ratings.
                  </p>

                  <p>
                    Energy companies must meet their ECO obligations, so they actively seek eligible properties to improve. This means qualified installers are incentivised to find and upgrade qualifying homes, often at no cost to the landlord or tenant.
                  </p>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-primary-800 mb-3">How ECO4 Works</h4>
                  <ol className="space-y-3 text-sm text-primary-700">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">1</span>
                      <span>Energy suppliers are legally required to achieve carbon reduction targets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">2</span>
                      <span>They fund ECO installers to carry out improvements in eligible homes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">3</span>
                      <span>Installers find eligible properties through direct applications or LA Flex referrals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">4</span>
                      <span>Improvements are installed free or heavily subsidised</span>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Landlord Eligibility */}
              <section id="landlord-eligibility" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Landlord-Specific Eligibility
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Private landlords can access ECO4 funding, but there are specific requirements that must be met. The key distinction from homeowner applications is that eligibility is based on the tenant&apos;s circumstances, not the landlord&apos;s.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <h4 className="font-semibold text-success-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Landlord Requirements
                    </h4>
                    <ul className="space-y-2 text-sm text-success-700">
                      <li>Property must be privately rented (not social housing)</li>
                      <li>You must own the property or have authority to approve works</li>
                      <li>Property must have an EPC of D, E, F, or G</li>
                      <li>You must agree to not increase rent due to improvements (some local conditions)</li>
                      <li>Property must be in England, Scotland, or Wales</li>
                    </ul>
                  </div>

                  <div className="bg-warning-50 border border-warning-200 rounded-lg p-5">
                    <h4 className="font-semibold text-warning-800 mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Tenant Requirements
                    </h4>
                    <ul className="space-y-2 text-sm text-warning-700">
                      <li>Tenant must receive a qualifying benefit (see below)</li>
                      <li>Or qualify through LA Flex criteria</li>
                      <li>Tenant must consent to works being carried out</li>
                      <li>Tenant cannot be a family member of the landlord</li>
                    </ul>
                  </div>
                </div>

                <InfoBox title="No Direct Landlord Benefit Test">
                  <p>
                    Unlike some schemes, ECO4 does not assess the landlord&apos;s income or wealth. If your tenant qualifies, you can benefit regardless of your own financial situation. This makes ECO4 accessible to all private landlords with eligible tenants.
                  </p>
                </InfoBox>
              </section>

              {/* Tenant Benefits */}
              <section id="tenant-benefits" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Tenant Benefit Requirements
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    For standard ECO4 eligibility, your tenant must receive one of the following benefits. If they receive any of these, your property is likely eligible for free or subsidised improvements.
                  </p>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-4">Qualifying Benefits</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        <span>Universal Credit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        <span>Pension Credit (Guarantee Credit)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        <span>Income-based JSA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        <span>Income-related ESA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        <span>Income Support</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        <span>Child Tax Credit (income under £16,480)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        <span>Working Tax Credit (income under £16,480)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        <span>Housing Benefit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        <span>Pension Credit (Savings Credit)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                        <span>Child Benefit (income under £16,480)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <TipBox title="Ask Your Tenant">
                  <p>
                    If you are unsure whether your tenant receives benefits, ask them directly. Many tenants do not realise that their benefit status could qualify them for free home improvements. Present it as a benefit to them (warmer home, lower bills) rather than just a landlord benefit.
                  </p>
                </TipBox>
              </section>

              {/* LA Flex Route */}
              <section id="la-flex-route" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  LA Flex Route (Local Authority Flex)
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    If your tenant does not receive qualifying benefits, you may still be eligible through the LA Flex (Local Authority Flex) pathway. This allows local councils to refer households who are fuel poor or vulnerable but do not meet the standard benefit criteria.
                  </p>
                </div>

                <div className="bg-accent-50 border border-accent-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-accent-800 mb-3">LA Flex Eligibility Criteria</h4>
                  <p className="text-sm text-accent-700 mb-4">
                    Local authorities can declare households eligible if they meet certain vulnerability or fuel poverty criteria:
                  </p>
                  <ul className="space-y-2 text-sm text-accent-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Low income:</strong> Household income below £31,000 (or £36,000 in some areas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Poor EPC:</strong> Property rated E, F, or G (some councils include D)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Vulnerable occupant:</strong> Elderly, disabled, or health condition worsened by cold</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Fuel poverty indicators:</strong> High energy costs relative to income</span>
                    </li>
                  </ul>
                </div>

                <InfoBox title="How to Access LA Flex">
                  <p>
                    Contact your local authority&apos;s housing or energy efficiency team to ask about LA Flex referrals. Many councils have online application forms. The council will assess the household and, if eligible, provide a declaration that allows ECO installers to proceed.
                  </p>
                </InfoBox>
              </section>

              {/* Measures Covered */}
              <section id="measures-covered" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  What Measures Are Covered
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    ECO4 covers a wide range of energy efficiency improvements. The specific measures available depend on your property&apos;s current condition and what will deliver the most carbon savings.
                  </p>
                </div>

                <CostTable
                  title="ECO4 Covered Measures (Typical Savings)"
                  items={[
                    {
                      improvement: 'Cavity wall insulation',
                      lowEstimate: 0,
                      highEstimate: 0,
                      notes: 'Usually 100% free. Worth £800-£1,500.',
                    },
                    {
                      improvement: 'Loft insulation',
                      lowEstimate: 0,
                      highEstimate: 0,
                      notes: 'Usually 100% free. Worth £400-£600.',
                    },
                    {
                      improvement: 'Room-in-roof insulation',
                      lowEstimate: 0,
                      highEstimate: 0,
                      notes: 'Usually 100% free. Worth £1,500-£3,000.',
                    },
                    {
                      improvement: 'Internal solid wall insulation',
                      lowEstimate: 0,
                      highEstimate: 2000,
                      notes: 'Often heavily subsidised. Worth £8,000-£14,000.',
                    },
                    {
                      improvement: 'External solid wall insulation',
                      lowEstimate: 0,
                      highEstimate: 3000,
                      notes: 'Often heavily subsidised. Worth £10,000-£20,000.',
                    },
                    {
                      improvement: 'First-time central heating',
                      lowEstimate: 0,
                      highEstimate: 500,
                      notes: 'For properties without existing heating system.',
                    },
                    {
                      improvement: 'Boiler replacement',
                      lowEstimate: 0,
                      highEstimate: 500,
                      notes: 'When existing boiler is broken or inefficient.',
                    },
                    {
                      improvement: 'Air source heat pump',
                      lowEstimate: 0,
                      highEstimate: 2000,
                      notes: 'Increasingly available through ECO4.',
                    },
                  ]}
                  footerNote="Zero cost means typically fully funded. Contribution required for some measures on some properties."
                />

                <WarningBox title="Measure Selection">
                  <p>
                    ECO installers will assess your property and recommend appropriate measures. You cannot simply choose what you want. Measures must be suitable for the property and deliver genuine carbon savings. Installers are incentivised to maximise carbon reduction, so they will typically recommend all viable improvements.
                  </p>
                </WarningBox>
              </section>

              {/* How to Apply */}
              <section id="how-to-apply" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">How to Apply</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    There are two main routes to accessing ECO4 funding: direct application through an ECO installer, or referral through your local authority&apos;s LA Flex scheme.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                    <h4 className="font-semibold text-primary-800 mb-4">Route 1: Direct Application (Tenant on Benefits)</h4>
                    <ol className="space-y-3 text-sm text-primary-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">1</span>
                        <div>
                          <strong>Confirm tenant eligibility</strong>
                          <p className="text-primary-600">Ask tenant to confirm they receive a qualifying benefit</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">2</span>
                        <div>
                          <strong>Find ECO installers</strong>
                          <p className="text-primary-600">Search for TrustMark registered ECO installers in your area</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">3</span>
                        <div>
                          <strong>Request assessment</strong>
                          <p className="text-primary-600">Installer will survey the property and confirm eligible measures</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">4</span>
                        <div>
                          <strong>Provide documentation</strong>
                          <p className="text-primary-600">Tenant provides benefit evidence, landlord provides ownership proof</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">5</span>
                        <div>
                          <strong>Works carried out</strong>
                          <p className="text-primary-600">Installer schedules and completes work, typically within 4-8 weeks</p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-6">
                    <h4 className="font-semibold text-accent-800 mb-4">Route 2: LA Flex Referral</h4>
                    <ol className="space-y-3 text-sm text-accent-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-200 text-accent-800 flex items-center justify-center font-bold text-xs">1</span>
                        <div>
                          <strong>Contact local authority</strong>
                          <p className="text-accent-600">Find your council&apos;s energy efficiency or housing team</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-200 text-accent-800 flex items-center justify-center font-bold text-xs">2</span>
                        <div>
                          <strong>Complete LA Flex application</strong>
                          <p className="text-accent-600">Provide household income and vulnerability information</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-200 text-accent-800 flex items-center justify-center font-bold text-xs">3</span>
                        <div>
                          <strong>Council issues declaration</strong>
                          <p className="text-accent-600">If eligible, council provides ECO4 eligibility declaration</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-200 text-accent-800 flex items-center justify-center font-bold text-xs">4</span>
                        <div>
                          <strong>Matched with installer</strong>
                          <p className="text-accent-600">Council may refer you or you can approach installers with declaration</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Working with Installers */}
              <section id="working-with-installers" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Working with ECO Installers
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    ECO installers are commercial companies contracted by energy suppliers to deliver ECO measures. They are paid by the energy companies, which is why improvements can be free to you. However, quality varies, so choose carefully.
                  </p>
                </div>

                <TipBox title="Choosing a Good ECO Installer">
                  <ul className="space-y-2 text-sm">
                    <li><strong>TrustMark registered:</strong> All ECO installers must be TrustMark registered. Verify this.</li>
                    <li><strong>PAS 2030/2035 certified:</strong> Required for ECO4 installations.</li>
                    <li><strong>Check reviews:</strong> Look for reviews from other landlords who have used them.</li>
                    <li><strong>Get multiple quotes:</strong> Different installers may offer different measures or timescales.</li>
                    <li><strong>Warranty:</strong> Ensure work comes with appropriate guarantees (typically 25 years for insulation).</li>
                  </ul>
                </TipBox>

                <WarningBox title="Avoid ECO Scams">
                  <p className="mb-2">
                    Unfortunately, some companies misrepresent themselves as ECO installers or provide poor quality work. Red flags include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Cold calling or door-to-door sales with pressure tactics</li>
                    <li>Asking for upfront payments for &quot;free&quot; work</li>
                    <li>Unable to provide TrustMark registration details</li>
                    <li>Rushing you to sign documents without reading them</li>
                    <li>Unwilling to provide written quotes and guarantees</li>
                  </ul>
                </WarningBox>
              </section>

              {/* ECO4 vs Other Schemes */}
              <section id="eco4-vs-other-schemes" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  ECO4 vs Other Schemes
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Several government schemes offer funding for energy efficiency improvements. Here is how ECO4 compares to other options available to landlords.
                  </p>
                </div>

                <div className="overflow-hidden rounded-lg border border-neutral-200 mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-50 text-left">
                          <th className="px-4 py-3 font-semibold text-primary-800">Scheme</th>
                          <th className="px-4 py-3 font-semibold text-primary-800">Funding Level</th>
                          <th className="px-4 py-3 font-semibold text-primary-800">Key Requirement</th>
                          <th className="px-4 py-3 font-semibold text-primary-800">Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-neutral-100 bg-success-50">
                          <td className="px-4 py-3 font-medium">ECO4</td>
                          <td className="px-4 py-3">Up to 100% free</td>
                          <td className="px-4 py-3">Tenant on benefits</td>
                          <td className="px-4 py-3">Insulation, heating</td>
                        </tr>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Boiler Upgrade Scheme</td>
                          <td className="px-4 py-3">Up to {formatCurrency(7500)}</td>
                          <td className="px-4 py-3">Valid EPC, replacing fossil fuel</td>
                          <td className="px-4 py-3">Heat pumps</td>
                        </tr>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Warm Homes Local Grant</td>
                          <td className="px-4 py-3">Up to {formatCurrency(30000)}</td>
                          <td className="px-4 py-3">Tenant income under {formatCurrency(36000)}</td>
                          <td className="px-4 py-3">Comprehensive upgrades</td>
                        </tr>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Great British Insulation</td>
                          <td className="px-4 py-3">Subsidised</td>
                          <td className="px-4 py-3">EPC D or below in council tax A-D</td>
                          <td className="px-4 py-3">Cavity, loft insulation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <InfoBox title="Combining Schemes">
                  <p>
                    In some cases, you can combine funding from multiple schemes for the same property. For example, you might use ECO4 for insulation and the Boiler Upgrade Scheme for a heat pump. Check eligibility for each scheme and discuss options with installers.
                  </p>
                </InfoBox>
              </section>

              {/* Deadline and ECO5 */}
              <section id="deadline-extension" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Deadline and ECO5
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    ECO4 is currently scheduled to run until March 2026. However, a successor scheme (ECO5) is expected to follow, likely with similar or expanded eligibility criteria.
                  </p>
                </div>

                <KeyFactBox title="Important Dates" icon={Clock}>
                  <ul className="space-y-2 text-sm">
                    <li><strong>ECO4 Deadline:</strong> 31 March 2026</li>
                    <li><strong>ECO5 Expected:</strong> April 2026 onwards (subject to government announcement)</li>
                    <li><strong>Application Lead Time:</strong> Allow 2-3 months from first contact to completed work</li>
                  </ul>
                </KeyFactBox>

                <WarningBox title="Do Not Wait">
                  <p>
                    With ECO4 ending in March 2026 and installer capacity limited, do not delay applications. The closer to the deadline, the harder it will be to get work scheduled. Apply now while installer availability is good.
                  </p>
                </WarningBox>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Your Next Steps</h2>

                <ol className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Check tenant eligibility</h4>
                      <p className="text-neutral-600 text-sm">
                        Ask your tenant if they receive any qualifying benefits, or whether they would consent to an LA Flex application.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Check your property&apos;s EPC</h4>
                      <p className="text-neutral-600 text-sm">
                        ECO4 requires EPC D, E, F, or G. If you do not have a current EPC, get one.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Contact ECO installers or your local authority</h4>
                      <p className="text-neutral-600 text-sm">
                        Start the application process. Get quotes from multiple TrustMark registered installers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Get work scheduled before March 2026</h4>
                      <p className="text-neutral-600 text-sm">
                        Allow adequate time for assessment, approval, and installation.
                      </p>
                    </div>
                  </li>
                </ol>

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-shrink-0">
                      <Calculator className="h-12 w-12 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 text-lg mb-1">
                        Calculate Your Total Upgrade Costs
                      </h3>
                      <p className="text-neutral-600">
                        See how ECO4 funding could reduce your out-of-pocket costs for EPC compliance.
                      </p>
                    </div>
                    <Link href="/tools/cost-calculator">
                      <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                        Use Calculator
                      </Button>
                    </Link>
                  </div>
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
                    documentTitle="ECO4 guidance"
                    url="https://www.gov.uk/guidance/apply-for-the-energy-company-obligation-eco4-scheme"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="TrustMark"
                    documentTitle="Find a quality tradesperson"
                    url="https://www.trustmark.org.uk/"
                    accessedDate="January 2026"
                  />
                </div>
              </section>

              {/* Related Content */}
              <section className="mt-12">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <RelatedContentCard
                    title="Boiler Upgrade Scheme"
                    excerpt="Up to £7,500 towards heat pump installation."
                    href="/costs/boiler-upgrade-scheme"
                    category="Funding"
                    readingTime={10}
                  />
                  <RelatedContentCard
                    title="Warm Homes Local Grant"
                    excerpt="Up to £30,000 for comprehensive upgrades."
                    href="/costs/warm-homes-local-grant"
                    category="Funding"
                    readingTime={10}
                  />
                  <RelatedContentCard
                    title="E to C Upgrade Costs"
                    excerpt="Tackling the hardest EPC improvements."
                    href="/costs/e-to-c-upgrade"
                    category="Costs"
                    readingTime={14}
                  />
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <Sidebar tableOfContents={tableOfContents} relatedArticles={relatedArticles} />
          </div>
        </Container>
      </Section>
    </>
  );
}
