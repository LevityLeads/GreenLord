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
  Maximize2,
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
  title: 'Edwardian House EPC Guide | 1901-1914 Property Upgrades | GreenLord',
  description:
    'Complete guide to improving EPC ratings in Edwardian houses (1901-1914). Covers solid wall insulation, high ceiling challenges, large window solutions, and realistic costs for period properties.',
  openGraph: {
    title: 'Edwardian House EPC Guide | GreenLord',
    description:
      'Expert guidance for improving EPC ratings in Edwardian houses. Solid wall solutions, large room considerations, and realistic costs.',
    url: `${SITE_CONFIG.url}/property-types/edwardian-house`,
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

export default function EdwardianHousePage() {
  return (
    <>
      <PageHeader
        title="Edwardian House EPC Guide"
        subtitle="A comprehensive guide to improving EPC ratings in 1901-1914 properties with solid walls, high ceilings, and distinctive period features."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
          { name: 'Edwardian House', url: `${SITE_CONFIG.url}/property-types/edwardian-house` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="Edwardian House EPC Upgrade Guide"
                publishedDate="2026-01-15"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={13}
                subtitle="Everything landlords need to know about bringing 1901-1914 properties up to EPC C standard"
              />

              {/* Hero Image */}
              <ImagePlaceholder
                alt="Elegant Edwardian house with characteristic bay windows and decorative features"
                description="A photograph of a typical Edwardian house showing the characteristic features: large bay windows, decorative glazing, wide frontage, tall chimneys, and ornate brickwork. The image should show the larger proportions compared to Victorian terraces."
                width={800}
                height={450}
                priority
                instructions={[
                  'Show a genuine UK Edwardian house, ideally detached or semi-detached',
                  'Capture characteristic features: large bay windows, decorative glazing, ornate details',
                  'Daylight conditions, showing the full facade',
                  'Avoid showing house numbers or identifiable personal information',
                  'Demonstrate the larger proportions typical of the Edwardian era',
                ]}
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Edwardian houses, built between 1901 and 1914 during the reign of King Edward VII,
                  represent a significant portion of the UK housing stock. These properties are often
                  larger and more spacious than their Victorian predecessors, with bigger rooms,
                  higher ceilings, and larger windows. While this makes them desirable family homes
                  and rental properties, it also presents substantial challenges for energy efficiency.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  The combination of solid brick construction, generous room volumes, and extensive
                  glazing means Edwardian houses typically require more comprehensive improvements
                  to meet EPC C requirements. However, with strategic planning and investment, these
                  characterful properties can be significantly improved while preserving their period charm.
                </p>
              </div>

              <KeyFactBox title="Typical Edwardian House EPC Profile" icon={Thermometer}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm">Starting Rating:</span>
                  <EPCRatingBadge rating="E" size="md" showScoreRange />
                </div>
                <p className="text-sm">
                  Most unimproved Edwardian houses score between 35-50 EPC points (rating E).
                  Properties with some improvements may reach low D. The target for compliance
                  is 69 points (rating C). Due to larger surface areas, costs are typically higher
                  than equivalent Victorian terraces.
                </p>
              </KeyFactBox>

              {/* Property Characteristics */}
              <section id="characteristics" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Property Characteristics
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Edwardian houses share many construction characteristics with Victorian properties
                    but typically feature larger proportions and some architectural improvements.
                    Understanding these features is essential for planning effective energy upgrades.
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
                          <span>Solid brick walls, typically 9-13 inches (225-340mm) thick</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Often thicker walls than Victorian properties</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>No cavity between inner and outer layers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>U-value typically 1.7-2.1 W/m2K (poor performance)</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Maximize2 className="w-5 h-5 text-primary-600" />
                        Distinctive Features
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Higher ceilings than Victorian (often 3m+ / 10ft+)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Large bay windows, often with decorative glazing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Wider rooms and hallways than Victorian homes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Larger loft spaces with better access potential</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <ImagePlaceholder
                  alt="Cross-section diagram showing Edwardian house construction with high ceilings"
                  description="A technical illustration showing a cross-section of a typical Edwardian house, highlighting the solid brick construction, high ceiling heights (3m+), large bay window configuration, and suspended timber floors. Should contrast with Victorian proportions."
                  width={800}
                  height={400}
                  instructions={[
                    'Use a clean, technical illustration style',
                    'Clearly label: solid brick walls, high ceilings (3m+), bay window structure',
                    'Show the larger room proportions compared to Victorian era',
                    'Include measurements where helpful (wall thickness, ceiling height)',
                    'Consider showing the increased volume that requires heating',
                  ]}
                  className="mt-8"
                />
              </section>

              {/* Common EPC Challenges */}
              <section id="challenges" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Common EPC Challenges
                </h2>

                <WarningBox title="Why Edwardian Houses Score Poorly">
                  <p className="mb-2">
                    Edwardian houses face similar challenges to Victorian properties but are often
                    more expensive to improve due to their larger size:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Larger wall surface area means more insulation material required</li>
                    <li>Higher ceilings (often 3m+) increase heating volume by 25-40%</li>
                    <li>Bigger bay windows with decorative glazing are costly to upgrade</li>
                    <li>More extensive roofing means higher loft insulation costs</li>
                  </ul>
                </WarningBox>

                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      1. Larger Solid Wall Surface Area
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Edwardian houses typically have more external wall area than Victorian terraces.
                      This means solid wall insulation, whether internal or external, requires more
                      material and labour. The cost premium can be 30-50% higher than a comparable
                      Victorian terrace due to the additional square meterage.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      2. Greater Heating Volume
                    </h3>
                    <p className="text-sm text-neutral-600">
                      With ceiling heights often exceeding 3 metres (10 feet), Edwardian rooms
                      contain significantly more air volume to heat. This not only affects running
                      costs but also impacts the EPC calculation, as the heating system must work
                      harder to maintain comfortable temperatures.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      3. Extensive Glazing with Decorative Features
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Edwardian windows are often larger than Victorian ones, and frequently
                      feature decorative leaded lights, stained glass panels, or Art Nouveau
                      designs. Replacing or upgrading these windows while maintaining character
                      requires specialist work and significantly increases costs.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      4. Period Features and High-Quality Finishes
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Edwardian properties often have elaborate cornicing, picture rails,
                      ceiling roses, panelled doors, and decorative fireplaces. Internal wall
                      insulation work must carefully navigate these features, often requiring
                      specialist craftsmen to recreate or preserve original details.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      5. Larger Loft and Roof Areas
                    </h3>
                    <p className="text-sm text-neutral-600">
                      While larger lofts mean more space for insulation, they also mean higher
                      material costs. Additionally, Edwardian roofs may have complex shapes
                      with dormers, hipped sections, or decorative gables that complicate
                      insulation installation.
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
                    The strategy for improving an Edwardian house is similar to Victorian properties
                    but requires careful budgeting due to larger scale. Prioritise improvements that
                    offer the best EPC points per pound while respecting the property character.
                  </p>
                </div>

                <section id="upgrade-priority" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Priority Order for Maximum Impact
                  </h3>

                  <CostTable
                    title="Edwardian House Upgrade Costs and EPC Impact"
                    items={[
                      {
                        improvement: 'Loft Insulation (to 270mm)',
                        lowEstimate: 500,
                        highEstimate: 900,
                        notes: 'Larger loft area. 4-8 EPC points.',
                      },
                      {
                        improvement: 'Draught Proofing (windows, doors, floors)',
                        lowEstimate: 300,
                        highEstimate: 600,
                        notes: 'More windows to treat. 2-4 EPC points.',
                      },
                      {
                        improvement: 'Smart Heating Controls + TRVs',
                        lowEstimate: 300,
                        highEstimate: 500,
                        notes: 'More radiators in larger house. 2-3 EPC points.',
                      },
                      {
                        improvement: 'LED Lighting Throughout',
                        lowEstimate: 150,
                        highEstimate: 300,
                        notes: 'More light fittings required. 1-2 EPC points.',
                      },
                      {
                        improvement: 'Internal Solid Wall Insulation',
                        lowEstimate: 10000,
                        highEstimate: 18000,
                        notes: 'Larger wall area. 10-15 EPC points.',
                      },
                      {
                        improvement: 'Double Glazing (heritage style)',
                        lowEstimate: 6000,
                        highEstimate: 12000,
                        notes: 'Larger/more windows. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Condensing Boiler Upgrade',
                        lowEstimate: 3000,
                        highEstimate: 4500,
                        notes: 'May need larger capacity. 5-10 EPC points.',
                      },
                    ]}
                    showTotal
                    footerNote="Costs are indicative and vary by property size and complexity. Edwardian houses typically cost 20-40% more to upgrade than equivalent Victorian terraces."
                  />

                  <TipBox title="Start with the Low-Cost Wins">
                    <p className="mb-2">
                      Before committing to expensive solid wall insulation, ensure you have
                      completed all the lower-cost improvements. For Edwardian houses, these
                      can often gain 12-18 EPC points:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Top up loft insulation to 270mm across the larger loft area</li>
                      <li>Draught-proof all windows, including bay window frames</li>
                      <li>Install a smart thermostat with TRVs on all radiators</li>
                      <li>Replace all bulbs with LED (often 20+ fittings in Edwardian houses)</li>
                      <li>Insulate all hot water pipes and the cylinder</li>
                      <li>Fit chimney balloons or caps to multiple unused chimneys</li>
                    </ul>
                  </TipBox>
                </section>
              </section>

              {/* Cost Estimates */}
              <section id="costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Cost Estimates</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Edwardian houses typically cost more to upgrade than Victorian terraces
                    due to their larger size. Here are realistic cost ranges for comprehensive
                    improvement:
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at E (40 points)</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(10000)} - {formatCurrency(18000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Minimum investment to reach C. Requires partial wall insulation plus
                        all low-cost measures in a typical 4-bed Edwardian.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Comprehensive Upgrade</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(15000)} - {formatCurrency(25000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Full improvement including extensive wall insulation, new boiler,
                        and heritage-style glazing upgrades.
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

                <InfoBox title="Cost Cap Highly Relevant for Edwardian Houses">
                  <p>
                    Given the high costs associated with improving larger Edwardian properties,
                    many landlords will qualify for a cost cap exemption. The combination of
                    extensive solid wall insulation requirements and heritage window considerations
                    means the {formatCurrency(KEY_DATES.costCap)} threshold is often reached
                    before achieving EPC C.
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
                      Edwardian houses are less commonly listed than Georgian or early Victorian
                      properties, but many are in conservation areas or locally listed. If your
                      property is listed (Grade I, II*, or II), you must obtain Listed Building
                      Consent before:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Any external alterations including wall insulation</li>
                      <li>Replacing original windows or decorative glazing</li>
                      <li>Internal works affecting historic features</li>
                      <li>Changes to original fireplaces or heating arrangements</li>
                    </ul>
                    <p className="mt-2 text-sm font-medium">
                      Carrying out works without consent is a criminal offence.
                    </p>
                  </WarningBox>

                  <div className="mt-4 prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      For listed Edwardian buildings, focus on sensitive improvements such as:
                    </p>
                    <ul className="text-neutral-700">
                      <li>Secondary glazing behind original decorative windows</li>
                      <li>Loft insulation between joists without affecting roof structure</li>
                      <li>Discreet draughtproofing using traditional methods</li>
                      <li>High-efficiency boiler in existing boiler location</li>
                      <li>Underfloor insulation from below where accessible</li>
                    </ul>
                  </div>
                </section>

                <section id="conservation-areas" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Conservation Areas
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      Edwardian streets and suburbs often have conservation area status, protecting
                      their architectural character. This may restrict:
                    </p>
                    <ul className="text-neutral-700">
                      <li>
                        <strong>External wall insulation</strong> on front or visible elevations
                      </li>
                      <li>
                        <strong>Replacement windows</strong> that do not match original proportions
                      </li>
                      <li>
                        <strong>Solar panels</strong> on prominent roof slopes
                      </li>
                      <li>
                        <strong>Changes to decorative features</strong> like leaded lights
                      </li>
                    </ul>
                    <p className="text-neutral-700">
                      Contact your local planning authority for specific guidance on energy
                      improvements in your conservation area.
                    </p>
                  </div>

                  <TipBox title="Preserving Decorative Glazing">
                    <p>
                      Many Edwardian windows feature decorative leaded lights or stained glass.
                      These can often be preserved by installing secondary glazing on the inside,
                      or by having specialist glaziers create double-glazed units that incorporate
                      the original decorative glass. This maintains character while improving
                      thermal performance.
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
                    Wall insulation offers the largest single EPC improvement for Edwardian houses,
                    but costs are higher due to larger surface areas. Consider the options carefully:
                  </p>
                </div>

                <ComparisonTable
                  title="Internal vs External Wall Insulation for Edwardian Houses"
                  featureLabels={{
                    cost: 'Typical Cost (per m2)',
                    totalCost: 'Whole House Cost',
                    epcPoints: 'EPC Points Gain',
                    disruption: 'Disruption Level',
                    roomSize: 'Effect on Room Size',
                    planning: 'Planning Permission',
                    suitableConservation: 'Conservation Area Suitable',
                    suitableListed: 'Listed Building Suitable',
                    periodFeatures: 'Period Feature Risk',
                  }}
                  options={[
                    {
                      name: 'Internal Wall Insulation',
                      recommended: true,
                      features: {
                        cost: '80 - 130',
                        totalCost: '10,000 - 18,000',
                        epcPoints: '10-15 points',
                        disruption: 'High (room by room)',
                        roomSize: 'Reduces by 50-100mm per wall',
                        planning: 'Usually not required',
                        suitableConservation: true,
                        suitableListed: false,
                        periodFeatures: 'High (cornices, dados at risk)',
                      },
                    },
                    {
                      name: 'External Wall Insulation',
                      features: {
                        cost: '100 - 170',
                        totalCost: '14,000 - 26,000',
                        epcPoints: '12-18 points',
                        disruption: 'Medium (external only)',
                        roomSize: 'No internal change',
                        planning: 'Often required',
                        suitableConservation: false,
                        suitableListed: false,
                        periodFeatures: 'Low (internal features preserved)',
                      },
                    },
                  ]}
                  footerNote="Edwardian houses have approximately 20-40% more wall area than Victorian terraces, reflected in higher total costs."
                />

                <WarningBox title="Protecting Period Features During Internal Insulation">
                  <p>
                    Edwardian houses often have elaborate cornicing, picture rails, and dado rails
                    that can be damaged during internal wall insulation. Budget for specialist
                    work to either carefully remove and reinstate these features, or recreate
                    matching profiles after insulation is installed. This can add 15-25% to
                    internal insulation costs.
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
                    Here is a realistic example of how a typical 4-bedroom Edwardian house
                    might progress from EPC rating E to C:
                  </p>
                </div>

                <Card variant="outlined" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4">
                      Case Study: 4-Bed Edwardian House, Bristol
                    </h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Starting</p>
                        <EPCRatingBadge rating="E" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">38 points</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Target</p>
                        <EPCRatingBadge rating="C" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">69 points</p>
                      </div>
                      <div className="text-sm text-neutral-600 ml-4">
                        <strong>31 points needed</strong>
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
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(680)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Comprehensive draught proofing</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+4 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(480)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Smart thermostat + TRVs throughout</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+3 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(420)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>LED lighting throughout (24 fittings)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(220)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Internal wall insulation (ground floor front rooms)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+9 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(5800)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>New A-rated condensing boiler</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+8 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(3600)}</span>
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
                          <span className="ml-2 text-primary-700 font-medium">{formatCurrency(11200)}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <TipBox title="Strategic Partial Wall Insulation">
                  <p>
                    In this example, wall insulation was only applied to the ground floor front
                    rooms, which have the largest heat loss. This strategic approach achieved
                    enough EPC points at lower cost than insulating the entire house, while
                    staying under the cost cap threshold.
                  </p>
                </TipBox>
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
                        For Edwardian houses, ensure the assessor correctly identifies the solid
                        wall construction and high ceiling heights.
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
                        2. Survey Your Property
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Measure wall thickness, ceiling heights, and window areas. This information
                        helps contractors provide accurate quotes and helps you understand the
                        scale of work required.
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
                        3. Calculate Your Costs
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Use our calculator to get a personalised estimate. Make sure to select
                        Edwardian house as your property type for accurate sizing.
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
                        4. Find Specialist Contractors
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        For Edwardian properties, seek contractors with experience in period
                        buildings who can work around decorative features and understand
                        heritage requirements.
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
                    documentTitle="Energy Efficiency and Historic Buildings"
                    url="https://historicengland.org.uk/advice/technical-advice/energy-efficiency-and-historic-buildings/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Energy Performance Certificates"
                    url="https://www.gov.uk/buy-sell-your-home/energy-performance-certificates"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="The Victorian Society"
                    documentTitle="Caring for Your Victorian and Edwardian House"
                    url="https://www.victoriansociety.org.uk/advice"
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
                      Get a personalised estimate for your Edwardian house using our
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
              title="Victorian Terrace Guide"
              excerpt="Similar construction but smaller scale. Compare strategies for solid wall properties."
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
            <RelatedContentCard
              title="Solid Wall Insulation Guide"
              excerpt="Detailed guide to internal and external wall insulation options for period properties."
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
