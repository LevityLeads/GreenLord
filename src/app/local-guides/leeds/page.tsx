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
  title: 'Leeds Landlord EPC Guide | Local Grants & Support | GreenLord',
  description:
    'Complete EPC compliance guide for Leeds landlords. Better Homes Leeds, ECO4 Flex eligibility, local contractor resources, and regional cost benchmarks for West Yorkshire properties.',
  openGraph: {
    title: 'Leeds Landlord EPC Guide | GreenLord',
    description:
      'Local EPC support for Leeds landlords. Council schemes, grants, and regional cost estimates for West Yorkshire rental properties.',
    url: `${SITE_CONFIG.url}/local-guides/leeds`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'epc-landscape', text: 'Local EPC Landscape', level: 2 as const },
  { id: 'council-support', text: 'Local Authority Support', level: 2 as const },
  { id: 'grant-schemes', text: 'Available Grant Schemes', level: 2 as const },
  { id: 'eco4', text: 'ECO4 in Leeds', level: 3 as const },
  { id: 'better-homes', text: 'Better Homes Leeds', level: 3 as const },
  { id: 'warm-homes', text: 'Warm Homes: Local Grant', level: 3 as const },
  { id: 'boiler-upgrade', text: 'Boiler Upgrade Scheme', level: 3 as const },
  { id: 'cost-benchmarks', text: 'Local Cost Benchmarks', level: 2 as const },
  { id: 'contractors', text: 'Local Contractors & Resources', level: 2 as const },
  { id: 'property-stock', text: 'Property Stock Overview', level: 2 as const },
  { id: 'contact', text: 'Contact Information', level: 2 as const },
];

