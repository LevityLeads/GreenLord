import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, Building2, Building, Calendar, PoundSterling } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardBody, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { EPCRatingBadge } from '@/components/ui/EPCRatingBadge';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { TipBox } from '@/components/content/TipBox';
import { ComparisonTable } from '@/components/content/ComparisonTable';
import { ImagePlaceholder } from '@/components/content/ImagePlaceholder';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { SourceCitation } from '@/components/content/SourceCitation';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency, formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Property Type EPC Guides | Upgrade Strategies by Property Type | GreenLord',
  description:
    'Comprehensive EPC upgrade guides for UK landlords by property type. Victorian terraces, 1930s semis, purpose-built flats and more. Find tailored improvement strategies and realistic costs for your property.',
  openGraph: {
    title: 'Property Type EPC Guides | GreenLord',
    description:
      'Find the right EPC upgrade strategy for your property type. Expert guides with realistic costs and improvement recommendations.',
    url: `${SITE_CONFIG.url}/property-types`,
    type: 'website',
  },
};

const propertyTypes = [
  {
    title: 'Victorian Terrace (Pre-1919)',
    slug: 'victorian-terrace',
    description:
      'Solid brick construction with high ceilings, suspended timber floors, and typically no cavity walls. These period properties often present the most challenging EPC improvements.',
    typicalStartingRating: 'E' as const,
    typicalStartingScore: '30-50 points',
    keyChallenge: 'Solid walls require expensive internal or external insulation',
    costRange: '8,000 - 30,000',
    icon: Home,
    features: [
      'Solid brick walls (9" or 13")',
      'Single glazing or secondary glazing',
      'Suspended timber floors',
      'High ceilings (heat loss)',
    ],
  },
  {
    title: '1930s Semi-Detached',
    slug: '1930s-semi',
    description:
      'Typically featuring unfilled cavity walls, bay windows, and original features. These properties often have excellent upgrade potential at reasonable cost.',
    typicalStartingRating: 'D' as const,
    typicalStartingScore: '45-65 points',
    keyChallenge: 'Unfilled cavity walls and original single-glazed windows',
    costRange: '2,000 - 15,000',
    icon: Building2,
    features: [
      'Cavity walls (often unfilled)',
      'Bay windows (draughty)',
      'Original suspended floors',
      'Loft often accessible',
    ],
  },
  {
    title: 'Purpose-Built Flat',
    slug: 'purpose-built-flat',
    description:
      'Built specifically as flats, with varying construction types from 1960s blocks to modern developments. Often already more energy efficient due to shared walls.',
    typicalStartingRating: 'D' as const,
    typicalStartingScore: '55-75 points',
    keyChallenge: 'Leasehold restrictions and need for freeholder consent',
    costRange: '1,000 - 5,000',
    icon: Building,
    features: [
      'Shared walls (less heat loss)',
      'Often communal heating',
      'Limited external modifications',
      'Leasehold considerations',
    ],
  },
];

