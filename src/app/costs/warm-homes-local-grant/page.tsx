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
  Building,
  MapPin,
  FileText,
  Users,
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
  title: 'Warm Homes Local Grant for Landlords | Up to £30,000 | GreenLord',
  description:
    'Complete guide to the new Warm Homes Local Grant for UK landlords. Up to £30,000 funding for first property, 50% contribution for additional properties. Eligibility, application process, and landlord obligations.',
  openGraph: {
    title: 'Warm Homes Local Grant for Landlords: Up to £30,000',
    description:
      'New 2026 scheme offering up to £30,000 for energy efficiency and low carbon heating. Complete guide for landlords.',
    type: 'article',
  },
};

const tableOfContents = [
  { id: 'scheme-overview', title: 'Scheme Overview', level: 2 },
  { id: 'funding-amounts', title: 'Funding Amounts', level: 2 },
  { id: 'eligibility-requirements', title: 'Eligibility Requirements', level: 2 },
  { id: 'tenant-income-threshold', title: 'Tenant Income Threshold', level: 2 },
  { id: 'what-is-covered', title: 'What Is Covered', level: 2 },
  { id: 'how-to-apply', title: 'How to Apply', level: 2 },
  { id: 'participating-councils', title: 'Participating Councils', level: 2 },
  { id: 'landlord-obligations', title: 'Landlord Obligations', level: 2 },
  { id: 'comparison-eco4', title: 'Comparison with ECO4', level: 2 },
  { id: 'next-steps', title: 'Your Next Steps', level: 2 },
];

const relatedArticles = [
  {
    title: 'ECO4 for Landlords',
    href: '/costs/eco4-landlords',
    description: 'Alternative free insulation route.',
  },
  {
    title: 'Boiler Upgrade Scheme',
    href: '/costs/boiler-upgrade-scheme',
    description: 'Heat pump grants up to £7,500.',
  },
  {
    title: 'E to C Upgrade Costs',
    href: '/costs/e-to-c-upgrade',
    description: 'Major upgrade cost planning.',
  },
];

