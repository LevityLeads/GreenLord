import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  PoundSterling,
  Home,
  Building2,
  MapPin,
  Clock,
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
import { ImagePlaceholder } from '@/components/content/ImagePlaceholder';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { EPCRatingBadge } from '@/components/ui/EPCRatingBadge';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'E to C EPC Upgrade Costs for Landlords | Complete Guide | GreenLord',
  description:
    'Comprehensive guide to upgrading rental properties from EPC E to C. Realistic costs by property type, cost-effective improvement pathways, and when cost cap exemptions apply.',
  openGraph: {
    title: 'E to C EPC Upgrade Costs for Landlords',
    description:
      'The biggest EPC jump for most rental properties. Realistic costs, property comparisons, and proven upgrade pathways from E to C.',
    type: 'article',
  },
};

const tableOfContents = [
  { id: 'why-e-to-c-biggest-jump', title: 'Why E to C is the Biggest Jump', level: 2 },
  { id: 'typical-e-rated-profiles', title: 'Typical E-Rated Property Profiles', level: 2 },
  { id: 'costs-by-property-type', title: 'Costs by Property Type', level: 2 },
  { id: 'victorian-approach', title: 'Victorian Terrace Approach', level: 3 },
  { id: '1960s-approach', title: '1960s Property Approach', level: 3 },
  { id: 'flat-approach', title: 'Flat Approach', level: 3 },
  { id: 'cost-effective-pathways', title: 'Cost-Effective Pathways', level: 2 },
  { id: 'cost-cap-exemption', title: 'When Cost Cap Applies', level: 2 },
  { id: 'regional-variations', title: 'Regional Cost Variations', level: 2 },
  { id: 'case-studies', title: 'Real-World Case Studies', level: 2 },
  { id: 'next-steps', title: 'Your Next Steps', level: 2 },
];

const relatedArticles = [
  {
    title: 'D to C Upgrade Costs',
    href: '/costs/d-to-c-upgrade',
    description: 'Easier upgrade path for D-rated properties.',
  },
  {
    title: 'Cost Cap and Exemptions',
    href: '/regulations/cost-cap-exemptions',
    description: 'Understanding the £10,000 spending cap.',
  },
  {
    title: 'Victorian Terrace Guide',
    href: '/property-types/victorian-terrace',
    description: 'Detailed guidance for pre-1919 properties.',
  },
];

