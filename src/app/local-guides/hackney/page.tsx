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
  Shield,
  Car,
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
  title: 'Hackney EPC Compliance Guide for Landlords | London Borough | GreenLord',
  description:
    'Complete Hackney landlord guide to EPC compliance. Conservation area considerations, London cost premiums, converted flat challenges, and local authority support.',
  alternates: {
    canonical: 'https://greenlord.co.uk/local-guides/hackney',
  },
  openGraph: {
    title: 'Hackney EPC Compliance Guide | GreenLord',
    description:
      'Local EPC guidance for Hackney landlords. London pricing, conservation areas, converted flats, and council support for rental property improvements.',
    url: `${SITE_CONFIG.url}/local-guides/hackney`,
    type: 'article',
  },
};

export default function HackneyGuidePage() {
  return (
    <>
      <PageHeader
        title="Hackney EPC Compliance Guide"
        subtitle="Local authority support, conservation area guidance, and London cost benchmarks for Hackney landlords preparing for EPC C 2030."
        breadcrumbs={[
          { name: 'Local Guides', url: `${SITE_CONFIG.url}/local-guides` },
          { name: 'Hackney', url: `${SITE_CONFIG.url}/local-guides/hackney` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <article className="max-w-4xl mx-auto">
            <ArticleHeader
              title="Hackney Landlord EPC Guide: Local Support and Costs"
              publishedDate="2026-01-31"
              lastUpdated="2026-01-31"
              author={SITE_CONFIG.author}
              readingTime={9}
              subtitle="Everything Hackney landlords need to know about conservation areas, London costs, and the unique challenges of converted Victorian properties"
            />

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Hackney presents some of the most complex EPC compliance challenges in England. The London borough&apos;s
                housing stock is dominated by Victorian and Georgian properties, many converted into flats and a
                significant proportion located within conservation areas. These factors combine with London&apos;s
                substantially higher installation costs to create a demanding environment for landlords seeking to
                reach EPC C.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Despite these challenges, Hackney Council provides substantial private sector housing support, and
                the borough&apos;s strong rental market means that efficient, well-improved properties command premium
                rents. Understanding the specific constraints and opportunities in Hackney is essential for planning
                cost-effective improvements that achieve compliance while respecting the borough&apos;s architectural
                heritage.
              </p>
            </div>

            <KeyFactBox title="Hackney at a Glance" icon={MapPin}>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Private Rental Properties:</span> Approx. 48,000
                </div>
                <div>
                  <span className="font-medium">Average EPC Rating:</span> D (54 points)
                </div>
                <div>
                  <span className="font-medium">Conservation Areas:</span> 29 designated areas
                </div>
                <div>
                  <span className="font-medium">Cost Premium:</span> +25% above national average
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
                  Hackney&apos;s housing stock tells the story of East London&apos;s development from Victorian times to the
                  present. The borough contains an exceptionally high proportion of converted flats, where large
                  Victorian and Edwardian houses have been divided into multiple units. These conversions create
                  specific EPC assessment challenges, as each flat is assessed separately but shares building
                  elements with other units.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  The prevalence of conservation areas significantly restricts external alterations. In areas like
                  De Beauvoir Town, Clapton, Stoke Newington, and much of the Victorian housing stock, external wall
                  insulation is typically not permitted, and window replacements must match original designs. This
                  channels improvement options toward internal works, which are more expensive and disruptive.
                </p>
              </div>

              <WarningBox title="Conservation Area Restrictions" critical>
                <p className="mb-2">
                  Hackney has 29 conservation areas covering a substantial proportion of the borough&apos;s housing
                  stock. In these areas:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>External wall insulation is generally not permitted</li>
                  <li>Window replacements must match original designs (slim sightlines, correct proportions)</li>
                  <li>Solar panels on front-facing roofs may require planning permission</li>
                  <li>Changes to the front elevation typically need approval</li>
                </ul>
                <p className="mt-2 text-sm font-medium">
                  Always check conservation area status before planning external works.
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
                        <span>Converted Victorian flats (very common throughout borough)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Victorian terraces (some remaining as whole houses)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Georgian townhouses (De Beauvoir, parts of Dalston)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Ex-council estates and social housing stock</span>
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
                        <span>Solid walls with conservation area restrictions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Converted flats with shared building elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>Limited parking affecting scaffolding and access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">-</span>
                        <span>High London labour costs across all trades</span>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </div>

              <InfoBox title="Converted Flat Considerations">
                <div className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <p className="mb-2">
                      Converted flats are assessed as individual units, but share building elements with other flats
                      in the building. This creates complexities:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Loft insulation only benefits the top-floor flat</li>
                      <li>Ground floor insulation only benefits the ground-floor flat</li>
                      <li>External wall insulation requires agreement from all owners</li>
                      <li>Heating improvements are generally within individual flat control</li>
                    </ul>
                  </div>
                </div>
              </InfoBox>
            </section>

            {/* Local Authority Support */}
            <section id="local-authority-support" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Local Authority Support
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Hackney Council has a substantial housing team serving both social housing tenants and the private
                  rented sector. While the council&apos;s primary focus is social housing (Hackney has a large council
                  housing stock), they also provide advice and enforcement services for private landlords. The council
                  is proactive in enforcing MEES regulations and housing standards.
                </p>
              </div>

              <InfoBox title="Hackney Council Housing Services">
                <p className="mb-2">
                  The council&apos;s housing team handles private sector housing enquiries including MEES compliance,
                  HMO licensing, and enforcement. They can provide advice on planning requirements for conservation
                  areas and signpost to available grants.
                </p>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary-500" />
                    <a href="https://hackney.gov.uk/housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      hackney.gov.uk/housing
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary-500" />
                    <span>020 8356 3000 (Council main line)</span>
                  </div>
                </div>
              </InfoBox>

              <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-neutral-800 mb-3">Council Services for Private Landlords</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Private sector housing enforcement and MEES compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>HMO licensing scheme (mandatory and additional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Planning and conservation area guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                    <span>Signposting to grant schemes and support</span>
                  </li>
                </ul>
              </div>

              <TipBox title="Pre-Application Planning Advice">
                <p>
                  For properties in conservation areas, consider seeking pre-application planning advice before
                  committing to improvement works. The council&apos;s planning team can advise on what alterations
                  are likely to be acceptable, potentially saving significant time and money on unsuitable proposals.
                </p>
              </TipBox>
            </section>

            {/* Available Grant Schemes */}
            <section id="grant-schemes" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Available Grant Schemes
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Grant funding in Hackney follows national schemes, though the borough&apos;s relative affluence means
                  fewer properties meet income-based eligibility criteria. However, property-based routes through
                  ECO4 flex may still apply in some areas. The high cost of improvements in London makes accessing
                  any available funding particularly valuable.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <Card variant="outlined">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Landmark className="w-6 h-6 text-primary-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-800 mb-2">ECO4 Scheme</h3>
                        <p className="text-sm text-neutral-700 mb-3">
                          ECO4 funding may be available for properties with tenants on qualifying benefits or through
                          the ECO4 flex route in qualifying areas. Given Hackney&apos;s mixed demographics, some properties
                          may qualify despite the borough&apos;s generally higher income levels. Worth checking eligibility
                          as the potential funding can be substantial.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Note:</span> Fewer properties may qualify than in other areas
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
                          Check with the council whether London-wide or regional Warm Homes funding applies to
                          Hackney. Eligibility and availability varies by funding round. Even where income-based
                          criteria apply, some tenants may qualify.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Status:</span> Check current availability with council
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card variant="highlighted">
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-success-100 rounded-lg">
                        <Thermometer className="w-6 h-6 text-success-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-800 mb-2">Boiler Upgrade Scheme (BUS)</h3>
                        <p className="text-sm text-neutral-700 mb-3">
                          The BUS grant of up to {formatCurrency(7500)} for heat pumps is available regardless of
                          income. For Hackney properties with suitable outdoor space, this can significantly offset
                          the higher London installation costs. Note that heat pumps may require planning permission
                          in conservation areas.
                        </p>
                        <div className="text-sm text-neutral-600">
                          <span className="font-medium">Grant amount:</span> Up to {formatCurrency(7500)} for ASHP
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <WarningBox title="Heat Pumps in Conservation Areas">
                <p>
                  Air source heat pumps require an external unit, which may need planning permission in conservation
                  areas if visible from public spaces. Ground source heat pumps avoid this issue but require
                  significant outdoor space, which is rare in Hackney. Check planning requirements before committing
                  to heat pump installation.
                </p>
              </WarningBox>
            </section>

            {/* Local Cost Benchmarks */}
            <section id="local-costs" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Local Cost Benchmarks
              </h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-neutral-700 leading-relaxed">
                  London installation costs are approximately 25% above the national average, reflecting higher
                  labour costs, parking and access challenges, and the complexity of working in a dense urban
                  environment. Hackney specifically can present additional challenges around parking, scaffolding
                  permits, and conservation area compliance, all of which add to costs.
                </p>
              </div>

              <CostTable
                title="Hackney Typical Improvement Costs (London Pricing)"
                items={[
                  {
                    improvement: 'Loft Insulation (to 270mm)',
                    lowEstimate: 500,
                    highEstimate: 750,
                    notes: 'London premium applies. Only benefits top-floor flats.',
                  },
                  {
                    improvement: 'Cavity Wall Insulation',
                    lowEstimate: 650,
                    highEstimate: 1200,
                    notes: 'Rare in Hackney Victorian stock. Where exists, still costly.',
                  },
                  {
                    improvement: 'Internal Wall Insulation',
                    lowEstimate: 10000,
                    highEstimate: 18000,
                    notes: 'Often only option in conservation areas. Per typical flat.',
                  },
                  {
                    improvement: 'External Wall Insulation',
                    lowEstimate: 15000,
                    highEstimate: 25000,
                    notes: 'Usually not permitted in conservation areas.',
                  },
                  {
                    improvement: 'Secondary Glazing',
                    lowEstimate: 3000,
                    highEstimate: 6000,
                    notes: 'Conservation-area friendly alternative to replacement.',
                  },
                  {
                    improvement: 'Period-Style Double Glazing',
                    lowEstimate: 8000,
                    highEstimate: 15000,
                    notes: 'Slim sightlines, heritage-compliant. May need approval.',
                  },
                  {
                    improvement: 'Condensing Boiler Replacement',
                    lowEstimate: 3000,
                    highEstimate: 4500,
                    notes: 'Gas boiler. London pricing applies.',
                  },
                  {
                    improvement: 'Air Source Heat Pump',
                    lowEstimate: 12000,
                    highEstimate: 18000,
                    notes: 'Before BUS grant. May need planning permission.',
                  },
                  {
                    improvement: 'Smart Heating Controls',
                    lowEstimate: 250,
                    highEstimate: 450,
                    notes: 'Essential for efficient heating management.',
                  },
                ]}
                showTotal={false}
                footerNote="Costs reflect Hackney and London market rates as of January 2026, approximately 25% above national averages. Conservation area works may require specialist contractors. Always obtain multiple quotes."
              />

              <InfoBox title="Access and Parking Challenges">
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <p>
                      Limited parking in Hackney can affect improvement costs. Scaffolding may require a parking
                      suspension permit from the council. Contractors working in controlled parking zones need
                      permits. Factor these additional costs and logistics into your planning.
                    </p>
                  </div>
                </div>
              </InfoBox>
            </section>

            {/* Local Contractors & Resources */}
            <section id="contractors" className="mt-12">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Local Contractors and Resources
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  London has a large pool of energy efficiency contractors, but quality varies significantly.
                  For work in conservation areas, seek contractors with specific heritage experience. TrustMark
                  registration is essential for any work that may be used toward grant funding or cost cap
                  exemption evidence. Given the complexity of many Hackney properties, experienced contractors
                  are worth the premium they may charge.
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
                      <a href="https://historicengland.org.uk/services-skills/training-skills/heritageskills-cpd/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                        Historic England - Heritage skills register
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
                      Hackney Council Private Sector Housing
                    </li>
                    <li>
                      London Landlord Accreditation Scheme
                    </li>
                    <li>
                      Hackney Conservation Officers (for planning advice)
                    </li>
                    <li>
                      Citizens Advice Hackney
                    </li>
                  </ul>
                </div>
              </div>

              <TipBox title="Heritage Specialists for Conservation Areas">
                <p>
                  For properties in conservation areas, consider engaging contractors who specialise in heritage
                  buildings. They will understand both the technical requirements of working with older buildings
                  and the planning constraints that apply. Organisations like the Society for the Protection of
                  Ancient Buildings (SPAB) maintain lists of suitable contractors.
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
                  Hackney&apos;s private rental sector is concentrated in specific areas, with property types and
                  conservation constraints varying significantly across the borough. Understanding your property&apos;s
                  location and any applicable restrictions is essential for planning improvements.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Conservation Area Heartlands</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    De Beauvoir Town, Stoke Newington, Clapton, Dalston (parts)
                  </p>
                  <p className="text-sm text-neutral-700">
                    Predominantly Victorian and Georgian properties, many converted to flats. Strict conservation
                    restrictions limit external works. Internal wall insulation and secondary glazing are typically
                    the main improvement routes. Heritage-compliant windows are possible but expensive. Typical
                    starting EPC: E or F. Reaching C is challenging and expensive.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Mixed Victorian Areas</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Homerton, Hackney Central, Lower Clapton, parts of Dalston
                  </p>
                  <p className="text-sm text-neutral-700">
                    Victorian terraces and conversions, some outside conservation areas. More flexibility for
                    external works where not restricted. Mix of whole houses and converted flats. Check specific
                    conservation area boundaries. Typical starting EPC: E or D. Improvements more achievable
                    where external works are possible.
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800 mb-2">Estate and Post-War Stock</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Woodberry Down, various estates across borough
                  </p>
                  <p className="text-sm text-neutral-700">
                    Mix of social housing (council and housing association) and right-to-buy properties now
                    in the private sector. Construction types vary. Some blocks have had estate-wide improvement
                    programmes. Individual flat owners may have limited options without block-wide agreement.
                    Typical starting EPC: D or E.
                  </p>
                </div>
              </div>

              <InfoBox title="Freeholder and Leaseholder Considerations">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <p>
                      Many Hackney rental properties are leasehold flats. If you are a leaseholder landlord,
                      check what alterations your lease permits and whether freeholder consent is needed.
                      External works typically require freeholder agreement, and major works may need agreement
                      from all leaseholders in the building.
                    </p>
                  </div>
                </div>
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
                    Hackney Council
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Housing Services</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://hackney.gov.uk/housing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            hackney.gov.uk/housing
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary-500" />
                          <span>020 8356 3000</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Planning and Conservation</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://hackney.gov.uk/planning" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            Planning Services
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-500" />
                          <a href="https://hackney.gov.uk/conservation-areas" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                            Conservation Areas Map
                          </a>
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
                Plan Your Hackney Property Improvements
              </h2>
              <p className="text-primary-700 mb-6">
                Use our calculator to estimate upgrade costs for your Hackney property. Remember to factor in
                London pricing and any conservation area constraints when planning your improvements.
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
                  sourceName="Hackney Council"
                  documentTitle="Housing Services"
                  url="https://hackney.gov.uk/housing"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="Hackney Council"
                  documentTitle="Conservation Areas"
                  url="https://hackney.gov.uk/conservation-areas"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="Historic England"
                  documentTitle="Energy Efficiency and Historic Buildings"
                  url="https://historicengland.org.uk/advice/technical-advice/energy-efficiency-and-historic-buildings/"
                  accessedDate="January 2026"
                />
                <SourceCitation
                  sourceName="GOV.UK"
                  documentTitle="ECO4 Scheme Guidance"
                  url="https://www.gov.uk/government/publications/energy-company-obligation-eco-scheme"
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
