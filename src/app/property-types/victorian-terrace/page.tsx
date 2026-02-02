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
  title: 'Victorian Terrace EPC Guide | Pre-1919 Property Upgrades | GreenLord',
  description:
    'Complete guide to improving EPC ratings in Victorian terraced properties. Covers solid wall insulation, listed building restrictions, realistic costs, and proven upgrade pathways for pre-1919 homes.',
  alternates: {
    canonical: 'https://greenlord.co.uk/property-types/victorian-terrace',
  },
  openGraph: {
    title: 'Victorian Terrace EPC Guide | GreenLord',
    description:
      'Expert guidance for improving EPC ratings in Victorian terraces. Solid wall solutions, conservation area considerations, and realistic costs.',
    url: `${SITE_CONFIG.url}/property-types/victorian-terrace`,
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
  { id: 'listed-buildings', text: 'Listed Buildings', level: 3 as const },
  { id: 'conservation-areas', text: 'Conservation Areas', level: 3 as const },
  { id: 'wall-insulation-options', text: 'Wall Insulation Options', level: 2 as const },
  { id: 'example-pathway', text: 'Example Upgrade Pathway', level: 2 as const },
  { id: 'next-steps', text: 'Next Steps', level: 2 as const },
];

export default function VictorianTerracePage() {
  return (
    <>
      <PageHeader
        title="Victorian Terrace EPC Guide"
        subtitle="A comprehensive guide to improving EPC ratings in pre-1919 terraced properties with solid walls and period features."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
          { name: 'Victorian Terrace', url: `${SITE_CONFIG.url}/property-types/victorian-terrace` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="Victorian Terrace EPC Upgrade Guide"
                publishedDate="2025-06-15"
                lastUpdated="2026-01-15"
                author={SITE_CONFIG.author}
                readingTime={14}
                subtitle="Everything landlords need to know about bringing pre-1919 terraced properties up to EPC C standard"
              />

              {/* Hero Image */}
              <GeneratedImage
                imageId="victorian-terrace-hero"
                alt="Row of Victorian terrace houses in a typical UK street"
                prompt="A photograph of a traditional Victorian terrace street showing the characteristic features: bay windows, tall sash windows, decorative brickwork, chimneys, and slate roofs. The image should show the uniform row of houses that typifies Victorian terrace development. Show a genuine UK Victorian terrace street, ideally in good condition. Capture characteristic features: bay windows, sash windows, decorative details. Daylight conditions, showing the full facade. Avoid showing house numbers or identifiable personal information. A mix of well-maintained properties demonstrates the housing stock."
                width={800}
                height={450}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Victorian terraced houses, built between 1837 and 1901, represent one of the most
                  common property types in the UK private rented sector. With an estimated 4.5
                  million Victorian properties still standing, and a significant proportion used as
                  rental homes, these characterful properties present unique challenges for landlords
                  seeking to meet the 2030 EPC C deadline.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  The solid brick construction that makes these homes so durable also makes them
                  among the most difficult to insulate. However, with careful planning and the right
                  approach, it is possible to significantly improve the energy efficiency of a
                  Victorian terrace, often reaching EPC C or qualifying for a cost cap exemption.
                </p>
              </div>

              <KeyFactBox title="Typical Victorian Terrace EPC Profile" icon={Thermometer}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm">Starting Rating:</span>
                  <EPCRatingBadge rating="E" size="md" showScoreRange />
                </div>
                <p className="text-sm">
                  Most unimproved Victorian terraces score between 30-50 EPC points (rating E or F).
                  Properties with some improvements may start at low D. The target for compliance
                  is 69 points (rating C).
                </p>
              </KeyFactBox>

              {/* Property Characteristics */}
              <section id="characteristics" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Property Characteristics
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Understanding the typical construction of a Victorian terrace is essential for
                    planning effective improvements. While individual properties vary, most share
                    common characteristics that define their energy performance.
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
                          <span>Some properties have 13-inch (340mm) walls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>No cavity between inner and outer layers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>U-value typically 2.1 W/m2K (very poor)</span>
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
                          <span>High ceilings (typically 2.8m-3.2m)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Original single-glazed sash windows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Suspended timber ground floors with airbricks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Open chimneys (often multiple per room)</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <GeneratedImage
                  imageId="victorian-terrace-wall-cross-section"
                  alt="Cross-section diagram showing Victorian terrace solid wall construction"
                  prompt="A technical illustration showing a cross-section of a typical Victorian terrace wall, clearly labelling the solid brick construction, internal plaster, and the absence of any cavity. Should also show the typical floor junction and how the suspended timber floor connects to the walls. Use a clean, technical illustration style. Clearly label: solid brick, internal plaster, lime mortar, no cavity. Show the wall-floor junction with suspended timber floor. Include measurements where helpful (9 inch wall thickness). Consider showing heat loss arrows to illustrate the problem."
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

                <WarningBox title="Why Victorian Terraces Score Poorly">
                  <p className="mb-2">
                    Victorian terraces typically receive the lowest EPC ratings among UK housing
                    stock due to their fundamental construction characteristics:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Solid walls account for 35% of a typical homes heat loss</li>
                    <li>High ceilings increase the volume to heat by 15-25%</li>
                    <li>Original windows can have U-values of 4.8 W/m2K or worse</li>
                    <li>Suspended floors allow significant draughts</li>
                  </ul>
                </WarningBox>

                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      1. Solid Walls Cannot Be Cavity Filled
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Unlike post-1930s properties with cavity walls, Victorian terraces require
                      either internal or external wall insulation, which is significantly more
                      expensive and disruptive. External insulation may not be permitted in
                      conservation areas or on listed buildings, while internal insulation
                      reduces room sizes.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      2. Conservation Area and Listed Building Restrictions
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Many Victorian terraces are located in conservation areas or are individually
                      listed. This can prevent external wall insulation, replacement of original
                      windows, and other visible alterations. Internal solutions become the only
                      option, adding complexity and cost.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      3. Period Features Limit Options
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Original features such as decorative cornices, picture rails, ceiling roses,
                      and dado rails can be damaged or lost during internal wall insulation.
                      Careful design is needed to work around or recreate these features,
                      increasing professional fees.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      4. Draughts and Ventilation Balance
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Victorian properties were designed to breathe, with deliberate ventilation
                      through chimneys, airbricks, and gaps in construction. While draughtproofing
                      improves energy efficiency, it must be balanced with adequate ventilation to
                      prevent condensation and damp problems.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      5. Ageing Heating Systems
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Many Victorian terraces still have inefficient boilers, uninsulated
                      pipework, and radiators sized for the original building without
                      considering any insulation improvements. The heating system may need
                      upgrading as part of any comprehensive improvement plan.
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
                    The key to improving a Victorian terraces EPC rating cost-effectively is to
                    prioritise improvements that offer the best points-per-pound return, while
                    working within any planning constraints. Here are the recommended upgrades
                    in priority order:
                  </p>
                </div>

                <section id="upgrade-priority" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Priority Order for Maximum Impact
                  </h3>

                  <CostTable
                    title="Victorian Terrace Upgrade Costs and EPC Impact"
                    items={[
                      {
                        improvement: 'Loft Insulation (to 270mm)',
                        lowEstimate: 400,
                        highEstimate: 600,
                        notes: 'Quick win if loft is accessible. 4-8 EPC points.',
                      },
                      {
                        improvement: 'Draught Proofing (windows, doors, floors)',
                        lowEstimate: 200,
                        highEstimate: 400,
                        notes: 'Essential for comfort. 2-4 EPC points.',
                      },
                      {
                        improvement: 'Smart Heating Controls',
                        lowEstimate: 200,
                        highEstimate: 400,
                        notes: 'Room-by-room control. 2-3 EPC points.',
                      },
                      {
                        improvement: 'LED Lighting Throughout',
                        lowEstimate: 100,
                        highEstimate: 200,
                        notes: 'Simple upgrade. 1-2 EPC points.',
                      },
                      {
                        improvement: 'Internal Solid Wall Insulation',
                        lowEstimate: 8000,
                        highEstimate: 14000,
                        notes: 'Major improvement. 10-15 EPC points. Per external wall.',
                      },
                      {
                        improvement: 'Double Glazing (if permitted)',
                        lowEstimate: 4000,
                        highEstimate: 8000,
                        notes: 'Secondary glazing may be alternative. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Condensing Boiler Upgrade',
                        lowEstimate: 2500,
                        highEstimate: 4000,
                        notes: 'If boiler is 15+ years old. 5-10 EPC points.',
                      },
                    ]}
                    showTotal
                    footerNote="Costs are indicative and vary by region, property size, and specification. Always obtain multiple quotes."
                  />

                  <TipBox title="Start with the Low-Cost Wins">
                    <p className="mb-2">
                      Before committing to expensive solid wall insulation, ensure you have
                      completed all the lower-cost improvements. These quick wins can often gain
                      10-15 EPC points at minimal cost:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Top up loft insulation to 270mm</li>
                      <li>Draught-proof all windows, doors, and the loft hatch</li>
                      <li>Install a smart thermostat with TRVs on all radiators</li>
                      <li>Replace all bulbs with LED</li>
                      <li>Insulate accessible hot water pipes and the hot water cylinder</li>
                      <li>Fit chimney balloons or caps to unused chimneys</li>
                    </ul>
                  </TipBox>
                </section>
              </section>

              {/* Cost Estimates */}
              <section id="costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Cost Estimates</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    The total cost to reach EPC C depends heavily on your starting point and
                    which improvements are possible for your specific property. Here are
                    realistic cost ranges:
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at E (42 points)</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(8000)} - {formatCurrency(15000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Minimum investment needed to reach C. Likely requires at least partial
                        wall insulation plus all low-cost measures.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Typical Full Upgrade</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(15000)} - {formatCurrency(30000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Comprehensive improvement including wall insulation, new boiler,
                        and glazing upgrades for maximum EPC improvement.
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
                        If you spend this amount on qualifying improvements without reaching
                        C, you may register for a cost cap exemption.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="Cost Cap Exemption Likely for Victorian Terraces">
                  <p>
                    Due to the high cost of solid wall insulation, many Victorian terrace
                    landlords will qualify for a cost cap exemption. After spending{' '}
                    {formatCurrency(KEY_DATES.costCap)} on eligible improvements, if your
                    property still does not reach EPC C, you can register an exemption
                    that lasts for 5 years.
                  </p>
                </InfoBox>
              </section>

              {/* Special Considerations */}
              <section id="special-considerations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Special Considerations
                </h2>

                <section id="listed-buildings" className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Listed Buildings
                  </h3>
                  <WarningBox title="Listed Building Consent Required" critical>
                    <p className="mb-2">
                      If your Victorian terrace is listed (Grade I, II*, or II), you must
                      obtain Listed Building Consent before making any alterations that
                      affect its character. This includes:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>External wall insulation (usually refused)</li>
                      <li>Replacing original windows</li>
                      <li>Internal wall insulation affecting historic fabric</li>
                      <li>Some heating system changes</li>
                    </ul>
                    <p className="mt-2 text-sm font-medium">
                      Carrying out works without consent is a criminal offence.
                    </p>
                  </WarningBox>

                  <div className="mt-4 prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      For listed buildings, focus on reversible, sensitive improvements such as:
                    </p>
                    <ul className="text-neutral-700">
                      <li>Secondary glazing (usually acceptable)</li>
                      <li>Loft insulation between joists (not affecting roof structure)</li>
                      <li>Draughtproofing using traditional materials</li>
                      <li>High-efficiency boiler replacement (like-for-like location)</li>
                      <li>Underfloor insulation where accessible without damage</li>
                    </ul>
                    <p className="text-neutral-700">
                      If you cannot reach EPC C due to listed building restrictions, you may
                      qualify for a listed building exemption on the EPC register.
                    </p>
                  </div>
                </section>

                <section id="conservation-areas" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Conservation Areas
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      Many Victorian terraces are located within conservation areas, which protect
                      the character of historic neighbourhoods. Conservation area designation does
                      not automatically prevent energy improvements, but it may restrict:
                    </p>
                    <ul className="text-neutral-700">
                      <li>
                        <strong>External wall insulation</strong> visible from public areas
                      </li>
                      <li>
                        <strong>Replacement windows</strong> that do not match the original design
                      </li>
                      <li>
                        <strong>Solar panels</strong> on front-facing roof slopes
                      </li>
                    </ul>
                    <p className="text-neutral-700">
                      Check with your local planning authority about what requires permission.
                      Many councils have specific guidance for energy improvements in conservation
                      areas.
                    </p>
                  </div>

                  <TipBox title="Getting Window Approval in Conservation Areas">
                    <p>
                      Some councils will approve replacement double-glazed windows if they
                      accurately replicate the original design, including slim sightlines,
                      correct glazing bar proportions, and appropriate materials. Specialist
                      heritage window manufacturers can often produce compliant units.
                    </p>
                  </TipBox>
                </section>
              </section>

              {/* Wall Insulation Options */}
              <section id="wall-insulation-options" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Wall Insulation Options
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    For Victorian terraces, wall insulation typically offers the single largest
                    EPC improvement potential, but also the highest cost and complexity. There
                    are two main approaches:
                  </p>
                </div>

                <ComparisonTable
                  title="Internal vs External Wall Insulation"
                  featureLabels={{
                    cost: 'Typical Cost (per m2)',
                    totalCost: 'Whole House Cost',
                    epcPoints: 'EPC Points Gain',
                    disruption: 'Disruption Level',
                    roomSize: 'Effect on Room Size',
                    planning: 'Planning Permission',
                    suitableConservation: 'Conservation Area Suitable',
                    suitableListed: 'Listed Building Suitable',
                    moisture: 'Moisture Risk',
                  }}
                  options={[
                    {
                      name: 'Internal Wall Insulation',
                      recommended: true,
                      features: {
                        cost: '80 - 120',
                        totalCost: '8,000 - 14,000',
                        epcPoints: '10-15 points',
                        disruption: 'High (room by room)',
                        roomSize: 'Reduces by 50-100mm per wall',
                        planning: 'Usually not required',
                        suitableConservation: true,
                        suitableListed: false,
                        moisture: 'Medium (needs careful design)',
                      },
                    },
                    {
                      name: 'External Wall Insulation',
                      features: {
                        cost: '100 - 160',
                        totalCost: '12,000 - 22,000',
                        epcPoints: '12-18 points',
                        disruption: 'Medium (external only)',
                        roomSize: 'No internal change',
                        planning: 'Often required',
                        suitableConservation: false,
                        suitableListed: false,
                        moisture: 'Low (if correctly installed)',
                      },
                    },
                  ]}
                  footerNote="Costs vary significantly by property size, access, and specification. Internal insulation is usually the only option for terraces in conservation areas."
                />

                <GeneratedImage
                  imageId="victorian-terrace-iwi-before-after"
                  alt="Before and after internal wall insulation installation in a Victorian terrace room"
                  prompt="A side-by-side comparison showing a Victorian terrace room before and after internal wall insulation. The before image should show the bare brick or plaster wall, while the after shows the finished insulated wall with new plasterboard and skirting. Both should show how the room proportions are affected. Show the same room angle in both images. Before: original walls, possibly with original features. After: smooth finished wall with new skirting boards. Include a reference object to show the 50-100mm depth lost. Show how original features like cornices are handled."
                  width={800}
                  height={400}
                  className="mt-8"
                />

                <WarningBox title="Party Wall Agreements May Be Required">
                  <p>
                    If you are insulating walls that adjoin a neighbouring property, you may
                    need to serve a Party Wall Notice under the Party Wall etc. Act 1996.
                    This is particularly relevant for internal insulation on party walls in
                    terraced houses. Consult a party wall surveyor if you are unsure.
                  </p>
                </WarningBox>
              </section>

              {/* Example Upgrade Pathway */}
              <section id="example-pathway" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Example Upgrade Pathway
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Here is a realistic example of how a typical 3-bedroom Victorian terrace
                    might progress from EPC rating E to C:
                  </p>
                </div>

                <Card variant="outlined" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4">
                      Case Study: 3-Bed Victorian Terrace, North London
                    </h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Starting</p>
                        <EPCRatingBadge rating="E" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">42 points</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Target</p>
                        <EPCRatingBadge rating="C" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">69 points</p>
                      </div>
                      <div className="text-sm text-neutral-600 ml-4">
                        <strong>27 points needed</strong>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Loft insulation topped up to 270mm</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+6 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(450)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Draught proofing throughout</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+3 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(320)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Smart thermostat + TRVs</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+3 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(350)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>LED lighting throughout</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(150)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Internal wall insulation (front bay only)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+8 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(4500)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>New A-rated condensing boiler</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+7 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(3200)}</span>
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
                          <span className="ml-2 text-primary-700 font-medium">{formatCurrency(8970)}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <GeneratedImage
                  imageId="victorian-terrace-epc-comparison"
                  alt="EPC certificate comparison showing before and after improvement"
                  prompt="A mock-up or real example showing two EPC certificates side by side - the original E-rated certificate on the left and the improved C-rated certificate on the right. The comparison should highlight the score improvement from 42 to 71 points. Show the official EPC certificate format. Left side: E rating, 42 points, red/orange energy bar. Right side: C rating, 71 points, green energy bar. Highlight the improvement visually with arrows or annotations. Ensure format matches current GOV.UK EPC certificate design."
                  width={800}
                  height={350}
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
                        2. Check Planning Constraints
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Before planning improvements, check if your property is listed or in a
                        conservation area. This determines which improvements are feasible.
                      </p>
                      <a
                        href="https://historicengland.org.uk/listing/the-list/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Search the Listed Buildings register
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
                        For major works like wall insulation, obtain at least three quotes
                        from TrustMark-registered installers who have experience with
                        Victorian properties.
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
                    sourceName="RICS"
                    documentTitle="Party Wall guidance"
                    url="https://www.rics.org/uk/upholding-professional-standards/sector-standards/building-surveying/party-wall-legislation-and-procedure/"
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
                      Get a personalised estimate for your Victorian terrace using our
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
              title="1930s Semi-Detached Guide"
              excerpt="Comprehensive guide for cavity-wall properties with excellent upgrade potential and lower costs."
              href="/property-types/1930s-semi"
              category="Property Guide"
              readingTime={12}
            />
            <RelatedContentCard
              title="Cost Cap and Exemptions"
              excerpt="Understand when you can claim an exemption if reaching EPC C is not cost-effective."
              href="/regulations/cost-cap-exemptions"
              category="Regulations"
              readingTime={8}
            />
            <RelatedContentCard
              title="Complete Upgrade Cost Guide"
              excerpt="Detailed pricing for all EPC improvements including solid wall insulation options."
              href="/costs"
              category="Costs"
              readingTime={15}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
