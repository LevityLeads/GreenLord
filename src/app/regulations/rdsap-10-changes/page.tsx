import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Zap,
  Calendar,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Clock,
  Calculator,
  Lightbulb,
  Home,
  FileText,
  HelpCircle
} from 'lucide-react';

import { Container, Section, Sidebar } from '@/components/layout';
import { Card, CardBody, CardTitle, CardDescription } from '@/components/ui';
import { Badge } from '@/components/ui';
import { Button } from '@/components/ui';
import { EPCRatingBadge } from '@/components/ui';
import {
  KeyFactBox,
  WarningBox,
  TipBox,
  InfoBox,
  ArticleHeader,
  RelatedContentCard,
  SourceCitation,
  GeneratedImage,
  Breadcrumbs
} from '@/components/content';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'RdSAP 10 Changes Explained for Landlords | GreenLord',
  description: 'How the new RdSAP 10 EPC methodology affects landlord properties. Understand what changed, how ratings may shift, and whether to wait or act now.',
};

const breadcrumbs = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Regulations', url: `${SITE_CONFIG.url}/regulations` },
  { name: 'RdSAP 10 Changes', url: `${SITE_CONFIG.url}/regulations/rdsap-10-changes` },
];

const tocItems = [
  { id: 'what-is-rdsap', title: 'What is RdSAP?', level: 2 },
  { id: 'key-changes', title: 'Key Changes in RdSAP 10', level: 2 },
  { id: 'how-ratings-affected', title: 'How Ratings May Change', level: 2 },
  { id: 'property-impacts', title: 'Impact by Property Type', level: 2 },
  { id: 'wait-or-act', title: 'Should You Wait or Act Now?', level: 2 },
  { id: 'practical-advice', title: 'Practical Advice', level: 2 },
];

const relatedArticles = [
  {
    title: 'EPC C 2030 Deadline',
    href: '/regulations/epc-c-2030-deadline',
    description: 'The October 2030 compliance deadline',
  },
  {
    title: 'MEES Regulations Guide',
    href: '/regulations/mees-regulations-guide',
    description: 'Complete guide to minimum standards',
  },
  {
    title: 'Cost Calculator',
    href: '/tools/cost-calculator',
    description: 'Estimate your upgrade costs',
  },
];

