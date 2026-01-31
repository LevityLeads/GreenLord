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
  title: 'Sheffield EPC Compliance Guide for Landlords | Local Support & Costs | GreenLord',
  description:
    'Complete Sheffield landlord guide to EPC compliance. Local authority support, ECO4 schemes, regional cost benchmarks, and property-specific advice for Sheffield rental properties.',
  openGraph: {
    title: 'Sheffield EPC Compliance Guide | GreenLord',
    description:
      'Local EPC guidance for Sheffield landlords. Council support, grant schemes, and regional cost estimates for rental property improvements.',
    url: `${SITE_CONFIG.url}/local-guides/sheffield`,
    type: 'article',
  },
};

export default function SheffieldGuidePage() {
  return (
    <>
      <PageHeader
        title="Sheffield EPC Compliance Guide"
        subtitle="Local authority support, grant schemes, and cost benchmarks for Sheffield landlords preparing for EPC C 2030."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
          { name: 'Sheffield', url: `${SITE_CONFIG.url}/local-guides/sheffield` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <article className="max-w-4xl mx-auto">
            <ArticleHeader
              title="Sheffield Landlord EPC Guide: Local Support and Costs"
              publishedDate="2026-01-31"
              lastUpdated="2026-01-31"
              author={SITE_CONFIG.author}
              readingTime={8}
              subtitle="Everything Sheffield landlords need to know about local EPC support, available grants, and realistic improvement costs"
            />

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Sheffield presents unique challenges and opportunities for landlords seeking to improve their properties&apos;
                energy efficiency. As South Yorkshire&apos;s largest city with a rich industrial heritage, the housing stock
                reflects over 150 years of development, from Victorian stone-built terraces near the city centre to
                inter-war council estates and post-war developments in the suburbs.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                The city&apos;s topography, with its famous seven hills, creates microclimates that affect heating demands.
                Properties on higher ground in areas like Crosspool and Fulwood often experience harsher winters than those
                in the lower Don Valley. Understanding these local factors is essential for planning cost-effective
                improvements that achieve genuine energy savings, not just better EPC scores.
              </p>
            </div>

            <KeyFactBox title="Sheffield at a Glance" icon={MapPin}>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Private Rental Properties:</span> Approx. 45,000
                </div>
                <div>
                  <span className="font-medium">Average EPC Rating:</span> D (58 points)
                </div>
                <div>
                  <span className="font-medium">Properties Below EPC C:</span> Estimated 65%
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
                  Sheffield&apos;s housing stock is notably diverse, but several property types dominate the private rental
                  sector. The legacy of the steel industry means many properties were built to house workers in the late
                  Victorian and Edwardian periods, particularly in areas like Sharrow, Nether Edge, Heeley, and Walkley.
                  These stone-built terraces present specific challenges for energy improvement.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Unlike the brick terraces common in other northern cities, Sheffield&apos;s stone construction offers
                  excellent durability but poor thermal performance. Stone walls have higher thermal mass, which can be
                  beneficial in some circumstances, but their U-values are typically even worse than solid brick. This
                  makes insulation particularly important but also more complex to install correctly.
                </p>
              </div>

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
                        <span>Stone-built Victorian terraces (Sharrow, Nether Edge, Walkley)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>1930s semi-detached with cavity walls (Hillsborough, Ecclesall)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Post-war council stock (Manor, Arbourthorne, Gleadless)</span>
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
                        <span>Solid stone walls with very poor U-values (2.3+ W/m²K)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>High exposure to wind and rain on hillside locations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Conservation areas limiting external works (Nether Edge, Broomhill)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Older gas infrastructure in some areas</span>
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
                  Sheffield City Council operates several programmes to support energy efficiency improvements across the
                  city. The council has been proactive in securing ECO4 funding and works with local installers to deliver
                  improvements to qualifying households. While many schemes primarily target owner-occupiers and social
                  housing, private landlords can access support in certain circumstances.
                </p>
              </div>

              <InfoBox title="Sheffield City Council Housing Services">
                <p className="mb-2">
                  The council&apos;s Housing Service provides advice on energy efficiency and can signpost landlords to
                  available support schemes. They also enforce MEES regulations and provide guidance on compliance.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary-500" />
                    <a href="https://www.sheffield.gov.uk/housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      sheffield.gov.uk/housing
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary-500" />
                    <span>0114 273 4567 (Housing Services)</span>
                  </div>
                </div>
              </InfoBox>

              <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-neutral-800 mb-3">Council Services for Private Landlords</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Free energy advice and signposting to grant schemes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>MEES compliance guidance and enforcement enquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>HMO licensing with energy efficiency requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Planning guidance for conservation areas</span>
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
                  Several grant schemes operate in Sheffield that may benefit landlords, either directly or by improving
                  the energy efficiency of properties before purchase. Understanding which schemes apply to your situation
                  can significantly reduce improvement costs.
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
                          Sheffield City Council actively participates in ECO4, working with energy suppliers to deliver
                          funded improvements. Private landlords may qualify if their tenants receive qualifying benefits
                          or if the property is in a lower Council Tax band (A-D) in a deprived area.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Typical measures funded:</span> Insulation, heating upgrades, solar panels
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
                          Administered by South Yorkshire Mayoral Combined Authority, this scheme provides grants for
                          energy efficiency improvements. Check current eligibility criteria as the scheme evolves.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Status:</span> Active in South Yorkshire region
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
                          National scheme providing grants of up to {formatCurrency(7500)} for heat pumps. Available to
                          landlords replacing fossil fuel heating systems. The property must have an EPC with no outstanding
                          recommendations for loft or cavity wall insulation.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Grant amount:</span> Up to {formatCurrency(7500)} for air source heat pump
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <TipBox title="Combining Grant Funding">
                <p>
                  You cannot usually combine ECO4 funding with the Boiler Upgrade Scheme for the same measure, but you
                  may be able to use ECO4 for insulation and BUS for a heat pump. Check current rules and get advice
                  before committing to ensure you maximise available funding.
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
                  Sheffield benefits from competitive pricing typical of the Northern region, with costs generally 5-10%
                  below national averages. The city has a good supply of qualified installers, though demand for energy
                  efficiency work is increasing as the 2030 deadline approaches. The stone construction common in Sheffield
                  can add complexity and cost to some insulation works.
                </p>
              </div>

              <CostTable
                title="Sheffield Typical Improvement Costs"
                items={[
                  {
                    improvement: 'Loft Insulation (to 270mm)',
                    lowEstimate: 350,
                    highEstimate: 550,
                    notes: 'Northern region pricing. Stone construction may need specialist work.',
                  },
                  {
                    improvement: 'Cavity Wall Insulation',
                    lowEstimate: 450,
                    highEstimate: 900,
                    notes: 'Where cavity walls exist (typically 1930s+ properties).',
                  },
                  {
                    improvement: 'Internal Wall Insulation',
                    lowEstimate: 7000,
                    highEstimate: 12000,
                    notes: 'Common for stone-built terraces. Price per typical terrace.',
                  },
                  {
                    improvement: 'External Wall Insulation',
                    lowEstimate: 10000,
                    highEstimate: 18000,
                    notes: 'May require planning permission in conservation areas.',
                  },
                  {
                    improvement: 'Double Glazing (full house)',
                    lowEstimate: 3500,
                    highEstimate: 7000,
                    notes: 'Secondary glazing alternative for conservation areas.',
                  },
                  {
                    improvement: 'Condensing Boiler Replacement',
                    lowEstimate: 2200,
                    highEstimate: 3500,
                    notes: 'Gas boiler. Heat pumps from £8,000 after BUS grant.',
                  },
                  {
                    improvement: 'Smart Heating Controls',
                    lowEstimate: 180,
                    highEstimate: 350,
                    notes: 'Room-by-room control with TRVs.',
                  },
                  {
                    improvement: 'LED Lighting Throughout',
                    lowEstimate: 80,
                    highEstimate: 180,
                    notes: 'Supply and fit for typical 3-bed property.',
                  },
                ]}
                showTotal={false}
                footerNote="Costs reflect Sheffield and South Yorkshire market rates as of January 2026. Actual costs vary by property condition, access, and specification. Always obtain at least three quotes."
              />

              <WarningBox title="Stone-Built Properties">
                <p>
                  Sheffield&apos;s stone-built terraces require specialist assessment before internal wall insulation is
                  installed. The thermal properties of stone differ from brick, and moisture management is critical.
                  Using inexperienced installers can lead to condensation and damp problems. Always use PAS 2030
                  certified installers with specific experience of solid stone walls.
                </p>
              </WarningBox>
            </section>

            {/* Local Contractors & Resources */}
            <section id="contractors" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Local Contractors and Resources
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Sheffield has a good network of energy efficiency contractors and assessors. When selecting contractors,
                  prioritise those with TrustMark registration and PAS 2030 certification for any work that may be used
                  toward grant funding or cost cap exemption evidence.
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
                      Sheffield City Council Housing Services
                    </li>
                    <li>
                      South Yorkshire Energy Centre
                    </li>
                    <li>
                      Sheffield Landlords Association
                    </li>
                    <li>
                      Citizens Advice Sheffield (tenant support)
                    </li>
                  </ul>
                </div>
              </div>

              <TipBox title="Get Multiple Quotes">
                <p>
                  Sheffield has healthy competition among energy efficiency installers. Always get at least three quotes
                  for major works, and ask specifically about experience with your property type. For stone-built
                  properties, ask for references from similar completed projects.
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
                  Sheffield&apos;s private rental sector concentrates in several distinct areas, each with characteristic
                  property types. Understanding your property&apos;s context helps identify the most cost-effective improvement
                  strategies and anticipate any planning constraints.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Inner City and Student Areas</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Broomhill, Crookesmoor, Sharrow, Hunters Bar
                  </p>
                  <p className="text-sm text-neutral-700">
                    Predominantly Victorian and Edwardian terraces, many with stone construction. High proportion of HMOs
                    serving student market. Several conservation areas restrict external alterations. Typical starting
                    EPC: E or F. Internal wall insulation usually the main improvement route.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Suburban Family Rentals</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Hillsborough, Ecclesall, Woodseats, Crosspool
                  </p>
                  <p className="text-sm text-neutral-700">
                    Mix of 1930s semis with cavity walls and post-war properties. Generally better starting points for
                    EPC improvement. Cavity wall insulation often possible and cost-effective. Typical starting EPC: D.
                    Reaching C often achievable with moderate investment.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Ex-Council Stock</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Manor, Arbourthorne, Gleadless Valley, Southey
                  </p>
                  <p className="text-sm text-neutral-700">
                    Post-war construction with varying wall types. Some properties already improved under previous
                    schemes. High proportion of tenants may qualify for ECO4 funding. Check existing improvements
                    before planning works. Typical starting EPC: D or E.
                  </p>
                </div>
              </div>

              <InfoBox title="Steel Industry Legacy">
                <p>
                  Many of Sheffield&apos;s older properties were built to house steel workers and their families. The
                  construction quality is generally good, with stone walls designed to last. However, energy efficiency
                  was not a consideration, and these properties often have the furthest to travel to reach EPC C.
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
                    Sheffield City Council
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Housing Services</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://www.sheffield.gov.uk/housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            sheffield.gov.uk/housing
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          <span>0114 273 4567</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Private Sector Housing</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://www.sheffield.gov.uk/housing/private-rented-sector" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            Private Sector Housing Team
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          <span>0114 273 4680</span>
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
                Plan Your Sheffield Property Improvements
              </h2>
              <p className="text-primary-700 mb-6">
                Use our calculator to estimate upgrade costs for your Sheffield property, taking into account local
                pricing and your specific property type.
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
                  sourceName="Sheffield City Council"
                  documentTitle="Housing Services"
                  url="https://www.sheffield.gov.uk/housing"
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
