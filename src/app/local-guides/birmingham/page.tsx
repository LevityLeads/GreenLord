import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Building2,
  Phone,
  Mail,
  ExternalLink,
  Home,
  PoundSterling,
  Thermometer,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { InfoBox } from '@/components/content/InfoBox';
import { TipBox } from '@/components/content/TipBox';
import { WarningBox } from '@/components/content/WarningBox';
import { CostTable } from '@/components/content/CostTable';
import { TableOfContents } from '@/components/content/TableOfContents';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { SourceCitation } from '@/components/content/SourceCitation';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Birmingham Landlord EPC Guide | Local Grants & Support | GreenLord',
  description:
    'Complete EPC compliance guide for Birmingham landlords. Warm Homes Birmingham scheme, ECO4 Flex eligibility, local contractor resources, and regional cost benchmarks for West Midlands properties.',
  alternates: {
    canonical: 'https://greenlord.co.uk/local-guides/birmingham',
  },
  openGraph: {
    title: 'Birmingham Landlord EPC Guide | GreenLord',
    description:
      'Local EPC support for Birmingham landlords. Council schemes, grants, and regional cost estimates for West Midlands rental properties.',
    url: `${SITE_CONFIG.url}/local-guides/birmingham`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'epc-landscape', text: 'Local EPC Landscape', level: 2 as const },
  { id: 'council-support', text: 'Local Authority Support', level: 2 as const },
  { id: 'grant-schemes', text: 'Available Grant Schemes', level: 2 as const },
  { id: 'eco4', text: 'ECO4 in Birmingham', level: 3 as const },
  { id: 'warm-homes-birmingham', text: 'Warm Homes Birmingham', level: 3 as const },
  { id: 'warm-homes-local', text: 'Warm Homes: Local Grant', level: 3 as const },
  { id: 'boiler-upgrade', text: 'Boiler Upgrade Scheme', level: 3 as const },
  { id: 'cost-benchmarks', text: 'Local Cost Benchmarks', level: 2 as const },
  { id: 'contractors', text: 'Local Contractors & Resources', level: 2 as const },
  { id: 'property-stock', text: 'Property Stock Overview', level: 2 as const },
  { id: 'contact', text: 'Contact Information', level: 2 as const },
];

