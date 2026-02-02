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
  GraduationCap,
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
  title: 'Nottingham EPC Compliance Guide for Landlords | Local Support & Costs | GreenLord',
  description:
    'Complete Nottingham landlord guide to EPC compliance. Student rental market considerations, council energy advice, regional cost benchmarks, and property-specific advice.',
  alternates: {
    canonical: 'https://greenlord.co.uk/local-guides/nottingham',
  },
  openGraph: {
    title: 'Nottingham EPC Compliance Guide | GreenLord',
    description:
      'Local EPC guidance for Nottingham landlords. Council support, grant schemes, and regional cost estimates for rental property improvements.',
    url: `${SITE_CONFIG.url}/local-guides/nottingham`,
    type: 'article',
  },
};

export default function NottinghamGuidePage() {
  return (
    <>
      <PageHeader
        title="Nottingham EPC Compliance Guide"
        subtitle="Local authority support, grant schemes, and cost benchmarks for Nottingham landlords preparing for EPC C 2030."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
          { name: 'Nottingham', url: `${SITE_CONFIG.url}/local-guides/nottingham` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <article className="max-w-4xl mx-auto">
            <ArticleHeader
              title="Nottingham Landlord EPC Guide: Local Support and Costs"
              publishedDate="2026-01-31"
              lastUpdated="2026-01-31"
              author={SITE_CONFIG.author}
              readingTime={8}
              subtitle="Everything Nottingham landlords need to know about local EPC support, student market considerations, and realistic improvement costs"
            />

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Nottingham&apos;s private rental sector is significantly shaped by its large student population, with two
                major universities creating sustained demand for rental properties across several neighbourhoods. This
                student market brings both opportunities and specific considerations for landlords planning EPC
                improvements, particularly around timing of works and the importance of energy costs to student tenants.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Beyond the student areas, Nottingham has a diverse housing stock ranging from Victorian terraces in the
                inner city to inter-war suburbs and significant post-war developments. The city council has been active
                in promoting energy efficiency and provides useful resources for landlords seeking to improve their
                properties&apos; ratings.
              </p>
            </div>

            <KeyFactBox title="Nottingham at a Glance" icon={MapPin}>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Private Rental Properties:</span> Approx. 42,000
                </div>
                <div>
                  <span className="font-medium">Average EPC Rating:</span> D (57 points)
                </div>
                <div>
                  <span className="font-medium">Student Rental Market:</span> Significant
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
                  Nottingham&apos;s housing stock reflects the city&apos;s growth from a Victorian industrial centre through
                  twentieth-century expansion. The private rental sector spans from converted Victorian terraces near
                  the city centre to purpose-built student accommodation and family homes in the suburbs. Each property
                  type presents different opportunities and challenges for reaching EPC C.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  The large student rental market, concentrated in areas like Lenton, Dunkirk, and the Arboretum, means
                  many properties are let as HMOs with specific EPC considerations. Student tenants are often particularly
                  conscious of energy costs, making efficient properties more attractive in a competitive market.
                </p>
              </div>

              <InfoBox title="Student Rental Market Impact">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary-500 mt-0.5" />
                  <p>
                    Nottingham has approximately 60,000 students at its two universities. Many live in the private
                    rented sector, creating high demand in specific areas. Energy efficiency is increasingly important
                    to students managing tight budgets, making EPC ratings a genuine competitive advantage.
                  </p>
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
                        <span>Victorian terraces (Lenton, Radford, Hyson Green)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Inter-war semis and terraces (Sherwood, Mapperley)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Post-war estates (Bulwell, Bilborough, Bestwood)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Purpose-built student flats near universities</span>
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
                        <span>Solid wall Victorian terraces in student areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>HMO conversions with complex heating arrangements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Conservation areas in some inner-city locations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Timing improvements around academic year</span>
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
                  Nottingham City Council operates comprehensive housing services including specific support for energy
                  efficiency improvements. The council has partnered with various organisations to deliver advice and
                  funding for both owner-occupiers and private landlords. They also enforce MEES regulations and manage
                  landlord licensing schemes.
                </p>
              </div>

              <InfoBox title="Nottingham City Council Housing Services">
                <p className="mb-2">
                  The council&apos;s housing team provides energy advice, information about available grants, and guidance
                  on MEES compliance. They also operate the HMO licensing scheme which includes energy efficiency
                  requirements.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary-500" />
                    <a href="https://www.nottinghamcity.gov.uk/housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      nottinghamcity.gov.uk/housing
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary-500" />
                    <span>0115 915 5555 (Council main line)</span>
                  </div>
                </div>
              </InfoBox>

              <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-neutral-800 mb-3">Council Services for Private Landlords</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Energy advice and grant information service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>HMO licensing with energy efficiency conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Selective licensing in designated areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>MEES compliance guidance and enforcement</span>
                  </li>
                </ul>
              </div>

              <WarningBox title="HMO Licensing Requirements">
                <p>
                  Nottingham has mandatory HMO licensing and additional licensing schemes. Licensed HMOs must meet
                  certain conditions which may include energy efficiency standards. If you operate an HMO, ensure
                  your licensing conditions are compatible with your EPC improvement plans.
                </p>
              </WarningBox>
            </section>

            {/* Available Grant Schemes */}
            <section id="grant-schemes" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Available Grant Schemes
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Several grant schemes operate in Nottingham that may benefit landlords. ECO4 remains the primary
                  route for funded improvements, with eligibility often determined by tenant circumstances or property
                  characteristics. The council can provide referrals to appropriate schemes.
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
                        <h3 className="font-semibold text-primary-800 mb-2">ECO4 Scheme</h3>
                        <p className="text-sm text-neutral-700 mb-3">
                          Nottingham participates in ECO4 delivery, with funding available for properties meeting
                          eligibility criteria. Tenants on qualifying benefits or properties in lower Council Tax
                          bands in deprived areas may qualify. Contact the council energy team for referral.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Typical measures:</span> Insulation, heating upgrades, renewables
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
                          Regional grant funding for energy efficiency improvements, administered through the
                          East Midlands Combined Authority area. Eligibility varies by funding round and household
                          circumstances.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Status:</span> Check current availability with council
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
                          National scheme providing grants of up to {formatCurrency(7500)} for heat pumps. Available
                          to landlords replacing fossil fuel heating. Property must have EPC without outstanding
                          loft or cavity wall insulation recommendations.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Grant amount:</span> Up to {formatCurrency(7500)} for ASHP
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <TipBox title="Student Tenants and ECO4">
                <p>
                  Student tenants are generally not eligible for ECO4 funding as they typically do not receive
                  qualifying benefits. However, if your non-student property is in an eligible area and Council
                  Tax band, you may still qualify through the ECO4 flex route. The council can advise on specific
                  eligibility.
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
                  Nottingham benefits from East Midlands pricing, which is typically around the national average.
                  The city has a good supply of qualified installers, though the concentrated nature of improvement
                  work during summer months (when student properties are empty) can create seasonal demand pressures.
                  Planning ahead and booking contractors early is advisable for student rental properties.
                </p>
              </div>

              <CostTable
                title="Nottingham Typical Improvement Costs"
                items={[
                  {
                    improvement: 'Loft Insulation (to 270mm)',
                    lowEstimate: 380,
                    highEstimate: 580,
                    notes: 'East Midlands average pricing. Quick installation.',
                  },
                  {
                    improvement: 'Cavity Wall Insulation',
                    lowEstimate: 480,
                    highEstimate: 950,
                    notes: 'Where cavity walls exist. Common in inter-war suburbs.',
                  },
                  {
                    improvement: 'Internal Wall Insulation',
                    lowEstimate: 7500,
                    highEstimate: 13000,
                    notes: 'For solid wall terraces. Price per typical property.',
                  },
                  {
                    improvement: 'External Wall Insulation',
                    lowEstimate: 10500,
                    highEstimate: 18000,
                    notes: 'May require planning permission in some areas.',
                  },
                  {
                    improvement: 'Double Glazing (full house)',
                    lowEstimate: 3800,
                    highEstimate: 7500,
                    notes: 'Competitive local glazing market.',
                  },
                  {
                    improvement: 'Condensing Boiler Replacement',
                    lowEstimate: 2300,
                    highEstimate: 3600,
                    notes: 'Gas boiler. Heat pumps from £8,000 after BUS grant.',
                  },
                  {
                    improvement: 'Smart Heating Controls',
                    lowEstimate: 180,
                    highEstimate: 360,
                    notes: 'Room-by-room control. Important for HMOs.',
                  },
                  {
                    improvement: 'LED Lighting Throughout',
                    lowEstimate: 90,
                    highEstimate: 180,
                    notes: 'Supply and fit for typical 3-bed property.',
                  },
                ]}
                showTotal={false}
                footerNote="Costs reflect Nottingham and East Midlands market rates as of January 2026. Student property improvements are often scheduled for summer months - book early. Always obtain multiple quotes."
              />

              <InfoBox title="HMO Specific Considerations">
                <p>
                  HMOs often have more complex heating arrangements with multiple circuits or independent systems.
                  EPC assessments for HMOs can vary depending on how the property is assessed. Ensure your assessor
                  has experience with HMOs and discuss the assessment approach before commissioning work.
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
                  Nottingham has a good network of energy efficiency contractors serving both the residential and
                  student rental markets. Many have experience with HMO properties and understand the specific
                  requirements of student accommodation. For any work that may support grant funding or cost cap
                  exemption claims, use TrustMark-registered contractors.
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
                      Nottingham City Council Energy Team
                    </li>
                    <li>
                      Nottingham Energy Partnership
                    </li>
                    <li>
                      East Midlands Landlords Association
                    </li>
                    <li>
                      Citizens Advice Nottingham
                    </li>
                  </ul>
                </div>
              </div>

              <TipBox title="Planning Around the Academic Year">
                <p>
                  For student rental properties, schedule major improvement works for the summer vacation period
                  (late June to early September) when properties are typically empty. Book contractors well in
                  advance as this is a peak period for work in student rental areas. Less disruptive improvements
                  can often be completed during shorter vacation periods.
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
                  Nottingham&apos;s private rental sector divides broadly into student areas, typically closer to the
                  city centre and universities, and family rental areas in the suburbs and outer neighbourhoods.
                  Understanding where your property fits helps identify appropriate improvement strategies and
                  potential funding routes.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Student Rental Areas</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Lenton, Dunkirk, Arboretum, Radford, Hyson Green
                  </p>
                  <p className="text-sm text-neutral-700">
                    Predominantly Victorian terraces, many converted to HMOs. Solid wall construction common.
                    High demand but competitive market rewards efficient properties. Many properties at E or D
                    rating. Internal wall insulation often the main improvement route. Conservation area
                    restrictions in parts of the Arboretum.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Inner Suburbs</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Sherwood, Mapperley, Carlton, West Bridgford
                  </p>
                  <p className="text-sm text-neutral-700">
                    Mix of Victorian, Edwardian, and inter-war properties. Often better starting EPC ratings
                    with more cavity walls. Family rental market with longer tenancies. Typical starting EPC: D.
                    Reaching C often achievable with moderate investment in insulation and heating improvements.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Outer Estates</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Bulwell, Bilborough, Bestwood, Sneinton
                  </p>
                  <p className="text-sm text-neutral-700">
                    Predominantly post-war construction with mix of wall types. Significant ex-council stock.
                    Many properties may have had previous improvements. Higher proportion of tenants may qualify
                    for ECO4. Check existing improvements before planning additional works. Typical starting EPC: D or E.
                  </p>
                </div>
              </div>

              <InfoBox title="University Partnerships">
                <p>
                  Both universities maintain lists of approved landlords and may have requirements around EPC
                  ratings for properties to be advertised through their accommodation services. Meeting or
                  exceeding these requirements can help with marketing to student tenants.
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
                    Nottingham City Council
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Housing Services</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://www.nottinghamcity.gov.uk/housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            nottinghamcity.gov.uk/housing
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          <span>0115 915 5555</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Private Sector Housing</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://www.nottinghamcity.gov.uk/housing/private-rented-housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            Private Rented Housing Team
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          <span>0115 915 2020 (Environmental Health)</span>
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
                Plan Your Nottingham Property Improvements
              </h2>
              <p className="text-primary-700 mb-6">
                Use our calculator to estimate upgrade costs for your Nottingham property. For student rentals,
                plan improvements around the academic year to minimise disruption.
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
                  sourceName="Nottingham City Council"
                  documentTitle="Housing Services"
                  url="https://www.nottinghamcity.gov.uk/housing"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="ECO4 Scheme Guidance"
                  url="https://www.gov.uk/government/publications/energy-company-obligation-eco-scheme"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="Ofgem"
                  documentTitle="Boiler Upgrade Scheme"
                  url="https://www.ofgem.gov.uk/environmental-and-social-schemes/boiler-upgrade-scheme-bus"
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
