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
  Calendar,
  PoundSterling,
  Users,
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
  title: 'Manchester Landlord EPC Guide | Local Grants & Support | GreenLord',
  description:
    'Complete EPC compliance guide for Manchester landlords. Home Energy Loan Plan, ECO4 Flex eligibility, local contractor resources, and regional cost benchmarks for Greater Manchester properties.',
  openGraph: {
    title: 'Manchester Landlord EPC Guide | GreenLord',
    description:
      'Local EPC support for Manchester landlords. Council schemes, grants, and regional cost estimates for Greater Manchester rental properties.',
    url: `${SITE_CONFIG.url}/local-guides/manchester`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'epc-landscape', text: 'Local EPC Landscape', level: 2 as const },
  { id: 'council-support', text: 'Local Authority Support', level: 2 as const },
  { id: 'grant-schemes', text: 'Available Grant Schemes', level: 2 as const },
  { id: 'eco4', text: 'ECO4 in Manchester', level: 3 as const },
  { id: 'warm-homes', text: 'Warm Homes: Local Grant', level: 3 as const },
  { id: 'boiler-upgrade', text: 'Boiler Upgrade Scheme', level: 3 as const },
  { id: 'home-energy-loan', text: 'Home Energy Loan Plan', level: 3 as const },
  { id: 'cost-benchmarks', text: 'Local Cost Benchmarks', level: 2 as const },
  { id: 'contractors', text: 'Local Contractors & Resources', level: 2 as const },
  { id: 'property-stock', text: 'Property Stock Overview', level: 2 as const },
  { id: 'contact', text: 'Contact Information', level: 2 as const },
];

