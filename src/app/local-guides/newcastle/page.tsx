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
  AlertTriangle,
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
  title: 'Newcastle EPC Compliance Guide for Landlords | Local Support & Costs | GreenLord',
  description:
    'Complete Newcastle landlord guide to EPC compliance. High fuel poverty support, ECO4 schemes, lowest regional costs, and property-specific advice for Tyneside rental properties.',
  openGraph: {
    title: 'Newcastle EPC Compliance Guide | GreenLord',
    description:
      'Local EPC guidance for Newcastle landlords. Council energy support, grant schemes, and regional cost estimates for rental property improvements.',
    url: `${SITE_CONFIG.url}/local-guides/newcastle`,
    type: 'article',
  },
};

export default function NewcastleGuidePage() {
  return (
    <>
      <PageHeader
        title="Newcastle EPC Compliance Guide"
        subtitle="Local authority support, grant schemes, and cost benchmarks for Newcastle landlords preparing for EPC C 2030."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
          { name: 'Newcastle', url: `${SITE_CONFIG.url}/local-guides/newcastle` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <article className="max-w-4xl mx-auto">
            <ArticleHeader
              title="Newcastle Landlord EPC Guide: Local Support and Costs"
              publishedDate="2026-01-31"
              lastUpdated="2026-01-31"
              author={SITE_CONFIG.author}
              readingTime={8}
              subtitle="Everything Newcastle landlords need to know about local EPC support, fuel poverty initiatives, and realistic improvement costs"
            />

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Newcastle upon Tyne presents both significant challenges and unique opportunities for landlords navigating
                EPC compliance. The city&apos;s high fuel poverty rates mean that energy efficiency improvements are a
                priority for local and national government, resulting in more funding opportunities than many other areas.
                At the same time, the North East consistently offers the lowest installation costs in England.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                The distinctive Tyneside flat, a regional housing type found almost exclusively in Newcastle and
                Gateshead, creates specific considerations for EPC improvement. These properties, which appear as terraces
                externally but contain two separate flats (upper and lower), have unique construction characteristics that
                affect both assessment methodology and improvement options.
              </p>
            </div>

            <KeyFactBox title="Newcastle at a Glance" icon={MapPin}>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Private Rental Properties:</span> Approx. 38,000
                </div>
                <div>
                  <span className="font-medium">Average EPC Rating:</span> D (55 points)
                </div>
                <div>
                  <span className="font-medium">Fuel Poverty Rate:</span> Above national average
                </div>
                <div>
                  <span className="font-medium">ECO4 Priority:</span> High (fuel poverty area)
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
                  Newcastle&apos;s housing stock reflects its industrial heritage and the city&apos;s growth from Victorian times
                  through to modern regeneration. The private rental sector is concentrated in several distinct areas,
                  from the student-dominated neighbourhoods of Jesmond and Heaton to the family rental markets of Fenham,
                  Benwell, and the outer suburbs.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  The prevalence of Tyneside flats sets Newcastle apart from other cities. These properties, typically
                  built between 1870 and 1930, present specific challenges for EPC assessment and improvement. The shared
                  party wall construction and the relationship between upper and lower flats affects how improvements to
                  one unit impact the other.
                </p>
              </div>

              <WarningBox title="High Fuel Poverty Area">
                <p>
                  Newcastle has fuel poverty rates significantly above the national average. This means many of your
                  tenants may be struggling with energy bills, making efficient properties more attractive and easier
                  to let. It also means ECO4 funding is more likely to be available for qualifying properties.
                </p>
              </WarningBox>

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
                        <span>Tyneside flats (upper and lower) - unique to the region</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Victorian and Edwardian terraces (Jesmond, Heaton)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Inter-war semis and terraces (Fenham, Benwell)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Post-war estates and ex-council stock</span>
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
                        <span>Tyneside flat construction limits some improvements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Solid wall construction in older properties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Harsh northern climate increases heating demands</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Some properties off the gas grid (rural suburbs)</span>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </div>

              <InfoBox title="Understanding Tyneside Flats">
                <p>
                  Tyneside flats are a unique North East housing type where what appears to be a terraced house actually
                  contains two separate flats. The lower flat typically has the front door directly onto the street, while
                  the upper flat is accessed by a side passage. Each flat has its own EPC and must independently comply
                  with MEES. Coordination with the other flat&apos;s owner is often needed for roof or external wall work.
                </p>
              </InfoBox>
            </section>

            {/* Local Authority Support */}
            <section id="local-authority-support" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Local Authority Support
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Newcastle City Council has been particularly active in addressing fuel poverty and promoting energy
                  efficiency. The council operates several schemes and has strong partnerships with energy suppliers
                  and regional bodies to deliver support. Due to the area&apos;s high fuel poverty levels, Newcastle often
                  receives priority for national funding programmes.
                </p>
              </div>

              <InfoBox title="Newcastle City Council Housing Services">
                <p className="mb-2">
                  The council&apos;s housing team provides extensive energy advice and can help landlords and tenants access
                  available support. Their Private Sector Housing team handles MEES enforcement but also offers guidance
                  on compliance.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary-500" />
                    <a href="https://www.newcastle.gov.uk/housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      newcastle.gov.uk/housing
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary-500" />
                    <span>0191 278 7878 (Council main line)</span>
                  </div>
                </div>
              </InfoBox>

              <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-neutral-800 mb-3">Council Services for Private Landlords</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Energy advice service and funding signposting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Selective licensing in some areas (requires energy efficiency standards)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Partnership with warm homes schemes for tenant referrals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>HMO licensing with energy efficiency conditions</span>
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
                  Newcastle&apos;s status as a high fuel poverty area means ECO4 funding is particularly relevant. Energy
                  suppliers have obligations to deliver a proportion of their ECO4 improvements in the most deprived
                  areas, and much of Newcastle qualifies. This creates genuine opportunities for landlords to access
                  funded improvements.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <Card variant="highlighted">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Landmark className="w-6 h-6 text-primary-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-800 mb-2">ECO4 Scheme - High Priority Area</h3>
                        <p className="text-sm text-neutral-700 mb-3">
                          Newcastle&apos;s high fuel poverty rates mean it qualifies for priority ECO4 delivery. Properties
                          in Council Tax bands A-D, or with tenants on qualifying benefits, are particularly likely to
                          receive funding. The scheme covers insulation, heating improvements, and some renewable measures.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Newcastle status:</span> Priority delivery area for ECO4
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card variant="outlined">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent-100 rounded-lg">
                        <Home className="w-6 h-6 text-accent-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-800 mb-2">Warm Homes Local Grant</h3>
                        <p className="text-sm text-neutral-700 mb-3">
                          Administered through the North East Combined Authority, this scheme provides additional
                          funding for energy efficiency improvements in the region. Eligibility and available measures
                          vary, so check current availability.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Status:</span> Active in North East region
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
                          National scheme providing grants for heat pump installation. Particularly relevant for
                          properties off the gas grid in Newcastle&apos;s outer areas. Grant of up to {formatCurrency(7500)}
                          available for air source heat pumps.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Grant amount:</span> Up to {formatCurrency(7500)} for ASHP
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <TipBox title="ECO4 Flex Eligibility">
                <p>
                  Many Newcastle properties qualify for ECO4 under the &quot;flex&quot; route, which allows local authorities
                  to refer households based on local criteria. Contact Newcastle City Council&apos;s energy team to check
                  whether your property or tenant might qualify for a referral.
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
                  The North East consistently offers the lowest installation costs in England, typically 10-15% below
                  national averages. This reflects lower labour costs and a competitive market among installers. For
                  landlords planning improvements, this represents a significant advantage, making the path to EPC C
                  more affordable than in southern regions.
                </p>
              </div>

              <CostTable
                title="Newcastle Typical Improvement Costs"
                items={[
                  {
                    improvement: 'Loft Insulation (to 270mm)',
                    lowEstimate: 300,
                    highEstimate: 500,
                    notes: 'Lowest regional costs. Quick installation for accessible lofts.',
                  },
                  {
                    improvement: 'Cavity Wall Insulation',
                    lowEstimate: 400,
                    highEstimate: 800,
                    notes: 'Where cavity walls exist. Common in inter-war properties.',
                  },
                  {
                    improvement: 'Internal Wall Insulation',
                    lowEstimate: 6500,
                    highEstimate: 11000,
                    notes: 'For solid wall properties. Price per typical terrace.',
                  },
                  {
                    improvement: 'External Wall Insulation',
                    lowEstimate: 9000,
                    highEstimate: 16000,
                    notes: 'Good option where permitted. Popular in ex-council areas.',
                  },
                  {
                    improvement: 'Double Glazing (full house)',
                    lowEstimate: 3000,
                    highEstimate: 6000,
                    notes: 'Competitive local glazing market.',
                  },
                  {
                    improvement: 'Condensing Boiler Replacement',
                    lowEstimate: 2000,
                    highEstimate: 3200,
                    notes: 'Gas boiler. Heat pumps available from £7,500 after BUS grant.',
                  },
                  {
                    improvement: 'Smart Heating Controls',
                    lowEstimate: 150,
                    highEstimate: 320,
                    notes: 'Room-by-room control with TRVs.',
                  },
                  {
                    improvement: 'LED Lighting Throughout',
                    lowEstimate: 70,
                    highEstimate: 160,
                    notes: 'Supply and fit for typical property.',
                  },
                ]}
                showTotal={false}
                footerNote="Costs reflect Newcastle and North East market rates as of January 2026. The North East typically has the lowest installation costs in England. Always obtain multiple quotes."
              />

              <InfoBox title="Tyneside Flat Considerations">
                <p>
                  For Tyneside flats, some improvements require coordination with the other flat&apos;s owner. Loft insulation
                  only benefits the upper flat. External wall insulation requires agreement from both owners. Factor in
                  these complexities when planning and budgeting for improvements.
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
                  Newcastle has a well-developed network of energy efficiency contractors, partly driven by the area&apos;s
                  high volume of ECO-funded work. Many local installers have extensive experience with Tyneside flats
                  and other regional property types. Prioritise TrustMark-registered contractors for any work that may
                  be used for grant funding or cost cap exemption evidence.
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
                      Newcastle City Council Energy Team
                    </li>
                    <li>
                      North East Energy Advice Service
                    </li>
                    <li>
                      Tyne and Wear Citizens Advice
                    </li>
                    <li>
                      North East Landlords Association
                    </li>
                  </ul>
                </div>
              </div>

              <TipBox title="Experience with Tyneside Flats">
                <p>
                  When getting quotes for Tyneside flats, specifically ask about the contractor&apos;s experience with this
                  property type. The unique construction requires understanding of how upper and lower flats interact,
                  and how improvements to one affect the other. Local contractors often have more experience than
                  national firms.
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
                  Newcastle&apos;s private rental sector spans a wide range of property types and conditions. The student
                  market near the universities creates high demand for HMOs in Jesmond and Heaton, while family rentals
                  dominate the western and outer suburbs. Understanding your property&apos;s context helps identify the most
                  appropriate improvement strategy.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Student and Professional Rental Areas</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Jesmond, Heaton, Sandyford, Shieldfield
                  </p>
                  <p className="text-sm text-neutral-700">
                    Mix of Tyneside flats, Victorian terraces, and larger properties converted to HMOs. High demand
                    means well-maintained, efficient properties let quickly. Many properties already improved but
                    some still at E or F. Conservation area restrictions in parts of Jesmond.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Family Rental Areas</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Fenham, Benwell, Elswick, Walker
                  </p>
                  <p className="text-sm text-neutral-700">
                    Mix of inter-war terraces and ex-council stock. High fuel poverty rates mean many tenants may
                    qualify for ECO4 funding. Good potential for improvement with lower starting costs. Typical
                    starting EPC: D or E. Reaching C often achievable with moderate investment.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Outer Suburbs</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Gosforth, Kenton, Fawdon, Chapel House
                  </p>
                  <p className="text-sm text-neutral-700">
                    Mix of 1930s semis, post-war developments, and newer builds. Generally better starting EPC
                    ratings with cavity walls common. Some properties may be off the gas grid, making heat pumps
                    an attractive option with BUS funding. Typical starting EPC: D.
                  </p>
                </div>
              </div>

              <InfoBox title="Selective Licensing">
                <p>
                  Newcastle operates selective licensing in some areas. If your property is in a selective licensing
                  area, you must obtain a licence and meet certain conditions, which may include energy efficiency
                  requirements. Check the council website for current licensing areas and requirements.
                </p>
              </InfoBox>
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
                    Newcastle City Council
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Housing Services</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://www.newcastle.gov.uk/housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            newcastle.gov.uk/housing
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          <span>0191 278 7878</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Private Sector Housing</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://www.newcastle.gov.uk/services/housing/private-rented-housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            Private Rented Housing Team
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          <span>0191 211 6301</span>
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
                Plan Your Newcastle Property Improvements
              </h2>
              <p className="text-primary-700 mb-6">
                Use our calculator to estimate upgrade costs for your Newcastle property. The North East&apos;s lower
                labour costs mean your investment goes further than in other regions.
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
                  sourceName="Newcastle City Council"
                  documentTitle="Housing Services"
                  url="https://www.newcastle.gov.uk/housing"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="ECO4 Scheme Guidance"
                  url="https://www.gov.uk/government/publications/energy-company-obligation-eco-scheme"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="Department for Energy Security and Net Zero"
                  documentTitle="Fuel Poverty Statistics"
                  url="https://www.gov.uk/government/collections/fuel-poverty-statistics"
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
