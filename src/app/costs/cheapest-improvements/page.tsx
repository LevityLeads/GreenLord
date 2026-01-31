import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  PoundSterling,
  Zap,
  Wrench,
  Star,
} from 'lucide-react';
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
import { ImagePlaceholder } from '@/components/content/ImagePlaceholder';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cheapest EPC Improvements for Landlords | £ Per Point | GreenLord',
  description:
    'Complete ranking of EPC improvements by cost-effectiveness. Find the best value upgrades measured in pounds per EPC point gained. Quick wins under £500 and strategic investments.',
  openGraph: {
    title: 'Cheapest EPC Improvements Ranked by Cost Per Point',
    description:
      'Every EPC improvement ranked by value for money. Quick wins, medium investments, and when to consider major upgrades.',
    type: 'article',
  },
};

const tableOfContents = [
  { id: 'cost-per-point-explained', title: 'Cost Per Point Explained', level: 2 },
  { id: 'complete-ranking', title: 'Complete Cost-Effectiveness Ranking', level: 2 },
  { id: 'quick-wins', title: 'Quick Wins (Under £500)', level: 2 },
  { id: 'medium-investments', title: 'Medium Investments (£500-£2,000)', level: 2 },
  { id: 'major-investments', title: 'Major Investments (£2,000+)', level: 2 },
  { id: 'diy-vs-professional', title: 'DIY vs Professional Installation', level: 2 },
  { id: 'quality-matters', title: 'When Cheap Is Not Always Best', level: 2 },
  { id: 'strategic-approach', title: 'Strategic Approach', level: 2 },
  { id: 'next-steps', title: 'Your Next Steps', level: 2 },
];

const relatedArticles = [
  {
    title: 'Complete Upgrade Cost Guide',
    href: '/costs',
    description: 'Full breakdown of all improvement costs.',
  },
  {
    title: 'D to C Upgrade Costs',
    href: '/costs/d-to-c-upgrade',
    description: 'Specific guidance for D-rated properties.',
  },
  {
    title: 'E to C Upgrade Costs',
    href: '/costs/e-to-c-upgrade',
    description: 'Major upgrade pathways for E-rated properties.',
  },
];

