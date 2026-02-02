import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Home,
  CheckCircle2,
  Thermometer,
  Zap,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { EPCRatingBadge } from '@/components/ui/EPCRatingBadge';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { WarningBox } from '@/components/content/WarningBox';
import { TipBox } from '@/components/content/TipBox';
import { InfoBox } from '@/components/content/InfoBox';
import { CostTable } from '@/components/content/CostTable';
import { ComparisonTable } from '@/components/content/ComparisonTable';
import { GeneratedImage } from '@/components/content/GeneratedImage';
import { TableOfContents } from '@/components/content/TableOfContents';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { SourceCitation } from '@/components/content/SourceCitation';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: '1930s Semi-Detached EPC Guide | Cavity Wall Property Upgrades | GreenLord',
  description:
    'Complete guide to improving EPC ratings in 1930s semi-detached homes. Cavity wall insulation, bay window solutions, and cost-effective upgrades for inter-war properties.',
  alternates: {
    canonical: 'https://greenlord.co.uk/property-types/1930s-semi',
  },
  openGraph: {
    title: '1930s Semi-Detached EPC Guide | GreenLord',
    description:
      'Expert guidance for improving EPC ratings in 1930s semis. Cavity wall insulation, realistic costs, and proven upgrade pathways.',
    url: `${SITE_CONFIG.url}/property-types/1930s-semi`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'characteristics', text: 'Property Characteristics', level: 2 as const },
  { id: 'challenges', text: 'Common EPC Challenges', level: 2 as const },
  { id: 'upgrades', text: 'Recommended Upgrades', level: 2 as const },
  { id: 'upgrade-priority', text: 'Priority Order', level: 3 as const },
  { id: 'cavity-wall', text: 'Cavity Wall Insulation', level: 2 as const },
  { id: 'costs', text: 'Cost Estimates', level: 2 as const },
  { id: 'bay-windows', text: 'Bay Window Solutions', level: 2 as const },
  { id: 'example-pathway', text: 'Example Upgrade Pathway', level: 2 as const },
  { id: 'common-mistakes', text: 'Common Mistakes to Avoid', level: 2 as const },
  { id: 'next-steps', text: 'Next Steps', level: 2 as const },
];

