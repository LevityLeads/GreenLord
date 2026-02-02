import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Glossary of EPC and Energy Efficiency Terms | GreenLord',
  description:
    'Comprehensive glossary of 35+ energy efficiency and EPC terms for UK landlords. Clear definitions for MEES, RdSAP, heat pumps, insulation types, grants, and more.',
  keywords: [
    'EPC glossary',
    'energy efficiency terms',
    'MEES explained',
    'RdSAP meaning',
    'landlord terminology',
    'heat pump definition',
    'insulation types',
    'EPC assessment terms',
  ],
  alternates: {
    canonical: 'https://greenlord.co.uk/resources/glossary',
  },
  openGraph: {
    title: 'Glossary of EPC and Energy Efficiency Terms | GreenLord',
    description:
      'Comprehensive glossary of 35+ energy efficiency and EPC terms for UK landlords.',
    url: `${SITE_CONFIG.url}/resources/glossary`,
    type: 'website',
  },
};

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
