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
  Zap,
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
import { GeneratedImage } from '@/components/content/GeneratedImage';
import { TableOfContents } from '@/components/content/TableOfContents';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { SourceCitation } from '@/components/content/SourceCitation';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: '1960s-1970s House EPC Guide | Cavity Wall Properties | GreenLord',
  description:
    'Complete guide to improving EPC ratings in 1960s and 1970s houses. Covers cavity wall insulation, failed insulation replacement, boiler upgrades, and realistic costs for reaching EPC C.',
  alternates: {
    canonical: 'https://greenlord.co.uk/property-types/1960s-1970s-house',
  },
  openGraph: {
    title: '1960s-1970s House EPC Guide | GreenLord',
    description:
      'Expert guidance for improving EPC ratings in 1960s-1970s properties. Cavity wall solutions, insulation upgrades, and cost-effective pathways to EPC C.',
    url: `${SITE_CONFIG.url}/property-types/1960s-1970s-house`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'characteristics', text: 'Property Characteristics', level: 2 as const },
  { id: 'challenges', text: 'Common EPC Challenges', level: 2 as const },
  { id: 'upgrades', text: 'Recommended Upgrades', level: 2 as const },
  { id: 'upgrade-priority', text: 'Priority Order', level: 3 as const },
  { id: 'costs', text: 'Cost Estimates', level: 2 as const },
  { id: 'special-considerations', text: 'Special Considerations', level: 2 as const },
  { id: 'failed-cavity-insulation', text: 'Failed Cavity Insulation', level: 3 as const },
  { id: 'system-built-properties', text: 'System-Built Properties', level: 3 as const },
  { id: 'example-pathway', text: 'Example Upgrade Pathway', level: 2 as const },
  { id: 'next-steps', text: 'Next Steps', level: 2 as const },
];

