import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FAQ - EPC Compliance Questions Answered | GreenLord',
  description:
    'Get answers to 28 frequently asked questions about EPC requirements for UK landlords. Learn about the 2030 deadline, costs, exemptions, and property-specific guidance.',
  keywords: [
    'EPC FAQ',
    'landlord EPC questions',
    'EPC C requirement',
    '2030 deadline FAQ',
    'MEES regulations FAQ',
    'cost cap exemption',
    'EPC compliance help',
  ],
  alternates: {
    canonical: 'https://greenlord.co.uk/resources/faq',
  },
  openGraph: {
    title: 'FAQ - EPC Compliance Questions Answered | GreenLord',
    description:
      'Get answers to 28 frequently asked questions about EPC requirements for UK landlords.',
    url: `${SITE_CONFIG.url}/resources/faq`,
    type: 'website',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
