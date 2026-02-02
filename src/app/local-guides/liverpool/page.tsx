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
  title: 'Liverpool Landlord EPC Guide | Local Grants & Support | GreenLord',
  description:
    'Complete EPC compliance guide for Liverpool landlords. Cosy Homes Liverpool, ECO4 Flex eligibility, local contractor resources, and regional cost benchmarks for Merseyside properties.',
  alternates: {
    canonical: 'https://greenlord.co.uk/local-guides/liverpool',
  },
  openGraph: {
    title: 'Liverpool Landlord EPC Guide | GreenLord',
    description:
      'Local EPC support for Liverpool landlords. Council schemes, grants, and regional cost estimates for Merseyside rental properties.',
    url: `${SITE_CONFIG.url}/local-guides/liverpool`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'epc-landscape', text: 'Local EPC Landscape', level: 2 as const },
  { id: 'council-support', text: 'Local Authority Support', level: 2 as const },
  { id: 'grant-schemes', text: 'Available Grant Schemes', level: 2 as const },
  { id: 'eco4', text: 'ECO4 in Liverpool', level: 3 as const },
  { id: 'cosy-homes', text: 'Cosy Homes Liverpool', level: 3 as const },
  { id: 'warm-homes', text: 'Warm Homes: Local Grant', level: 3 as const },
  { id: 'boiler-upgrade', text: 'Boiler Upgrade Scheme', level: 3 as const },
  { id: 'cost-benchmarks', text: 'Local Cost Benchmarks', level: 2 as const },
  { id: 'contractors', text: 'Local Contractors & Resources', level: 2 as const },
  { id: 'property-stock', text: 'Property Stock Overview', level: 2 as const },
  { id: 'contact', text: 'Contact Information', level: 2 as const },
];

