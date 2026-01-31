import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Building2, Phone, PoundSterling } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardBody, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { TipBox } from '@/components/content/TipBox';
import { ImagePlaceholder } from '@/components/content/ImagePlaceholder';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { SourceCitation } from '@/components/content/SourceCitation';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Local Landlord EPC Guides | City-Specific Grants & Support | GreenLord',
  description:
    'Find local EPC upgrade support, grants, and council schemes for landlords in major UK cities. Manchester, Birmingham, Leeds, Liverpool, and Bristol guides with local authority contacts and regional cost benchmarks.',
  openGraph: {
    title: 'Local Landlord EPC Guides | GreenLord',
    description:
      'City-specific EPC guidance for UK landlords. Local grants, council support, and regional cost estimates for your area.',
    url: `${SITE_CONFIG.url}/local-guides`,
    type: 'website',
  },
};

const cityGuides = [
  {
    name: 'Manchester',
    slug: 'manchester',
    description:
      'Home to a large private rented sector with significant Victorian and Edwardian housing stock. Manchester City Council offers the Home Energy Loan Plan with up to £10,000 interest-free.',
    prsProperties: '85,000+',
    belowEpcC: '58%',
    keyScheme: 'Home Energy Loan Plan',
    councilContact: 'manchester.gov.uk/energy',
    highlights: [
      'Interest-free loans up to £10,000',
      'Strong ECO4 Flex eligibility',
      'Retrofit coordinator support',
    ],
  },
  {
    name: 'Birmingham',
    slug: 'birmingham',
    description:
      'The UK second largest city with over 100,000 private rental properties. Birmingham City Council runs the Warm Homes scheme targeting fuel poverty and energy efficiency.',
    prsProperties: '100,000+',
    belowEpcC: '55%',
    keyScheme: 'Warm Homes Scheme',
    councilContact: 'birmingham.gov.uk/warmhomes',
    highlights: [
      'Large-scale retrofit programmes',
      'ECO4 Flex scheme participation',
      'Free energy advice service',
    ],
  },
  {
    name: 'Leeds',
    slug: 'leeds',
    description:
      'Yorkshire largest city with diverse housing stock from stone-built Victorian properties to modern developments. Leeds City Council actively supports energy efficiency improvements.',
    prsProperties: '70,000+',
    belowEpcC: '52%',
    keyScheme: 'Better Homes Leeds',
    councilContact: 'leeds.gov.uk/housing',
    highlights: [
      'Council energy advice team',
      'ECO4 and Warm Home Discount support',
      'Stone-built property expertise',
    ],
  },
  {
    name: 'Liverpool',
    slug: 'liverpool',
    description:
      'High proportion of pre-1919 terraced housing in the private rented sector. Liverpool City Council runs Cosy Homes Liverpool with targeted support for energy improvements.',
    prsProperties: '65,000+',
    belowEpcC: '62%',
    keyScheme: 'Cosy Homes Liverpool',
    councilContact: 'liverpool.gov.uk/housing',
    highlights: [
      'Cosy Homes Liverpool scheme',
      'High ECO4 eligibility areas',
      'Pre-1919 housing expertise',
    ],
  },
  {
    name: 'Bristol',
    slug: 'bristol',
    description:
      'Progressive city with strong sustainability focus and mixed housing stock. Bristol City Council leads on green initiatives with the Bristol Energy Network providing local advice.',
    prsProperties: '50,000+',
    belowEpcC: '48%',
    keyScheme: 'Bristol Energy Network',
    councilContact: 'bristol.gov.uk/energy',
    highlights: [
      'Strong green policy focus',
      'Bristol Energy Network advice',
      'Innovative retrofit schemes',
    ],
  },
];

