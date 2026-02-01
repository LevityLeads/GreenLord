import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calculator, CheckCircle, AlertCircle, TrendingUp, PoundSterling } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Sidebar } from '@/components/layout/Sidebar';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { WarningBox } from '@/components/content/WarningBox';
import { TipBox } from '@/components/content/TipBox';
import { InfoBox } from '@/components/content/InfoBox';
import { CostTable } from '@/components/content/CostTable';
import { SourceCitation } from '@/components/content/SourceCitation';
import { RelatedContentCard } from '@/components/content/RelatedContentCard';
import { GeneratedImage } from '@/components/content';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { EPCRatingBadge } from '@/components/ui/EPCRatingBadge';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'D to C EPC Upgrade Costs: Complete Guide for Landlords | GreenLord',
  description: 'How much does it cost to upgrade from EPC D to C? Realistic costs, typical scenarios, and the most cost-effective improvements for D-rated rental properties.',
  openGraph: {
    title: 'D to C EPC Upgrade Costs for Landlords',
    description: 'Complete guide to upgrading from EPC D to C. Realistic costs, scenarios, and recommended improvements.',
    type: 'article',
  },
};

const tableOfContents = [
  { id: 'what-d-rating-means', title: 'What a D Rating Means', level: 2 },
  { id: 'points-needed', title: 'Points Needed for C', level: 2 },
  { id: 'most-cost-effective', title: 'Most Cost-Effective Upgrades', level: 2 },
  { id: 'typical-scenarios', title: 'Typical Upgrade Scenarios', level: 2 },
  { id: 'scenario-1', title: 'Scenario 1: 1970s Semi', level: 3 },
  { id: 'scenario-2', title: 'Scenario 2: 1980s House', level: 3 },
  { id: 'scenario-3', title: 'Scenario 3: Harder Cases', level: 3 },
  { id: 'common-mistakes', title: 'Common Mistakes to Avoid', level: 2 },
  { id: 'next-steps', title: 'Your Next Steps', level: 2 },
];

const relatedArticles = [
  {
    title: 'Complete Upgrade Cost Guide',
    href: '/costs',
    description: 'Comprehensive costs for all improvement types.',
  },
  {
    title: 'Cost Cap and Exemptions',
    href: '/regulations/cost-cap-exemptions',
    description: 'Understanding when the £10,000 cap applies.',
  },
  {
    title: '1970s-1980s Property Guide',
    href: '/property-types/1970s-1980s',
    description: 'Detailed upgrade guide for this era of property.',
  },
];