export default function LiverpoolGuidePage() {
  return (
    <>
      <PageHeader
        title="Liverpool Landlord EPC Guide"
        subtitle="Local grants, council support, and cost benchmarks for landlords in Liverpool and Merseyside. Access Cosy Homes Liverpool and ECO4 Flex funding for your rental properties."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
          { name: 'Liverpool', url: `${SITE_CONFIG.url}/local-guides/liverpool` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="Liverpool Landlord EPC Guide"
                publishedDate="2026-01-31"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={14}
                subtitle="Everything Liverpool landlords need to know about local EPC support, grants, and achieving compliance"
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Liverpool has one of the highest proportions of pre-1919 housing stock of any
                  major UK city, with over 65,000 private rented properties across the city. The
                  iconic Victorian and Edwardian terraces that define neighbourhoods like Toxteth,
                  Wavertree, and Anfield present significant challenges for EPC compliance, but
                  also mean high potential for ECO4 funding.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Liverpool City Council runs the Cosy Homes Liverpool scheme, providing energy
                  efficiency support to households across the city. Combined with strong ECO4
                  Flex participation and high deprivation scores in many areas, Liverpool
                  landlords often have good access to funded improvement schemes.
                </p>
              </div>

              <KeyFactBox title="Liverpool PRS at a Glance" icon={MapPin}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary-800">65,000+</span>
                    <span className="block text-primary-700">Private rented properties</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">62%</span>
                    <span className="block text-primary-700">Estimated below EPC C</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">Pre-1919</span>
                    <span className="block text-primary-700">Most common construction era</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">Terraced</span>
                    <span className="block text-primary-700">Dominant property type</span>
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
                    Liverpool housing stock is dominated by Victorian and Edwardian terraced
                    properties built during the city industrial heyday. These solid-walled homes
                    typically have poor thermal performance, with many scoring EPC ratings of E,
                    F, or even G without improvements.
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    An estimated 62% of private rented properties in Liverpool currently fall
                    below EPC C, one of the highest rates among major UK cities. This reflects
                    the age of the housing stock and the prevalence of solid wall construction
                    that is expensive to insulate.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Victorian Terraces
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Pre-1919 terraces dominate inner Liverpool. Solid brick walls, bay windows,
                        and high ceilings are characteristic. Typically score EPC E-G without
                        improvements.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary-600" />
                        Welsh Streets
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Iconic Liverpool terraces, many now renovated through regeneration
                        programmes. Compact layout with limited external walls for each property.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        1930s Housing
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Found in outer suburbs like Allerton and Childwall. Often have unfilled
                        cavity walls with good upgrade potential at reasonable cost.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <WarningBox title="High Proportion of Hard-to-Treat Properties">
                  <p>
                    Liverpool has one of the highest concentrations of hard-to-treat properties
                    in England. Many terraces have solid walls that cannot be cavity-filled,
                    require expensive internal or external insulation. Landlords should plan
                    for potentially higher costs and consider the £10,000 cost cap exemption
                    route where EPC C is not achievable within budget.
                  </p>
                </WarningBox>
              </section>

              {/* Local Authority Support */}
              <section id="council-support" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Local Authority Support
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Liverpool City Council has a strong focus on fuel poverty and energy efficiency,
                    recognising the challenges posed by the city housing stock. The council Cosy
                    Homes Liverpool service coordinates local support and connects residents with
                    funded improvement schemes.
                  </p>
                </div>

                <Card variant="highlighted" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary-600" />
                      Liverpool City Council Housing
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <ExternalLink className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Website:</span>{' '}
                          <a
                            href="https://liverpool.gov.uk/housing/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            liverpool.gov.uk/housing
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">General Enquiries:</span>{' '}
                          <a
                            href="tel:01512331900"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            0151 233 1900
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Email:</span>{' '}
                          <a
                            href="mailto:housing@liverpool.gov.uk"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            housing@liverpool.gov.uk
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <InfoBox title="Liverpool City Region Combined Authority">
                  <p>
                    The Liverpool City Region Combined Authority (LCRCA) coordinates regional
                    retrofit and energy efficiency programmes across Merseyside. Their Net Zero
                    programme includes support for domestic retrofit. Visit{' '}
                    <a
                      href="https://www.liverpoolcityregion-ca.gov.uk/growing-our-economy/net-zero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      liverpoolcityregion-ca.gov.uk/net-zero
                    </a>{' '}
                    for regional information.
                  </p>
                </InfoBox>

                <div className="mt-6 prose prose-lg max-w-none">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    ECO4 Flex Eligibility in Liverpool
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Liverpool City Council has one of the most comprehensive ECO4 Flex Statements
                    of Intent, reflecting high levels of fuel poverty in the city:
                  </p>
                  <ul className="text-neutral-700">
                    <li>Households with gross annual income below £31,000</li>
                    <li>Properties in areas ranked in the lowest 30% on the Index of Multiple Deprivation</li>
                    <li>Households receiving Council Tax Support or Housing Benefit</li>
                    <li>Households with members who have cold-related health conditions</li>
                    <li>Properties with EPC rating of E, F, or G</li>
                    <li>Households identified as in fuel poverty by the council</li>
                    <li>Referrals from NHS, social services, or other agencies</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    Many Liverpool postcodes fall within eligible IMD areas, making ECO4 Flex
                    accessible to a large proportion of the rental stock. Contact the council
                    for postcode-specific eligibility information.
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
                    ECO4 in Liverpool
                  </h3>
                  <KeyFactBox title="ECO4 Scheme" icon={PoundSterling}>
                    <p className="mb-2">
                      The Energy Company Obligation (ECO4) is particularly significant in Liverpool
                      due to high eligibility rates. ECO4 can cover:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Internal solid wall insulation (most common in Liverpool)</li>
                      <li>External solid wall insulation (where permitted)</li>
                      <li>Loft insulation installation or top-up</li>
                      <li>Cavity wall insulation (where cavities exist)</li>
                      <li>First-time central heating systems</li>
                      <li>Heating system replacements</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Eligibility:</strong> Tenant must receive qualifying benefits OR
                      qualify under LA Flex criteria. Property must have EPC of D or below.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="cosy-homes" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Cosy Homes Liverpool
                  </h3>
                  <KeyFactBox title="Cosy Homes Liverpool" icon={Home}>
                    <p className="mb-2">
                      Cosy Homes Liverpool is the council flagship energy efficiency programme,
                      providing comprehensive support:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Free energy advice and home energy assessments</li>
                      <li>Signposting to ECO4 and other funded schemes</li>
                      <li>Coordination of improvement works</li>
                      <li>Emergency heating support for vulnerable residents</li>
                      <li>Access to council-backed installer networks</li>
                      <li>Support with grant applications</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>For landlords:</strong> Cosy Homes Liverpool can assess your
                      tenants eligibility for funded schemes and coordinate access to ECO4
                      and other support.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="warm-homes" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Warm Homes: Local Grant
                  </h3>
                  <KeyFactBox title="Warm Homes: Local Grant" icon={PoundSterling}>
                    <p className="mb-2">
                      The national Warm Homes: Local Grant is delivered through Liverpool City
                      Council for eligible households:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Grants up to £10,000 for insulation measures</li>
                      <li>Additional funding for low carbon heating</li>
                      <li>Available to eligible landlords and homeowners</li>
                      <li>Household income threshold typically £31,000</li>
                      <li>Property must have EPC D or below</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Note:</strong> Given high demand in Liverpool, funding allocation
                      can be competitive. Contact Cosy Homes Liverpool early to register interest.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="boiler-upgrade" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Boiler Upgrade Scheme
                  </h3>
                  <KeyFactBox title="Boiler Upgrade Scheme (BUS)" icon={Thermometer}>
                    <p className="mb-2">
                      The national Boiler Upgrade Scheme provides grants for heat pump
                      installation. Available to Liverpool landlords:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>£7,500 towards air source heat pump</li>
                      <li>£7,500 towards ground source heat pump</li>
                      <li>Property must have valid EPC with insulation addressed</li>
                      <li>Must replace existing fossil fuel heating</li>
                      <li>No income requirements</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Important:</strong> Heat pumps are most effective in well-insulated
                      properties. Most Liverpool terraces will need significant fabric upgrades
                      before a heat pump is appropriate.
                    </p>
                  </KeyFactBox>

                  <TipBox title="Maximising Liverpool Funding">
                    <p>
                      Liverpool high ECO4 eligibility rates mean many improvements can be fully
                      funded. Work with Cosy Homes Liverpool to identify the best funding route
                      for your property. Solid wall insulation, which is essential for most
                      Liverpool terraces, can often be substantially or fully funded through ECO4
                      if your tenant qualifies.
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
                    Labour and material costs in Liverpool are typically 8-12% below London and
                    South East prices, comparable to other North West cities. The high proportion
                    of solid-walled properties means wall insulation is a common requirement.
                  </p>
                </div>

                <CostTable
                  title="Liverpool Area EPC Improvement Costs"
                  items={[
                    {
                      improvement: 'Loft Insulation (to 270mm)',
                      lowEstimate: 320,
                      highEstimate: 500,
                      notes: 'Typical 2-3 bed terrace. Quick win for most properties.',
                    },
                    {
                      improvement: 'Cavity Wall Insulation',
                      lowEstimate: 400,
                      highEstimate: 700,
                      notes: 'Where cavities exist (typically post-1930). Limited availability.',
                    },
                    {
                      improvement: 'Internal Solid Wall Insulation',
                      lowEstimate: 6500,
                      highEstimate: 11000,
                      notes: 'Most common requirement for Liverpool terraces. Per property.',
                    },
                    {
                      improvement: 'External Solid Wall Insulation',
                      lowEstimate: 9000,
                      highEstimate: 16000,
                      notes: 'May not suit terraced streets. Planning often required.',
                    },
                    {
                      improvement: 'Double Glazing (full house)',
                      lowEstimate: 3000,
                      highEstimate: 5500,
                      notes: 'uPVC replacement. Typical 2-3 bed terrace.',
                    },
                    {
                      improvement: 'Condensing Boiler',
                      lowEstimate: 2100,
                      highEstimate: 3300,
                      notes: 'A-rated gas boiler including installation.',
                    },
                    {
                      improvement: 'Air Source Heat Pump',
                      lowEstimate: 7500,
                      highEstimate: 13000,
                      notes: 'Before BUS grant. After grant: £0 - £5,500.',
                    },
                    {
                      improvement: 'Smart Heating Controls',
                      lowEstimate: 160,
                      highEstimate: 300,
                      notes: 'Smart thermostat with TRVs. 2-4 EPC points.',
                    },
                    {
                      improvement: 'LED Lighting Throughout',
                      lowEstimate: 60,
                      highEstimate: 140,
                      notes: '2-3 bed property. 1-2 EPC points.',
                    },
                    {
                      improvement: 'Draught Proofing',
                      lowEstimate: 130,
                      highEstimate: 280,
                      notes: 'Windows, doors, and floors. Essential for older terraces.',
                    },
                  ]}
                  showTotal={false}
                  footerNote="Costs reflect Liverpool and Merseyside market rates as of January 2026. North West regional costs are typically 8-12% below national averages. Always obtain at least three quotes from TrustMark-registered installers."
                />

                <WarningBox title="Solid Wall Insulation Likely Required">
                  <p>
                    Most Liverpool terraced properties have solid walls that cannot be
                    cavity-filled. Internal solid wall insulation (£6,500-£11,000) is often
                    the only option. This cost alone may approach or exceed the £10,000 cost
                    cap, potentially qualifying landlords for an exemption if EPC C cannot be
                    achieved within budget.
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
                        href="https://www.trustmark.org.uk/find-a-tradesperson?location=Liverpool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Search Liverpool installers
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
                        domestic energy assessor in Liverpool.
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
                        Cosy Homes Liverpool
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Council energy efficiency service providing advice and connecting
                        residents with funded improvement schemes.
                      </p>
                      <a
                        href="https://liverpool.gov.uk/housing/homeowners/home-improvements/energy-efficiency/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Visit Cosy Homes Liverpool
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

                <TipBox title="Terrace Specialist Installers">
                  <p>
                    Given Liverpool dominance of Victorian terraces, many local installers
                    specialise in this property type. Look for contractors with specific
                    experience in internal solid wall insulation for terraced properties.
                    They will understand common issues like party wall considerations and
                    working around period features.
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
                    Liverpool rental properties are dominated by Victorian terraces, with
                    significant regeneration areas seeing renovation of historic housing stock.
                    The city distinctive architecture means EPC improvements must often balance
                    energy efficiency with heritage character.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Victorian Terraces</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Dominant across Toxteth, Wavertree, Anfield, and much of inner Liverpool.
                        Solid brick walls require internal insulation. Typically EPC E-G.
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
                      <h3 className="font-semibold text-primary-800 mb-2">1930s Semis</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Found in Allerton, Childwall, and outer suburbs. Often have unfilled
                        cavity walls offering cost-effective upgrade options. Typically EPC D.
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
                      <h3 className="font-semibold text-primary-800 mb-2">Purpose-Built Flats</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        City centre developments and converted buildings around the docks.
                        Modern blocks often meet EPC C; older conversions may need work.
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
                      <h3 className="font-semibold text-primary-800 mb-2">Regeneration Housing</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Welsh Streets and other regeneration areas feature renovated Victorian
                        stock, often already improved to higher EPC standards as part of refurbishment.
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

                <InfoBox title="Key Liverpool Contacts for Landlords">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-800">Liverpool City Council Housing</h4>
                      <p className="text-sm text-neutral-600">
                        General housing enquiries and private landlord matters
                      </p>
                      <p className="text-sm">
                        <Phone className="inline w-4 h-4 mr-1" />
                        <a href="tel:01512331900" className="text-primary-600">0151 233 1900</a>
                      </p>
                      <p className="text-sm">
                        <ExternalLink className="inline w-4 h-4 mr-1" />
                        <a
                          href="https://liverpool.gov.uk/housing/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600"
                        >
                          liverpool.gov.uk/housing
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Cosy Homes Liverpool</h4>
                      <p className="text-sm text-neutral-600">
                        Energy efficiency schemes and ECO4 support
                      </p>
                      <p className="text-sm">
                        <ExternalLink className="inline w-4 h-4 mr-1" />
                        <a
                          href="https://liverpool.gov.uk/housing/homeowners/home-improvements/energy-efficiency/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600"
                        >
                          liverpool.gov.uk/energy-efficiency
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
                    sourceName="Liverpool City Council"
                    documentTitle="Housing and Energy Efficiency"
                    url="https://liverpool.gov.uk/housing/homeowners/home-improvements/energy-efficiency/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Liverpool City Region Combined Authority"
                    documentTitle="Net Zero Programme"
                    url="https://www.liverpoolcityregion-ca.gov.uk/growing-our-economy/net-zero"
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
                    <h3 className="font-semibold text-primary-800 mb-3">Liverpool Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="https://liverpool.gov.uk/housing/homeowners/home-improvements/energy-efficiency/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-1"
                        >
                          Cosy Homes Liverpool
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.trustmark.org.uk/find-a-tradesperson?location=Liverpool"
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
                      Get a personalised estimate for your Liverpool property.
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
              title="Victorian Terrace EPC Guide"
              excerpt="Comprehensive guidance for improving EPC ratings in Victorian terraced properties that dominate Liverpool housing stock."
              href="/property-types/victorian-terrace"
              category="Property Guide"
              readingTime={14}
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
