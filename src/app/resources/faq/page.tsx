'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, HelpCircle, PoundSterling, Home, FileCheck, Shield, ClipboardList } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Accordion, type AccordionItem as AccordionItemType } from '@/components/ui/Accordion';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { TipBox } from '@/components/content/TipBox';
import { KeyFactBox } from '@/components/content/KeyFactBox';
import { SITE_CONFIG, KEY_DATES } from '@/lib/constants';
import { formatCurrency, generateFAQSchema } from '@/lib/utils';

// FAQ Data organized by category
const faqCategories = [
  {
    id: 'general',
    name: 'General Requirements',
    icon: HelpCircle,
    description: 'Understanding the basic EPC requirements for rental properties',
    questions: [
      {
        id: 'general-1',
        question: 'What EPC rating do I need for my rental property?',
        answer: `From 1 October 2030, all rental properties in England and Wales must have an EPC rating of C or above (a score of 69 or higher out of 100). This requirement applies to both new and existing tenancies.

Currently, the minimum requirement is EPC E (score of 39+), but this will increase significantly to EPC C. If your property is currently rated D, E, F, or G, you will need to make improvements before the 2030 deadline.

Properties with a rating of A, B, or C already meet the future requirements and no action is needed unless the EPC expires before 2030.`,
      },
      {
        id: 'general-2',
        question: 'When does the EPC C deadline come into effect?',
        answer: `The deadline is 1 October 2030 for all tenancies, both new and existing. This unified deadline was confirmed by the government in the Warm Homes Plan, announced in January 2026.

Previously, there was discussion of phased deadlines with new tenancies first, but the government decided on a single deadline to provide clarity for landlords and allow adequate time for improvements.

Key dates to remember:
- June 2025: RdSAP 10 (new EPC assessment methodology) launches
- October 2030: EPC C requirement comes into force for all tenancies`,
      },
      {
        id: 'general-3',
        question: 'Does this apply to all rental properties?',
        answer: `The EPC C requirement applies to all domestic private rented properties in England and Wales that are required to have an EPC. This includes houses, flats, and HMOs let on assured shorthold tenancies.

However, some properties are exempt from needing an EPC:
- Listed buildings where compliance would unacceptably alter their character
- Properties let for less than 4 months per year and not let at other times
- Buildings that will be demolished
- Some holiday lets and temporary structures
- Properties where no EPC is legally required

If your property requires an EPC for letting, it will need to meet the EPC C standard by 2030 unless you qualify for an exemption.`,
      },
      {
        id: 'general-4',
        question: 'What happens if I do not comply?',
        answer: `Local authorities can issue financial penalties of up to ${formatCurrency(KEY_DATES.maxPenalty)} per property for non-compliance with MEES (Minimum Energy Efficiency Standards) regulations.

Penalties are calculated based on several factors:
- The property's rateable value
- The length of time the property has been non-compliant
- Whether this is a first offence or repeat breach

Additionally, non-compliant properties cannot legally be let to new tenants. If you have an existing tenancy, you could face penalties for continuing to let a non-compliant property after the deadline.

Local authority enforcement is expected to increase as the 2030 deadline approaches. Some councils are already actively checking EPC compliance.`,
      },
      {
        id: 'general-5',
        question: 'Do I need to upgrade if my property is already let?',
        answer: `Yes. The 2030 deadline applies to existing tenancies, not just new lets. You cannot simply wait for the tenancy to end or avoid the requirement by having a long-term tenant.

This is a significant change from previous MEES regulations, which initially only applied to new tenancies. The government extended the requirement to all tenancies to ensure comprehensive improvement of housing stock.

You should plan improvements now, as:
- Waiting lists for installers may increase closer to the deadline
- Funding and grants may be more readily available now
- You can spread costs over the remaining years
- Your tenant will benefit from lower energy bills sooner`,
      },
      {
        id: 'general-6',
        question: 'Is this different from the current EPC E requirement?',
        answer: `Yes, this is a significant increase in standards. Currently, properties only need EPC E (a score of 39 or above) to be legally let. From 2030, this increases to EPC C (a score of 69 or above).

For many properties, this represents a jump of 30 points or more on the EPC scale. A property rated D (score 55-68) that currently complies will need improvement. Properties rated E, F, or G will need substantial work.

The EPC rating bands are:
- A: 92-100 (most efficient)
- B: 81-91
- C: 69-80 (new minimum standard from 2030)
- D: 55-68
- E: 39-54 (current minimum standard)
- F: 21-38
- G: 1-20 (least efficient)`,
      },
    ],
  },
  {
    id: 'costs',
    name: 'Costs and Funding',
    icon: PoundSterling,
    description: 'Information about upgrade costs, grants, and financial support',
    questions: [
      {
        id: 'costs-1',
        question: 'How much will it cost to upgrade my property?',
        answer: `Costs vary significantly depending on your property type, current rating, and what improvements are needed. Here are typical ranges:

1970s-1990s houses (cavity walls, some improvements already): ${formatCurrency(2000)}-${formatCurrency(5000)}
- Usually need loft top-up, heating controls, draught proofing

1930s-1960s houses (mixed construction): ${formatCurrency(5000)}-${formatCurrency(15000)}
- May need cavity wall insulation, new boiler, glazing improvements

Victorian/Edwardian terraces (solid walls): ${formatCurrency(15000)}-${formatCurrency(30000)}+
- Solid wall insulation is expensive but often necessary
- Many will qualify for cost cap exemption

Purpose-built flats: ${formatCurrency(1500)}-${formatCurrency(8000)}
- Often limited scope for improvement, may need freeholder consent

These are estimates only. Use our cost calculator for a more accurate assessment based on your specific property, or get quotes from TrustMark registered installers.`,
      },
      {
        id: 'costs-2',
        question: 'What is the cost cap exemption?',
        answer: `The cost cap exemption allows you to register an exemption if the most cost-effective improvements to reach EPC C would cost more than ${formatCurrency(KEY_DATES.costCap)}, even after making reasonable improvements.

How it works:
1. You must first spend up to ${formatCurrency(KEY_DATES.costCap)} on qualifying energy efficiency improvements
2. After spending this amount, if your property still does not reach EPC C, you can register for an exemption
3. The exemption lasts for ${KEY_DATES.exemptionDuration} years, after which you must reassess

Important: You cannot simply claim you would need to spend more than ${formatCurrency(KEY_DATES.costCap)}. You must actually make improvements up to this cap first. The exemption only applies once you have done what is reasonably possible within the budget.

Properties likely to qualify include Victorian terraces, solid-wall construction properties, and some listed buildings.`,
      },
      {
        id: 'costs-3',
        question: 'Are there grants available for landlords?',
        answer: `Yes, several funding schemes may help reduce your costs:

ECO4 (Energy Company Obligation)
Available if your tenant receives certain means-tested benefits. Can cover insulation, heating improvements, and more. Contact energy suppliers directly to check eligibility.

Boiler Upgrade Scheme (BUS)
Provides ${formatCurrency(7500)} towards air source heat pumps or ${formatCurrency(5000)} towards ground source heat pumps. Available for properties in England and Wales. The property must have an EPC and the installer must be MCS certified.

Warm Homes: Local Grant
Contact your local council for information about local schemes. Many areas have specific funding for landlords, particularly for properties with low-income tenants.

Great British Insulation Scheme (GBIS)
Targets homes in Council Tax bands A-D in England or A-E in Wales and Scotland, and households with income below a threshold. Can fund loft and cavity wall insulation.

Check eligibility for all schemes as criteria change regularly. Your local council or an energy advisor can help identify available funding.`,
      },
      {
        id: 'costs-4',
        question: 'Can I pass upgrade costs to my tenant?',
        answer: `No. Energy efficiency improvement costs cannot be passed directly to tenants or used to justify rent increases specifically for this purpose.

The Tenant Fees Act 2019 prohibits landlords from charging tenants for any costs relating to the tenancy beyond rent, deposit, and permitted payments. Energy improvements are the landlord's responsibility.

While you can increase rent in line with market rates at renewal, you cannot add a surcharge specifically for EPC improvements.

However, you may benefit indirectly:
- Improved properties may command higher market rents
- Lower energy bills make your property more attractive to tenants
- Compliance ensures you can continue letting legally
- Energy-efficient homes may have higher resale value`,
      },
      {
        id: 'costs-5',
        question: 'Is it worth upgrading now or should I wait?',
        answer: `Generally, starting sooner has advantages, but the decision depends on your circumstances:

Reasons to act now:
- Contractor availability is better now than it will be closer to 2030
- Grant funding may be more readily available
- You can spread costs over several years
- Tenants benefit from lower bills immediately
- Your EPC certificate may expire and need renewal anyway

Reasons to wait:
- RdSAP 10 launches in June 2025 and may change your rating
- If you are close to the C threshold, waiting for RdSAP 10 could help
- Technology and costs may improve
- More funding schemes may become available

Our recommendation: If you are clearly below EPC C (D or lower), start planning and making improvements now. If you are borderline (high D, low C), consider waiting until after June 2025 to see how RdSAP 10 affects your rating before making major decisions.`,
      },
      {
        id: 'costs-6',
        question: 'What is the cheapest way to improve my EPC rating?',
        answer: `Quick wins that offer the best value (cost per EPC point) include:

Loft insulation top-up: ${formatCurrency(400)}-${formatCurrency(600)}
Potential improvement: 4-8 EPC points
If you have less than 270mm of loft insulation, topping up to the recommended level is one of the most cost-effective improvements.

Draught proofing: ${formatCurrency(200)}-${formatCurrency(400)}
Potential improvement: 2-4 EPC points
Sealing gaps around windows, doors, and floorboards. Often overlooked but can make a noticeable difference.

LED lighting: ${formatCurrency(100)}-${formatCurrency(200)}
Potential improvement: 1-2 EPC points
Replacing all light bulbs with LEDs is a simple improvement that assessors note.

Smart heating controls: ${formatCurrency(200)}-${formatCurrency(400)}
Potential improvement: 2-4 EPC points
Programmable thermostats and TRVs (thermostatic radiator valves) improve the heating system rating.

Hot water cylinder insulation: ${formatCurrency(20)}-${formatCurrency(50)}
Potential improvement: 1-2 EPC points
If you have a hot water tank, ensure it has a proper insulation jacket.

These improvements typically cost under ${formatCurrency(1500)} combined and can gain 10-20 EPC points for the right property. However, effectiveness depends on your current situation.`,
      },
      {
        id: 'costs-7',
        question: 'Should I get multiple quotes?',
        answer: `Absolutely. Prices vary significantly between contractors, and getting multiple quotes helps you:

1. Understand the fair market price for the work
2. Identify any quotes that seem unusually high or low
3. Compare what is included in each quote
4. Assess the contractor's knowledge and professionalism
5. Check availability and timeline

We recommend getting at least 3 quotes for any significant work. For each quote, check:
- Is the contractor TrustMark registered?
- What exactly is included?
- What guarantees are provided?
- What is the payment schedule?
- Can they provide references?

TrustMark registration is particularly important as work by registered installers may be required for some grant schemes and provides consumer protection.

Be wary of quotes that are significantly lower than others - this may indicate corners being cut or hidden costs.`,
      },
    ],
  },
  {
    id: 'property',
    name: 'Property Specific',
    icon: Home,
    description: 'Guidance for different property types and situations',
    questions: [
      {
        id: 'property-1',
        question: 'My property has solid walls - what are my options?',
        answer: `Solid wall properties (typically pre-1930 construction) are the most challenging to improve. The main options are:

Internal wall insulation (IWI): ${formatCurrency(8000)}-${formatCurrency(14000)}
- Insulation boards fitted to the inside of external walls
- Reduces room sizes slightly (typically 50-100mm per wall)
- Can cause condensation issues if not properly installed
- May affect internal features like cornices and skirting boards
- No planning permission usually needed

External wall insulation (EWI): ${formatCurrency(10000)}-${formatCurrency(20000)}
- Insulation fitted to the outside of the building
- Better thermal performance
- Preserves internal room sizes and features
- Changes the external appearance of the property
- May need planning permission, especially in conservation areas
- Not suitable for all properties (terraces, flats)

Many solid wall properties will qualify for the cost cap exemption. However, you must still spend up to ${formatCurrency(KEY_DATES.costCap)} on improvements first.

Alternative strategies for solid wall properties:
- Focus on other improvements first (heating, glazing, loft)
- Consider hybrid approaches
- Explore available grants specifically for solid wall insulation`,
      },
      {
        id: 'property-2',
        question: 'I own a flat - can I make changes?',
        answer: `Making changes to a flat depends on several factors:

Leasehold vs freehold:
If you own the leasehold, you will likely need freeholder consent for any works that affect the structure or common areas. This includes:
- Window replacements
- External wall insulation
- Changes to heating systems that affect communal supplies
- Any works to the exterior

Common challenges:
- Freeholder may refuse permission
- Works may require consent from other leaseholders
- Building insurance implications
- Access to common areas for installation

What you can usually do without consent:
- Internal improvements like insulation behind plasterboard
- Upgrading heating controls within your flat
- Installing LED lighting
- Draught proofing internal doors and windows
- Adding secondary glazing (usually does not require consent)

If the freeholder refuses consent:
You may qualify for a third-party consent exemption. This requires evidence that you have requested consent and it has been unreasonably refused.

For flats in blocks, consider approaching the freeholder or management company with other leaseholders to discuss building-wide improvements.`,
      },
      {
        id: 'property-3',
        question: 'My property is listed or in a conservation area - what can I do?',
        answer: `Listed buildings and properties in conservation areas have additional restrictions, but improvements are often still possible:

Listed buildings:
- Any works that affect the character of a listed building require Listed Building Consent
- This includes many energy efficiency improvements
- Internal works may also need consent if they affect historic features
- Contact your local planning authority before starting any work

Conservation areas:
- External changes visible from a public place often need planning permission
- Internal works usually have fewer restrictions
- Permitted development rights may be limited

Improvements that may be possible:
- Secondary glazing (usually acceptable for listed buildings)
- Internal wall insulation (subject to consent)
- Loft insulation (if accessible without affecting structure)
- Heating system improvements
- Draught proofing
- LED lighting

If you cannot make necessary improvements due to listed status or conservation restrictions, you may qualify for an exemption. However, you must:
1. Demonstrate that you explored all possible options
2. Show that the restrictions genuinely prevent compliance
3. Provide evidence from the planning authority

Work with a conservation architect or specialist surveyor who understands both EPC requirements and heritage restrictions.`,
      },
      {
        id: 'property-4',
        question: 'What if my property is an HMO?',
        answer: `Houses in Multiple Occupation (HMOs) are treated as single properties for MEES purposes. Key points:

One EPC for the whole property:
- An HMO requires a single EPC for the entire building, not individual rooms
- The EPC C requirement applies to the property as a whole
- Room-by-room EPC requirements do not exist

Practical considerations:
- Improvements benefit all residents and improve the whole property rating
- You may need to coordinate works around multiple tenants
- Common areas (hallways, kitchens, bathrooms) are included in the assessment

HMO licensing:
- HMO licensing is separate from EPC requirements
- You must meet both licensing conditions and EPC standards
- Local authorities may check EPC compliance as part of HMO inspections

Improvement priorities for HMOs:
- Heating systems often have the biggest impact (communal heating)
- Draught proofing is particularly important with multiple doors
- Common area lighting and insulation
- Consider how improvements affect fire safety requirements

If your HMO is in a converted building, you may face similar challenges to flats, particularly if there are shared structural elements.`,
      },
      {
        id: 'property-5',
        question: 'Do different property types need different approaches?',
        answer: `Yes, very much so. The most effective improvements depend heavily on your property type:

Victorian terraces (pre-1919):
- Primary challenge: Solid walls
- Focus: Heating efficiency, secondary glazing, loft insulation
- Often qualify for cost cap exemption
- See our Victorian terrace guide

1930s semi-detached:
- Primary challenge: Often have cavity walls but may be unfilled
- Focus: Cavity wall insulation if suitable, loft insulation, heating
- Usually achievable within budget
- See our 1930s semi guide

Purpose-built flats:
- Primary challenge: Limited scope, need freeholder consent
- Focus: Heating controls, glazing (if possible), internal insulation
- May need to pursue exemptions if consent refused
- See our purpose-built flat guide

1970s-1990s properties:
- Primary challenge: Often partially improved but not to modern standards
- Focus: Topping up insulation, upgrading heating, glazing
- Usually most straightforward to improve

Each property type has different typical starting ratings, common issues, and priority upgrades. Using the wrong approach wastes money and may not achieve the required improvement.`,
      },
    ],
  },
  {
    id: 'epc',
    name: 'EPC and Assessment',
    icon: ClipboardList,
    description: 'Understanding EPC assessments and ratings',
    questions: [
      {
        id: 'epc-1',
        question: 'How long is an EPC valid?',
        answer: `EPCs are valid for 10 years from the date of issue. However, there are important considerations:

When to get a new EPC:
- Your current EPC expires within the next 5 years
- You have made significant improvements to the property
- You want to demonstrate a higher rating to tenants
- You are selling or re-letting the property and want to show improvements

After making improvements:
If you have upgraded your property, the existing EPC will not reflect the changes. You need a new assessment to show your improved rating. The old EPC remains technically valid but will not demonstrate compliance.

Before the 2030 deadline:
If your current EPC shows a rating below C but will expire before 2030, you will need a new assessment anyway. Consider timing this after any improvements you make.

RdSAP 10 consideration:
The new assessment methodology (RdSAP 10) launches in June 2025. EPCs issued after this date will use the new calculations, which may give different ratings. Some properties may benefit, others may see lower ratings.`,
      },
      {
        id: 'epc-2',
        question: 'What is RdSAP 10 and should I wait for it?',
        answer: `RdSAP 10 is the new methodology for assessing the energy efficiency of existing dwellings, launching in June 2025. It replaces the current RdSAP 9.94.

Key changes in RdSAP 10:
- Updated fuel prices and carbon factors
- Better recognition of heat pumps and renewable technologies
- Changes to how certain building elements are assessed
- More accurate modelling of heating systems
- Potential changes to how solid wall and floor insulation is valued

Who might benefit:
- Properties with heat pumps
- Homes with renewable energy systems
- Some well-insulated properties

Who might see lower ratings:
- Properties with older gas boilers
- Homes heavily reliant on gas heating
- Properties that benefited from previous calculation quirks

Should you wait?
- If you are close to the C threshold (high D, low C): Consider waiting
- If you are clearly below C: Start improvements now, but perhaps delay the final assessment
- If you are borderline: Get professional advice on likely impact

The government has stated that the 2030 deadline will use whatever rating is on your valid EPC, so there is no disadvantage to having an older assessment if it shows a higher rating.`,
      },
      {
        id: 'epc-3',
        question: 'Should I get a new EPC before making improvements?',
        answer: `Yes, getting an EPC assessment before planning improvements is strongly recommended for several reasons:

Identify the most effective improvements:
A proper EPC assessment identifies specifically what would improve your rating. The recommendations are tailored to your property, not generic advice.

Understand your baseline:
You need to know your current rating and score to plan effectively. The score (1-100) matters more than the letter grade for understanding how much improvement is needed.

Get specific cost-effectiveness data:
The EPC includes estimates of improvement costs and potential savings, helping you prioritise.

Avoid wasting money:
Without an assessment, you might spend money on improvements that do not significantly affect your rating. For example, replacing windows might have less impact than you expect if your heating system is the main issue.

Establish a before picture:
Having a dated assessment before improvements provides evidence of what you have done, which may be useful for exemption applications or disputes.

Choose a good assessor:
Look for an accredited assessor who will take time to understand your property. A rushed assessment can miss opportunities and give inaccurate recommendations.`,
      },
      {
        id: 'epc-4',
        question: 'Can I challenge my EPC rating?',
        answer: `Yes, if you believe your EPC assessment is incorrect, you have several options:

Request a review from the assessor:
Contact the assessor who conducted the assessment and ask them to review their findings. Point out any specific errors you have identified, such as:
- Incorrect measurements
- Unrecorded improvements (e.g., insulation they did not note)
- Wrong building type or age
- Heating system errors

Formal complaint to the accreditation scheme:
If the assessor is unresponsive or you disagree with their review, you can complain to their accreditation scheme. All assessors must be registered with an approved scheme.

Get a reassessment:
You can commission a new EPC from a different assessor. If the new assessment gives a different rating, the newer certificate is valid (though both will be on the register).

Common reasons for incorrect assessments:
- Assessor did not access all areas (e.g., loft)
- Improvements made after the last assessment not recorded
- Assumptions made instead of actual measurements
- Data entry errors

If getting a reassessment, provide the new assessor with evidence of improvements (receipts, guarantees, installation certificates) to ensure everything is correctly recorded.`,
      },
      {
        id: 'epc-5',
        question: 'What is the difference between EPC rating and score?',
        answer: `The EPC rating and score are related but different:

EPC Score (1-100):
- A numerical value indicating energy efficiency
- Higher numbers mean better efficiency
- More precise measure of performance
- Important for understanding how close you are to thresholds

EPC Rating (A-G):
- Letter grade derived from the score
- A is most efficient, G is least
- What most people refer to when discussing EPCs
- Used for compliance thresholds

The rating bands are:
- A: 92-100 points
- B: 81-91 points
- C: 69-80 points (2030 requirement)
- D: 55-68 points
- E: 39-54 points (current requirement)
- F: 21-38 points
- G: 1-20 points

Why the score matters:
If your property scores 67 (D), you need to gain just 2 points to reach C.
If your property scores 56 (D), you need to gain 13 points.

Both are rated D, but the improvement challenge is very different. Always check your actual score, not just the letter grade.

The EPC certificate also shows:
- Current energy efficiency rating
- Potential rating (what could be achieved)
- Environmental impact rating
- Estimated energy costs`,
      },
    ],
  },
  {
    id: 'exemptions',
    name: 'Exemptions',
    icon: Shield,
    description: 'Understanding exemption criteria and registration',
    questions: [
      {
        id: 'exemptions-1',
        question: 'What exemptions are available?',
        answer: `Several exemptions may apply if you cannot achieve EPC C:

Cost Cap Exemption:
If all cost-effective improvements would cost more than ${formatCurrency(KEY_DATES.costCap)} without reaching EPC C. You must spend up to this cap first, then register.

Third-Party Consent Exemption:
If a third party (freeholder, planning authority, mortgage lender) refuses consent for necessary improvements.

Devaluation Exemption:
If an independent surveyor determines that improvements would reduce the property value by more than 5%.

Wall Insulation Exemption:
If a surveyor confirms that cavity wall or solid wall insulation is not appropriate for your property (e.g., due to damp risk).

New Landlord Exemption:
If you become a landlord through inheritance or certain other circumstances, you have a 6-month grace period to comply.

Temporary Exemption during Void Periods:
Properties being marketed for sale or genuinely unoccupied may qualify for temporary exemption.

All exemptions:
- Must be registered on the PRS Exemptions Register
- Require supporting evidence
- Last for ${KEY_DATES.exemptionDuration} years
- Must be renewed if circumstances have not changed`,
      },
      {
        id: 'exemptions-2',
        question: 'How do I register for an exemption?',
        answer: `To register an exemption, follow these steps:

1. Ensure you qualify:
Make sure you meet the criteria for the exemption type you are claiming. Do not register prematurely.

2. Gather evidence:
You need documentary evidence to support your exemption:
- Cost cap: Quotes showing costs exceed ${formatCurrency(KEY_DATES.costCap)} after reasonable improvements
- Third-party consent: Written refusal from the relevant party
- Devaluation: Report from a RICS surveyor
- Wall insulation: Survey report explaining unsuitability
- New landlord: Proof of how you acquired the property

3. Register online:
Visit the PRS Exemptions Register (gov.uk) and create an account. Complete the registration form, providing:
- Property details
- Exemption type
- Supporting evidence (uploaded documents)
- Declaration that information is accurate

4. Receive confirmation:
You will receive confirmation of your exemption registration. Keep this safely.

5. Display or provide when required:
You may need to show your exemption registration to tenants, letting agents, or local authority enforcement officers.

Important: False or fraudulent exemption claims can result in penalties. Only register if you genuinely qualify.`,
      },
      {
        id: 'exemptions-3',
        question: 'What evidence do I need for an exemption?',
        answer: `Evidence requirements vary by exemption type:

Cost Cap Exemption:
- At least 3 quotes from reputable contractors for recommended improvements
- EPC showing recommendations
- Receipts/invoices for improvements already made (up to ${formatCurrency(KEY_DATES.costCap)})
- New EPC showing rating after improvements (if still below C)

Third-Party Consent Exemption:
- Copy of your written request for consent
- Written refusal from the third party
- Evidence that the refused work was necessary for compliance
- Documentation showing who the third party is (lease, mortgage documents)

Devaluation Exemption:
- Report from an independent RICS-qualified surveyor
- Report must specifically state improvements would reduce value by more than 5%
- Surveyor must explain the reasoning

Wall Insulation Exemption:
- Survey report from a qualified installer or surveyor
- Report must explain why wall insulation is not appropriate
- Common reasons: cavity too narrow, flood risk, structural issues
- Must cover all wall insulation options (internal and external)

New Landlord Exemption:
- Evidence of how and when you became the landlord
- For inheritance: grant of probate or letters of administration
- For other circumstances: relevant legal documentation

Keep copies of all evidence for the duration of the exemption and any subsequent renewals.`,
      },
      {
        id: 'exemptions-4',
        question: 'Can I buy a property with an exemption?',
        answer: `Exemptions do not transfer when a property changes hands. If you buy a property with a registered exemption:

The existing exemption ends:
When ownership transfers, any exemption registered by the previous owner is no longer valid. You cannot rely on their exemption.

You get a grace period:
As a new owner, you typically have a 6-month grace period to either:
- Make improvements to achieve compliance
- Register your own exemption with new evidence

You must reassess the situation:
The previous owner's circumstances may not apply to you. For example:
- Their cost cap evidence is no longer valid (prices may have changed)
- You may have different financing options
- Building regulations or technology may have changed
- Grant schemes may now be available

Due diligence when buying:
Before purchasing a property below EPC C, consider:
- What improvements are needed?
- What would they cost you?
- Would you qualify for an exemption?
- Factor improvement costs into your offer

Sellers should disclose EPC status, but always check the current certificate and consider getting an updated assessment as part of your purchase survey.`,
      },
      {
        id: 'exemptions-5',
        question: 'What happens when my exemption expires?',
        answer: `Exemptions last for ${KEY_DATES.exemptionDuration} years. When yours expires:

Reassessment required:
You must reassess whether you still qualify for an exemption or whether circumstances have changed allowing compliance.

Things that may have changed:
- New technologies may have become available or more affordable
- Grant schemes may now cover previously expensive improvements
- Building regulations may have been updated
- Your property may have changed
- RdSAP methodology changes may affect your rating

Renewal process:
If you still qualify, you need to re-register with fresh evidence. You cannot simply renew the old exemption without new documentation.

New evidence required:
- New quotes showing current costs
- Updated EPC if your previous one has expired
- Fresh surveys or reports where applicable

If you no longer qualify:
If circumstances have changed and compliance is now possible, you must make the necessary improvements. Continuing to rely on an expired exemption is non-compliance.

Plan ahead:
Start reviewing your situation 6-12 months before your exemption expires. This gives you time to gather new evidence or plan improvements if needed.`,
      },
    ],
  },
];

