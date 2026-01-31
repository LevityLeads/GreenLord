import type { Metadata } from 'next';
import Link from 'next/link';
import { PoundSterling, TrendingUp, Home, Building2, MapPin, Lightbulb, ArrowRight, Calculator, FileText } from 'lucide-react';
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
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Complete EPC Upgrade Cost Guide for Landlords 2026 | GreenLord',
  description: 'Comprehensive guide to EPC upgrade costs for UK landlords. Realistic prices for insulation, heating, glazing and more. Costs by property type and region.',
  openGraph: {
    title: 'Complete EPC Upgrade Cost Guide for Landlords 2026',
    description: 'Comprehensive guide to EPC upgrade costs for UK landlords. Realistic prices by improvement type, property type, and region.',
    type: 'article',
  },
};

const tableOfContents = [
  { id: 'understanding-costs', title: 'Understanding Upgrade Costs', level: 2 },
  { id: 'individual-improvement-costs', title: 'Individual Improvement Costs', level: 2 },
  { id: 'insulation-costs', title: 'Insulation Costs', level: 3 },
  { id: 'glazing-costs', title: 'Glazing Costs', level: 3 },
  { id: 'heating-costs', title: 'Heating System Costs', level: 3 },
  { id: 'controls-and-other', title: 'Controls and Other Improvements', level: 3 },
  { id: 'renewables-costs', title: 'Renewable Energy Costs', level: 3 },
  { id: 'costs-by-property-type', title: 'Costs by Property Type', level: 2 },
  { id: 'regional-variations', title: 'Regional Cost Variations', level: 2 },
  { id: 'cost-effectiveness', title: 'Cost-Effectiveness Ranking', level: 2 },
  { id: 'funding-sources', title: 'Funding Sources Overview', level: 2 },
  { id: 'next-steps', title: 'Next Steps', level: 2 },
];

const relatedArticles = [
  {
    title: 'D to C Upgrade Costs',
    href: '/costs/d-to-c-upgrade',
    description: 'Detailed breakdown of costs to improve from EPC D to C rating.',
  },
  {
    title: 'Cost Cap and Exemptions',
    href: '/regulations/cost-cap-exemptions',
    description: 'Understanding the £10,000 cost cap and how exemptions work.',
  },
  {
    title: 'ECO4 Scheme for Landlords',
    href: '/funding/eco4',
    description: 'Free or subsidised improvements through the ECO4 energy scheme.',
  },
];

