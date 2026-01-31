import { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Building2,
  Phone,
  Globe,
  Landmark,
  Home,
  Users,
  Thermometer,
  PoundSterling,
  FileText,
  ArrowRight,
  CheckCircle2,
  Heart,
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
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { SourceCitation } from '@/components/content/SourceCitation';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Leicester EPC Compliance Guide for Landlords | Local Support & Costs | GreenLord',
  description:
    'Complete Leicester landlord guide to EPC compliance. Warm Homes Local Grant, multi-generational housing considerations, regional cost benchmarks, and property-specific advice.',
  openGraph: {
    title: 'Leicester EPC Compliance Guide | GreenLord',
    description:
      'Local EPC guidance for Leicester landlords. Council support, grant schemes including Warm Homes Local, and regional cost estimates for rental property improvements.',
    url: `${SITE_CONFIG.url}/local-guides/leicester`,
    type: 'article',
  },
};

export default function LeicesterGuidePage() {
  return (
    <>
      <PageHeader
        title="Leicester EPC Compliance Guide"
        subtitle="Local authority support, grant schemes, and cost benchmarks for Leicester landlords preparing for EPC C 2030."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
          { name: 'Leicester', url: `${SITE_CONFIG.url}/local-guides/leicester` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <article className="max-w-4xl mx-auto">
            <ArticleHeader
              title="Leicester Landlord EPC Guide: Local Support and Costs"
              publishedDate="2026-01-31"
              lastUpdated="2026-01-31"
              author={SITE_CONFIG.author}
              readingTime={8}
              subtitle="Everything Leicester landlords need to know about local EPC support, Warm Homes grants, and realistic improvement costs"
            />

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Leicester&apos;s private rental sector serves one of the UK&apos;s most diverse communities, with housing
                requirements that often reflect multi-generational living patterns and extended family arrangements.
                This creates unique considerations for energy efficiency improvements, as properties may have higher
                occupancy levels and different usage patterns than typical single-family rentals.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                The city&apos;s housing stock ranges from Victorian terraces in the inner city to inter-war suburbs and
                newer developments on the outskirts. Leicester and Leicestershire are active participants in the Warm
                Homes Local Grant scheme, providing additional funding opportunities for landlords beyond the standard
                ECO4 programme.
              </p>
            </div>

            <KeyFactBox title="Leicester at a Glance" icon={MapPin}>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Private Rental Properties:</span> Approx. 35,000
                </div>
                <div>
                  <span className="font-medium">Average EPC Rating:</span> D (56 points)
                </div>
                <div>
                  <span className="font-medium">Warm Homes Local:</span> Participating area
                </div>
                <div>
                  <span className="font-medium">ECO4 Scheme:</span> Active
                </div>
              </div>
            </KeyFactBox>

            {/* Local EPC Landscape */}
            <section id="local-epc-landscape" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Local EPC Landscape
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Leicester&apos;s housing stock reflects the city&apos;s industrial heritage and subsequent growth. The
                  textile industry historically attracted workers whose descendants continue to shape the city&apos;s
                  character. Many of the older terraced properties in areas like Belgrave, Spinney Hills, and Highfields
                  now serve as rental accommodation for Leicester&apos;s diverse communities.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  A notable feature of Leicester&apos;s rental market is the prevalence of larger properties accommodating
                  extended families. Multi-generational households are common, particularly in the Asian community,
                  meaning properties often have higher occupancy and energy use than similar-sized homes elsewhere.
                  This can affect both the urgency of efficiency improvements and their cost-effectiveness.
                </p>
              </div>

              <InfoBox title="Multi-Generational Housing Considerations">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <p className="mb-2">
                      Properties accommodating extended families often have higher heating and hot water demands.
                      Energy efficiency improvements can deliver significant bill savings for these households,
                      making compliant properties more attractive to tenants.
                    </p>
                    <p className="text-sm">
                      Consider improvements that address high-use areas: efficient boilers with good hot water
                      output, multiple heating zones, and robust insulation throughout.
                    </p>
                  </div>
                </div>
              </InfoBox>

              <div className="grid gap-4 md:grid-cols-2 mt-6">
                <Card variant="outlined">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary-600" />
                      Common Property Types
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Victorian terraces (Belgrave, Highfields, Spinney Hills)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Inter-war semis and terraces (Evington, Oadby borders)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Post-war estates (Braunstone, New Parks, Beaumont Leys)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Newer builds on city outskirts</span>
                      </li>
                    </ul>
                  </CardBody>
                </Card>

                <Card variant="outlined">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                      <Thermometer className="w-5 h-5 text-primary-600" />
                      Typical EPC Challenges
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Solid wall terraces with poor thermal performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>High occupancy increasing heating demands</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Older heating systems struggling with capacity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Extensions and conversions affecting assessments</span>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </div>
            </section>

            {/* Local Authority Support */}
            <section id="local-authority-support" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Local Authority Support
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Leicester City Council provides housing services including energy efficiency advice and enforcement
                  of MEES regulations. The council participates in regional grant schemes and can signpost landlords
                  to available funding. Leicester&apos;s diverse population means the council offers services and
                  information in multiple languages.
                </p>
              </div>

              <InfoBox title="Leicester City Council Housing Services">
                <p className="mb-2">
                  The council&apos;s housing team handles private sector housing enquiries including MEES compliance,
                  HMO licensing, and energy efficiency advice. They can provide referrals to grant schemes and
                  information about local support.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary-500" />
                    <a href="https://www.leicester.gov.uk/housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      leicester.gov.uk/housing
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary-500" />
                    <span>0116 454 1000 (Council main line)</span>
                  </div>
                </div>
              </InfoBox>

              <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-neutral-800 mb-3">Council Services for Private Landlords</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Energy advice and grant signposting (multilingual support available)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>HMO licensing scheme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>MEES compliance guidance and enforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Referrals to Warm Homes programmes</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Available Grant Schemes */}
            <section id="grant-schemes" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Available Grant Schemes
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Leicester and Leicestershire are active participants in the Warm Homes Local Grant scheme, providing
                  additional funding opportunities beyond standard ECO4. This regional approach means more households
                  may qualify for support, and landlords have additional routes to access funded improvements.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <Card variant="highlighted">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent-100 rounded-lg">
                        <Home className="w-6 h-6 text-accent-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-800 mb-2">Warm Homes Local Grant</h3>
                        <p className="text-sm text-neutral-700 mb-3">
                          Leicestershire is a participating area for the Warm Homes Local Grant, providing government
                          funding for energy efficiency improvements. The scheme is administered regionally and may
                          have different eligibility criteria from ECO4. Contact the council for current details
                          and to check if your property or tenant qualifies.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Status:</span> Active - Leicestershire is a participating area
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card variant="outlined">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Landmark className="w-6 h-6 text-primary-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-800 mb-2">ECO4 Scheme</h3>
                        <p className="text-sm text-neutral-700 mb-3">
                          Standard ECO4 funding is also available in Leicester. Properties with tenants on qualifying
                          benefits, or in lower Council Tax bands in deprived areas, may qualify for funded
                          improvements. The council can provide referrals through the ECO4 flex route.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Typical measures:</span> Insulation, heating, renewables
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card variant="outlined">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-success-100 rounded-lg">
                        <Thermometer className="w-6 h-6 text-success-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-800 mb-2">Boiler Upgrade Scheme (BUS)</h3>
                        <p className="text-sm text-neutral-700 mb-3">
                          National scheme providing grants of up to {formatCurrency(7500)} for air source heat pumps.
                          Available to landlords replacing existing fossil fuel heating. Property must meet insulation
                          requirements shown on the EPC.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Grant amount:</span> Up to {formatCurrency(7500)} for ASHP
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <TipBox title="Check Multiple Schemes">
                <p>
                  With both ECO4 and Warm Homes Local Grant operating in Leicester, it is worth checking eligibility
                  for both schemes. Requirements and available measures may differ. The council&apos;s energy advice
                  service can help identify which scheme best fits your situation.
                </p>
              </TipBox>
            </section>

            {/* Local Cost Benchmarks */}
            <section id="local-costs" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Local Cost Benchmarks
              </h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-neutral-700 leading-relaxed">
                  Leicester benefits from East Midlands pricing, which is typically around or slightly below the
                  national average. The city has a reasonable supply of qualified installers, though demand is
                  increasing as the 2030 deadline approaches. For properties with extensions or conversions,
                  factor in potential complexity when budgeting for improvements.
                </p>
              </div>

              <CostTable
                title="Leicester Typical Improvement Costs"
                items={[
                  {
                    improvement: 'Loft Insulation (to 270mm)',
                    lowEstimate: 370,
                    highEstimate: 570,
                    notes: 'East Midlands average pricing.',
                  },
                  {
                    improvement: 'Cavity Wall Insulation',
                    lowEstimate: 470,
                    highEstimate: 920,
                    notes: 'Where cavity walls exist. Common in inter-war properties.',
                  },
                  {
                    improvement: 'Internal Wall Insulation',
                    lowEstimate: 7200,
                    highEstimate: 12500,
                    notes: 'For solid wall terraces. Price per typical property.',
                  },
                  {
                    improvement: 'External Wall Insulation',
                    lowEstimate: 10000,
                    highEstimate: 17500,
                    notes: 'May require planning permission in some areas.',
                  },
                  {
                    improvement: 'Double Glazing (full house)',
                    lowEstimate: 3600,
                    highEstimate: 7200,
                    notes: 'Standard UPVC. Period-style alternatives cost more.',
                  },
                  {
                    improvement: 'Condensing Boiler Replacement',
                    lowEstimate: 2200,
                    highEstimate: 3500,
                    notes: 'Gas boiler. Consider higher output for larger households.',
                  },
                  {
                    improvement: 'Smart Heating Controls',
                    lowEstimate: 175,
                    highEstimate: 350,
                    notes: 'Zoning particularly useful for larger properties.',
                  },
                  {
                    improvement: 'LED Lighting Throughout',
                    lowEstimate: 85,
                    highEstimate: 175,
                    notes: 'Supply and fit for typical 3-bed property.',
                  },
                ]}
                showTotal={false}
                footerNote="Costs reflect Leicester and East Midlands market rates as of January 2026. Properties with extensions or high occupancy may require larger systems. Always obtain multiple quotes."
              />

              <InfoBox title="Sizing for Higher Occupancy">
                <p>
                  Properties accommodating larger households may need higher-capacity heating and hot water systems
                  than a standard installation. When planning boiler replacement or heat pump installation, discuss
                  expected occupancy with the installer to ensure appropriate sizing. An undersized system will
                  struggle and may not deliver expected EPC improvements.
                </p>
              </InfoBox>
            </section>

            {/* Local Contractors & Resources */}
            <section id="contractors" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Local Contractors and Resources
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Leicester has a developing network of energy efficiency contractors. For any work that may be
                  used toward grant funding or cost cap exemption evidence, prioritise TrustMark-registered
                  installers. The city&apos;s diverse community means some contractors offer services in multiple
                  languages.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary-600" />
                    Finding Qualified Contractors
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>
                      <a href="https://www.trustmark.org.uk/find-a-tradesperson" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                        TrustMark - Find registered tradespeople
                      </a>
                    </li>
                    <li>
                      <a href="https://mcscertified.com/find-an-installer/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                        MCS - Heat pump installers
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ciga.co.uk/find-an-installer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                        CIGA - Cavity insulation installers
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-600" />
                    Local Support Organisations
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>
                      Leicester City Council Housing Team
                    </li>
                    <li>
                      Leicestershire Warm Homes Service
                    </li>
                    <li>
                      East Midlands Landlords Association
                    </li>
                    <li>
                      Citizens Advice Leicestershire
                    </li>
                  </ul>
                </div>
              </div>

              <TipBox title="Get Quotes in Writing">
                <p>
                  Always obtain written quotes that specify exactly what work is included, the materials to be
                  used, and any assumptions about property condition. For multi-generational properties, ensure
                  quotes account for any specific requirements like larger heating systems or additional zones.
                </p>
              </TipBox>
            </section>

            {/* Property Stock Overview */}
            <section id="property-stock" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Property Stock Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Leicester&apos;s private rental sector spans the full range of property types, from Victorian terraces
                  serving extended family households to modern developments on the city&apos;s outskirts. Understanding
                  your property&apos;s context and typical tenant profile helps identify appropriate improvement strategies.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Inner City Family Areas</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Belgrave, Highfields, Spinney Hills, Evington
                  </p>
                  <p className="text-sm text-neutral-700">
                    Victorian and Edwardian terraces, many serving extended family households. Solid wall
                    construction with varying levels of existing improvement. Higher occupancy means energy
                    bills are a significant concern for tenants. Typical starting EPC: E or D. Reaching C
                    requires significant insulation investment.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Suburban Areas</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Oadby, Wigston borders, Glenfield
                  </p>
                  <p className="text-sm text-neutral-700">
                    Mix of inter-war and post-war properties with more cavity walls. Generally better starting
                    EPC ratings and lower improvement costs. Family rental market with longer tenancies.
                    Typical starting EPC: D. Reaching C often achievable with moderate investment.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Outer Estates</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Braunstone, New Parks, Beaumont Leys, Mowmacre
                  </p>
                  <p className="text-sm text-neutral-700">
                    Predominantly post-war construction with mix of council-built and newer private developments.
                    Many properties may have received previous improvement under various schemes. Higher proportion
                    of tenants may qualify for ECO4 or Warm Homes Local funding. Check existing improvements
                    before planning additional works. Typical starting EPC: D or E.
                  </p>
                </div>
              </div>

              <WarningBox title="Extensions and Conversions">
                <p>
                  Many Leicester properties have been extended or converted to provide additional living space.
                  Extensions can significantly affect EPC assessments, particularly if built to lower standards
                  than the main property. When planning improvements, consider whether addressing extension
                  efficiency might be cost-effective.
                </p>
              </WarningBox>
            </section>

            {/* Contact Information */}
            <section id="contact" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Contact Information
              </h2>

              <Card variant="highlighted">
                <CardBody>
                  <h3 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
                    <Landmark className="w-5 h-5" />
                    Leicester City Council
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Housing Services</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://www.leicester.gov.uk/housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            leicester.gov.uk/housing
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          <span>0116 454 1000</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Private Sector Housing</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://www.leicester.gov.uk/housing/private-housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            Private Housing Team
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          <span>0116 454 1001 (Housing Standards)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
              <h2 className="text-xl font-bold text-primary-800 mb-4">
                Plan Your Leicester Property Improvements
              </h2>
              <p className="text-primary-700 mb-6">
                Use our calculator to estimate upgrade costs for your Leicester property. Consider the specific
                needs of your property and tenant profile when planning improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tools/cost-calculator">
                  <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Calculate Upgrade Costs
                  </Button>
                </Link>
                <Link href="/property-types/victorian-terrace">
                  <Button variant="outline" size="lg">
                    Victorian Terrace Guide
                  </Button>
                </Link>
              </div>
            </section>

            {/* Sources */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-700 mb-4">Sources</h3>
              <div className="space-y-2">
                <SourceCitation
                  sourceName="Leicester City Council"
                  documentTitle="Housing Services"
                  url="https://www.leicester.gov.uk/housing"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="ECO4 Scheme Guidance"
                  url="https://www.gov.uk/government/publications/energy-company-obligation-eco-scheme"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="Warm Homes: Local Grant"
                  url="https://www.gov.uk/government/publications/warm-homes-local-grant"
                  accessedDate="January 2026"
                />
              </div>
            </section>
          </article>
        </Container>
      </Section>
    </>
  );
}