// Flatten all FAQs for search and schema
const allFaqs = faqCategories.flatMap((category) =>
  category.questions.map((q) => ({
    ...q,
    categoryId: category.id,
    categoryName: category.name,
  }))
);

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Resources', url: `${SITE_CONFIG.url}/resources` },
    { name: 'FAQ', url: `${SITE_CONFIG.url}/resources/faq` },
  ];

  // Filter FAQs based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqCategories;
    }

    const query = searchQuery.toLowerCase();
    return faqCategories
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(query) ||
            q.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.questions.length > 0);
  }, [searchQuery]);

  const totalQuestions = faqCategories.reduce((acc, cat) => acc + cat.questions.length, 0);
  const filteredQuestions = filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0);

  // Generate FAQ Schema for SEO
  const faqSchemaData = allFaqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer.replace(/\n/g, ' ').replace(/\s+/g, ' '),
  }));
  const faqSchema = generateFAQSchema(faqSchemaData);

  return (
    <>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Get answers to the most common questions about EPC requirements, costs, exemptions, and the 2030 deadline. We have compiled comprehensive answers to help UK landlords navigate compliance."
        breadcrumbs={breadcrumbs}
        background="muted"
      >
        <Badge variant="primary" size="lg">
          {totalQuestions} Questions Answered
        </Badge>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <Input
                type="search"
                placeholder="Search questions... (e.g., cost cap, exemption, solid walls)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg"
                aria-label="Search FAQ"
              />
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-neutral-600 text-center">
                Showing {filteredQuestions} of {totalQuestions} questions
              </p>
            )}
          </div>

          {/* Category Quick Navigation */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-neutral-700 mb-4 text-center">
              Jump to a category
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    onClick={() => setActiveCategory(category.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-700 rounded-full transition-colors text-sm font-medium"
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* FAQ Categories and Questions */}
          {filteredCategories.length === 0 ? (
            <Card className="text-center py-12">
              <p className="text-lg text-neutral-600 mb-4">
                No questions found matching &quot;{searchQuery}&quot;
              </p>
              <Button variant="outline" onClick={() => setSearchQuery('')}>
                Clear Search
              </Button>
            </Card>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((category) => {
                const Icon = category.icon;
                const accordionItems: AccordionItemType[] = category.questions.map((q) => ({
                  id: q.id,
                  title: q.question,
                  content: (
                    <div className="prose prose-neutral max-w-none">
                      {q.answer.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 last:mb-0 whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ),
                }));

                return (
                  <section key={category.id} id={category.id} className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                        <Icon className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-primary-800">{category.name}</h2>
                        <p className="text-sm text-neutral-600">{category.description}</p>
                      </div>
                    </div>
                    <Accordion
                      items={accordionItems}
                      variant="separated"
                      allowMultiple
                    />
                  </section>
                );
              })}
            </div>
          )}

          {/* Additional Help Section */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <KeyFactBox title="Need More Detail?">
              <p>
                Our comprehensive guides provide in-depth information about specific topics.
                Visit our <Link href="/regulations/epc-c-2030-deadline" className="text-primary-700 font-medium hover:underline">EPC C 2030 Deadline guide</Link> for
                a complete overview of the requirements.
              </p>
            </KeyFactBox>
            <TipBox title="Estimate Your Costs">
              <p>
                Use our free <Link href="/tools/cost-calculator" className="text-accent-700 font-medium hover:underline">Upgrade Cost Calculator</Link> to
                get a personalised estimate based on your property type, location, and current EPC rating.
              </p>
            </TipBox>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="muted" padding="md">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">
              Still have questions?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Our resources are regularly updated based on the latest government guidance.
              Check our glossary for unfamiliar terms, or explore our property-specific guides for tailored advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources/glossary">
                <Button variant="outline">View Glossary</Button>
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