export default function RdSAP10ChangesPage() {
  return (
    <>
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <Breadcrumbs items={breadcrumbs} />

              <ArticleHeader
                title="RdSAP 10 Changes: What Landlords Need to Know"
                publishedDate="2026-01-22"
                lastUpdated="2026-01-25"
                author={SITE_CONFIG.author}
                readingTime={6}
                subtitle="The new EPC assessment methodology is now in use. Here is how it works, what has changed, and whether you should wait to get your property assessed."
              />

              {/* Key Status Box */}
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-100 rounded-lg">
                    <Zap className="h-5 w-5 text-accent-700" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-accent-800">RdSAP 10 Status</h2>
                    <p className="text-sm text-accent-600">Launched June 2025</p>
                  </div>
                </div>
                <p className="text-accent-700">
                  RdSAP 10 is now the standard methodology for all new EPC assessments. If you get a new EPC today,
                  it will be calculated using RdSAP 10. Existing EPCs calculated under RdSAP 9 remain valid until
                  their expiry date (10 years from assessment).
                </p>
              </div>

              {/* Introduction */}
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  The Reduced Data Standard Assessment Procedure (RdSAP) is the methodology used to calculate
                  EPC ratings for existing dwellings in England and Wales. RdSAP 10 represents the most
                  significant update to this methodology in over a decade, bringing changes that affect
                  how properties are rated and which improvements are recommended.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  For landlords, understanding RdSAP 10 is important because your property might receive a
                  different rating under the new methodology compared to the old one. This could affect your
                  compliance strategy for the 2030 deadline.
                </p>
              </div>

              {/* What is RdSAP */}
              <section id="what-is-rdsap" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What is RdSAP?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  RdSAP (Reduced Data Standard Assessment Procedure) is a simplified version of the full SAP
                  (Standard Assessment Procedure) used to calculate energy performance for existing homes.
                  While SAP is used for new builds where detailed specifications are known, RdSAP uses
                  standardised assumptions to assess existing properties based on observable characteristics.
                </p>

                <InfoBox title="Why &apos;Reduced Data&apos;?">
                  Unlike new builds where exact construction specifications are documented, existing properties
                  often lack detailed records. RdSAP uses standardised assumptions based on property age, type,
                  and observable features to estimate energy performance without needing to know exact specifications.
                </InfoBox>

                <p className="text-neutral-700 leading-relaxed mt-6 mb-6">
                  An EPC assessor visits the property, records observable features (wall construction, insulation
                  presence, heating system, glazing, etc.), and inputs this data into RdSAP software. The software
                  then calculates the energy efficiency score and rating.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                  <Card className="text-center">
                    <CardBody>
                      <div className="text-3xl font-bold text-primary-800 mb-2">RdSAP 9</div>
                      <CardDescription>Previous methodology (until June 2025)</CardDescription>
                    </CardBody>
                  </Card>
                  <Card className="text-center bg-accent-50 border-accent-200">
                    <CardBody>
                      <div className="text-3xl font-bold text-accent-700 mb-2">RdSAP 10</div>
                      <CardDescription className="text-accent-700">Current methodology (from June 2025)</CardDescription>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody>
                      <div className="text-3xl font-bold text-primary-800 mb-2">SAP 10.2</div>
                      <CardDescription>Full methodology for new builds</CardDescription>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Key Changes */}
              <section id="key-changes" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Key Changes in RdSAP 10</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  RdSAP 10 introduces several significant changes to how properties are assessed and scored.
                  The most impactful relate to carbon emission factors and how different technologies are valued.
                </p>

                <div className="space-y-6 my-8">
                  <Card className="border-l-4 border-l-success-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-success-100 rounded-lg">
                          <Zap className="h-5 w-5 text-success-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-800 mb-2">Updated Carbon Emission Factors</h3>
                          <p className="text-neutral-600 text-sm mb-3">
                            The electricity grid has become significantly cleaner since the previous factors were set.
                            RdSAP 10 uses updated emission factors that reflect this decarbonisation.
                          </p>
                          <div className="p-3 bg-success-50 rounded-lg text-sm">
                            <strong className="text-success-800">Impact:</strong>
                            <span className="text-success-700 ml-2">
                              Electric heating systems now score relatively better compared to gas. Heat pumps receive
                              improved scores reflecting their lower carbon footprint.
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="border-l-4 border-l-warning-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-warning-100 rounded-lg">
                          <Home className="h-5 w-5 text-warning-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-800 mb-2">Revised Default Assumptions</h3>
                          <p className="text-neutral-600 text-sm mb-3">
                            Default assumptions for older properties have been updated. This affects how properties
                            are scored when specific details are unknown or unobservable.
                          </p>
                          <div className="p-3 bg-warning-50 rounded-lg text-sm">
                            <strong className="text-warning-800">Impact:</strong>
                            <span className="text-warning-700 ml-2">
                              Some older properties may see score changes based on updated assumptions about
                              construction methods and insulation levels.
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="border-l-4 border-l-primary-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <Lightbulb className="h-5 w-5 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-800 mb-2">Changed Improvement Valuations</h3>
                          <p className="text-neutral-600 text-sm mb-3">
                            The relative value of different improvements has changed. Some measures may contribute
                            more or fewer EPC points than before.
                          </p>
                          <div className="p-3 bg-primary-50 rounded-lg text-sm">
                            <strong className="text-primary-800">Impact:</strong>
                            <span className="text-primary-700 ml-2">
                              Improvement recommendations may differ. The most cost-effective upgrade path might
                              change compared to recommendations on older EPCs.
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="border-l-4 border-l-accent-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-accent-100 rounded-lg">
                          <FileText className="h-5 w-5 text-accent-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-800 mb-2">New Data Collection Requirements</h3>
                          <p className="text-neutral-600 text-sm mb-3">
                            Assessors may need to record additional data points or provide more evidence for certain
                            features. This improves accuracy but may require more thorough inspections.
                          </p>
                          <div className="p-3 bg-accent-50 rounded-lg text-sm">
                            <strong className="text-accent-800">Impact:</strong>
                            <span className="text-accent-700 ml-2">
                              Assessments may take slightly longer. Ensure you can provide access to all areas of
                              the property and have any improvement documentation available.
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* How Ratings May Change */}
              <section id="how-ratings-affected" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">How Ratings May Change</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The same property assessed under RdSAP 9 and RdSAP 10 may receive different scores. The
                  direction and magnitude of change depends on the property&apos;s characteristics, particularly
                  its heating system.
                </p>

                <ImagePlaceholder
                  alt="Comparison of property ratings under RdSAP 9 versus RdSAP 10"
                  description="Side-by-side comparison showing the same property (1930s semi-detached house) assessed under both methodologies. Shows how the overall score and specific component scores differ, with highlighting on which factors improved or worsened."
                  width={800}
                  height={400}
                  priority
                  instructions={[
                    'Create a clear before/after comparison layout',
                    'Show both overall scores and key component breakdowns',
                    'Use colour coding to show improvements (green) and declines (red)',
                    'Include typical example property details',
                    'Make it clear which methodology is which',
                  ]}
                />

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="bg-success-50 border-success-200">
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="h-6 w-6 text-success-600" />
                        <CardTitle className="text-lg text-success-800">Likely to Score Better</CardTitle>
                      </div>
                      <ul className="space-y-2 text-sm text-success-900">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          Properties with heat pumps (air or ground source)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          All-electric properties with modern storage heaters
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          Properties with solar PV installations
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          Properties with solar thermal hot water
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          Electric vehicle charger presence (minor benefit)
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card className="bg-warning-50 border-warning-200">
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingDownIcon className="h-6 w-6 text-warning-600" />
                        <CardTitle className="text-lg text-warning-800">May Score Similar or Slightly Lower</CardTitle>
                      </div>
                      <ul className="space-y-2 text-sm text-warning-900">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-warning-600 mt-0.5 flex-shrink-0" />
                          Properties with gas boilers (relative decline vs electric)
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-warning-600 mt-0.5 flex-shrink-0" />
                          Properties with oil heating
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-warning-600 mt-0.5 flex-shrink-0" />
                          Older properties where assumptions have changed
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-warning-600 mt-0.5 flex-shrink-0" />
                          Properties where previous assessment was generous
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <WarningBox title="Borderline Properties">
                  If your property is currently just above the C threshold (score 69-72), be aware that a new
                  assessment under RdSAP 10 could potentially push you below the line. Conversely, if you are
                  just below (score 65-68), the new methodology might help you achieve C without improvements.
                </WarningBox>
              </section>

              {/* Impact by Property Type */}
              <section id="property-impacts" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Impact by Property Type</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Different property types will experience RdSAP 10 differently, depending on their typical
                  heating systems and construction characteristics.
                </p>

                <div className="space-y-4 my-8">
                  <Card>
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <Home className="h-6 w-6 text-primary-600 flex-shrink-0" />
                        <div>
                          <CardTitle className="text-lg mb-2">Victorian and Edwardian Properties</CardTitle>
                          <CardDescription className="mb-3">
                            Impact varies significantly by heating type. If you have switched to a heat pump,
                            expect improved scores. If still on gas, scores may be similar or slightly lower.
                            Updated default assumptions for solid walls may affect properties where insulation
                            status is uncertain.
                          </CardDescription>
                          <div className="flex items-center gap-2">
                            <Badge variant="neutral">Variable impact</Badge>
                            <Badge variant="primary">
                              <Link href="/property-types/victorian-terrace">See Victorian guide</Link>
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <Home className="h-6 w-6 text-primary-600 flex-shrink-0" />
                        <div>
                          <CardTitle className="text-lg mb-2">1930s Semi-Detached</CardTitle>
                          <CardDescription className="mb-3">
                            Typically gas-heated with cavity walls. Expect broadly similar scores under RdSAP 10
                            unless you have installed renewable technology. Cavity wall insulation continues to
                            be highly valued. If your property was borderline C, consider a new assessment to
                            check your position.
                          </CardDescription>
                          <div className="flex items-center gap-2">
                            <Badge variant="neutral">Similar scores expected</Badge>
                            <Badge variant="primary">
                              <Link href="/property-types/1930s-semi">See 1930s guide</Link>
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <Home className="h-6 w-6 text-primary-600 flex-shrink-0" />
                        <div>
                          <CardTitle className="text-lg mb-2">Purpose-Built Flats</CardTitle>
                          <CardDescription className="mb-3">
                            Modern purpose-built flats often already score well. If your flat uses electric
                            heating (common in newer builds), you may see improved scores. Communal heating
                            systems are assessed differently; results depend on the specific system type.
                          </CardDescription>
                          <div className="flex items-center gap-2">
                            <Badge variant="success">Potentially improved</Badge>
                            <Badge variant="primary">
                              <Link href="/property-types/purpose-built-flat">See flat guide</Link>
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <Home className="h-6 w-6 text-primary-600 flex-shrink-0" />
                        <div>
                          <CardTitle className="text-lg mb-2">Rural Properties (Oil Heated)</CardTitle>
                          <CardDescription className="mb-3">
                            Oil-heated properties may see relative score declines as oil carbon factors remain
                            high while electricity factors improve. Consider this when planning improvements;
                            switching away from oil provides greater EPC benefit under RdSAP 10 than it did
                            under RdSAP 9.
                          </CardDescription>
                          <div className="flex items-center gap-2">
                            <Badge variant="warning">May score lower</Badge>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Should You Wait or Act Now */}
              <section id="wait-or-act" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Should You Wait or Act Now?</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  A common question from landlords has been whether to wait for RdSAP 10 before getting a new
                  EPC or making improvements. Now that RdSAP 10 is in use, the question is simpler: any new
                  EPC you get will use RdSAP 10.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="bg-success-50 border-success-200">
                    <CardBody>
                      <h3 className="font-semibold text-success-800 mb-4">Get a New EPC Now If...</h3>
                      <ul className="space-y-3 text-sm text-success-900">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Your current EPC is more than 5 years old and you have made improvements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>You have installed electric or renewable heating since your last EPC</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>You are borderline D/C and think RdSAP 10 might help your rating</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>You need an accurate baseline for planning improvements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                          <span>Your EPC will expire before 2030 anyway</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card className="bg-neutral-50 border-neutral-200">
                    <CardBody>
                      <h3 className="font-semibold text-neutral-800 mb-4">Keep Your Current EPC If...</h3>
                      <ul className="space-y-3 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                          <span>Your current EPC shows C or above and is still valid</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                          <span>You have not made any changes since your last assessment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                          <span>You have a gas boiler and suspect RdSAP 10 might lower your score</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                          <span>Your EPC does not expire until after 2030</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <TipBox title="Remember: Old EPCs Remain Valid">
                  An EPC calculated under RdSAP 9 remains legally valid until its expiry date (10 years from
                  assessment). You are not required to get a new EPC just because the methodology changed.
                  However, if you want to demonstrate the impact of improvements or need an accurate current
                  assessment, a new EPC will use RdSAP 10.
                </TipBox>
              </section>

              {/* Practical Advice */}
              <section id="practical-advice" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Practical Advice for Landlords</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Here is how to approach RdSAP 10 pragmatically:
                </p>

                <div className="space-y-4 my-8">
                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Check Your Current EPC Expiry</h4>
                      <p className="text-neutral-600 text-sm">
                        If your EPC expires before October 2030, you will need a new one anyway. Plan when to
                        get this done based on your improvement timeline.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Understand Your Heating System</h4>
                      <p className="text-neutral-600 text-sm">
                        The biggest variable in RdSAP 10 impacts is heating type. Electric and renewable
                        heating properties benefit; gas and oil see relative decline. Know where you stand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Review Old Improvement Recommendations</h4>
                      <p className="text-neutral-600 text-sm">
                        Improvement recommendations on EPCs calculated under RdSAP 9 may be less accurate under
                        RdSAP 10. If planning major improvements, consider getting a fresh assessment first.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Document All Improvements</h4>
                      <p className="text-neutral-600 text-sm">
                        Keep records of all energy efficiency improvements. When getting a new EPC, provide
                        this documentation to the assessor to ensure improvements are correctly recorded.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Consider the Long-Term Direction</h4>
                      <p className="text-neutral-600 text-sm">
                        The methodology changes reflect grid decarbonisation. This trend will continue. Investing
                        in electric or renewable heating positions your property well for future methodology updates.
                      </p>
                    </div>
                  </div>
                </div>

                <KeyFactBox title="The Bottom Line" icon={Lightbulb}>
                  RdSAP 10 is now the standard. Do not overthink it. If you need a new EPC, get one. If your
                  current EPC shows you are compliant and does not expire before 2030, you can keep using it.
                  Focus on making sensible improvements rather than gaming the methodology.
                </KeyFactBox>
              </section>

              {/* CTA */}
              <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Plan Your Improvements</h2>
                <p className="text-primary-700 mb-6">
                  Use our calculator to estimate costs and see what improvements make sense for your property.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" leftIcon={<Calculator className="h-5 w-5" />}>
                    <Link href="/tools/cost-calculator">Calculate Upgrade Costs</Link>
                  </Button>
                  <Button variant="outline" size="lg" leftIcon={<Home className="h-5 w-5" />}>
                    <Link href="/property-types">Property Type Guides</Link>
                  </Button>
                </div>
              </section>

              {/* Related Content */}
              <section className="mt-12">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Related Guides</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <RelatedContentCard
                    title="EPC C 2030 Deadline"
                    excerpt="Everything you need to know about the October 2030 compliance deadline."
                    href="/regulations/epc-c-2030-deadline"
                    category="Regulations"
                    readingTime={8}
                  />
                  <RelatedContentCard
                    title="MEES Regulations Guide"
                    excerpt="Complete guide to Minimum Energy Efficiency Standards and how they apply."
                    href="/regulations/mees-regulations-guide"
                    category="Regulations"
                    readingTime={12}
                  />
                </div>
              </section>

              {/* Sources */}
              <section className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Sources</h3>
                <div className="space-y-2">
                  <SourceCitation
                    sourceName="BRE Group"
                    documentTitle="RdSAP 10 Technical Manual"
                    url="https://www.bregroup.com/sap/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Standard Assessment Procedure"
                    url="https://www.gov.uk/guidance/standard-assessment-procedure"
                    accessedDate="January 2026"
                  />
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <Sidebar
              tableOfContents={tocItems}
              relatedArticles={relatedArticles}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

// Custom TrendingDown icon
function TrendingDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
      <polyline points="16 17 22 17 22 11"></polyline>
    </svg>
  );
}
