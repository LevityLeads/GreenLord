import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building,
  CheckCircle2,
  XCircle,
  Thermometer,
  Users,
  FileText,
  Shield,
  AlertCircle,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { EPCRatingBadge } from '@/components/ui/EPCRatingBadge';
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
  title: 'Purpose-Built Flat EPC Guide | Leasehold Property Upgrades | GreenLord',
  description:
    'Complete guide to improving EPC ratings in purpose-built flats. Navigate leasehold restrictions, freeholder consent, and practical upgrades for flat owners and landlords.',
  alternates: {
    canonical: 'https://greenlord.co.uk/property-types/purpose-built-flat',
  },
  openGraph: {
    title: 'Purpose-Built Flat EPC Guide | GreenLord',
    description:
      'Expert guidance for improving EPC ratings in purpose-built flats. Leasehold considerations, consent requirements, and cost-effective improvements.',
    url: `${SITE_CONFIG.url}/property-types/purpose-built-flat`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'characteristics', text: 'Property Characteristics', level: 2 as const },
  { id: 'advantages', text: 'Advantages of Flats', level: 3 as const },
  { id: 'challenges', text: 'Common EPC Challenges', level: 2 as const },
  { id: 'leasehold', text: 'Leasehold Considerations', level: 2 as const },
  { id: 'consent', text: 'Getting Consent', level: 3 as const },
  { id: 'exemptions', text: 'Third-Party Consent Exemption', level: 3 as const },
  { id: 'upgrades', text: 'Recommended Upgrades', level: 2 as const },
  { id: 'costs', text: 'Cost Estimates', level: 2 as const },
  { id: 'heating-options', text: 'Heating Options', level: 2 as const },
  { id: 'glazing-options', text: 'Glazing Options', level: 2 as const },
  { id: 'example-pathway', text: 'Example Upgrade Pathway', level: 2 as const },
  { id: 'communal-improvements', text: 'Communal Improvements', level: 2 as const },
  { id: 'next-steps', text: 'Next Steps', level: 2 as const },
];