export default function CostsPillarPage() {
  return (
    <>
      <PageHeader
        title="Complete EPC Upgrade Cost Guide"
        subtitle="Realistic costs for every improvement type, broken down by property type and region. Make informed decisions about your compliance investment."
        breadcrumbs={[
          { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
        ]}
      >
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <PoundSterling className="h-4 w-4" />
            2026 UK prices
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
                title="Complete EPC Upgrade Cost Guide for Landlords"
                publishedDate="2025-10-15"
                lastUpdated="2026-01-25"
                author={SITE_CONFIG.author}
                readingTime={18}
                subtitle="Everything you need to know about the costs of improving your rental property's EPC rating to meet the 2030 deadline."
              />

              {/* Hero Image Placeholder */}
              <ImagePlaceholder
                alt="Professional assessor showing cost breakdown on clipboard to landlord"
                description="A professional energy assessor or contractor showing a detailed cost breakdown document to a landlord, ideally in a residential property setting. Should convey trust, expertise, and transparency about costs."
                width={1200}
                height={630}
                instructions={[
                  'Professional setting with two people reviewing documents',
                  'Show a clipboard or tablet with cost figures visible',
                  'Residential property background (kitchen or living room)',
                  'Natural lighting, professional but approachable tone',
                ]}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="lead text-xl text-neutral-700">
                  Understanding the true costs of EPC upgrades is essential for every landlord planning for the 2030 deadline. The reality is that costs vary enormously depending on your property type, current condition, and location. This guide provides realistic UK cost data to help you plan your compliance strategy.
                </p>
              </div>

              <KeyFactBox title="The Bottom Line on Costs" icon={PoundSterling}>
                <p>
                  Most landlords can achieve EPC C for <strong>{formatCurrency(3000)} to {formatCurrency(10000)}</strong>, depending on their starting point and property type. Victorian and Edwardian properties with solid walls typically face the highest costs, while post-1990 properties may need minimal investment.
                </p>
              </KeyFactBox>

              <section id="understanding-costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Why Understanding Costs Matters</h2>

                <div className="prose max-w-none">
                  <p>
                    The gap between what landlords fear they will spend and what they actually need to spend is often significant. Some landlords assume they will need to invest tens of thousands of pounds, while others underestimate the work required. Neither approach leads to good decisions.
                  </p>

                  <p>
                    Accurate cost information helps you:
                  </p>

                  <ul>
                    <li><strong>Plan your budget realistically</strong> - Know what to expect before getting quotes</li>
                    <li><strong>Prioritise effectively</strong> - Focus on improvements that give the best return per pound spent</li>
                    <li><strong>Identify quick wins</strong> - Many properties can improve significantly with low-cost measures</li>
                    <li><strong>Evaluate cost cap exemptions</strong> - Understand if the {formatCurrency(KEY_DATES.costCap)} cap applies to your situation</li>
                    <li><strong>Compare quotes intelligently</strong> - Recognise when a quote is reasonable versus when to get more options</li>
                  </ul>
                </div>

                <WarningBox title="Costs Vary Significantly">
                  <p>
                    The figures in this guide are UK averages based on Energy Saving Trust data and industry research. Your actual costs could be 20-30% higher in London and the South East, or 10-15% lower in parts of the North and Wales. Always obtain multiple quotes for your specific property.
                  </p>
                </WarningBox>
              </section>

              {/* Individual Improvement Costs */}
              <section id="individual-improvement-costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Individual Improvement Costs</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Below are detailed costs for each type of improvement commonly recommended in EPC assessments. We have included typical EPC point improvements, though these vary depending on your property&apos;s specific characteristics.
                  </p>
                </div>

                {/* Insulation Costs */}
                <section id="insulation-costs" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">Insulation Improvements</h3>

                  <p className="text-neutral-600 mb-4">
                    Insulation is typically the most cost-effective category of improvement. Addressing heat loss through the loft, walls, and floors can make a dramatic difference to your EPC rating.
                  </p>

                  <CostTable
                    title="Insulation Costs (2026 UK Averages)"
                    items={[
                      {
                        improvement: 'Loft insulation (top-up to 300mm)',
                        lowEstimate: 400,
                        highEstimate: 600,
                        notes: 'Typical EPC improvement: 4-8 points'
                      },
                      {
                        improvement: 'Loft insulation (full installation)',
                        lowEstimate: 600,
                        highEstimate: 1000,
                        notes: 'Typical EPC improvement: 6-10 points'
                      },
                      {
                        improvement: 'Cavity wall insulation',
                        lowEstimate: 800,
                        highEstimate: 1500,
                        notes: 'Typical EPC improvement: 8-12 points'
                      },
                      {
                        improvement: 'Internal solid wall insulation',
                        lowEstimate: 8000,
                        highEstimate: 14000,
                        notes: 'Typical EPC improvement: 10-15 points'
                      },
                      {
                        improvement: 'External solid wall insulation',
                        lowEstimate: 10000,
                        highEstimate: 20000,
                        notes: 'Typical EPC improvement: 12-18 points'
                      },
                      {
                        improvement: 'Floor insulation (suspended timber)',
                        lowEstimate: 800,
                        highEstimate: 1500,
                        notes: 'Typical EPC improvement: 2-4 points'
                      },
                      {
                        improvement: 'Floor insulation (solid floor)',
                        lowEstimate: 2000,
                        highEstimate: 5000,
                        notes: 'Only practical during major renovation'
                      },
                    ]}
                    footerNote="Prices based on a typical 3-bedroom semi-detached house. Larger properties will cost more."
                  />

                  <TipBox title="Best Value Insulation">
                    <p>
                      Cavity wall insulation and loft insulation top-ups offer the best value for money. If your property has unfilled cavity walls, this should almost always be your first investment - it typically costs under {formatCurrency(1500)} and can improve your rating by 8-12 points.
                    </p>
                  </TipBox>
                </section>

                {/* Glazing Costs */}
                <section id="glazing-costs" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">Glazing Improvements</h3>

                  <p className="text-neutral-600 mb-4">
                    Window upgrades are expensive relative to their EPC impact, but may be necessary if your property has single glazing. Consider secondary glazing as a lower-cost alternative, especially for listed buildings.
                  </p>

                  <CostTable
                    title="Glazing Costs (2026 UK Averages)"
                    items={[
                      {
                        improvement: 'Double glazing (full house, 8-10 windows)',
                        lowEstimate: 4000,
                        highEstimate: 8000,
                        notes: 'Typical EPC improvement: 5-10 points'
                      },
                      {
                        improvement: 'Triple glazing (full house)',
                        lowEstimate: 6000,
                        highEstimate: 12000,
                        notes: 'Typical EPC improvement: 6-12 points'
                      },
                      {
                        improvement: 'Secondary glazing (full house)',
                        lowEstimate: 1500,
                        highEstimate: 3500,
                        notes: 'Typical EPC improvement: 2-4 points'
                      },
                      {
                        improvement: 'Draught proofing (windows and doors)',
                        lowEstimate: 200,
                        highEstimate: 400,
                        notes: 'Typical EPC improvement: 2-4 points'
                      },
                    ]}
                    footerNote="Window costs vary significantly based on size, style, and material (uPVC vs timber)."
                  />

                  <InfoBox title="When Windows Make Sense">
                    <p>
                      Full window replacement offers relatively modest EPC gains for the cost. However, if your windows need replacing anyway due to age or condition, the EPC benefit is a bonus. If your only goal is EPC improvement, focus on insulation first.
                    </p>
                  </InfoBox>
                </section>

                {/* Heating Costs */}
                <section id="heating-costs" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">Heating System Upgrades</h3>

                  <p className="text-neutral-600 mb-4">
                    Heating accounts for a significant portion of energy use. Upgrading an old inefficient boiler can substantially improve your rating, while heat pumps offer the largest gains but at higher cost.
                  </p>

                  <CostTable
                    title="Heating System Costs (2026 UK Averages)"
                    items={[
                      {
                        improvement: 'New A-rated gas boiler',
                        lowEstimate: 2500,
                        highEstimate: 4000,
                        notes: 'Typical EPC improvement: 5-10 points'
                      },
                      {
                        improvement: 'Air source heat pump',
                        lowEstimate: 10000,
                        highEstimate: 15000,
                        notes: 'Typical EPC improvement: 10-20 points. BUS grant can reduce cost by up to £7,500'
                      },
                      {
                        improvement: 'Ground source heat pump',
                        lowEstimate: 18000,
                        highEstimate: 35000,
                        notes: 'Typical EPC improvement: 12-22 points. Requires garden space for ground loops'
                      },
                      {
                        improvement: 'Electric storage heater upgrade',
                        lowEstimate: 2000,
                        highEstimate: 4000,
                        notes: 'For properties with electric heating'
                      },
                    ]}
                    footerNote="Heat pump costs shown before grants. The Boiler Upgrade Scheme provides up to £7,500 towards heat pump installation."
                  />

                  <KeyFactBox title="Boiler Upgrade Scheme" icon={PoundSterling}>
                    <p>
                      The Boiler Upgrade Scheme (BUS) provides grants of up to <strong>{formatCurrency(7500)}</strong> for air source heat pumps and ground source heat pumps. This can make heat pumps cost-competitive with new gas boilers while offering superior EPC improvements.
                    </p>
                  </KeyFactBox>
                </section>

                {/* Controls and Other */}
                <section id="controls-and-other" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">Controls and Other Improvements</h3>

                  <p className="text-neutral-600 mb-4">
                    These lower-cost measures can add valuable points to your EPC rating and are often overlooked. Many can be done as DIY projects or at minimal cost.
                  </p>

                  <CostTable
                    title="Controls and Miscellaneous Costs"
                    items={[
                      {
                        improvement: 'Smart heating controls (e.g., Hive, Nest)',
                        lowEstimate: 200,
                        highEstimate: 400,
                        notes: 'Typical EPC improvement: 2-4 points'
                      },
                      {
                        improvement: 'Heating zone controls',
                        lowEstimate: 400,
                        highEstimate: 800,
                        notes: 'Typical EPC improvement: 2-4 points'
                      },
                      {
                        improvement: 'Thermostatic radiator valves (TRVs)',
                        lowEstimate: 150,
                        highEstimate: 300,
                        notes: 'Typical EPC improvement: 1-2 points'
                      },
                      {
                        improvement: 'LED lighting upgrade',
                        lowEstimate: 100,
                        highEstimate: 200,
                        notes: 'Typical EPC improvement: 1-2 points'
                      },
                      {
                        improvement: 'Hot water cylinder jacket',
                        lowEstimate: 20,
                        highEstimate: 50,
                        notes: 'Typical EPC improvement: 1-2 points'
                      },
                      {
                        improvement: 'Pipe insulation',
                        lowEstimate: 50,
                        highEstimate: 150,
                        notes: 'Typical EPC improvement: 1 point'
                      },
                    ]}
                    footerNote="Many of these improvements can be DIY projects, reducing costs further."
                  />

                  <TipBox title="Stack the Quick Wins">
                    <p>
                      Combining several low-cost improvements can add up to significant EPC gains. Smart controls ({formatCurrency(300)}) + draught proofing ({formatCurrency(300)}) + LED lighting ({formatCurrency(150)}) + cylinder jacket ({formatCurrency(35)}) = around {formatCurrency(785)} for potentially 6-10 EPC points.
                    </p>
                  </TipBox>
                </section>

                {/* Renewables */}
                <section id="renewables-costs" className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-700 mb-4">Renewable Energy Systems</h3>

                  <p className="text-neutral-600 mb-4">
                    Solar panels and other renewable systems can provide substantial EPC improvements while also generating income or savings for tenants. Note that not all rental properties are suitable for renewables.
                  </p>

                  <CostTable
                    title="Renewable Energy System Costs"
                    items={[
                      {
                        improvement: 'Solar PV (3-4kW system)',
                        lowEstimate: 5000,
                        highEstimate: 8000,
                        notes: 'Typical EPC improvement: 5-10 points'
                      },
                      {
                        improvement: 'Solar PV with battery storage',
                        lowEstimate: 8000,
                        highEstimate: 13000,
                        notes: 'Battery adds £2,000-4,000 to base system'
                      },
                      {
                        improvement: 'Solar thermal (water heating)',
                        lowEstimate: 3000,
                        highEstimate: 5000,
                        notes: 'Typical EPC improvement: 3-5 points'
                      },
                    ]}
                    footerNote="Solar suitability depends on roof orientation, shading, and structural capacity."
                  />
                </section>
              </section>

              {/* Cost Infographic Placeholder */}
              <ImagePlaceholder
                alt="Infographic comparing upgrade costs by property type"
                description="A clear infographic showing typical total upgrade costs for different property types (Victorian terrace, 1930s semi, purpose-built flat, etc.) to reach EPC C. Bar chart or visual comparison format showing the range from lowest to highest cost property types."
                width={1200}
                height={800}
                instructions={[
                  'Clear visual comparison of 5-6 property types',
                  'Show cost ranges (low to high) for each',
                  'Use consistent colour coding',
                  'Include property illustrations or icons',
                  'Show £ amounts clearly labelled',
                ]}
                priority
              />

              {/* Costs by Property Type */}
              <section id="costs-by-property-type" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Typical Costs by Property Type</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The total cost to achieve EPC C varies dramatically based on your property type. Here are realistic cost ranges for reaching EPC C from a typical starting point for each property type.
                  </p>
                </div>

                <CostTable
                  title="Total Cost to Reach EPC C by Property Type"
                  items={[
                    {
                      improvement: 'Victorian Terrace (pre-1919)',
                      lowEstimate: 8000,
                      highEstimate: 25000,
                      notes: 'Often starts at E or F. Solid walls are the main cost driver.'
                    },
                    {
                      improvement: 'Edwardian / 1920s Property',
                      lowEstimate: 6000,
                      highEstimate: 20000,
                      notes: 'Similar challenges to Victorian but sometimes with cavity walls.'
                    },
                    {
                      improvement: '1930s Semi-Detached',
                      lowEstimate: 3000,
                      highEstimate: 10000,
                      notes: 'Usually starts at D. Cavity walls make insulation easier.'
                    },
                    {
                      improvement: '1950s-1960s Property',
                      lowEstimate: 2500,
                      highEstimate: 8000,
                      notes: 'Often starts at D. May need loft and cavity work.'
                    },
                    {
                      improvement: '1970s-1980s Property',
                      lowEstimate: 1500,
                      highEstimate: 5000,
                      notes: 'Often starts at D or C. May only need minor improvements.'
                    },
                    {
                      improvement: '1990s and Later',
                      lowEstimate: 500,
                      highEstimate: 3000,
                      notes: 'Often already C or better. May only need quick wins.'
                    },
                    {
                      improvement: 'Purpose-Built Flat',
                      lowEstimate: 1000,
                      highEstimate: 4000,
                      notes: 'Limited improvement options but often already efficient.'
                    },
                    {
                      improvement: 'Converted Flat',
                      lowEstimate: 2500,
                      highEstimate: 8000,
                      notes: 'Varies hugely depending on original building and conversion quality.'
                    },
                  ]}
                  footerNote="Ranges assume typical starting EPC for each property type. Your costs may be higher or lower depending on current condition."
                />

                <WarningBox title="Solid Wall Properties">
                  <p>
                    Properties with solid walls (typically pre-1930) face the highest costs because wall insulation is expensive. If your property has solid walls and currently rates E or below, budget for <strong>{formatCurrency(10000)} to {formatCurrency(25000)}</strong> to reach EPC C. This is where the cost cap exemption may become relevant.
                  </p>
                </WarningBox>
              </section>

              {/* Regional Variations */}
              <section id="regional-variations" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Regional Cost Variations</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Labour rates and material costs vary significantly across the UK. The figures in this guide are UK averages - apply these approximate adjustments for your region:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Higher Cost Regions
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>London</span>
                        <span className="font-medium text-danger-600">+20% to +30%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>South East England</span>
                        <span className="font-medium text-warning-600">+10% to +20%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>South West England</span>
                        <span className="font-medium text-warning-600">+5% to +10%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Lower Cost Regions
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>North East England</span>
                        <span className="font-medium text-success-600">-5% to -15%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Yorkshire</span>
                        <span className="font-medium text-success-600">-5% to -10%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Wales</span>
                        <span className="font-medium text-success-600">-5% to -10%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Northern Ireland</span>
                        <span className="font-medium text-success-600">-10% to -15%</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <InfoBox title="Getting Accurate Local Quotes">
                  <p>
                    Regional multipliers are useful for budgeting, but always obtain at least three quotes from local contractors for accurate pricing. Prices can vary significantly even within regions based on contractor availability and specific property access challenges.
                  </p>
                </InfoBox>
              </section>

              {/* Cost Effectiveness Chart Placeholder */}
              <ImagePlaceholder
                alt="Chart showing cost versus EPC point gain for common improvements"
                description="A scatter plot or bar chart comparing common improvements by their cost-effectiveness (cost per EPC point gained). Should show quick wins like loft insulation at one end and expensive options like solid wall insulation at the other, making it easy to see which improvements offer best value."
                width={1200}
                height={700}
                instructions={[
                  'Clear axis labels: Cost (x-axis) and EPC Points (y-axis)',
                  'Or: show cost per point gained as bars',
                  'Highlight best value improvements in green',
                  'Include 8-10 common improvements',
                  'Make it easy to scan and understand at a glance',
                ]}
              />

              {/* Cost Effectiveness */}
              <section id="cost-effectiveness" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Cost-Effectiveness Ranking</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Not all improvements offer the same value for money. Cost-effectiveness is measured by the cost per EPC point gained. Here are common improvements ranked from most to least cost-effective:
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Best Value */}
                  <div className="bg-success-50 border border-success-200 rounded-lg p-4">
                    <h4 className="font-semibold text-success-800 mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Best Value (Under {formatCurrency(100)} per EPC point)
                    </h4>
                    <ul className="space-y-2 text-sm text-success-700">
                      <li><strong>Hot water cylinder jacket</strong> - ~{formatCurrency(35)} per point</li>
                      <li><strong>Loft insulation top-up</strong> - ~{formatCurrency(75)} per point</li>
                      <li><strong>Draught proofing</strong> - ~{formatCurrency(100)} per point</li>
                      <li><strong>Cavity wall insulation</strong> - ~{formatCurrency(115)} per point</li>
                      <li><strong>LED lighting</strong> - ~{formatCurrency(100)} per point</li>
                    </ul>
                  </div>

                  {/* Good Value */}
                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
                    <h4 className="font-semibold text-accent-800 mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Good Value ({formatCurrency(100)} to {formatCurrency(400)} per EPC point)
                    </h4>
                    <ul className="space-y-2 text-sm text-accent-700">
                      <li><strong>Smart heating controls</strong> - ~{formatCurrency(150)} per point</li>
                      <li><strong>TRVs on radiators</strong> - ~{formatCurrency(150)} per point</li>
                      <li><strong>New A-rated boiler</strong> - ~{formatCurrency(400)} per point</li>
                      <li><strong>Floor insulation (suspended)</strong> - ~{formatCurrency(350)} per point</li>
                    </ul>
                  </div>

                  {/* Moderate Value */}
                  <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                    <h4 className="font-semibold text-warning-700 mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Moderate Value ({formatCurrency(400)} to {formatCurrency(1000)} per EPC point)
                    </h4>
                    <ul className="space-y-2 text-sm text-warning-700">
                      <li><strong>Air source heat pump</strong> - ~{formatCurrency(625)} per point (after BUS grant)</li>
                      <li><strong>Solar PV</strong> - ~{formatCurrency(800)} per point</li>
                      <li><strong>Double glazing</strong> - ~{formatCurrency(800)} per point</li>
                      <li><strong>Internal solid wall insulation</strong> - ~{formatCurrency(850)} per point</li>
                    </ul>
                  </div>

                  {/* Lower Value */}
                  <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-4">
                    <h4 className="font-semibold text-neutral-700 mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Lower Value (Over {formatCurrency(1000)} per EPC point)
                    </h4>
                    <ul className="space-y-2 text-sm text-neutral-600">
                      <li><strong>External solid wall insulation</strong> - ~{formatCurrency(1000)} per point</li>
                      <li><strong>Triple glazing</strong> - ~{formatCurrency(1100)} per point</li>
                      <li><strong>Ground source heat pump</strong> - ~{formatCurrency(1700)} per point</li>
                    </ul>
                  </div>
                </div>

                <TipBox title="Strategy for Best Results">
                  <p>
                    Start with the best value improvements and work down the list. In many cases, you can achieve EPC C without needing the more expensive options. Only invest in lower value improvements if you have already exhausted the better options and still need more points.
                  </p>
                </TipBox>
              </section>

              {/* Funding Sources */}
              <section id="funding-sources" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Funding Sources Overview</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Several government schemes can help reduce your upgrade costs. Eligibility varies, so check each scheme&apos;s requirements carefully.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-5 border border-neutral-200 shadow-sm">
                    <h4 className="font-semibold text-primary-800 mb-2">Boiler Upgrade Scheme (BUS)</h4>
                    <p className="text-sm text-neutral-600 mb-3">
                      Up to {formatCurrency(7500)} towards heat pump installation. Available for most properties in England and Wales.
                    </p>
                    <Link href="/funding/boiler-upgrade-scheme" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                      Learn more about BUS
                    </Link>
                  </div>

                  <div className="bg-white rounded-lg p-5 border border-neutral-200 shadow-sm">
                    <h4 className="font-semibold text-primary-800 mb-2">ECO4 Scheme</h4>
                    <p className="text-sm text-neutral-600 mb-3">
                      Free or heavily subsidised insulation and heating for properties with tenants on certain benefits.
                    </p>
                    <Link href="/funding/eco4" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                      Check ECO4 eligibility
                    </Link>
                  </div>

                  <div className="bg-white rounded-lg p-5 border border-neutral-200 shadow-sm">
                    <h4 className="font-semibold text-primary-800 mb-2">Warm Homes: Local Grant</h4>
                    <p className="text-sm text-neutral-600 mb-3">
                      Local authority grants for energy efficiency improvements. Availability and eligibility varies by area.
                    </p>
                    <Link href="/funding/warm-homes-local-grant" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                      Find local grants
                    </Link>
                  </div>

                  <div className="bg-white rounded-lg p-5 border border-neutral-200 shadow-sm">
                    <h4 className="font-semibold text-primary-800 mb-2">Great British Insulation Scheme</h4>
                    <p className="text-sm text-neutral-600 mb-3">
                      Subsidised insulation for certain property types and areas, including some landlord properties.
                    </p>
                    <Link href="/funding/gbis" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                      Check GBIS eligibility
                    </Link>
                  </div>
                </div>

                <KeyFactBox title="Funding Can Slash Your Costs" icon={PoundSterling}>
                  <p>
                    A landlord installing an air source heat pump ({formatCurrency(12000)}) with the BUS grant ({formatCurrency(7500)}) pays just {formatCurrency(4500)}. Combined with cavity wall insulation via ECO4 (potentially free), reaching EPC C could cost a fraction of the headline figures.
                  </p>
                </KeyFactBox>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Next Steps</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Now that you understand the cost landscape, here is how to move forward with your compliance planning:
                  </p>
                </div>

                <ol className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">1</span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Use our calculator for a personalised estimate</h4>
                      <p className="text-neutral-600 text-sm">Get a tailored cost estimate based on your specific property type, location, and current condition.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">2</span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Get a professional EPC assessment</h4>
                      <p className="text-neutral-600 text-sm">An accredited assessor can identify exactly which improvements will work best for your property.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">3</span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Check funding eligibility</h4>
                      <p className="text-neutral-600 text-sm">Explore BUS, ECO4, and local grants before committing to any work.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">4</span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Obtain multiple quotes</h4>
                      <p className="text-neutral-600 text-sm">Get at least three quotes for each improvement from certified installers.</p>
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
                      <h3 className="font-semibold text-primary-800 text-lg mb-1">Get Your Personalised Estimate</h3>
                      <p className="text-neutral-600">
                        Use our calculator to see costs tailored to your property type, location, and current EPC rating.
                      </p>
                    </div>
                    <Link href="/tools/cost-calculator">
                      <Button variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                        Try Calculator
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
                    documentTitle="Home energy efficiency guidance and cost data"
                    url="https://energysavingtrust.org.uk/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Boiler Upgrade Scheme guidance"
                    url="https://www.gov.uk/apply-boiler-upgrade-scheme"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Warm Homes Plan"
                    url="https://www.gov.uk/government/publications/warm-homes-plan"
                    accessedDate="January 2026"
                  />
                </div>
              </section>

              {/* Related Content */}
              <section className="mt-12">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <RelatedContentCard
                    title="D to C Upgrade Costs"
                    excerpt="Detailed breakdown of what it costs to improve from EPC D to the required C rating."
                    href="/costs/d-to-c-upgrade"
                    category="Costs"
                    readingTime={10}
                  />
                  <RelatedContentCard
                    title="Cost Cap and Exemptions"
                    excerpt="Understanding the £10,000 spending cap and how to qualify for exemption."
                    href="/regulations/cost-cap-exemptions"
                    category="Regulations"
                    readingTime={12}
                  />
                  <RelatedContentCard
                    title="Victorian Terrace Guide"
                    excerpt="Specific upgrade strategies for pre-1919 terraced properties with solid walls."
                    href="/property-types/victorian-terrace"
                    category="Property Guide"
                    readingTime={15}
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
