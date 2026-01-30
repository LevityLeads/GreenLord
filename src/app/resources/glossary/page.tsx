'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, ArrowUp } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

// Comprehensive glossary data
const glossaryTerms = [
  // A
  {
    term: 'Air Source Heat Pump (ASHP)',
    definition:
      'A renewable heating system that extracts heat from the outside air to provide heating and hot water for a property. ASHPs can work efficiently even in cold temperatures. They use electricity to run but are typically 3-4 times more efficient than direct electric heating, meaning for every 1kW of electricity used, they can produce 3-4kW of heat.',
    relevance:
      'Installing an ASHP can significantly improve your EPC rating, often by 10-20 points. The Boiler Upgrade Scheme offers grants of up to £7,500 towards installation costs. However, properties need adequate insulation first to benefit fully.',
    relatedTerms: ['Boiler Upgrade Scheme (BUS)', 'Ground Source Heat Pump (GSHP)', 'Heat Pump'],
  },
  // B
  {
    term: 'Boiler Upgrade Scheme (BUS)',
    definition:
      'A government grant scheme that provides financial support for property owners to install low-carbon heating systems. Launched in 2022, it offers £7,500 towards air source heat pumps and £5,000 towards ground source heat pumps. The scheme is available in England and Wales for properties with a valid EPC.',
    relevance:
      'This grant can substantially reduce the cost of switching to a heat pump. For landlords considering major heating upgrades, the BUS makes heat pumps a more viable option. The property must have an existing heating system being replaced.',
    relatedTerms: ['Air Source Heat Pump (ASHP)', 'Ground Source Heat Pump (GSHP)', 'Heat Pump'],
  },
  // C
  {
    term: 'Cavity Wall',
    definition:
      'A type of wall construction consisting of two parallel walls (called "leaves") with a gap (cavity) between them. This method became standard in the UK from the 1930s onwards. The cavity can be filled with insulation material to improve thermal performance.',
    relevance:
      'Properties with unfilled cavity walls can often achieve significant EPC improvements through cavity wall insulation, typically costing £1,000-£2,500 and adding 5-15 EPC points. This is usually one of the most cost-effective improvements.',
    relatedTerms: ['Cavity Wall Insulation (CWI)', 'Solid Wall'],
  },
  {
    term: 'Cavity Wall Insulation (CWI)',
    definition:
      'Insulation material injected or blown into the cavity between the two leaves of a cavity wall. Common materials include mineral wool, polystyrene beads, or foam. Installation typically takes 2-3 hours for a standard home and is done by drilling small holes in the external wall.',
    relevance:
      'CWI is one of the most cost-effective EPC improvements for properties with unfilled cavities. However, it is not suitable for all properties - exposed locations, narrow cavities, or certain wall conditions may make it inappropriate. A survey should determine suitability.',
    relatedTerms: ['Cavity Wall', 'Solid Wall', 'External Wall Insulation (EWI)'],
  },
  {
    term: 'Condensing Boiler',
    definition:
      'A highly efficient gas or oil boiler that recovers heat from exhaust gases that would otherwise be lost through the flue. They achieve efficiency ratings of 90% or higher, compared to 60-80% for older non-condensing boilers. Condensing boilers have been mandatory for new installations since 2005.',
    relevance:
      'If your property has an older non-condensing boiler, upgrading to a condensing model can improve the EPC rating by 3-8 points. However, the cost (£2,000-£4,000 installed) may not be justified purely for EPC improvement if the existing boiler is working well.',
    relatedTerms: ['Heat Pump', 'Smart Heating Controls'],
  },
  {
    term: 'Conservation Area',
    definition:
      'An area of special architectural or historic interest designated by the local planning authority. In conservation areas, there are additional planning controls to preserve the character and appearance of the area. This can affect what external changes are permitted.',
    relevance:
      'If your property is in a conservation area, you may face restrictions on external improvements like wall insulation or window replacements. If these restrictions prevent you achieving EPC C, you may qualify for a third-party consent exemption.',
    relatedTerms: ['Listed Building', 'Third-Party Consent Exemption'],
  },
  {
    term: 'Cost Cap Exemption',
    definition:
      'An exemption from MEES requirements available when the cost of all recommended energy efficiency improvements exceeds a set limit (currently £10,000). To qualify, landlords must first spend up to the cap on qualifying improvements. The exemption lasts for 5 years.',
    relevance:
      'Many older properties, particularly those with solid walls, may qualify for this exemption. However, you cannot simply claim costs would exceed the cap - you must make improvements up to the limit first and provide evidence.',
    relatedTerms: ['MEES (Minimum Energy Efficiency Standards)', 'PRS Exemptions Register'],
  },
  // D
  {
    term: 'Double Glazing',
    definition:
      'Windows consisting of two panes of glass with a sealed gap between them, typically filled with air or inert gas like argon. Double glazing significantly reduces heat loss compared to single glazing and also provides noise reduction.',
    relevance:
      'Upgrading from single to double glazing can improve an EPC by 3-8 points. However, the cost (£400-800 per window) means the cost-per-point is often higher than other improvements. Listed building restrictions may apply.',
    relatedTerms: ['Triple Glazing', 'Secondary Glazing', 'U-Value'],
  },
  {
    term: 'Draught Proofing',
    definition:
      'Sealing gaps and cracks around windows, doors, floorboards, loft hatches, and other openings to reduce uncontrolled air leakage. Methods include brush strips, foam seals, and specialised products for letterboxes and keyholes.',
    relevance:
      'Draught proofing is one of the most cost-effective EPC improvements, typically costing £200-400 for professional installation and potentially adding 2-4 EPC points. It also noticeably improves tenant comfort.',
    relatedTerms: ['Loft Insulation', 'Suspended Floor'],
  },
  // E
  {
    term: 'ECO4 (Energy Company Obligation)',
    definition:
      'A government scheme requiring large energy suppliers to fund energy efficiency improvements in homes. ECO4 runs from 2022-2026 and targets households on low incomes or benefits. It can fund measures including insulation, heating systems, and renewables.',
    relevance:
      'If your tenant receives qualifying benefits (Universal Credit, pension credit, etc.), you may be able to access ECO4 funding for property improvements. Contact energy suppliers directly to check eligibility.',
    relatedTerms: ['Great British Insulation Scheme (GBIS)', 'Warm Homes: Local Grant'],
  },
  {
    term: 'Energy Efficiency Rating',
    definition:
      'A score from 1 to 100 that indicates how energy efficient a property is. The score is converted to a letter rating from A (most efficient, 92-100) to G (least efficient, 1-20). This is the main rating shown on an EPC.',
    relevance:
      'From October 2030, rental properties must achieve at least a C rating (score of 69+). Your current score determines how much improvement is needed - a property with a score of 67 needs only 2 more points, while one at 40 needs 29 points.',
    relatedTerms: ['Energy Performance Certificate (EPC)', 'Environmental Impact Rating'],
  },
  {
    term: 'Energy Performance Certificate (EPC)',
    definition:
      'A legal document that rates the energy efficiency of a property on a scale from A to G. EPCs are valid for 10 years and are required when a property is built, sold, or let. They include the current rating, potential rating, and recommended improvements.',
    relevance:
      'Landlords must have a valid EPC before letting a property and must provide a copy to tenants. The EPC rating determines MEES compliance. From 2030, a rating of C or above will be required.',
    relatedTerms: ['Energy Efficiency Rating', 'RdSAP (Reduced Data Standard Assessment Procedure)'],
  },
  {
    term: 'Environmental Impact Rating',
    definition:
      'A secondary rating on an EPC that measures the CO2 emissions associated with a property, rather than its running costs. It uses the same A-G scale as the energy efficiency rating but focuses on carbon rather than cost.',
    relevance:
      'While MEES requirements are based on the energy efficiency rating, the environmental impact rating indicates the property\'s carbon footprint. This may become more important if future regulations target emissions directly.',
    relatedTerms: ['Energy Performance Certificate (EPC)', 'Energy Efficiency Rating'],
  },
  {
    term: 'External Wall Insulation (EWI)',
    definition:
      'A system where insulation boards are fixed to the outside of external walls and then covered with a render or cladding finish. This is one of the main options for insulating solid wall properties or as an alternative to cavity wall insulation.',
    relevance:
      'EWI is effective (10-20+ EPC points) but expensive (£10,000-20,000). It changes the external appearance of a property, which may require planning permission or be prohibited in conservation areas. Not suitable for terraced properties with shared walls.',
    relatedTerms: ['Internal Wall Insulation (IWI)', 'Solid Wall', 'Cavity Wall Insulation (CWI)'],
  },
  // G
  {
    term: 'Great British Insulation Scheme (GBIS)',
    definition:
      'A government-funded scheme providing insulation measures to homes in Great Britain. It targets households in Council Tax bands A-D (England) or A-E (Wales and Scotland), and those with income below a certain threshold. The scheme funds loft and cavity wall insulation primarily.',
    relevance:
      'GBIS can provide free or subsidised insulation for qualifying properties. Check if your rental property or tenant qualifies - this could significantly reduce your improvement costs.',
    relatedTerms: ['ECO4 (Energy Company Obligation)', 'Loft Insulation', 'Cavity Wall Insulation (CWI)'],
  },
  {
    term: 'Ground Source Heat Pump (GSHP)',
    definition:
      'A renewable heating system that extracts heat from the ground via buried pipes. GSHPs are highly efficient (typically 400% efficient) but require significant ground works for installation. They provide consistent performance regardless of air temperature.',
    relevance:
      'GSHPs offer excellent EPC improvements but are expensive and require adequate outdoor space for ground loops. The Boiler Upgrade Scheme offers £5,000 towards installation. More suitable for rural properties with land than urban rentals.',
    relatedTerms: ['Air Source Heat Pump (ASHP)', 'Boiler Upgrade Scheme (BUS)', 'Heat Pump'],
  },
  // H
  {
    term: 'Heat Pump',
    definition:
      'A heating system that moves heat from one place to another using electricity. This includes air source heat pumps (extracting heat from air) and ground source heat pumps (extracting heat from the ground). Heat pumps provide both heating and, in some cases, cooling.',
    relevance:
      'Heat pumps are the main low-carbon alternative to gas boilers. They can significantly improve EPC ratings. However, they work best in well-insulated properties and may not be suitable for all rental properties.',
    relatedTerms: ['Air Source Heat Pump (ASHP)', 'Ground Source Heat Pump (GSHP)', 'Boiler Upgrade Scheme (BUS)'],
  },
  // I
  {
    term: 'Internal Wall Insulation (IWI)',
    definition:
      'Insulation applied to the inside face of external walls, typically using insulation boards fixed to the wall or a stud frame filled with insulation. This is one of the main options for solid wall properties where external insulation is not suitable.',
    relevance:
      'IWI is less expensive than EWI (£8,000-14,000) and does not require planning permission, but it reduces internal room sizes, may affect internal features, and can cause condensation if not properly installed. Professional installation is essential.',
    relatedTerms: ['External Wall Insulation (EWI)', 'Solid Wall'],
  },
  // L
  {
    term: 'Listed Building',
    definition:
      'A building that has been placed on the Statutory List of Buildings of Special Architectural or Historic Interest. Listed buildings are protected by law, and any changes to their character require Listed Building Consent, which is separate from planning permission.',
    relevance:
      'Listed status can significantly limit what energy efficiency improvements are permitted. If you cannot achieve EPC C due to listing restrictions, you may qualify for a third-party consent exemption. Work with a conservation specialist.',
    relatedTerms: ['Conservation Area', 'Third-Party Consent Exemption'],
  },
  {
    term: 'Loft Insulation',
    definition:
      'Insulation material laid between and over the joists in a loft space to reduce heat loss through the roof. The current recommended depth is at least 270mm of mineral wool or equivalent. Loft insulation is one of the simplest and most cost-effective energy improvements.',
    relevance:
      'If your property has less than 270mm of loft insulation, topping up is typically one of the best-value improvements. Costs of £400-600 can add 4-8 EPC points. Check the current depth - many older properties have less than 100mm.',
    relatedTerms: ['Draught Proofing', 'Cavity Wall Insulation (CWI)'],
  },
  // M
  {
    term: 'MEES (Minimum Energy Efficiency Standards)',
    definition:
      'Regulations that set minimum EPC ratings for privately rented properties in England and Wales. Since 2020, landlords cannot grant new tenancies or renew existing tenancies for properties with an EPC rating below E. From 2030, this minimum increases to EPC C.',
    relevance:
      'MEES compliance is a legal requirement for landlords. Non-compliant properties cannot be legally let, and local authorities can issue penalties of up to £30,000 per property. Start planning improvements now for the 2030 deadline.',
    relatedTerms: ['Energy Performance Certificate (EPC)', 'Cost Cap Exemption', 'PRS Exemptions Register'],
  },
  // P
  {
    term: 'Party Wall',
    definition:
      'A wall that stands on the land of two or more owners and separates their buildings. In terraced houses, the party walls are the walls shared with neighbours on either side. Party Wall Act agreements may be required for certain works affecting these walls.',
    relevance:
      'Works affecting party walls may require notice to neighbours and potentially a Party Wall Agreement. This is relevant when considering internal wall insulation or other works that might affect shared walls.',
    relatedTerms: ['Internal Wall Insulation (IWI)', 'External Wall Insulation (EWI)'],
  },
  {
    term: 'PRS (Private Rented Sector)',
    definition:
      'The part of the housing market where private individuals or companies let residential property to tenants. In the UK, the PRS accounts for approximately 19% of households. PRS landlords are subject to specific regulations including MEES.',
    relevance:
      'All regulations discussed on this site apply specifically to PRS properties. Social housing and owner-occupied homes have different requirements and support schemes.',
    relatedTerms: ['MEES (Minimum Energy Efficiency Standards)'],
  },
  {
    term: 'PRS Exemptions Register',
    definition:
      'The government\'s official online register where landlords must record exemptions from MEES requirements. Exemptions must be registered with supporting evidence and are valid for 5 years. The register is publicly searchable.',
    relevance:
      'If you cannot achieve compliance, you must register an exemption on this system. Failure to register means you are non-compliant, even if you would technically qualify for an exemption. Keep copies of all evidence submitted.',
    relatedTerms: ['MEES (Minimum Energy Efficiency Standards)', 'Cost Cap Exemption'],
  },
  // R
  {
    term: 'RdSAP (Reduced Data Standard Assessment Procedure)',
    definition:
      'The methodology used to assess the energy performance of existing dwellings for EPCs. It is a simplified version of SAP (used for new builds) that allows assessors to make assumptions where data is not available. RdSAP 10 launches in June 2025.',
    relevance:
      'RdSAP 10 will change how properties are assessed, potentially affecting EPC ratings. If you are close to the C threshold, the new methodology may help or hinder your rating. Consider timing of assessments around the June 2025 change.',
    relatedTerms: ['SAP (Standard Assessment Procedure)', 'Energy Performance Certificate (EPC)'],
  },
  // S
  {
    term: 'SAP (Standard Assessment Procedure)',
    definition:
      'The government\'s methodology for assessing the energy performance of dwellings. SAP produces the energy ratings used in EPCs. The full SAP procedure is used for new buildings, while the simplified RdSAP is used for existing buildings.',
    relevance:
      'Understanding that EPC ratings come from SAP calculations helps you understand why certain improvements have more impact than others. SAP is updated periodically, which can affect ratings.',
    relatedTerms: ['RdSAP (Reduced Data Standard Assessment Procedure)', 'Energy Performance Certificate (EPC)'],
  },
  {
    term: 'Secondary Glazing',
    definition:
      'An additional window fitted on the inside of an existing window, creating a double-glazed effect without replacing the original window. It is particularly useful for listed buildings or conservation areas where original windows must be retained.',
    relevance:
      'Secondary glazing improves thermal performance and is usually permitted where replacement windows are not. It typically adds 2-4 EPC points and costs £200-500 per window. A good compromise for restricted properties.',
    relatedTerms: ['Double Glazing', 'Triple Glazing', 'Listed Building'],
  },
  {
    term: 'Smart Heating Controls',
    definition:
      'Advanced heating control systems that go beyond simple programmable thermostats. They include features like room-by-room temperature control, learning capabilities, remote control via smartphone apps, and integration with other smart home devices.',
    relevance:
      'Installing smart heating controls (including TRVs on all radiators and a programmable room thermostat) can improve an EPC by 2-4 points at a cost of £200-400. This is a cost-effective improvement that also appeals to tenants.',
    relatedTerms: ['Condensing Boiler', 'Heat Pump'],
  },
  {
    term: 'Solid Wall',
    definition:
      'A wall constructed of a single layer of brick, stone, or other material, without a cavity. Solid walls were standard in UK properties built before the 1930s. They have poor thermal performance compared to cavity walls and are more challenging and expensive to insulate.',
    relevance:
      'Solid wall properties are the most challenging to improve to EPC C. Options are internal or external wall insulation, both expensive. Many solid wall properties will qualify for the cost cap exemption.',
    relatedTerms: ['Cavity Wall', 'External Wall Insulation (EWI)', 'Internal Wall Insulation (IWI)'],
  },
  {
    term: 'Solar PV',
    definition:
      'Photovoltaic panels installed on a roof or in a property\'s grounds to generate electricity from sunlight. The electricity can be used in the property, stored in batteries, or exported to the grid. Installation typically requires planning permission for listed buildings.',
    relevance:
      'Solar PV can significantly improve EPC ratings (5-15+ points depending on system size) and generate income or savings. However, the cost (£5,000-10,000) and roof suitability considerations mean it is not always the best first option for rental properties.',
    relatedTerms: ['Heat Pump', 'Environmental Impact Rating'],
  },
  {
    term: 'Suspended Floor',
    definition:
      'A floor construction where the floorboards are supported on joists above a void, rather than laid directly on a solid base. Common in Victorian and Edwardian properties. The void beneath allows ventilation but also causes heat loss.',
    relevance:
      'Suspended floors can be insulated from below (accessing the void) or above (lifting floorboards), typically adding 2-4 EPC points. Draught proofing the gaps between floorboards is a simpler, cheaper first step.',
    relatedTerms: ['Draught Proofing', 'Loft Insulation'],
  },
  // T
  {
    term: 'Thermal Bridging',
    definition:
      'Areas in a building\'s construction where heat can transfer more easily between inside and outside, creating "cold spots". Common examples include window frames, door thresholds, and where walls meet floors or roofs. Thermal bridges reduce overall insulation effectiveness.',
    relevance:
      'When insulating a property, addressing thermal bridges is important for maximising improvement. Poor detailing can significantly reduce the benefit of insulation. Professional installation helps minimise thermal bridging.',
    relatedTerms: ['U-Value', 'External Wall Insulation (EWI)', 'Internal Wall Insulation (IWI)'],
  },
  {
    term: 'TrustMark',
    definition:
      'A government-endorsed quality scheme for tradespeople in the UK. TrustMark registered businesses have been vetted for technical competence, trading practices, and customer service. Work must meet required standards and comes with deposit protection.',
    relevance:
      'Using TrustMark registered installers is often required for grant funding and provides consumer protection. When getting quotes, check the contractor\'s TrustMark status. This is particularly important for significant works like insulation.',
    relatedTerms: ['Boiler Upgrade Scheme (BUS)', 'ECO4 (Energy Company Obligation)'],
  },
  {
    term: 'Triple Glazing',
    definition:
      'Windows with three panes of glass separated by two sealed gaps, typically filled with inert gas. Triple glazing offers better thermal and acoustic performance than double glazing but at higher cost. Common in Scandinavia but still relatively rare in the UK.',
    relevance:
      'Triple glazing provides marginal EPC improvement over modern double glazing. The extra cost is rarely justified purely for EPC improvement, but may be worthwhile in very cold locations or for noise reduction.',
    relatedTerms: ['Double Glazing', 'Secondary Glazing', 'U-Value'],
  },
  // U
  {
    term: 'U-Value',
    definition:
      'A measure of how effective a building element is as an insulator. It measures heat transfer in watts per square metre per degree of temperature difference (W/m²K). Lower U-values indicate better insulation. For example, a single glazed window might have a U-value of 5.0, while triple glazing might be 0.8.',
    relevance:
      'U-values help compare insulation options. Building regulations set maximum U-values for new work. Understanding U-values helps you evaluate the effectiveness of proposed improvements.',
    relatedTerms: ['Thermal Bridging', 'Double Glazing', 'Loft Insulation'],
  },
  // W
  {
    term: 'Warm Homes Plan',
    definition:
      'The government\'s comprehensive strategy for improving home energy efficiency, announced in January 2026. It confirmed the EPC C requirement for 2030, set the £10,000 cost cap, and outlined various support schemes for homeowners and landlords.',
    relevance:
      'The Warm Homes Plan is the policy document that defines current EPC requirements for landlords. It provides the regulatory framework that this entire website explains. Understanding the plan helps you understand the "why" behind the rules.',
    relatedTerms: ['MEES (Minimum Energy Efficiency Standards)', 'Cost Cap Exemption'],
  },
  {
    term: 'Warm Homes: Local Grant',
    definition:
      'A funding stream delivered through local authorities to support home energy efficiency improvements. Eligibility criteria and available funding vary by area. The scheme is part of the broader Warm Homes Plan and targets low-income households and fuel poverty.',
    relevance:
      'Contact your local council to find out what funding is available in your area. Some schemes specifically target landlords with low-income tenants. Funding criteria and availability change, so check regularly.',
    relatedTerms: ['ECO4 (Energy Company Obligation)', 'Great British Insulation Scheme (GBIS)', 'Warm Homes Plan'],
  },
];

