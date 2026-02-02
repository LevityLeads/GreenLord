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
  HelpCircle,
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
  title: '1950s House EPC Guide | Post-War Property Upgrades | GreenLord',
  description:
    'Complete guide to improving EPC ratings in 1950s houses. Covers mixed construction challenges, narrow cavity walls, pre-Building Regulations issues, and realistic costs for reaching EPC C.',
  alternates: {
    canonical: 'https://greenlord.co.uk/property-types/1950s-house',
  },
  openGraph: {
    title: '1950s House EPC Guide | GreenLord',
    description:
      'Expert guidance for improving EPC ratings in 1950s properties. Mixed construction solutions, survey requirements, and cost-effective upgrade pathways.',
    url: `${SITE_CONFIG.url}/property-types/1950s-house`,
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
  { id: 'narrow-cavities', text: 'Narrow Cavity Walls', level: 3 as const },
  { id: 'pre-regulations', text: 'Pre-Building Regulations', level: 3 as const },
  { id: 'wall-type-identification', text: 'Identifying Wall Type', level: 2 as const },
  { id: 'example-pathway', text: 'Example Upgrade Pathway', level: 2 as const },
  { id: 'next-steps', text: 'Next Steps', level: 2 as const },
];

export default function FiftiesHousePage() {
  return (
    <>
      <PageHeader
        title="1950s House EPC Guide"
        subtitle="A comprehensive guide to improving EPC ratings in post-war 1950s properties with transitional construction and mixed wall types."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
          { name: '1950s House', url: `${SITE_CONFIG.url}/property-types/1950s-house` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="1950s House EPC Upgrade Guide"
                publishedDate="2026-01-15"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={12}
                subtitle="Everything landlords need to know about bringing 1950s properties up to EPC C standard"
              />

              {/* Hero Image */}
              <GeneratedImage
                imageId="1950s-house-exterior"
                alt="Typical 1950s semi-detached house in a UK suburban street"
                prompt="A post-war 1950s semi-detached house on a quiet suburban street in a northern English town. The property shows the transitional architecture of this era: a modest bay window at ground floor, cream pebbledash render, a hipped roof with weathered clay tiles, and a small front garden with privet hedging. Morning light reveals the solid construction of these homes that can be upgraded with either cavity or solid wall solutions depending on their specific build type. Show a genuine UK 1950s semi with bay window, pebbledash, and hipped roof. Capture the transitional post-war architectural style. Morning light, typical suburban setting with modest front garden."
                width={800}
                height={450}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Houses built in the 1950s represent a transitional period in UK construction.
                  The post-war housing boom saw a mix of traditional and modern building methods,
                  with some properties having cavity walls while others retained solid wall
                  construction. This variation means that improvement strategies differ
                  significantly depending on your specific property.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Crucially, 1950s properties were built before the introduction of Building
                  Regulations in 1965, meaning there were no mandatory standards for insulation
                  or thermal performance. A professional survey is essential to determine your
                  wall type and the most effective upgrade pathway.
                </p>
              </div>

              <KeyFactBox title="Typical 1950s House EPC Profile" icon={Thermometer}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm">Starting Rating:</span>
                  <EPCRatingBadge rating="D" size="md" showScoreRange />
                  <span className="text-sm mx-2">or</span>
                  <EPCRatingBadge rating="E" size="md" showScoreRange />
                </div>
                <p className="text-sm">
                  Most unimproved 1950s houses score between 45-60 EPC points (rating D or E).
                  The wide range reflects the variation in construction types. The target for
                  compliance is 69 points (rating C).
                </p>
              </KeyFactBox>

              {/* Property Characteristics */}
              <section id="characteristics" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Property Characteristics
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    The 1950s was a transitional era in UK housing construction. Post-war
                    rebuilding required rapid construction, leading to a mix of traditional
                    methods and new approaches. Understanding your specific property's
                    construction is crucial for planning effective improvements.
                  </p>
                </div>

                <WarningBox title="Mixed Construction Era">
                  <p>
                    Unlike properties from other eras, 1950s houses cannot be assessed at a
                    glance. Wall construction varied significantly, with some properties having
                    11-inch cavity walls with narrow cavities, others having solid 9-inch walls,
                    and some having non-traditional construction. Always commission a
                    professional survey before planning improvements.
                  </p>
                </WarningBox>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary-600" />
                        Wall Construction (Variable)
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>11-inch (280mm) cavity walls with 2-inch (50mm) cavities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Or 9-inch (225mm) solid brick walls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Some non-traditional prefab or system-built</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>U-value typically 1.4-2.1 W/m2K depending on type</span>
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
                          <span>Hipped roofs with clay or concrete tiles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Ground floor bay windows (often)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Suspended timber or solid concrete floors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Original metal or wooden casement windows</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-primary-600" />
                        Pre-Regulations Construction
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>No Building Regulations until 1965</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>No mandatory insulation standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Variable construction quality</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Often built to local authority standards only</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-primary-600" />
                        Typical Starting Condition
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Some loft insulation (25-100mm if present)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Walls usually uninsulated</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Original or aged boiler systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Single glazing common on original windows</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <GeneratedImage
                  imageId="1950s-house-wall-comparison"
                  alt="Comparison diagram showing 1950s narrow cavity wall versus solid wall construction"
                  prompt="A technical illustration comparing the two main wall construction types found in 1950s properties. On the left, an 11-inch cavity wall cross-section shows the narrow 2-inch (50mm) cavity between brick leaves, highlighting the challenge of insulating such a tight space. On the right, a 9-inch solid brick wall cross-section shows the traditional construction with no cavity. Clear labels indicate dimensions and the different insulation approaches required for each type. Show side-by-side cross-sections of 11-inch cavity wall and 9-inch solid wall. Clearly label dimensions including the narrow 2-inch (50mm) cavity. Indicate the different insulation challenges for each wall type."
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

                <InfoBox title="Why 1950s Houses Have Variable EPC Scores">
                  <p className="mb-2">
                    The EPC rating of a 1950s property depends heavily on its specific
                    construction type and what improvements have already been made:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Cavity wall properties (if fillable) can reach C more easily</li>
                    <li>Narrow cavity properties may need specialist assessment</li>
                    <li>Solid wall properties face similar challenges to Victorian homes</li>
                    <li>Non-traditional construction may have unique issues</li>
                  </ul>
                </InfoBox>

                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      1. Narrow Cavity Walls
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Many 1950s properties have 11-inch cavity walls, but with only a 2-inch
                      (50mm) cavity. This narrow gap can make standard cavity wall insulation
                      difficult or impossible to install effectively, as the minimum recommended
                      cavity width for most insulation materials is 50mm clear width.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      2. Unknown Construction Type
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Without professional inspection, it can be difficult to determine whether
                      walls are solid or cavity. The wall thickness at window reveals, and the
                      brick pattern, can provide clues but are not definitive. Borescope
                      inspection is often required.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      3. Pre-Building Regulations Construction
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Built before mandatory building standards, 1950s properties may have
                      inconsistent construction quality. Some local authorities had higher
                      standards than others, leading to variation even within similar
                      property types.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      4. Exposed Locations
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Cavity wall insulation in exposed locations (high wind-driven rain
                      exposure) can cause damp problems. Many 1950s council estates were
                      built in exposed locations on the edges of towns, requiring careful
                      assessment before filling cavities.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      5. Original Services
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Properties that have not been modernised may still have original
                      electrical wiring, plumbing, and heating systems. While improving the
                      EPC, you may need to factor in the cost of updating these services
                      to meet current standards.
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
                    The upgrade pathway for a 1950s property depends critically on wall type.
                    Properties with standard cavity walls can follow a similar approach to
                    1960s-70s houses, while solid wall properties need the more expensive
                    solutions required for Victorian homes.
                  </p>
                </div>

                <section id="upgrade-priority" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Priority Order for Maximum Impact
                  </h3>

                  <CostTable
                    title="1950s House Upgrade Costs and EPC Impact"
                    items={[
                      {
                        improvement: 'Cavity Wall Insulation (if suitable)',
                        lowEstimate: 450,
                        highEstimate: 1500,
                        notes: 'If cavity width allows. 8-12 EPC points.',
                      },
                      {
                        improvement: 'Internal Wall Insulation (if solid walls)',
                        lowEstimate: 8000,
                        highEstimate: 14000,
                        notes: 'For solid wall properties. 10-15 EPC points.',
                      },
                      {
                        improvement: 'Loft Insulation (to 270mm)',
                        lowEstimate: 300,
                        highEstimate: 500,
                        notes: 'Quick win. 4-8 EPC points.',
                      },
                      {
                        improvement: 'Condensing Boiler Upgrade',
                        lowEstimate: 2500,
                        highEstimate: 4000,
                        notes: 'If boiler is 15+ years old. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Double Glazing',
                        lowEstimate: 3500,
                        highEstimate: 7000,
                        notes: 'Replacing original single glazing. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Smart Heating Controls',
                        lowEstimate: 200,
                        highEstimate: 400,
                        notes: 'Room thermostat + TRVs. 2-4 EPC points.',
                      },
                      {
                        improvement: 'Draught Proofing',
                        lowEstimate: 150,
                        highEstimate: 350,
                        notes: 'Windows, doors, floors. 1-3 EPC points.',
                      },
                      {
                        improvement: 'LED Lighting',
                        lowEstimate: 100,
                        highEstimate: 200,
                        notes: 'Simple upgrade. 1-2 EPC points.',
                      },
                    ]}
                    showTotal
                    footerNote="Costs depend heavily on wall type. Cavity wall properties will have significantly lower total costs than solid wall properties."
                  />

                  <TipBox title="Survey First, Then Plan">
                    <p className="mb-2">
                      For 1950s properties, always commission a professional survey before
                      committing to any wall insulation work. The survey should determine:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Wall construction type (solid, cavity, or non-traditional)</li>
                      <li>Cavity width (if applicable)</li>
                      <li>Exposure zone for wind-driven rain assessment</li>
                      <li>Any existing cavity fill or problems</li>
                      <li>Suitability for different insulation methods</li>
                    </ul>
                  </TipBox>
                </section>
              </section>

              {/* Cost Estimates */}
              <section id="costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Cost Estimates</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    The cost to reach EPC C for a 1950s house varies significantly depending
                    on wall construction. This makes an accurate survey essential before
                    budgeting for improvements.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Cavity Wall Property</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(4000)} - {formatCurrency(8000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        If cavity walls are suitable for insulation, costs are similar to
                        1960s-70s properties with good upgrade potential.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Solid Wall Property</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(8000)} - {formatCurrency(12000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Solid wall properties require internal or external insulation,
                        significantly increasing costs and complexity.
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
                        Solid wall 1950s properties may approach or exceed this threshold,
                        potentially qualifying for exemption.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <WarningBox title="Narrow Cavities May Increase Costs">
                  <p>
                    If your 1950s property has narrow cavity walls (less than 50mm clear width),
                    standard cavity fill may not be suitable. Options include specialist bead
                    insulation designed for narrow cavities, or reverting to internal wall
                    insulation at higher cost. Always get a professional assessment.
                  </p>
                </WarningBox>
              </section>

              {/* Special Considerations */}
              <section id="special-considerations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Special Considerations
                </h2>

                <section id="narrow-cavities" className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Narrow Cavity Walls
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      Many 1950s properties have cavity walls with only a 50mm (2-inch) gap
                      between the inner and outer leaves. This presents specific challenges:
                    </p>
                    <ul className="text-neutral-700">
                      <li>
                        <strong>Standard mineral wool</strong> - typically needs 50mm minimum
                        clear cavity, so may not be suitable if there are wall ties or debris
                      </li>
                      <li>
                        <strong>Blown bead insulation</strong> - can work in narrower cavities
                        but requires specialist assessment
                      </li>
                      <li>
                        <strong>Foam insulation</strong> - can fill narrow cavities but has
                        higher failure rates and potential damp issues
                      </li>
                    </ul>
                    <p className="text-neutral-700">
                      If cavity fill is not suitable, the alternatives are internal or external
                      wall insulation, both significantly more expensive than cavity fill.
                    </p>
                  </div>

                  <InfoBox title="Specialist Survey Required">
                    <p>
                      For narrow cavity walls, insist on a borescope inspection rather than
                      relying on external measurements. The surveyor should check cavity width
                      at multiple points, assess any obstructions, and evaluate exposure levels
                      before recommending a solution.
                    </p>
                  </InfoBox>
                </section>

                <section id="pre-regulations" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Pre-Building Regulations Issues
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      Properties built before 1965 were not subject to Building Regulations,
                      meaning construction standards varied significantly. Common issues include:
                    </p>
                    <ul className="text-neutral-700">
                      <li>
                        <strong>Inconsistent cavity width</strong> - may vary across the building
                      </li>
                      <li>
                        <strong>Missing or inadequate DPCs</strong> - damp-proof courses may be
                        absent or failed
                      </li>
                      <li>
                        <strong>Wall tie issues</strong> - original ties may be corroding
                      </li>
                      <li>
                        <strong>Variable brick quality</strong> - some may be more porous
                      </li>
                    </ul>
                    <p className="text-neutral-700">
                      These issues should be addressed before or alongside energy improvements
                      to avoid creating or exacerbating damp problems.
                    </p>
                  </div>

                  <TipBox title="Combine Surveys for Value">
                    <p>
                      If you are having a cavity wall survey, consider combining it with a
                      general building survey to identify any structural or damp issues that
                      should be addressed. This can save money compared to separate surveys
                      and ensures improvements are made in the correct order.
                    </p>
                  </TipBox>
                </section>
              </section>

              {/* Wall Type Identification */}
              <section id="wall-type-identification" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Identifying Wall Type
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Before planning improvements, you need to determine your wall construction
                    type. Here are some methods to help identify whether you have solid or
                    cavity walls:
                  </p>
                </div>

                <ComparisonTable
                  title="Solid vs Cavity Wall Identification"
                  featureLabels={{
                    thickness: 'Wall Thickness',
                    brickPattern: 'Brick Pattern (if visible)',
                    windowReveal: 'Window Reveal Depth',
                    ageIndicator: 'Age Indicator',
                    definitive: 'Definitive Test',
                  }}
                  options={[
                    {
                      name: 'Solid Wall (9 inch)',
                      features: {
                        thickness: '225mm (9 inches)',
                        brickPattern: 'Mix of headers and stretchers',
                        windowReveal: 'Shallow (under 300mm)',
                        ageIndicator: 'More common pre-1930, but some 1950s',
                        definitive: 'Borescope inspection',
                      },
                    },
                    {
                      name: 'Cavity Wall (11 inch)',
                      recommended: true,
                      features: {
                        thickness: '280mm (11 inches)',
                        brickPattern: 'Usually stretcher bond only',
                        windowReveal: 'Deeper (300mm+)',
                        ageIndicator: 'Standard for most 1950s builds',
                        definitive: 'Borescope inspection',
                      },
                    },
                  ]}
                  footerNote="These are indicators only. The only definitive way to confirm wall type is a borescope inspection through a small drilled hole."
                />

                <GeneratedImage
                  imageId="1950s-house-wall-measurement"
                  alt="Diagram showing how to measure wall thickness at a window reveal"
                  prompt="A clear technical illustration demonstrating how to measure wall thickness at a window reveal to determine wall type. The cross-section through a window opening shows measurement points from the internal face to external face, with annotations indicating that 225mm typically suggests solid construction while 280mm+ indicates cavity walls. A note reminds readers that professional borescope verification is recommended for definitive assessment. Show cross-section through a window opening with measurement points. Label typical measurements: 225mm = solid, 280mm+ = cavity. Include a note recommending professional verification."
                  width={800}
                  height={350}
                  className="mt-8"
                />
              </section>

              {/* Example Upgrade Pathway */}
              <section id="example-pathway" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Example Upgrade Pathway
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Here is a realistic example of how a 1950s semi-detached house with
                    cavity walls might progress from EPC rating E to C:
                  </p>
                </div>

                <Card variant="outlined" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4">
                      Case Study: 3-Bed 1950s Semi, Leeds (Cavity Walls)
                    </h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Starting</p>
                        <EPCRatingBadge rating="E" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">48 points</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Target</p>
                        <EPCRatingBadge rating="C" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">69 points</p>
                      </div>
                      <div className="text-sm text-neutral-600 ml-4">
                        <strong>21 points needed</strong>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Cavity wall insulation (50mm cavity, suitable)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+10 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(1100)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Loft insulation increased to 270mm</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+6 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(420)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>New A-rated condensing boiler</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+8 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(3100)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Smart heating controls with TRVs</span>
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
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(130)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t-2 border-primary-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-primary-800">Final Result:</span>
                          <span className="ml-2 text-success-700 font-medium">77 points (Rating C)</span>
                        </div>
                        <div>
                          <span className="font-bold text-primary-800">Total Cost:</span>
                          <span className="ml-2 text-primary-700 font-medium">{formatCurrency(5100)}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <InfoBox title="Result Depends on Wall Type">
                  <p>
                    This case study had suitable cavity walls, allowing cost-effective
                    insulation. A solid wall 1950s property starting at the same point would
                    require internal or external wall insulation, potentially adding{' '}
                    {formatCurrency(7000)} to {formatCurrency(12000)} to the total cost.
                    Always get a survey to determine your wall type before budgeting.
                  </p>
                </InfoBox>

                <GeneratedImage
                  imageId="1950s-house-epc-comparison"
                  alt="EPC certificate comparison showing improvement from E to C"
                  prompt="A side-by-side comparison of two EPC certificates demonstrating the improvement journey for a 1950s house. The left certificate shows the original E rating with 48 points and an orange-red energy bar, while the right certificate displays the improved C rating with 77 points and a green energy bar. The visual transformation highlights the significant progress achievable through strategic upgrades to these post-war properties. Show official GOV.UK EPC certificate format side by side. Left: E rating (48 points) with orange/red bar; Right: C rating (77 points) with green bar. Highlight the improvement visually with clear before/after comparison."
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
                        a qualified assessor. This gives you your baseline score and starting point.
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
                        2. Commission a Wall Survey
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        For 1950s properties, a professional survey to determine wall type is
                        essential before planning improvements. This will determine your upgrade pathway.
                      </p>
                      <a
                        href="https://www.ciga.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Find a CIGA registered surveyor
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
                        Once you know your wall type, obtain at least three quotes from
                        TrustMark-registered installers for the appropriate insulation method.
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
                    documentTitle="Technical Standards"
                    url="https://www.ciga.co.uk/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Building Research Establishment"
                    documentTitle="Solid wall insulation guidance"
                    url="https://www.bregroup.com/"
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
                      Get a personalised estimate for your 1950s property using our
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
              title="1960s-1970s House Guide"
              excerpt="Guide for later cavity wall properties with excellent upgrade potential and lower costs."
              href="/property-types/1960s-1970s-house"
              category="Property Guide"
              readingTime={12}
            />
            <RelatedContentCard
              title="Victorian Terrace Guide"
              excerpt="Comprehensive guide for solid wall properties with similar challenges to some 1950s homes."
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