export default function LocalGuidesPage() {
  return (
    <>
      <PageHeader
        title="Local Landlord EPC Guides"
        subtitle="Find local authority support, grants, and cost benchmarks for landlords in major UK cities. Each guide includes council contacts, local schemes, and regional pricing."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
        ]}
      />

      {/* Introduction Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">
              Why Local Guidance Matters for EPC Compliance
            </h2>
            <div className="prose prose-lg text-neutral-700 max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                EPC upgrade costs and available support vary significantly across the UK. Local
                authorities operate their own energy efficiency schemes, have different ECO4 Flex
                eligibility criteria, and work with local contractors who understand regional
                property types.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our city guides provide landlords with specific information about council support,
                local grant availability, and realistic cost benchmarks for their area. Whether you
                own Victorian terraces in Manchester or converted flats in Bristol, understanding
                your local landscape is essential for planning cost-effective improvements.
              </p>
            </div>

            <KeyFactBox title="Local Authority ECO4 Flex" icon={MapPin}>
              <p>
                Under ECO4 Flex, local authorities can declare households eligible for energy
                efficiency measures even if they do not meet standard criteria. Each council sets
                its own eligibility rules, meaning landlords with tenants on low incomes may access
                funded improvements that would not be available elsewhere.
              </p>
            </KeyFactBox>
          </div>
        </Container>
      </Section>

      {/* Hero Image */}
      <Section background="muted" padding="md">
        <Container>
          <ImagePlaceholder
            alt="Map of UK showing major cities with EPC compliance support"
            description="An illustrated map of England showing the five major cities covered in these guides: Manchester, Birmingham, Leeds, Liverpool, and Bristol. Each city should be marked with a pin or icon, with the cities visually connected to suggest a network of support."
            width={1200}
            height={500}
            priority
            instructions={[
              'Use a clean, modern illustration style consistent with the GreenLord brand',
              'Show a simplified UK map with the five cities highlighted',
              'Consider using colour coding to show regional EPC statistics',
              'Make the map visually engaging while remaining informative',
              'Ensure accessibility with clear labels for each city',
            ]}
          />
        </Container>
      </Section>

      {/* City Guide Cards */}
      <Section background="white" padding="lg" id="city-guides">
        <Container>
          <h2 className="text-2xl font-bold text-primary-800 mb-8">
            Choose Your City
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cityGuides.map((city) => (
              <Card
                key={city.slug}
                as="article"
                hoverable
                className="flex flex-col h-full"
              >
                <CardBody className="flex-1">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-primary-800 mb-1">
                        {city.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <Building2 className="w-4 h-4" />
                        <span>{city.prsProperties} PRS properties</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm mb-4">{city.description}</p>

                  {/* Key Stats */}
                  <div className="mb-4 p-3 rounded-lg bg-warning-50 border border-warning-200">
                    <p className="text-sm text-warning-800">
                      <span className="font-semibold">{city.belowEpcC}</span> of PRS properties
                      estimated below EPC C
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2">
                      Key Local Support:
                    </h4>
                    <ul className="space-y-1">
                      {city.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-sm text-neutral-600 flex items-start gap-2"
                        >
                          <span className="text-primary-500 mt-1">-</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Scheme */}
                  <div className="flex items-center gap-2 text-sm">
                    <PoundSterling className="w-4 h-4 text-neutral-500" />
                    <span className="text-neutral-600">Key scheme:</span>
                    <span className="font-semibold text-primary-700">
                      {city.keyScheme}
                    </span>
                  </div>
                </CardBody>

                <CardFooter align="left" className="mt-auto">
                  <Link href={`/local-guides/${city.slug}`} className="w-full">
                    <Button
                      variant="primary"
                      fullWidth
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      View {city.name} Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* What Each Guide Includes */}
      <Section background="muted" padding="lg">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">
              What Each Local Guide Includes
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <Card variant="outlined">
                <CardBody>
                  <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary-600" />
                    Local Authority Contacts
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Direct links to your council energy efficiency team, housing department
                    contacts, and local helplines for landlord support.
                  </p>
                </CardBody>
              </Card>

              <Card variant="outlined">
                <CardBody>
                  <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                    <PoundSterling className="w-5 h-5 text-primary-600" />
                    Grant Schemes
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Details of ECO4, Warm Homes: Local Grant, Boiler Upgrade Scheme, and any
                    city-specific funding available in your area.
                  </p>
                </CardBody>
              </Card>

              <Card variant="outlined">
                <CardBody>
                  <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary-600" />
                    Regional Cost Benchmarks
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Local pricing for common improvements, adjusted for regional labour costs
                    and typical property types in your city.
                  </p>
                </CardBody>
              </Card>

              <Card variant="outlined">
                <CardBody>
                  <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    Local Contractors
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Links to TrustMark installer searches, local EPC assessors, and council
                    retrofit coordinator programmes where available.
                  </p>
                </CardBody>
              </Card>
            </div>

            <TipBox title="Check Your Council Eligibility">
              <p>
                Before planning improvements, contact your local authority energy team to check
                if you or your tenants qualify for ECO4 Flex support. Eligibility criteria vary
                by council, and some areas have additional local schemes not widely advertised.
                A single phone call could save you thousands of pounds.
              </p>
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
              Use our free calculator to get a personalised estimate including regional cost
              adjustments for your specific location.
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
              title="ECO4 Scheme Explained"
              excerpt="Understand the Energy Company Obligation scheme and how landlords can access funded improvements for eligible tenants."
              href="/costs"
              category="Funding"
              readingTime={10}
            />
            <RelatedContentCard
              title="Property Type Guides"
              excerpt="Find upgrade strategies tailored to your property type, from Victorian terraces to purpose-built flats."
              href="/property-types"
              category="Property Guides"
              readingTime={12}
            />
            <RelatedContentCard
              title="EPC C 2030 Deadline"
              excerpt="Everything landlords need to know about the upcoming EPC requirements, exemptions, and penalties."
              href="/regulations/epc-c-2030-deadline"
              category="Regulations"
              readingTime={12}
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
              documentTitle="ECO4 Local Authority Administration"
              url="https://www.gov.uk/government/publications/energy-company-obligation-eco4-local-authority-administration"
              accessedDate="January 2026"
            />
            <SourceCitation
              sourceName="Department for Energy Security and Net Zero"
              documentTitle="Warm Homes: Local Grant"
              url="https://www.gov.uk/government/publications/warm-homes-local-grant"
              accessedDate="January 2026"
            />
            <SourceCitation
              sourceName="Ministry of Housing, Communities and Local Government"
              documentTitle="English Housing Survey: Private Rented Sector"
              url="https://www.gov.uk/government/collections/english-housing-survey"
              accessedDate="January 2026"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
