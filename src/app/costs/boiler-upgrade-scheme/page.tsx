import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  CheckCircle,
  AlertCircle,
  Clock,
  PoundSterling,
  Home,
  Thermometer,
  Zap,
  FileText,
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
import { GeneratedImage } from '@/components/content';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Boiler Upgrade Scheme for Landlords | Heat Pump Grants £7,500 | GreenLord',
  description:
    'Complete guide to the Boiler Upgrade Scheme (BUS) for UK landlords. Get up to £7,500 towards heat pump installation. Eligibility, property requirements, and how to apply.',
  alternates: {
    canonical: 'https://greenlord.co.uk/costs/boiler-upgrade-scheme',
  },
  openGraph: {
    title: 'Boiler Upgrade Scheme for Landlords: Heat Pump Grants',
    description:
      'Get up to £7,500 towards heat pump installation. Extended to 2030. Complete guide for landlords.',
    type: 'article',
  },
};

const tableOfContents = [
  { id: 'grant-amounts', title: 'Grant Amounts', level: 2 },
  { id: 'scheme-extension', title: 'Extended to 2030', level: 2 },
  { id: 'landlord-eligibility', title: 'Landlord Eligibility', level: 2 },
  { id: 'property-requirements', title: 'Property Requirements', level: 2 },
  { id: 'heat-pumps-older-properties', title: 'Heat Pumps in Older Properties', level: 2 },
  { id: 'installation-process', title: 'Installation Process', level: 2 },
  { id: 'running-costs', title: 'Running Costs Comparison', level: 2 },
  { id: 'when-heat-pump-makes-sense', title: 'When a Heat Pump Makes Sense', level: 2 },
  { id: 'next-steps', title: 'Your Next Steps', level: 2 },
];

const relatedArticles = [
  {
    title: 'ECO4 for Landlords',
    href: '/costs/eco4-landlords',
    description: 'Free insulation through ECO4.',
  },
  {
    title: 'Warm Homes Local Grant',
    href: '/costs/warm-homes-local-grant',
    description: 'Up to £30,000 for qualifying properties.',
  },
  {
    title: 'E to C Upgrade Costs',
    href: '/costs/e-to-c-upgrade',
    description: 'Heat pumps as part of major upgrades.',
  },
];

