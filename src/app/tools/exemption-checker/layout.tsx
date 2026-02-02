import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPC Exemption Checker for Landlords | GreenLord',
  description:
    'Check if you qualify for an EPC cost cap exemption. Step-by-step assessment of your exemption eligibility with evidence requirements.',
  alternates: {
    canonical: 'https://greenlord.co.uk/tools/exemption-checker',
  },
  openGraph: {
    title: 'EPC Exemption Checker | GreenLord',
    description:
      'Check if you qualify for a cost cap exemption. Free tool for UK landlords.',
    type: 'website',
  },
};

export default function ExemptionCheckerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