export default function DToCUpgradePage() {
  return (
    <>
      <PageHeader
        title="D to C EPC Upgrade Costs"
        subtitle="D-rated properties are often the easiest and most cost-effective to upgrade to the required C rating. Here's what it typically costs."
        breadcrumbs={[
          { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
          { name: 'D to C Upgrade', url: `${SITE_CONFIG.url}/costs/d-to-c-upgrade` },
        ]}
      >
        <div className="flex items-center gap-3">
          <EPCRatingBadge rating="D" size="md" />
          <ArrowRight className="h-5 w-5 text-neutral-400" />
          <EPCRatingBadge rating="C" size="md" />
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1 max-w-4xl">
              <ArticleHeader
                title="D to C EPC Upgrade Costs: The Good News for Landlords"
                publishedDate="2025-11-01"
                lastUpdated="2026-01-20"
                author={SITE_CONFIG.author}
                readingTime={10}
                subtitle="Most D-rated properties can reach EPC C for under £3,000. Here's exactly what to expect."
              />

              {/* Hero Image */}
              <GeneratedImage
                imageId="d-to-c-upgrade-hero"
                alt="Landlord reviewing EPC certificate showing D rating in a British rental property"
                prompt="A landlord holds an EPC certificate in the living room of a 1970s semi-detached house, with the D rating band clearly visible on the document. Behind them, the property shows typical features of a D-rated home - double glazed windows, a gas boiler radiator, but also opportunities for improvement like thin curtains and an older thermostat on the wall. The scene conveys assessment and planning for upgrades. EPC certificate document should be visible and readable. Interior of typical British rental property from 1970s-80s era. Person reviewing document in thoughtful, planning mode."
                width={1200}
                height={630}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="lead text-xl text-neutral-700">
                  If your rental property currently has an EPC rating of D, you are in a relatively good position. D-rated properties typically require modest improvements to reach the required C rating, often achievable well within the {formatCurrency(KEY_DATES.costCap)} cost cap.
                </p>

                <p>
                  The jump from D to C is one of the most common upgrade paths for landlords, and the good news is that it is usually straightforward. Most D-rated properties can reach C with just two or three targeted improvements, keeping costs manageable and avoiding the need for major structural work.
                </p>
              </div>

              <KeyFactBox title="D to C: Typically Under {formatCurrency(3000)}" icon={PoundSterling}>
                <p>
                  Most D-rated properties with standard construction (cavity walls, loft space) can achieve EPC C for <strong>{formatCurrency(1000)} to {formatCurrency(3000)}</strong>. Properties with unfilled cavity walls often see the lowest costs, as cavity wall insulation is highly effective and relatively inexpensive.
                </p>
              </KeyFactBox>

              {/* What D Rating Means */}
              <section id="what-d-rating-means" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What a D Rating Actually Means</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    A D rating covers EPC scores from 55 to 68 points. This is currently the most common rating band for rental properties in the UK, representing properties that have some energy efficiency measures in place but fall short of modern standards.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-warning-50 border border-warning-200 rounded-lg p-5">
                    <h4 className="font-semibold text-warning-800 mb-3">Typical D-Rated Property Profile</h4>
                    <ul className="space-y-2 text-sm text-warning-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Built between 1950s-1980s</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Usually has cavity walls (often unfilled)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Double glazed (at least partially)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Some loft insulation (but often thin)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Gas central heating with older boiler</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <h4 className="font-semibold text-neutral-800 mb-3">Why D is a Good Starting Point</h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 text-success-600" />
                        <span>Only need 1-13 more points for C</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 text-success-600" />
                        <span>Low-hanging fruit improvements available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 text-success-600" />
                        <span>Rarely requires expensive solid wall work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 text-success-600" />
                        <span>Usually well within cost cap</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <InfoBox title="D Rating Score Range">
                  <p>
                    The D band spans 14 points (55-68). A property at 55 needs 14 points to reach C (69), while a property at 68 needs just 1 point. Your exact score, shown on your EPC certificate, determines how much work is needed.
                  </p>
                </InfoBox>
              </section>

              {/* Points Needed */}
              <section id="points-needed" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">How Many Points Do You Need?</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The minimum score for a C rating is 69 points. If your property currently scores in the D band, here is how many points you need to gain:
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 border border-neutral-200">
                      <div className="text-2xl font-bold text-primary-700">55</div>
                      <div className="text-sm text-neutral-600">Current score</div>
                      <div className="mt-2 text-lg font-semibold text-warning-600">+14 points needed</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-neutral-200">
                      <div className="text-2xl font-bold text-primary-700">60</div>
                      <div className="text-sm text-neutral-600">Current score</div>
                      <div className="mt-2 text-lg font-semibold text-warning-600">+9 points needed</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-neutral-200">
                      <div className="text-2xl font-bold text-primary-700">65</div>
                      <div className="text-sm text-neutral-600">Current score</div>
                      <div className="mt-2 text-lg font-semibold text-success-600">+4 points needed</div>
                    </div>
                  </div>
                </div>

                <TipBox title="Check Your Exact Score">
                  <p>
                    Your EPC certificate shows your exact numerical score, not just the letter grade. A score of 65 means you only need 4 more points - potentially achievable with just smart controls and draught proofing. A score of 55 requires more substantial work but is still very achievable.
                  </p>
                </TipBox>
              </section>

              {/* Most Cost-Effective Upgrades */}
              <section id="most-cost-effective" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Most Cost-Effective Upgrades for D to C</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    For D-rated properties, certain improvements offer exceptional value. These are the upgrades you should consider first:
                  </p>
                </div>

                <CostTable
                  title="Best Value Improvements for D to C"
                  items={[
                    {
                      improvement: 'Cavity wall insulation',
                      lowEstimate: 800,
                      highEstimate: 1500,
                      notes: '+8 to 12 EPC points. Best value if walls are unfilled.'
                    },
                    {
                      improvement: 'Loft insulation top-up (to 300mm)',
                      lowEstimate: 400,
                      highEstimate: 600,
                      notes: '+4 to 8 EPC points. Inexpensive, high impact.'
                    },
                    {
                      improvement: 'Smart heating controls',
                      lowEstimate: 200,
                      highEstimate: 400,
                      notes: '+2 to 4 EPC points. Quick win, easy install.'
                    },
                    {
                      improvement: 'Draught proofing',
                      lowEstimate: 200,
                      highEstimate: 400,
                      notes: '+2 to 4 EPC points. Low cost, noticeable impact.'
                    },
                    {
                      improvement: 'LED lighting upgrade',
                      lowEstimate: 100,
                      highEstimate: 200,
                      notes: '+1 to 2 EPC points. DIY possible.'
                    },
                    {
                      improvement: 'Hot water cylinder jacket',
                      lowEstimate: 20,
                      highEstimate: 50,
                      notes: '+1 to 2 EPC points. If you have a cylinder.'
                    },
                  ]}
                  footerNote="Points gained are estimates and vary by property. A professional EPC assessment will confirm actual improvements."
                />

                <KeyFactBox title="Cavity Walls: The Game Changer" icon={TrendingUp}>
                  <p>
                    If your D-rated property has unfilled cavity walls, cavity wall insulation alone could take you from D to C in a single improvement. At {formatCurrency(800)} to {formatCurrency(1500)} for 8-12 points, it offers the best value of any improvement. Check with a surveyor - the results may surprise you.
                  </p>
                </KeyFactBox>
              </section>

              {/* Improvement Journey Image */}
              <GeneratedImage
                imageId="d-to-c-upgrade-journey"
                alt="Tradesperson installing smart heating controls in a British rental property"
                prompt="A heating engineer installs a modern smart thermostat on the wall of a British home, replacing an old dial thermostat. The engineer wears professional workwear and uses appropriate tools. The living room setting shows a typical 1970s property with magnolia walls, a gas radiator below the thermostat, and patterned carpet - a property mid-way through its D to C upgrade journey. Focus on smart thermostat installation - a key quick win. Professional tradesperson doing quality work. Typical British rental property interior from 1970s-80s."
                width={1200}
                height={600}
              />

              {/* Typical Scenarios */}
              <section id="typical-scenarios" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Typical Upgrade Scenarios</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Here are three realistic scenarios showing what D to C upgrades look like in practice, including costs and expected outcomes.
                  </p>
                </div>

                {/* Scenario 1 */}
                <section id="scenario-1" className="mt-8">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-success-800 mb-4">
                      Scenario 1: 1970s Semi with Unfilled Cavity Walls
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-medium text-success-700 mb-2">Property Details</h4>
                        <ul className="text-sm text-success-700 space-y-1">
                          <li>3-bedroom semi-detached</li>
                          <li>Built 1972</li>
                          <li>Current EPC: D (score 58)</li>
                          <li>Cavity walls (unfilled)</li>
                          <li>Some loft insulation (100mm)</li>
                          <li>Double glazed</li>
                          <li>10-year-old gas boiler</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-success-700 mb-2">Recommended Improvements</h4>
                        <ul className="text-sm text-success-700 space-y-1">
                          <li>Cavity wall insulation: {formatCurrency(1000)} (+10 points)</li>
                          <li>Loft insulation top-up: {formatCurrency(500)} (+5 points)</li>
                          <li>Smart heating controls: {formatCurrency(300)} (+3 points)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-success-200">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <span className="text-sm text-success-600">Total Investment</span>
                          <div className="text-2xl font-bold text-success-800">{formatCurrency(1800)}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <EPCRatingBadge rating="D" size="sm" />
                          <span className="text-success-600 font-medium">58</span>
                          <ArrowRight className="h-4 w-4 text-success-400" />
                          <EPCRatingBadge rating="C" size="sm" />
                          <span className="text-success-600 font-medium">~76</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Scenario 2 */}
                <section id="scenario-2" className="mt-6">
                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-accent-800 mb-4">
                      Scenario 2: 1980s House with Partial Upgrades Already Done
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-medium text-accent-700 mb-2">Property Details</h4>
                        <ul className="text-sm text-accent-700 space-y-1">
                          <li>3-bedroom detached</li>
                          <li>Built 1985</li>
                          <li>Current EPC: D (score 62)</li>
                          <li>Cavity walls (already insulated)</li>
                          <li>Loft insulation (150mm)</li>
                          <li>Full double glazing</li>
                          <li>Old combi boiler (15+ years)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-accent-700 mb-2">Recommended Improvements</h4>
                        <ul className="text-sm text-accent-700 space-y-1">
                          <li>Loft insulation top-up: {formatCurrency(500)} (+4 points)</li>
                          <li>Smart heating controls: {formatCurrency(300)} (+3 points)</li>
                          <li>Draught proofing: {formatCurrency(300)} (+2 points)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-accent-200">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <span className="text-sm text-accent-600">Total Investment</span>
                          <div className="text-2xl font-bold text-accent-800">{formatCurrency(1100)}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <EPCRatingBadge rating="D" size="sm" />
                          <span className="text-accent-600 font-medium">62</span>
                          <ArrowRight className="h-4 w-4 text-accent-400" />
                          <EPCRatingBadge rating="C" size="sm" />
                          <span className="text-accent-600 font-medium">~71</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Scenario 3 */}
                <section id="scenario-3" className="mt-6">
                  <div className="bg-warning-50 border border-warning-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-warning-800 mb-4">
                      Scenario 3: Harder Case - Easy Wins Already Done
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-medium text-warning-700 mb-2">Property Details</h4>
                        <ul className="text-sm text-warning-700 space-y-1">
                          <li>2-bedroom end terrace</li>
                          <li>Built 1965</li>
                          <li>Current EPC: D (score 56)</li>
                          <li>Cavity walls (already insulated)</li>
                          <li>Loft fully insulated (300mm)</li>
                          <li>Full double glazing</li>
                          <li>8-year-old gas boiler (efficient)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-warning-700 mb-2">Recommended Improvements</h4>
                        <ul className="text-sm text-warning-700 space-y-1">
                          <li>Smart heating controls: {formatCurrency(300)} (+3 points)</li>
                          <li>Draught proofing: {formatCurrency(300)} (+2 points)</li>
                          <li>LED lighting: {formatCurrency(150)} (+2 points)</li>
                          <li>Floor insulation: {formatCurrency(1000)} (+3 points)</li>
                          <li>TRVs on radiators: {formatCurrency(200)} (+1 point)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-warning-200">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <span className="text-sm text-warning-600">Total Investment</span>
                          <div className="text-2xl font-bold text-warning-800">{formatCurrency(1950)}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <EPCRatingBadge rating="D" size="sm" />
                          <span className="text-warning-600 font-medium">56</span>
                          <ArrowRight className="h-4 w-4 text-warning-400" />
                          <EPCRatingBadge rating="C" size="sm" />
                          <span className="text-warning-600 font-medium">~67-69</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-warning-700 mt-4">
                      <strong>Note:</strong> This property is borderline. If the measures above don&apos;t quite reach C, the next option would be a new boiler ({formatCurrency(3000)}) which would guarantee reaching C but significantly increases total cost.
                    </p>
                  </div>
                </section>

                <TipBox title="When Boiler Replacement Makes Sense">
                  <p>
                    If your property scores in the low 60s or high 50s and quick wins are already done, check the age and efficiency of your boiler. If it is over 12-15 years old, replacing it with a new A-rated boiler ({formatCurrency(2500)} to {formatCurrency(4000)}) will often provide the points needed while also improving reliability and tenant satisfaction.
                  </p>
                </TipBox>
              </section>

              {/* Loft Insulation Image */}
              <GeneratedImage
                imageId="d-to-c-upgrade-loft-insulation"
                alt="Professional loft insulation installation in a British home"
                prompt="A loft space in a British home with freshly installed thick mineral wool insulation laid between and over the joists to the full 300mm depth. The yellow insulation is neatly fitted around pipes and cables, with the installer's work light illuminating the completed section. Rolls of unused insulation are stacked near the loft hatch, and the work represents a typical loft top-up that gains 4-8 EPC points. Realistic British loft space with proper insulation depth. Professional quality installation - neat and complete. Natural or work lighting showing the insulation clearly."
                width={1200}
                height={500}
              />

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Common Mistakes to Avoid</h2>

                <div className="space-y-4">
                  <WarningBox title="Over-spending on Unnecessary Upgrades">
                    <p>
                      Some landlords jump straight to expensive improvements like new boilers or windows without checking whether cheaper measures would suffice. Always start with the lowest-cost options and work up only if needed.
                    </p>
                  </WarningBox>

                  <WarningBox title="Not Checking Existing Insulation Levels">
                    <p>
                      Before paying for new insulation, check what you already have. Many properties have some loft insulation but not enough. Topping up from 100mm to 300mm costs far less than a full installation and can still deliver significant points.
                    </p>
                  </WarningBox>

                  <WarningBox title="Assuming Cavity Walls Are Already Filled">
                    <p>
                      Even properties built in the 1960s-1980s often have unfilled cavity walls. A borescope survey ({formatCurrency(50)} to {formatCurrency(100)}) can confirm whether your walls are filled. If not, this is almost certainly your best investment.
                    </p>
                  </WarningBox>

                  <WarningBox title="Rushing into Major Works">
                    <p>
                      For D-rated properties, patience pays off. Get a proper EPC assessment, understand your exact score, and target improvements specifically at the points deficit. You may need far less work than you expect.
                    </p>
                  </WarningBox>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Your Next Steps</h2>

                <ol className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">1</span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Find your exact EPC score</h4>
                      <p className="text-neutral-600 text-sm">Check your existing EPC certificate or search the EPC register. Note the numerical score, not just the letter grade.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">2</span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Check your wall construction</h4>
                      <p className="text-neutral-600 text-sm">Determine if you have cavity or solid walls, and whether cavity walls are already insulated.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">3</span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Use our calculator</h4>
                      <p className="text-neutral-600 text-sm">Get a personalised estimate based on your property details and current EPC.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">4</span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Get quotes for targeted improvements</h4>
                      <p className="text-neutral-600 text-sm">Based on your gap to C, obtain quotes only for the improvements you actually need.</p>
                    </div>
                  </li>
                </ol>

                {/* Calculator CTA */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-shrink-0">
                      <Calculator className="h-12 w-12 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 text-lg mb-1">Calculate Your D to C Costs</h3>
                      <p className="text-neutral-600">
                        Enter your property details and current EPC to see exactly what improvements you need and what they will cost.
                      </p>
                    </div>
                    <Link href="/tools/cost-calculator">
                      <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                        Use Calculator
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Sources */}
              <section className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Sources</h3>
                <div className="space-y-2">
                  <SourceCitation
                    sourceName="Energy Saving Trust"
                    documentTitle="Home insulation and energy efficiency guides"
                    url="https://energysavingtrust.org.uk/energy-at-home/heating-your-home/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Energy Performance Certificates"
                    url="https://www.gov.uk/find-energy-certificate"
                    accessedDate="January 2026"
                  />
                </div>
              </section>

              {/* Related Content */}
              <section className="mt-12">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <RelatedContentCard
                    title="Complete Upgrade Cost Guide"
                    excerpt="Comprehensive breakdown of all improvement costs by type and property."
                    href="/costs"
                    category="Costs"
                    readingTime={18}
                  />
                  <RelatedContentCard
                    title="Cost Cap and Exemptions"
                    excerpt="Understanding when the £10,000 cap applies and how exemptions work."
                    href="/regulations/cost-cap-exemptions"
                    category="Regulations"
                    readingTime={12}
                  />
                  <RelatedContentCard
                    title="1970s-1980s Property Guide"
                    excerpt="Specific upgrade strategies for properties built in this era."
                    href="/property-types/1970s-1980s"
                    category="Property Guide"
                    readingTime={14}
                  />
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <Sidebar
              tableOfContents={tableOfContents}
              relatedArticles={relatedArticles}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