export default function PropertyTypesPage() {
  return (
    <>
      <PageHeader
        title="EPC Upgrade Guides by Property Type"
        subtitle="Your property type determines your upgrade options, costs, and strategy. Find tailored guidance for reaching EPC C before the 2030 deadline."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
        ]}
      />

      {/* Introduction Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">
              Why Property Type Matters for EPC Compliance
            </h2>
            <div className="prose prose-lg text-neutral-700 max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                The age and construction of your rental property fundamentally determines which
                energy efficiency improvements are possible, how much they will cost, and how many
                EPC points they will gain. A Victorian terrace with solid walls faces entirely
                different challenges than a 1960s flat with cavity walls.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Understanding your property type is the essential first step in planning your
                route to EPC C compliance. Each property type has characteristic construction
                methods, common issues, and proven upgrade pathways that landlords before you
                have successfully navigated.
              </p>
            </div>

            <KeyFactBox title="2030 EPC C Deadline" icon={Calendar}>
              <p>
                From 1 October 2030, all rental properties in England and Wales must have an EPC
                rating of C or above for new tenancies, extending to all tenancies from 2030.
                Properties that cannot reach C may qualify for exemption after spending the{' '}
                {formatCurrency(KEY_DATES.costCap)} cost cap on improvements.
              </p>
            </KeyFactBox>
          </div>
        </Container>
      </Section>

      {/* Hero Image */}
      <Section background="muted" padding="md">
        <Container>
          <ImagePlaceholder
            alt="Illustrated grid showing different UK property types including Victorian terrace, 1930s semi, and purpose-built flat"
            description="Architectural illustration showcasing the three core UK property types as a triptych. Use a clean, vector-based illustration style with consistent linework and the GreenLord colour palette. LEFT: Victorian terrace - emphasise the tall proportions, ornate bay window, sash windows, chimney pots, and decorative brickwork patterns. CENTRE: 1930s semi-detached - show the paired symmetry, curved bay window, pebbledash texture, hipped roof with clay tiles. RIGHT: Purpose-built flat block - depict a low-rise 1960s/70s style with regular window pattern, concrete balconies, flat or shallow-pitched roof. Each building should be styled consistently, presented at similar scale, creating an 'at a glance' reference for visitors to identify their property type."
            width={1200}
            height={500}
            priority
            instructions={[
              'Consistent illustration style: clean vector art, subtle shadows, architectural precision',
              'Three distinct buildings at similar scale - side by side or in a creative layout',
              'Emphasise era-defining features: Victorian ornament, 1930s curves, 1960s utility',
              'Brand colour palette; consider EPC-inspired colour accents per building',
              'Works as hero image: balanced composition, text overlay friendly if needed',
            ]}
          />
        </Container>
      </Section>

      {/* Property Type Cards */}
      <Section background="white" padding="lg" id="property-guides">
        <Container>
          <h2 className="text-2xl font-bold text-primary-800 mb-8">
            Choose Your Property Type
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map((property) => {
              const Icon = property.icon;
              return (
                <Card
                  key={property.slug}
                  as="article"
                  hoverable
                  className="flex flex-col h-full"
                >
                  <CardBody className="flex-1">
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-primary-800 mb-1">
                          {property.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-neutral-600">Typical EPC:</span>
                          <EPCRatingBadge rating={property.typicalStartingRating} size="sm" />
                          <span className="text-xs text-neutral-500">
                            ({property.typicalStartingScore})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 text-sm mb-4">{property.description}</p>

                    {/* Key Challenge */}
                    <div className="mb-4 p-3 rounded-lg bg-warning-50 border border-warning-200">
                      <p className="text-sm text-warning-800">
                        <span className="font-semibold">Key Challenge:</span>{' '}
                        {property.keyChallenge}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neutral-700 mb-2">
                        Common Features:
                      </h4>
                      <ul className="space-y-1">
                        {property.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-neutral-600 flex items-start gap-2"
                          >
                            <span className="text-primary-500 mt-1">-</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cost Range */}
                    <div className="flex items-center gap-2 text-sm">
                      <PoundSterling className="w-4 h-4 text-neutral-500" />
                      <span className="text-neutral-600">Typical upgrade cost:</span>
                      <span className="font-semibold text-primary-700">
                        {property.costRange}
                      </span>
                    </div>
                  </CardBody>

                  <CardFooter align="left" className="mt-auto">
                    <Link href={`/property-types/${property.slug}`} className="w-full">
                      <Button
                        variant="primary"
                        fullWidth
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        View Full Guide
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section background="muted" padding="lg" id="comparison">
        <Container>
          <h2 className="text-2xl font-bold text-primary-800 mb-4">
            Quick Comparison: Property Types at a Glance
          </h2>
          <p className="text-neutral-600 mb-8 max-w-3xl">
            Compare the key differences between property types to understand where your
            property sits and what to expect from the upgrade process.
          </p>

          <ComparisonTable
            title="Property Type Comparison"
            featureLabels={{
              typicalEpc: 'Typical Starting EPC',
              wallType: 'Wall Construction',
              cavityInsulation: 'Cavity Insulation Possible',
              upgradeComplexity: 'Upgrade Complexity',
              typicalCost: 'Typical Cost to C',
              costCapLikely: 'Cost Cap Exemption Likely',
              planningRestrictions: 'Planning Restrictions Common',
              leaseholdConsent: 'Leasehold Consent Required',
            }}
            options={[
              {
                name: 'Victorian Terrace',
                features: {
                  typicalEpc: 'E (30-50)',
                  wallType: 'Solid brick',
                  cavityInsulation: false,
                  upgradeComplexity: 'High',
                  typicalCost: '8,000 - 30,000',
                  costCapLikely: true,
                  planningRestrictions: true,
                  leaseholdConsent: false,
                },
              },
              {
                name: '1930s Semi',
                recommended: true,
                features: {
                  typicalEpc: 'D (45-65)',
                  wallType: 'Cavity (unfilled)',
                  cavityInsulation: true,
                  upgradeComplexity: 'Medium',
                  typicalCost: '2,000 - 15,000',
                  costCapLikely: false,
                  planningRestrictions: false,
                  leaseholdConsent: false,
                },
              },
              {
                name: 'Purpose-Built Flat',
                features: {
                  typicalEpc: 'D (55-75)',
                  wallType: 'Varies',
                  cavityInsulation: null,
                  upgradeComplexity: 'Low-Medium',
                  typicalCost: '1,000 - 5,000',
                  costCapLikely: false,
                  planningRestrictions: false,
                  leaseholdConsent: true,
                },
              },
            ]}
            footerNote="Costs and ratings are estimates based on typical properties. Individual properties may vary significantly."
          />
        </Container>
      </Section>

      {/* Understanding Your Property */}
      <Section background="white" padding="lg" id="understanding">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">
              Understanding Your Property Construction
            </h2>

            <div className="prose prose-lg text-neutral-700 max-w-none mb-8">
              <p className="leading-relaxed mb-4">
                The construction era of your property largely determines its building methods.
                While there are always exceptions, properties built in certain periods tend to
                share common characteristics that affect their energy efficiency and upgrade
                options.
              </p>

              <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
                Pre-1919: Solid Wall Era
              </h3>
              <p className="leading-relaxed mb-4">
                Properties built before 1919, including Victorian and Edwardian homes, typically
                have solid brick walls without a cavity. These walls are usually 9 inches (225mm)
                or 13 inches (340mm) thick and cannot be insulated with standard cavity wall
                insulation. Instead, internal or external wall insulation is required, which is
                significantly more expensive and disruptive.
              </p>

              <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
                1919-1945: Early Cavity Walls
              </h3>
              <p className="leading-relaxed mb-4">
                Properties from this era, including 1930s semis, often have cavity walls that
                were left unfilled when built. These properties are excellent candidates for
                cavity wall insulation, which is one of the most cost-effective EPC improvements
                available. The cavity is typically 50mm wide, though some may have wider cavities.
              </p>

              <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">
                Post-1945: Varied Construction
              </h3>
              <p className="leading-relaxed mb-4">
                Post-war properties vary significantly in construction. Some 1950s-60s properties
                may have non-standard construction (prefab, system-built, etc.) that requires
                specialist assessment. Later properties increasingly have insulated cavities
                from construction, though many 1970s-80s homes still have unfilled cavities.
              </p>
            </div>

            <TipBox title="How to Check Your Wall Type">
              <p className="mb-2">
                Not sure if your property has solid or cavity walls? Here are quick checks:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <strong>Measure wall thickness:</strong> At a door or window opening, measure
                  the wall depth. Less than 260mm suggests solid walls; over 260mm suggests cavity.
                </li>
                <li>
                  <strong>Check the brick pattern:</strong> If you can see alternating long bricks
                  (stretchers) and short ends (headers), it is likely solid brick.
                </li>
                <li>
                  <strong>Look at your EPC:</strong> Your existing EPC should state the wall type
                  in the property details section.
                </li>
                <li>
                  <strong>Commission a survey:</strong> For certainty, a thermal imaging survey
                  or borescope inspection can confirm wall type and insulation status.
                </li>
              </ul>
            </TipBox>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">
              Calculate Your Upgrade Costs
            </h2>
            <p className="text-lg text-primary-700 mb-6">
              Use our free calculator to get a personalised estimate of upgrade costs and
              recommendations based on your specific property details.
            </p>
            <Link href="/tools/cost-calculator">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Try the Cost Calculator
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Related Content */}
      <Section background="white" padding="lg">
        <Container>
          <h2 className="text-2xl font-bold text-primary-800 mb-8">Related Resources</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <RelatedContentCard
              title="EPC C 2030 Deadline Explained"
              excerpt="Everything landlords need to know about the upcoming EPC requirements, exemptions, and penalties for non-compliance."
              href="/regulations/epc-c-2030-deadline"
              category="Regulations"
              readingTime={12}
            />
            <RelatedContentCard
              title="Cost Cap and Exemptions Guide"
              excerpt="Understand the 10,000 cost cap exemption and other valid reasons for not meeting EPC C requirements."
              href="/regulations/cost-cap-exemptions"
              category="Regulations"
              readingTime={8}
            />
            <RelatedContentCard
              title="Complete Upgrade Cost Guide"
              excerpt="Detailed breakdown of costs for every type of EPC improvement, from loft insulation to heat pumps."
              href="/costs"
              category="Costs"
              readingTime={15}
            />
          </div>
        </Container>
      </Section>

      {/* Sources */}
      <Section background="muted" padding="md">
        <Container>
          <h3 className="text-lg font-semibold text-neutral-700 mb-4">Sources</h3>
          <div className="space-y-2">
            <SourceCitation
              sourceName="GOV.UK"
              documentTitle="Domestic Private Rented Property: Minimum Energy Efficiency Standard"
              url="https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance"
              accessedDate="January 2026"
            />
            <SourceCitation
              sourceName="Energy Saving Trust"
              documentTitle="Insulating your home"
              url="https://energysavingtrust.org.uk/advice/insulation/"
              accessedDate="January 2026"
            />
            <SourceCitation
              sourceName="Historic England"
              documentTitle="Energy Efficiency and Historic Buildings"
              url="https://historicengland.org.uk/advice/technical-advice/energy-efficiency-and-historic-buildings/"
              accessedDate="January 2026"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
