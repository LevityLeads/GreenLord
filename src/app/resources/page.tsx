import { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, BookOpen, FileText, Calculator, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resources | GreenLord - UK Landlord EPC Compliance',
  description:
    'Access our comprehensive resources for UK landlords including FAQs about EPC requirements, glossary of energy efficiency terms, and compliance guidance.',
  alternates: {
    canonical: 'https://greenlord.co.uk/resources',
  },
  openGraph: {
    title: 'Resources for UK Landlords | GreenLord',
    description:
      'Access our comprehensive resources including FAQs, glossary, and guides to help you navigate EPC compliance requirements.',
    url: `${SITE_CONFIG.url}/resources`,
    type: 'website',
  },
};

const resources = [
  {
    title: 'Frequently Asked Questions',
    description:
      'Get answers to the most common questions about EPC requirements, the 2030 deadline, costs, exemptions, and property-specific guidance. Our comprehensive FAQ covers everything landlords need to know.',
    href: '/resources/faq',
    icon: HelpCircle,
    badge: '28 Questions',
    highlights: [
      'General EPC requirements',
      'Costs and funding options',
      'Property-specific guidance',
      'Exemption criteria',
      'Assessment process',
    ],
  },
  {
    title: 'Glossary of Terms',
    description:
      'Understand the jargon and technical terminology used in EPC assessments and energy efficiency regulations. Our glossary provides clear, landlord-focused definitions for all key terms.',
    href: '/resources/glossary',
    icon: BookOpen,
    badge: '35+ Terms',
    highlights: [
      'EPC and MEES terminology',
      'Insulation types explained',
      'Heating system terms',
      'Grant scheme names',
      'Technical measurements',
    ],
  },
];

const quickLinks = [
  {
    title: 'EPC C 2030 Deadline',
    description: 'Understand the key dates and requirements',
    href: '/regulations/epc-c-2030-deadline',
    icon: FileText,
  },
  {
    title: 'Cost Calculator',
    description: 'Estimate your upgrade costs',
    href: '/tools/cost-calculator',
    icon: Calculator,
  },
  {
    title: 'Cost Cap Exemptions',
    description: 'Learn about exemption options',
    href: '/regulations/cost-cap-exemptions',
    icon: FileText,
  },
];

export default function ResourcesPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Resources', url: `${SITE_CONFIG.url}/resources` },
  ];

  return (
    <>
      <PageHeader
        title="Landlord Resources"
        subtitle="Everything you need to understand EPC compliance requirements. Access our FAQs, glossary, and guidance materials designed specifically for UK landlords."
        breadcrumbs={breadcrumbs}
        background="muted"
      />

      <Section background="white" padding="lg">
        <Container>
          {/* Main Resources Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card
                  key={resource.href}
                  as="article"
                  variant="default"
                  padding="none"
                  className="flex flex-col overflow-hidden"
                >
                  <div className="p-6 pb-0">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                          <Icon className="h-6 w-6 text-primary-700" aria-hidden="true" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-primary-800">{resource.title}</h2>
                          <Badge variant="primary" size="sm" className="mt-1">
                            {resource.badge}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-600 mb-4">{resource.description}</p>

                    <div className="border-t border-neutral-100 pt-4">
                      <h3 className="text-sm font-semibold text-neutral-700 mb-2">
                        What you will find:
                      </h3>
                      <ul className="space-y-1.5">
                        {resource.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 text-sm text-neutral-600"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <CardFooter className="mt-auto border-t-0 pt-6 px-6 pb-6">
                    <Link href={resource.href} className="w-full">
                      <Button
                        variant="primary"
                        fullWidth
                        rightIcon={<ArrowRight className="h-4 w-4" />}
                      >
                        View {resource.title.split(' ')[resource.title.split(' ').length - 1]}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Quick Links Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link key={link.href} href={link.href} className="group">
                    <Card
                      hoverable
                      variant="default"
                      padding="md"
                      className="h-full transition-all group-hover:border-primary-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 group-hover:bg-primary-100 transition-colors">
                          <Icon
                            className="h-5 w-5 text-neutral-600 group-hover:text-primary-700 transition-colors"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-neutral-800 group-hover:text-primary-700 transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-sm text-neutral-500 mt-0.5">{link.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Help Section */}
      <Section background="muted" padding="md">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-xl font-bold text-primary-800 mb-3">
              Cannot find what you are looking for?
            </h2>
            <p className="text-neutral-600 mb-6">
              Our resources are regularly updated based on the latest regulations and landlord
              feedback. If you have a question that is not covered, check our comprehensive guides
              or use the calculator for personalised recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/regulations/epc-c-2030-deadline">
                <Button variant="outline">Read the Full Guide</Button>
              </Link>
              <Link href="/tools/cost-calculator">
                <Button variant="primary">Try the Calculator</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