export default function PurposeBuiltFlatPage() {
  return (
    <>
      <PageHeader
        title="Purpose-Built Flat EPC Guide"
        subtitle="A comprehensive guide to improving EPC ratings in purpose-built flats, navigating leasehold restrictions and maximising upgrade potential."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
          { name: 'Purpose-Built Flat', url: `${SITE_CONFIG.url}/property-types/purpose-built-flat` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="Purpose-Built Flat EPC Upgrade Guide"
                publishedDate="2025-07-01"
                lastUpdated="2026-01-15"
                author={SITE_CONFIG.author}
                readingTime={10}
                subtitle="Navigate leasehold restrictions and find practical EPC improvements for your flat"
              />

              {/* Hero Image */}
              <GeneratedImage
                imageId="purpose-built-flat-exterior"
                alt="Purpose-built flat block showing typical 1960s and modern examples"
                prompt="A composite image showing the range of purpose-built flats in the UK rental market. On the left, a typical 1960s low-rise brick flat block of 3-4 storeys with characteristic small windows and shared entrance. On the right, a modern purpose-built development with larger windows, balconies, and contemporary cladding. Morning light illuminates both buildings, demonstrating the variety of flat types landlords may encounter when planning EPC improvements. Show two contrasting purpose-built flat blocks side by side. Left: 1960s/70s low-rise brick block (3-4 storeys); Right: modern block with larger windows. Morning light, both looking like typical UK rental properties."
                width={800}
                height={450}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Purpose-built flats, designed and constructed specifically as apartments rather
                  than converted from houses, represent a significant portion of the UK rental
                  market. From 1930s mansion blocks to 1960s council-built towers and modern
                  new-builds, these properties share common characteristics that affect their
                  EPC improvement options.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  The good news for flat landlords is that purpose-built flats typically start
                  with better EPC ratings than houses. Shared walls with neighbouring flats reduce
                  heat loss, and many blocks already have some level of insulation. However,
                  leasehold restrictions can complicate improvements, and you may need consent
                  from the freeholder or management company before making changes.
                </p>
              </div>

              <KeyFactBox title="Purpose-Built Flat EPC Profile" icon={Thermometer}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm">Typical Starting Rating:</span>
                  <EPCRatingBadge rating="D" size="md" showScoreRange />
                  <span className="text-sm">or</span>
                  <EPCRatingBadge rating="C" size="md" />
                </div>
                <p className="text-sm">
                  Most purpose-built flats score between 55-75 EPC points (rating D or C). Many
                  flats, particularly those in modern blocks or with previous improvements,
                  may already meet the EPC C requirement without further work.
                </p>
              </KeyFactBox>

              {/* Property Characteristics */}
              <section id="characteristics" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Property Characteristics
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Purpose-built flats vary enormously in their construction depending on when
                    they were built. However, they share some common characteristics that
                    distinguish them from houses and converted flats.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary-600" />
                        Construction Types
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>1930s-50s: Brick mansion blocks with solid or cavity walls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>1960s-70s: Concrete system-built blocks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>1980s-90s: Brick with cavity wall insulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>2000s+: Modern insulated construction</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary-600" />
                        Ownership Structure
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Usually leasehold ownership</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Freeholder owns building structure and common parts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Management company maintains shared areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">-</span>
                          <span>Lease terms restrict alterations</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <section id="advantages" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Why Flats Often Score Better Than Houses
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-start gap-3 p-4 bg-success-50 rounded-lg border border-success-200">
                      <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-success-800">Shared Walls</p>
                        <p className="text-sm text-success-700">
                          Walls shared with neighbouring flats have minimal heat loss. A mid-floor
                          flat may only have one or two external walls.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-success-50 rounded-lg border border-success-200">
                      <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-success-800">Smaller Volume</p>
                        <p className="text-sm text-success-700">
                          Less space to heat means lower energy requirements and better EPC scores
                          relative to floor area.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-success-50 rounded-lg border border-success-200">
                      <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-success-800">No Loft Heat Loss</p>
                        <p className="text-sm text-success-700">
                          Flats below the top floor have no roof heat loss, one of the biggest
                          energy drains in houses.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-success-50 rounded-lg border border-success-200">
                      <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-success-800">Communal Heating</p>
                        <p className="text-sm text-success-700">
                          Some blocks have efficient communal heating systems that score well on
                          EPC assessments.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </section>

              {/* Common EPC Challenges */}
              <section id="challenges" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Common EPC Challenges
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    While flats often start with better EPC ratings, they present unique challenges
                    for improvement due to the leasehold structure and shared building elements:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-neutral-600" />
                      1. Leasehold Restrictions
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Your lease likely requires written consent from the freeholder before making
                      alterations. This includes replacing windows, changing heating systems, and
                      any work that affects the structure. The consent process can take time and
                      may involve fees.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-neutral-600" />
                      2. Cannot Modify External Walls
                    </h3>
                    <p className="text-sm text-neutral-600">
                      External walls are typically part of the building structure owned by the
                      freeholder. You cannot add external wall insulation to your flat alone,
                      and internal wall insulation may not be practical in smaller flats. Any
                      wall improvements usually need to be done at block level.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-neutral-600" />
                      3. Communal Heating Systems
                    </h3>
                    <p className="text-sm text-neutral-600">
                      If your block has communal heating, you may have no control over the
                      boiler efficiency or heat source. Some older communal systems are
                      inefficient and drag down EPC ratings, but upgrading requires agreement
                      from all leaseholders and the freeholder.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-neutral-600" />
                      4. Window Replacement Restrictions
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Even if your lease allows window replacement, the freeholder may require
                      specific window designs to maintain building appearance. Some blocks have
                      adopted uniform replacement programmes, while others restrict individual
                      changes entirely.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                      <Building className="w-5 h-5 text-neutral-600" />
                      5. Top and Ground Floor Disadvantages
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Top-floor flats lose heat through the roof (especially if poorly insulated),
                      while ground-floor flats lose heat through the floor. These flats typically
                      score 5-10 points lower than mid-floor flats in the same block.
                    </p>
                  </div>
                </div>
              </section>

              {/* Leasehold Considerations */}
              <section id="leasehold" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Leasehold Considerations
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    The leasehold nature of most flats adds complexity to EPC improvements. Before
                    planning any work, you need to understand what your lease allows and what
                    consents are required.
                  </p>
                </div>

                <section id="consent" className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Getting Consent for Works
                  </h3>

                  <Card variant="outlined" className="mb-6">
                    <CardBody>
                      <h4 className="font-semibold text-primary-800 mb-3">
                        Typical Consent Requirements by Improvement Type
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-neutral-800">Usually No Consent Needed</p>
                            <p className="text-sm text-neutral-600">
                              LED lighting, draught-proofing, smart thermostat (if no structural
                              changes), secondary glazing, radiator reflectors
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-warning-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-neutral-800">Consent Usually Required</p>
                            <p className="text-sm text-neutral-600">
                              Window replacement, boiler replacement, electric heating upgrade,
                              any work affecting walls or floors
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-danger-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-neutral-800">Block-Level Approval Needed</p>
                            <p className="text-sm text-neutral-600">
                              External wall insulation, communal heating upgrades, roof insulation
                              (top floor), renewable energy installations
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <TipBox title="Tips for Getting Freeholder Consent">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>
                        <strong>Check your lease first</strong> - understand what requires consent
                        and the process for obtaining it
                      </li>
                      <li>
                        <strong>Apply in writing</strong> - provide full details of proposed works,
                        specifications, and contractor details
                      </li>
                      <li>
                        <strong>Budget for fees</strong> - freeholders often charge administration
                        fees for processing consent applications (typically 100-500)
                      </li>
                      <li>
                        <strong>Allow time</strong> - consent can take 4-8 weeks to obtain;
                        start the process early
                      </li>
                      <li>
                        <strong>Keep records</strong> - retain all consent documentation for
                        future sale or EPC registration purposes
                      </li>
                    </ul>
                  </TipBox>
                </section>

                <section id="exemptions" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Third-Party Consent Exemption
                  </h3>

                  <InfoBox title="What is the Consent Exemption?">
                    <p className="mb-2">
                      If you cannot make energy improvements because a third party (freeholder,
                      management company, or tenant) has refused consent, you may be able to
                      register for a consent exemption on the PRS Exemptions Register.
                    </p>
                    <p className="text-sm">
                      This exemption lasts for 5 years, after which you must either obtain
                      consent and make improvements, or demonstrate that consent is still
                      being withheld.
                    </p>
                  </InfoBox>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <Card variant="outlined">
                      <CardBody>
                        <h4 className="font-semibold text-primary-800 mb-2">
                          To Claim This Exemption, You Must:
                        </h4>
                        <ul className="space-y-2 text-sm text-neutral-700">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">1.</span>
                            <span>Request consent in writing from the relevant party</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">2.</span>
                            <span>Have the request refused or ignored for 30+ days</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">3.</span>
                            <span>Register the exemption with evidence of the refusal</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">4.</span>
                            <span>Re-apply after 5 years if consent is still withheld</span>
                          </li>
                        </ul>
                      </CardBody>
                    </Card>

                    <Card variant="outlined">
                      <CardBody>
                        <h4 className="font-semibold text-primary-800 mb-2">
                          Evidence Required:
                        </h4>
                        <ul className="space-y-2 text-sm text-neutral-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                            <span>Copy of your consent request letter/email</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                            <span>Proof of delivery (recorded delivery receipt or email read receipt)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                            <span>Copy of refusal letter (if received)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                            <span>Evidence that 30 days have passed without response (if no reply)</span>
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                  </div>
                </section>
              </section>

              {/* Recommended Upgrades */}
              <section id="upgrades" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Recommended Upgrades
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed">
                    Given the constraints of leasehold ownership, focus on improvements that
                    you can make within your flat without external changes. Here are the
                    recommended upgrades in priority order:
                  </p>
                </div>

                <CostTable
                  title="Purpose-Built Flat Upgrade Costs and EPC Impact"
                  items={[
                    {
                      improvement: 'LED Lighting Throughout',
                      lowEstimate: 100,
                      highEstimate: 200,
                      notes: 'No consent needed. 1-2 EPC points.',
                    },
                    {
                      improvement: 'Smart Heating Controls',
                      lowEstimate: 200,
                      highEstimate: 400,
                      notes: 'Smart thermostat + TRVs. 2-4 EPC points.',
                    },
                    {
                      improvement: 'Draught Proofing',
                      lowEstimate: 150,
                      highEstimate: 300,
                      notes: 'Windows and doors. 1-3 EPC points.',
                    },
                    {
                      improvement: 'Secondary Glazing',
                      lowEstimate: 1000,
                      highEstimate: 2500,
                      notes: 'If cannot replace windows. 2-4 EPC points.',
                    },
                    {
                      improvement: 'Electric Heating Upgrade',
                      lowEstimate: 1500,
                      highEstimate: 3000,
                      notes: 'Replace storage heaters with efficient units. 3-6 EPC points.',
                    },
                    {
                      improvement: 'Hot Water Cylinder Insulation',
                      lowEstimate: 50,
                      highEstimate: 150,
                      notes: 'If flat has its own cylinder. 1-2 EPC points.',
                    },
                  ]}
                  showTotal
                  footerNote="Many flats may already be at or near EPC C. Check your current rating before planning improvements."
                />

                <TipBox title="Check If Improvements Are Actually Needed">
                  <p className="mb-2">
                    Before spending money, check your current EPC rating. Many purpose-built
                    flats already score C or above, particularly:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Mid-floor flats in post-1990 blocks</li>
                    <li>Flats with efficient communal heating</li>
                    <li>Flats where previous owners upgraded windows or heating</li>
                    <li>New-build flats less than 10 years old</li>
                  </ul>
                </TipBox>
              </section>

              {/* Cost Estimates */}
              <section id="costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Cost Estimates</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Purpose-built flats typically require the lowest investment to reach EPC C,
                    often because they already start close to the target or need only minor
                    improvements.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Already at C or Above</h3>
                      <p className="text-2xl font-bold text-success-600 mb-2">
                        {formatCurrency(0)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Many flats, especially mid-floor in newer blocks, already meet the
                        requirement. Check your EPC before assuming work is needed.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at D (low-mid)</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(1000)} - {formatCurrency(3000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Quick wins like smart controls, LED lighting, and secondary glazing
                        may be sufficient to reach C.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at Low D/E</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(3000)} - {formatCurrency(5000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        May need heating upgrade or window improvements. Consent exemption
                        may apply if changes are blocked.
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Heating Options */}
              <section id="heating-options" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Heating Options</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Heating is often the key variable in flat EPC ratings. The type of heating
                    system can make a significant difference to your score.
                  </p>
                </div>

                <ComparisonTable
                  title="Heating System EPC Impact in Flats"
                  featureLabels={{
                    epcImpact: 'EPC Impact',
                    typicalCost: 'Installation Cost',
                    runningCost: 'Running Cost',
                    consentNeeded: 'Consent Usually Needed',
                    suitable: 'Widely Suitable for Flats',
                  }}
                  options={[
                    {
                      name: 'Gas Combi Boiler',
                      features: {
                        epcImpact: 'Good (if efficient)',
                        typicalCost: '2,500 - 4,000',
                        runningCost: 'Low',
                        consentNeeded: true,
                        suitable: false,
                      },
                    },
                    {
                      name: 'Modern Electric Radiators',
                      recommended: true,
                      features: {
                        epcImpact: 'Good',
                        typicalCost: '1,500 - 3,000',
                        runningCost: 'Medium-High',
                        consentNeeded: false,
                        suitable: true,
                      },
                    },
                    {
                      name: 'Storage Heaters (old)',
                      features: {
                        epcImpact: 'Poor',
                        typicalCost: 'N/A',
                        runningCost: 'High',
                        consentNeeded: false,
                        suitable: false,
                      },
                    },
                    {
                      name: 'Communal (efficient)',
                      features: {
                        epcImpact: 'Very Good',
                        typicalCost: 'N/A',
                        runningCost: 'Low-Medium',
                        consentNeeded: null,
                        suitable: true,
                      },
                    },
                  ]}
                  footerNote="Electric heating is common in flats but can have higher running costs. Modern high-efficiency electric radiators score better on EPC than old storage heaters."
                />

                <WarningBox title="Old Storage Heaters Hurt EPC Ratings">
                  <p>
                    If your flat has old storage heaters, replacing them with modern
                    high-efficiency electric radiators or panel heaters can gain 3-6 EPC
                    points. Look for heaters with digital controls, programmable timers, and
                    adaptive start functions. This upgrade usually does not require freeholder
                    consent as it is a like-for-like replacement.
                  </p>
                </WarningBox>
              </section>

              {/* Glazing Options */}
              <section id="glazing-options" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Glazing Options</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    If your flat has single glazing or poor double glazing, window improvements
                    can make a significant difference. However, replacing external windows
                    usually requires freeholder consent and may need to match a specified design.
                  </p>
                </div>

                <GeneratedImage
                  imageId="purpose-built-flat-secondary-glazing"
                  alt="Secondary glazing installation in a purpose-built flat"
                  prompt="An interior view of secondary glazing installed in a purpose-built flat, photographed from inside the living room. The image clearly shows the secondary glazing panel sitting on the inside of the window frame, with a visible gap between the original single-glazed window and the new secondary unit. The magnetic fixing mechanism allows the panel to be removed for cleaning, while the installation looks neat and unobtrusive within the modern flat interior with natural daylight streaming through. Show secondary glazing from inside a flat with clear gap between original and secondary panel. Demonstrate the fixing mechanism (magnetic, hinged, or sliding). Include realistic flat interior with natural lighting, looking neat and unobtrusive."
                  width={800}
                  height={400}
                />

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Secondary Glazing
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        An additional layer of glazing fitted to the inside of existing windows.
                        Usually does not require consent as it does not affect the external
                        appearance.
                      </p>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>No consent usually needed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Reversible installation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Good for listed or conservation buildings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neutral-400 mt-0.5">-</span>
                          <span>Lower performance than replacement</span>
                        </li>
                      </ul>
                      <p className="text-sm font-medium text-primary-700 mt-3">
                        Cost: {formatCurrency(1000)} - {formatCurrency(2500)}
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Window Replacement
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Full replacement with modern double or triple glazing. Provides the best
                        performance but requires freeholder consent.
                      </p>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Best thermal performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Highest EPC point gain</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-danger-500 mt-0.5">!</span>
                          <span>Requires freeholder consent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-danger-500 mt-0.5">!</span>
                          <span>May need to match specified design</span>
                        </li>
                      </ul>
                      <p className="text-sm font-medium text-primary-700 mt-3">
                        Cost: {formatCurrency(3000)} - {formatCurrency(6000)}
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Example Upgrade Pathway */}
              <section id="example-pathway" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Example Upgrade Pathway
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Here is a realistic example of how a 2-bedroom purpose-built flat might
                    improve from EPC D to C:
                  </p>
                </div>

                <Card variant="outlined" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4">
                      Case Study: 2-Bed Flat, 1970s Block, Manchester
                    </h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Starting</p>
                        <EPCRatingBadge rating="D" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">62 points</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Target</p>
                        <EPCRatingBadge rating="C" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">69 points</p>
                      </div>
                      <div className="text-sm text-neutral-600 ml-4">
                        <strong>7 points needed</strong>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Smart thermostat (Hive) + TRVs</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+3 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(320)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>LED lighting throughout</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(120)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Draught-proofing (windows and doors)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(180)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Hot water cylinder jacket (80mm)</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+1 point</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(25)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t-2 border-primary-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-primary-800">Final Result:</span>
                          <span className="ml-2 text-success-700 font-medium">70 points (Rating C)</span>
                        </div>
                        <div>
                          <span className="font-bold text-primary-800">Total Cost:</span>
                          <span className="ml-2 text-primary-700 font-medium">{formatCurrency(645)}</span>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-600 mt-2">
                        <strong>Note:</strong> This flat reached C with simple, low-cost improvements
                        that did not require freeholder consent. No window or heating replacement
                        was needed.
                      </p>
                    </div>
                  </CardBody>
                </Card>

                <GeneratedImage
                  imageId="purpose-built-flat-improvement-options"
                  alt="Typical purpose-built flat EPC improvement options"
                  prompt="An infographic displaying EPC improvement options for purpose-built flats, organised into two columns. The left column shows improvements requiring no consent: LED lighting, smart thermostat, draught-proofing, and secondary glazing, with point gains and costs for each. The right column shows consent-required options: window replacement, boiler upgrade, and internal wall insulation. Icons represent each improvement type, with GreenLord green brand colours emphasising that many flats can achieve compliance using only the no-consent options. Create two columns: No Consent Needed vs Consent Required. Show improvements with their point gains, costs, and representative icons. Use GreenLord green brand colours, highlighting that no-consent options are often sufficient."
                  width={800}
                  height={350}
                />
              </section>

              {/* Communal Improvements */}
              <section id="communal-improvements" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Communal Improvements
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    Some of the most effective improvements for flats can only be done at block
                    level. If you are a member of a residents association or have influence with
                    the freeholder, consider advocating for communal improvements.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        Block-Level Opportunities
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>External wall insulation for the whole block</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>Roof insulation improvement (benefits top-floor flats)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>Communal heating system upgrade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>Coordinated window replacement programme</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>Solar panels on flat roof areas</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3">
                        How to Advocate for Block Improvements
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Join or form a residents association</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Present the business case to the freeholder</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Explore grant funding (ECO4, Social Housing Decarbonisation Fund)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Get quotes for block-level work (economies of scale)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Highlight 2030 compliance deadline to freeholder</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <TipBox title="Freeholder Motivation">
                  <p>
                    Remember that freeholders who rent out flats in their blocks also face the
                    2030 EPC C deadline. They have a vested interest in improving the building
                    energy efficiency, even for leaseholder-owned flats. Use this shared
                    interest to advocate for block-wide improvements.
                  </p>
                </TipBox>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Next Steps</h2>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        1. Check Your Current EPC
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Many flats already meet the C rating. Find your existing EPC to confirm
                        whether any work is actually needed.
                      </p>
                      <a
                        href="https://www.gov.uk/find-energy-certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Find your EPC on GOV.UK
                      </a>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        2. Review Your Lease
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Check what alterations require consent and understand the consent
                        process before planning any improvements.
                      </p>
                      <a
                        href="https://www.lease-advice.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        LEASE - free leasehold advice
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
                        flat details and current EPC rating.
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
                        If improvements are needed, start the consent process early. Allow
                        4-8 weeks for approval.
                      </p>
                      <span className="text-sm text-neutral-500">
                        Contact details on your service charge statement
                      </span>
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
                    sourceName="GOV.UK"
                    documentTitle="Domestic Private Rented Property: MEES Exemptions"
                    url="https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance#registering-an-exemption"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="LEASE"
                    documentTitle="Leasehold Advisory Service"
                    url="https://www.lease-advice.org/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Energy Saving Trust"
                    documentTitle="Home improvements: Flats"
                    url="https://energysavingtrust.org.uk/advice/flats/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="PRS Exemptions Register"
                    url="https://prsregister.beis.gov.uk/"
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
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="w-5 h-5 text-primary-600" />
                      <h3 className="font-semibold text-primary-800">Already Compliant?</h3>
                    </div>
                    <p className="text-sm text-neutral-600 mb-4">
                      Many purpose-built flats already meet EPC C. Check your current rating
                      before assuming work is needed.
                    </p>
                    <a
                      href="https://www.gov.uk/find-energy-certificate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" fullWidth>
                        Check Your EPC
                      </Button>
                    </a>
                  </CardBody>
                </Card>
              </div>

              <div className="mt-4">
                <Card variant="default">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-3">Consent Blocked?</h3>
                    <p className="text-sm text-neutral-600 mb-3">
                      If your freeholder refuses consent for improvements, you may qualify for
                      a third-party consent exemption.
                    </p>
                    <Link href="/regulations/cost-cap-exemptions">
                      <Button variant="ghost" size="sm" fullWidth>
                        Learn About Exemptions
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
              excerpt="Guidance for solid-wall terraced properties with more complex improvement requirements."
              href="/property-types/victorian-terrace"
              category="Property Guide"
              readingTime={14}
            />
            <RelatedContentCard
              title="1930s Semi-Detached Guide"
              excerpt="Cavity-wall houses with excellent upgrade potential and straightforward improvements."
              href="/property-types/1930s-semi"
              category="Property Guide"
              readingTime={12}
            />
            <RelatedContentCard
              title="Cost Cap and Exemptions"
              excerpt="Understand all available exemptions including third-party consent and cost cap."
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