export default function ManchesterGuidePage() {
  return (
    <>
      <PageHeader
        title="Manchester Landlord EPC Guide"
        subtitle="Local grants, council support, and cost benchmarks for landlords in Greater Manchester. Access interest-free loans and ECO4 Flex funding for your rental properties."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
          { name: 'Manchester', url: `${SITE_CONFIG.url}/local-guides/manchester` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="Manchester Landlord EPC Guide"
                publishedDate="2026-01-31"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={14}
                subtitle="Everything Manchester landlords need to know about local EPC support, grants, and achieving compliance"
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Manchester has one of the largest private rented sectors in the North West, with
                  over 85,000 privately rented properties across the city. The city characteristic
                  Victorian and Edwardian terraced housing stock presents both challenges and
                  opportunities for landlords seeking to improve EPC ratings ahead of the 2030
                  deadline.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Manchester City Council has been proactive in supporting energy efficiency
                  improvements, offering the Home Energy Loan Plan with up to £10,000 in
                  interest-free lending, alongside participation in national schemes like ECO4 and
                  the Warm Homes: Local Grant. This guide covers all the local support available to
                  Manchester landlords.
                </p>
              </div>

              <KeyFactBox title="Manchester PRS at a Glance" icon={MapPin}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary-800">85,000+</span>
                    <span className="block text-primary-700">Private rented properties</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800">58%</span>
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
                    Greater Manchester housing stock reflects the region industrial heritage, with
                    a high proportion of terraced properties built before 1919. These solid-walled
                    homes typically score EPC ratings of D, E, or F without improvements, making
                    the city one of the more challenging areas for achieving EPC C compliance.
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    An estimated 58% of private rented properties in Manchester currently fall
                    below EPC C. This is higher than the national average of approximately 52%,
                    largely due to the prevalence of older terraced housing with solid walls and
                    original single-glazed windows.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Terraced Housing
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Victorian and Edwardian terraces dominate central and inner Manchester.
                        Solid brick walls and bay windows are characteristic, typically scoring EPC
                        D-F.
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
                        Significant new-build flat development in the city centre. Modern blocks
                        typically already meet EPC C, but 1960s-80s blocks may need work.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Semi-Detached
                      </h3>
                      <p className="text-sm text-neutral-600">
                        1930s semis common in outer boroughs like Stockport and Trafford. Often
                        have unfilled cavity walls offering good upgrade potential.
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
                    Manchester City Council operates several energy efficiency programmes and
                    participates in national schemes. The council housing and energy teams can
                    provide advice on available support and eligibility criteria.
                  </p>
                </div>

                <Card variant="highlighted" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary-600" />
                      Manchester City Council Energy Team
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <ExternalLink className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Website:</span>{' '}
                          <a
                            href="https://www.manchester.gov.uk/info/500002/council_policies_and_strategies/3833/energy_efficiency"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            manchester.gov.uk/energy_efficiency
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">General Enquiries:</span>{' '}
                          <a
                            href="tel:01onal234500"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            0161 234 5000
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-neutral-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Email:</span>{' '}
                          <a
                            href="mailto:housing@manchester.gov.uk"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            housing@manchester.gov.uk
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <InfoBox title="Greater Manchester Combined Authority">
                  <p>
                    The Greater Manchester Combined Authority (GMCA) coordinates energy efficiency
                    initiatives across all ten Greater Manchester boroughs. Their Retrofit Task
                    Force works on large-scale retrofit programmes, and landlords in any GM borough
                    can access GMCA-supported schemes. Visit{' '}
                    <a
                      href="https://www.greatermanchester-ca.gov.uk/what-we-do/environment/retrofit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      greatermanchester-ca.gov.uk/retrofit
                    </a>{' '}
                    for more information.
                  </p>
                </InfoBox>

                <div className="mt-6 prose prose-lg max-w-none">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    ECO4 Flex Eligibility in Manchester
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Manchester City Council participates in ECO4 Flex, which allows them to declare
                    households eligible for ECO4 funding even if they do not meet standard
                    criteria. The council ECO4 Flex Statement of Intent covers:
                  </p>
                  <ul className="text-neutral-700">
                    <li>Households with a combined income below £31,000</li>
                    <li>Properties in areas with high Index of Multiple Deprivation scores</li>
                    <li>Households receiving Council Tax Reduction</li>
                    <li>Households referred by health or social care professionals</li>
                    <li>Properties with EPC rating of E, F, or G</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    If your tenant may qualify under any of these criteria, contact the council
                    energy team for a flex declaration, which can then be used to access ECO4
                    funding through an approved installer.
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
                    ECO4 in Manchester
                  </h3>
                  <KeyFactBox title="ECO4 Scheme" icon={PoundSterling}>
                    <p className="mb-2">
                      The Energy Company Obligation (ECO4) provides funded energy efficiency
                      improvements for eligible households. In Manchester, ECO4 can cover:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Loft insulation (fully funded)</li>
                      <li>Cavity wall insulation (fully funded)</li>
                      <li>Solid wall insulation (substantial contribution)</li>
                      <li>Heating system upgrades</li>
                      <li>Solar panels in some circumstances</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Eligibility:</strong> Tenant must receive qualifying benefits OR
                      qualify under LA Flex criteria. Property must have EPC of D or below.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="warm-homes" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Warm Homes: Local Grant
                  </h3>
                  <KeyFactBox title="Warm Homes: Local Grant" icon={Home}>
                    <p className="mb-2">
                      The Warm Homes: Local Grant (formerly Local Authority Delivery scheme)
                      provides funding for energy efficiency improvements in low-income
                      households. Manchester City Council is a participating authority.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Grants up to £10,000 per property for insulation measures</li>
                      <li>Additional funding available for low carbon heating</li>
                      <li>Available to owner-occupiers and private landlords</li>
                      <li>Household income cap typically £31,000</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>For landlords:</strong> You may need to contribute a percentage of
                      costs. Contact the council for current funding availability.
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
                      installation. Available to Manchester landlords regardless of tenant
                      income:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>£7,500 towards air source heat pump</li>
                      <li>£7,500 towards ground source heat pump</li>
                      <li>Property must have valid EPC with no outstanding recommendations for loft or cavity wall insulation</li>
                      <li>Must replace existing fossil fuel heating system</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>Note:</strong> Heat pumps work best in well-insulated properties.
                      Consider insulation improvements before switching heating system.
                    </p>
                  </KeyFactBox>
                </section>

                <section id="home-energy-loan" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Home Energy Loan Plan (Manchester-Specific)
                  </h3>
                  <KeyFactBox title="Home Energy Loan Plan" icon={PoundSterling}>
                    <p className="mb-2">
                      Manchester City Council unique Home Energy Loan Plan offers interest-free
                      loans for energy efficiency improvements:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Borrow up to £10,000 interest-free</li>
                      <li>Repayment periods up to 10 years</li>
                      <li>Available to homeowners and landlords</li>
                      <li>Can be used for insulation, glazing, heating, and renewables</li>
                      <li>No income restrictions for landlords</li>
                    </ul>
                    <p className="mt-2 text-sm">
                      <strong>How to apply:</strong> Contact Manchester City Council energy team
                      or visit the council website for application details.
                    </p>
                  </KeyFactBox>

                  <TipBox title="Combining Funding Sources">
                    <p>
                      Manchester landlords can often combine multiple funding sources. For
                      example, use ECO4 to fund cavity wall insulation, the Home Energy Loan Plan
                      for new windows, and the Boiler Upgrade Scheme for a heat pump. Careful
                      planning can significantly reduce your out-of-pocket costs while maximising
                      EPC improvement.
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
                    Labour and material costs in Manchester are typically 5-10% below London and
                    South East prices, but in line with other major Northern cities. The following
                    estimates reflect typical costs for Greater Manchester properties in 2026.
                  </p>
                </div>

                <CostTable
                  title="Manchester Area EPC Improvement Costs"
                  items={[
                    {
                      improvement: 'Loft Insulation (to 270mm)',
                      lowEstimate: 350,
                      highEstimate: 550,
                      notes: 'Typical 3-bed terrace. Quick win for most properties.',
                    },
                    {
                      improvement: 'Cavity Wall Insulation',
                      lowEstimate: 450,
                      highEstimate: 800,
                      notes: 'Where cavities exist (typically post-1930). 5-8 EPC points.',
                    },
                    {
                      improvement: 'Internal Solid Wall Insulation',
                      lowEstimate: 7000,
                      highEstimate: 12000,
                      notes: 'Common requirement for Victorian terraces. Per property.',
                    },
                    {
                      improvement: 'External Solid Wall Insulation',
                      lowEstimate: 10000,
                      highEstimate: 18000,
                      notes: 'May need planning permission. Often not suitable for terraces.',
                    },
                    {
                      improvement: 'Double Glazing (full house)',
                      lowEstimate: 3500,
                      highEstimate: 7000,
                      notes: 'Timber-effect uPVC for conservation areas available.',
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
                      notes: 'Windows, doors, and floors. Essential for older properties.',
                    },
                  ]}
                  showTotal={false}
                  footerNote="Costs reflect Greater Manchester market rates as of January 2026. Always obtain at least three quotes from TrustMark-registered installers. Northern regional costs are typically 5-10% below national averages."
                />

                <WarningBox title="Victorian Terrace Cost Expectations">
                  <p>
                    Victorian terraces, which dominate Manchester rental stock, typically
                    require the highest investment to reach EPC C. Solid wall insulation alone
                    can cost £7,000-£12,000, potentially qualifying landlords for the £10,000
                    cost cap exemption if EPC C cannot be achieved within this budget.
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
                        href="https://www.trustmark.org.uk/find-a-tradesperson?location=Manchester"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Search Manchester installers
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
                        domestic energy assessor in Manchester.
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
                        Greater Manchester Retrofit Hub
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        GMCA Retrofit Hub provides advice and connects property owners with
                        approved contractors for whole-house retrofit projects.
                      </p>
                      <a
                        href="https://gmgreencity.com/retrofit/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Visit Retrofit Hub
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
                        Free, impartial advice on energy efficiency improvements and available
                        funding schemes from the Energy Saving Trust.
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
                    Manchester has a competitive market for energy efficiency installers. Always
                    obtain at least three quotes, check TrustMark registration, and ask for
                    references from similar properties. For solid wall insulation, consider
                    specialists with experience in Victorian terraces rather than general
                    builders.
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
                    Manchester rental properties span from Georgian townhouses to modern
                    city-centre apartments. Understanding your property type is essential for
                    planning cost-effective improvements.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Victorian Terraces</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Dominant in areas like Rusholme, Moss Side, Levenshulme, and Longsight.
                        Solid walls, bay windows, and high ceilings. Typically EPC D-F.
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
                        Common in Chorlton, Didsbury, and outer boroughs. Cavity walls often
                        unfilled, excellent upgrade potential. Typically EPC D.
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
                        City centre developments from 1960s blocks to new builds. Leasehold
                        consent often required for improvements. EPC varies widely.
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
                      <h3 className="font-semibold text-primary-800 mb-2">Converted Flats</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Large Victorian houses converted to flats, common in Fallowfield and
                        student areas. Often challenging to improve due to shared elements.
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

                <InfoBox title="Key Manchester Contacts for Landlords">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-800">Manchester City Council Housing</h4>
                      <p className="text-sm text-neutral-600">
                        General housing enquiries and private landlord licensing
                      </p>
                      <p className="text-sm">
                        <Phone className="inline w-4 h-4 mr-1" />
                        <a href="tel:01onal234500" className="text-primary-600">0161 234 5000</a>
                      </p>
                      <p className="text-sm">
                        <ExternalLink className="inline w-4 h-4 mr-1" />
                        <a
                          href="https://www.manchester.gov.uk/info/200011/housing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600"
                        >
                          manchester.gov.uk/housing
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Energy Efficiency Team</h4>
                      <p className="text-sm text-neutral-600">
                        Home Energy Loan Plan and grant scheme information
                      </p>
                      <p className="text-sm">
                        <Mail className="inline w-4 h-4 mr-1" />
                        <a href="mailto:energyefficiency@manchester.gov.uk" className="text-primary-600">
                          energyefficiency@manchester.gov.uk
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
                    sourceName="Manchester City Council"
                    documentTitle="Energy Efficiency Information"
                    url="https://www.manchester.gov.uk/info/500002/council_policies_and_strategies/3833/energy_efficiency"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Greater Manchester Combined Authority"
                    documentTitle="Retrofit Greater Manchester"
                    url="https://www.greatermanchester-ca.gov.uk/what-we-do/environment/retrofit/"
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
                    <h3 className="font-semibold text-primary-800 mb-3">Manchester Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="https://www.manchester.gov.uk/info/500002/council_policies_and_strategies/3833/energy_efficiency"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center gap-1"
                        >
                          Council Energy Team
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.trustmark.org.uk/find-a-tradesperson?location=Manchester"
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
                      Get a personalised estimate for your Manchester property.
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
              excerpt="Comprehensive guidance for improving EPC ratings in pre-1919 terraced properties common across Manchester."
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
