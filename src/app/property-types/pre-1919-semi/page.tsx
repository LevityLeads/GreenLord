import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Home,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Thermometer,
  Lightbulb,
  Calendar,
  Building,
  Wind,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { EPCRatingBadge, EPCRatingScale } from '@/components/ui/EPCRatingBadge';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { WarningBox } from '@/components/content/WarningBox';
import { TipBox } from '@/components/content/TipBox';
import { InfoBox } from '@/components/content/InfoBox';
import { CostTable } from '@/components/content/CostTable';
import { ComparisonTable } from '@/components/content/ComparisonTable';
import { ImagePlaceholder } from '@/components/content/ImagePlaceholder';
import { TableOfContents } from '@/components/content/TableOfContents';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { SourceCitation } from '@/components/content/SourceCitation';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Pre-1919 Semi-Detached EPC Guide | Solid Wall Property Upgrades | GreenLord',
  description:
    'Complete guide to improving EPC ratings in pre-1919 semi-detached houses. More exposed walls than terraces means higher costs but same solid wall challenges. Realistic costs and upgrade pathways.',
  openGraph: {
    title: 'Pre-1919 Semi-Detached EPC Guide | GreenLord',
    description:
      'Expert guidance for improving EPC ratings in pre-1919 semi-detached houses. Higher heat loss than terraces requires strategic improvement planning.',
    url: `${SITE_CONFIG.url}/property-types/pre-1919-semi`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'characteristics', text: 'Property Characteristics', level: 2 as const },
  { id: 'heat-loss', text: 'Why Heat Loss is Higher', level: 2 as const },
  { id: 'challenges', text: 'Common EPC Challenges', level: 2 as const },
  { id: 'upgrades', text: 'Recommended Upgrades', level: 2 as const },
  { id: 'upgrade-priority', text: 'Priority Order', level: 3 as const },
  { id: 'costs', text: 'Cost Estimates', level: 2 as const },
  { id: 'special-considerations', text: 'Special Considerations', level: 2 as const },
  { id: 'wall-insulation-options', text: 'Wall Insulation Options', level: 2 as const },
  { id: 'example-pathway', text: 'Example Upgrade Pathway', level: 2 as const },
  { id: 'next-steps', text: 'Next Steps', level: 2 as const },
];

