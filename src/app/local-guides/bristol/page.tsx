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
  Leaf,
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
  title: 'Bristol Landlord EPC Guide | Local Grants & Support | GreenLord',
  description:
    'Complete EPC compliance guide for Bristol landlords. Bristol Energy Network, ECO4 Flex eligibility, local contractor resources, and regional cost benchmarks for South West properties.',
  alternates: {
    canonical: 'https://greenlord.co.uk/local-guides/bristol',
  },
  openGraph: {
    title: 'Bristol Landlord EPC Guide | GreenLord',
    description:
      'Local EPC support for Bristol landlords. Council schemes, grants, and regional cost estimates for South West rental properties.',
    url: `${SITE_CONFIG.url}/local-guides/bristol`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'epc-landscape', text: 'Local EPC Landscape', level: 2 as const },
  { id: 'council-support', text: 'Local Authority Support', level: 2 as const },
  { id: 'grant-schemes', text: 'Available Grant Schemes', level: 2 as const },
  { id: 'eco4', text: 'ECO4 in Bristol', level: 3 as const },
  { id: 'bristol-energy', text: 'Bristol Energy Network', level: 3 as const },
  { id: 'warm-homes', text: 'Warm Homes: Local Grant', level: 3 as const },
  { id: 'boiler-upgrade', text: 'Boiler Upgrade Scheme', level: 3 as const },
  { id: 'cost-benchmarks', text: 'Local Cost Benchmarks', level: 2 as const },
  { id: 'contractors', text: 'Local Contractors & Resources', level: 2 as const },
  { id: 'property-stock', text: 'Property Stock Overview', level: 2 as const },
  { id: 'contact', text: 'Contact Information', level: 2 as const },
];

