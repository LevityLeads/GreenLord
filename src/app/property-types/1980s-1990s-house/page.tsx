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
  Zap,
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
  title: '1980s-1990s House EPC Guide | Modern Property Upgrades | GreenLord',
  description:
    'Complete guide to improving EPC ratings in 1980s and 1990s houses. Already have cavity walls and double glazing - often just need boiler upgrades and insulation top-ups to reach EPC C.',
  openGraph: {
    title: '1980s-1990s House EPC Guide | GreenLord',
    description:
      'The easiest properties to improve. Many 80s-90s houses can reach EPC C with just a boiler upgrade and insulation top-ups.',
    url: `${SITE_CONFIG.url}/property-types/1980s-1990s-house`,
    type: 'article',
  },
};

const tocItems = [
  { id: 'characteristics', text: 'Property Characteristics', level: 2 as const },
  { id: 'advantages', text: 'Built-In Advantages', level: 2 as const },
  { id: 'challenges', text: 'Common Issues', level: 2 as const },
  { id: 'upgrades', text: 'Recommended Upgrades', level: 2 as const },
  { id: 'upgrade-priority', text: 'Priority Order', level: 3 as const },
  { id: 'costs', text: 'Cost Estimates', level: 2 as const },
  { id: 'quick-wins', text: 'Quick Win Improvements', level: 2 as const },
  { id: 'example-pathway', text: 'Example Upgrade Pathway', level: 2 as const },
  { id: 'next-steps', text: 'Next Steps', level: 2 as const },
];

