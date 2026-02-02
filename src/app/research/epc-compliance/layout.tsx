import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPC Compliance Research & Data | GreenLord',
  description:
    'Research and data analysis on EPC compliance across the UK private rented sector. Explore trends by region, property type, and rating.',
  alternates: {
    canonical: 'https://greenlord.co.uk/research/epc-compliance',
  },
  openGraph: {
    title: 'EPC Compliance Research & Data | GreenLord',
    description:
      'Research and data analysis on EPC compliance across the UK private rented sector.',
    type: 'website',
  },
};

export default function EPCComplianceResearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
