import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grant Eligibility Checker for Landlords | GreenLord',
  description:
    'Check your eligibility for ECO4, Boiler Upgrade Scheme, Warm Homes Local Grant, and other funding for EPC improvements.',
  alternates: {
    canonical: 'https://greenlord.co.uk/tools/grant-checker',
  },
  openGraph: {
    title: 'Grant Eligibility Checker | GreenLord',
    description:
      'Find out which government grants you may qualify for. Free tool for UK landlords.',
    type: 'website',
  },
};

export default function GrantCheckerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