export default function EToCUpgradePage() {
  return (
    <>
      <PageHeader
        title="E to C EPC Upgrade Costs"
        subtitle="The E to C jump is the most challenging upgrade path for landlords. Here's what it realistically costs and how to approach it strategically."
        breadcrumbs={[
          { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
          { name: 'E to C Upgrade', url: `${SITE_CONFIG.url}/costs/e-to-c-upgrade` },
        ]}
      >
        <div className="flex items-center gap-3">
          <EPCRatingBadge rating="E" size="md" />
          <ArrowRight className="h-5 w-5 text-neutral-400" />
          <EPCRatingBadge rating="C" size="md" />
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1 max-w-4xl">
              <ArticleHeader
                title="E to C EPC Upgrade: The Biggest Challenge for UK Landlords"
                publishedDate="2025-11-15"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={14}
                subtitle="Why E-rated properties require the largest investment and how to plan your upgrade strategically"
              />

              {/* Hero Image */}
              <ImagePlaceholder
                alt="EPC certificate showing E rating with upgrade pathway to C"
                description="An EPC certificate clearly showing an E rating (around 45 points) with visual indication of the significant journey to C. Could show the EPC scale with E highlighted in orange and the target C in green, demonstrating the substantial points gap."
                width={1200}
                height={630}
                instructions={[
                  'Focus on the EPC rating scale showing E band',
                  'Show the 25+ point gap to reach C clearly',
                  'Include visual arrows or pathway indicators',
                  'Professional, informative style',
                ]}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="lead text-xl text-neutral-700">
                  If your rental property currently has an EPC rating of E, you face the most significant upgrade challenge among properties that are currently legal to let. The jump from E to C requires gaining 15-30 EPC points, which often means substantial investment in insulation, heating, or both.
                </p>

                <p>
                  The good news is that with careful planning, many E-rated properties can reach C for {formatCurrency(5000)} to {formatCurrency(15000)}. Properties with solid walls may face higher costs, but the {formatCurrency(KEY_DATES.costCap)} cost cap provides a safety net. This guide breaks down realistic costs by property type and shows you the most cost-effective pathways.
                </p>
              </div>

              <KeyFactBox title="E to C: The Numbers" icon={TrendingUp}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-600">E Rating Range</p>
                    <p className="font-semibold text-lg">39-54 points</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">C Rating Minimum</p>
                    <p className="font-semibold text-lg">69 points</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Points Needed</p>
                    <p className="font-semibold text-lg text-warning-700">15-30 points</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Typical Cost Range</p>
                    <p className="font-semibold text-lg">{formatCurrency(5000)} - {formatCurrency(15000)}</p>
                  </div>
                </div>
              </KeyFactBox>

              {/* Why E to C is Biggest Jump */}
              <section id="why-e-to-c-biggest-jump" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Why E to C is the Biggest Jump for Most Properties
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Properties rated E face a unique challenge compared to D-rated properties. While D to C typically requires 1-13 points (often achievable with quick wins), E to C requires a minimum of 15 points and often 25 or more. This crosses a critical threshold where low-cost measures alone are rarely sufficient.
                  </p>
                </div>

                <WarningBox title="The Quick Wins Limit">
                  <p className="mb-2">
                    Low-cost improvements (loft insulation, draught proofing, smart controls, LED lighting) typically provide a combined maximum of 10-15 EPC points. For E-rated properties needing 20+ points, this means:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>At least one major improvement is usually required</li>
                    <li>Wall or floor insulation often becomes necessary</li>
                    <li>Heating system upgrades may be needed</li>
                    <li>Multiple medium-cost measures must be combined</li>
                  </ul>
                </WarningBox>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-danger-50 border border-danger-200 rounded-lg p-5">
                    <h4 className="font-semibold text-danger-800 mb-3">Why E-Rated Properties Struggle</h4>
                    <ul className="space-y-2 text-sm text-danger-700">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Often have solid walls (no easy cavity fill option)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Typically older properties with poor original insulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>May have single glazing or poor-quality double glazing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Heating systems often older and less efficient</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <h4 className="font-semibold text-success-800 mb-3">The Good News</h4>
                    <ul className="space-y-2 text-sm text-success-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Many E properties have unfilled cavity walls (big easy win)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Cost cap exemption provides spending limit protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>ECO4 and other grants can significantly reduce costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Each improvement has larger impact on E properties</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Typical E-Rated Property Profiles */}
              <section id="typical-e-rated-profiles" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Typical E-Rated Property Profiles
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    E-rated properties typically fall into specific categories. Understanding your property type helps predict both the likely cost and the best improvement strategy.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <Home className="h-8 w-8 text-primary-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Pre-1919 Victorian/Edwardian</h4>
                        <p className="text-sm text-neutral-600 mb-2">
                          Solid brick walls, single glazed sash windows, uninsulated loft, suspended timber floors. Often scores 35-45 EPC points.
                        </p>
                        <p className="text-sm font-medium text-primary-700">
                          Typical upgrade cost: {formatCurrency(8000)} - {formatCurrency(20000)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <Home className="h-8 w-8 text-primary-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">1930s-1960s with Unfilled Cavities</h4>
                        <p className="text-sm text-neutral-600 mb-2">
                          Cavity walls never insulated, thin loft insulation, old boiler. Often scores 42-52 EPC points. Usually the easiest E properties to upgrade.
                        </p>
                        <p className="text-sm font-medium text-primary-700">
                          Typical upgrade cost: {formatCurrency(3000)} - {formatCurrency(8000)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <Building2 className="h-8 w-8 text-primary-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Converted Flats</h4>
                        <p className="text-sm text-neutral-600 mb-2">
                          Often in Victorian houses, limited improvement options due to shared structure, may have electric heating. Often scores 38-50 EPC points.
                        </p>
                        <p className="text-sm font-medium text-primary-700">
                          Typical upgrade cost: {formatCurrency(3000)} - {formatCurrency(10000)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <Home className="h-8 w-8 text-primary-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Electrically Heated Properties</h4>
                        <p className="text-sm text-neutral-600 mb-2">
                          Any age property with electric storage heaters or panel heaters. Electric heating inherently scores poorly on EPC. Often 40-52 points.
                        </p>
                        <p className="text-sm font-medium text-primary-700">
                          Typical upgrade cost: {formatCurrency(4000)} - {formatCurrency(12000)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Costs by Property Type */}
              <section id="costs-by-property-type" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  E to C Costs by Property Type
                </h2>

                <CostTable
                  title="Total Investment to Reach EPC C from E Rating"
                  items={[
                    {
                      improvement: 'Victorian Terrace (solid walls)',
                      lowEstimate: 8000,
                      highEstimate: 20000,
                      notes: 'Wall insulation often essential. Cost cap exemption likely.',
                    },
                    {
                      improvement: '1930s-1950s Semi (unfilled cavity)',
                      lowEstimate: 3000,
                      highEstimate: 8000,
                      notes: 'Cavity fill + loft + controls often sufficient.',
                    },
                    {
                      improvement: '1960s-1970s Property (unfilled cavity)',
                      lowEstimate: 2500,
                      highEstimate: 6000,
                      notes: 'Similar to 1930s-50s. Often easier due to simpler construction.',
                    },
                    {
                      improvement: 'Purpose-Built Flat',
                      lowEstimate: 2000,
                      highEstimate: 6000,
                      notes: 'Limited options but usually quicker wins available.',
                    },
                    {
                      improvement: 'Converted Flat (Victorian building)',
                      lowEstimate: 3000,
                      highEstimate: 12000,
                      notes: 'Shared walls/floors limit options. May need heating upgrade.',
                    },
                    {
                      improvement: 'Electrically Heated Property',
                      lowEstimate: 4000,
                      highEstimate: 12000,
                      notes: 'Consider heat pump if feasible. BUS grant can help.',
                    },
                  ]}
                  footerNote="Costs assume starting EPC of 42-50 (mid E rating). Lower starting points will cost more."
                />

                {/* Victorian Approach */}
                <section id="victorian-approach" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Victorian Terrace Approach
                  </h3>

                  <div className="bg-warning-50 border border-warning-200 rounded-lg p-6 mb-4">
                    <h4 className="font-semibold text-warning-800 mb-3">Challenge Profile</h4>
                    <p className="text-sm text-warning-700 mb-4">
                      Victorian terraces typically start at 35-45 EPC points and have solid walls. The lack of a cavity means wall insulation costs {formatCurrency(8000)} to {formatCurrency(14000)} for internal, or {formatCurrency(10000)} to {formatCurrency(20000)} for external.
                    </p>

                    <h4 className="font-semibold text-warning-800 mb-2">Recommended Approach</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-warning-700">
                      <li>Complete all quick wins first (loft, draughts, controls, LEDs)</li>
                      <li>Assess whether partial wall insulation is viable (e.g., just the front bay)</li>
                      <li>Consider a heating upgrade if boiler is old</li>
                      <li>Track spending carefully against the {formatCurrency(KEY_DATES.costCap)} cost cap</li>
                      <li>If approaching cap without reaching C, register exemption</li>
                    </ol>
                  </div>
                </section>

                {/* 1960s Approach */}
                <section id="1960s-approach" className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    1960s Property Approach
                  </h3>

                  <div className="bg-success-50 border border-success-200 rounded-lg p-6 mb-4">
                    <h4 className="font-semibold text-success-800 mb-3">Opportunity Profile</h4>
                    <p className="text-sm text-success-700 mb-4">
                      1960s properties with unfilled cavity walls represent the best E-rated upgrade opportunity. Cavity wall insulation alone can provide 8-12 points at just {formatCurrency(800)} to {formatCurrency(1500)}.
                    </p>

                    <h4 className="font-semibold text-success-800 mb-2">Typical Upgrade Package</h4>
                    <ul className="space-y-1 text-sm text-success-700">
                      <li>Cavity wall insulation: {formatCurrency(1200)} (+10 points)</li>
                      <li>Loft insulation top-up: {formatCurrency(500)} (+6 points)</li>
                      <li>Smart heating controls: {formatCurrency(300)} (+3 points)</li>
                      <li>Draught proofing: {formatCurrency(300)} (+3 points)</li>
                      <li className="font-semibold pt-2">Total: {formatCurrency(2300)} for approximately +22 points</li>
                    </ul>
                  </div>
                </section>

                {/* Flat Approach */}
                <section id="flat-approach" className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Flat Approach
                  </h3>

                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-6 mb-4">
                    <h4 className="font-semibold text-accent-800 mb-3">Constraint Profile</h4>
                    <p className="text-sm text-accent-700 mb-4">
                      Flats have limited improvement options because walls, floors, and ceilings are often shared with other units. Focus on improvements within your control.
                    </p>

                    <h4 className="font-semibold text-accent-800 mb-2">Available Options</h4>
                    <ul className="space-y-1 text-sm text-accent-700">
                      <li><strong>Heating system upgrade</strong> - Often the biggest single opportunity</li>
                      <li><strong>Window upgrades</strong> - If you have external walls with windows</li>
                      <li><strong>Smart controls</strong> - Always applicable</li>
                      <li><strong>Lighting</strong> - Quick win, small but worthwhile</li>
                      <li><strong>Top-floor flat loft</strong> - If you have loft access, insulate it</li>
                      <li><strong>Ground-floor flat</strong> - Underfloor insulation may be possible</li>
                    </ul>
                  </div>

                  <InfoBox title="Leasehold Considerations">
                    <p>
                      If your flat is leasehold, check your lease before making changes. Some improvements (like windows or external wall insulation) may require freeholder consent. Start early to allow time for approvals.
                    </p>
                  </InfoBox>
                </section>
              </section>

              {/* Cost-Effective Pathways */}
              <section id="cost-effective-pathways" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Cost-Effective Improvement Pathways
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The order in which you complete improvements matters. Start with the highest points-per-pound options and work down. Here is the recommended sequence for E-rated properties:
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4 p-4 bg-success-50 border border-success-200 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-success-200 text-success-800 flex items-center justify-center font-bold">1</span>
                    <div>
                      <h4 className="font-semibold text-success-800">Cavity Wall Insulation (if applicable)</h4>
                      <p className="text-sm text-success-700">
                        {formatCurrency(800)} - {formatCurrency(1500)} for 8-12 points. Check first as this is the single best value improvement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-success-50 border border-success-200 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-success-200 text-success-800 flex items-center justify-center font-bold">2</span>
                    <div>
                      <h4 className="font-semibold text-success-800">Loft Insulation</h4>
                      <p className="text-sm text-success-700">
                        {formatCurrency(400)} - {formatCurrency(600)} for 4-8 points. Top up to 300mm minimum.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-accent-50 border border-accent-200 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-200 text-accent-800 flex items-center justify-center font-bold">3</span>
                    <div>
                      <h4 className="font-semibold text-accent-800">Draught Proofing + Smart Controls + LEDs</h4>
                      <p className="text-sm text-accent-700">
                        Combined {formatCurrency(500)} - {formatCurrency(800)} for 5-8 points. Complete as a package.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-warning-50 border border-warning-200 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-warning-200 text-warning-800 flex items-center justify-center font-bold">4</span>
                    <div>
                      <h4 className="font-semibold text-warning-800">Boiler Upgrade (if old)</h4>
                      <p className="text-sm text-warning-700">
                        {formatCurrency(2500)} - {formatCurrency(4000)} for 5-10 points. Worthwhile if boiler is 15+ years old.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-100 border border-neutral-300 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-300 text-neutral-700 flex items-center justify-center font-bold">5</span>
                    <div>
                      <h4 className="font-semibold text-neutral-700">Wall Insulation (if needed)</h4>
                      <p className="text-sm text-neutral-600">
                        Internal {formatCurrency(8000)} - {formatCurrency(14000)} for 10-15 points. Only if still short after above measures.
                      </p>
                    </div>
                  </div>
                </div>

                <TipBox title="Get a Fresh EPC After Quick Wins">
                  <p>
                    If you are unsure whether you need expensive wall insulation, complete the lower-cost measures first and get a new EPC assessment. The new score may be closer to C than expected, potentially avoiding thousands in wall insulation costs.
                  </p>
                </TipBox>
              </section>

              {/* Cost Cap Exemption */}
              <section id="cost-cap-exemption" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  When Cost Cap Exemption Likely Applies
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The {formatCurrency(KEY_DATES.costCap)} cost cap is particularly relevant for E-rated properties with solid walls. If reaching EPC C would require spending more than this amount, you can register a cost cap exemption.
                  </p>
                </div>

                <KeyFactBox title="Cost Cap Exemption Rules" icon={PoundSterling}>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Threshold:</strong> {formatCurrency(KEY_DATES.costCap)} on qualifying improvements</li>
                    <li><strong>Duration:</strong> 5 years from registration</li>
                    <li><strong>Requirement:</strong> Must make all improvements up to the cap</li>
                    <li><strong>Evidence:</strong> Keep receipts and contractor invoices</li>
                  </ul>
                </KeyFactBox>

                <div className="mt-6 bg-warning-50 border border-warning-200 rounded-lg p-6">
                  <h4 className="font-semibold text-warning-800 mb-3">Likely Cost Cap Scenarios for E-Rated Properties</h4>
                  <ul className="space-y-3 text-sm text-warning-700">
                    <li>
                      <strong>Victorian/Edwardian solid wall property:</strong> Internal wall insulation ({formatCurrency(10000)}+) plus other measures typically exceeds cap. Exemption likely.
                    </li>
                    <li>
                      <strong>Property requiring external wall insulation:</strong> At {formatCurrency(10000)}-{formatCurrency(20000)}, quickly exceeds cap. Exemption highly likely.
                    </li>
                    <li>
                      <strong>Electric heating property:</strong> If heat pump ({formatCurrency(10000)}+) is the only viable path, exemption may apply even with BUS grant.
                    </li>
                  </ul>
                </div>

                <WarningBox title="Important: Spend the Full Cap First">
                  <p>
                    You cannot claim a cost cap exemption without first investing up to the cap. If your total cost estimate is {formatCurrency(12000)}, you must spend {formatCurrency(10000)} on improvements before registering the exemption. Budget for this initial investment.
                  </p>
                </WarningBox>
              </section>

              {/* Regional Variations */}
              <section id="regional-variations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Regional Cost Variations
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Labour and material costs vary significantly across the UK. The figures in this guide are UK averages. Apply these multipliers for your region:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Higher Cost Regions
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>London</span>
                        <span className="font-medium text-danger-600">+25% to +35%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>South East England</span>
                        <span className="font-medium text-warning-600">+15% to +25%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>South West England</span>
                        <span className="font-medium text-warning-600">+5% to +15%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Lower Cost Regions
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>North East England</span>
                        <span className="font-medium text-success-600">-10% to -20%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Wales</span>
                        <span className="font-medium text-success-600">-5% to -15%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Yorkshire</span>
                        <span className="font-medium text-success-600">-5% to -15%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Case Studies */}
              <section id="case-studies" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Real-World Case Studies
                </h2>

                {/* Case Study 1 */}
                <div className="bg-success-50 border border-success-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-success-800 mb-4">
                    Case Study 1: 1960s Semi with Unfilled Cavity
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-medium text-success-700 mb-2">Property Details</h4>
                      <ul className="text-sm text-success-700 space-y-1">
                        <li>3-bedroom semi-detached, Birmingham</li>
                        <li>Built 1965</li>
                        <li>Starting EPC: E (score 46)</li>
                        <li>Cavity walls (unfilled)</li>
                        <li>Loft insulation: 100mm</li>
                        <li>25-year-old gas boiler</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-success-700 mb-2">Improvements Made</h4>
                      <ul className="text-sm text-success-700 space-y-1">
                        <li>Cavity wall insulation: {formatCurrency(1100)} (+11 points)</li>
                        <li>Loft top-up to 300mm: {formatCurrency(480)} (+6 points)</li>
                        <li>New A-rated boiler: {formatCurrency(3200)} (+8 points)</li>
                        <li>Smart controls: {formatCurrency(280)} (+3 points)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-success-200">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-sm text-success-600">Total Investment</span>
                        <div className="text-2xl font-bold text-success-800">{formatCurrency(5060)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <EPCRatingBadge rating="E" size="sm" />
                        <span className="text-success-600 font-medium">46</span>
                        <ArrowRight className="h-4 w-4 text-success-400" />
                        <EPCRatingBadge rating="C" size="sm" />
                        <span className="text-success-600 font-medium">74</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-warning-50 border border-warning-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-warning-800 mb-4">
                    Case Study 2: Victorian Terrace (Cost Cap Exemption)
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-medium text-warning-700 mb-2">Property Details</h4>
                      <ul className="text-sm text-warning-700 space-y-1">
                        <li>2-bedroom mid-terrace, Bristol</li>
                        <li>Built 1890</li>
                        <li>Starting EPC: E (score 42)</li>
                        <li>Solid brick walls (9 inches)</li>
                        <li>No loft insulation</li>
                        <li>15-year-old gas boiler</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-warning-700 mb-2">Improvements Made</h4>
                      <ul className="text-sm text-warning-700 space-y-1">
                        <li>Loft insulation (full): {formatCurrency(650)} (+7 points)</li>
                        <li>Draught proofing: {formatCurrency(350)} (+3 points)</li>
                        <li>Smart controls + TRVs: {formatCurrency(420)} (+4 points)</li>
                        <li>LED lighting: {formatCurrency(140)} (+2 points)</li>
                        <li>Internal wall insulation (front bay): {formatCurrency(4800)} (+6 points)</li>
                        <li>New condensing boiler: {formatCurrency(3400)} (+7 points)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-warning-200 mb-3">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-sm text-warning-600">Total Investment</span>
                        <div className="text-2xl font-bold text-warning-800">{formatCurrency(9760)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <EPCRatingBadge rating="E" size="sm" />
                        <span className="text-warning-600 font-medium">42</span>
                        <ArrowRight className="h-4 w-4 text-warning-400" />
                        <EPCRatingBadge rating="D" size="sm" />
                        <span className="text-warning-600 font-medium">67</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-warning-700">
                    <strong>Result:</strong> Despite {formatCurrency(9760)} investment, property reached only D (67 points). Full internal wall insulation would cost an additional {formatCurrency(6000)}+, exceeding the {formatCurrency(KEY_DATES.costCap)} cost cap. Landlord registered cost cap exemption.
                  </p>
                </div>

                {/* Case Study 3 */}
                <div className="bg-accent-50 border border-accent-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-accent-800 mb-4">
                    Case Study 3: Ground-Floor Flat with Electric Heating
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-medium text-accent-700 mb-2">Property Details</h4>
                      <ul className="text-sm text-accent-700 space-y-1">
                        <li>2-bedroom ground-floor flat, Manchester</li>
                        <li>Built 1970 (purpose-built block)</li>
                        <li>Starting EPC: E (score 48)</li>
                        <li>Electric storage heaters</li>
                        <li>Double glazed</li>
                        <li>Some loft space above (shared)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent-700 mb-2">Improvements Made</h4>
                      <ul className="text-sm text-accent-700 space-y-1">
                        <li>Air source heat pump: {formatCurrency(11000)} (-{formatCurrency(7500)} BUS grant)</li>
                        <li>Underfloor insulation: {formatCurrency(1200)} (+3 points)</li>
                        <li>Smart controls: {formatCurrency(300)} (+3 points)</li>
                        <li>LED lighting: {formatCurrency(120)} (+2 points)</li>
                      </ul>
                      <p className="text-sm mt-2">Net cost after grant: {formatCurrency(5120)}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-accent-200">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-sm text-accent-600">Total Investment (after BUS grant)</span>
                        <div className="text-2xl font-bold text-accent-800">{formatCurrency(5120)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <EPCRatingBadge rating="E" size="sm" />
                        <span className="text-accent-600 font-medium">48</span>
                        <ArrowRight className="h-4 w-4 text-accent-400" />
                        <EPCRatingBadge rating="C" size="sm" />
                        <span className="text-accent-600 font-medium">72</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                      <h4 className="font-semibold text-neutral-800">Confirm your exact EPC score</h4>
                      <p className="text-neutral-600 text-sm">
                        A score of 39 needs 30 points; a score of 54 needs only 15. The difference is thousands of pounds.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Check your wall construction</h4>
                      <p className="text-neutral-600 text-sm">
                        Solid walls vs unfilled cavity walls makes a {formatCurrency(5000)}+ difference in total cost.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Check ECO4 eligibility</h4>
                      <p className="text-neutral-600 text-sm">
                        If your tenant receives qualifying benefits, you may get free cavity wall and loft insulation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Use our calculator</h4>
                      <p className="text-neutral-600 text-sm">
                        Get a personalised estimate based on your specific property details.
                      </p>
                    </div>
                  </li>
                </ol>

                {/* Calculator CTA */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-shrink-0">
                      <Calculator className="h-12 w-12 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 text-lg mb-1">
                        Calculate Your E to C Costs
                      </h3>
                      <p className="text-neutral-600">
                        Enter your property details and current EPC to see exactly what improvements you need and what they will cost.
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
                    sourceName="Energy Saving Trust"
                    documentTitle="Home insulation and improvement costs"
                    url="https://energysavingtrust.org.uk/advice/insulation/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Warm Homes Plan"
                    url="https://www.gov.uk/government/publications/warm-homes-plan"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Private Rented Sector Minimum Energy Efficiency Standards"
                    url="https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Ofgem"
                    documentTitle="Energy Company Obligation (ECO4)"
                    url="https://www.ofgem.gov.uk/environmental-and-social-schemes/energy-company-obligation-eco"
                    accessedDate="January 2026"
                  />
                </div>
              </section>

              {/* Related Content */}
              <section className="mt-12">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <RelatedContentCard
                    title="D to C Upgrade Costs"
                    excerpt="Simpler upgrade path for properties starting at EPC D rating."
                    href="/costs/d-to-c-upgrade"
                    category="Costs"
                    readingTime={10}
                  />
                  <RelatedContentCard
                    title="Cheapest EPC Improvements"
                    excerpt="Ranked list of improvements by cost per EPC point gained."
                    href="/costs/cheapest-improvements"
                    category="Costs"
                    readingTime={8}
                  />
                  <RelatedContentCard
                    title="ECO4 for Landlords"
                    excerpt="Free insulation and heating through the ECO4 scheme."
                    href="/costs/eco4-landlords"
                    category="Funding"
                    readingTime={10}
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
