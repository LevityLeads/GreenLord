import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Calendar,
  PoundSterling,
  AlertTriangle,
  Home,
  Calculator,
  BookOpen,
  Landmark,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  FileText
} from 'lucide-react';

import { Button } from '@/components/ui';
import { Card, CardBody, CardTitle, CardDescription } from '@/components/ui';
import { Badge } from '@/components/ui';
import { Container, Section } from '@/components/layout';
import { KeyFactBox, GeneratedImage, RelatedContentCard } from '@/components/content';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { daysUntilDeadline, formatCurrency, formatNumber } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'GreenLord - UK Landlord EPC Compliance Guide',
  description: 'Navigate EPC C 2030 requirements with confidence. Expert guidance, cost calculators, and property-specific advice for UK landlords.',
  alternates: {
    canonical: 'https://greenlord.co.uk',
  },
};

export default function HomePage() {
  const daysRemaining = daysUntilDeadline();
  const yearsRemaining = Math.floor(daysRemaining / 365);
  const monthsRemaining = Math.floor((daysRemaining % 365) / 30);

  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="warning" size="lg" className="mb-6">
                <Clock className="h-4 w-4" />
                {formatNumber(daysRemaining)} days until October 2030
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
                Navigate UK Landlord EPC Compliance with Confidence
              </h1>

              <p className="text-xl text-primary-800/80 mb-8 max-w-xl">
                From 1 October 2030, all rental properties in England and Wales must achieve an EPC rating of C or above.
                We help you understand what this means, plan your upgrades, and avoid costly penalties.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" leftIcon={<Calculator className="h-5 w-5" />}>
                  <Link href="/tools/cost-calculator">Use Cost Calculator</Link>
                </Button>
                <Button variant="outline" size="lg" leftIcon={<BookOpen className="h-5 w-5" />}>
                  <Link href="/regulations">Read the Guide</Link>
                </Button>
              </div>

              {/* Countdown Box */}
              <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur rounded-xl p-4 border border-primary-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-800">{yearsRemaining}</div>
                  <div className="text-sm text-primary-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-800">{monthsRemaining}</div>
                  <div className="text-sm text-primary-600">Months</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-800">{formatNumber(daysRemaining)}</div>
                  <div className="text-sm text-primary-600">Days</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <GeneratedImage
                imageId="homepage-hero-landlord"
                alt="Professional landlord reviewing EPC documents in home office"
                prompt="A candid moment capturing a middle-aged British property landlord sat at their kitchen table on a weekday morning, reviewing an Energy Performance Certificate. Morning light streams through a nearby window, illuminating scattered paperwork and a laptop showing property listings. The landlord wears smart-casual clothes and reading glasses, pen in hand, with a thoughtful expression as they examine the EPC rating chart. A mug of tea sits nearby. The kitchen has typical British details - a kettle, tiled splashback, wooden cabinets. Focus on the authentic, relatable moment of a real person dealing with property paperwork. The EPC document should be partially visible but not the main focus - this is about the human experience."
                width={600}
                height={500}
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Facts Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              What Every Landlord Needs to Know
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The Warm Homes Plan confirmed in January 2026 sets out clear requirements.
              Here are the critical facts for your rental properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Deadline Card */}
            <Card variant="highlighted" className="text-center">
              <CardBody>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 mb-4">
                  <Calendar className="h-7 w-7 text-primary-700" />
                </div>
                <CardTitle className="text-2xl mb-2">1 October 2030</CardTitle>
                <CardDescription className="text-base">
                  Deadline for all rental properties (new and existing tenancies) to achieve EPC C or above
                </CardDescription>
              </CardBody>
            </Card>

            {/* Cost Cap Card */}
            <Card variant="highlighted" className="text-center">
              <CardBody>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 mb-4">
                  <PoundSterling className="h-7 w-7 text-accent-700" />
                </div>
                <CardTitle className="text-2xl mb-2">{formatCurrency(KEY_DATES.costCap)}</CardTitle>
                <CardDescription className="text-base">
                  Maximum spend required before you can claim a cost cap exemption (including VAT)
                </CardDescription>
              </CardBody>
            </Card>

            {/* Penalty Card */}
            <Card variant="highlighted" className="text-center">
              <CardBody>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-danger-100 mb-4">
                  <AlertTriangle className="h-7 w-7 text-danger-600" />
                </div>
                <CardTitle className="text-2xl mb-2">{formatCurrency(KEY_DATES.maxPenalty)}</CardTitle>
                <CardDescription className="text-base">
                  Maximum penalty per property for non-compliance, with public listing on exemptions register
                </CardDescription>
              </CardBody>
            </Card>

            {/* Properties Affected Card */}
            <Card variant="highlighted" className="text-center">
              <CardBody>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-warning-100 mb-4">
                  <Home className="h-7 w-7 text-warning-600" />
                </div>
                <CardTitle className="text-2xl mb-2">61%</CardTitle>
                <CardDescription className="text-base">
                  Of private rented sector properties are currently rated below EPC C and will need improvement
                </CardDescription>
              </CardBody>
            </Card>
          </div>
        </Container>
      </Section>

      {/* What You'll Learn Section */}
      <Section background="muted" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Everything You Need to Comply
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From understanding the regulations to calculating your costs and finding funding,
              we provide comprehensive guidance for every step of your compliance journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Regulations */}
            <Card hoverable as="article">
              <CardBody>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 mb-4">
                  <Landmark className="h-6 w-6 text-primary-700" />
                </div>
                <CardTitle as="h3" className="mb-2">Regulations</CardTitle>
                <CardDescription className="mb-4">
                  Understand EPC requirements, MEES regulations, the 2030 deadline, exemptions, and what happens if you do not comply.
                </CardDescription>
                <Link
                  href="/regulations"
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Learn about regulations
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardBody>
            </Card>

            {/* Property Guides */}
            <Card hoverable as="article">
              <CardBody>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-100 mb-4">
                  <Home className="h-6 w-6 text-accent-700" />
                </div>
                <CardTitle as="h3" className="mb-2">Property Guides</CardTitle>
                <CardDescription className="mb-4">
                  Property-specific upgrade recommendations for Victorian terraces, 1930s semis, flats, and more with realistic costs.
                </CardDescription>
                <Link
                  href="/property-types"
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Find your property type
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardBody>
            </Card>

            {/* Costs & Funding */}
            <Card hoverable as="article">
              <CardBody>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-success-100 mb-4">
                  <PoundSterling className="h-6 w-6 text-success-600" />
                </div>
                <CardTitle as="h3" className="mb-2">Costs & Funding</CardTitle>
                <CardDescription className="mb-4">
                  Realistic cost estimates for common improvements plus guidance on ECO4, Warm Homes grants, and other funding sources.
                </CardDescription>
                <Link
                  href="/costs"
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Explore costs and grants
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardBody>
            </Card>

            {/* Tools */}
            <Card hoverable as="article">
              <CardBody>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-warning-100 mb-4">
                  <Calculator className="h-6 w-6 text-warning-600" />
                </div>
                <CardTitle as="h3" className="mb-2">Tools</CardTitle>
                <CardDescription className="mb-4">
                  Interactive calculators to estimate your upgrade costs, check grant eligibility, and plan your path to compliance.
                </CardDescription>
                <Link
                  href="/tools"
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Try our tools
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardBody>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Featured Tool Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Featured Tool</Badge>
              <h2 className="text-3xl font-bold text-primary-800 mb-4">
                Upgrade Cost Calculator
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Get a realistic estimate of what it will cost to bring your property up to EPC C.
                Our calculator considers your property type, current rating, and location to provide
                personalised recommendations prioritised by cost-effectiveness.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Property-specific cost estimates based on your building type and age</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Improvements ranked by cost per EPC point to maximise your budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Regional cost adjustments for accurate London and national pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Indication of potential cost cap exemption eligibility</span>
                </li>
              </ul>

              <Button size="lg" leftIcon={<Calculator className="h-5 w-5" />}>
                <Link href="/tools/cost-calculator">Calculate Your Costs</Link>
              </Button>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-neutral-200">
                  <span className="font-medium text-neutral-700">Your current rating</span>
                  <Badge variant="warning" size="lg">D</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-neutral-200">
                  <span className="font-medium text-neutral-700">Target rating</span>
                  <Badge variant="success" size="lg">C</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-neutral-200">
                  <span className="font-medium text-neutral-700">Property type</span>
                  <span className="text-neutral-600">Victorian Terrace</span>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                  <div className="text-sm text-primary-700 mb-1">Estimated cost range</div>
                  <div className="text-2xl font-bold text-primary-800">{formatCurrency(4500)} - {formatCurrency(8200)}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Trust Us Section */}
      <Section background="muted" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-4 text-center">
              Written by Landlords, for Landlords
            </h2>
            <p className="text-lg text-neutral-600 mb-6 text-center">
              We understand the commercial realities of being a landlord. Our guidance is practical,
              not preachy. We focus on helping you make informed business decisions, not lecturing
              about environmental policy.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg border border-neutral-200">
                <div className="text-2xl font-bold text-primary-800">15+</div>
                <div className="text-sm text-neutral-600">Years experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-neutral-200">
                <div className="text-2xl font-bold text-primary-800">1,000+</div>
                <div className="text-sm text-neutral-600">EPCs assessed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-neutral-200">
                <div className="text-2xl font-bold text-primary-800">48hr</div>
                <div className="text-sm text-neutral-600">Content updates</div>
              </div>
            </div>

            <KeyFactBox title="Our Commitment to Accuracy">
              Every claim on this site is verified against primary government sources.
              We cite our sources, show publication dates, and update content within 48 hours of any regulatory change.
              If you spot an error, <Link href="/contact" className="text-primary-700 underline">let us know</Link>.
            </KeyFactBox>
          </div>
        </Container>
      </Section>

      {/* Latest Updates Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-2">
                Latest Updates
              </h2>
              <p className="text-neutral-600">
                Stay informed about regulatory changes and new guidance
              </p>
            </div>
            <Link
              href="/resources/news"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              View all updates
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <RelatedContentCard
              title="Warm Homes Plan Confirms 2030 Deadline"
              excerpt="The government's Warm Homes Plan, published 21 January 2026, confirms the EPC C requirement for all rental properties by October 2030 with a GBP 10,000 cost cap."
              href="/regulations/warm-homes-plan"
              category="Regulatory Update"
              readingTime={8}
            />
            <RelatedContentCard
              title="RdSAP 10 Launches June 2025"
              excerpt="The new EPC assessment methodology brings significant changes to how properties are rated. Should you wait or get assessed now? We explain what landlords need to know."
              href="/regulations/rdsap-10-changes"
              category="Technical Update"
              readingTime={6}
            />
            <RelatedContentCard
              title="Cost Cap Exemptions Explained"
              excerpt="Understanding the GBP 10,000 cost cap exemption is crucial for landlords with hard-to-treat properties. Learn how it works and whether you might qualify."
              href="/regulations/cost-cap-exemptions"
              category="Guide"
              readingTime={10}
            />
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Ready to Start Your Compliance Journey?
            </h2>
            <p className="text-xl text-primary-800/80 mb-8">
              Do not leave it until the last minute. With {formatNumber(daysRemaining)} days until the deadline,
              now is the time to assess your properties and plan your upgrades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" leftIcon={<Calculator className="h-5 w-5" />}>
                <Link href="/tools/cost-calculator">Estimate Your Costs</Link>
              </Button>
              <Button size="lg" variant="outline" leftIcon={<FileText className="h-5 w-5" />}>
                <Link href="/regulations">Read the Full Guide</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