export default function CheapestImprovementsPage() {
  return (
    <>
      <PageHeader
        title="Cheapest EPC Improvements Ranked"
        subtitle="Every improvement ranked by pounds per EPC point. Make every pound count toward compliance."
        breadcrumbs={[
          { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
          { name: 'Cheapest Improvements', url: `${SITE_CONFIG.url}/costs/cheapest-improvements` },
        ]}
      >
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <PoundSterling className="h-4 w-4" />
            Cost per point analysis
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            Updated January 2026
          </span>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1 max-w-4xl">
              <ArticleHeader
                title="Cheapest EPC Improvements: Complete Cost-Effectiveness Ranking"
                publishedDate="2025-10-20"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={10}
                subtitle="Maximise your EPC improvement budget by prioritising the best value upgrades"
              />

              {/* Hero Image */}
              <ImagePlaceholder
                alt="Infographic showing EPC improvements ranked by cost-effectiveness"
                description="A clear visual ranking of common EPC improvements showing their cost per point, from most cost-effective (green) to least cost-effective (red). Should look like a leaderboard or ranking chart with improvement names, costs, and efficiency ratings."
                width={1200}
                height={630}
                instructions={[
                  'Leaderboard or bar chart style visual',
                  'Show 8-10 improvements ranked',
                  'Use colour coding (green = best value, red = expensive)',
                  'Include cost and points for each item',
                  'Clear, scannable design',
                ]}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="lead text-xl text-neutral-700">
                  Not all EPC improvements offer the same value for money. Understanding the cost per EPC point helps you prioritise improvements that deliver the biggest rating boost for your budget. This guide ranks every common improvement by cost-effectiveness.
                </p>

                <p>
                  The difference in value can be stark: a hot water cylinder jacket costs around {formatCurrency(35)} per EPC point, while triple glazing can cost over {formatCurrency(1000)} per point. By starting with the most cost-effective improvements, you can often reach your target rating without expensive major works.
                </p>
              </div>

              <KeyFactBox title="The Smart Landlord Approach" icon={TrendingUp}>
                <p className="mb-2">
                  Work through improvements in order of cost-effectiveness. Many D-rated properties can reach C with just the top 5 cheapest improvements, for under {formatCurrency(2000)} total.
                </p>
                <p className="text-sm">
                  For E-rated properties, complete all quick wins first before considering expensive options like wall insulation.
                </p>
              </KeyFactBox>

              {/* Cost Per Point Explained */}
              <section id="cost-per-point-explained" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Cost Per Point Explained
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Cost per EPC point is calculated by dividing the total installation cost by the typical number of EPC points gained. This metric allows you to compare very different improvements on a level playing field.
                  </p>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-4">Example Calculation</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-success-50 border border-success-200 rounded-lg p-4">
                      <h5 className="font-medium text-success-800 mb-2">Cavity Wall Insulation</h5>
                      <p className="text-sm text-success-700 mb-2">
                        Cost: {formatCurrency(1200)} / Points: 10 = <strong>{formatCurrency(120)}/point</strong>
                      </p>
                      <p className="text-xs text-success-600">Excellent value</p>
                    </div>
                    <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                      <h5 className="font-medium text-warning-800 mb-2">Double Glazing</h5>
                      <p className="text-sm text-warning-700 mb-2">
                        Cost: {formatCurrency(6000)} / Points: 7 = <strong>{formatCurrency(857)}/point</strong>
                      </p>
                      <p className="text-xs text-warning-600">Lower value for EPC purposes</p>
                    </div>
                  </div>
                </div>

                <InfoBox title="Points Vary by Property">
                  <p>
                    The EPC points gained from any improvement depend on your specific property. A loft insulation top-up might gain 8 points in one property but only 4 in another. The figures in this guide are typical averages. Your actual results may vary.
                  </p>
                </InfoBox>
              </section>

              {/* Complete Ranking */}
              <section id="complete-ranking" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Complete Cost-Effectiveness Ranking
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Here is every common EPC improvement ranked by cost per point, from most to least cost-effective. Use this table to plan your upgrade sequence.
                  </p>
                </div>

                <div className="overflow-hidden rounded-lg border border-neutral-200 mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-50 text-left">
                          <th className="px-4 py-3 font-semibold text-primary-800">Rank</th>
                          <th className="px-4 py-3 font-semibold text-primary-800">Improvement</th>
                          <th className="px-4 py-3 font-semibold text-primary-800 text-right">Cost Range</th>
                          <th className="px-4 py-3 font-semibold text-primary-800 text-center">EPC Points</th>
                          <th className="px-4 py-3 font-semibold text-primary-800 text-right">£/Point</th>
                          <th className="px-4 py-3 font-semibold text-primary-800 text-center">Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-neutral-100 bg-success-50">
                          <td className="px-4 py-3 font-bold text-success-700">1</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Hot water cylinder jacket</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(20)}-{formatCurrency(50)}</td>
                          <td className="px-4 py-3 text-center">1-2</td>
                          <td className="px-4 py-3 text-right font-semibold text-success-700">{formatCurrency(25)}-{formatCurrency(35)}</td>
                          <td className="px-4 py-3 text-center"><Star className="h-5 w-5 text-success-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-success-50">
                          <td className="px-4 py-3 font-bold text-success-700">2</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Pipe insulation</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(50)}-{formatCurrency(150)}</td>
                          <td className="px-4 py-3 text-center">1-2</td>
                          <td className="px-4 py-3 text-right font-semibold text-success-700">{formatCurrency(50)}-{formatCurrency(75)}</td>
                          <td className="px-4 py-3 text-center"><Star className="h-5 w-5 text-success-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-success-50">
                          <td className="px-4 py-3 font-bold text-success-700">3</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Loft insulation top-up</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(400)}-{formatCurrency(600)}</td>
                          <td className="px-4 py-3 text-center">4-8</td>
                          <td className="px-4 py-3 text-right font-semibold text-success-700">{formatCurrency(65)}-{formatCurrency(100)}</td>
                          <td className="px-4 py-3 text-center"><Star className="h-5 w-5 text-success-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-success-50">
                          <td className="px-4 py-3 font-bold text-success-700">4</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Draught proofing</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(200)}-{formatCurrency(400)}</td>
                          <td className="px-4 py-3 text-center">2-4</td>
                          <td className="px-4 py-3 text-right font-semibold text-success-700">{formatCurrency(75)}-{formatCurrency(100)}</td>
                          <td className="px-4 py-3 text-center"><Star className="h-5 w-5 text-success-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-success-50">
                          <td className="px-4 py-3 font-bold text-success-700">5</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">LED lighting</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(100)}-{formatCurrency(200)}</td>
                          <td className="px-4 py-3 text-center">1-2</td>
                          <td className="px-4 py-3 text-right font-semibold text-success-700">{formatCurrency(75)}-{formatCurrency(100)}</td>
                          <td className="px-4 py-3 text-center"><Star className="h-5 w-5 text-success-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-success-50">
                          <td className="px-4 py-3 font-bold text-success-700">6</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Cavity wall insulation</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(800)}-{formatCurrency(1500)}</td>
                          <td className="px-4 py-3 text-center">8-12</td>
                          <td className="px-4 py-3 text-right font-semibold text-success-700">{formatCurrency(100)}-{formatCurrency(125)}</td>
                          <td className="px-4 py-3 text-center"><Star className="h-5 w-5 text-success-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-accent-50">
                          <td className="px-4 py-3 font-bold text-accent-700">7</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Smart heating controls</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(200)}-{formatCurrency(400)}</td>
                          <td className="px-4 py-3 text-center">2-4</td>
                          <td className="px-4 py-3 text-right font-semibold text-accent-700">{formatCurrency(100)}-{formatCurrency(150)}</td>
                          <td className="px-4 py-3 text-center"><CheckCircle className="h-5 w-5 text-accent-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-accent-50">
                          <td className="px-4 py-3 font-bold text-accent-700">8</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">TRVs (radiator valves)</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(150)}-{formatCurrency(300)}</td>
                          <td className="px-4 py-3 text-center">1-2</td>
                          <td className="px-4 py-3 text-right font-semibold text-accent-700">{formatCurrency(100)}-{formatCurrency(200)}</td>
                          <td className="px-4 py-3 text-center"><CheckCircle className="h-5 w-5 text-accent-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-accent-50">
                          <td className="px-4 py-3 font-bold text-accent-700">9</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Floor insulation (suspended)</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(800)}-{formatCurrency(1500)}</td>
                          <td className="px-4 py-3 text-center">2-4</td>
                          <td className="px-4 py-3 text-right font-semibold text-accent-700">{formatCurrency(300)}-{formatCurrency(500)}</td>
                          <td className="px-4 py-3 text-center"><CheckCircle className="h-5 w-5 text-accent-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-warning-50">
                          <td className="px-4 py-3 font-bold text-warning-700">10</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">New condensing boiler</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(2500)}-{formatCurrency(4000)}</td>
                          <td className="px-4 py-3 text-center">5-10</td>
                          <td className="px-4 py-3 text-right font-semibold text-warning-700">{formatCurrency(350)}-{formatCurrency(500)}</td>
                          <td className="px-4 py-3 text-center"><AlertTriangle className="h-5 w-5 text-warning-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-warning-50">
                          <td className="px-4 py-3 font-bold text-warning-700">11</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Air source heat pump*</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(3500)}-{formatCurrency(7500)}</td>
                          <td className="px-4 py-3 text-center">10-20</td>
                          <td className="px-4 py-3 text-right font-semibold text-warning-700">{formatCurrency(350)}-{formatCurrency(500)}</td>
                          <td className="px-4 py-3 text-center"><AlertTriangle className="h-5 w-5 text-warning-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-warning-50">
                          <td className="px-4 py-3 font-bold text-warning-700">12</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Solar PV (3-4kW)</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(5000)}-{formatCurrency(8000)}</td>
                          <td className="px-4 py-3 text-center">5-10</td>
                          <td className="px-4 py-3 text-right font-semibold text-warning-700">{formatCurrency(700)}-{formatCurrency(1000)}</td>
                          <td className="px-4 py-3 text-center"><AlertTriangle className="h-5 w-5 text-warning-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-danger-50">
                          <td className="px-4 py-3 font-bold text-danger-700">13</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Double glazing (full house)</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(4000)}-{formatCurrency(8000)}</td>
                          <td className="px-4 py-3 text-center">5-10</td>
                          <td className="px-4 py-3 text-right font-semibold text-danger-700">{formatCurrency(700)}-{formatCurrency(1000)}</td>
                          <td className="px-4 py-3 text-center"><AlertTriangle className="h-5 w-5 text-danger-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-danger-50">
                          <td className="px-4 py-3 font-bold text-danger-700">14</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Internal wall insulation</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(8000)}-{formatCurrency(14000)}</td>
                          <td className="px-4 py-3 text-center">10-15</td>
                          <td className="px-4 py-3 text-right font-semibold text-danger-700">{formatCurrency(700)}-{formatCurrency(1000)}</td>
                          <td className="px-4 py-3 text-center"><AlertTriangle className="h-5 w-5 text-danger-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-danger-50">
                          <td className="px-4 py-3 font-bold text-danger-700">15</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">External wall insulation</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(10000)}-{formatCurrency(20000)}</td>
                          <td className="px-4 py-3 text-center">12-18</td>
                          <td className="px-4 py-3 text-right font-semibold text-danger-700">{formatCurrency(800)}-{formatCurrency(1200)}</td>
                          <td className="px-4 py-3 text-center"><AlertTriangle className="h-5 w-5 text-danger-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-danger-50">
                          <td className="px-4 py-3 font-bold text-danger-700">16</td>
                          <td className="px-4 py-3 text-neutral-900 font-medium">Triple glazing</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(6000)}-{formatCurrency(12000)}</td>
                          <td className="px-4 py-3 text-center">6-12</td>
                          <td className="px-4 py-3 text-right font-semibold text-danger-700">{formatCurrency(900)}-{formatCurrency(1200)}</td>
                          <td className="px-4 py-3 text-center"><AlertTriangle className="h-5 w-5 text-danger-600 mx-auto" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-2">
                    <p className="text-xs text-neutral-500 italic">
                      *Heat pump cost shown after BUS grant of up to {formatCurrency(7500)}. Star = essential quick win, Check = good value, Triangle = consider carefully.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quick Wins */}
              <section id="quick-wins" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Quick Wins (Under {formatCurrency(500)})
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    These improvements should be completed first on almost every property. They offer the best value and often require minimal disruption. Combined, they can gain 6-12 EPC points for under {formatCurrency(800)}.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <Star className="h-6 w-6 text-success-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-success-800 mb-2">Hot Water Cylinder Jacket</h4>
                        <p className="text-sm text-success-700 mb-2">
                          <strong>Cost:</strong> {formatCurrency(20)}-{formatCurrency(50)} | <strong>Points:</strong> 1-2 | <strong>£/Point:</strong> ~{formatCurrency(30)}
                        </p>
                        <p className="text-sm text-success-600">
                          If you have an uninsulated hot water cylinder, this is the single best value improvement available. Takes 10 minutes to fit and can be DIY.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <Star className="h-6 w-6 text-success-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-success-800 mb-2">Pipe Insulation</h4>
                        <p className="text-sm text-success-700 mb-2">
                          <strong>Cost:</strong> {formatCurrency(50)}-{formatCurrency(150)} | <strong>Points:</strong> 1-2 | <strong>£/Point:</strong> ~{formatCurrency(60)}
                        </p>
                        <p className="text-sm text-success-600">
                          Insulate all accessible hot water pipes, especially in unheated areas like lofts and under floors. Easy DIY project.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <Star className="h-6 w-6 text-success-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-success-800 mb-2">LED Lighting Throughout</h4>
                        <p className="text-sm text-success-700 mb-2">
                          <strong>Cost:</strong> {formatCurrency(100)}-{formatCurrency(200)} | <strong>Points:</strong> 1-2 | <strong>£/Point:</strong> ~{formatCurrency(100)}
                        </p>
                        <p className="text-sm text-success-600">
                          Replace all bulbs with LED. Focus on fixed lighting (ceiling lights) as these are what the EPC assessor checks. Simple DIY task.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <Star className="h-6 w-6 text-success-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-success-800 mb-2">Draught Proofing</h4>
                        <p className="text-sm text-success-700 mb-2">
                          <strong>Cost:</strong> {formatCurrency(200)}-{formatCurrency(400)} | <strong>Points:</strong> 2-4 | <strong>£/Point:</strong> ~{formatCurrency(85)}
                        </p>
                        <p className="text-sm text-success-600">
                          Seal gaps around windows, doors, loft hatches, and letterboxes. Professional installation ensures quality and proper ventilation balance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <Star className="h-6 w-6 text-success-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-success-800 mb-2">Smart Heating Controls</h4>
                        <p className="text-sm text-success-700 mb-2">
                          <strong>Cost:</strong> {formatCurrency(200)}-{formatCurrency(400)} | <strong>Points:</strong> 2-4 | <strong>£/Point:</strong> ~{formatCurrency(120)}
                        </p>
                        <p className="text-sm text-success-600">
                          Smart thermostats (Hive, Nest, tado) with room-by-room temperature control. Improves EPC rating and reduces tenant energy bills.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <TipBox title="Quick Win Package">
                  <p>
                    Complete all quick wins together: cylinder jacket ({formatCurrency(35)}) + pipe insulation ({formatCurrency(100)}) + LEDs ({formatCurrency(150)}) + draught proofing ({formatCurrency(300)}) + smart controls ({formatCurrency(300)}) = <strong>{formatCurrency(885)} for potentially 8-12 EPC points</strong>.
                  </p>
                </TipBox>
              </section>

              {/* Medium Investments */}
              <section id="medium-investments" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Medium Investments ({formatCurrency(500)}-{formatCurrency(2000)})
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    If quick wins do not get you to your target rating, these medium-cost improvements offer the next best value. Cavity wall insulation in particular is a game-changer for properties built between 1930 and 1990.
                  </p>
                </div>

                <CostTable
                  title="Medium Investment Options"
                  items={[
                    {
                      improvement: 'Loft insulation (top-up to 300mm)',
                      lowEstimate: 400,
                      highEstimate: 600,
                      notes: '4-8 points. Essential if current insulation is thin.',
                    },
                    {
                      improvement: 'Loft insulation (full installation)',
                      lowEstimate: 600,
                      highEstimate: 1000,
                      notes: '6-10 points. For properties with no existing insulation.',
                    },
                    {
                      improvement: 'Cavity wall insulation',
                      lowEstimate: 800,
                      highEstimate: 1500,
                      notes: '8-12 points. Best value medium investment.',
                    },
                    {
                      improvement: 'Floor insulation (suspended timber)',
                      lowEstimate: 800,
                      highEstimate: 1500,
                      notes: '2-4 points. Worthwhile if accessible from below.',
                    },
                    {
                      improvement: 'Secondary glazing',
                      lowEstimate: 1500,
                      highEstimate: 3500,
                      notes: '2-4 points. Good for listed buildings.',
                    },
                  ]}
                  footerNote="Costs for typical 3-bedroom property. Get multiple quotes for accurate pricing."
                />

                <KeyFactBox title="Cavity Wall Insulation: Check First" icon={TrendingUp}>
                  <p>
                    Before any medium or major investment, check if your property has unfilled cavity walls. Many properties built 1930-1990 have cavities that were never insulated. A borescope survey ({formatCurrency(50)}-{formatCurrency(100)}) can confirm. If unfilled, cavity wall insulation should be your first priority after quick wins.
                  </p>
                </KeyFactBox>
              </section>

              {/* Major Investments */}
              <section id="major-investments" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Major Investments ({formatCurrency(2000)}+)
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Major investments should only be considered if lower-cost options cannot achieve your target rating. While these improvements gain significant points, the cost per point is much higher than quick wins and medium investments.
                  </p>
                </div>

                <WarningBox title="Exhaust Other Options First">
                  <p>
                    Before spending {formatCurrency(8000)}+ on wall insulation or {formatCurrency(6000)} on windows, ensure you have:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Completed all quick wins</li>
                    <li>Checked and filled cavity walls (if applicable)</li>
                    <li>Topped up loft insulation</li>
                    <li>Got a new EPC to confirm remaining points needed</li>
                  </ul>
                </WarningBox>

                <CostTable
                  title="Major Investment Options"
                  items={[
                    {
                      improvement: 'New A-rated condensing boiler',
                      lowEstimate: 2500,
                      highEstimate: 4000,
                      notes: '5-10 points. Best if boiler is 15+ years old.',
                    },
                    {
                      improvement: 'Air source heat pump (after BUS grant)',
                      lowEstimate: 3500,
                      highEstimate: 7500,
                      notes: '10-20 points. Major EPC boost, significant running cost savings.',
                    },
                    {
                      improvement: 'Double glazing (full house)',
                      lowEstimate: 4000,
                      highEstimate: 8000,
                      notes: '5-10 points. Consider only if windows need replacing anyway.',
                    },
                    {
                      improvement: 'Solar PV (3-4kW)',
                      lowEstimate: 5000,
                      highEstimate: 8000,
                      notes: '5-10 points. Also generates income/savings.',
                    },
                    {
                      improvement: 'Internal solid wall insulation',
                      lowEstimate: 8000,
                      highEstimate: 14000,
                      notes: '10-15 points. For solid wall properties only.',
                    },
                    {
                      improvement: 'External solid wall insulation',
                      lowEstimate: 10000,
                      highEstimate: 20000,
                      notes: '12-18 points. May need planning permission.',
                    },
                  ]}
                  footerNote="Consider the cost cap exemption if total spending will exceed £10,000 without reaching EPC C."
                />
              </section>

              {/* DIY vs Professional */}
              <section id="diy-vs-professional" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  DIY vs Professional Installation
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Some improvements can be completed as DIY projects, reducing costs further. However, certain improvements must be professionally installed to be recognised on an EPC assessment.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Wrench className="h-5 w-5 text-success-600" />
                      <h4 className="font-semibold text-success-800">DIY Suitable</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-success-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Hot water cylinder jacket</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Pipe insulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>LED lighting replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Basic draught excluders (doors)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Loft insulation top-up (if accessible)*</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Radiator reflector panels</span>
                      </li>
                    </ul>
                    <p className="text-xs text-success-600 mt-3">*Professional install required for EPC recognition in some cases</p>
                  </div>

                  <div className="bg-warning-50 border border-warning-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="h-5 w-5 text-warning-600" />
                      <h4 className="font-semibold text-warning-800">Professional Required</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-warning-700">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Cavity wall insulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Solid wall insulation (internal/external)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Boiler installation (Gas Safe required)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Heat pump installation (MCS certified)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Window installation (FENSA/CERTASS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Solar PV installation (MCS certified)</span>
                      </li>
                    </ul>
                    <p className="text-xs text-warning-600 mt-3">Must be installed by certified professionals for warranty and EPC recognition</p>
                  </div>
                </div>
              </section>

              {/* Quality Matters */}
              <section id="quality-matters" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  When Cheap Is Not Always Best
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    While cost-effectiveness is important, choosing the cheapest option is not always wise. Poor quality installation can lead to problems that cost more to fix than doing it properly the first time.
                  </p>
                </div>

                <WarningBox title="Avoid These False Economies" critical>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <strong>Cheap cavity wall insulation:</strong> Incorrectly installed CWI can cause damp problems. Always use TrustMark registered installers with 25-year guarantees.
                    </li>
                    <li>
                      <strong>Budget boiler brands:</strong> The cheapest boilers have shorter lifespans and higher failure rates. Mid-range brands (Worcester, Vaillant) offer better value over time.
                    </li>
                    <li>
                      <strong>DIY draught proofing without ventilation:</strong> Over-sealing a property can cause condensation and mould. Professional installers understand the ventilation balance.
                    </li>
                    <li>
                      <strong>Thin wall insulation:</strong> Skimping on insulation thickness reduces the EPC benefit. Ensure you use the thickness recommended for your property.
                    </li>
                  </ul>
                </WarningBox>

                <TipBox title="Use TrustMark Installers">
                  <p>
                    TrustMark is the government-endorsed quality mark for tradespeople. Using TrustMark registered installers ensures work is done to appropriate standards, provides access to the TrustMark guarantee, and may be required for certain grants (like ECO4).
                  </p>
                </TipBox>
              </section>

              {/* Strategic Approach */}
              <section id="strategic-approach" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Strategic Approach</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The most effective strategy combines cost-effectiveness ranking with practical considerations. Follow this approach:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary-800">Get your baseline</h4>
                      <p className="text-sm text-primary-700">
                        Commission a current EPC to know your exact score and recommended improvements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary-800">Calculate points needed</h4>
                      <p className="text-sm text-primary-700">
                        Subtract your current score from 69 (minimum C rating). This is your target.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary-800">Complete all quick wins</h4>
                      <p className="text-sm text-primary-700">
                        Do every applicable quick win regardless of points needed. They are so cheap it is always worth it.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary-800">Check cavity walls</h4>
                      <p className="text-sm text-primary-700">
                        If applicable and unfilled, this is almost certainly your next step.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold">
                      5
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary-800">Reassess</h4>
                      <p className="text-sm text-primary-700">
                        Get a new EPC. You may now be at C, or close enough that only minor additional work is needed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold">
                      6
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary-800">Consider major works only if needed</h4>
                      <p className="text-sm text-primary-700">
                        If still short, evaluate the remaining gap and choose the most cost-effective path to close it.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Your Next Steps</h2>

                {/* Calculator CTA */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-shrink-0">
                      <Calculator className="h-12 w-12 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 text-lg mb-1">
                        Calculate Your Personalised Costs
                      </h3>
                      <p className="text-neutral-600">
                        Enter your property details and current EPC to see which improvements you need and their estimated costs.
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
                    documentTitle="Home energy efficiency guidance"
                    url="https://energysavingtrust.org.uk/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Energy Performance Certificates guidance"
                    url="https://www.gov.uk/buy-sell-your-home/energy-performance-certificates"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="TrustMark"
                    documentTitle="Find a quality tradesperson"
                    url="https://www.trustmark.org.uk/"
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
                    excerpt="Comprehensive breakdown of all improvement costs by property type."
                    href="/costs"
                    category="Costs"
                    readingTime={18}
                  />
                  <RelatedContentCard
                    title="D to C Upgrade Costs"
                    excerpt="Specific guidance for the most common upgrade pathway."
                    href="/costs/d-to-c-upgrade"
                    category="Costs"
                    readingTime={10}
                  />
                  <RelatedContentCard
                    title="ECO4 for Landlords"
                    excerpt="Free insulation and heating through the ECO4 scheme."
                    href="/costs/eco4-landlords"
                    category="Funding"
                    readingTime={10}
                  />
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <Sidebar tableOfContents={tableOfContents} relatedArticles={relatedArticles} />
          </div>
        </Container>
      </Section>
    </>
  );
}
