import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  Calendar,
  PoundSterling,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  Clock,
  ArrowRight,
  Home,
  Users,
  Building2,
  Landmark,
  Coins
} from 'lucide-react';

import { Container, Section, Sidebar } from '@/components/layout';
import { Card, CardBody, CardTitle, CardDescription } from '@/components/ui';
import { Badge } from '@/components/ui';
import { Button } from '@/components/ui';
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
import { formatCurrency, formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Warm Homes Plan Summary for Landlords | GreenLord',
  description: 'Key takeaways from the January 2026 Warm Homes Plan for UK landlords. What is confirmed, what funding is available, and what remains uncertain.',
};

const breadcrumbs = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Regulations', url: `${SITE_CONFIG.url}/regulations` },
  { name: 'Warm Homes Plan Summary', url: `${SITE_CONFIG.url}/regulations/warm-homes-plan` },
];

const tocItems = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'key-provisions', title: 'Key Provisions for Landlords', level: 2 },
  { id: 'funding-provisions', title: 'Funding Provisions', level: 2 },
  { id: 'confirmed', title: 'What Is Confirmed', level: 2 },
  { id: 'uncertain', title: 'What Remains Uncertain', level: 2 },
  { id: 'landlord-impact', title: 'Impact on Landlords', level: 2 },
  { id: 'next-steps', title: 'Next Steps', level: 2 },
];

const relatedArticles = [
  {
    title: 'EPC C 2030 Deadline',
    href: '/regulations/epc-c-2030-deadline',
    description: 'Full details on the October 2030 deadline',
  },
  {
    title: 'Cost Cap and Exemptions',
    href: '/regulations/cost-cap-exemptions',
    description: 'Understanding the GBP 10,000 cost cap',
  },
  {
    title: 'MEES Regulations Guide',
    href: '/regulations/mees-regulations-guide',
    description: 'Complete guide to minimum standards',
  },
];

