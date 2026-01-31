import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Home,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Thermometer,
  Lightbulb,
  Calendar,
  Building,
  Users,
  FileText,
  Scale,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { EPCRatingBadge, EPCRatingScale } from '@/components/ui/EPCRatingBadge';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { WarningBox } from '@/components/content/WarningBox';
import { TipBox } from '@/components/content/TipBox';
import { InfoBox } from '@/components/content/InfoBox';
import { CostTable } from '@/components/content/CostTable';
import { ComparisonTable } from '@/components/content/ComparisonTable';
import { ImagePlaceholder } from '@/components/content/ImagePlaceholder';
import { TableOfContents } from '@/components/content/TableOfContents';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { SourceCitation } from '@/components/content/SourceCitation';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Converted Flat EPC Guide | Leasehold Property Upgrades | GreenLord',
  description:
    'Complete guide to improving EPC ratings in converted flats. Covers leasehold restrictions, freeholder consent, communal areas, and creative solutions for reaching EPC C.',
  openGraph: {
    title: 'Converted Flat EPC Guide | GreenLord',
    description:
      'Expert guidance for improving EPC ratings in converted flats. Leasehold considerations, shared building challenges, and practical upgrade pathways.',
    url: `${SITE_CONFIG.url}/property-types/converted-flat`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'characteristics', text: 'Property Characteristics', level: 2 as const },
  { id: 'challenges', text: 'Common EPC Challenges', level: 2 as const },
  { id: 'upgrades', text: 'Recommended Upgrades', level: 2 as const },
  { id: 'upgrade-priority', text: 'Priority Order', level: 3 as const },
  { id: 'costs', text: 'Cost Estimates', level: 2 as const },
  { id: 'special-considerations', text: 'Special Considerations', level: 2 as const },
  { id: 'freeholder-consent', text: 'Freeholder Consent', level: 3 as const },
  { id: 'leaseholder-agreements', text: 'Multiple Leaseholder Issues', level: 3 as const },
  { id: 'building-regulations', text: 'Building Regulations', level: 3 as const },
  { id: 'creative-solutions', text: 'Creative Solutions', level: 2 as const },
  { id: 'example-pathway', text: 'Example Upgrade Pathway', level: 2 as const },
  { id: 'next-steps', text: 'Next Steps', level: 2 as const },
];