export default function ModernHousePage() {
  return (
    <>
      <PageHeader
        title="1980s-1990s House EPC Guide"
        subtitle="Good news for landlords: these properties often need only minor improvements to reach EPC C, making them the easiest and cheapest to upgrade."
        breadcrumbs={[
          { name: 'Property Guides', url: `${SITE_CONFIG.url}/property-types` },
          { name: '1980s-1990s House', url: `${SITE_CONFIG.url}/property-types/1980s-1990s-house` },
        ]}
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader
                title="1980s-1990s House EPC Upgrade Guide"
                publishedDate="2026-01-15"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={10}
                subtitle="Why these properties are often the cheapest and easiest to bring up to EPC C standard"
              />

              {/* Hero Image */}
              <ImagePlaceholder
                alt="Typical 1980s-1990s house with cavity walls and double glazing"
                description="A photograph of a typical 1980s or 1990s house showing characteristic features: brick and render exterior, uPVC double glazed windows, integral garage, and modern roof tiles. The image should show the more standardised construction of this era."
                width={800}
                height={450}
                priority
                instructions={[
                  'Show a genuine UK 1980s-1990s house, semi-detached or detached',
                  'Capture characteristic features: uPVC windows, modern brickwork, integral garage',
                  'Daylight conditions, showing the full facade',
                  'Avoid showing house numbers or identifiable personal information',
                  'Demonstrate the standardised construction typical of this era',
                ]}
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Houses built during the 1980s and 1990s represent some of the best news for
                  landlords facing EPC compliance requirements. These properties were built to
                  building regulations that already required cavity wall insulation, double glazing,
                  and reasonable levels of loft insulation. As a result, many already achieve
                  EPC ratings of D or even low C.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  For landlords with 80s-90s properties, the path to EPC C is often straightforward
                  and affordable. Many will only need a boiler upgrade, some insulation top-ups,
                  and minor improvements to reach compliance, with total costs typically ranging
                  from just {formatCurrency(1500)} to {formatCurrency(5000)}.
                </p>
              </div>

              <KeyFactBox title="Typical 1980s-1990s House EPC Profile" icon={Thermometer}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm">Starting Rating:</span>
                  <EPCRatingBadge rating="D" size="md" showScoreRange />
                </div>
                <p className="text-sm">
                  Most 1980s-1990s houses score between 60-75 EPC points (rating C or D).
                  Many are already close to the 69-point threshold needed for EPC C, making
                  compliance significantly easier than older properties.
                </p>
              </KeyFactBox>

              {/* Property Characteristics */}
              <section id="characteristics" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Property Characteristics
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Properties from this era benefit from improved building standards and modern
                    construction techniques. Understanding these advantages helps you identify
                    which improvements are actually needed.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary-600" />
                        Wall Construction
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                          <span>Cavity walls with built-in insulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                          <span>Typically 50mm cavity insulation from construction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                          <span>U-value around 0.6-1.0 W/m2K (reasonable)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 mt-0.5">-</span>
                          <span>May benefit from cavity top-up if original insulation has settled</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card variant="outlined">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary-600" />
                        Standard Features
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                          <span>Double glazing (usually original uPVC)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                          <span>Loft insulation (typically 100mm from construction)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                          <span>Concrete ground floors (less draughty)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5" />
                          <span>Standard ceiling heights (2.4m typical)</span>
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Built-In Advantages */}
              <section id="advantages" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Built-In Advantages
                </h2>

                <InfoBox title="Why 80s-90s Homes Start Ahead">
                  <p className="mb-3">
                    These properties benefit from building regulations introduced in the 1970s
                    and strengthened throughout the 1980s. Key advantages include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Cavity wall insulation was required from 1976 onwards</li>
                    <li>Double glazing became standard in the late 1980s</li>
                    <li>Loft insulation requirements increased to 100mm</li>
                    <li>Central heating systems designed for the property</li>
                  </ul>
                </InfoBox>

                <div className="grid gap-4 md:grid-cols-3 mt-6">
                  <Card variant="default">
                    <CardBody className="text-center">
                      <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle2 className="w-6 h-6 text-success-600" />
                      </div>
                      <h3 className="font-semibold text-primary-800 mb-2">No Wall Insulation Needed</h3>
                      <p className="text-sm text-neutral-600">
                        Cavity walls already insulated, avoiding the biggest expense faced by older properties.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="default">
                    <CardBody className="text-center">
                      <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle2 className="w-6 h-6 text-success-600" />
                      </div>
                      <h3 className="font-semibold text-primary-800 mb-2">Double Glazing Present</h3>
                      <p className="text-sm text-neutral-600">
                        Original double glazing may need upgrading but provides a reasonable baseline.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="default">
                    <CardBody className="text-center">
                      <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle2 className="w-6 h-6 text-success-600" />
                      </div>
                      <h3 className="font-semibold text-primary-800 mb-2">Lower Upgrade Costs</h3>
                      <p className="text-sm text-neutral-600">
                        Typically {formatCurrency(1500)}-{formatCurrency(5000)} to reach EPC C vs {formatCurrency(10000)}+ for older homes.
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </section>

              {/* Common Issues */}
              <section id="challenges" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Common Issues
                </h2>

                <div className="prose prose-lg max-w-none mb-4">
                  <p className="text-neutral-700 leading-relaxed">
                    While 80s-90s houses have good fundamentals, there are still common issues
                    that prevent them from reaching EPC C. The good news is these are typically
                    straightforward and affordable to address.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      1. Ageing Boilers
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Many properties still have their original boilers from the 1980s-1990s,
                      or early replacements from the 2000s. These older non-condensing boilers
                      are significantly less efficient than modern condensing units. Replacing
                      a 25+ year old boiler can gain 5-10 EPC points alone.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      2. Loft Insulation Below Current Standards
                    </h3>
                    <p className="text-sm text-neutral-600">
                      While these properties have loft insulation, the original 100mm depth
                      is below the current recommended 270mm. Topping up loft insulation is
                      one of the cheapest improvements available and can add 4-8 EPC points.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      3. No Heating Controls
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Many older heating systems lack modern controls like programmable
                      thermostats and thermostatic radiator valves (TRVs). Adding smart
                      heating controls is a cost-effective way to gain 2-4 EPC points.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      4. Original Double Glazing Degradation
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Double glazing from the 80s-90s may have failed seals (visible as misting)
                      or be early low-performance units. While replacement is not always necessary,
                      upgrading to modern A-rated units can improve EPC scores. Failed units should
                      be replaced regardless.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800 mb-2">
                      5. Hot Water Cylinder Insulation
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Properties with hot water cylinders may have thin or no cylinder jackets.
                      Adding or upgrading cylinder insulation is a very cheap improvement that
                      can gain 1-2 EPC points.
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
                    The upgrade strategy for 80s-90s houses is refreshingly simple: focus on
                    the low-cost, high-impact improvements first. Many properties will reach
                    EPC C without needing any major structural work.
                  </p>
                </div>

                <section id="upgrade-priority" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">
                    Priority Order for Maximum Impact
                  </h3>

                  <CostTable
                    title="1980s-1990s House Upgrade Costs and EPC Impact"
                    items={[
                      {
                        improvement: 'Loft Insulation Top-Up (to 270mm)',
                        lowEstimate: 300,
                        highEstimate: 500,
                        notes: 'Usually just needs topping up. 4-8 EPC points.',
                      },
                      {
                        improvement: 'Smart Heating Controls + TRVs',
                        lowEstimate: 200,
                        highEstimate: 400,
                        notes: 'High impact for low cost. 2-4 EPC points.',
                      },
                      {
                        improvement: 'LED Lighting Throughout',
                        lowEstimate: 80,
                        highEstimate: 150,
                        notes: 'Simple DIY improvement. 1-2 EPC points.',
                      },
                      {
                        improvement: 'Hot Water Cylinder Jacket',
                        lowEstimate: 15,
                        highEstimate: 30,
                        notes: 'If cylinder present. 1-2 EPC points.',
                      },
                      {
                        improvement: 'Condensing Boiler Upgrade',
                        lowEstimate: 2000,
                        highEstimate: 3500,
                        notes: 'If boiler is 15+ years old. 5-10 EPC points.',
                      },
                      {
                        improvement: 'Cavity Wall Top-Up (if needed)',
                        lowEstimate: 400,
                        highEstimate: 800,
                        notes: 'Only if original insulation has settled. 2-4 EPC points.',
                      },
                    ]}
                    showTotal
                    footerNote="Most 80s-90s houses will reach EPC C with just the first 4-5 items on this list. Total costs typically range from 1,500 to 5,000."
                  />

                  <TipBox title="Often Just a Boiler and Top-Ups">
                    <p className="mb-2">
                      Many 80s-90s properties only need a combination of:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Loft insulation topped up from 100mm to 270mm</li>
                      <li>Smart thermostat and TRVs fitted</li>
                      <li>LED lighting throughout</li>
                      <li>A new condensing boiler (if the existing one is old)</li>
                    </ul>
                    <p className="mt-2">
                      This combination typically costs {formatCurrency(2500)}-{formatCurrency(4500)} and is often enough to reach EPC C.
                    </p>
                  </TipBox>
                </section>
              </section>

              {/* Cost Estimates */}
              <section id="costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">Cost Estimates</h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    The excellent news for landlords with 80s-90s properties is that upgrade costs
                    are typically a fraction of those for older buildings. Here are realistic
                    cost ranges:
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at D (62 points)</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(800)} - {formatCurrency(2000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Quick wins only: loft top-up, controls, LEDs. Often enough to reach C.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at Low D (55 points)</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(2500)} - {formatCurrency(4500)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        Quick wins plus boiler upgrade. Reliable path to solid C rating.
                      </p>
                    </CardBody>
                  </Card>

                  <Card variant="highlighted">
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">Starting at E (48 points)</h3>
                      <p className="text-2xl font-bold text-primary-700 mb-2">
                        {formatCurrency(3500)} - {formatCurrency(5000)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        All improvements including potential glazing work. Still very affordable.
                      </p>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="Cost Cap Usually Not Relevant">
                  <p>
                    Unlike Victorian and Edwardian properties, landlords of 80s-90s houses will
                    rarely need to consider the {formatCurrency(KEY_DATES.costCap)} cost cap
                    exemption. The total cost of improvements is typically well below this
                    threshold, and reaching EPC C is usually achievable with modest investment.
                  </p>
                </InfoBox>
              </section>

              {/* Quick Win Improvements */}
              <section id="quick-wins" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">
                  Quick Win Improvements
                </h2>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-neutral-700 leading-relaxed">
                    These low-cost improvements can often be completed in a single day and may
                    be enough on their own to push a D-rated property into C territory:
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card variant="default">
                    <CardBody>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                          <span className="text-success-700 font-bold">1</span>
                        </div>
                        <h3 className="font-semibold text-primary-800">Loft Insulation Top-Up</h3>
                      </div>
                      <p className="text-sm text-neutral-600 mb-2">
                        Add mineral wool rolls on top of existing insulation to reach 270mm total depth.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">Cost: {formatCurrency(300)}-{formatCurrency(500)}</span>
                        <span className="text-success-600 font-medium">+4-8 points</span>
                      </div>
                    </CardBody>
                  </Card>

                  <Card variant="default">
                    <CardBody>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                          <span className="text-success-700 font-bold">2</span>
                        </div>
                        <h3 className="font-semibold text-primary-800">Smart Thermostat</h3>
                      </div>
                      <p className="text-sm text-neutral-600 mb-2">
                        Replace basic timer with a smart thermostat for better heating control.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">Cost: {formatCurrency(150)}-{formatCurrency(300)}</span>
                        <span className="text-success-600 font-medium">+2-3 points</span>
                      </div>
                    </CardBody>
                  </Card>

                  <Card variant="default">
                    <CardBody>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                          <span className="text-success-700 font-bold">3</span>
                        </div>
                        <h3 className="font-semibold text-primary-800">TRVs on All Radiators</h3>
                      </div>
                      <p className="text-sm text-neutral-600 mb-2">
                        Fit thermostatic radiator valves to enable room-by-room temperature control.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">Cost: {formatCurrency(100)}-{formatCurrency(200)}</span>
                        <span className="text-success-600 font-medium">+1-2 points</span>
                      </div>
                    </CardBody>
                  </Card>

                  <Card variant="default">
                    <CardBody>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                          <span className="text-success-700 font-bold">4</span>
                        </div>
                        <h3 className="font-semibold text-primary-800">LED Lighting</h3>
                      </div>
                      <p className="text-sm text-neutral-600 mb-2">
                        Replace all remaining halogen and CFL bulbs with LED equivalents.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">Cost: {formatCurrency(80)}-{formatCurrency(150)}</span>
                        <span className="text-success-600 font-medium">+1-2 points</span>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <TipBox title="DIY Potential">
                  <p>
                    Many of these improvements can be done by competent DIYers, further reducing
                    costs. Loft insulation top-up, LED replacement, and even fitting TRVs are
                    all achievable weekend projects. Only boiler replacement and some electrical
                    work require qualified professionals.
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
                    Here is a realistic example of how a typical 1980s house might progress
                    from EPC rating D to C with minimal investment:
                  </p>
                </div>

                <Card variant="outlined" className="mb-6">
                  <CardBody>
                    <h3 className="font-semibold text-primary-800 mb-4">
                      Case Study: 3-Bed 1987 Semi-Detached, Birmingham
                    </h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Starting</p>
                        <EPCRatingBadge rating="D" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">58 points</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                      <div className="text-center">
                        <p className="text-sm text-neutral-600 mb-1">Target</p>
                        <EPCRatingBadge rating="C" size="lg" />
                        <p className="text-sm text-neutral-500 mt-1">69 points</p>
                      </div>
                      <div className="text-sm text-neutral-600 ml-4">
                        <strong>11 points needed</strong>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Loft insulation topped up to 270mm</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+5 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(380)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Smart thermostat installed</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(220)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>TRVs fitted to all radiators</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(140)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>LED lighting throughout</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-primary-700">+2 points</span>
                          <span className="text-sm text-neutral-500 ml-2">{formatCurrency(95)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-success-600" />
                          <span>Hot water cylinder jacket upgraded</span>
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
                          <span className="ml-2 text-primary-700 font-medium">{formatCurrency(860)}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <InfoBox title="No Boiler Needed in This Case">
                  <p>
                    Note that this property reached EPC C without needing a boiler replacement.
                    The existing boiler was a 2008 condensing model that still performed adequately.
                    If the boiler had been an older non-condensing unit, replacement would have
                    added approximately {formatCurrency(2500)}-{formatCurrency(3500)} but also
                    gained an additional 5-8 points.
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
                        1. Check Your Current EPC
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Your 80s-90s property may already be rated C or high D. Check your
                        existing EPC to see exactly how many points you need.
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
                        2. Check Your Loft Insulation
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Measure your current loft insulation depth. If it is less than 270mm,
                        this is likely your easiest and cheapest improvement.
                      </p>
                      <Link
                        href="/improvements/loft-insulation"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Loft insulation guide
                      </Link>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        3. Check Your Boiler Age
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        If your boiler is 15+ years old, upgrading to a modern condensing
                        unit may be a worthwhile investment that also improves your EPC.
                      </p>
                      <Link
                        href="/improvements/boiler-upgrade"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Boiler upgrade guide
                      </Link>
                    </CardBody>
                  </Card>

                  <Card variant="default" hoverable>
                    <CardBody>
                      <h3 className="font-semibold text-primary-800 mb-2">
                        4. Calculate Your Costs
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        Use our calculator for a personalised estimate. You may be pleasantly
                        surprised at how affordable compliance is for your property.
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
                    documentTitle="Home insulation"
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
                    sourceName="Which?"
                    documentTitle="Boiler replacement costs and savings"
                    url="https://www.which.co.uk/reviews/boilers/article/boiler-replacement-costs"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="BRE"
                    documentTitle="The Housing Stock of the United Kingdom"
                    url="https://www.bre.co.uk/page.jsp?id=3282"
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
                    <h3 className="font-semibold text-primary-800 mb-3">Good News!</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      80s-90s houses are typically the cheapest to upgrade. Get a quick estimate
                      for your property.
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
              title="1930s Semi-Detached Guide"
              excerpt="Cavity wall properties that may need more work than 80s-90s homes but are still relatively affordable to upgrade."
              href="/property-types/1930s-semi"
              category="Property Guide"
              readingTime={12}
            />
            <RelatedContentCard
              title="Boiler Upgrade Guide"
              excerpt="Everything you need to know about upgrading to a modern condensing boiler for EPC improvements."
              href="/improvements/boiler-upgrade"
              category="Improvements"
              readingTime={8}
            />
            <RelatedContentCard
              title="Smart Heating Controls"
              excerpt="How smart thermostats and TRVs can improve your EPC rating and save energy costs."
              href="/improvements/heating-controls"
              category="Improvements"
              readingTime={6}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