export default function WarmHomesPlanPage() {
  return (
    <>
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="max-w-none">
              <Breadcrumbs items={breadcrumbs} />

              <ArticleHeader
                title="Warm Homes Plan: What It Means for Landlords"
                publishedDate="2026-01-22"
                lastUpdated="2026-01-25"
                author={SITE_CONFIG.author}
                readingTime={8}
                subtitle="The government's Warm Homes Plan, published 21 January 2026, confirms the EPC C requirement for rental properties. Here is what landlords need to know."
              />

              {/* Publication Details */}
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <FileText className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-primary-800 mb-2">Document Details</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-primary-600">Published:</span>
                        <span className="text-primary-800 ml-2 font-medium">21 January 2026</span>
                      </div>
                      <div>
                        <span className="text-primary-600">Publisher:</span>
                        <span className="text-primary-800 ml-2 font-medium">Department for Energy Security and Net Zero</span>
                      </div>
                      <div>
                        <span className="text-primary-600">Full Title:</span>
                        <span className="text-primary-800 ml-2 font-medium">Warm Homes Plan</span>
                      </div>
                      <div>
                        <span className="text-primary-600">Pages:</span>
                        <span className="text-primary-800 ml-2 font-medium">Policy document</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <section id="overview" className="mt-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Overview</h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  The Warm Homes Plan is the government&apos;s flagship policy document setting out how England
                  will upgrade the energy efficiency of its housing stock. For landlords, it is the document
                  that confirms the EPC C requirement for private rented properties by October 2030.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  After years of consultation, delay, and uncertainty following previous government proposals
                  that were ultimately withdrawn, this document provides the regulatory certainty landlords
                  have been waiting for. The key requirements are now law, and the countdown to compliance
                  has begun.
                </p>

                <GeneratedImage
                  imageId="warm-homes-plan-hero"
                  alt="Key highlights from the Warm Homes Plan policy document"
                  prompt="A close-up photograph of the official Warm Homes Plan government policy document open on a desk, with key sections highlighted. Nearby sits a landlord's notebook with handwritten summary notes, a pen, and reading glasses, suggesting careful study of the new regulations. Capture the official, governmental nature of the policy document. Include elements showing landlord engagement with the material. Professional documentary style emphasising importance of the legislation."
                  width={800}
                  height={400}
                  priority
                />
              </section>

              {/* Key Provisions for Landlords */}
              <section id="key-provisions" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Key Provisions for Landlords</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Warm Homes Plan contains several provisions that directly affect private landlords.
                  Here are the key requirements:
                </p>

                <div className="space-y-4 my-8">
                  <Card className="border-l-4 border-l-primary-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <Calendar className="h-5 w-5 text-primary-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary-800 text-lg mb-2">EPC C Requirement by October 2030</h3>
                          <p className="text-neutral-600 mb-3">
                            All privately rented properties in England and Wales must achieve an EPC rating of C
                            or above by 1 October 2030. This applies to both new and existing tenancies from that date.
                          </p>
                          <Badge variant="primary">Confirmed in legislation</Badge>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="border-l-4 border-l-accent-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-accent-100 rounded-lg">
                          <PoundSterling className="h-5 w-5 text-accent-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-accent-800 text-lg mb-2">{formatCurrency(KEY_DATES.costCap)} Cost Cap</h3>
                          <p className="text-neutral-600 mb-3">
                            Landlords are required to spend up to {formatCurrency(KEY_DATES.costCap)} (including VAT)
                            on energy efficiency improvements. Those who cannot achieve EPC C after this spend can
                            register for a cost cap exemption.
                          </p>
                          <Badge variant="secondary">Increased from GBP 3,500</Badge>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="border-l-4 border-l-danger-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-danger-100 rounded-lg">
                          <AlertTriangle className="h-5 w-5 text-danger-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-danger-700 text-lg mb-2">{formatCurrency(KEY_DATES.maxPenalty)} Maximum Penalty</h3>
                          <p className="text-neutral-600 mb-3">
                            Non-compliant landlords face penalties of up to {formatCurrency(KEY_DATES.maxPenalty)} per property.
                            This represents a significant increase from the previous {formatCurrency(5000)} maximum.
                          </p>
                          <Badge variant="danger">Significant increase</Badge>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="border-l-4 border-l-warning-500">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-warning-100 rounded-lg">
                          <Users className="h-5 w-5 text-warning-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-warning-700 text-lg mb-2">Single Deadline for All Tenancies</h3>
                          <p className="text-neutral-600 mb-3">
                            Unlike previous MEES implementation, both new and existing tenancies must comply from
                            the same date. There is no grace period for existing tenancies.
                          </p>
                          <Badge variant="warning">Change from previous approach</Badge>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <KeyFactBox title="The Core Requirement" icon={Home}>
                  By 1 October 2030, your rental property must either have an EPC rating of C or above,
                  or you must have a valid exemption registered on the PRS Exemptions Register. There
                  are no exceptions for existing tenancies.
                </KeyFactBox>
              </section>

              {/* Funding Provisions */}
              <section id="funding-provisions" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Funding Provisions</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Warm Homes Plan includes several funding mechanisms to help achieve its energy efficiency
                  goals. While most funding is targeted at owner-occupiers and social housing, landlords may
                  benefit in certain circumstances.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <Coins className="h-6 w-6 text-success-500" />
                        <CardTitle className="text-lg">ECO4 Scheme</CardTitle>
                      </div>
                      <CardDescription className="mb-4">
                        The Energy Company Obligation (ECO4) provides funding for energy efficiency improvements
                        in properties where the tenant receives certain means-tested benefits. Landlords can access
                        this funding to improve rental properties.
                      </CardDescription>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Available for properties with EPC D, E, F, or G
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Tenant must receive qualifying benefits
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Can cover insulation, heating, and more
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <Landmark className="h-6 w-6 text-success-500" />
                        <CardTitle className="text-lg">Warm Homes: Local Grant</CardTitle>
                      </div>
                      <CardDescription className="mb-4">
                        Local authority-administered grants for home energy improvements. Eligibility varies by
                        location and is primarily targeted at owner-occupiers, but some councils include
                        private landlords in their schemes.
                      </CardDescription>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Administered by local councils
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Eligibility varies by area
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Check your local council for details
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <Building2 className="h-6 w-6 text-success-500" />
                        <CardTitle className="text-lg">Boiler Upgrade Scheme</CardTitle>
                      </div>
                      <CardDescription className="mb-4">
                        Grants of up to {formatCurrency(7500)} towards heat pump installation. Available to
                        landlords for rental properties, providing a significant contribution towards the
                        cost of switching from gas or oil to a heat pump.
                      </CardDescription>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          {formatCurrency(7500)} for air source heat pump
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          {formatCurrency(7500)} for ground source heat pump
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Property must not be on gas grid (for some schemes)
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <div className="flex items-center gap-2 mb-4">
                        <Home className="h-6 w-6 text-success-500" />
                        <CardTitle className="text-lg">Great British Insulation Scheme</CardTitle>
                      </div>
                      <CardDescription className="mb-4">
                        Targeted support for insulation improvements in less energy-efficient homes. Includes
                        provisions for both owner-occupiers and private rented sector properties.
                      </CardDescription>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Targets properties rated D-G
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Cavity wall and loft insulation focus
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          Some schemes include PRS properties
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>

                <TipBox title="Funding Tip for Landlords">
                  Funding availability for landlords is more limited than for owner-occupiers. The best
                  opportunities are through ECO4 (if your tenant receives qualifying benefits) and the
                  Boiler Upgrade Scheme (if considering a heat pump). Check eligibility early and factor
                  potential funding into your compliance budget.
                </TipBox>
              </section>

              {/* What Is Confirmed */}
              <section id="confirmed" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What Is Confirmed</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Warm Homes Plan provides clarity on several issues that had been uncertain following
                  previous consultations. Here is what we now know for certain:
                </p>

                <div className="bg-success-50 border border-success-200 rounded-xl p-6 my-8">
                  <h3 className="font-semibold text-success-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Confirmed Provisions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-success-800">EPC C requirement:</strong>
                        <span className="text-success-700 ml-1">
                          Minimum rating of C (score 69 or above) required by 1 October 2030.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-success-800">Cost cap of {formatCurrency(10000)}:</strong>
                        <span className="text-success-700 ml-1">
                          Including VAT, for exemption eligibility.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-success-800">Maximum penalty of {formatCurrency(30000)}:</strong>
                        <span className="text-success-700 ml-1">
                          Per property for non-compliance.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-success-800">Single deadline for all tenancies:</strong>
                        <span className="text-success-700 ml-1">
                          Both new and existing tenancies must comply from 1 October 2030.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-success-800">Exemption categories maintained:</strong>
                        <span className="text-success-700 ml-1">
                          Cost cap, consent, devaluation, and wall insulation exemptions continue.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-success-800">Five-year exemption duration:</strong>
                        <span className="text-success-700 ml-1">
                          Exemptions remain valid for 5 years from registration.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-success-800">Public exemptions register:</strong>
                        <span className="text-success-700 ml-1">
                          Non-compliance and exemptions publicly recorded.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* What Remains Uncertain */}
              <section id="uncertain" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">What Remains Uncertain</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  While the Warm Homes Plan provides significant clarity, some questions remain open or
                  subject to further guidance. Landlords should be aware of these uncertainties:
                </p>

                <div className="bg-warning-50 border border-warning-200 rounded-xl p-6 my-8">
                  <h3 className="font-semibold text-warning-800 mb-4 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Areas of Uncertainty
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-warning-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-warning-800">Enforcement approach:</strong>
                        <span className="text-warning-700 ml-1">
                          How actively local authorities will enforce remains to be seen. Resources and
                          priorities vary by council.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-warning-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-warning-800">Future cost cap changes:</strong>
                        <span className="text-warning-700 ml-1">
                          The cost cap may be reviewed in future. What applies when your exemption expires
                          in 5 years is not guaranteed.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-warning-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-warning-800">EPC methodology future changes:</strong>
                        <span className="text-warning-700 ml-1">
                          RdSAP 10 is current, but methodology continues to evolve. Future changes could
                          affect ratings.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-warning-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-warning-800">Specific local funding availability:</strong>
                        <span className="text-warning-700 ml-1">
                          Local grant schemes vary and change. What is available in your area today may
                          differ tomorrow.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-warning-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-warning-800">Interaction with other regulations:</strong>
                        <span className="text-warning-700 ml-1">
                          How MEES interacts with Renters&apos; Rights reforms and other tenancy changes
                          may create additional complexity.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <WarningBox title="Plan for Uncertainty">
                  Given these uncertainties, it is prudent to aim for genuine compliance rather than relying
                  heavily on exemptions. Regulations have consistently become more stringent over time.
                  What qualifies for exemption today may not in five years.
                </WarningBox>
              </section>

              {/* Impact on Landlords */}
              <section id="landlord-impact" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Impact on Landlords</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Warm Homes Plan has significant implications for landlords across England and Wales.
                  Understanding these impacts helps you plan effectively.
                </p>

                <div className="space-y-4 my-8">
                  <Card>
                    <CardBody className="flex items-start gap-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <PoundSterling className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Financial Planning Required</CardTitle>
                        <CardDescription>
                          With the cost cap set at {formatCurrency(10000)}, landlords need to budget for
                          significant investment. For properties requiring substantial work, costs may exceed
                          this even before achieving EPC C. Factor improvement costs into your financial
                          planning now.
                        </CardDescription>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody className="flex items-start gap-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Timeline Certainty</CardTitle>
                        <CardDescription>
                          The October 2030 deadline is now confirmed. This provides certainty for planning
                          improvements. With approximately four years remaining, landlords can create realistic
                          timelines for upgrading their portfolios.
                        </CardDescription>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody className="flex items-start gap-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Building2 className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Portfolio Decisions</CardTitle>
                        <CardDescription>
                          Some landlords may need to make strategic decisions about their portfolios. Properties
                          that cannot be economically improved to EPC C may need to be sold or converted to
                          alternative uses. The clarity provided by this plan enables informed decision-making.
                        </CardDescription>
                      </div>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody className="flex items-start gap-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Increased Compliance Risk</CardTitle>
                        <CardDescription>
                          The higher penalties ({formatCurrency(30000)} maximum) and public listing of
                          non-compliant landlords increase the risk of non-compliance. The reputational
                          impact of public listing may affect future letting and sales.
                        </CardDescription>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <InfoBox title="For Portfolio Landlords">
                  If you have multiple properties, prioritise improvements strategically. Start with properties
                  closest to the C threshold (where improvement costs are lowest), properties with tenancy
                  renewals due, and properties where funded improvements are available. Create a portfolio-wide
                  compliance plan rather than addressing properties ad hoc.
                </InfoBox>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mt-12">
                <h2 className="text-2xl font-bold text-primary-800 mb-4">Next Steps for Landlords</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  With the Warm Homes Plan now published, here is what landlords should do:
                </p>

                <div className="space-y-4 my-8">
                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Review Your Portfolio</h4>
                      <p className="text-neutral-600 text-sm">
                        Check current EPC ratings for all properties. Identify which are below C and will
                        need improvement. Note EPC expiry dates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Estimate Improvement Costs</h4>
                      <p className="text-neutral-600 text-sm">
                        For each property below C, estimate what improvements will be needed and their cost.
                        Use our calculator and property guides for guidance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Explore Funding Options</h4>
                      <p className="text-neutral-600 text-sm">
                        Check ECO4 eligibility (tenant benefits), Boiler Upgrade Scheme, and local council
                        schemes. Factor any available funding into your budget.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Create a Compliance Timeline</h4>
                      <p className="text-neutral-600 text-sm">
                        Plan when to make improvements for each property. Consider tenancy cycles, tax year
                        planning, and contractor availability. Avoid leaving everything until 2029-2030.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Make Strategic Decisions</h4>
                      <p className="text-neutral-600 text-sm">
                        For properties where compliance is uneconomic, consider whether to sell, convert to
                        alternative use, or invest in major renovation. The clarity from this plan enables
                        informed choices.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8">
                <h2 className="text-xl font-bold text-primary-800 mb-4">Start Planning Your Compliance</h2>
                <p className="text-primary-700 mb-6">
                  Use our tools and guides to understand what the Warm Homes Plan means for your specific
                  properties and create your compliance action plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" leftIcon={<PoundSterling className="h-5 w-5" />}>
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
                    excerpt="Full details on the October 2030 deadline and what it means for your properties."
                    href="/regulations/epc-c-2030-deadline"
                    category="Regulations"
                    readingTime={8}
                  />
                  <RelatedContentCard
                    title="Cost Cap and Exemptions"
                    excerpt="Detailed guide to the GBP 10,000 cost cap and exemption categories."
                    href="/regulations/cost-cap-exemptions"
                    category="Regulations"
                    readingTime={10}
                  />
                </div>
              </section>

              {/* Sources */}
              <section className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">Sources</h3>
                <div className="space-y-2">
                  <SourceCitation
                    sourceName="GOV.UK"
                    documentTitle="Warm Homes Plan"
                    url="https://www.gov.uk/government/publications/warm-homes-plan"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Department for Energy Security and Net Zero"
                    documentTitle="Warm Homes Plan Policy Paper"
                    url="https://www.gov.uk/government/publications/warm-homes-plan"
                    accessedDate="January 2026"
                  />
                  <SourceCitation
                    sourceName="Ofgem"
                    documentTitle="ECO4 Guidance"
                    url="https://www.ofgem.gov.uk/environmental-and-social-schemes/energy-company-obligation-eco"
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