export default function ConvertedFlatPage() {
  return (
    <>
      <PageHeader
        title="Converted Flat EPC Guide"
        subtitle="A comprehensive guide to improving EPC ratings in converted flats, addressing leasehold complexities and shared building challenges."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
          { name: 'Converted Flat', url: `${SITE_CONFIG.url}/property-types/converted-flat` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="Converted Flat EPC Upgrade Guide"
                publishedDate="2026-01-15"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={14}
                subtitle="Everything landlords need to know about bringing converted flats up to EPC C standard"
              />

              {/* Hero Image */}
              <ImagePlaceholder
                alt="Converted Victorian house showing multiple flat entrances"
                description="A photograph of a typical converted house in the UK, showing a large Victorian or Edwardian property that has been divided into multiple flats. The image should show multiple doorbells or letter boxes, indicating the conversion, while maintaining the original architectural character."
                width={800}
                height={450}
                priority
                instructions={[
                  'Show a genuine UK converted property, typically Victorian/Edwardian',
                  'Multiple doorbells or entry points visible to indicate conversion',
                  'Maintain architectural character of original building',
                  'Daylight conditions, showing the full facade',
                  'Avoid showing specific flat numbers or identifiable information',
                ]}
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Converted flats, where a larger house has been divided into multiple separate
                  dwellings, present unique challenges for EPC improvements. Unlike purpose-built
                  flats, converted properties often retain the original building fabric while
                  adding complexity through leasehold arrangements and shared building elements.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Each flat requires its own individual EPC, but the ability to make improvements
                  is often limited by what you can change within your demise. Shared walls, roofs,
                  and communal areas may be outside your control, requiring freeholder consent
                  or agreement from other leaseholders for building-wide improvements.
                </p>
              </div>

              <KeyFactBox title="Typical Converted Flat EPC Profile" icon={Thermometer}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm">Starting Rating:</span>
                  <EPCRatingBadge rating="D" size="md" showScoreRange />
                  <span className="text-sm mx-2">or</span>
                  <EPCRatingBadge rating="E" size="md" showScoreRange />
                </div>
                <p className="text-sm">
                  Most converted flats score between 40-58 EPC points (rating D or E), though
                  this varies significantly based on the age of the original building and
                  the quality of the conversion. The target for compliance is 69 points (rating C).
                </p>
              </KeyFactBox>

              {/* Property Characteristics */}
              <section id="characteristics" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Property Characteristics
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Converted flats inherit the construction characteristics of the original
                    building, which is typically Victorian, Edwardian, or inter-war. The
                    conversion process adds its own complexities, with varying quality of
                    works and different ownership structures.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary-600" />
                        Original Building Fabric
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Usually Victorian/Edwardian solid brick walls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Or inter-war cavity wall construction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Original single-glazed sash or casement windows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Solid floors at ground level, suspended timber above</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Conversion Features
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Subdivided rooms creating smaller units</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Individual heating systems per flat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Shared entrance, hallways, and stairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Party walls between flats (often uninsulated)</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary-600" />
                        Leasehold Structure
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Individual leases for each flat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Freeholder owns building structure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Demise typically excludes external walls and roof</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Service charges for communal maintenance</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary-600" />
                        Shared Elements
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>External walls (usually freeholder responsibility)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Roof (affects top floor flats significantly)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Windows (may be defined in lease)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Communal heating (if applicable)</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <ImagePlaceholder
                  alt="Cross-section diagram showing a converted house with multiple flats"
                  description="A technical illustration showing a cross-section of a typical converted house, clearly showing how the building is divided into separate flats across multiple floors. Should indicate shared elements (walls, roof) versus individual flat spaces."
                  width={800}
                  height={400}
                  instructions={[
                    'Show a cross-section of a 3-4 storey converted house',
                    'Clearly delineate individual flat boundaries',
                    'Label shared elements: external walls, roof, communal stairs',
                    'Show typical flat layouts on different floors',
                    'Indicate where EPC boundaries apply for each flat',
                  ]}
                  className="mt-8"
                />
              </section>

              {/* Common EPC Challenges */}
              <section id="challenges" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Common EPC Challenges
                </h2>

                <WarningBox title="Complex Ownership Limits Your Options" critical>
                  <p className="mb-2">
                    The fundamental challenge with converted flats is that many of the most
                    effective EPC improvements require works to elements outside your control:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>External wall insulation requires freeholder consent</li>
                    <li>Window replacement may need planning and lease consent</li>
                    <li>Roof insulation benefits the top flat but is a communal cost</li>
                    <li>Building-wide improvements need all leaseholder agreement</li>
                  </ul>
                </WarningBox>

                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      1. Limited Control Over Building Fabric
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Your lease likely defines your demise as the internal surfaces only.
                      The structure, including external walls, windows, and roof, typically
                      remains the freeholder's responsibility. You cannot unilaterally insulate
                      or alter these elements.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      2. Party Wall Constraints
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Walls shared with neighbouring flats are party walls. Adding insulation
                      to party walls may require Party Wall Act notices and consent from
                      affected neighbours. The cost-benefit is often poor as these walls
                      separate heated spaces.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      3. Individual EPC, Shared Building
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Your flat has its own EPC, but its rating is significantly affected by
                      elements you cannot control. A ground floor flat loses heat through the
                      floor, a top floor flat through the roof, and middle flats may benefit
                      from neighbours' heating.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      4. Conservation Area and Listed Building Issues
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Many converted properties are in conservation areas or are listed
                      buildings, adding planning restrictions to the ownership complications.
                      Changes to windows or external appearance may be refused regardless
                      of freeholder consent.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      5. Cost Sharing Disputes
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Building-wide improvements like external wall insulation benefit all
                      flats but the cost is typically shared via service charges. Getting
                      agreement from all leaseholders and the freeholder can be extremely
                      difficult, especially for discretionary improvements.
                    </p>
                  </div>
                </div>
              </section>

              {/* Recommended Upgrades */}
              <section id="upgrades" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Recommended Upgrades
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed">
                    For converted flats, focus on improvements within your demise that do not
                    require freeholder consent. Where consent is needed, factor in the time
                    and potential cost of obtaining it.
                  </p>
                </div>

                <section id="upgrade-priority" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Priority Order for Maximum Impact
                  </h3>

                  <CostTable
                    title="Converted Flat Upgrade Costs and EPC Impact"
                    items={[
                      {
                        improvement: 'Condensing Boiler (if own system)',
                        lowEstimate: 2500,
                        highEstimate: 4000,
                        notes: 'Within demise, no consent needed. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Smart Heating Controls + TRVs',
                        lowEstimate: 200,
                        highEstimate: 450,
                        notes: 'Within demise. 2-4 EPC points.',
                      },
                      {
                        improvement: 'Secondary Glazing',
                        lowEstimate: 150,
                        highEstimate: 350,
                        notes: 'Per window. Usually no consent needed. 3-6 EPC points total.',
                      },
                      {
                        improvement: 'Internal Wall Insulation (external walls)',
                        lowEstimate: 4000,
                        highEstimate: 8000,
                        notes: 'Within demise, but reduces room size. 8-12 EPC points.',
                      },
                      {
                        improvement: 'LED Lighting Throughout',
                        lowEstimate: 80,
                        highEstimate: 150,
                        notes: 'Simple upgrade. 1-2 EPC points.',
                      },
                      {
                        improvement: 'Draught Proofing',
                        lowEstimate: 100,
                        highEstimate: 250,
                        notes: 'Windows, doors. 1-3 EPC points.',
                      },
                      {
                        improvement: 'Double Glazing (if consent obtained)',
                        lowEstimate: 2500,
                        highEstimate: 5000,
                        notes: 'Requires consent. 5-8 EPC points.',
                      },
                      {
                        improvement: 'Underfloor Insulation (ground floor)',
                        lowEstimate: 1000,
                        highEstimate: 2500,
                        notes: 'Ground floor flats only. 3-5 EPC points.',
                      },
                    ]}
                    showTotal
                    footerNote="Costs vary significantly by flat size and what consents are obtainable. Secondary glazing and internal insulation can be installed without freeholder consent in most cases."
                  />

                  <TipBox title="Focus on What You Control">
                    <p className="mb-2">
                      The most reliable improvements for converted flats are those entirely
                      within your demise:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Boiler and heating system upgrades</li>
                      <li>Secondary glazing (internal, so usually permitted)</li>
                      <li>Internal wall insulation (loses room space but needs no consent)</li>
                      <li>LED lighting and draught proofing</li>
                      <li>Smart heating controls and TRVs</li>
                    </ul>
                  </TipBox>
                </section>
              </section>

              {/* Cost Estimates */}
              <section id="costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Cost Estimates</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    The cost to reach EPC C in a converted flat varies enormously depending
                    on starting point, what consents are obtainable, and which improvements
                    are feasible within your specific circumstances.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Within-Demise Only</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(4000)} - {formatCurrency(8000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Improvements not requiring consent: boiler, heating controls,
                        secondary glazing, internal insulation if affordable.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">With Consents Obtained</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(8000)} - {formatCurrency(15000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        If freeholder agrees to window replacement and/or external
                        insulation is possible.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Cost Cap Threshold</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(KEY_DATES.costCap)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Many converted flats will be unable to reach C due to consent
                        issues, making exemption likely.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="Consent Exemption May Apply">
                  <p>
                    If you cannot obtain necessary consents from your freeholder or other
                    leaseholders for improvements that would enable EPC C, you may qualify
                    for a consent exemption. Keep records of all consent requests and any
                    refusals or non-responses.
                  </p>
                </InfoBox>
              </section>

              {/* Special Considerations */}
              <section id="special-considerations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Special Considerations
                </h2>

                <section id="freeholder-consent" className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Freeholder Consent
                  </h3>
                  <WarningBox title="Always Check Your Lease First">
                    <p className="mb-2">
                      Before planning any improvements, carefully review your lease to
                      understand:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Exactly what is included in your demise</li>
                      <li>What alterations require landlord consent</li>
                      <li>Whether consent can be unreasonably withheld</li>
                      <li>Any restrictions on external appearance changes</li>
                      <li>Service charge provisions for building works</li>
                    </ul>
                  </WarningBox>

                  <div className="mt-4 prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      For improvements requiring freeholder consent:
                    </p>
                    <ul className="text-neutral-700">
                      <li>Make requests in writing with full specifications</li>
                      <li>Allow reasonable time for response (typically 28 days)</li>
                      <li>If refused, request written reasons</li>
                      <li>Keep copies of all correspondence</li>
                      <li>Consider mediation if consent is unreasonably withheld</li>
                    </ul>
                    <p className="text-neutral-700">
                      Under the Landlord and Tenant Act 1927, consent for improvements
                      cannot be unreasonably withheld in most cases, but this may not
                      apply to all lease types.
                    </p>
                  </div>
                </section>

                <section id="leaseholder-agreements" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Multiple Leaseholder Issues
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      Building-wide improvements like external wall insulation or roof
                      insulation typically require agreement from all leaseholders as
                      costs are shared through service charges. Common challenges include:
                    </p>
                    <ul className="text-neutral-700">
                      <li>
                        <strong>Different priorities</strong> - owner-occupiers may want
                        improvements that landlords resist due to cost
                      </li>
                      <li>
                        <strong>Unequal benefit</strong> - roof insulation mainly benefits
                        top floor flats but costs are shared
                      </li>
                      <li>
                        <strong>Absent freeholders</strong> - some are difficult to trace
                        or unresponsive
                      </li>
                      <li>
                        <strong>Lease variations</strong> - may be needed for major works
                      </li>
                    </ul>
                  </div>

                  <TipBox title="Resident Management Companies">
                    <p>
                      If your building has a Resident Management Company (RMC) or the
                      leaseholders have exercised the Right to Manage, collective decisions
                      on improvements may be easier. Consider whether pursuing collective
                      enfranchisement or Right to Manage could help unlock building-wide
                      energy improvements.
                    </p>
                  </TipBox>
                </section>

                <section id="building-regulations" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Building Regulations
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-700">
                      Even improvements within your demise may require Building Regulations
                      approval:
                    </p>
                    <ul className="text-neutral-700">
                      <li>
                        <strong>Window replacement</strong> - must meet thermal and safety
                        standards (Part L and K)
                      </li>
                      <li>
                        <strong>Heating system changes</strong> - boiler installation
                        requires notification
                      </li>
                      <li>
                        <strong>Internal wall insulation</strong> - may affect fire
                        compartmentation (Part B)
                      </li>
                      <li>
                        <strong>Electrical work</strong> - Part P requirements for
                        kitchens and bathrooms
                      </li>
                    </ul>
                    <p className="text-neutral-700">
                      Use registered installers who can self-certify their work, or
                      apply for Building Control approval before starting.
                    </p>
                  </div>
                </section>
              </section>

              {/* Creative Solutions */}
              <section id="creative-solutions" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Creative Solutions
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Given the constraints of converted flats, creative approaches are often
                    needed to maximise EPC improvements within the limits of what is possible.
                  </p>
                </div>

                <ComparisonTable
                  title="Alternative Solutions for Converted Flats"
                  featureLabels={{
                    cost: 'Typical Cost',
                    consent: 'Consent Required',
                    epcImpact: 'EPC Impact',
                    disruption: 'Disruption',
                    bestFor: 'Best For',
                  }}
                  options={[
                    {
                      name: 'Secondary Glazing',
                      recommended: true,
                      features: {
                        cost: '150-350 per window',
                        consent: 'Usually not required',
                        epcImpact: '3-6 points total',
                        disruption: 'Minimal',
                        bestFor: 'Conservation areas, listed buildings',
                      },
                    },
                    {
                      name: 'Internal Wall Insulation',
                      features: {
                        cost: '80-120 per m2',
                        consent: 'Usually not required',
                        epcImpact: '8-12 points',
                        disruption: 'High (room by room)',
                        bestFor: 'Solid wall buildings where external not possible',
                      },
                    },
                    {
                      name: 'Infrared Heating Panels',
                      features: {
                        cost: '300-600 per panel',
                        consent: 'Not required',
                        epcImpact: 'Variable',
                        disruption: 'Low',
                        bestFor: 'Flats without gas supply',
                      },
                    },
                  ]}
                  footerNote="Secondary glazing is often the most practical solution for converted flats, combining good EPC improvement with minimal disruption and consent requirements."
                />

                <div className="mt-8 space-y-4">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-primary-600" />
                        Secondary Glazing
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Installing secondary glazing on the inside of existing windows
                        typically does not require freeholder consent as it does not alter
                        the external appearance. Modern slimline units can achieve U-values
                        approaching double glazing while preserving original windows. This
                        is particularly valuable in conservation areas where window
                        replacement is restricted.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-primary-600" />
                        Partial Internal Wall Insulation
                      </h3>
                      <p className="text-sm text-neutral-600">
                        If full internal wall insulation is too expensive or disruptive,
                        consider insulating only the coldest walls (typically north-facing
                        or the most exposed). This delivers much of the benefit at reduced
                        cost, particularly if combined with targeted heating improvements.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-primary-600" />
                        Heating System Optimisation
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Even if you cannot improve the building fabric, optimising the
                        heating system can yield EPC points. A new condensing boiler,
                        smart controls, TRVs on all radiators, and proper system balancing
                        can add 8-12 points without any consent requirements.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="Document Your Constraints">
                  <p>
                    Keep detailed records of what improvements you have attempted and why
                    they were not possible (refused consent, planning restrictions, cost
                    prohibitive, etc.). This documentation will be essential if you need
                    to apply for an exemption from the EPC C requirement.
                  </p>
                </InfoBox>
              </section>

              {/* Example Upgrade Pathway */}
              <section id="example-pathway" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Example Upgrade Pathway
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Here is a realistic example of how a 2-bedroom converted flat in a
                    Victorian building might approach EPC improvements:
                  </p>
                </div>

                <Card variant="outlined" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4">
                      Case Study: 2-Bed First Floor Flat, Victorian Conversion, Bristol
                    </h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Starting</p>
                        <EPCRatingBadge rating="E" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">46 points</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Target</p>
                        <EPCRatingBadge rating="C" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">69 points</p>
                      </div>
                      <div className="text-sm text-neutral-600 ml-4">
                        <strong>23 points needed</strong>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>New A-rated condensing combi boiler</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+8 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(3200)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Secondary glazing on all 6 windows</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+5 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(1800)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Smart thermostat with TRVs</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+3 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(380)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Internal wall insulation (north wall only)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+6 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(2800)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>LED lighting throughout</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(100)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Draught proofing all windows and doors</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(180)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t-2 border-primary-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-primary-800">Final Result:</span>
                          <span className="ml-2 text-success-700 font-medium">72 points (Rating C)</span>
                        </div>
                        <div>
                          <span className="font-bold text-primary-800">Total Cost:</span>
                          <span className="ml-2 text-primary-700 font-medium">{formatCurrency(8460)}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <TipBox title="No Freeholder Consent Required">
                  <p>
                    Importantly, this case study achieved EPC C without requiring any
                    freeholder consent. All improvements were within the demise or did not
                    alter the external appearance of the building. This approach prioritises
                    certainty and control over potentially cheaper options that may be refused.
                  </p>
                </TipBox>

                <ImagePlaceholder
                  alt="EPC certificate comparison showing improvement from E to C"
                  description="A side-by-side comparison showing two EPC certificates - the original E-rated certificate on the left and the improved C-rated certificate on the right. The comparison should highlight the score improvement from 46 to 72 points."
                  width={800}
                  height={350}
                  instructions={[
                    'Show the official EPC certificate format',
                    'Left side: E rating, 46 points, orange/red energy bar',
                    'Right side: C rating, 72 points, green energy bar',
                    'Highlight the improvement visually',
                    'Ensure format matches current GOV.UK EPC certificate design',
                  ]}
                  className="mt-8"
                />
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Next Steps</h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        1. Review Your Lease
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Carefully check what is included in your demise and what alterations
                        require consent. This determines your upgrade options.
                      </p>
                      <a
                        href="https://www.lease-advice.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Get free leasehold advice (LEASE)
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        2. Get Your Current EPC
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        If you do not have a recent EPC, commission one to understand your
                        starting point and what improvements are recommended.
                      </p>
                      <a
                        href="https://www.gov.uk/find-energy-certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Check your EPC on GOV.UK
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        3. Calculate Your Costs
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Use our calculator to get a personalised estimate based on your
                        specific property details and available options.
                      </p>
                      <Link
                        href="/tools/cost-calculator"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Use the Cost Calculator
                      </Link>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        4. Contact Your Freeholder
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        If you want to pursue improvements requiring consent, start the
                        dialogue with your freeholder early. Written requests are best.
                      </p>
                      <a
                        href="https://www.gov.uk/leasehold-property/managing-agents-and-right-to-manage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Leasehold rights guidance
                      </a>
                    </CardBody>
                  </Card>
                </div>

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
                    sourceName="Energy Saving Trust"
                    documentTitle="Insulation and glazing"
                    url="https://energysavingtrust.org.uk/advice/insulation/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Energy Performance Certificates"
                    url="https://www.gov.uk/buy-sell-your-home/energy-performance-certificates"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="LEASE (Leasehold Advisory Service)"
                    documentTitle="Making improvements to your home"
                    url="https://www.lease-advice.org/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Leasehold property"
                    url="https://www.gov.uk/leasehold-property"
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
                    <h3 className="font-semibold text-primary-800 mb-3">Need Help?</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      Get a personalised estimate for your converted flat using our
                      free calculator.
                    </p>
                    <Link href="/tools/cost-calculator">
                      <Button variant="primary" size="sm" fullWidth>
                        Try Calculator
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </div>

              <div className="mt-4">
                <Card variant="outlined">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-3">Leasehold Advice</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      The Leasehold Advisory Service offers free guidance on lease terms
                      and leaseholder rights.
                    </p>
                    <a
                      href="https://www.lease-advice.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" fullWidth>
                        Visit LEASE
                      </Button>
                    </a>
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
              title="Victorian Terrace Guide"
              excerpt="Many converted flats are in Victorian buildings. Understand the original construction challenges."
              href="/property-types/victorian-terrace"
              category="Property Guide"
              readingTime={14}
            />
            <RelatedContentCard
              title="Cost Cap and Exemptions"
              excerpt="Understand when consent issues or costs may qualify you for an EPC exemption."
              href="/regulations/cost-cap-exemptions"
              category="Regulations"
              readingTime={8}
            />
            <RelatedContentCard
              title="Complete Upgrade Cost Guide"
              excerpt="Detailed pricing for all EPC improvements including secondary glazing and internal insulation."
              href="/costs"
              category="Costs"
              readingTime={15}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