export default function ThirtiesSemiPage() {
  return (
    <>
      <PageHeader
        title="1930s Semi-Detached EPC Guide"
        subtitle="A comprehensive guide to improving EPC ratings in inter-war semi-detached homes with cavity walls and excellent upgrade potential."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
          { name: '1930s Semi-Detached', url: `${SITE_CONFIG.url}/property-types/1930s-semi` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="1930s Semi-Detached EPC Upgrade Guide"
                publishedDate="2025-06-20"
                lastUpdated="2026-01-15"
                author={SITE_CONFIG.author}
                readingTime={12}
                subtitle="How to bring your inter-war semi up to EPC C standard cost-effectively"
              />

              {/* Hero Image */}
              <GeneratedImage
                imageId="1930s-semi-exterior"
                alt="Typical 1930s semi-detached house showing characteristic features"
                prompt="A classic 1930s semi-detached house on a tree-lined suburban street in the English Midlands. The property displays the era's unmistakable character: rounded bay windows on both floors, cream pebbledash render, a hipped roof with red clay tiles, and a small front garden with low brick wall. Soft afternoon light highlights the craftsmanship of inter-war housing that makes these homes among the easiest to upgrade for EPC compliance. Show a genuine UK 1930s semi with bay windows, pebbledash, and hipped roof. Include typical front garden and driveway setting of suburban location. Afternoon light, property in good condition reflecting maintainable housing stock."
                width={800}
                height={450}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  The 1930s semi-detached house is one of the most common property types in the UK,
                  with millions built during the inter-war housing boom. These homes represent
                  some of the best opportunities for landlords to achieve EPC C compliance at
                  reasonable cost, thanks to their cavity wall construction and generally
                  accessible design.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Unlike Victorian terraces with their solid walls, 1930s semis were built with
                  cavity walls that can be insulated relatively cheaply and with minimal
                  disruption. Combined with other straightforward improvements, many of these
                  properties can reach EPC C for well under the {formatCurrency(KEY_DATES.costCap)}{' '}
                  cost cap threshold.
                </p>
              </div>

              <KeyFactBox title="1930s Semi EPC Profile" icon={Thermometer}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm">Typical Starting Rating:</span>
                  <EPCRatingBadge rating="D" size="md" showScoreRange />
                </div>
                <p className="text-sm">
                  Most unimproved 1930s semis score between 45-65 EPC points (rating D or low E).
                  Properties with some improvements may already be at D. With cavity wall
                  insulation and other upgrades, reaching C (69+ points) is often achievable.
                </p>
              </KeyFactBox>

              {/* Property Characteristics */}
              <section id="characteristics" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Property Characteristics
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    The 1930s semi represents a significant step forward in construction compared
                    to Victorian and Edwardian properties. The introduction of cavity walls,
                    improved window technology, and better building regulations means these
                    homes are inherently more energy efficient and easier to upgrade.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Wall Construction
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-success-500 mt-1">+</span>
                          <span>Cavity walls with 50mm gap (typically unfilled)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-success-500 mt-1">+</span>
                          <span>Outer leaf: brick or rendered brick</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-success-500 mt-1">+</span>
                          <span>Inner leaf: brick or breeze block</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-success-500 mt-1">+</span>
                          <span>Excellent for cavity wall insulation</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary-600" />
                        Common Features
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Bay windows (ground floor, often first floor)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Suspended timber ground floors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Accessible loft space (often boarded)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Original single-glazed windows (if not replaced)</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="Why 1930s Semis Are Good Candidates for Improvement">
                  <div className="grid gap-2 md:grid-cols-2 mt-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Cavity walls can be insulated from outside</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Lofts are usually accessible</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Rarely in conservation areas</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Window replacement usually permitted</span>
                    </div>
                  </div>
                </InfoBox>
              </section>

              {/* Common EPC Challenges */}
              <section id="challenges" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Common EPC Challenges
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    While 1930s semis are among the easiest older properties to improve, they
                    still present some specific challenges that landlords should be aware of:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      1. Unfilled Cavity Walls
                    </h3>
                    <p className="text-sm text-neutral-600">
                      The most significant issue with 1930s semis is that cavity walls were left
                      unfilled when built. The 50mm air gap provides some insulation, but filling
                      the cavity with modern insulation material dramatically improves thermal
                      performance. This is the single most cost-effective improvement available.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      2. Original Single-Glazed Windows
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Many 1930s semis still have original metal-framed Crittall windows or
                      wooden sash/casement windows with single glazing. These are highly
                      inefficient and draughty. Replacement with modern double glazing offers
                      significant EPC improvement and tenant comfort benefits.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      3. Draughty Bay Windows
                    </h3>
                    <p className="text-sm text-neutral-600">
                      The characteristic bay windows of 1930s semis are particularly prone to
                      draughts due to their complex construction with multiple joints. The bay
                      floor often has gaps where cold air can enter. Thorough draught-proofing
                      of bays is essential for comfort and EPC improvement.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      4. Poorly Insulated Loft
                    </h3>
                    <p className="text-sm text-neutral-600">
                      While lofts in 1930s semis are usually accessible, many have insufficient
                      insulation. Building regulations at the time did not require loft insulation,
                      and even properties that have been upgraded may only have 100mm rather than
                      the recommended 270mm depth.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      5. Ageing Boiler and Controls
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Many rental properties still have boilers that are 15-20 years old and
                      well below current efficiency standards. Replacing an old G-rated boiler
                      with a modern A-rated condensing boiler can gain 5-10 EPC points alone.
                    </p>
                  </div>
                </div>
              </section>

              {/* Recommended Upgrades */}
              <section id="upgrades" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Recommended Upgrades
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed">
                    The good news for 1930s semi owners is that the improvements with the best
                    EPC impact are also among the most cost-effective. Here are the recommended
                    upgrades in priority order:
                  </p>
                </div>

                <section id="upgrade-priority" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Priority Order for Maximum Impact
                  </h3>

                  <CostTable
                    title="1930s Semi Upgrade Costs and EPC Impact"
                    items={[
                      {
                        improvement: 'Cavity Wall Insulation',
                        lowEstimate: 800,
                        highEstimate: 1500,
                        notes: 'Highest priority. 8-12 EPC points. Quick installation.',
                      },
                      {
                        improvement: 'Loft Insulation Top-up (to 270mm)',
                        lowEstimate: 400,
                        highEstimate: 600,
                        notes: 'Essential if below 270mm. 4-8 EPC points.',
                      },
                      {
                        improvement: 'Condensing Boiler Upgrade',
                        lowEstimate: 2500,
                        highEstimate: 4000,
                        notes: 'If boiler is 15+ years old. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Double Glazing',
                        lowEstimate: 4000,
                        highEstimate: 8000,
                        notes: 'Whole house replacement. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Smart Heating Controls',
                        lowEstimate: 200,
                        highEstimate: 400,
                        notes: 'Smart thermostat + TRVs. 2-3 EPC points.',
                      },
                      {
                        improvement: 'Draught Proofing',
                        lowEstimate: 150,
                        highEstimate: 300,
                        notes: 'Windows, doors, floors. 2-3 EPC points.',
                      },
                      {
                        improvement: 'LED Lighting',
                        lowEstimate: 100,
                        highEstimate: 200,
                        notes: 'Replace all bulbs. 1-2 EPC points.',
                      },
                    ]}
                    showTotal
                    footerNote="Costs are indicative and vary by region, property size, and specification. Cavity wall insulation is typically the best value improvement."
                  />

                  <TipBox title="The Big Three for 1930s Semis">
                    <p className="mb-2">
                      Most 1930s semis can reach EPC C with just three key improvements:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>
                        <strong>Cavity wall insulation</strong> - typically gains 8-12 points for
                        under {formatCurrency(1500)}
                      </li>
                      <li>
                        <strong>Loft insulation top-up</strong> - gains 4-8 points for around{' '}
                        {formatCurrency(500)}
                      </li>
                      <li>
                        <strong>Boiler upgrade</strong> (if old) - gains 5-10 points for around{' '}
                        {formatCurrency(3000)}
                      </li>
                    </ol>
                    <p className="mt-2 text-sm">
                      Total: approximately {formatCurrency(5000)} for 17-30 EPC points improvement.
                    </p>
                  </TipBox>
                </section>
              </section>

              {/* Cavity Wall Insulation Detail */}
              <section id="cavity-wall" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Cavity Wall Insulation
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Cavity wall insulation is typically the most cost-effective single improvement
                    for a 1930s semi. The process involves drilling small holes in the outer wall
                    and injecting insulation material to fill the cavity. The whole process usually
                    takes less than a day for a typical semi.
                  </p>
                </div>

                <GeneratedImage
                  imageId="1930s-semi-cavity-wall-insulation"
                  alt="Diagram showing cavity wall insulation being injected into 1930s semi wall"
                  prompt="A technical cross-section illustration depicting a 1930s cavity wall during the insulation injection process. The diagram clearly shows the brick outer leaf with small drilled holes, the injection equipment inserting insulation material, and the cavity between the two leaves gradually filling with EPS beads or mineral wool. Labels indicate the wall components and 50mm cavity width. Cross-section showing outer brick leaf, 50mm cavity, inner leaf, and plaster. Show injection gun inserting insulation through drilled holes. Label all components clearly with dimensions where appropriate."
                  width={800}
                  height={400}
                />

                <ComparisonTable
                  title="Cavity Wall Insulation Materials Compared"
                  featureLabels={{
                    cost: 'Typical Cost',
                    uValue: 'Resulting U-Value',
                    lifespan: 'Expected Lifespan',
                    drying: 'Drying Risk',
                    suitable: 'Suitable for Exposed Walls',
                    guarantee: 'Typical Guarantee',
                  }}
                  options={[
                    {
                      name: 'Mineral Wool',
                      features: {
                        cost: '500 - 800',
                        uValue: '0.35-0.45 W/m2K',
                        lifespan: '25+ years',
                        drying: 'Low (if dry)',
                        suitable: false,
                        guarantee: '25 years',
                      },
                    },
                    {
                      name: 'EPS Beads',
                      recommended: true,
                      features: {
                        cost: '600 - 1000',
                        uValue: '0.35-0.40 W/m2K',
                        lifespan: '25+ years',
                        drying: 'Very Low',
                        suitable: true,
                        guarantee: '25 years',
                      },
                    },
                    {
                      name: 'Foam (PU)',
                      features: {
                        cost: '800 - 1500',
                        uValue: '0.30-0.35 W/m2K',
                        lifespan: '25+ years',
                        drying: 'Very Low',
                        suitable: true,
                        guarantee: '25 years',
                      },
                    },
                  ]}
                  footerNote="EPS beads are the most common choice, offering good performance and moisture resistance. Foam provides the best insulation but at higher cost."
                />

                <WarningBox title="When Cavity Wall Insulation Is Not Suitable">
                  <p className="mb-2">
                    Cavity wall insulation may not be appropriate in certain situations:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Properties in very exposed locations with driving rain</li>
                    <li>Walls with existing damp problems or failed damp proof course</li>
                    <li>Properties where the cavity has been bridged by debris</li>
                    <li>Non-standard cavity sizes (too narrow or too wide)</li>
                  </ul>
                  <p className="mt-2 text-sm">
                    A proper survey by a certified installer will identify any issues before work
                    begins. Always use a TrustMark or CIGA-registered installer.
                  </p>
                </WarningBox>
              </section>

              {/* Cost Estimates */}
              <section id="costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Cost Estimates</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    One of the key advantages of 1930s semis is that reaching EPC C is often
                    achievable at reasonable cost, frequently well below the{' '}
                    {formatCurrency(KEY_DATES.costCap)} cost cap threshold.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at D (55 points)</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(2000)} - {formatCurrency(5000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Cavity wall insulation + loft top-up + minor improvements. Often
                        sufficient to reach C without glazing or boiler upgrade.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at Low D/E</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(5000)} - {formatCurrency(10000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Likely needs boiler upgrade in addition to insulation measures. Still
                        well within typical budgets.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Full Upgrade Package</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(8000)} - {formatCurrency(15000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Comprehensive improvement including new windows, boiler, and all
                        insulation measures. May achieve rating B.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="Cost Cap Exemption Unlikely for Most 1930s Semis">
                  <p>
                    Unlike Victorian terraces, most 1930s semis can reach EPC C for less than
                    the {formatCurrency(KEY_DATES.costCap)} cost cap. This means you are likely
                    to be required to achieve compliance rather than claim an exemption. The
                    good news is that the investment typically represents good value.
                  </p>
                </InfoBox>
              </section>

              {/* Bay Windows */}
              <section id="bay-windows" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Bay Window Solutions
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    The bay windows that give 1930s semis their distinctive character are often
                    the weakest point for heat loss. These areas require special attention during
                    any upgrade programme.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">Bay Window Issues</h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-warning-500 mt-1">!</span>
                          <span>Multiple window units with many joints</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-warning-500 mt-1">!</span>
                          <span>Bay floor often uninsulated and draughty</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-warning-500 mt-1">!</span>
                          <span>Flat or sloped bay roof can leak heat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-warning-500 mt-1">!</span>
                          <span>Difficult to draught-proof effectively</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">Recommended Fixes</h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Replace with high-quality double glazing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Insulate bay floor from below if accessible</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Insulate bay roof (internal or external)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Thorough draught-proofing of all joints</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <TipBox title="Bay Window Replacement Tip">
                  <p>
                    When replacing bay windows, specify frames with good thermal breaks and
                    consider triple glazing for ground floor bays which are often the coldest
                    part of the house. Modern slim-profile double glazing can replicate the
                    original 1930s proportions while dramatically improving insulation.
                  </p>
                </TipBox>
              </section>

              {/* Example Upgrade Pathway */}
              <section id="example-pathway" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Example Upgrade Pathway
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Here is a realistic example of how a typical 3-bedroom 1930s semi might
                    progress from EPC rating D to C:
                  </p>
                </div>

                <Card variant="outlined" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4">
                      Case Study: 3-Bed 1930s Semi, Birmingham
                    </h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Starting</p>
                        <EPCRatingBadge rating="D" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">58 points</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Target</p>
                        <EPCRatingBadge rating="C" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">69 points</p>
                      </div>
                      <div className="text-sm text-neutral-600 ml-4">
                        <strong>11 points needed</strong>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Cavity wall insulation (EPS beads)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+10 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(850)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Loft insulation topped up to 270mm</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+5 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(420)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Smart thermostat + TRVs</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(280)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>LED lighting throughout</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+1 point</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(120)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t-2 border-primary-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-primary-800">Final Result:</span>
                          <span className="ml-2 text-success-700 font-medium">76 points (Rating C)</span>
                        </div>
                        <div>
                          <span className="font-bold text-primary-800">Total Cost:</span>
                          <span className="ml-2 text-primary-700 font-medium">{formatCurrency(1670)}</span>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-600 mt-2">
                        <strong>Note:</strong> This property did not require a boiler upgrade as the
                        existing boiler was only 8 years old. Properties with older boilers may need
                        to budget an additional {formatCurrency(2500)}-{formatCurrency(4000)}.
                      </p>
                    </div>
                  </CardBody>
                </Card>

                <GeneratedImage
                  imageId="1930s-semi-epc-journey-infographic"
                  alt="Typical 1930s semi EPC improvement journey from D to C"
                  prompt="An infographic showing the EPC improvement journey for a typical 1930s semi-detached house. Starting from rating D (58 points), the stepped timeline progresses through cavity wall insulation, loft insulation top-up, and boiler upgrade to reach the final rating C (76 points). Each step displays the point gain and cost, with green brand colours emphasising the positive progression toward compliance. Create stepped timeline from D (58 points) through improvements to C (76 points). Show cost and point gains for each improvement step. Use GreenLord green brand colours for a professional, clear design."
                  width={800}
                  height={350}
                />
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Common Mistakes to Avoid
                </h2>

                <div className="space-y-4">
                  <WarningBox title="Mistake 1: Starting with Expensive Improvements">
                    <p>
                      Do not replace windows or the boiler before installing cavity wall and
                      loft insulation. The insulation measures are more cost-effective and may
                      be all you need to reach EPC C. You might also be over-sizing a new boiler
                      if you install it before insulating the property.
                    </p>
                  </WarningBox>

                  <WarningBox title="Mistake 2: Using Unregistered Installers">
                    <p>
                      Always use TrustMark or CIGA-registered installers for cavity wall
                      insulation. Unregistered installers may not follow proper procedures,
                      leaving you with damp problems and no guarantee. Registered installations
                      come with a 25-year guarantee backed by CIGA.
                    </p>
                  </WarningBox>

                  <WarningBox title="Mistake 3: Ignoring Draught-Proofing">
                    <p>
                      Adding insulation without addressing draughts is a common oversight.
                      Draughts can undermine the benefits of insulation and are particularly
                      problematic in bay windows and suspended floors. Include comprehensive
                      draught-proofing in your upgrade plan.
                    </p>
                  </WarningBox>

                  <WarningBox title="Mistake 4: Not Getting a Fresh EPC">
                    <p>
                      After completing improvements, always get a new EPC from a qualified
                      assessor. Your existing EPC will not automatically update, and you need
                      the new certificate to demonstrate compliance and for the PRS register.
                    </p>
                  </WarningBox>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Next Steps</h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        1. Check Your Current EPC
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Find your existing EPC and note the current rating, score, and
                        recommended improvements. This is your baseline for planning.
                      </p>
                      <a
                        href="https://www.gov.uk/find-energy-certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Find your EPC on GOV.UK
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        2. Get a Cavity Wall Survey
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Arrange a free survey from a registered installer to confirm your
                        property is suitable for cavity wall insulation and get an exact quote.
                      </p>
                      <a
                        href="https://www.ciga.co.uk/find-an-installer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Find CIGA-registered installers
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        3. Calculate Your Costs
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Use our calculator to get a personalised estimate based on your
                        specific property details and current EPC rating.
                      </p>
                      <Link
                        href="/tools/cost-calculator"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Use the Cost Calculator
                      </Link>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        4. Check for Grants
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Some landlords may qualify for funding through ECO4 or local authority
                        schemes. Check eligibility before paying full price.
                      </p>
                      <a
                        href="https://www.gov.uk/energy-company-obligation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Learn about ECO4 funding
                      </a>
                    </CardBody>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Link href="/tools/cost-calculator">
                    <Button
                      variant="primary"
                      size="lg"
                      rightIcon={<ArrowRight className="w-5 h-5" />}
                    >
                      Calculate Your Upgrade Costs
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Sources */}
              <section className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-700 mb-4">Sources</h3>
                <div className="space-y-2">
                  <SourceCitation
                    sourceName="Energy Saving Trust"
                    documentTitle="Cavity wall insulation"
                    url="https://energysavingtrust.org.uk/advice/cavity-wall-insulation/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="CIGA"
                    documentTitle="Cavity Insulation Guarantee Agency"
                    url="https://www.ciga.co.uk/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Energy Company Obligation (ECO4)"
                    url="https://www.gov.uk/energy-company-obligation"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Energy Saving Trust"
                    documentTitle="Loft insulation"
                    url="https://energysavingtrust.org.uk/advice/roof-and-loft-insulation/"
                    accessedDate="January 2026"
                  />
                </div>
              </section>
            </article>

            {/* Sidebar with ToC */}
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />

              <div className="mt-8">
                <Card variant="highlighted">
                  <CardBody>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-success-600" />
                      <h3 className="font-semibold text-primary-800">Good News</h3>
                    </div>
                    <p className="text-sm text-neutral-600 mb-4">
                      1930s semis typically have the best upgrade potential of any older
                      property type. Most can reach C for under {formatCurrency(5000)}.
                    </p>
                    <Link href="/tools/cost-calculator">
                      <Button variant="primary" size="sm" fullWidth>
                        Get Your Estimate
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Related Content */}
      <Section background="muted" padding="lg">
        <Container>
          <h2 className="text-2xl font-bold text-primary-800 mb-8">Related Guides</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <RelatedContentCard
              title="Victorian Terrace Guide"
              excerpt="Guidance for solid-wall properties with more complex improvement requirements."
              href="/property-types/victorian-terrace"
              category="Property Guide"
              readingTime={14}
            />
            <RelatedContentCard
              title="Purpose-Built Flat Guide"
              excerpt="EPC improvements for leasehold properties with shared building considerations."
              href="/property-types/purpose-built-flat"
              category="Property Guide"
              readingTime={10}
            />
            <RelatedContentCard
              title="D to C Upgrade Costs"
              excerpt="Detailed cost breakdown for the most common upgrade journey from D to C rating."
              href="/costs/d-to-c-upgrade"
              category="Costs"
              readingTime={8}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
