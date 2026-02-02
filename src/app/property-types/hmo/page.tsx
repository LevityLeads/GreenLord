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
  Shield,
  FileText,
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
import { GeneratedImage } from '@/components/content/GeneratedImage';
import { TableOfContents } from '@/components/content/TableOfContents';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { SourceCitation } from '@/components/content/SourceCitation';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'HMO EPC Guide | House in Multiple Occupation Upgrades | GreenLord',
  description:
    'Complete guide to improving EPC ratings in HMO properties. Covers whole-building vs room-by-room EPC requirements, HMO licensing considerations, fire safety conflicts, and realistic upgrade costs.',
  alternates: {
    canonical: 'https://greenlord.co.uk/property-types/hmo',
  },
  openGraph: {
    title: 'HMO EPC Guide | GreenLord',
    description:
      'Expert guidance for improving EPC ratings in Houses in Multiple Occupation. Licensing requirements, fire safety considerations, and practical upgrade strategies.',
    url: `${SITE_CONFIG.url}/property-types/hmo`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'understanding-hmo-epc', text: 'Understanding HMO EPCs', level: 2 as const },
  { id: 'characteristics', text: 'Common HMO Characteristics', level: 2 as const },
  { id: 'challenges', text: 'Unique HMO Challenges', level: 2 as const },
  { id: 'licensing', text: 'HMO Licensing Requirements', level: 3 as const },
  { id: 'fire-safety', text: 'Fire Safety Considerations', level: 3 as const },
  { id: 'upgrades', text: 'Recommended Upgrades', level: 2 as const },
  { id: 'upgrade-priority', text: 'Priority Order', level: 3 as const },
  { id: 'costs', text: 'Cost Estimates', level: 2 as const },
  { id: 'special-considerations', text: 'Special Considerations', level: 2 as const },
  { id: 'example-pathway', text: 'Example Upgrade Pathway', level: 2 as const },
  { id: 'next-steps', text: 'Next Steps', level: 2 as const },
];

