import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calculator,
  FileCheck,
  ClipboardList,
  TrendingUp,
  ArrowRight,
  Zap,
  PoundSterling,
  Clock,
  CheckCircle,
  Construction,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Free EPC Compliance Tools for Landlords | GreenLord',
  description: 'Free interactive tools to help UK landlords plan their EPC compliance. Cost calculator, grant eligibility checker, exemption pathway tool, and more.',
  openGraph: {
    title: 'Free EPC Compliance Tools for Landlords',
    description: 'Interactive tools to help UK landlords plan EPC upgrades, check grant eligibility, and navigate compliance requirements.',
    type: 'website',
  },
};

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  features: string[];
  status: 'available' | 'coming-soon';
  highlighted?: boolean;
}

function ToolCard({
  title,
  description,
  href,
  icon: Icon,
  features,
  status,
  highlighted = false,
}: ToolCardProps) {
  const isAvailable = status === 'available';

  return (
    <Card
      variant={highlighted ? 'highlighted' : 'default'}
      padding="lg"
      className={cn(
        'relative h-full flex flex-col',
        !isAvailable && 'opacity-75'
      )}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        {isAvailable ? (
          <Badge variant="success" size="sm">Available</Badge>
        ) : (
          <Badge variant="secondary" size="sm">Coming Soon</Badge>
        )}
      </div>

      <CardHeader className="pb-2">
        <div className={cn(
          'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
          highlighted ? 'bg-primary-100' : 'bg-neutral-100'
        )}>
          <Icon className={cn(
            'h-6 w-6',
            highlighted ? 'text-primary-700' : 'text-neutral-600'
          )} />
        </div>
        <CardTitle as="h2" className="text-xl">
          {title}
        </CardTitle>
        <CardDescription className="text-base mt-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <h4 className="text-sm font-medium text-neutral-700 mb-2">Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
              <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-success-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-4">
        {isAvailable ? (
          <Link href={href} className="w-full">
            <Button
              variant={highlighted ? 'primary' : 'outline'}
              className="w-full"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Use Tool
            </Button>
          </Link>
        ) : (
          <Button
            variant="ghost"
            className="w-full"
            disabled
          >
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function ToolsPage() {
  const tools: ToolCardProps[] = [
    {
      title: 'Upgrade Cost Calculator',
      description: 'Get personalised cost estimates for improving your rental property to EPC C based on property type, location, and current condition.',
      href: '/tools/cost-calculator',
      icon: Calculator,
      features: [
        'Tailored to your property type and size',
        'Regional cost adjustments',
        'Improvement priority recommendations',
        'EPC point estimates per measure',
        'Cost cap exemption indicator',
      ],
      status: 'available',
      highlighted: false,
    },
    {
      title: 'Grant Eligibility Checker',
      description: 'Find out which government grants and schemes you may qualify for based on your property and tenant circumstances.',
      href: '/tools/grant-eligibility',
      icon: PoundSterling,
      features: [
        'Check ECO4 eligibility',
        'Boiler Upgrade Scheme (BUS) guide',
        'Warm Homes: Local Grant lookup',
        'Great British Insulation Scheme',
        'Local authority schemes by postcode',
      ],
      status: 'available',
      highlighted: true,
    },
    {
      title: 'Exemption Pathway Tool',
      description: 'Understand if you qualify for a cost cap exemption and what evidence you need to register.',
      href: '/tools/exemption-checker',
      icon: FileCheck,
      features: [
        'Step-by-step exemption assessment',
        'Evidence requirements checklist',
        'Registration process guide',
        'Exemption validity timeline',
        'Renewal planning support',
      ],
      status: 'coming-soon',
    },
    {
      title: 'Upgrade Priority Recommender',
      description: 'Get a prioritised improvement plan that maximises your EPC gains within your available budget.',
      href: '/tools/priority-planner',
      icon: TrendingUp,
      features: [
        'Budget-constrained optimisation',
        'Cost-per-EPC-point ranking',
        'Cumulative progress tracking',
        'Quick wins identification',
        'Property-specific recommendations',
      ],
      status: 'coming-soon',
    },
  ];

  return (
    <>
      <PageHeader
        title="Free EPC Compliance Tools"
        subtitle="Interactive tools to help you plan your EPC upgrades, understand costs, check funding eligibility, and navigate the compliance process."
        breadcrumbs={[
          { name: 'Tools', url: `${SITE_CONFIG.url}/tools` },
        ]}
        centered
      >
        <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <Zap className="h-4 w-4" />
            Free to use
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            Results in minutes
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4" />
            No registration required
          </span>
        </div>
      </PageHeader>

      {/* Main Tools Grid */}
      <Section background="muted" padding="lg">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {tools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </Container>
      </Section>

      {/* How Tools Help */}
      <Section background="white" padding="lg">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-4">
              How Our Tools Help You
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Making informed decisions about EPC compliance requires good data. Our tools provide the estimates and guidance you need to plan confidently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <PoundSterling className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                Realistic Cost Estimates
              </h3>
              <p className="text-neutral-600">
                Based on Energy Saving Trust data and adjusted for your region and property type. No vague ranges - get specific figures you can budget against.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent-100 flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-accent-700" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                Prioritised Recommendations
              </h3>
              <p className="text-neutral-600">
                See which improvements offer the best value for money, so you can make the most of your budget and avoid overspending on unnecessary work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-success-100 flex items-center justify-center mb-4">
                <ClipboardList className="h-8 w-8 text-success-700" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                Clear Action Plans
              </h3>
              <p className="text-neutral-600">
                Understand exactly what improvements you need, in what order, and what they will cost. Leave with a concrete plan you can act on.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <Container size="md">
          <div className="text-center">
            <Calculator className="h-12 w-12 mx-auto text-white/80 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Start with the Cost Calculator
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Get a personalised estimate in under 3 minutes. See what improvements you need and what they will cost for your specific property.
            </p>
            <Link href="/tools/cost-calculator">
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Try the Calculator Now
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Coming Soon Tools */}
      <Section background="muted" padding="lg">
        <Container>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Construction className="h-5 w-5 text-neutral-500" />
              <h2 className="text-xl font-semibold text-neutral-700">
                More Tools Coming Soon
              </h2>
            </div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We are actively developing additional tools to help with grant eligibility checking, exemption pathway navigation, and upgrade prioritisation. Sign up for our newsletter to be notified when new tools launch.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" size="md" className="px-4 py-2">
              Exemption Pathway Tool - Q2 2026
            </Badge>
            <Badge variant="secondary" size="md" className="px-4 py-2">
              Upgrade Priority Planner - Q2 2026
            </Badge>
            <Badge variant="secondary" size="md" className="px-4 py-2">
              EPC Analyser - Q3 2026
            </Badge>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="white" padding="lg">
        <Container size="md">
          <h2 className="text-2xl font-bold text-primary-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">
                Are these tools really free?
              </h3>
              <p className="text-neutral-600">
                Yes, completely free with no registration required. We believe landlords need access to good information without barriers. Our tools are funded through the site as a whole, not individual tool usage.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">
                How accurate are the cost estimates?
              </h3>
              <p className="text-neutral-600">
                Our estimates are based on UK national averages from the Energy Saving Trust and industry data, adjusted for regional variations and property type. They are designed for planning and budgeting purposes. Always obtain multiple quotes from qualified installers for actual work.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">
                Do I need to create an account?
              </h3>
              <p className="text-neutral-600">
                No account is needed. Your inputs are processed in your browser and not stored on our servers. You can save or print your results for reference.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">
                Can I use these tools for any property in the UK?
              </h3>
              <p className="text-neutral-600">
                Yes, our tools cover all regions of the UK including England, Wales, Scotland, and Northern Ireland. Regional cost adjustments are applied automatically based on the location you select.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">
                Do these tools replace a professional EPC assessment?
              </h3>
              <p className="text-neutral-600">
                No. Our tools provide estimates for planning purposes, but a professional EPC assessment from an accredited assessor is required for official ratings and to identify the specific improvements that will work best for your individual property.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