export default function BristolGuidePage() {
  return (
    <>
      <PageHeader
        title="Bristol Landlord EPC Guide"
        subtitle="Local grants, council support, and cost benchmarks for landlords in Bristol and the South West. Access green initiatives and ECO4 Flex funding for your rental properties."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
          { name: 'Bristol', url: `${SITE_CONFIG.url}/local-guides/bristol` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="Bristol Landlord EPC Guide"
                publishedDate="2026-01-31"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={13}
                subtitle="Everything Bristol landlords need to know about local EPC support, grants, and achieving compliance"
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Bristol is one of the UK most progressive cities on sustainability, with
                  ambitious carbon neutrality targets and strong local support for energy
                  efficiency improvements. The city diverse housing stock of over 50,000 private
                  rented properties ranges from Georgian townhouses to Victorian terraces and
                  modern developments.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Bristol City Council leads on green initiatives, with the Bristol Energy Network
                  providing local advice and support. The city proactive approach means landlords
                  often have good access to information and support for EPC improvements, though
                  South West costs tend to be higher than Northern cities.
                </p>
              </div>

              <KeyFactBox title="Bristol PRS at a Glance" icon={MapPin}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary-800">50,000+</span>
                    <span className="block text-primary-700">Private rented properties</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">48%</span>
                    <span className="block text-primary-700">Estimated below EPC C</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">Mixed era</span>
                    <span className="block text-primary-700">Georgian to modern</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">Green focus</span>
                    <span className="block text-primary-700">Strong sustainability support</span>
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
                    Bristol housing stock is notably varied, reflecting the city long history and
                    periods of expansion. Georgian and Victorian properties predominate in areas
                    like Clifton and Redland, while inter-war and post-war housing is common in
                    outer suburbs. The city also has significant purpose-built flat development.
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    An estimated 48% of private rented properties in Bristol currently fall below
                    EPC C. This is slightly better than the national average, partly reflecting
                    the city proactive approach to energy efficiency and the mix of property ages
                    with some newer, better-performing stock.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Georgian & Victorian
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Elegant townhouses and terraces in Clifton, Redland, and Cotham. Solid
                        stone and brick construction, often with conservation area restrictions.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary-600" />
                        Purpose-Built Flats
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Significant development in the Harbourside and Temple Quarter. Modern
                        blocks typically meet EPC C; older blocks vary widely in performance.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Inter-War Housing
                      </h3>
                      <p className="text-sm text-neutral-600">
                        1930s semis and terraces in Horfield, Southmead, and Fishponds. Often
                        have unfilled cavity walls with good upgrade potential.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="Bristol Green Capital">
                  <p>
                    Bristol was the UK first European Green Capital (2015) and has declared a
                    climate emergency with a target to be carbon neutral by 2030. This policy
                    focus means the council prioritises support for energy efficiency and landlords
                    may find a more supportive environment for improvement works than in some
                    other cities.
                  </p>
                </InfoBox>
              </section>

              {/* Local Authority Support */}
              <section id="council-support" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Local Authority Support
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Bristol City Council has strong sustainability policies and provides
                    comprehensive support for energy efficiency improvements. The council works
                    closely with the Bristol Energy Network, a community interest company that
                    provides free local advice.
                  </p>
                </div>

                <Card variant="highlighted" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary-600" />
                      Bristol City Council Housing
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <ExternalLink className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Website:</span>{' '}
                          <a
                            href="https://www.bristol.gov.uk/housing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            bristol.gov.uk/housing
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">General Enquiries:</span>{' '}
                          <a
                            href="tel:01179222000"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            0117 922 2000
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Email:</span>{' '}
                          <a
                            href="mailto:housing@bristol.gov.uk"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            housing@bristol.gov.uk
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <InfoBox title="West of England Combined Authority">
                  <p>
                    The West of England Combined Authority (WECA) coordinates regional retrofit
                    and decarbonisation programmes across Bristol, Bath and North East Somerset,
                    and South Gloucestershire. Their retrofit programmes may offer additional
                    funding opportunities. Visit{' '}
                    <a
                      href="https://www.westofengland-ca.gov.uk/what-we-do/environment/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      westofengland-ca.gov.uk/environment
                    </a>{' '}
                    for regional information.
                  </p>
                </InfoBox>

                <div className="mt-6 prose prose-lg max-w-none">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    ECO4 Flex Eligibility in Bristol
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Bristol City Council participates in ECO4 Flex with a Statement of Intent
                    covering multiple eligibility routes:
                  </p>
                  <ul className="text-neutral-700">
                    <li>Households with gross annual income below £31,000</li>
                    <li>Properties in areas with higher Index of Multiple Deprivation scores</li>
                    <li>Households receiving Council Tax Reduction or Housing Benefit</li>
                    <li>Households with members who have health conditions affected by cold</li>
                    <li>Properties with EPC rating of E, F, or G</li>
                    <li>Households identified as vulnerable by health or social care services</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    While Bristol is generally more affluent than Northern cities, pockets of
                    deprivation exist in areas like Hartcliffe, Knowle West, and parts of East
                    Bristol where ECO4 Flex eligibility may be higher.
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
                    ECO4 in Bristol
                  </h3>
                  <KeyFactBox title="ECO4 Scheme" icon={PoundSterling}>
                    <p className="mb-2">
                      The Energy Company Obligation (ECO4) provides funded energy efficiency
                      improvements for eligible households. In Bristol, ECO4 can cover:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Cavity wall insulation (common in inter-war properties)</li>
                      <li>Solid wall insulation (internal or external)</li>
                      <li>Loft insulation installation or top-up</li>
                      <li>Heating system upgrades</li>
                      <li>First-time central heating</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Eligibility:</strong> Tenant must receive qualifying benefits OR
                      qualify under LA Flex criteria. Property must have EPC of D or below.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="bristol-energy" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Bristol Energy Network
                  </h3>
                  <KeyFactBox title="Bristol Energy Network" icon={Leaf}>
                    <p className="mb-2">
                      The Bristol Energy Network is a community interest company providing
                      free, impartial energy advice to Bristol residents:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Free energy advice appointments</li>
                      <li>Home energy assessments and recommendations</li>
                      <li>Signposting to available grants and schemes</li>
                      <li>Thermal imaging surveys (in some circumstances)</li>
                      <li>Information on local contractors and installers</li>
                      <li>Community energy workshops and events</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>For landlords:</strong> The Bristol Energy Network can advise on
                      improvement options and help identify funding your tenants may access.
                      Visit{' '}
                      <a
                        href="https://www.bristolenergynetwork.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        bristolenergynetwork.org
                      </a>
                    </p>
                  </KeyFactBox>
                </section>

                <section id="warm-homes" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Warm Homes: Local Grant
                  </h3>
                  <KeyFactBox title="Warm Homes: Local Grant" icon={PoundSterling}>
                    <p className="mb-2">
                      The national Warm Homes: Local Grant is administered through Bristol
                      City Council for local residents:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Grants up to £10,000 for insulation measures</li>
                      <li>Additional funding for low carbon heating systems</li>
                      <li>Available to eligible homeowners and landlords</li>
                      <li>Household income threshold typically £31,000</li>
                      <li>Property must have EPC D or below</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Note:</strong> Contact the council or Bristol Energy Network to
                      check current funding availability and allocation.
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
                      installation. Particularly relevant in Bristol given the city green focus:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>£7,500 towards air source heat pump</li>
                      <li>£7,500 towards ground source heat pump</li>
                      <li>Property must have valid EPC with insulation addressed</li>
                      <li>Must replace existing fossil fuel heating</li>
                      <li>No income requirements</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Bristol context:</strong> The city strong sustainability focus
                      means good installer availability for heat pumps, with many TrustMark
                      contractors experienced in low carbon heating.
                    </p>
                  </KeyFactBox>

                  <TipBox title="Bristol Green Credentials">
                    <p>
                      Bristol tenants are often environmentally conscious, and properties with
                      good EPC ratings or low carbon heating can command premium rents. Consider
                      marketing energy efficiency improvements as a selling point when re-letting.
                      The Bristol Energy Network can provide advice on communicating energy
                      performance to tenants.
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
                    Labour and material costs in Bristol are typically 5-10% above Northern
                    cities but slightly below London prices. The competitive installer market
                    means quotes can vary significantly. Always obtain multiple quotes.
                  </p>
                </div>

                <CostTable
                  title="Bristol Area EPC Improvement Costs"
                  items={[
                    {
                      improvement: 'Loft Insulation (to 270mm)',
                      lowEstimate: 380,
                      highEstimate: 600,
                      notes: 'Typical 3-bed property. Quick win for most properties.',
                    },
                    {
                      improvement: 'Cavity Wall Insulation',
                      lowEstimate: 480,
                      highEstimate: 850,
                      notes: 'Where cavities exist (typically post-1930). 5-8 EPC points.',
                    },
                    {
                      improvement: 'Internal Solid Wall Insulation',
                      lowEstimate: 8000,
                      highEstimate: 14000,
                      notes: 'Common for Georgian and Victorian properties. Per property.',
                    },
                    {
                      improvement: 'External Solid Wall Insulation',
                      lowEstimate: 11000,
                      highEstimate: 20000,
                      notes: 'May not suit conservation areas. Planning often required.',
                    },
                    {
                      improvement: 'Double Glazing (full house)',
                      lowEstimate: 4000,
                      highEstimate: 7500,
                      notes: 'uPVC or timber-effect. Heritage options for conservation areas.',
                    },
                    {
                      improvement: 'Condensing Boiler',
                      lowEstimate: 2400,
                      highEstimate: 3800,
                      notes: 'A-rated gas boiler including installation.',
                    },
                    {
                      improvement: 'Air Source Heat Pump',
                      lowEstimate: 8500,
                      highEstimate: 15000,
                      notes: 'Before BUS grant. After grant: £1,000 - £7,500.',
                    },
                    {
                      improvement: 'Smart Heating Controls',
                      lowEstimate: 200,
                      highEstimate: 380,
                      notes: 'Smart thermostat with TRVs. 2-4 EPC points.',
                    },
                    {
                      improvement: 'LED Lighting Throughout',
                      lowEstimate: 90,
                      highEstimate: 200,
                      notes: '3-bed property. 1-2 EPC points.',
                    },
                    {
                      improvement: 'Draught Proofing',
                      lowEstimate: 180,
                      highEstimate: 400,
                      notes: 'Windows, doors, and floors. Essential for older properties.',
                    },
                  ]}
                  showTotal={false}
                  footerNote="Costs reflect Bristol and South West market rates as of January 2026. South West costs are typically 5-10% above Northern regions. Always obtain at least three quotes from TrustMark-registered installers."
                />

                <WarningBox title="Conservation Area Restrictions">
                  <p>
                    Much of Bristol desirable rental stock in Clifton, Redland, and Cotham
                    falls within conservation areas. External wall insulation and replacement
                    windows may require planning permission and must respect the character of
                    the area. Consider internal insulation and secondary glazing as alternatives
                    that typically do not require consent.
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
                        href="https://www.trustmark.org.uk/find-a-tradesperson?location=Bristol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Search Bristol installers
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
                        domestic energy assessor in Bristol.
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
                        Bristol Energy Network
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Free, impartial local energy advice and support for Bristol residents
                        and landlords.
                      </p>
                      <a
                        href="https://www.bristolenergynetwork.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Visit Bristol Energy Network
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Centre for Sustainable Energy
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Bristol-based charity providing expert advice on home energy efficiency
                        and sustainable energy solutions.
                      </p>
                      <a
                        href="https://www.cse.org.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Visit CSE
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardBody>
                  </Card>
                </div>

                <TipBox title="Bristol Retrofit Community">
                  <p>
                    Bristol has an active retrofit and sustainability community. The Bristol
                    Energy Network and Centre for Sustainable Energy run regular events and
                    workshops. Engaging with these organisations can help you find trusted
                    contractors and stay informed about new funding opportunities as they arise.
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
                    Bristol rental properties range from prestigious Georgian townhouses to
                    modern city-centre apartments. The city varied housing stock means upgrade
                    approaches differ significantly by area and property type.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Victorian Terraces</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Common in Bedminster, Easton, and St George. Solid brick walls require
                        careful insulation approach. Conservation restrictions in some areas.
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
                        Found in Horfield, Southmead, and Fishponds. Often have unfilled cavity
                        walls offering cost-effective upgrade potential. Typically EPC D.
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
                        Harbourside and Temple Quarter developments, plus 1960s blocks across
                        the city. Modern blocks often meet EPC C already. Leasehold consent needed.
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
                      <h3 className="font-semibold text-primary-800 mb-2">Georgian Townhouses</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Premium properties in Clifton and central Bristol. Often listed or in
                        conservation areas. Internal insulation and secondary glazing usually
                        required.
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

                <InfoBox title="Key Bristol Contacts for Landlords">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-800">Bristol City Council Housing</h4>
                      <p className="text-sm text-neutral-600">
                        General housing enquiries and private landlord matters
                      </p>
                      <p className="text-sm">
                        <Phone className="inline w-4 h-4 mr-1" />
                        <a href="tel:01179222000" className="text-primary-600">0117 922 2000</a>
                      </p>
                      <p className="text-sm">
                        <ExternalLink className="inline w-4 h-4 mr-1" />
                        <a
                          href="https://www.bristol.gov.uk/housing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600"
                        >
                          bristol.gov.uk/housing
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Bristol Energy Network</h4>
                      <p className="text-sm text-neutral-600">
                        Free local energy advice and support
                      </p>
                      <p className="text-sm">
                        <ExternalLink className="inline w-4 h-4 mr-1" />
                        <a
                          href="https://www.bristolenergynetwork.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600"
                        >
                          bristolenergynetwork.org
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
                    sourceName="Bristol City Council"
                    documentTitle="Housing and Energy"
                    url="https://www.bristol.gov.uk/housing"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Bristol Energy Network"
                    documentTitle="Energy Advice Services"
                    url="https://www.bristolenergynetwork.org/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Centre for Sustainable Energy"
                    documentTitle="Home Energy Advice"
                    url="https://www.cse.org.uk/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="ECO4 Guidance"
                    url="https://www.gov.uk/government/publications/energy-company-obligation-eco4-guidance-local-authorities"
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
                    <h3 className="font-semibold text-primary-800 mb-3">Bristol Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="https://www.bristolenergynetwork.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-1"
                        >
                          Bristol Energy Network
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.trustmark.org.uk/find-a-tradesperson?location=Bristol"
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
                      Get a personalised estimate for your Bristol property.
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
              excerpt="Comprehensive guidance for improving EPC ratings in Victorian properties common across Bristol."
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