export default function HMOPage() {
  return (
    <>
      <PageHeader
        title="HMO EPC Guide"
        subtitle="A comprehensive guide to EPC compliance for Houses in Multiple Occupation, covering the unique challenges of shared housing, licensing requirements, and practical upgrade strategies."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
          { name: 'HMO', url: `${SITE_CONFIG.url}/property-types/hmo` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="HMO EPC Upgrade Guide"
                publishedDate="2026-01-15"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={15}
                subtitle="Navigating EPC requirements for Houses in Multiple Occupation while maintaining licensing compliance"
              />

              {/* Hero Image */}
              <GeneratedImage
                imageId="hmo-property-exterior"
                alt="Large HMO property with multiple rooms and shared facilities"
                prompt="A larger Victorian or Edwardian house converted for multiple occupancy on a residential street in a UK city. The property features multiple front-facing windows suggesting numerous bedrooms, a practical entrance area, and well-maintained exterior befitting professional landlord standards. Morning light illuminates the facade, showing the scale and character of this HMO property. Show a genuine UK HMO-style property (larger Victorian or Edwardian house) with multiple windows. Capture the scale that suggests multiple occupancy without showing individuals. Morning or afternoon daylight, professional landlord standards evident."
                width={800}
                height={450}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Houses in Multiple Occupation (HMOs) present unique challenges for EPC compliance.
                  These shared properties, where three or more tenants from different households
                  share facilities, are subject to additional regulations beyond standard rental
                  properties. With 64% of HMOs currently rated D or below, significant improvements
                  are needed across the sector.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  HMO landlords must balance EPC improvement works with licensing requirements,
                  fire safety regulations, and the practical challenges of upgrading occupied
                  properties. This guide explains how to navigate these complexities while
                  achieving compliance cost-effectively.
                </p>
              </div>

              <KeyFactBox title="Typical HMO EPC Profile" icon={Thermometer}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm">Starting Rating:</span>
                  <EPCRatingBadge rating="D" size="md" showScoreRange />
                </div>
                <p className="text-sm">
                  Most HMOs score between 45-60 EPC points (rating D or E). The wide range
                  reflects the variety of building types used as HMOs, from converted Victorian
                  houses to purpose-built student accommodation. 64% of HMOs are currently
                  rated D or below.
                </p>
              </KeyFactBox>

              {/* Understanding HMO EPCs */}
              <section id="understanding-hmo-epc" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Understanding HMO EPCs
                </h2>

                <WarningBox title="Critical: Which EPC Does Your HMO Need?" critical>
                  <p className="mb-3">
                    The EPC requirements for HMOs depend on how the property is configured and let:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      <strong>Single EPC for whole building:</strong> Required when the property
                      is let as a whole to a group (e.g., student house), or when it is a
                      licensable HMO with shared facilities.
                    </li>
                    <li>
                      <strong>Individual EPCs per unit:</strong> Required when self-contained
                      units within the building are let separately (each with own kitchen/bathroom).
                    </li>
                  </ul>
                  <p className="mt-3 font-medium">
                    Most traditional HMOs with shared kitchens and bathrooms require a single EPC
                    for the whole building.
                  </p>
                </WarningBox>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary-600" />
                        Whole Building EPC
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Applies to most HMOs where tenants share facilities:
                      </p>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Shared kitchen HMOs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Student houses let to groups</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Professional house shares</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Licensed HMOs with communal areas</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary-600" />
                        Per-Unit EPCs
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Required for self-contained flats within a building:
                      </p>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Converted flats with own facilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Studio apartments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Bedsits with kitchenettes and en-suite</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Purpose-built student studios</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <TipBox title="Get Professional Advice on EPC Type">
                  <p>
                    The distinction between whole-building and per-unit EPCs can be complex,
                    especially for properties that have been converted. Consult with an EPC
                    assessor experienced in HMO properties before commissioning assessments.
                    Getting this wrong could mean non-compliance despite having valid EPCs.
                  </p>
                </TipBox>
              </section>

              {/* Common HMO Characteristics */}
              <section id="characteristics" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Common HMO Characteristics
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    HMOs are typically converted from larger family homes, which means they
                    often inherit the energy efficiency challenges of their original
                    construction period while facing additional complexities from conversion.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary-600" />
                        Typical Building Types
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Large Victorian or Edwardian houses (most common)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>1930s semi-detached converted to HMO</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Purpose-built student accommodation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Converted commercial buildings</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary-600" />
                        HMO-Specific Features
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Multiple independent heating zones or room heaters</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Shared common areas (kitchen, bathroom, lounge)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Fire doors and emergency lighting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Higher hot water demand than typical households</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Unique HMO Challenges */}
              <section id="challenges" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Unique HMO Challenges
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      1. Room-by-Room Heating Complexity
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Many HMOs have individual room heaters or complex zoned heating systems
                      to allow tenants control over their own space. This can complicate both
                      the EPC assessment and improvement works. Replacing multiple electric
                      heaters with a central system may require significant rewiring and
                      pipework installation throughout the building.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      2. Common Areas Complicate Assessment
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Shared kitchens, bathrooms, and communal lounges are included in the
                      whole-building EPC assessment. The energy use patterns of these spaces
                      differ from typical residential use, and improvements must consider
                      higher usage demands and multiple users.
                    </p>
                  </div>

                  <section id="licensing" className="mt-4">
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        3. HMO Licensing Requirements
                      </h3>
                      <p className="text-sm text-amber-700">
                        HMO licensing may restrict certain alterations or require specific
                        standards to be maintained. Some energy improvements may require
                        notification to or approval from your local authority, particularly
                        if they affect room sizes, fire escape routes, or amenity provision.
                        Always check with your licensing officer before commencing works.
                      </p>
                    </div>
                  </section>

                  <section id="fire-safety" className="mt-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        4. Fire Safety Conflicts
                      </h3>
                      <p className="text-sm text-red-700 mb-2">
                        HMOs have stricter fire safety requirements that may conflict with
                        some energy efficiency improvements:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-red-700">
                        <li>Internal wall insulation may affect fire door frame depths</li>
                        <li>Loft conversions must maintain fire separation</li>
                        <li>Some insulation materials have fire rating requirements</li>
                        <li>Protected escape routes must not be compromised</li>
                      </ul>
                    </div>
                  </section>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 mt-4">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      5. Works in Occupied Property
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Unlike single-let properties, HMOs often have continuous occupation
                      with multiple tenants. Major improvement works must be carefully
                      planned around tenant schedules, and may need to be phased room-by-room.
                      This can increase costs and extend project timelines significantly.
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
                    HMO improvements must balance EPC gains with fire safety, licensing
                    compliance, and practical considerations of working in occupied buildings.
                    The following priorities reflect both EPC impact and HMO-specific suitability.
                  </p>
                </div>

                <section id="upgrade-priority" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Priority Order for HMOs
                  </h3>

                  <CostTable
                    title="HMO Upgrade Costs and EPC Impact"
                    items={[
                      {
                        improvement: 'Loft Insulation (to 270mm)',
                        lowEstimate: 500,
                        highEstimate: 1000,
                        notes: 'Larger roof area typical in HMOs. 4-8 EPC points.',
                      },
                      {
                        improvement: 'LED Lighting Throughout',
                        lowEstimate: 200,
                        highEstimate: 400,
                        notes: 'Higher number of fittings in HMOs. 2-4 EPC points.',
                      },
                      {
                        improvement: 'Central Heating Controls Upgrade',
                        lowEstimate: 400,
                        highEstimate: 800,
                        notes: 'Zone controls for different areas. 2-4 EPC points.',
                      },
                      {
                        improvement: 'Hot Water System Improvements',
                        lowEstimate: 300,
                        highEstimate: 600,
                        notes: 'Cylinder insulation, pipe lagging. 1-3 EPC points.',
                      },
                      {
                        improvement: 'Condensing Boiler Upgrade',
                        lowEstimate: 3000,
                        highEstimate: 5000,
                        notes: 'May need larger capacity for HMO demand. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Draught Proofing Throughout',
                        lowEstimate: 400,
                        highEstimate: 800,
                        notes: 'More doors and windows to treat. 2-4 EPC points.',
                      },
                      {
                        improvement: 'Double Glazing (if single glazed)',
                        lowEstimate: 5000,
                        highEstimate: 10000,
                        notes: 'Often many windows in larger HMOs. 5-10 EPC points.',
                      },
                    ]}
                    showTotal
                    footerNote="Costs vary significantly based on HMO size, construction type, and current condition. The building type (Victorian, 1930s, etc.) will heavily influence wall insulation requirements."
                  />

                  <TipBox title="Start with Non-Disruptive Improvements">
                    <p className="mb-2">
                      For occupied HMOs, prioritise improvements that can be done with
                      minimal disruption to tenants:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Loft insulation (usually accessible without entering rooms)</li>
                      <li>LED lighting replacement (room-by-room, takes minutes)</li>
                      <li>Hot water cylinder insulation (utility area access only)</li>
                      <li>Boiler upgrade (typically in utility or kitchen area)</li>
                      <li>Draught proofing (can be done room-by-room quickly)</li>
                    </ul>
                  </TipBox>
                </section>
              </section>

              {/* Cost Estimates */}
              <section id="costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Cost Estimates</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    HMO upgrade costs depend heavily on the original building type and
                    current condition. A Victorian HMO will face similar challenges to
                    any Victorian property, with additional complexity from the multi-occupancy
                    configuration.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Post-1980s HMO</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(3000)} - {formatCurrency(6000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Modern construction with cavity walls. Mainly needs heating and
                        control upgrades.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">1930s-1960s HMO</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(5000)} - {formatCurrency(10000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        May need cavity wall insulation check plus comprehensive improvements.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Pre-1919 HMO</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(8000)} - {formatCurrency(18000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Solid walls require more expensive solutions. Larger Victorian
                        houses at the higher end.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="HMO Cost Cap Considerations">
                  <p>
                    The {formatCurrency(KEY_DATES.costCap)} cost cap applies to HMOs just as
                    it does to other rental properties. For larger Victorian or Edwardian HMOs
                    with solid walls, this threshold may be reached before achieving EPC C,
                    qualifying for an exemption. Keep detailed records of all improvement
                    expenditure with quotes and invoices.
                  </p>
                </InfoBox>
              </section>

              {/* Special Considerations */}
              <section id="special-considerations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Special Considerations
                </h2>

                <WarningBox title="Notify Your Licensing Authority" critical>
                  <p className="mb-2">
                    Before undertaking significant improvement works on a licensed HMO,
                    notify your local authority licensing team. They may need to inspect
                    completed works to ensure ongoing compliance with HMO standards.
                    Particular attention is required for:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Any works affecting room sizes (e.g., internal wall insulation)</li>
                    <li>Changes to fire doors or fire stopping</li>
                    <li>Alterations to escape routes or common areas</li>
                    <li>Changes to heating or hot water provision</li>
                  </ul>
                </WarningBox>

                <div className="mt-6 space-y-4">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Fire Door Compatibility
                      </h3>
                      <p className="text-sm text-neutral-600">
                        If installing internal wall insulation, check that existing fire doors
                        will still fit correctly within their frames. Fire doors must have
                        specific gap tolerances to function correctly. You may need to replace
                        fire doors and frames, adding significant cost to internal insulation projects.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Minimum Room Sizes
                      </h3>
                      <p className="text-sm text-neutral-600">
                        HMO licensing requires minimum room sizes for sleeping accommodation.
                        Internal wall insulation reduces room dimensions by 50-100mm per wall.
                        Before proceeding, calculate whether insulated rooms will still meet
                        minimum size requirements. Rooms falling below minimums may need to
                        be removed from the licence.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Heating System Capacity
                      </h3>
                      <p className="text-sm text-neutral-600">
                        HMOs have higher hot water demand than typical households due to
                        multiple occupants. When upgrading boilers, ensure the replacement
                        has adequate capacity for peak demand (typically early morning when
                        multiple tenants shower). Consider larger cylinders or multiple
                        heating zones.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <TipBox title="Plan Works During Voids">
                  <p>
                    The most cost-effective time to carry out major improvements is during
                    void periods or at tenancy changeovers. For student HMOs, the summer
                    vacation period may provide an opportunity for more disruptive works.
                    Plan your improvement schedule around predictable vacancy periods.
                  </p>
                </TipBox>
              </section>

              {/* Example Upgrade Pathway */}
              <section id="example-pathway" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Example Upgrade Pathway
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Here is a realistic example of how a 6-bedroom Victorian HMO might
                    progress from EPC rating E to C:
                  </p>
                </div>

                <Card variant="outlined" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4">
                      Case Study: 6-Bed Victorian HMO, Manchester
                    </h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Starting</p>
                        <EPCRatingBadge rating="E" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">48 points</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Target</p>
                        <EPCRatingBadge rating="C" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">69 points</p>
                      </div>
                      <div className="text-sm text-neutral-600 ml-4">
                        <strong>21 points needed</strong>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Loft insulation topped up to 270mm</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+6 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(720)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>LED lighting throughout (32 fittings)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+3 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(320)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Smart heating controls with zone valves</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+3 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(650)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Hot water cylinder upgrade with improved insulation</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(450)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>New high-output condensing boiler</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+7 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(4200)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Draught proofing all rooms and common areas</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+3 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(580)}</span>
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
                          <span className="ml-2 text-primary-700 font-medium">{formatCurrency(6920)}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <InfoBox title="No Wall Insulation Required in This Case">
                  <p>
                    This HMO reached EPC C without solid wall insulation, which would have
                    been complicated by fire door compliance and room size requirements.
                    By focusing on heating system improvements, loft insulation, and low-cost
                    quick wins, compliance was achieved at a manageable cost while avoiding
                    disruption to the licensing conditions.
                  </p>
                </InfoBox>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Next Steps</h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        1. Confirm Your EPC Type
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Speak to an EPC assessor experienced with HMOs to confirm whether
                        you need a whole-building EPC or individual unit EPCs.
                      </p>
                      <a
                        href="https://www.gov.uk/find-energy-certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Find an EPC assessor
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        2. Check Licensing Requirements
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Contact your local authority HMO licensing team to understand
                        any restrictions or requirements for improvement works.
                      </p>
                      <a
                        href="https://www.gov.uk/private-renting/houses-in-multiple-occupation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        HMO guidance on GOV.UK
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        3. Review Fire Safety Implications
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Consult with a fire risk assessor before planning works that
                        could affect fire doors, escape routes, or fire separation.
                      </p>
                      <Link
                        href="/resources/hmo-fire-safety"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        HMO fire safety guide
                      </Link>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        4. Plan Around Tenancy Periods
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Schedule major works during void periods or summer vacations
                        (for student HMOs) to minimise disruption and cost.
                      </p>
                      <Link
                        href="/tools/cost-calculator"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Use the Cost Calculator
                      </Link>
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
                      Calculate Your HMO Upgrade Costs
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Sources */}
              <section className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-700 mb-4">Sources</h3>
                <div className="space-y-2">
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Houses in multiple occupation (HMOs)"
                    url="https://www.gov.uk/private-renting/houses-in-multiple-occupation"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Energy Performance Certificates for the construction, sale and let of dwellings"
                    url="https://www.gov.uk/guidance/energy-performance-certificates-for-the-construction-sale-and-let-of-dwellings"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="National Residential Landlords Association"
                    documentTitle="HMO Management Guide"
                    url="https://www.nrla.org.uk/resources/hmo-management"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Local Authority Building Control"
                    documentTitle="Fire Safety in HMOs"
                    url="https://www.labc.co.uk/news/fire-safety-houses-multiple-occupation"
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
                    <h3 className="font-semibold text-primary-800 mb-3">HMO Specialist Help</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      Get a personalised estimate for your HMO property considering its
                      unique requirements.
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
              title="Victorian Terrace Guide"
              excerpt="Many HMOs are converted Victorian properties. Understand the underlying building challenges."
              href="/property-types/victorian-terrace"
              category="Property Guide"
              readingTime={14}
            />
            <RelatedContentCard
              title="Cost Cap and Exemptions"
              excerpt="Understand when you can claim an exemption if reaching EPC C is not cost-effective."
              href="/regulations/cost-cap-exemptions"
              category="Regulations"
              readingTime={8}
            />
            <RelatedContentCard
              title="Heating System Upgrades"
              excerpt="Guide to upgrading boilers and heating controls for improved EPC performance."
              href="/improvements/heating-upgrades"
              category="Improvements"
              readingTime={10}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
