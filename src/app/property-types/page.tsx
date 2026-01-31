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

// Pre-War Properties
const preWarProperties = [
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
    title: 'Edwardian House (1901-1910)',
    slug: 'edwardian-house',
    description:
      'Similar to Victorian properties but often with larger windows and slightly better ventilation. Still featuring solid walls but may have some early cavity construction.',
    typicalStartingRating: 'E' as const,
    typicalStartingScore: '35-55 points',
    keyChallenge: 'Large windows and solid walls create significant heat loss',
    costRange: '7,000 - 25,000',
    icon: Home,
    features: [
      'Solid or early cavity walls',
      'Large single-glazed windows',
      'High ceilings with cornices',
      'Better natural light than Victorian',
    ],
  },
  {
    title: 'Pre-1919 Semi-Detached',
    slug: 'pre-1919-semi',
    description:
      'Period semi-detached properties with solid walls and traditional construction. One shared wall reduces heat loss compared to terraces, but solid walls remain challenging.',
    typicalStartingRating: 'E' as const,
    typicalStartingScore: '32-52 points',
    keyChallenge: 'Solid walls and original features require careful upgrade planning',
    costRange: '7,500 - 28,000',
    icon: Building2,
    features: [
      'Solid brick construction',
      'One shared party wall',
      'Original timber windows',
      'Suspended timber floors',
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
];

// Post-War Properties
const postWarProperties = [
  {
    title: '1950s House',
    slug: '1950s-house',
    description:
      'Post-war construction with cavity walls, often with non-traditional building methods. May include prefab elements or system-built construction requiring specialist assessment.',
    typicalStartingRating: 'D' as const,
    typicalStartingScore: '48-62 points',
    keyChallenge: 'Non-standard construction may limit insulation options',
    costRange: '2,500 - 12,000',
    icon: Home,
    features: [
      'Cavity walls (various types)',
      'May have non-traditional construction',
      'Original metal windows common',
      'Solid concrete floors',
    ],
  },
  {
    title: '1960s-1970s House',
    slug: '1960s-1970s-house',
    description:
      'Wide variety of construction types including system-built and traditional. Often features unfilled cavities and single glazing, but generally straightforward to upgrade.',
    typicalStartingRating: 'D' as const,
    typicalStartingScore: '50-68 points',
    keyChallenge: 'Variable construction quality and potential for non-standard builds',
    costRange: '2,000 - 10,000',
    icon: Home,
    features: [
      'Cavity walls (often unfilled)',
      'Original UPVC or aluminium windows',
      'Flat roofs common on extensions',
      'Partial loft insulation likely',
    ],
  },
  {
    title: '1980s-1990s House',
    slug: '1980s-1990s-house',
    description:
      'Built to better building regulations with partial insulation already present. Often feature double glazing and some cavity insulation, requiring fewer improvements to reach EPC C.',
    typicalStartingRating: 'D' as const,
    typicalStartingScore: '55-72 points',
    keyChallenge: 'May already have partial upgrades making further gains incremental',
    costRange: '1,500 - 8,000',
    icon: Home,
    features: [
      'Partial cavity insulation likely',
      'Double glazing often present',
      'Some loft insulation installed',
      'Gas central heating standard',
    ],
  },
];

// Flats & HMOs
const flatsAndHMOs = [
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
  {
    title: 'Converted Flat',
    slug: 'converted-flat',
    description:
      'Flats created from larger houses, often Victorian or Edwardian. May have inherited poor insulation from the original property and complex ownership arrangements.',
    typicalStartingRating: 'E' as const,
    typicalStartingScore: '40-60 points',
    keyChallenge: 'Inherited construction issues and shared building consent requirements',
    costRange: '3,000 - 12,000',
    icon: Building,
    features: [
      'Original building construction',
      'Complex ownership structures',
      'May share heating systems',
      'Limited external control',
    ],
  },
  {
    title: 'HMO (House in Multiple Occupation)',
    slug: 'hmo',
    description:
      'Properties let to multiple households with shared facilities. Subject to additional licensing and fire safety requirements that affect upgrade choices.',
    typicalStartingRating: 'D' as const,
    typicalStartingScore: '45-65 points',
    keyChallenge: 'Balancing energy upgrades with HMO licensing and fire safety requirements',
    costRange: '4,000 - 18,000',
    icon: Building2,
    features: [
      'Multiple individual rooms',
      'Shared kitchen/bathroom facilities',
      'Additional licensing requirements',
      'Fire safety considerations',
    ],
  },
];

// Combined for iteration when needed
const allPropertyTypes = [...preWarProperties, ...postWarProperties, ...flatsAndHMOs];

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
            description="A visually appealing illustrated grid or collage showing the three main property types covered in these guides. Each property type should be clearly distinguishable with characteristic architectural features. Victorian terrace with bay windows and chimneys, 1930s semi with typical semi-circular bay and pebbledash, and a purpose-built flat block."
            width={1200}
            height={500}
            priority
            instructions={[
              'Use a clean, modern illustration style consistent with the GreenLord brand',
              'Show each property type with recognisable UK architectural features',
              'Consider using a subtle colour-coding system matching EPC colours',
              'Include small icons or labels for each property type',
              'Ensure the image works well as a hero section visual',
            ]}
          />
        </Container>
      </Section>

      {/* Property Type Cards */}
      <Section background="white" padding="lg" id="property-guides">
        <Container>
          {/* Pre-War Properties */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">
              Pre-War Properties
            </h2>
            <p className="text-neutral-600 mb-6">
              Properties built before 1945, typically featuring solid or early cavity walls and traditional construction methods.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {preWarProperties.map((property) => {
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

                      {/* Cost Range */}
                      <div className="flex items-center gap-2 text-sm">
                        <PoundSterling className="w-4 h-4 text-neutral-500" />
                        <span className="text-neutral-600">Typical cost:</span>
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
                          View Guide
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Post-War Properties */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">
              Post-War Properties
            </h2>
            <p className="text-neutral-600 mb-6">
              Properties built from 1945 onwards with cavity walls and improving building standards over time.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {postWarProperties.map((property) => {
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
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-accent-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-primary-800 mb-1">
                            {property.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-neutral-600">Typical EPC:</span>
                            <EPCRatingBadge rating={property.typicalStartingRating} size="sm" />
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

                      {/* Cost Range */}
                      <div className="flex items-center gap-2 text-sm">
                        <PoundSterling className="w-4 h-4 text-neutral-500" />
                        <span className="text-neutral-600">Typical cost:</span>
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
                          View Guide
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Flats & HMOs */}
          <div>
            <h2 className="text-2xl font-bold text-primary-800 mb-2">
              Flats & HMOs
            </h2>
            <p className="text-neutral-600 mb-6">
              Purpose-built and converted flats, plus Houses in Multiple Occupation with their unique compliance considerations.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {flatsAndHMOs.map((property) => {
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
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-success-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-success-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-primary-800 mb-1">
                            {property.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-neutral-600">Typical EPC:</span>
                            <EPCRatingBadge rating={property.typicalStartingRating} size="sm" />
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

                      {/* Cost Range */}
                      <div className="flex items-center gap-2 text-sm">
                        <PoundSterling className="w-4 h-4 text-neutral-500" />
                        <span className="text-neutral-600">Typical cost:</span>
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
                          View Guide
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
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
                },
              },
              {
                name: 'Edwardian House',
                features: {
                  typicalEpc: 'E (35-55)',
                  wallType: 'Solid/early cavity',
                  cavityInsulation: false,
                  upgradeComplexity: 'High',
                  typicalCost: '7,000 - 25,000',
                  costCapLikely: true,
                },
              },
              {
                name: 'Pre-1919 Semi',
                features: {
                  typicalEpc: 'E (32-52)',
                  wallType: 'Solid brick',
                  cavityInsulation: false,
                  upgradeComplexity: 'High',
                  typicalCost: '7,500 - 28,000',
                  costCapLikely: true,
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
                },
              },
              {
                name: '1950s House',
                features: {
                  typicalEpc: 'D (48-62)',
                  wallType: 'Cavity (various)',
                  cavityInsulation: true,
                  upgradeComplexity: 'Medium',
                  typicalCost: '2,500 - 12,000',
                  costCapLikely: false,
                },
              },
              {
                name: '1960s-1970s House',
                features: {
                  typicalEpc: 'D (50-68)',
                  wallType: 'Cavity (unfilled)',
                  cavityInsulation: true,
                  upgradeComplexity: 'Low-Medium',
                  typicalCost: '2,000 - 10,000',
                  costCapLikely: false,
                },
              },
              {
                name: '1980s-1990s House',
                features: {
                  typicalEpc: 'D (55-72)',
                  wallType: 'Insulated cavity',
                  cavityInsulation: true,
                  upgradeComplexity: 'Low',
                  typicalCost: '1,500 - 8,000',
                  costCapLikely: false,
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
                },
              },
              {
                name: 'Converted Flat',
                features: {
                  typicalEpc: 'E (40-60)',
                  wallType: 'Original building',
                  cavityInsulation: null,
                  upgradeComplexity: 'Medium-High',
                  typicalCost: '3,000 - 12,000',
                  costCapLikely: false,
                },
              },
              {
                name: 'HMO',
                features: {
                  typicalEpc: 'D (45-65)',
                  wallType: 'Varies',
                  cavityInsulation: null,
                  upgradeComplexity: 'Medium-High',
                  typicalCost: '4,000 - 18,000',
                  costCapLikely: false,
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