export default function BirminghamGuidePage() {
  return (
    <>
      <PageHeader
        title="Birmingham Landlord EPC Guide"
        subtitle="Local grants, council support, and cost benchmarks for landlords in Birmingham and the West Midlands. Access the Warm Homes scheme and ECO4 Flex funding for your rental properties."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
          { name: 'Birmingham', url: `${SITE_CONFIG.url}/local-guides/birmingham` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="Birmingham Landlord EPC Guide"
                publishedDate="2026-01-31"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={14}
                subtitle="Everything Birmingham landlords need to know about local EPC support, grants, and achieving compliance"
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Birmingham is the UK second largest city with over 100,000 private rented
                  properties, making it one of the most significant rental markets outside London.
                  The city diverse housing stock ranges from Victorian back-to-backs to 1930s semis
                  and post-war estates, with many properties requiring significant improvements to
                  meet the 2030 EPC C deadline.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Birmingham City Council runs the Warm Homes Birmingham scheme, offering free or
                  subsidised energy efficiency improvements to eligible households. Combined with
                  ECO4 Flex participation and national grant schemes, Birmingham landlords have
                  several funding options available to reduce improvement costs.
                </p>
              </div>

              <KeyFactBox title="Birmingham PRS at a Glance" icon={MapPin}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary-800">100,000+</span>
                    <span className="block text-primary-700">Private rented properties</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">55%</span>
                    <span className="block text-primary-700">Estimated below EPC C</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">1930s-1960s</span>
                    <span className="block text-primary-700">Most common construction era</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">Mixed</span>
                    <span className="block text-primary-700">Dominant property types</span>
                  </div>
                </div>
              </KeyFactBox>

              {/* Local EPC Landscape */}
              <section id="epc-landscape" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Local EPC Landscape
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Birmingham housing stock reflects the city growth as an industrial powerhouse,
                    with significant construction in the 1930s inter-war period and the 1950s-60s
                    post-war era. Unlike Manchester or Liverpool where Victorian terraces dominate,
                    Birmingham has a more varied mix including many 1930s semis with unfilled
                    cavity walls.
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    An estimated 55% of private rented properties in Birmingham currently fall
                    below EPC C. This is close to the national average, with the mix of property
                    types meaning upgrade options and costs vary significantly across the city.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        1930s-1960s Housing
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Semi-detached and terraced homes from the inter-war and post-war periods.
                        Many have cavity walls that were never insulated, offering excellent
                        upgrade potential.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary-600" />
                        High-Rise Flats
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Significant 1960s tower block housing stock, particularly in areas like
                        Nechells and Newtown. Often require whole-building approach for
                        improvements.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Victorian Terraces
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Found in inner-city areas like Balsall Heath and Sparkbrook. Solid walls
                        and original features, typically requiring more extensive improvements.
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Local Authority Support */}
              <section id="council-support" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Local Authority Support
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Birmingham City Council operates several energy efficiency programmes targeting
                    fuel poverty and housing improvement. The council Be Warm Birmingham partnership
                    coordinates local energy advice and connects residents with available support.
                  </p>
                </div>

                <Card variant="highlighted" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary-600" />
                      Birmingham City Council Housing
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <ExternalLink className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Website:</span>{' '}
                          <a
                            href="https://www.birmingham.gov.uk/warmhomes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            birmingham.gov.uk/warmhomes
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">General Enquiries:</span>{' '}
                          <a
                            href="tel:01213032000"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            0121 303 2000
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Email:</span>{' '}
                          <a
                            href="mailto:housing@birmingham.gov.uk"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            housing@birmingham.gov.uk
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <InfoBox title="West Midlands Combined Authority">
                  <p>
                    The West Midlands Combined Authority (WMCA) supports regional retrofit
                    programmes across the metropolitan area. Their Net Zero Neighbourhood programme
                    is piloting area-based retrofit approaches that landlords may be able to
                    participate in. Visit{' '}
                    <a
                      href="https://www.wmca.org.uk/what-we-do/environment-energy-and-the-climate-crisis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      wmca.org.uk/environment
                    </a>{' '}
                    for more information.
                  </p>
                </InfoBox>

                <div className="mt-6 prose prose-lg max-w-none">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    ECO4 Flex Eligibility in Birmingham
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Birmingham City Council participates in ECO4 Flex with a broad Statement of
                    Intent covering multiple eligibility routes:
                  </p>
                  <ul className="text-neutral-700">
                    <li>Households with a gross annual income below £31,000</li>
                    <li>Properties in the lowest 25% IMD areas (many Birmingham postcodes qualify)</li>
                    <li>Households receiving Council Tax Support or Housing Benefit</li>
                    <li>Households with a resident with a health condition worsened by cold</li>
                    <li>Properties with EPC rating of E, F, or G</li>
                    <li>Households referred by NHS or social care services</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    Birmingham has significant areas of deprivation that qualify automatically for
                    ECO4 support under the IMD criteria. Check your property postcode to see if it
                    falls within an eligible area.
                  </p>
                </div>
              </section>

              {/* Available Grant Schemes */}
              <section id="grant-schemes" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Available Grant Schemes
                </h2>

                <section id="eco4" className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    ECO4 in Birmingham
                  </h3>
                  <KeyFactBox title="ECO4 Scheme" icon={PoundSterling}>
                    <p className="mb-2">
                      The Energy Company Obligation (ECO4) provides funded energy efficiency
                      improvements for eligible households. In Birmingham, ECO4 is particularly
                      accessible due to high IMD scores in many areas:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Cavity wall insulation (common in 1930s-60s properties)</li>
                      <li>Loft insulation top-up or new installation</li>
                      <li>Solid wall insulation (internal or external)</li>
                      <li>First-time central heating installation</li>
                      <li>Boiler replacement for eligible households</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Eligibility:</strong> Tenant must receive qualifying benefits OR
                      qualify under LA Flex criteria. Property must have EPC of D or below.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="warm-homes-birmingham" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Warm Homes Birmingham
                  </h3>
                  <KeyFactBox title="Warm Homes Birmingham" icon={Home}>
                    <p className="mb-2">
                      Birmingham City Council local Warm Homes scheme provides additional support
                      beyond national programmes:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Free energy advice and home assessments</li>
                      <li>Signposting to ECO4 and other funded schemes</li>
                      <li>Emergency heating repairs in some circumstances</li>
                      <li>Boiler repair or replacement for vulnerable residents</li>
                      <li>Small grants for draught proofing and insulation</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>For landlords:</strong> Your tenants may be able to access support
                      through this scheme, reducing your overall improvement costs.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="warm-homes-local" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Warm Homes: Local Grant
                  </h3>
                  <KeyFactBox title="Warm Homes: Local Grant" icon={PoundSterling}>
                    <p className="mb-2">
                      The national Warm Homes: Local Grant is administered through Birmingham
                      City Council for local residents:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Grants up to £10,000 for insulation measures</li>
                      <li>Additional funding for low carbon heating systems</li>
                      <li>Available to homeowners and landlords with eligible tenants</li>
                      <li>Household income threshold typically £31,000</li>
                      <li>Property must have EPC D or below</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Note:</strong> Funding availability varies. Contact the council
                      energy team to check current allocation status.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="boiler-upgrade" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Boiler Upgrade Scheme
                  </h3>
                  <KeyFactBox title="Boiler Upgrade Scheme (BUS)" icon={Thermometer}>
                    <p className="mb-2">
                      The national Boiler Upgrade Scheme provides grants towards heat pump
                      installation. Available to Birmingham landlords:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>£7,500 towards air source heat pump</li>
                      <li>£7,500 towards ground source heat pump</li>
                      <li>Property must have valid EPC with loft and cavity wall insulation addressed</li>
                      <li>Must replace existing fossil fuel heating</li>
                      <li>No tenant income requirements</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Consideration:</strong> Heat pumps are most effective in
                      well-insulated properties. Many Birmingham properties will need fabric
                      improvements first.
                    </p>
                  </KeyFactBox>

                  <TipBox title="Combining Birmingham Funding">
                    <p>
                      Birmingham landlords can often access multiple funding streams. A typical
                      approach might use ECO4 for cavity wall insulation (if tenant qualifies),
                      the Warm Homes: Local Grant for additional measures, and the Boiler Upgrade
                      Scheme if switching to a heat pump. Work with the council energy team to
                      identify all available support.
                    </p>
                  </TipBox>
                </section>
              </section>

              {/* Local Cost Benchmarks */}
              <section id="cost-benchmarks" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Local Cost Benchmarks
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Labour and material costs in Birmingham are typically 5-8% below London prices
                    and broadly in line with other major Midlands cities. The following estimates
                    reflect typical costs for Birmingham area properties in 2026.
                  </p>
                </div>

                <CostTable
                  title="Birmingham Area EPC Improvement Costs"
                  items={[
                    {
                      improvement: 'Loft Insulation (to 270mm)',
                      lowEstimate: 350,
                      highEstimate: 550,
                      notes: 'Typical 3-bed semi or terrace. Quick win for most properties.',
                    },
                    {
                      improvement: 'Cavity Wall Insulation',
                      lowEstimate: 400,
                      highEstimate: 750,
                      notes: 'Very common in 1930s-60s Birmingham properties. 5-8 EPC points.',
                    },
                    {
                      improvement: 'Internal Solid Wall Insulation',
                      lowEstimate: 7500,
                      highEstimate: 13000,
                      notes: 'Required for Victorian properties. Per property cost.',
                    },
                    {
                      improvement: 'External Solid Wall Insulation',
                      lowEstimate: 10000,
                      highEstimate: 18000,
                      notes: 'Where planning permits. May be suitable for some properties.',
                    },
                    {
                      improvement: 'Double Glazing (full house)',
                      lowEstimate: 3500,
                      highEstimate: 6500,
                      notes: 'uPVC replacement windows. 3-bed semi or terrace.',
                    },
                    {
                      improvement: 'Condensing Boiler',
                      lowEstimate: 2200,
                      highEstimate: 3500,
                      notes: 'A-rated gas boiler including installation.',
                    },
                    {
                      improvement: 'Air Source Heat Pump',
                      lowEstimate: 8000,
                      highEstimate: 14000,
                      notes: 'Before BUS grant. After grant: £500 - £6,500.',
                    },
                    {
                      improvement: 'Smart Heating Controls',
                      lowEstimate: 180,
                      highEstimate: 350,
                      notes: 'Smart thermostat with TRVs. 2-4 EPC points.',
                    },
                    {
                      improvement: 'LED Lighting Throughout',
                      lowEstimate: 80,
                      highEstimate: 180,
                      notes: '3-bed property. 1-2 EPC points.',
                    },
                    {
                      improvement: 'Draught Proofing',
                      lowEstimate: 150,
                      highEstimate: 350,
                      notes: 'Windows, doors, and floors. Particularly important for older properties.',
                    },
                  ]}
                  showTotal={false}
                  footerNote="Costs reflect Birmingham and West Midlands market rates as of January 2026. Always obtain at least three quotes from TrustMark-registered installers. Midlands regional costs are typically 5-8% below London prices."
                />

                <WarningBox title="1960s Non-Traditional Construction">
                  <p>
                    Some Birmingham properties from the 1960s have non-traditional construction
                    (system-built, prefab elements, or unusual wall types). These may require
                    specialist assessment and can be more expensive to insulate. Check your EPC
                    or commission a survey to confirm construction type before planning
                    improvements.
                  </p>
                </WarningBox>
              </section>

              {/* Local Contractors & Resources */}
              <section id="contractors" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Local Contractors & Resources
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Find TrustMark Installers
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        TrustMark is the government-endorsed quality scheme. All ECO4 and grant
                        work must be completed by TrustMark-registered installers.
                      </p>
                      <a
                        href="https://www.trustmark.org.uk/find-a-tradesperson?location=Birmingham"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Search Birmingham installers
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Find Local EPC Assessors
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Get your current EPC or commission a new assessment from a qualified
                        domestic energy assessor in Birmingham.
                      </p>
                      <a
                        href="https://www.epcregister.com/searchAssessor.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Find EPC assessors
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Act on Energy
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Local energy advice service covering the West Midlands region. Free and
                        impartial guidance on energy efficiency improvements.
                      </p>
                      <a
                        href="https://actonenergy.org.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Visit Act on Energy
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Energy Saving Trust Advice
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        National advice service with guidance on all aspects of home energy
                        efficiency and available funding.
                      </p>
                      <a
                        href="https://energysavingtrust.org.uk/advice/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Get free advice
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardBody>
                  </Card>
                </div>

                <TipBox title="Getting Multiple Quotes">
                  <p>
                    Birmingham has a well-developed market for energy efficiency improvements.
                    Always obtain at least three quotes, verify TrustMark registration, and ask
                    specifically about experience with your property type. For cavity wall
                    insulation in 1930s-60s properties, this is usually straightforward, but
                    solid wall insulation requires specialist expertise.
                  </p>
                </TipBox>
              </section>

              {/* Property Stock Overview */}
              <section id="property-stock" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Property Stock Overview
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Birmingham rental properties range from Victorian inner-city terraces to
                    modern city-centre apartments. The city inter-war and post-war housing
                    stock often offers the best value for EPC improvements.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">1930s Semi-Detached</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Common in Erdington, Hall Green, and Acocks Green. Unfilled cavity walls
                        offer excellent, cost-effective upgrade potential. Typically EPC D.
                      </p>
                      <Link
                        href="/property-types/1930s-semi"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        1930s Semi Guide
                      </Link>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Victorian Terraces</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Found in Balsall Heath, Sparkbrook, and Handsworth. Solid walls require
                        more investment but ECO4 funding often available in these areas.
                      </p>
                      <Link
                        href="/property-types/victorian-terrace"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Victorian Terrace Guide
                      </Link>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Purpose-Built Flats</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        City centre developments and 1960s blocks across the city. Leasehold
                        consent typically required. EPC varies by age and construction.
                      </p>
                      <Link
                        href="/property-types/purpose-built-flat"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Purpose-Built Flat Guide
                      </Link>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Post-War Housing</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        1950s-60s properties in estates across the city. Often have cavity walls
                        but may need assessment for non-standard construction types.
                      </p>
                      <Link
                        href="/property-types"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        View All Property Guides
                      </Link>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Contact Information
                </h2>

                <InfoBox title="Key Birmingham Contacts for Landlords">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-800">Birmingham City Council Housing</h4>
                      <p className="text-sm text-neutral-600">
                        General housing enquiries and private landlord matters
                      </p>
                      <p className="text-sm">
                        <Phone className="inline w-4 h-4 mr-1" />
                        <a href="tel:01213032000" className="text-primary-600">0121 303 2000</a>
                      </p>
                      <p className="text-sm">
                        <ExternalLink className="inline w-4 h-4 mr-1" />
                        <a
                          href="https://www.birmingham.gov.uk/info/20053/housing_and_housing_options"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600"
                        >
                          birmingham.gov.uk/housing
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Warm Homes Birmingham</h4>
                      <p className="text-sm text-neutral-600">
                        Energy efficiency schemes and grant information
                      </p>
                      <p className="text-sm">
                        <ExternalLink className="inline w-4 h-4 mr-1" />
                        <a
                          href="https://www.birmingham.gov.uk/warmhomes"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600"
                        >
                          birmingham.gov.uk/warmhomes
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Simple Energy Advice</h4>
                      <p className="text-sm text-neutral-600">
                        Government-backed helpline for energy efficiency advice
                      </p>
                      <p className="text-sm">
                        <Phone className="inline w-4 h-4 mr-1" />
                        <a href="tel:08001212017" className="text-primary-600">0800 121 2017</a>
                      </p>
                      <p className="text-sm">
                        <ExternalLink className="inline w-4 h-4 mr-1" />
                        <a
                          href="https://www.simpleenergyadvice.org.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600"
                        >
                          simpleenergyadvice.org.uk
                        </a>
                      </p>
                    </div>
                  </div>
                </InfoBox>

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
                    sourceName="Birmingham City Council"
                    documentTitle="Warm Homes Birmingham"
                    url="https://www.birmingham.gov.uk/warmhomes"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="West Midlands Combined Authority"
                    documentTitle="Environment and Energy"
                    url="https://www.wmca.org.uk/what-we-do/environment-energy-and-the-climate-crisis/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="ECO4 Guidance"
                    url="https://www.gov.uk/government/publications/energy-company-obligation-eco4-guidance-local-authorities"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Ministry of Housing, Communities and Local Government"
                    documentTitle="English Housing Survey"
                    url="https://www.gov.uk/government/collections/english-housing-survey"
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
                    <h3 className="font-semibold text-primary-800 mb-3">Birmingham Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="https://www.birmingham.gov.uk/warmhomes"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-1"
                        >
                          Warm Homes Birmingham
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.trustmark.org.uk/find-a-tradesperson?location=Birmingham"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-1"
                        >
                          Find Local Installers
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.gov.uk/find-energy-certificate"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-1"
                        >
                          Check Your EPC
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </div>

              <div className="mt-6">
                <Card variant="default">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-3">Need Help?</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      Get a personalised estimate for your Birmingham property.
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
              title="1930s Semi EPC Guide"
              excerpt="Comprehensive guidance for improving EPC ratings in 1930s semi-detached properties common across Birmingham suburbs."
              href="/property-types/1930s-semi"
              category="Property Guide"
              readingTime={12}
            />
            <RelatedContentCard
              title="ECO4 Scheme Explained"
              excerpt="Understand ECO4 eligibility and how to access funded improvements for your rental properties."
              href="/costs"
              category="Funding"
              readingTime={10}
            />
            <RelatedContentCard
              title="Cost Cap and Exemptions"
              excerpt="Learn about the £10,000 cost cap exemption if your property cannot reach EPC C cost-effectively."
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