// Sort terms alphabetically
const sortedTerms = [...glossaryTerms].sort((a, b) =>
  a.term.localeCompare(b.term)
);

// Get unique first letters for navigation
const alphabet = Array.from(
  new Set(sortedTerms.map((term) => term.term[0].toUpperCase()))
).sort();

// Full alphabet for display
const fullAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Resources', url: `${SITE_CONFIG.url}/resources` },
    { name: 'Glossary', url: `${SITE_CONFIG.url}/resources/glossary` },
  ];

  // Filter terms based on search
  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) {
      return sortedTerms;
    }

    const query = searchQuery.toLowerCase();
    return sortedTerms.filter(
      (term) =>
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        term.relevance.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group filtered terms by first letter
  const groupedTerms = useMemo(() => {
    const groups: Record<string, typeof filteredTerms> = {};
    filteredTerms.forEach((term) => {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  // Available letters (those that have terms)
  const availableLetters = Object.keys(groupedTerms).sort();

  return (
    <>
      <PageHeader
        title="Glossary of Terms"
        subtitle="Clear, landlord-focused definitions for energy efficiency terminology. From ASHP to U-Value, understand the jargon used in EPC assessments and regulations."
        breadcrumbs={breadcrumbs}
        background="muted"
      >
        <Badge variant="primary" size="lg">
          {glossaryTerms.length} Terms Defined
        </Badge>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <Input
                type="search"
                placeholder="Search terms... (e.g., heat pump, insulation, MEES)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg"
                aria-label="Search glossary"
              />
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-neutral-600 text-center">
                Found {filteredTerms.length} of {glossaryTerms.length} terms
              </p>
            )}
          </div>

          {/* Alphabet Navigation */}
          <nav className="mb-12 sticky top-0 bg-white py-4 border-b border-neutral-100 z-10">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {fullAlphabet.map((letter) => {
                const hasTerms = availableLetters.includes(letter);
                return (
                  <a
                    key={letter}
                    href={hasTerms ? `#letter-${letter}` : undefined}
                    className={cn(
                      'w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg font-semibold text-sm sm:text-base transition-colors',
                      hasTerms
                        ? 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                        : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                    )}
                    aria-label={hasTerms ? `Jump to ${letter}` : `No terms starting with ${letter}`}
                  >
                    {letter}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Terms List */}
          {filteredTerms.length === 0 ? (
            <Card className="text-center py-12">
              <BookOpen className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
              <p className="text-lg text-neutral-600 mb-4">
                No terms found matching &quot;{searchQuery}&quot;
              </p>
              <Button variant="outline" onClick={() => setSearchQuery('')}>
                Clear Search
              </Button>
            </Card>
          ) : (
            <div className="space-y-12">
              {availableLetters.map((letter) => (
                <section
                  key={letter}
                  id={`letter-${letter}`}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-700 text-white text-2xl font-bold">
                      {letter}
                    </span>
                    <div className="flex-1 h-px bg-neutral-200" />
                  </div>

                  <div className="space-y-6">
                    {groupedTerms[letter].map((term) => (
                      <Card
                        key={term.term}
                        id={term.term.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                        variant="default"
                        className="scroll-mt-32"
                      >
                        <h3 className="text-lg font-bold text-primary-800 mb-3">
                          {term.term}
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                              Definition
                            </h4>
                            <p className="text-neutral-700 leading-relaxed">
                              {term.definition}
                            </p>
                          </div>

                          <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                            <h4 className="text-sm font-semibold text-primary-800 mb-1">
                              Why It Matters for Landlords
                            </h4>
                            <p className="text-primary-900/80 text-sm leading-relaxed">
                              {term.relevance}
                            </p>
                          </div>

                          {term.relatedTerms && term.relatedTerms.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                                Related Terms
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {term.relatedTerms.map((related) => {
                                  const relatedSlug = related.toLowerCase().replace(/[^a-z0-9]/g, '-');
                                  return (
                                    <a
                                      key={related}
                                      href={`#${relatedSlug}`}
                                      className="inline-flex items-center px-3 py-1 bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-700 rounded-full text-sm font-medium transition-colors"
                                    >
                                      {related}
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Back to Top Button */}
          <div className="fixed bottom-8 right-8">
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-white shadow-lg hover:bg-primary-800 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="muted" padding="md">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">
              Still Confused by EPC Jargon?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Our FAQ answers common questions in plain English, and our property guides explain
              what different terms mean for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources/faq">
                <Button variant="outline">View FAQ</Button>
              </Link>
              <Link href="/property-types">
                <Button variant="primary">Property Guides</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
