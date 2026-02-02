import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPC Upgrade Cost Calculator for Landlords | GreenLord',
  description:
    'Free cost calculator for UK landlords. Get personalised EPC upgrade cost estimates based on your property type, location, and current rating.',
  alternates: {
    canonical: 'https://greenlord.co.uk/tools/cost-calculator',
  },
  openGraph: {
    title: 'EPC Upgrade Cost Calculator | GreenLord',
    description:
      'Free cost calculator for UK landlords. Get personalised EPC upgrade estimates in minutes.',
    type: 'website',
  },
};

export default function CostCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