export default function WarmHomesLocalGrantPage() {
  return (
    <>
      <PageHeader
        title="Warm Homes: Local Grant for Landlords"
        subtitle="The new Warm Homes: Local Grant offers up to £30,000 for energy efficiency improvements. This is the most generous funding scheme available to UK landlords."
        breadcrumbs={[
          { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
          {
            name: 'Warm Homes Local Grant',
            url: `${SITE_CONFIG.url}/costs/warm-homes-local-grant`,
          },
        ]}
      >
        <div className="flex items-center gap-2 text-success-700 font-medium">
          <PoundSterling className="h-5 w-5" />
          <span>Up to {formatCurrency(30000)} funding</span>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1 max-w-4xl">
              <ArticleHeader
                title="Warm Homes: Local Grant - Complete Guide for Landlords"
                publishedDate="2026-01-21"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={12}
                subtitle="The new flagship scheme offering up to £30,000 for comprehensive energy efficiency upgrades"
              />

              {/* Hero Image */}
              <GeneratedImage
                imageId="warm-homes-local-grant-hero"
                alt="Comprehensive energy efficiency work being carried out on a British terraced house"
                description="A Victorian terraced house undergoing major energy efficiency upgrades funded by the Warm Homes Local Grant. Scaffolding covers the front facade where external wall insulation is being fitted, while a delivery van unloads an air source heat pump unit. Workers in safety gear coordinate the multiple improvement works happening simultaneously. The neighbouring properties show the before state, highlighting the transformation underway."
                width={1200}
                height={630}
                instructions={[
                  'Major refurbishment work in progress on period property',
                  'Multiple trades visible - scaffolding, insulation, heating equipment',
                  'British terraced street setting with neighbouring homes visible',
                ]}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="lead text-xl text-neutral-700">
                  Launched in January 2026 as part of the government&apos;s Warm Homes Plan, the Warm Homes: Local Grant is the most generous funding scheme ever offered to UK private landlords. With up to {formatCurrency(30000)} available for the first qualifying property, this scheme can fully fund comprehensive energy efficiency upgrades including insulation, heating, and low carbon technologies.
                </p>

                <p>
                  The scheme is delivered through local authorities, making it essential to check whether your council is participating and what their specific eligibility criteria are. This guide covers the national framework, but local variations may apply.
                </p>
              </div>

              <KeyFactBox title="NEW: Warm Homes: Local Grant at a Glance" icon={PoundSterling}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-600">First Property Funding</p>
                    <p className="font-semibold text-2xl text-success-700">Up to {formatCurrency(30000)}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Landlord Contribution</p>
                    <p className="font-semibold text-lg">None (first property)</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Additional Properties</p>
                    <p className="font-semibold">50% contribution required</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Tenant Income Threshold</p>
                    <p className="font-semibold">Below {formatCurrency(36000)}</p>
                  </div>
                </div>
              </KeyFactBox>

              {/* Scheme Overview */}
              <section id="scheme-overview" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Scheme Overview</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The Warm Homes: Local Grant is part of the government&apos;s Warm Homes Plan announced in October 2025. It replaces and significantly expands the previous Local Authority Delivery (LAD) scheme, with greatly increased funding and broader eligibility.
                  </p>

                  <p>
                    The scheme has two main components:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <h4 className="font-semibold text-success-800 mb-3">Energy Performance Package</h4>
                    <p className="text-2xl font-bold text-success-700 mb-2">Up to {formatCurrency(15000)}</p>
                    <p className="text-sm text-success-700">
                      Covers insulation (loft, cavity, solid wall, floor), draught proofing, and other fabric improvements to reduce heat loss and improve EPC rating.
                    </p>
                  </div>

                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-5">
                    <h4 className="font-semibold text-accent-800 mb-3">Low Carbon Heating Package</h4>
                    <p className="text-2xl font-bold text-accent-700 mb-2">Up to {formatCurrency(15000)}</p>
                    <p className="text-sm text-accent-700">
                      Covers heat pump installation (air source, ground source), solar thermal, and associated work like radiator upgrades or hot water cylinders.
                    </p>
                  </div>
                </div>

                <InfoBox title="Combined Total">
                  <p>
                    When both packages are applicable, the maximum total funding is {formatCurrency(30000)} per property. This can comprehensively upgrade even the least efficient properties, potentially taking them from E or F rating all the way to B or C.
                  </p>
                </InfoBox>
              </section>

              {/* Funding Amounts */}
              <section id="funding-amounts" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Funding Amounts</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The funding structure differs depending on whether it is your first qualifying property or additional properties in your portfolio.
                  </p>
                </div>

                <CostTable
                  title="Warm Homes: Local Grant Funding Structure"
                  items={[
                    {
                      improvement: 'First property - Energy Performance',
                      lowEstimate: 0,
                      highEstimate: 15000,
                      notes: '100% funded. No landlord contribution required.',
                    },
                    {
                      improvement: 'First property - Low Carbon Heating',
                      lowEstimate: 0,
                      highEstimate: 15000,
                      notes: '100% funded. No landlord contribution required.',
                    },
                    {
                      improvement: 'Additional properties - Energy Performance',
                      lowEstimate: 0,
                      highEstimate: 7500,
                      notes: 'Up to 50% funded. Landlord pays remaining 50%.',
                    },
                    {
                      improvement: 'Additional properties - Low Carbon Heating',
                      lowEstimate: 0,
                      highEstimate: 7500,
                      notes: 'Up to 50% funded. Landlord pays remaining 50%.',
                    },
                  ]}
                  footerNote="Actual funding depends on property needs and local authority allocation."
                />

                <div className="bg-warning-50 border border-warning-200 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold text-warning-800 mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Important: First Property Definition
                  </h4>
                  <p className="text-sm text-warning-700 mb-2">
                    &quot;First property&quot; means the first property you upgrade through this specific scheme, not your first rental property overall. If you own multiple properties, the first one you apply for gets 100% funding, while subsequent applications require 50% contribution.
                  </p>
                  <p className="text-sm text-warning-700">
                    <strong>Strategy tip:</strong> Apply for your most expensive-to-upgrade property first to maximise the benefit of 100% funding.
                  </p>
                </div>

                <TipBox title="Prioritise Your Most Challenging Property">
                  <p>
                    If you have a Victorian terrace needing solid wall insulation ({formatCurrency(12000)}+) and a 1960s semi needing cavity wall ({formatCurrency(1500)}), apply for the Victorian first. The 100% funding for first property makes the biggest difference on expensive upgrades.
                  </p>
                </TipBox>
              </section>

              {/* Eligibility Requirements */}
              <section id="eligibility-requirements" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Eligibility Requirements</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    To qualify for the Warm Homes: Local Grant, your property and tenant must meet certain criteria. Unlike ECO4, this scheme does not require the tenant to be on specific benefits, but there is an income threshold.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <h4 className="font-semibold text-success-800 mb-3 flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Property Requirements
                    </h4>
                    <ul className="space-y-2 text-sm text-success-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>EPC rating of D, E, F, or G</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Property in England (separate schemes for Wales, Scotland)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Privately rented (not social housing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Council tax band A-D (some councils include E)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>In a participating local authority area</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-5">
                    <h4 className="font-semibold text-accent-800 mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Tenant Requirements
                    </h4>
                    <ul className="space-y-2 text-sm text-accent-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Household income below {formatCurrency(36000)} gross</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Tenant must consent to works and assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Cannot be a family member of the landlord</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>OR property is in fuel poverty (high energy costs relative to income)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <WarningBox title="Local Authority Variations">
                  <p>
                    While the national framework sets baseline criteria, individual councils may have additional requirements or different income thresholds. Always check directly with your local authority for their specific eligibility criteria before assuming you qualify.
                  </p>
                </WarningBox>
              </section>

              {/* Tenant Income Threshold */}
              <section id="tenant-income-threshold" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Tenant Income Threshold</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The {formatCurrency(36000)} gross household income threshold is more generous than many other schemes. This means tenants do not need to be on benefits to qualify, just earning under the threshold.
                  </p>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-primary-800 mb-3">Understanding the Income Threshold</h4>
                  <ul className="space-y-3 text-sm text-primary-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Gross household income:</strong> Total income before tax for all adults in the household combined.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>{formatCurrency(36000)} covers many tenants:</strong> A couple each earning {formatCurrency(18000)} qualifies. A single person earning {formatCurrency(35000)} qualifies.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>No benefit requirement:</strong> Unlike ECO4, tenants do not need to be receiving benefits, just under the income threshold.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Evidence required:</strong> Tenants will need to provide evidence of income (payslips, tax return, benefit statements).
                      </div>
                    </li>
                  </ul>
                </div>

                <TipBox title="Discussing Income with Tenants">
                  <p>
                    Asking about tenant income can feel awkward. Frame it positively: &quot;There&apos;s a government scheme that could fund major improvements to make your home warmer and cheaper to heat. To check if we qualify, I need to know if the total household income is under {formatCurrency(36000)}. This could mean new insulation, better heating, and lower energy bills for you.&quot;
                  </p>
                </TipBox>
              </section>

              {/* What Is Covered */}
              <section id="what-is-covered" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What Is Covered</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The Warm Homes: Local Grant covers a comprehensive range of energy efficiency measures, split into the Energy Performance package and the Low Carbon Heating package.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-6">
                    <h4 className="font-semibold text-success-800 mb-4">
                      Energy Performance Package (up to {formatCurrency(15000)})
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-success-700">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Cavity wall insulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Internal solid wall insulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>External solid wall insulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Loft insulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Room-in-roof insulation</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Floor insulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Draught proofing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Window and door upgrades (where needed for insulation)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Smart heating controls</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-6">
                    <h4 className="font-semibold text-accent-800 mb-4">
                      Low Carbon Heating Package (up to {formatCurrency(15000)})
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-accent-700">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Air source heat pump</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Ground source heat pump</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Solar thermal panels</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Radiator upgrades (when needed for heat pump)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Hot water cylinder (when needed)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Underfloor heating (in some cases)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <InfoBox title="Fabric First Approach">
                  <p>
                    The scheme prioritises a &quot;fabric first&quot; approach. This means insulation and draught proofing improvements should be completed before or alongside low carbon heating installation. This ensures the heating system is appropriately sized and operates efficiently.
                  </p>
                </InfoBox>
              </section>

              {/* How to Apply */}
              <section id="how-to-apply" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">How to Apply</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The Warm Homes: Local Grant is administered through local authorities, not directly through central government. The application process varies by council, but generally follows this structure.
                  </p>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-primary-800 mb-4">Application Process</h4>
                  <ol className="space-y-4 text-sm text-primary-700">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">1</span>
                      <div>
                        <strong>Check your local authority is participating</strong>
                        <p className="text-primary-600">Not all councils have signed up to deliver the scheme yet. Check your council&apos;s website or contact them directly.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">2</span>
                      <div>
                        <strong>Confirm eligibility</strong>
                        <p className="text-primary-600">Check EPC rating (D or below), tenant income (under {formatCurrency(36000)}), and council tax band.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">3</span>
                      <div>
                        <strong>Submit application through council</strong>
                        <p className="text-primary-600">Complete application form (usually online) with property details, tenant consent, and income evidence.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">4</span>
                      <div>
                        <strong>Property assessment</strong>
                        <p className="text-primary-600">Council-appointed assessor visits property to determine suitable measures.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">5</span>
                      <div>
                        <strong>Receive improvement plan</strong>
                        <p className="text-primary-600">Council provides recommended measures and funding allocation.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">6</span>
                      <div>
                        <strong>Works carried out</strong>
                        <p className="text-primary-600">Council-approved installers complete the work. Quality checked on completion.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <TipBox title="Get Your Documents Ready">
                  <p>
                    Before applying, gather: current EPC certificate, proof of property ownership, tenant consent form (council will provide), and tenant income evidence (payslips or benefit statements). Having these ready speeds up the application process.
                  </p>
                </TipBox>
              </section>

              {/* Participating Councils */}
              <section id="participating-councils" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Participating Councils</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The Warm Homes: Local Grant is being rolled out progressively across England. Not all local authorities have signed up yet, and those that have may have different timescales for accepting applications.
                  </p>
                </div>

                <div className="bg-warning-50 border border-warning-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-warning-800 mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Finding Your Local Scheme
                  </h4>
                  <p className="text-sm text-warning-700 mb-4">
                    As the scheme is new (launched January 2026), the list of participating councils is still growing. To check your area:
                  </p>
                  <ol className="space-y-2 text-sm text-warning-700">
                    <li>1. Visit your local council website and search for &quot;Warm Homes Local Grant&quot; or &quot;energy efficiency grants&quot;</li>
                    <li>2. Call your council&apos;s housing or environmental health department</li>
                    <li>3. Check the GOV.UK Warm Homes Plan page for participating authority lists</li>
                    <li>4. Contact your local Citizens Advice for guidance</li>
                  </ol>
                </div>

                <InfoBox title="If Your Council Is Not Participating">
                  <p>
                    If your local authority has not yet signed up for the scheme, consider ECO4 as an alternative (if tenant is on benefits) or the Boiler Upgrade Scheme (for heat pumps). More councils are expected to join throughout 2026 and 2027, so check back periodically.
                  </p>
                </InfoBox>
              </section>

              {/* Landlord Obligations */}
              <section id="landlord-obligations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Landlord Obligations</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Accepting Warm Homes: Local Grant funding comes with certain obligations that landlords must agree to. These are designed to ensure the improvements benefit tenants rather than simply increasing property value at public expense.
                  </p>
                </div>

                <WarningBox title="Key Landlord Obligations" critical>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>No rent increase:</strong> You cannot increase rent as a direct result of the improvements for a specified period (typically 5 years).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Maintain tenancy:</strong> You must not evict the tenant to circumvent the rent restriction.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Property access:</strong> You must allow assessors and installers access to complete the work.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Maintain improvements:</strong> You must properly maintain the installed measures.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Clawback clause:</strong> If you sell the property within a specified period, you may need to repay a portion of the grant.
                      </div>
                    </li>
                  </ul>
                </WarningBox>

                <TipBox title="The Rent Restriction in Context">
                  <p>
                    The rent restriction prevents immediate rent increases due to improvements. However, market rate increases and inflation adjustments may still be permissible depending on your tenancy agreement. The restriction primarily prevents charging tenants extra specifically because the property is now better insulated. Consult the specific terms provided by your local authority.
                  </p>
                </TipBox>
              </section>

              {/* Comparison with ECO4 */}
              <section id="comparison-eco4" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Comparison with ECO4</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Both the Warm Homes: Local Grant and ECO4 can fund similar improvements. Here is how they compare:
                  </p>
                </div>

                <div className="overflow-hidden rounded-lg border border-neutral-200 mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-50 text-left">
                          <th className="px-4 py-3 font-semibold text-primary-800">Feature</th>
                          <th className="px-4 py-3 font-semibold text-primary-800">Warm Homes: Local Grant</th>
                          <th className="px-4 py-3 font-semibold text-primary-800">ECO4</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Maximum funding</td>
                          <td className="px-4 py-3">Up to {formatCurrency(30000)}</td>
                          <td className="px-4 py-3">Varies (often {formatCurrency(10000)}-{formatCurrency(15000)})</td>
                        </tr>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Tenant requirement</td>
                          <td className="px-4 py-3">Income under {formatCurrency(36000)}</td>
                          <td className="px-4 py-3">Receiving qualifying benefits</td>
                        </tr>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">EPC requirement</td>
                          <td className="px-4 py-3">D, E, F, or G</td>
                          <td className="px-4 py-3">D, E, F, or G</td>
                        </tr>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Low carbon heating</td>
                          <td className="px-4 py-3">Yes, up to {formatCurrency(15000)}</td>
                          <td className="px-4 py-3">Sometimes, varies by installer</td>
                        </tr>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Rent restriction</td>
                          <td className="px-4 py-3">Yes</td>
                          <td className="px-4 py-3">Not typically</td>
                        </tr>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Application route</td>
                          <td className="px-4 py-3">Local authority</td>
                          <td className="px-4 py-3">ECO installer or LA Flex</td>
                        </tr>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Availability</td>
                          <td className="px-4 py-3">Participating councils only</td>
                          <td className="px-4 py-3">Nationwide</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <KeyFactBox title="Which Scheme to Choose?" icon={FileText}>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Choose Warm Homes: Local Grant if:</strong> Your council participates, tenant earns under {formatCurrency(36000)}, and you want comprehensive upgrades including heat pump</li>
                    <li><strong>Choose ECO4 if:</strong> Tenant is on benefits, your council does not participate in WHLG, or you prefer no rent restrictions</li>
                    <li><strong>Consider both:</strong> In some cases, you may be able to use different schemes for different measures</li>
                  </ul>
                </KeyFactBox>
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
                      <h4 className="font-semibold text-neutral-800">Check if your council participates</h4>
                      <p className="text-neutral-600 text-sm">
                        Contact your local authority to confirm they are delivering the Warm Homes: Local Grant.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Discuss with your tenant</h4>
                      <p className="text-neutral-600 text-sm">
                        Explain the scheme benefits and check if their household income is under {formatCurrency(36000)}.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Check your EPC</h4>
                      <p className="text-neutral-600 text-sm">
                        Confirm your property is rated D or below. Get a new EPC if needed.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Apply through your council</h4>
                      <p className="text-neutral-600 text-sm">
                        Submit application with required documentation and await assessment.
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
                        Calculate Your Potential Costs and Savings
                      </h3>
                      <p className="text-neutral-600">
                        See how the Warm Homes: Local Grant could fund your compliance upgrades.
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
                    sourceName="GOV.UK"
                    documentTitle="Warm Homes Plan"
                    url="https://www.gov.uk/government/publications/warm-homes-plan"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Warm Homes: Local Grant guidance"
                    url="https://www.gov.uk/guidance/warm-homes-local-grant"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Department for Energy Security and Net Zero"
                    documentTitle="Warm Homes Plan announcement"
                    url="https://www.gov.uk/government/news/warm-homes-plan"
                    accessedDate="January 2026"
                  />
                </div>
              </section>

              {/* Related Content */}
              <section className="mt-12">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <RelatedContentCard
                    title="ECO4 for Landlords"
                    excerpt="Alternative free insulation route for tenants on benefits."
                    href="/costs/eco4-landlords"
                    category="Funding"
                    readingTime={12}
                  />
                  <RelatedContentCard
                    title="Boiler Upgrade Scheme"
                    excerpt="Up to £7,500 towards heat pump installation."
                    href="/costs/boiler-upgrade-scheme"
                    category="Funding"
                    readingTime={12}
                  />
                  <RelatedContentCard
                    title="E to C Upgrade Costs"
                    excerpt="Full cost breakdown for major EPC improvements."
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