export default function BoilerUpgradeSchemePage() {
  return (
    <>
      <PageHeader
        title="Boiler Upgrade Scheme for Landlords"
        subtitle="Get up to £7,500 towards heat pump installation. The scheme has been extended to 2030, giving landlords more time to benefit."
        breadcrumbs={[
          { name: 'Costs & Funding', url: `${SITE_CONFIG.url}/costs` },
          {
            name: 'Boiler Upgrade Scheme',
            url: `${SITE_CONFIG.url}/costs/boiler-upgrade-scheme`,
          },
        ]}
      >
        <div className="flex items-center gap-2 text-success-700 font-medium">
          <PoundSterling className="h-5 w-5" />
          <span>Up to {formatCurrency(7500)} grant</span>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1 max-w-4xl">
              <ArticleHeader
                title="Boiler Upgrade Scheme (BUS): Complete Guide for Landlords"
                publishedDate="2025-08-15"
                lastUpdated="2026-01-31"
                author={SITE_CONFIG.author}
                readingTime={12}
                subtitle="How landlords can access substantial heat pump grants to improve EPC ratings and reduce tenant bills"
              />

              {/* Hero Image */}
              <GeneratedImage
                imageId="boiler-upgrade-scheme-hero"
                alt="Air source heat pump professionally installed outside a British semi-detached home"
                prompt="A white air source heat pump unit sits on a concrete plinth against the side wall of a typical 1970s British semi-detached house. Copper pipework runs neatly into the property through the wall, and the installation looks clean and professional. The property has a small side passage with a gravel path, and neighbouring houses are visible in the background - a typical UK suburban setting. Modern ASHP unit (Mitsubishi, Vaillant or similar style). Typical British suburban residential setting. Professional pipework and installation visible."
                width={1200}
                height={630}
                priority
              />

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mt-8">
                <p className="lead text-xl text-neutral-700">
                  The Boiler Upgrade Scheme (BUS) offers landlords up to {formatCurrency(7500)} towards the cost of installing a heat pump. With the scheme now extended to 2030, this is one of the most valuable grants available for improving your property&apos;s EPC rating while future-proofing against the phase-out of gas boilers.
                </p>

                <p>
                  Heat pumps typically improve EPC ratings by 10-20 points, often enough to move a property from D or E to C in a single installation. Combined with the BUS grant, the net cost can be comparable to a new gas boiler while delivering significantly better energy performance.
                </p>
              </div>

              <KeyFactBox title="Boiler Upgrade Scheme Summary" icon={PoundSterling}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-600">Air Source Heat Pump Grant</p>
                    <p className="font-semibold text-2xl text-success-700">{formatCurrency(7500)}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Ground Source Heat Pump Grant</p>
                    <p className="font-semibold text-2xl text-success-700">{formatCurrency(7500)}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Biomass Boiler Grant</p>
                    <p className="font-semibold text-lg">{formatCurrency(5000)}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600">Scheme Runs Until</p>
                    <p className="font-semibold text-lg">March 2030</p>
                  </div>
                </div>
              </KeyFactBox>

              {/* Grant Amounts */}
              <section id="grant-amounts" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Grant Amounts</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The BUS provides upfront capital grants that are deducted from the total installation cost. The grant is paid directly to the MCS-certified installer, so you only pay the remaining balance.
                  </p>
                </div>

                <CostTable
                  title="BUS Grant Amounts by Technology"
                  items={[
                    {
                      improvement: 'Air source heat pump (ASHP)',
                      lowEstimate: 7500,
                      highEstimate: 7500,
                      notes: 'Most common option for rental properties. Typical total cost £10,000-£15,000.',
                    },
                    {
                      improvement: 'Ground source heat pump (GSHP)',
                      lowEstimate: 7500,
                      highEstimate: 7500,
                      notes: 'Requires garden space for ground loops. Total cost £18,000-£35,000.',
                    },
                    {
                      improvement: 'Biomass boiler',
                      lowEstimate: 5000,
                      highEstimate: 5000,
                      notes: 'Rural properties only. Requires fuel storage. Total cost £10,000-£20,000.',
                    },
                    {
                      improvement: 'Water source heat pump',
                      lowEstimate: 7500,
                      highEstimate: 7500,
                      notes: 'Rare. Requires water source (river, lake, borehole).',
                    },
                  ]}
                  footerNote="Grant amounts are fixed. You pay total installation cost minus the grant."
                />

                <InfoBox title="Net Cost Example">
                  <p>
                    A typical air source heat pump installation costs {formatCurrency(12000)}. With the {formatCurrency(7500)} BUS grant, your net cost is just {formatCurrency(4500)}. This is comparable to a new gas boiler ({formatCurrency(2500)}-{formatCurrency(4000)}) while providing a much larger EPC improvement.
                  </p>
                </InfoBox>
              </section>

              {/* Scheme Extension */}
              <section id="scheme-extension" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Extended to 2030</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The government has extended the Boiler Upgrade Scheme to March 2030, originally set to end in 2025. This extension gives landlords more time to plan and budget for heat pump installations, aligning perfectly with the 2030 EPC C deadline.
                  </p>
                </div>

                <div className="bg-success-50 border border-success-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-success-800 mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Why the Extension Matters for Landlords
                  </h4>
                  <ul className="space-y-2 text-sm text-success-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Time to plan:</strong> No rush to install before an arbitrary deadline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Coordinate with EPC deadline:</strong> Install heat pump as part of 2030 compliance strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Improving technology:</strong> Heat pumps are getting better and cheaper each year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span><strong>More installers:</strong> Growing installer base means more competition and better service</span>
                    </li>
                  </ul>
                </div>

                <TipBox title="Optimal Timing Strategy">
                  <p>
                    If your current boiler is working and less than 12-15 years old, you can wait before using BUS. However, if your boiler is approaching end of life or you need significant EPC improvement, acting sooner secures the grant while installer availability is good.
                  </p>
                </TipBox>
              </section>

              {/* Landlord Eligibility */}
              <section id="landlord-eligibility" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Landlord Eligibility</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Private landlords are fully eligible for the Boiler Upgrade Scheme. There are no income tests, no requirements based on tenant circumstances, and no restriction on the number of properties you can claim for.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <h4 className="font-semibold text-success-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Eligibility Requirements
                    </h4>
                    <ul className="space-y-2 text-sm text-success-700">
                      <li>Own the property (or have authority to approve works)</li>
                      <li>Property must have a valid EPC (any rating)</li>
                      <li>Must be replacing a fossil fuel heating system</li>
                      <li>Property in England or Wales</li>
                      <li>Use an MCS-certified installer</li>
                    </ul>
                  </div>

                  <div className="bg-danger-50 border border-danger-200 rounded-lg p-5">
                    <h4 className="font-semibold text-danger-800 mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Not Eligible If
                    </h4>
                    <ul className="space-y-2 text-sm text-danger-700">
                      <li>Property already has a heat pump</li>
                      <li>New build property (under 2 years old)</li>
                      <li>Property does not have a valid EPC</li>
                      <li>Installing DIY or using non-MCS installer</li>
                      <li>Property in Scotland (separate scheme)</li>
                    </ul>
                  </div>
                </div>

                <KeyFactBox title="Multiple Properties" icon={Home}>
                  <p>
                    There is no limit on the number of properties you can claim BUS grants for. Each eligible property in your portfolio can receive the full grant amount. This makes the scheme particularly valuable for portfolio landlords planning fleet-wide upgrades.
                  </p>
                </KeyFactBox>
              </section>

              {/* Property Requirements */}
              <section id="property-requirements" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Property Requirements</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Your property must meet certain technical requirements to qualify for the BUS and to ensure the heat pump operates effectively.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h4 className="font-semibold text-neutral-800 mb-2">Valid EPC Certificate</h4>
                    <p className="text-sm text-neutral-600">
                      The property must have a valid EPC certificate (issued within the last 10 years). If you do not have one, you will need to commission an EPC assessment before applying. Any EPC rating qualifies.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h4 className="font-semibold text-neutral-800 mb-2">Replacing Fossil Fuel System</h4>
                    <p className="text-sm text-neutral-600">
                      The heat pump must replace an existing fossil fuel heating system (gas, oil, LPG, or coal). Properties with existing electric heating may not qualify unless they have a fossil fuel backup system.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h4 className="font-semibold text-neutral-800 mb-2">Adequate Insulation</h4>
                    <p className="text-sm text-neutral-600">
                      While not a strict BUS requirement, heat pumps work best in well-insulated properties. Most installers will recommend addressing major insulation deficiencies before or alongside the heat pump installation.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h4 className="font-semibold text-neutral-800 mb-2">Space for Heat Pump</h4>
                    <p className="text-sm text-neutral-600">
                      Air source heat pumps require outdoor space (typically 1m x 1m ground footprint). Ground source heat pumps need garden space for ground loops or boreholes. Permitted development rights usually apply, but check conservation area restrictions.
                    </p>
                  </div>
                </div>

                <WarningBox title="EPC Recommendation Update">
                  <p>
                    Recent EPC methodology changes mean heat pumps are now recommended on more EPC certificates than before. If your EPC was issued before June 2025, consider getting a new assessment. The updated recommendations may show a heat pump as suitable when the previous EPC did not.
                  </p>
                </WarningBox>
              </section>

              {/* Heat Pumps in Older Properties */}
              <section id="heat-pumps-older-properties" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Heat Pumps in Older Properties
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    One of the most common concerns landlords have is whether heat pumps will work effectively in older, less insulated properties. The good news is that modern heat pumps can work well in most UK housing stock with proper design and sizing.
                  </p>
                </div>

                <div className="bg-accent-50 border border-accent-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-accent-800 mb-3">Making Heat Pumps Work in Older Properties</h4>
                  <ul className="space-y-3 text-sm text-accent-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Correct sizing:</strong> Heat pumps must be sized for the property&apos;s heat loss, not just replacing the boiler kW rating. Larger radiators or underfloor heating may be needed.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Insulation first:</strong> Addressing loft, cavity, or even partial solid wall insulation before installation reduces the required heat pump size and improves efficiency.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>High-temperature heat pumps:</strong> Newer models can deliver higher temperatures (65-70C) suitable for existing radiator systems, reducing the need for radiator upgrades.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Hybrid systems:</strong> Heat pump combined with existing boiler as backup can be effective in hard-to-heat properties, though grant eligibility varies.
                      </div>
                    </li>
                  </ul>
                </div>

                <TipBox title="Victorian and Edwardian Properties">
                  <p>
                    Heat pumps can work in Victorian and Edwardian properties, but expect to need larger radiators or underfloor heating in some rooms, and insulation improvements for best results. A good MCS installer will assess your property and design a system that works. Combined with insulation funded by ECO4, the total solution can be very effective.
                  </p>
                </TipBox>
              </section>

              {/* Installation Process */}
              <section id="installation-process" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Installation Process</h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    The BUS grant is applied for by the MCS-certified installer, not by you directly. This simplifies the process but means you must choose your installer carefully.
                  </p>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-primary-800 mb-4">Step-by-Step Process</h4>
                  <ol className="space-y-4 text-sm text-primary-700">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">1</span>
                      <div>
                        <strong>Get quotes from MCS installers</strong>
                        <p className="text-primary-600">Find MCS-certified heat pump installers in your area. Get at least 3 quotes.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">2</span>
                      <div>
                        <strong>Property survey and system design</strong>
                        <p className="text-primary-600">Installer assesses property, calculates heat loss, and designs appropriate system.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">3</span>
                      <div>
                        <strong>Accept quote showing BUS discount</strong>
                        <p className="text-primary-600">Quote should clearly show the {formatCurrency(7500)} grant deducted from total price.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">4</span>
                      <div>
                        <strong>Installer applies for BUS voucher</strong>
                        <p className="text-primary-600">Once you accept the quote, installer applies to Ofgem for the grant voucher.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">5</span>
                      <div>
                        <strong>Voucher issued (within 3 months)</strong>
                        <p className="text-primary-600">Ofgem issues voucher. Work must be completed within 3 months of voucher issue.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">6</span>
                      <div>
                        <strong>Installation completed</strong>
                        <p className="text-primary-600">Installer completes work and registers installation with MCS.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">7</span>
                      <div>
                        <strong>You pay balance</strong>
                        <p className="text-primary-600">Pay installer the total cost minus the {formatCurrency(7500)} grant.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center font-bold text-xs">8</span>
                      <div>
                        <strong>Installer receives grant</strong>
                        <p className="text-primary-600">Ofgem pays the {formatCurrency(7500)} directly to the installer.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <InfoBox title="Finding MCS Installers">
                  <p>
                    Search for MCS-certified heat pump installers at <a href="https://mcscertified.com/find-an-installer/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">mcscertified.com</a>. Only MCS-certified installers can apply for BUS vouchers. Check installer reviews and ask for references from other landlords.
                  </p>
                </InfoBox>
              </section>

              {/* Running Costs */}
              <section id="running-costs" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  Running Costs Comparison
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    One concern landlords have about heat pumps is running costs. While electricity is more expensive per kWh than gas, heat pumps are 3-4 times more efficient, meaning they use less energy overall.
                  </p>
                </div>

                <div className="overflow-hidden rounded-lg border border-neutral-200 mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-50 text-left">
                          <th className="px-4 py-3 font-semibold text-primary-800">System</th>
                          <th className="px-4 py-3 font-semibold text-primary-800 text-right">Efficiency</th>
                          <th className="px-4 py-3 font-semibold text-primary-800 text-right">Fuel Cost/kWh</th>
                          <th className="px-4 py-3 font-semibold text-primary-800 text-right">Annual Cost*</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Gas boiler (old)</td>
                          <td className="px-4 py-3 text-right">75-80%</td>
                          <td className="px-4 py-3 text-right">7p</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(1100)}-{formatCurrency(1300)}</td>
                        </tr>
                        <tr className="border-t border-neutral-100">
                          <td className="px-4 py-3 font-medium">Gas boiler (new A-rated)</td>
                          <td className="px-4 py-3 text-right">90-94%</td>
                          <td className="px-4 py-3 text-right">7p</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(900)}-{formatCurrency(1100)}</td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-success-50">
                          <td className="px-4 py-3 font-medium">Air source heat pump</td>
                          <td className="px-4 py-3 text-right">280-350%</td>
                          <td className="px-4 py-3 text-right">22p</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(700)}-{formatCurrency(900)}</td>
                        </tr>
                        <tr className="border-t border-neutral-100 bg-success-50">
                          <td className="px-4 py-3 font-medium">Ground source heat pump</td>
                          <td className="px-4 py-3 text-right">350-450%</td>
                          <td className="px-4 py-3 text-right">22p</td>
                          <td className="px-4 py-3 text-right">{formatCurrency(550)}-{formatCurrency(750)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-2">
                    <p className="text-xs text-neutral-500 italic">
                      *Estimated annual heating cost for a typical 3-bed semi-detached house (12,000 kWh demand). Actual costs depend on insulation level, tariff, and usage patterns.
                    </p>
                  </div>
                </div>

                <TipBox title="Time-of-Use Tariffs">
                  <p>
                    Heat pumps can take advantage of cheaper overnight electricity rates. With a smart tariff, heat pump running costs can be significantly reduced. Advise tenants to consider Octopus Agile, Intelligent Octopus, or similar time-of-use tariffs.
                  </p>
                </TipBox>
              </section>

              {/* When Heat Pump Makes Sense */}
              <section id="when-heat-pump-makes-sense" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">
                  When a Heat Pump Makes Sense for Landlords
                </h2>

                <div className="prose max-w-none mb-6">
                  <p>
                    Heat pumps are not the right choice for every property or every landlord situation. Here is when to consider them and when to look at alternatives.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-5">
                    <h4 className="font-semibold text-success-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Good Candidates for Heat Pumps
                    </h4>
                    <ul className="space-y-2 text-sm text-success-700">
                      <li>Property needs significant EPC improvement</li>
                      <li>Current boiler is old or approaching end of life</li>
                      <li>Property has or will have good insulation</li>
                      <li>Outdoor space available for unit</li>
                      <li>Long-term ownership planned</li>
                      <li>Tenant is engaged and will use system correctly</li>
                      <li>Property is off-gas (oil/LPG) - running cost savings are larger</li>
                    </ul>
                  </div>

                  <div className="bg-warning-50 border border-warning-200 rounded-lg p-5">
                    <h4 className="font-semibold text-warning-800 mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Consider Alternatives When
                    </h4>
                    <ul className="space-y-2 text-sm text-warning-700">
                      <li>Current boiler is efficient and relatively new</li>
                      <li>Property is poorly insulated with no plans to improve</li>
                      <li>No space for outdoor unit</li>
                      <li>Planning to sell property soon</li>
                      <li>Property already at or near EPC C</li>
                      <li>Flat with no access to outdoor space</li>
                      <li>Conservation area/listed building restrictions</li>
                    </ul>
                  </div>
                </div>

                <WarningBox title="Boiler vs Heat Pump Decision">
                  <p>
                    If your property only needs a few EPC points to reach C and the boiler is end-of-life, a new A-rated gas boiler ({formatCurrency(2500)}-{formatCurrency(4000)}) may be more practical than a heat pump. Heat pumps make most sense when you need substantial EPC improvement or when future-proofing justifies the additional effort.
                  </p>
                </WarningBox>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Your Next Steps</h2>

                <ol className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Check your current EPC</h4>
                      <p className="text-neutral-600 text-sm">
                        You need a valid EPC to apply. If yours is expired, get a new one.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Get quotes from MCS installers</h4>
                      <p className="text-neutral-600 text-sm">
                        Use the MCS installer finder to get at least 3 quotes. Compare not just price but system design.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Consider insulation first</h4>
                      <p className="text-neutral-600 text-sm">
                        Check if ECO4 can fund insulation improvements to make the heat pump more effective.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-800">Accept quote and installer applies for voucher</h4>
                      <p className="text-neutral-600 text-sm">
                        Once you choose an installer, they handle the BUS application process.
                      </p>
                    </div>
                  </li>
                </ol>

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-shrink-0">
                      <Calculator className="h-12 w-12 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-800 text-lg mb-1">
                        Calculate Your Full Upgrade Costs
                      </h3>
                      <p className="text-neutral-600">
                        See how a heat pump fits into your overall EPC compliance strategy.
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
                    sourceName="GOV.UK"
                    documentTitle="Apply for the Boiler Upgrade Scheme"
                    url="https://www.gov.uk/apply-boiler-upgrade-scheme"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Ofgem"
                    documentTitle="Boiler Upgrade Scheme guidance"
                    url="https://www.ofgem.gov.uk/environmental-and-social-schemes/boiler-upgrade-scheme-bus"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="MCS"
                    documentTitle="Find a certified installer"
                    url="https://mcscertified.com/find-an-installer/"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Energy Saving Trust"
                    documentTitle="Air source heat pumps"
                    url="https://energysavingtrust.org.uk/advice/air-source-heat-pumps/"
                    accessedDate="January 2026"
                  />
                </div>
              </section>

              {/* Related Content */}
              <section className="mt-12">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Related Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <RelatedContentCard
                    title="ECO4 for Landlords"
                    excerpt="Free insulation to prepare your property for a heat pump."
                    href="/costs/eco4-landlords"
                    category="Funding"
                    readingTime={12}
                  />
                  <RelatedContentCard
                    title="Warm Homes Local Grant"
                    excerpt="Up to £30,000 including low carbon heating."
                    href="/costs/warm-homes-local-grant"
                    category="Funding"
                    readingTime={10}
                  />
                  <RelatedContentCard
                    title="E to C Upgrade Costs"
                    excerpt="Heat pumps as part of major EPC improvements."
                    href="/costs/e-to-c-upgrade"
                    category="Costs"
                    readingTime={14}
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