export default function LeedsGuidePage() {
  return (
    <>
      <PageHeader
        title="Leeds Landlord EPC Guide"
        subtitle="Local grants, council support, and cost benchmarks for landlords in Leeds and West Yorkshire. Access Better Homes Leeds and ECO4 Flex funding for your rental properties."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
          { name: 'Leeds', url: `${SITE_CONFIG.url}/local-guides/leeds` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="Leeds Landlord EPC Guide"
                publishedDate="2026-01-31"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={13}
                subtitle="Everything Leeds landlords need to know about local EPC support, grants, and achieving compliance"
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Leeds is Yorkshire largest city with a substantial private rented sector of over
                  70,000 properties. The city distinctive housing stock includes stone-built
                  Victorian and Edwardian terraces, inter-war semis, and significant student
                  rental accommodation around the universities. This mix creates varied challenges
                  and opportunities for EPC compliance.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Leeds City Council runs the Better Homes Leeds programme, coordinating energy
                  efficiency support and connecting landlords with available funding. The council
                  participates in ECO4 Flex and works with the West Yorkshire Combined Authority
                  on regional retrofit initiatives.
                </p>
              </div>

              <KeyFactBox title="Leeds PRS at a Glance" icon={MapPin}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary-800">70,000+</span>
                    <span className="block text-primary-700">Private rented properties</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">52%</span>
                    <span className="block text-primary-700">Estimated below EPC C</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">Mixed era</span>
                    <span className="block text-primary-700">Stone and brick construction</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">Terraces & Semis</span>
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
                    Leeds housing stock reflects the city industrial heritage, with substantial
                    Victorian and Edwardian development in areas like Headingley, Hyde Park, and
                    Harehills. Unlike cities further south, many Leeds properties were built with
                    local stone rather than brick, creating particular challenges for insulation.
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    An estimated 52% of private rented properties in Leeds currently fall below
                    EPC C. This is slightly better than the national average, partly due to the
                    significant number of newer purpose-built student accommodation blocks which
                    typically achieve higher ratings.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Stone-Built Terraces
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Victorian and Edwardian stone terraces are common in inner Leeds. Solid
                        stone walls require specialist insulation approaches and typically score
                        EPC D-F.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary-600" />
                        Back-to-Back Houses
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Leeds has a significant stock of historic back-to-back houses, many now
                        listed. These present unique insulation challenges with limited external
                        walls.
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
                        1930s semis and terraces in outer areas like Moortown and Roundhay. Often
                        have unfilled cavity walls with excellent upgrade potential.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <WarningBox title="Stone-Built Properties">
                  <p>
                    Many Leeds properties have solid stone walls rather than brick. Stone walls
                    behave differently to brick and require specialist assessment for insulation.
                    Internal insulation must account for moisture management in stone construction.
                    Always use contractors experienced with Yorkshire stone buildings.
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
                    Leeds City Council coordinates energy efficiency support through its housing
                    and sustainability teams. The council has a strong track record in delivering
                    retrofit programmes and participates actively in ECO4 Flex.
                  </p>
                </div>

                <Card variant="highlighted" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary-600" />
                      Leeds City Council Housing
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <ExternalLink className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Website:</span>{' '}
                          <a
                            href="https://www.leeds.gov.uk/housing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            leeds.gov.uk/housing
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">General Enquiries:</span>{' '}
                          <a
                            href="tel:01132224405"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            0113 222 4405
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Email:</span>{' '}
                          <a
                            href="mailto:housing.leeds@leeds.gov.uk"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            housing.leeds@leeds.gov.uk
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <InfoBox title="West Yorkshire Combined Authority">
                  <p>
                    The West Yorkshire Combined Authority (WYCA) coordinates regional energy and
                    retrofit programmes across Leeds, Bradford, Wakefield, Kirklees, and Calderdale.
                    Their Better Homes Yorkshire programme has supported thousands of energy
                    efficiency improvements. Visit{' '}
                    <a
                      href="https://www.westyorks-ca.gov.uk/improving-places/better-homes-west-yorkshire/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      westyorks-ca.gov.uk/better-homes
                    </a>{' '}
                    for regional support information.
                  </p>
                </InfoBox>

                <div className="mt-6 prose prose-lg max-w-none">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    ECO4 Flex Eligibility in Leeds
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Leeds City Council has a comprehensive ECO4 Flex Statement of Intent covering
                    multiple eligibility pathways:
                  </p>
                  <ul className="text-neutral-700">
                    <li>Households with gross annual income below £31,000</li>
                    <li>Properties in areas with high Index of Multiple Deprivation</li>
                    <li>Households receiving Council Tax Reduction</li>
                    <li>Households with members who have long-term health conditions</li>
                    <li>Properties with EPC rating of E, F, or G</li>
                    <li>Households referred by healthcare professionals</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    Leeds has significant areas of deprivation, particularly in inner-city wards,
                    where ECO4 Flex eligibility is more likely. The council energy team can advise
                    on specific postcode eligibility.
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
                    ECO4 in Leeds
                  </h3>
                  <KeyFactBox title="ECO4 Scheme" icon={PoundSterling}>
                    <p className="mb-2">
                      The Energy Company Obligation (ECO4) provides funded energy efficiency
                      improvements for eligible households. In Leeds, ECO4 can cover:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Cavity wall insulation (where properties have cavities)</li>
                      <li>Loft insulation installation or top-up</li>
                      <li>Solid wall insulation (internal or external)</li>
                      <li>First-time central heating systems</li>
                      <li>Heating system replacements</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Eligibility:</strong> Tenant must receive qualifying benefits OR
                      qualify under LA Flex criteria. Property must have EPC of D or below.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="better-homes" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Better Homes Leeds
                  </h3>
                  <KeyFactBox title="Better Homes Leeds" icon={Home}>
                    <p className="mb-2">
                      Better Homes Leeds is the council initiative providing advice and
                      connecting residents with energy efficiency support:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Free energy advice and assessment referrals</li>
                      <li>Signposting to ECO4 and other funded schemes</li>
                      <li>Coordination with West Yorkshire retrofit programmes</li>
                      <li>Support for accessing government grants</li>
                      <li>Advice on finding reputable contractors</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>For landlords:</strong> The service can help identify which schemes
                      your tenants may qualify for and connect you with trusted installers.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="warm-homes" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Warm Homes: Local Grant
                  </h3>
                  <KeyFactBox title="Warm Homes: Local Grant" icon={PoundSterling}>
                    <p className="mb-2">
                      The national Warm Homes: Local Grant is delivered in Leeds through the
                      council and WYCA partnership:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Grants up to £10,000 for insulation measures</li>
                      <li>Additional funding available for low carbon heating</li>
                      <li>Available to eligible homeowners and landlords</li>
                      <li>Household income threshold typically £31,000</li>
                      <li>Property must have EPC D or below</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Note:</strong> Funding is allocated in waves. Contact the council
                      to check current availability for Leeds.
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
                      installation. Available to Leeds landlords:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>£7,500 towards air source heat pump</li>
                      <li>£7,500 towards ground source heat pump</li>
                      <li>Property must have valid EPC with insulation recommendations addressed</li>
                      <li>Must replace existing fossil fuel heating</li>
                      <li>No income requirements</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Consideration:</strong> Heat pumps are most effective in
                      well-insulated properties. Stone-built Leeds properties may need
                      significant insulation work first.
                    </p>
                  </KeyFactBox>

                  <TipBox title="Regional Coordination Benefits">
                    <p>
                      Leeds landlords benefit from the West Yorkshire Combined Authority regional
                      approach. WYCA has negotiated agreements with installers covering the whole
                      region, potentially offering better value through bulk procurement. Contact
                      Better Homes Yorkshire for information on accessing these regional schemes.
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
                    Labour and material costs in Leeds are typically 8-12% below London and
                    South East prices, in line with other Yorkshire cities. Stone-built
                    properties may incur premium costs for specialist insulation work.
                  </p>
                </div>

                <CostTable
                  title="Leeds Area EPC Improvement Costs"
                  items={[
                    {
                      improvement: 'Loft Insulation (to 270mm)',
                      lowEstimate: 320,
                      highEstimate: 500,
                      notes: 'Typical 3-bed terrace or semi. Quick win for most properties.',
                    },
                    {
                      improvement: 'Cavity Wall Insulation',
                      lowEstimate: 400,
                      highEstimate: 700,
                      notes: 'Where cavities exist (typically post-1930). 5-8 EPC points.',
                    },
                    {
                      improvement: 'Internal Solid Wall Insulation (brick)',
                      lowEstimate: 7000,
                      highEstimate: 12000,
                      notes: 'Standard brick construction. Per property cost.',
                    },
                    {
                      improvement: 'Internal Solid Wall Insulation (stone)',
                      lowEstimate: 9000,
                      highEstimate: 15000,
                      notes: 'Stone construction requires specialist approach. Premium cost.',
                    },
                    {
                      improvement: 'External Solid Wall Insulation',
                      lowEstimate: 9000,
                      highEstimate: 16000,
                      notes: 'Where planning permits. May not suit conservation areas.',
                    },
                    {
                      improvement: 'Double Glazing (full house)',
                      lowEstimate: 3200,
                      highEstimate: 6000,
                      notes: 'uPVC replacement. Stone surrounds may add cost.',
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
                      lowEstimate: 170,
                      highEstimate: 320,
                      notes: 'Smart thermostat with TRVs. 2-4 EPC points.',
                    },
                    {
                      improvement: 'LED Lighting Throughout',
                      lowEstimate: 70,
                      highEstimate: 160,
                      notes: '3-bed property. 1-2 EPC points.',
                    },
                    {
                      improvement: 'Draught Proofing',
                      lowEstimate: 140,
                      highEstimate: 320,
                      notes: 'Windows, doors, and floors. Essential for older properties.',
                    },
                  ]}
                  showTotal={false}
                  footerNote="Costs reflect Leeds and West Yorkshire market rates as of January 2026. Stone properties typically incur 15-25% premium for solid wall insulation. Always obtain at least three quotes from TrustMark-registered installers."
                />

                <WarningBox title="Conservation Area Considerations">
                  <p>
                    Many Leeds Victorian terraces are in conservation areas, particularly in
                    Headingley, Chapel Allerton, and the city centre. External wall insulation
                    and window replacement may require planning permission. Check with Leeds
                    City Council planning department before specifying external works.
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
                        href="https://www.trustmark.org.uk/find-a-tradesperson?location=Leeds"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Search Leeds installers
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
                        domestic energy assessor in Leeds.
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
                        Better Homes West Yorkshire
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Regional retrofit coordination service providing advice and contractor
                        access across West Yorkshire.
                      </p>
                      <a
                        href="https://www.westyorks-ca.gov.uk/improving-places/better-homes-west-yorkshire/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Visit Better Homes WY
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

                <TipBox title="Finding Stone Building Specialists">
                  <p>
                    For Leeds stone-built properties, seek installers with specific experience
                    in traditional Yorkshire stone construction. The SPAB (Society for the
                    Protection of Ancient Buildings) and Historic England maintain lists of
                    heritage building specialists. Improper insulation of stone walls can cause
                    serious damp problems.
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
                    Leeds rental properties range from listed Georgian townhouses to modern
                    student blocks. The city distinctive stone-built terraces present unique
                    challenges but also character that supports rental demand.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Victorian Terraces</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Stone and brick terraces in Headingley, Hyde Park, and Harehills. Popular
                        for student lets. Solid walls typically require internal insulation.
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
                        Common in Moortown, Roundhay, and outer suburbs. Often have unfilled
                        cavity walls offering excellent upgrade potential at lower cost.
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
                        City centre developments and student accommodation blocks. Modern blocks
                        often already meet EPC C. Older blocks may need communal improvements.
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
                      <h3 className="font-semibold text-primary-800 mb-2">Back-to-Backs</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Historic Leeds housing type, many now listed. Limited external walls
                        mean improvement options are constrained. May qualify for heritage
                        exemption.
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

                <InfoBox title="Key Leeds Contacts for Landlords">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-800">Leeds City Council Housing</h4>
                      <p className="text-sm text-neutral-600">
                        General housing enquiries and private sector housing
                      </p>
                      <p className="text-sm">
                        <Phone className="inline w-4 h-4 mr-1" />
                        <a href="tel:01132224405" className="text-primary-600">0113 222 4405</a>
                      </p>
                      <p className="text-sm">
                        <ExternalLink className="inline w-4 h-4 mr-1" />
                        <a
                          href="https://www.leeds.gov.uk/housing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600"
                        >
                          leeds.gov.uk/housing
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Better Homes West Yorkshire</h4>
                      <p className="text-sm text-neutral-600">
                        Regional energy efficiency and retrofit support
                      </p>
                      <p className="text-sm">
                        <ExternalLink className="inline w-4 h-4 mr-1" />
                        <a
                          href="https://www.westyorks-ca.gov.uk/improving-places/better-homes-west-yorkshire/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600"
                        >
                          westyorks-ca.gov.uk/better-homes
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
                    sourceName="Leeds City Council"
                    documentTitle="Housing Services"
                    url="https://www.leeds.gov.uk/housing"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="West Yorkshire Combined Authority"
                    documentTitle="Better Homes West Yorkshire"
                    url="https://www.westyorks-ca.gov.uk/improving-places/better-homes-west-yorkshire/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="ECO4 Guidance"
                    url="https://www.gov.uk/government/publications/energy-company-obligation-eco4-guidance-local-authorities"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Historic England"
                    documentTitle="Energy Efficiency and Traditional Homes"
                    url="https://historicengland.org.uk/advice/your-home/saving-energy/"
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
                    <h3 className="font-semibold text-primary-800 mb-3">Leeds Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="https://www.leeds.gov.uk/housing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-1"
                        >
                          Council Housing Team
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.trustmark.org.uk/find-a-tradesperson?location=Leeds"
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
                      Get a personalised estimate for your Leeds property.
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
              excerpt="Comprehensive guidance for improving EPC ratings in Victorian terraced properties including stone-built homes."
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
