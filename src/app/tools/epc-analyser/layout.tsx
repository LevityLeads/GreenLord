import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPC Analyser Tool for Landlords | GreenLord',
  description:
    'Analyse your existing EPC certificate to get detailed insights, improvement recommendations, and cost estimates for reaching EPC C.',
  alternates: {
    canonical: 'https://greenlord.co.uk/tools/epc-analyser',
  },
  openGraph: {
    title: 'EPC Analyser Tool | GreenLord',
    description:
      'Upload your EPC to get detailed analysis, recommendations, and cost estimates.',
    type: 'website',
  },
};

export default function EPCAnalyserLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