export default function SixtiesSeventiesHousePage() {
  return (
    <>
      <PageHeader
        title="1960s-1970s House EPC Guide"
        subtitle="A comprehensive guide to improving EPC ratings in properties from the 1960s and 1970s with cavity walls and good upgrade potential."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
          { name: '1960s-1970s House', url: `${SITE_CONFIG.url}/property-types/1960s-1970s-house` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="1960s-1970s House EPC Upgrade Guide"
                publishedDate="2026-01-15"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={12}
                subtitle="Everything landlords need to know about bringing 1960s and 1970s properties up to EPC C standard"
              />

              {/* Hero Image */}
              <GeneratedImage
                imageId="1960s-1970s-house-exterior"
                alt="Typical 1960s-1970s semi-detached house in a UK suburban street"
                prompt="A well-maintained 1960s-1970s detached house on a typical UK suburban estate. The property exhibits the era's distinctive features: a flat-fronted design with large picture windows, an integral garage, a low-pitched roof with grey concrete tiles, and a combination of brick and rendered finish. Late afternoon sunlight falls across the facade, revealing the straightforward construction that makes these homes relatively simple to upgrade for EPC compliance. Show a genuine UK 1960s-1970s semi or detached with flat front, large windows, and integral garage. Capture the clean, simple lines and low-pitched roof typical of this era. Late afternoon light, well-maintained property in suburban estate setting."
                width={800}
                height={450}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Houses built in the 1960s and 1970s represent a significant portion of the UK
                  housing stock, with approximately 4 million properties constructed during this
                  period. A key statistic from the government highlights that around 55% of UK
                  homes only meet the insulation standards from the 1970s, making these properties
                  prime candidates for energy efficiency improvements.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  The good news for landlords is that these properties typically have cavity walls,
                  making them much easier and cheaper to insulate than older solid-wall homes.
                  Many 1960s-1970s houses can reach EPC C for between {formatCurrency(3000)} and{' '}
                  {formatCurrency(8000)}, making compliance achievable without exceeding the cost
                  cap threshold.
                </p>
              </div>

              <KeyFactBox title="Typical 1960s-1970s House EPC Profile" icon={Thermometer}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm">Starting Rating:</span>
                  <EPCRatingBadge rating="D" size="md" showScoreRange />
                </div>
                <p className="text-sm">
                  Most unimproved 1960s-1970s houses score between 55-68 EPC points (rating D).
                  Properties with partial improvements may already be at low D or high E. The
                  target for compliance is 69 points (rating C).
                </p>
              </KeyFactBox>

              {/* Property Characteristics */}
              <section id="characteristics" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Property Characteristics
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Properties from this era were built during a period of significant housing
                    expansion, often using standardised construction methods. Understanding these
                    characteristics helps identify the most effective improvement strategies.
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
                          <span>Cavity walls with 50-75mm gap between leaves</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Brick outer leaf with block inner leaf</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Often unfilled or with early-generation insulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>U-value typically 1.5-1.6 W/m2K uninsulated</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Common Features
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Standard ceiling heights (2.4m typical)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Original single-glazed metal or wooden windows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Concrete ground floors (solid or suspended)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Low-pitched or flat roofs with accessible loft space</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary-600" />
                        Heating Systems
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Gas central heating (if upgraded from original)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Some properties still have storage heaters</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Boilers typically 15-25 years old if not replaced</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Minimal heating controls on older systems</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-primary-600" />
                        Insulation Status
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Loft insulation often present but inadequate (25-100mm)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Cavity walls may be unfilled or have failed insulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Minimal floor insulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Hot water cylinder often uninsulated or poorly insulated</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <GeneratedImage
                  imageId="1960s-1970s-house-cavity-wall-cross-section"
                  alt="Cross-section diagram showing 1960s-1970s cavity wall construction"
                  prompt="A technical cross-section illustration of typical 1960s-1970s cavity wall construction. The diagram clearly labels the brick outer leaf, the 50-75mm cavity gap, and the block inner leaf. An adjacent view shows the cavity filled with insulation material, with heat loss arrows demonstrating the dramatic reduction in thermal transfer once insulated. Measurements and component labels make the construction easy to understand. Show cross-section with brick outer leaf, 50-75mm cavity, and block inner leaf. Illustrate cavity filled with insulation material. Include heat loss arrows showing before and after insulation benefit."
                  width={800}
                  height={400}
                  className="mt-8"
                />
              </section>

              {/* Common EPC Challenges */}
              <section id="challenges" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Common EPC Challenges
                </h2>

                <InfoBox title="Why 1960s-1970s Houses Often Score D">
                  <p className="mb-2">
                    While these properties are easier to improve than older homes, they typically
                    start at rating D due to several common factors:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Original cavity walls were built without insulation</li>
                    <li>Early cavity wall insulation schemes (1970s-80s) often used materials that have since failed</li>
                    <li>Original boilers and heating systems are highly inefficient</li>
                    <li>Single glazing remains common, especially on rear elevations</li>
                  </ul>
                </InfoBox>

                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      1. Partial or Failed Cavity Wall Insulation
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Many properties from this era had cavity wall insulation installed during
                      government schemes in the 1970s and 1980s. Unfortunately, early materials
                      like urea-formaldehyde foam (UF foam) can shrink, crack, or degrade over
                      time, reducing effectiveness and potentially causing damp problems.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      2. Outdated Boilers and Controls
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Properties that have not had heating upgrades may still have non-condensing
                      boilers with efficiencies of 60-70%, compared to 90%+ for modern systems.
                      Basic controls without room thermostats or TRVs further reduce efficiency.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      3. Inadequate Loft Insulation
                    </h3>
                    <p className="text-sm text-neutral-600">
                      While most properties have some loft insulation, the depth is typically
                      only 25-100mm, well below the recommended 270mm. This is often one of
                      the easiest and cheapest improvements to make.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      4. Single Glazing Remains
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Original metal-framed windows with single glazing are still common,
                      particularly on rear elevations or in properties that have had partial
                      window replacements. These can have U-values of 5.0 W/m2K or worse.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      5. Poor Air Tightness
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Construction standards of the era meant significant gaps around windows,
                      doors, and service penetrations. While better than Victorian properties,
                      draughtproofing is still beneficial.
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
                    The excellent news for landlords with 1960s-1970s properties is that
                    cavity wall insulation offers a quick, cost-effective route to significant
                    EPC improvements. Combined with other measures, many properties can reach
                    EPC C for a modest investment.
                  </p>
                </div>

                <section id="upgrade-priority" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Priority Order for Maximum Impact
                  </h3>

                  <CostTable
                    title="1960s-1970s House Upgrade Costs and EPC Impact"
                    items={[
                      {
                        improvement: 'Cavity Wall Insulation',
                        lowEstimate: 450,
                        highEstimate: 1500,
                        notes: 'If walls are suitable. Major impact: 8-12 EPC points.',
                      },
                      {
                        improvement: 'Loft Insulation (top-up to 270mm)',
                        lowEstimate: 300,
                        highEstimate: 500,
                        notes: 'Quick win if accessible. 4-8 EPC points.',
                      },
                      {
                        improvement: 'Condensing Boiler Upgrade',
                        lowEstimate: 2500,
                        highEstimate: 4000,
                        notes: 'If boiler is 15+ years old. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Smart Heating Controls + TRVs',
                        lowEstimate: 200,
                        highEstimate: 450,
                        notes: 'Room-by-room control. 2-4 EPC points.',
                      },
                      {
                        improvement: 'Double Glazing (if single-glazed)',
                        lowEstimate: 3000,
                        highEstimate: 6000,
                        notes: 'Significant improvement. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Hot Water Cylinder Insulation',
                        lowEstimate: 20,
                        highEstimate: 50,
                        notes: 'If cylinder jacket is poor/absent. 1-2 EPC points.',
                      },
                      {
                        improvement: 'LED Lighting Throughout',
                        lowEstimate: 100,
                        highEstimate: 200,
                        notes: 'Simple upgrade. 1-2 EPC points.',
                      },
                      {
                        improvement: 'Draught Proofing',
                        lowEstimate: 150,
                        highEstimate: 300,
                        notes: 'Windows, doors, loft hatch. 1-3 EPC points.',
                      },
                    ]}
                    showTotal
                    footerNote="Costs are indicative and vary by region, property size, and specification. Always obtain multiple quotes."
                  />

                  <TipBox title="Cavity Wall Insulation is the Priority">
                    <p className="mb-2">
                      For most 1960s-1970s properties, cavity wall insulation offers the best
                      return on investment. At {formatCurrency(450)} to {formatCurrency(1500)},
                      it can deliver 8-12 EPC points, potentially jumping you straight from D to C.
                    </p>
                    <p className="text-sm">
                      However, not all cavities are suitable. A professional survey is essential
                      to check cavity width, exposure levels, and whether existing insulation
                      needs to be removed first.
                    </p>
                  </TipBox>
                </section>
              </section>

              {/* Cost Estimates */}
              <section id="costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Cost Estimates</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    The total cost to reach EPC C for a 1960s-1970s house is typically much
                    lower than for older properties. Many landlords can achieve compliance
                    without approaching the cost cap threshold.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at D (55-60 points)</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(3000)} - {formatCurrency(5000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Properties close to the threshold may only need cavity wall insulation,
                        loft top-up, and improved heating controls to reach C.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at Low D (50-55 points)</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(5000)} - {formatCurrency(8000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        May require boiler upgrade and possibly partial double glazing
                        in addition to insulation improvements.
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
                        Most 1960s-1970s properties should reach C without approaching
                        this threshold, unless there are complications.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="Better Value Than Older Properties">
                  <p>
                    The presence of cavity walls makes these properties significantly cheaper
                    to upgrade than Victorian or Edwardian homes. Where solid wall insulation
                    costs {formatCurrency(8000)} to {formatCurrency(14000)}, cavity wall
                    insulation can achieve similar EPC improvements for under {formatCurrency(1500)}.
                  </p>
                </InfoBox>
              </section>

              {/* Special Considerations */}
              <section id="special-considerations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Special Considerations
                </h2>

                <section id="failed-cavity-insulation" className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Failed Cavity Wall Insulation
                  </h3>
                  <WarningBox title="Check for Existing Failed Insulation">
                    <p className="mb-2">
                      If your property had cavity wall insulation installed in the 1970s or
                      1980s, particularly urea-formaldehyde foam, it may have failed. Signs include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Damp patches on internal walls, especially after rain</li>
                      <li>Cold spots on external walls</li>
                      <li>Visible crumbling or powder in the cavity (if inspected)</li>
                      <li>Musty smell from walls</li>
                    </ul>
                    <p className="mt-2 text-sm font-medium">
                      Failed insulation may need to be extracted before new insulation can be
                      installed, adding {formatCurrency(1500)} to {formatCurrency(3000)} to costs.
                    </p>
                  </WarningBox>

                  <div className="mt-4 prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      If you suspect failed cavity wall insulation, arrange a professional
                      inspection. Options include:
                    </p>
                    <ul className="text-neutral-700">
                      <li>Borescope inspection through small drilled holes</li>
                      <li>Thermal imaging to identify cold spots</li>
                      <li>Full cavity extraction and replacement with modern materials</li>
                    </ul>
                    <p className="text-neutral-700">
                      The Cavity Insulation Guarantee Agency (CIGA) may cover remediation
                      costs if the original installation was guaranteed and the problem is
                      due to installation defects.
                    </p>
                  </div>
                </section>

                <section id="system-built-properties" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    System-Built Properties
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      Some 1960s-1970s properties were constructed using non-traditional methods,
                      including various prefabricated systems. These may have different insulation
                      requirements:
                    </p>
                    <ul className="text-neutral-700">
                      <li>
                        <strong>BISF houses</strong> - steel-framed with metal cladding
                      </li>
                      <li>
                        <strong>Wimpey No-Fines</strong> - concrete construction without cavities
                      </li>
                      <li>
                        <strong>Airey houses</strong> - precast concrete columns with panels
                      </li>
                      <li>
                        <strong>Cornish Unit</strong> - concrete panel construction
                      </li>
                    </ul>
                    <p className="text-neutral-700">
                      These property types often cannot have standard cavity wall insulation
                      and may require specialist assessment and solutions.
                    </p>
                  </div>

                  <TipBox title="Check Your Property Type">
                    <p>
                      If you are unsure about your property's construction type, check the
                      original deeds or commission a building survey. System-built properties
                      may also be listed on defective housing registers, which can affect
                      mortgage availability.
                    </p>
                  </TipBox>
                </section>
              </section>

              {/* Example Upgrade Pathway */}
              <section id="example-pathway" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Example Upgrade Pathway
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Here is a realistic example of how a typical 3-bedroom 1970s semi-detached
                    house might progress from EPC rating D to C:
                  </p>
                </div>

                <Card variant="outlined" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4">
                      Case Study: 3-Bed 1970s Semi, Birmingham
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
                          <span>Cavity wall insulation (unfilled cavities)</span>
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
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(380)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Smart thermostat with TRVs on all radiators</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+3 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(320)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>LED lighting throughout</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(120)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Hot water cylinder jacket (80mm)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+1 point</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(25)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t-2 border-primary-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-primary-800">Final Result:</span>
                          <span className="ml-2 text-success-700 font-medium">79 points (Rating C)</span>
                        </div>
                        <div>
                          <span className="font-bold text-primary-800">Total Cost:</span>
                          <span className="ml-2 text-primary-700 font-medium">{formatCurrency(1695)}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <TipBox title="This Property Exceeded Target Easily">
                  <p>
                    This case study achieved 21 points improvement for under {formatCurrency(2000)},
                    reaching 79 points (well into C rating). The key was that the cavity walls
                    had never been insulated, making this a straightforward and cost-effective
                    upgrade. Properties with suitable unfilled cavities can achieve similar results.
                  </p>
                </TipBox>

                <GeneratedImage
                  imageId="1960s-1970s-house-epc-comparison"
                  alt="EPC certificate comparison showing before and after improvement"
                  prompt="A side-by-side comparison of two EPC certificates for a 1960s-1970s house. The left certificate shows the original D rating with 58 points and an orange energy bar, while the right certificate displays the improved C rating with 79 points and a green energy bar. Arrows or annotations highlight the significant 21-point improvement achieved through cavity wall insulation and other upgrades. Show official GOV.UK EPC certificate format side by side. Left: D rating (58 points) with orange bar; Right: C rating (79 points) with green bar. Use arrows or annotations to highlight the improvement journey."
                  width={800}
                  height={350}
                  className="mt-8"
                />
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
                        If you do not have a recent EPC (within 10 years), commission one from
                        a qualified assessor. This gives you your baseline score and identifies
                        recommended improvements.
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
                        2. Check Cavity Wall Suitability
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Arrange a cavity wall assessment to check if your walls are suitable
                        for insulation, or if existing insulation has failed and needs replacing.
                      </p>
                      <a
                        href="https://www.ciga.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Find a CIGA registered installer
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
                        4. Get Professional Quotes
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        For cavity wall insulation and boiler upgrades, obtain at least three
                        quotes from TrustMark-registered installers.
                      </p>
                      <a
                        href="https://www.trustmark.org.uk/find-a-tradesperson"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Find TrustMark tradespeople
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
                    sourceName="GOV.UK"
                    documentTitle="Energy Performance Certificates"
                    url="https://www.gov.uk/buy-sell-your-home/energy-performance-certificates"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Cavity Insulation Guarantee Agency"
                    documentTitle="About cavity wall insulation"
                    url="https://www.ciga.co.uk/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="UK Government"
                    documentTitle="English Housing Survey 2022 to 2023"
                    url="https://www.gov.uk/government/statistics/english-housing-survey-2022-to-2023"
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
                      Get a personalised estimate for your 1960s-1970s property using our
                      free calculator.
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
              title="1950s House Guide"
              excerpt="Guide for transitional-era properties with mixed construction types and varied upgrade challenges."
              href="/property-types/1950s-house"
              category="Property Guide"
              readingTime={12}
            />
            <RelatedContentCard
              title="Victorian Terrace Guide"
              excerpt="Comprehensive guide for solid wall properties with higher upgrade costs but proven pathways."
              href="/property-types/victorian-terrace"
              category="Property Guide"
              readingTime={14}
            />
            <RelatedContentCard
              title="Cost Cap and Exemptions"
              excerpt="Understand when you can claim an exemption if reaching EPC C is not cost-effective."
              href="/regulations/cost-cap-exemptions"
              category="Regulations"
              readingTime={8}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