export default function Pre1919SemiPage() {
  return (
    <>
      <PageHeader
        title="Pre-1919 Semi-Detached EPC Guide"
        subtitle="A comprehensive guide to improving EPC ratings in pre-1919 semi-detached houses, addressing the unique challenges of solid wall properties with greater exposed surface area."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
          { name: 'Pre-1919 Semi-Detached', url: `${SITE_CONFIG.url}/property-types/pre-1919-semi` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="Pre-1919 Semi-Detached EPC Upgrade Guide"
                publishedDate="2026-01-15"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={14}
                subtitle="Understanding why pre-1919 semis cost more to improve than terraces - and how to achieve compliance efficiently"
              />

              {/* Hero Image */}
              <ImagePlaceholder
                alt="Pre-1919 semi-detached house showing exposed side wall"
                description="A photograph of a typical pre-1919 semi-detached house, clearly showing the exposed side wall that distinguishes it from terraced properties. The image should highlight the additional external wall area that increases heat loss."
                width={800}
                height={450}
                priority
                instructions={[
                  'Show a genuine UK pre-1919 semi-detached house',
                  'Angle the shot to clearly show the exposed side elevation',
                  'Capture characteristic Victorian/Edwardian features',
                  'Daylight conditions, showing the full facade and side',
                  'Avoid showing house numbers or identifiable personal information',
                ]}
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Pre-1919 semi-detached houses share the solid wall construction challenges of
                  Victorian terraces but face an additional hurdle: significantly more exposed
                  external wall area. With only one party wall instead of two, these properties
                  lose more heat through their walls, making them among the poorest-performing
                  properties in the UK housing stock.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  This additional heat loss means pre-1919 semis typically score lower on EPC
                  assessments than equivalent terraces, and require more extensive improvements
                  to reach compliance. Understanding this fundamental difference is key to
                  planning cost-effective upgrades.
                </p>
              </div>

              <KeyFactBox title="Typical Pre-1919 Semi-Detached EPC Profile" icon={Thermometer}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm">Starting Rating:</span>
                  <EPCRatingBadge rating="E" size="md" showScoreRange />
                </div>
                <p className="text-sm">
                  Most unimproved pre-1919 semi-detached houses score between 30-48 EPC points
                  (rating E or F). This is typically 5-10 points lower than equivalent terraces
                  due to the additional exposed wall area. The target for compliance is 69 points
                  (rating C).
                </p>
              </KeyFactBox>

              {/* Property Characteristics */}
              <section id="characteristics" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Property Characteristics
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Pre-1919 semi-detached houses share most construction characteristics with
                    Victorian terraces, but their semi-detached configuration creates important
                    differences for energy efficiency.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary-600" />
                        Wall Construction
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Solid brick walls, typically 9 inches (225mm) thick</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>No cavity between inner and outer layers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>U-value typically 2.1 W/m2K (very poor)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1 font-bold">!</span>
                          <span className="font-medium">Only one party wall (vs two in terraces)</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Typical Features
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Often larger than terraces of the same era</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Bigger roof area and loft space</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Original single-glazed sash windows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Side return or passage often present</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Why Heat Loss is Higher */}
              <section id="heat-loss" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Why Heat Loss is Higher
                </h2>

                <WarningBox title="The Extra Wall Problem">
                  <p className="mb-3">
                    The key difference between a pre-1919 semi and a terrace is wall exposure:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2 mt-4">
                    <div className="bg-white p-4 rounded border border-neutral-200">
                      <h4 className="font-semibold text-neutral-800 mb-2">Victorian Terrace</h4>
                      <ul className="text-sm space-y-1">
                        <li>- Front wall: exposed</li>
                        <li>- Rear wall: exposed</li>
                        <li>- Left wall: <span className="text-success-600 font-medium">party wall (no heat loss)</span></li>
                        <li>- Right wall: <span className="text-success-600 font-medium">party wall (no heat loss)</span></li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border border-neutral-200">
                      <h4 className="font-semibold text-neutral-800 mb-2">Pre-1919 Semi</h4>
                      <ul className="text-sm space-y-1">
                        <li>- Front wall: exposed</li>
                        <li>- Rear wall: exposed</li>
                        <li>- One side: <span className="text-success-600 font-medium">party wall (no heat loss)</span></li>
                        <li>- Other side: <span className="text-red-600 font-medium">exposed (major heat loss)</span></li>
                      </ul>
                    </div>
                  </div>
                </WarningBox>

                <div className="mt-6 prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed">
                    This extra exposed wall can account for 15-25% additional heat loss compared
                    to an equivalent terrace. In practical terms, this means:
                  </p>
                  <ul className="text-neutral-700">
                    <li>Lower starting EPC scores (typically 5-10 points less)</li>
                    <li>More insulation material required to achieve the same result</li>
                    <li>Higher costs for wall insulation projects</li>
                    <li>Greater potential benefit from wall insulation (more points available)</li>
                  </ul>
                </div>

                <ImagePlaceholder
                  alt="Diagram comparing heat loss in terrace vs semi-detached properties"
                  description="A technical illustration showing two floor plans side by side - a mid-terrace and a semi-detached property. Heat loss arrows should clearly show how the semi-detached loses heat through three external walls versus only two for the terrace."
                  width={800}
                  height={400}
                  instructions={[
                    'Show clear floor plan outlines of both property types',
                    'Use red arrows to indicate heat loss through external walls',
                    'Label party walls clearly showing no heat loss',
                    'Include approximate percentages of total heat loss per wall',
                    'Make the visual comparison obvious at a glance',
                  ]}
                  className="mt-8"
                />
              </section>

              {/* Common EPC Challenges */}
              <section id="challenges" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Common EPC Challenges
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      1. Greater External Wall Area to Insulate
                    </h3>
                    <p className="text-sm text-neutral-600">
                      The exposed side wall significantly increases the total area requiring
                      solid wall insulation. For a typical two-storey semi, this can add
                      30-50 square metres of wall area compared to a terrace, translating to
                      {formatCurrency(3000)}-{formatCurrency(6000)} additional cost for wall insulation.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      2. Larger Roof Area
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Pre-1919 semis typically have larger footprints than terraces, resulting
                      in more roof area to insulate. While loft insulation is relatively cheap,
                      the larger area means proportionally higher costs. Hipped roofs, common
                      on semis, also require more careful insulation work.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      3. Side Wall Access Challenges
                    </h3>
                    <p className="text-sm text-neutral-600">
                      External wall insulation on the exposed side often faces access challenges.
                      Narrow passages between properties, boundary walls, and neighbouring
                      structures can make installation difficult or require special scaffolding
                      arrangements.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      4. Same Period Construction Challenges
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Pre-1919 semis share all the typical challenges of Victorian construction:
                      solid walls, high ceilings, original single glazing, suspended timber
                      floors, and open chimneys. These are compounded by the larger exposed
                      surface area.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      5. Conservation Area Constraints on Side Elevation
                    </h3>
                    <p className="text-sm text-neutral-600">
                      In conservation areas, external wall insulation may be restricted even
                      on side elevations if they are visible from public areas. This forces
                      landlords toward more expensive internal insulation options for all
                      external walls.
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
                    The upgrade strategy for pre-1919 semis follows similar principles to
                    Victorian terraces, but with awareness that wall insulation costs will
                    be significantly higher. Prioritise quick wins first to maximise points
                    before committing to major wall works.
                  </p>
                </div>

                <section id="upgrade-priority" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Priority Order for Maximum Impact
                  </h3>

                  <CostTable
                    title="Pre-1919 Semi-Detached Upgrade Costs and EPC Impact"
                    items={[
                      {
                        improvement: 'Loft Insulation (to 270mm)',
                        lowEstimate: 500,
                        highEstimate: 800,
                        notes: 'Larger loft area than terrace. 4-8 EPC points.',
                      },
                      {
                        improvement: 'Draught Proofing Throughout',
                        lowEstimate: 250,
                        highEstimate: 500,
                        notes: 'More external walls = more draughts. 2-4 EPC points.',
                      },
                      {
                        improvement: 'Smart Heating Controls + TRVs',
                        lowEstimate: 250,
                        highEstimate: 450,
                        notes: 'Zone control helps in larger property. 2-3 EPC points.',
                      },
                      {
                        improvement: 'LED Lighting Throughout',
                        lowEstimate: 100,
                        highEstimate: 200,
                        notes: 'Standard improvement. 1-2 EPC points.',
                      },
                      {
                        improvement: 'Internal Solid Wall Insulation',
                        lowEstimate: 12000,
                        highEstimate: 22000,
                        notes: 'Three external walls to treat. 12-18 EPC points.',
                      },
                      {
                        improvement: 'Double Glazing (if permitted)',
                        lowEstimate: 5000,
                        highEstimate: 10000,
                        notes: 'Side elevation windows add to count. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Condensing Boiler Upgrade',
                        lowEstimate: 2500,
                        highEstimate: 4000,
                        notes: 'If boiler is 15+ years old. 5-10 EPC points.',
                      },
                    ]}
                    showTotal
                    footerNote="Costs reflect the additional wall area compared to terraces. Wall insulation costs are approximately 30-50% higher than equivalent terrace work."
                  />

                  <TipBox title="Strategic Partial Wall Insulation">
                    <p className="mb-2">
                      Given the high cost of insulating all three external walls, consider
                      a strategic approach:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Prioritise the exposed side wall (largest single heat loss)</li>
                      <li>Focus on north-facing walls where heat loss is greatest</li>
                      <li>Insulate rooms that are most frequently occupied</li>
                      <li>Calculate whether partial insulation gets you to C or qualifies for cost cap</li>
                    </ul>
                  </TipBox>
                </section>
              </section>

              {/* Cost Estimates */}
              <section id="costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Cost Estimates</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Pre-1919 semi-detached properties are among the most expensive to upgrade
                    due to the combination of solid wall construction and additional exposed
                    surface area. Here are realistic cost ranges:
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at E (40 points)</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(12000)} - {formatCurrency(20000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Minimum investment to reach C. Requires comprehensive wall insulation
                        plus all quick wins.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Comprehensive Upgrade</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(18000)} - {formatCurrency(30000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Full improvement including complete wall insulation, new boiler,
                        and glazing upgrades.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Cost Cap Threshold</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(KEY_DATES.costCap)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        If you spend this on qualifying improvements without reaching C,
                        you may register for a cost cap exemption.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="Cost Cap Highly Relevant for Pre-1919 Semis">
                  <p>
                    Pre-1919 semi-detached properties are strong candidates for cost cap
                    exemptions. The combination of solid wall construction and additional
                    exposed surface area means the {formatCurrency(KEY_DATES.costCap)} threshold
                    is often reached well before achieving EPC C. Document all expenditure
                    carefully from the outset.
                  </p>
                </InfoBox>
              </section>

              {/* Special Considerations */}
              <section id="special-considerations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Special Considerations
                </h2>

                <div className="space-y-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Wind className="w-5 h-5 text-primary-600" />
                        Side Wall Priority
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        The exposed side wall is typically the highest priority for insulation
                        as it represents a significant portion of total heat loss. Consider these
                        factors when planning:
                      </p>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>External insulation on the side may be easier to achieve planning approval for (less visible)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Access via side passage needs careful assessment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Check boundary ownership for external work near the property line</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <WarningBox title="Party Wall Considerations">
                    <p className="mb-2">
                      While you only have one party wall, it still requires consideration:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Party Wall Act applies if insulation work affects the shared wall structure</li>
                      <li>Internal insulation that changes the wall build-up may require notification</li>
                      <li>Some internal wall insulation systems fix through to the party wall</li>
                      <li>Discuss plans with your neighbour early to avoid disputes</li>
                    </ul>
                  </WarningBox>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Listed Buildings and Conservation Areas
                      </h3>
                      <p className="text-sm text-neutral-600">
                        The restrictions for listed buildings and conservation areas apply equally
                        to pre-1919 semis as to terraces. However, the side elevation may offer
                        opportunities for external insulation that would not be permitted on front
                        or visible rear elevations. Always consult your local planning authority.
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Wall Insulation Options */}
              <section id="wall-insulation-options" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Wall Insulation Options
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    With three external walls to consider, pre-1919 semis may benefit from
                    a mixed approach, using different insulation methods for different elevations
                    based on practical and planning considerations.
                  </p>
                </div>

                <ComparisonTable
                  title="Internal vs External Wall Insulation for Pre-1919 Semis"
                  featureLabels={{
                    cost: 'Typical Cost (per m2)',
                    totalCost: 'All Walls Cost (3 elevations)',
                    epcPoints: 'EPC Points Gain',
                    disruption: 'Disruption Level',
                    roomSize: 'Effect on Room Size',
                    planning: 'Planning Permission',
                    sideWallSuitable: 'Side Wall Suitability',
                    mixedApproach: 'Can Mix Methods',
                  }}
                  options={[
                    {
                      name: 'Internal Wall Insulation',
                      recommended: true,
                      features: {
                        cost: '80 - 120',
                        totalCost: '12,000 - 22,000',
                        epcPoints: '12-18 points',
                        disruption: 'High (room by room)',
                        roomSize: 'Reduces by 50-100mm per wall',
                        planning: 'Usually not required',
                        sideWallSuitable: true,
                        mixedApproach: true,
                      },
                    },
                    {
                      name: 'External Wall Insulation',
                      features: {
                        cost: '100 - 160',
                        totalCost: '15,000 - 28,000',
                        epcPoints: '15-22 points',
                        disruption: 'Medium (external only)',
                        roomSize: 'No internal change',
                        planning: 'Often required',
                        sideWallSuitable: true,
                        mixedApproach: true,
                      },
                    },
                  ]}
                  footerNote="Consider external insulation for the less-visible side wall and internal for front/rear elevations. This hybrid approach can balance cost, planning approval, and room size preservation."
                />

                <TipBox title="Hybrid Approach for Pre-1919 Semis">
                  <p>
                    Many pre-1919 semi landlords find success with a mixed strategy: external
                    wall insulation on the side elevation (where planning may be easier to
                    obtain) combined with internal insulation on front and rear walls. This
                    can achieve good EPC improvements while minimising room size loss in
                    living areas.
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
                    Here is a realistic example of how a typical 3-bedroom pre-1919
                    semi-detached might progress from EPC rating E to C:
                  </p>
                </div>

                <Card variant="outlined" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4">
                      Case Study: 3-Bed Pre-1919 Semi, Leeds
                    </h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Starting</p>
                        <EPCRatingBadge rating="F" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">35 points</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Target</p>
                        <EPCRatingBadge rating="C" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">69 points</p>
                      </div>
                      <div className="text-sm text-neutral-600 ml-4">
                        <strong>34 points needed</strong>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Loft insulation topped up to 270mm</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+7 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(620)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Comprehensive draught proofing</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+4 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(420)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Smart thermostat + TRVs throughout</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+3 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(380)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>LED lighting throughout</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(160)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>External wall insulation (side elevation only)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+8 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(5800)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Internal wall insulation (front bay area)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+5 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(3200)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>New A-rated condensing boiler</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+7 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(3400)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t-2 border-primary-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-primary-800">Final Result:</span>
                          <span className="ml-2 text-success-700 font-medium">71 points (Rating C)</span>
                        </div>
                        <div>
                          <span className="font-bold text-primary-800">Total Cost:</span>
                          <span className="ml-2 text-primary-700 font-medium">{formatCurrency(13980)}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <InfoBox title="Hybrid Wall Insulation Strategy">
                  <p>
                    This case study demonstrates a hybrid approach: external wall insulation
                    on the side elevation (where planning was approved due to minimal visibility)
                    combined with internal insulation only on the front bay. This achieved
                    enough points to reach EPC C while keeping costs below the comprehensive
                    all-walls approach of {formatCurrency(20000)}+.
                  </p>
                </InfoBox>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Next Steps</h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        1. Get Your Current EPC
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        If you do not have a recent EPC, commission one from a qualified assessor.
                        Ensure they correctly assess the exposed side wall area.
                      </p>
                      <a
                        href="https://www.gov.uk/find-energy-certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Check your EPC on GOV.UK
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        2. Survey Side Wall Access
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Assess the access to your exposed side wall. Note passage width,
                        boundary walls, and any obstacles that might affect external
                        insulation installation.
                      </p>
                      <Link
                        href="/resources/property-survey-checklist"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Download Survey Checklist
                      </Link>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        3. Check Planning Requirements
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Determine whether your property is in a conservation area and what
                        planning permission may be required for external wall insulation.
                      </p>
                      <a
                        href="https://www.planningportal.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Planning Portal
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        4. Calculate Your Costs
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Use our calculator to get a personalised estimate. Select pre-1919
                        semi-detached to account for the additional wall area.
                      </p>
                      <Link
                        href="/tools/cost-calculator"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Use the Cost Calculator
                      </Link>
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
                    documentTitle="Solid wall insulation"
                    url="https://energysavingtrust.org.uk/advice/solid-wall-insulation/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Historic England"
                    documentTitle="Energy Efficiency and Historic Buildings: Insulating Solid Walls"
                    url="https://historicengland.org.uk/images-books/publications/eehb-insulating-solid-walls/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Energy Performance Certificates"
                    url="https://www.gov.uk/buy-sell-your-home/energy-performance-certificates"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="BRE"
                    documentTitle="Solid wall heat losses and the potential for energy saving"
                    url="https://www.bre.co.uk/filelibrary/Briefing%20papers/92993-Solid-wall-heat-losses.pdf"
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
                    <h3 className="font-semibold text-primary-800 mb-3">Need Help?</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      Get a personalised estimate for your pre-1919 semi-detached using
                      our free calculator.
                    </p>
                    <Link href="/tools/cost-calculator">
                      <Button variant="primary" size="sm" fullWidth>
                        Try Calculator
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
              excerpt="Similar solid wall construction but with less exposed area. Compare strategies and costs."
              href="/property-types/victorian-terrace"
              category="Property Guide"
              readingTime={14}
            />
            <RelatedContentCard
              title="Cost Cap and Exemptions"
              excerpt="Pre-1919 semis are strong candidates for cost cap exemptions. Understand your options."
              href="/regulations/cost-cap-exemptions"
              category="Regulations"
              readingTime={8}
            />
            <RelatedContentCard
              title="Solid Wall Insulation Guide"
              excerpt="Detailed guide to internal and external wall insulation options for solid wall properties."
              href="/improvements/solid-wall-insulation"
              category="Improvements"
              readingTime={12}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
