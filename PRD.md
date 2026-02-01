# Product Requirements Document
# Landlord EPC Compliance Platform

**Version:** 2.0
**Status:** Updated
**Created:** 29 January 2026
**Last Updated:** 30 January 2026

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Market Context](#2-market-context)
3. [Target Audience](#3-target-audience)
4. [Product Principles](#4-product-principles)
5. [Content Architecture](#5-content-architecture)
6. [Interactive Tools](#6-interactive-tools)
7. [Data Strategy](#7-data-strategy)
8. [Design Requirements](#8-design-requirements)
9. [Technical Requirements](#9-technical-requirements)
10. [Content Production](#10-content-production)
11. [Authority Building Strategy](#11-authority-building-strategy)
12. [Phased Delivery Plan](#12-phased-delivery-plan)
13. [Success Metrics](#13-success-metrics)
14. [Risks and Mitigations](#14-risks-and-mitigations)
15. [Open Decisions and Assumptions](#15-open-decisions-and-assumptions)
16. [Appendices](#appendices)

---

## 1. Executive Summary

### 1.1 Overview

We are building the UK's most authoritative content platform for private landlords navigating EPC compliance requirements. The platform will combine clear regulatory guidance, property-specific upgrade recommendations, interactive planning tools, and comprehensive local grant information into a single trusted resource.

The regulatory landscape has fundamentally shifted. On 21 January 2026, the government's Warm Homes Plan confirmed that all rental properties must achieve EPC rating C or above by 1 October 2030. This affects an estimated 2.6 to 2.9 million properties currently below the threshold. Landlords face complex decisions about upgrade timing, investment priorities, grant eligibility, and exemption pathways, yet no single resource adequately addresses these needs.

This platform will fill that gap by providing genuinely useful, accurate, and current information that helps landlords make informed decisions.

### 1.2 Strategic Rationale

The opportunity exists because of a specific combination of factors:

- **Regulatory certainty has arrived.** After years of consultation and delay, the 2030 deadline is now confirmed with detailed implementation guidance. Landlords who have been waiting for clarity now need to act.

- **The timing window is optimal.** RdSAP 10, the new EPC assessment methodology, launches in June 2025. This creates confusion about whether to get assessments now or wait, and whether existing EPCs remain valid. Clear guidance on this transition is scarce.

- **Competitors exist but lack depth.** Competitors exist in this space but lack the interactive tools, data depth, and landlord-specific focus required to truly serve the market. We win through utility, not just content quality.

- **The audience is underserved.** Small portfolio landlords, who represent 94% of all UK landlords, lack the resources to navigate regulatory complexity but are too sophisticated for basic consumer advice.

**Our moat is built on three pillars:** interactive tools that deliver personalised recommendations, original data analysis from the EPC register, and the most comprehensive grant database for landlords in the UK.

### 1.3 Product Vision

Version 1.0 focuses exclusively on content and tools. We will establish authority and traffic before introducing lead generation or marketplace features. The platform will be measured by its ability to rank for target keywords, attract organic traffic, and become a recognised resource in the landlord community.

### 1.4 Out of Scope for Version 1.0

The following are explicitly excluded from this phase:

- Lead capture beyond basic email newsletter signup
- Contractor directory or marketplace functionality
- Paid features, subscriptions, or premium content
- User accounts or personalisation
- Mobile applications

---

## 2. Market Context

### 2.1 Market Size and Structure

The UK private rented sector comprises:

| Metric | Value | Source |
|--------|-------|--------|
| Total PRS households | 4.7 million | English Housing Survey 2023 |
| Estimated landlords | 2.3 to 2.8 million | Industry estimates |
| Small portfolio landlords (1-4 properties) | 94% of all landlords | NRLA/BVA BDRC |
| Properties below EPC C | 61% of PRS stock | DLUHC data |
| Properties requiring upgrades | 2.6 to 2.9 million | Derived estimate |

The market is characterised by fragmentation. Most landlords own just one or two properties, often as accidental landlords or pension investments. They are time-poor, cost-conscious, and risk-averse. Professional landlords with larger portfolios have access to advisors and resources; small landlords do not.

### 2.2 Competitive Analysis

**Tier 1: Direct Competitors**

- **The Independent Landlord (theindependentlandlord.com):** One-person operation with authentic first-person content. Strong on Victorian terrace upgrades. Weakness: no tools, limited scale, can't cover all property types.
- **EPC Advisor (epcadvisor.co.uk):** Homeowner-focused EPC guidance with D-to-C content. Has basic calculator. Weakness: landlords are afterthought, no grant database, generic recommendations.

**Tier 2: Institutional Players**

- **NRLA:** Authority but content behind paywall, not SEO-focused.
- **Landlord Studio:** SaaS content marketing, EPC is peripheral.
- **LandlordZone:** News-focused, forums are valuable but unstructured.

**Our Differentiation:**

1. Landlord-first framing throughout (commercial reality, not environmental moralising)
2. Property-type specific guides at depth competitors can't match
3. Interactive tools that deliver personalised, actionable output
4. Aggregated grant database nobody else maintains
5. Original data analysis from EPC register
6. Speed on regulatory updates (target: same-day coverage)

### 2.3 Regulatory Framework

The Minimum Energy Efficiency Standards (MEES) regulations establish the legal requirements for rental properties. Key provisions confirmed in January 2026:

| Requirement | Detail |
|-------------|--------|
| Minimum rating | EPC C (rating 69 or above) |
| Deadline for new tenancies | 1 October 2030 |
| Deadline for existing tenancies | 1 October 2030 (aligned) |
| Cost cap for exemption | £10,000 including VAT |
| Exemption duration | 5 years from registration |
| Penalty for non-compliance | Up to £30,000 per property |

The cost cap exemption allows landlords to register for exemption if the most cost-effective improvements would exceed £10,000 without achieving EPC C. However, landlords must first spend up to the cap on qualifying improvements before claiming exemption.

### 2.4 RdSAP 10 Transition

The EPC assessment methodology is changing. RdSAP 10 launches in June 2025 with several significant changes:

- New carbon emission calculations reflecting current grid decarbonisation
- Updated assumptions for heating systems and insulation performance
- Changes to how improvements are valued in the rating calculation
- Potential for existing ratings to change under the new methodology

This creates immediate confusion for landlords: should they get a new EPC now under the current methodology, or wait for RdSAP 10? Clear guidance on this transition represents a significant content opportunity.

### 2.5 Content Gaps Identified

Analysis of existing content revealed significant gaps that represent our primary opportunity:

- **Property-type specific upgrade guides.** Almost no content addresses the reality that a Victorian terrace has fundamentally different upgrade options than a 1990s new build. Generic advice is unhelpful.

- **Grant eligibility guidance.** The funding landscape is fragmented across national schemes (ECO4, Boiler Upgrade Scheme, Warm Homes: Local Grant) and council-specific programmes. No single resource maps eligibility clearly for landlords.

- **Local authority scheme database.** Council websites are notoriously poor. Landlords cannot easily find what schemes are available in their area.

- **Interactive planning tools.** Calculators exist but are basic. No tool helps landlords prioritise improvements by cost-effectiveness for their specific property type.

- **RdSAP 10 transition guidance.** Most content ignores or glosses over the methodology change and its implications for upgrade timing.

- **Exemption pathway clarity.** The cost cap exemption process is poorly explained, leading landlords to either ignore it or misunderstand requirements.

---

## 3. Target Audience

### 3.1 Primary Audience: Small Portfolio Landlords

Our primary audience is landlords with one to four properties. This segment represents 94% of all UK landlords but is systematically underserved by existing resources.

**Demographic and behavioural characteristics:**

| Characteristic | Detail |
|----------------|--------|
| Portfolio size | 1-4 properties, typically 1-2 |
| Landlord type | Often accidental landlords, inheritance recipients, or pension investors |
| Time availability | Part-time attention; landlording is not their primary occupation |
| Sophistication | Intelligent but not property professionals; want clear answers not jargon |
| Risk appetite | Conservative; concerned about compliance and avoiding penalties |
| Information sources | Online search, landlord forums, letting agent advice, peer networks |
| Decision timeline | Now considering whether to upgrade, sell, or exit the market entirely |

**Pain points and information needs:**

- **Regulatory clarity:** "Do I actually need to do this? When? What happens if I don't?"
- **Cost reality:** "What will this actually cost me? Not a vague range, a realistic number for my type of property."
- **Prioritisation:** "What should I do first? What gives the best return?"
- **Funding:** "Can I get help paying for this? What grants exist and do I qualify?"
- **Timing:** "Should I act now or wait? What about this RdSAP change I keep hearing about?"
- **Exit options:** "If upgrades are too expensive, what are my alternatives? How do exemptions work?"

### 3.2 Secondary Audience: Portfolio Landlords

Landlords with five to twenty properties. More sophisticated, thinking about compliance at portfolio scale, interested in prioritisation and ROI across multiple properties. May have some professional support but still value efficient access to clear information.

### 3.3 Tertiary Audience: Property Professionals

Letting agents advising landlord clients, accountants and tax advisors fielding EPC questions, and mortgage brokers discussing green mortgages. These users want quick reference material and tools to support client conversations.

---

## 4. Product Principles

These principles guide all content and design decisions. When trade-offs are required, these principles establish priority.

### 4.1 Accuracy Over Speed

Every claim must be verifiable against primary sources. Dates, figures, thresholds, and regulatory details must be correct. We will not publish quickly if it means publishing inaccurately. When regulations change, content must be updated within 48 hours. If we cannot verify something, we say so rather than guessing.

### 4.2 Specificity Over Generality

Generic advice is nearly worthless. We write "Victorian terrace with solid walls" not "older property." We provide "£4,200 to £6,800 for a three-bedroom semi" not "several thousand pounds." We name specific councils and schemes rather than saying "check your local authority." Specificity builds trust and utility.

### 4.3 Landlord-First Framing

Content is written from the landlord's perspective, not from a policy or environmental perspective. We acknowledge commercial realities including ROI considerations, tenant relationships, and cash flow constraints. We do not moralise about climate change or housing quality. Landlords are making business decisions and our content respects that.

### 4.4 Plain English Always

No jargon without immediate explanation. Short sentences and clear structure. We assume intelligence but not expertise. Acronyms are spelled out on first use. Technical terms link to glossary definitions. If a sentence requires re-reading to understand, it needs rewriting.

### 4.5 Current and Maintained

Outdated content destroys trust faster than no content. Publication dates are visible on all pages. "Last updated" timestamps are prominent. Content review schedules are built into production workflows. When users find errors, correction is fast and transparent.

### 4.6 Tools Over Articles

Where we can build a tool that answers a question better than an article, we build the tool. Articles explain; tools solve. Interactive tools that deliver personalised, actionable output create more value than static content and generate stronger user engagement and return visits.

### 4.7 Original Data Creates Authority

We analyse primary sources (EPC register, grant schemes, regulatory documents) and publish original findings. This makes us citable and linkable. Original data analysis establishes us as the authoritative source that others reference, creating natural backlinks and building domain authority.

---

## 5. Content Architecture

### 5.1 Information Architecture Overview

The site structure follows a pillar-cluster model optimised for both user navigation and search engine performance. Four main pillars provide comprehensive coverage of major topic areas, with cluster content providing depth on specific sub-topics.

**Primary navigation structure:**

```
Homepage
│
├── Regulations and Requirements (Pillar)
│   ├── EPC C 2030 Deadline Explained
│   ├── MEES Regulations Complete Guide
│   ├── Cost Cap and Exemptions
│   ├── RdSAP 10 Changes Explained
│   ├── Warm Homes Plan Summary
│   ├── Timeline: What Happens When
│   └── Compliance Checklist
│
├── Upgrade Guides by Property Type (Pillar)
│   ├── Victorian Terrace (pre-1919)
│   ├── Edwardian and 1920s Property
│   ├── 1930s Semi-Detached
│   ├── 1950s and 1960s Property
│   ├── 1970s and 1980s Property
│   ├── 1990s and Later New Build
│   ├── Purpose-Built Flat
│   ├── Converted Flat
│   └── HMO Specific Requirements
│
├── Costs and Funding (Pillar)
│   ├── Complete Upgrade Cost Guide
│   ├── D to C Upgrade Costs
│   ├── E to C Upgrade Costs
│   ├── Cheapest Improvements Ranked
│   ├── Warm Homes: Local Grant Guide
│   ├── ECO4 for Landlords
│   ├── Boiler Upgrade Scheme
│   └── Other Funding Sources
│
├── Local Guides (Pillar)
│   ├── [City] Landlord EPC Guide (10-20 cities)
│   └── Regional Grant Scheme Overviews
│
├── Tools
│   ├── Upgrade Cost Calculator
│   ├── Grant Eligibility Checker
│   ├── Exemption Pathway Tool
│   └── Upgrade Priority Recommender
│
└── Resources
    ├── Glossary
    ├── FAQ
    └── Document Library
```

### 5.2 Content Types and Specifications

#### Pillar Pages

| Attribute | Specification |
|-----------|---------------|
| Purpose | Comprehensive overview of major topic area |
| Word count | 2,500 to 4,000 words |
| Structure | Clear H2/H3 hierarchy, table of contents, key takeaways box |
| Internal links | Links to all cluster content in topic area |
| Update frequency | Reviewed quarterly minimum; updated immediately on regulatory change |
| Target keywords | Head terms with highest search volume |
| Quantity | 4 pillar pages |

#### Cluster Articles

| Attribute | Specification |
|-----------|---------------|
| Purpose | Focused depth on specific sub-topic |
| Word count | 1,200 to 2,000 words |
| Structure | Focused H2 structure, links back to pillar page |
| Internal links | Minimum 3 links to related content |
| Update frequency | As needed when regulations or guidance changes |
| Target keywords | Long-tail terms with specific search intent |
| Quantity | 30 to 40 cluster articles |

#### Property Type Guides (EXPANDED)

| Attribute | Specification |
|-----------|---------------|
| Purpose | Property-specific upgrade guidance |
| Word count | 1,500 to 2,500 words |
| Required sections | Typical starting EPC profile; Construction characteristics affecting upgrades; Prioritised improvement pathway with costs; Worked example with real numbers; Specific complications for this property type; Links to relevant tools; Internal links to related content |
| Visual elements | Property archetype illustration, improvement priority diagram |
| Target keywords | Property type plus EPC/upgrade terms |
| Quantity | 12 to 15 property type guides |

**Priority 1 (Launch):**
- Victorian terrace (pre-1919) ✓ DONE
- 1930s semi-detached ✓ DONE
- Purpose-built flat ✓ DONE

**Priority 2 (Month 2):**
- 1960s-1970s houses (huge stock, cavity walls, good upgrade potential)
- 1950s houses (mixed construction, transitional era)
- Converted flats (leasehold complications, communal areas)

**Priority 3 (Month 3):**
- Edwardian houses (1901-1910, similar to Victorian but some differences)
- 1980s-1990s houses (better baseline, fewer issues)
- New build flats (often compliant, different challenges)
- Pre-1919 semi-detached (not terraced, different heat loss profile)

**Priority 4 (Month 4):**
- HMOs (specific regulatory requirements, room-by-room considerations)
- Maisonettes (part-house, part-flat complications)
- Listed buildings (dedicated guide beyond subsections)
- Park homes (different EPC regime)

#### Local Guides

| Attribute | Specification |
|-----------|---------------|
| Purpose | City or region specific information |
| Word count | 800 to 1,500 words |
| Required sections | Local authority contact information; Available grant schemes with eligibility; Local cost benchmarks if available; Links to council resources |
| Update frequency | When local schemes change |
| Target keywords | City name plus landlord EPC terms |
| Quantity | 10 to 20 local guides initially |

#### Tool Pages

| Attribute | Specification |
|-----------|---------------|
| Purpose | Interactive utility with supporting content |
| Supporting content | 500 to 1,000 words explaining methodology and caveats |
| Required elements | Clear input labels; Progress indication; Results explanation; Methodology disclosure; Limitation caveats; Links to related content |
| Quantity | 5 interactive tools |

#### Original Research Content

| Attribute | Specification |
|-----------|---------------|
| Purpose | Data-driven analysis establishing authority and generating backlinks |
| Word count | 1,500 to 3,000 words |
| Required elements | Headline statistics; Methodology transparency; Downloadable data (creates links); Embeddable charts (creates embeds and links); Press release version for journalists |
| Format | Blog summary + full PDF + interactive data explorer |
| Target keywords | Original research creates new keyword opportunities |
| Frequency | Quarterly |

**Quarterly data publications:**
- Q2 2026: "State of Landlord EPC Compliance" (baseline report)
- Q3 2026: "Regional EPC Performance" (city-by-city analysis)
- Q4 2026: "What Upgrades Actually Work" (before/after EPC analysis)
- Q1 2027: "Grant Uptake Report" (who's claiming, who's missing out)

### 5.3 Content Requirements per Article

Every piece of content must include the following metadata and elements:

**SEO metadata:**
- Primary keyword target (defined in CMS)
- Secondary keyword targets (2-3 per article)
- Meta title (under 60 characters)
- Meta description (under 155 characters)
- URL slug (logical, keyword-inclusive)
- Canonical URL

**Content elements:**
- H1 matching primary search intent
- Defined H2/H3 structure
- Internal links (minimum 3 to related content)
- External links to primary sources where applicable
- Publication date (visible)
- Last updated date (visible)
- Last reviewed date (in CMS for editorial tracking)
- Author attribution
- Sources cited with links to government documents or official statistics

---

## 6. Interactive Tools

Five interactive tools differentiate the platform and provide genuine utility. Tools are designed to guide landlords toward informed decisions, not to replace professional advice. **Tools are a core differentiator—where we can build a tool that answers a question better than an article, we build the tool.**

### 6.1 Upgrade Cost Calculator (ENHANCED)

**Purpose:** Provide landlords with realistic cost estimates for improving their property from its current EPC rating to EPC C or above. The calculator acknowledges uncertainty while giving more specific guidance than generic ranges.

**Phase 1 (Launch):**

| Input | Options | Required |
|-------|---------|----------|
| Current EPC rating | A through G, or "I don't know" | Yes |
| Property type | Dropdown matching property guide categories | Yes |
| Property size | Number of bedrooms (1-6+) or approximate square metres | Yes |
| Wall construction | Solid walls / Cavity walls / Mixed / Don't know | Yes |
| Current heating system | Gas boiler / Electric heating / Oil boiler / Heat pump / Other | Yes |
| Loft insulation status | None / Under 100mm / 100-270mm / Over 270mm / No loft / Don't know | No |
| Glazing type | Single / Double / Triple / Mixed / Don't know | No |
| Region | Dropdown of UK regions for cost adjustment | Yes |

**Phase 1 Outputs:**
- Prioritised improvement recommendations ranked by £ per EPC point
- Regional cost adjustments (London +25%, Scotland -10%, etc.)
- Cost cap exemption flag when projected spend exceeds £10,000
- Exportable results (PDF) with email capture
- Estimated total cost range (low, mid, high scenarios)
- Link to relevant property type guide for detailed information

**Phase 2 (Month 2):**
- EPC PDF upload and parsing
- Extract actual recommendations from uploaded certificate
- Identify assessor assumptions that may be incorrect
- Compare uploaded EPC against typical ratings for property type
- "Your EPC says X, but we think Y might be wrong because Z"

**Phase 3 (Month 4):**
- Integration with grant database
- "Based on your property and location, you may be eligible for £X in grants"
- Save/compare multiple properties (portfolio view)

**Technical requirements:**
- PDF parsing for EPC documents (standard format, should be feasible)
- Database of typical EPC characteristics by property type/age/region
- API connection to grant eligibility checker

**Data sources:**
- Energy Saving Trust benchmark costs
- Warm Homes Plan cost assumptions from January 2026 documentation
- Contractor pricing research (ongoing validation)
- Regional adjustment factors from construction cost indices

**Displayed caveats:**
- "These are estimates only. Actual costs will vary based on property condition, access, and contractor availability."
- "A professional EPC assessment is required for accurate recommendations."
- "Prices based on [month/year] data and may have changed."

---

### 6.2 Grant Eligibility Checker (PRIORITY)

**This is now a core product, not a nice-to-have. This tool alone could justify the entire site.** Nobody aggregates this data comprehensively for landlords.

**Purpose:** Answer "What grants can I get for my property?"

**User inputs:**

| Input | Options | Required |
|-------|---------|----------|
| Postcode | Full UK postcode for local scheme lookup | Yes |
| Property type | Dropdown matching property categories | Yes |
| Current EPC rating | A through G, or "I don't know" | Yes |
| Tenure | Freehold / Leasehold | Yes |
| Tenant benefit status | Yes / No / Don't know (for ECO4 eligibility) | No |
| Tenant income | Below £36,000 / Above £36,000 / Don't know (for Warm Homes: Local) | No |
| Heating system type | Gas boiler / Electric / Oil / Heat pump / Other | Yes |

**Outputs:**
- List of eligible schemes with:
  - Scheme name and administrator
  - Maximum grant value
  - What it covers
  - Eligibility confidence (definite/likely/possible)
  - Application link
  - Deadline if applicable
- Clear explanation of why ineligible schemes don't apply
- "Last verified: [date]" for each scheme

**Data sources to aggregate:**

**National schemes:**
- **ECO4** (via obligated energy suppliers) - ends March 2026, properties D-G, tenant must meet income/benefit criteria
- **Boiler Upgrade Scheme** - up to £7,500 for heat pumps, £5,000 for biomass, England and Wales
- **Warm Homes: Local Grant** (from April 2025) - up to £30,000 first property, 50% contribution for additional properties, tenant income below £36,000 or on benefits

**Local schemes (Phase 1 - top 20 councils by PRS stock):**
1. Manchester
2. Birmingham
3. Leeds
4. Liverpool
5. Bristol
6. Sheffield
7. Newcastle
8. Nottingham
9. Leicester
10. London boroughs: Camden, Hackney, Islington, Lambeth, Lewisham, Newham, Southwark, Tower Hamlets, Haringey, Waltham Forest

**Maintenance requirement:**
- Weekly check of scheme status
- Alert system for scheme changes
- Version history ("Last verified: [date]")
- User notification when schemes change in their area

---

### 6.3 Exemption Pathway Tool

**Purpose:** Guide landlords through understanding whether they qualify for exemption from EPC C requirements, what evidence they need, and how to register.

**User inputs:**

| Input | Options | Required |
|-------|---------|----------|
| Current EPC rating | D, E, F, or G | Yes |
| Improvements already made | Multi-select from improvement list | Yes |
| Approximate spend to date | Numeric input | Yes |
| Reason improvements not possible | Cost cap reached / Third party consent refused / Property devaluation / Wall type unsuitable / Listed building restrictions / Other | Yes |
| Evidence available | Checkboxes for document types held | Yes |

**Outputs:**
- Applicable exemption category with explanation
- Evidence requirements checklist
- Step-by-step registration process
- Exemption duration (5 years) and renewal requirements
- What happens when exemption expires
- Risks of relying on exemption (regulatory change, sale implications)

**Enhanced features:**
- Document checklist generator (what evidence you need)
- Template letters for exemption registration
- Timeline calculator ("If you start now, you can register by X")

---

### 6.4 Upgrade Priority Recommender

**Purpose:** Help landlords determine what improvements to make first based on their property characteristics and budget, optimising for cost-effectiveness measured in EPC points per pound spent.

**User inputs:**

| Input | Options | Required |
|-------|---------|----------|
| Property type | Dropdown matching property categories | Yes |
| Current EPC rating | A through G | Yes |
| Current EPC score | Numeric (if known from certificate) | No |
| Existing improvements | Multi-select checklist | Yes |
| Available budget | Numeric input or range selection | Yes |
| Constraints | Multi-select: Listed building / Conservation area / Leasehold / Solid walls / No loft access | No |

**Outputs:**
- Prioritised list of recommended improvements
- For each improvement: estimated cost, estimated EPC points gained, cost per point
- Running total showing cumulative investment and progress toward EPC C
- Visual progress bar or chart
- Warning if target EPC C unlikely achievable within budget
- Link to relevant property type guide

**Integration requirements:**
- Pull data from Calculator results when available
- Prioritise grant-funded improvements (from Grant Eligibility Checker)
- Cross-reference with property type guide recommendations

---

### 6.5 EPC Analyser (NEW)

**Purpose:** Let landlords understand their EPC better than the assessor explained it. Many landlords have EPCs but don't understand them, and assessors often make assumptions that are wrong. This positions us as the expert interpreter.

**User inputs:**
- EPC PDF upload OR manual entry of key fields:
  - Current rating and score
  - Property type
  - Construction age
  - Wall type noted on certificate
  - Heating system
  - Insulation levels (loft, walls, floor)
  - Recommendations listed

**Outputs:**
- Plain English explanation of each rating component
- "What's dragging your score down" analysis
- Comparison to typical properties of same type
- "Quick wins you might have missed"
- Flag potential assessor errors or assumptions
- "Your EPC says [X], but based on [property characteristics], this assumption may be incorrect"

**Why this matters:**
- Many landlords have EPCs but don't understand them
- Assessors often make assumptions that are wrong (especially for older properties)
- This positions us as the expert interpreter
- Creates email capture opportunity (full analysis report)
- Drives traffic to property type guides with specific recommendations

---

## 7. Data Strategy

### 7.1 EPC Register Analysis

The EPC register is public data containing millions of certificates. We will analyse this data to:

**1. Create original research content**
- "Average EPC rating by property type and construction era"
- "Which UK cities have the highest concentration of sub-C rental stock?"
- "Victorian terrace EPC performance: regional comparison"
- "Year-on-year improvement rates: are landlords upgrading?"

**2. Validate our cost estimates**
- Track properties that improved ratings between assessments
- Identify what changed (visible in EPC recommendations)
- Build evidence base for "what actually works"

**3. Generate PR-worthy statistics**
- "Our analysis of 2 million EPCs shows..."
- Pitchable to property press
- Creates backlinks and citations

**4. Power our tools**
- Benchmark user's property against similar stock
- "Your Victorian terrace scores 12 points below average for your area"

**Technical requirements:**
- EPC register API access or bulk download processing
- Database to store and query analysed data
- Automated refresh pipeline (monthly)
- Analysis scripts for generating insights

**Content outputs (quarterly):**
- "State of Landlord EPC Compliance" report
- Regional breakdowns
- Property type deep dives

---

### 7.2 Grant Database Maintenance

**Sources to monitor:**
- GOV.UK scheme announcements
- Ofgem ECO updates
- Individual council websites (top 20 initially)
- Energy supplier scheme pages

**Process:**
- Weekly review cycle
- Change log maintained
- User notification system for scheme changes in their area
- "Last verified" dates visible on all grant information

---

### 7.3 Regulatory Monitoring

**Goal:** Be first to publish on any EPC/MEES regulatory change.

**Monitor:**
- GOV.UK DLUHC publications
- Parliament bills tracker
- Consultation responses
- Ministerial statements

**Response protocol:**
- Draft analysis within 2 hours of announcement
- Publish within 4 hours
- Update all affected pages within 24 hours
- Email list notification same day

**This speed creates authority.** When landlords Google "new EPC rules," we should already be ranking.

---

## 8. Design Requirements

### 8.1 Design Principles

**Trustworthy and professional:** The design must communicate authority and reliability. Landlords are making significant financial decisions based on this information. Visual design should feel like a trusted professional resource, not a startup, blog, or government website. Clean without being sterile, modern without being trendy.

**Effortlessly scannable:** Landlords are time-poor. Content must be easy to scan, with clear visual hierarchy making it obvious where to find specific information. Key facts, figures, and actionable items should be visually distinct without overwhelming the page.

**Mobile-first without compromise:** Expect 60-70% of traffic from mobile devices. The mobile experience must be fully featured, not a degraded version of desktop. Tools must be fully functional on mobile. No horizontal scrolling, no tiny tap targets, no content hidden behind difficult interactions.

**Accessible by default:** WCAG 2.1 AA compliance is the minimum standard. Colour contrast ratios must be sufficient. Interactive elements must be keyboard navigable. Screen reader compatibility is required. Accessibility is not an afterthought.

### 7.2 Visual Identity

**Colour palette:**
- Primary: Deep blue (#003366 or similar) conveying trust and authority
- Secondary: Teal or green accent for energy/sustainability association without being heavy-handed
- Neutral: Greys for text hierarchy and backgrounds
- Alert: Amber for warnings, red for critical deadlines (used sparingly)

**Typography:**
- Headlines: Clean sans-serif with good weight range (Inter, Source Sans, or similar)
- Body: Highly readable at 16px minimum on mobile
- Numbers and data: Consider tabular figures for alignment in tables and calculators

**Imagery approach:**
- No stock photos of happy landlords or generic business people. These destroy credibility.
- Use illustrations or icons for property types and improvement categories
- Diagrams and charts for data presentation
- Photographs only where genuinely useful (example installations, before/after)

### 7.3 Component Library

The following components are required:

- **Key fact callout box:** For highlighting critical numbers, dates, and requirements
- **Warning box:** For compliance deadlines, common mistakes, regulatory changes
- **Tip box:** For practical recommendations and best practices
- **Comparison table:** For presenting options side by side
- **Cost table:** For displaying price ranges with consistent formatting
- **Accordion:** For FAQs and supplementary information that should not crowd main content
- **Progress indicator:** For multi-step tools
- **Results card:** For displaying calculator and tool outputs
- **Source citation:** Unobtrusive but clickable reference to source documents
- **Related content card:** For cross-linking to related articles
- **Newsletter signup:** Non-intrusive, contextually placed
- **Breadcrumbs:** For navigation clarity on deep content

### 7.4 Tool Interface Guidelines

**Forms and inputs:**
- Large touch targets (minimum 44px)
- Clear labels above inputs, not placeholder text only
- Helpful hint text where inputs may be confusing
- Inline validation with helpful error messages
- Progress saving where tools have multiple steps

**Results presentation:**
- Clear visual hierarchy: headline number or recommendation first
- Supporting detail expandable or secondary
- Methodology and caveats visible but not dominant
- Clear next actions: links to relevant content, ability to adjust inputs
- Share or save functionality for returning to results

---

## 9. Technical Requirements

### 9.1 Architecture Overview

Custom-built platform. No off-the-shelf CMS. Architecture should prioritise performance, SEO, and maintainability.

**Recommended approach:**
- Static site generation for content pages (performance and SEO)
- API layer for interactive tools and dynamic data
- Headless CMS or structured content repository for editorial workflow
- CDN delivery for all static assets

### 9.2 Performance Requirements

| Metric | Target | Measurement |
|--------|--------|-------------|
| Largest Contentful Paint (LCP) | Under 2.5 seconds | Core Web Vitals |
| First Input Delay (FID) | Under 100 milliseconds | Core Web Vitals |
| Cumulative Layout Shift (CLS) | Under 0.1 | Core Web Vitals |
| PageSpeed Insights (mobile) | 90+ score | Google PageSpeed |
| PageSpeed Insights (desktop) | 95+ score | Google PageSpeed |
| Time to First Byte (TTFB) | Under 600 milliseconds | Server response |

Performance is a ranking factor. Tool pages with interactive elements must still meet Core Web Vitals. Lazy loading for below-fold content. Critical CSS inlined.

### 9.3 SEO Technical Requirements

**URL structure:**
- Clean URLs without parameters
- Logical hierarchy reflecting site structure
- Keyword-inclusive where natural
- No trailing slashes inconsistency
- Proper 301 redirects if URLs ever change

**Technical SEO elements:**
- XML sitemap auto-generated on content publish
- Robots.txt properly configured
- Canonical URLs on all pages
- SSL certificate (HTTPS only)
- Mobile responsive (single URL, not separate mobile site)
- Hreflang tags if future multi-region expansion

**Structured data (JSON-LD):**
- Article schema on all editorial content
- FAQ schema on FAQ pages and inline FAQ sections
- HowTo schema on guide content where appropriate
- BreadcrumbList schema on all pages
- Organisation schema on site
- WebApplication schema on tool pages

### 9.4 Content Management Requirements

The editorial interface must support:

- Rich text editing with consistent styling
- Component insertion (callout boxes, tables, accordions)
- SEO fields per page (meta title, meta description, primary keyword, canonical)
- Publication scheduling
- Content status workflow (draft, review, published, needs update)
- Revision history
- "Last reviewed" date field separate from last modified
- Content audit dashboard showing age of content and flagging stale items
- Author management
- Tagging and categorisation
- Related content linking
- Image upload with required alt text
- Preview before publish

### 9.5 Analytics and Tracking

**Required integrations:**
- Google Analytics 4
- Google Search Console

**Event tracking required on:**
- Tool interactions (started, completed, abandoned, by step)
- Internal link clicks
- External link clicks
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page
- Newsletter signup
- Content sharing (if implemented)

**Dashboard requirements:**
- Content performance by page (traffic, engagement, conversions)
- Keyword ranking tracking (integration with third-party tool or custom)
- Tool usage analytics
- Traffic source analysis

### 9.6 Infrastructure

| Component | Requirement |
|-----------|-------------|
| Hosting | High-performance, UK-based or UK CDN edge for speed |
| CDN | Global CDN for static assets |
| SSL | TLS 1.3, auto-renewal |
| Database | For tools, user data, content if not static |
| Deployment | CI/CD pipeline for rapid updates |
| Monitoring | Uptime monitoring, performance tracking, error logging |
| Backup | Daily automated backups with tested restore process |

---

## 10. Content Production

### 10.1 AI-Assisted Workflow

Content production uses AI assistance with human oversight. AI processes primary sources and produces drafts; humans verify accuracy and add editorial judgment.

**Workflow steps:**

1. **Source collection.** Gather primary documents: government consultation documents, official guidance, NRLA policy responses, Energy Saving Trust publications, relevant legislation.

2. **Brief creation.** Define for each article: primary keyword target, secondary keywords, search intent, target audience, required sections, source documents to reference.

3. **AI first draft.** Feed source documents to AI with specific extraction and structuring prompts. Output is structured draft with citations to sources.

4. **Human review.** Editor reviews for: factual accuracy (especially figures, dates, thresholds), appropriate tone for audience, practical framing and actionable advice, internal consistency.

5. **SEO optimisation.** Finalise meta title and description, check keyword placement, add internal links, verify structured data.

6. **Final review.** Second pass on accuracy, particularly any numbers or regulatory details. Sign-off for publication.

7. **Publication.** Publish with all required metadata, submit to Search Console, add to sitemap.

8. **Monitoring.** Track ranking performance, user engagement, feedback. Flag for update when needed.

### 10.2 Quality Standards

**Non-negotiable requirements:**
- Every regulatory claim must cite primary source
- All figures verified against official documents
- Cost estimates include methodology and date
- No hedging where regulations are clear
- Clear acknowledgment where regulations are ambiguous

**Style standards:**
- Active voice default
- Short sentences (under 25 words average)
- No jargon without explanation
- Acronyms spelled out on first use per article
- UK English spelling throughout
- Numbers: spell out one to nine, numerals for 10+
- Currency: £X,XXX format
- Dates: 1 October 2030 format

### 10.3 Source Document Library

Core source documents to acquire and maintain:

**Government sources:**
- Warm Homes Plan (January 2026)
- MEES Regulations and amendments
- Domestic Private Rented Property Minimum Standard consultation and responses
- RdSAP 10 methodology documentation
- ECO4 scheme guidance
- Boiler Upgrade Scheme guidance
- Great British Insulation Scheme guidance
- Warm Homes: Local Grant guidance

**Industry sources:**
- NRLA policy briefings and consultation responses
- Energy Saving Trust cost data and guidance
- BRE documentation on EPC methodology
- English Housing Survey (latest)

**Local authority sources:**
- Grant scheme documentation for priority councils
- Contact information and application processes

---

## 11. Authority Building Strategy

### 11.1 Link Acquisition

**Passive (content that earns links):**
- Original data analysis (journalists cite statistics)
- Embeddable tools and calculators
- Comprehensive guides that become reference resources
- Grant database (other sites link as resource)

**Active (outreach):**

**Forums and communities:**
- LandlordZone forums (genuine participation, helpful answers)
- Property Tribes
- Reddit r/UKLandlords, r/HousingUK
- Facebook landlord groups

**Rule:** Only link to GreenLord when genuinely helpful. Build reputation first, links follow.

**Guest content:**
- Landlord accountancy blogs (tax implications of EPC upgrades)
- Mortgage broker content (EPC requirements for BTL lending)
- Property management software blogs
- Local landlord association newsletters

**PR and press:**
- Property Industry Eye
- LandlordZone news section
- Mortgage Strategy
- Local press (regional EPC data stories)

**Pitch angles:**
- Original data ("Our analysis shows X")
- Expert comment on regulatory changes
- Case studies with real landlords

---

### 11.2 Relationship Building

**The Independent Landlord:**
- Direct outreach to Suzanne Smith
- Offer: share data, collaborate on content, cross-promote
- She has audience and credibility; we have tools and scale
- Not a competitor to crush; a potential ally

**Industry bodies:**
- NRLA (offer data for their reports)
- Local landlord associations
- Property Redress Scheme
- Deposit protection schemes

**Trades and installers:**
- Retrofit coordinators
- EPC assessors
- Insulation installers
- Heating engineers

**These relationships create:**
- Expert quotes for content
- Case studies
- Referral traffic
- Industry credibility

---

### 11.3 Email List Strategy

**Lead magnets:**

**Launch:**
- "EPC Compliance Checklist for Landlords" (PDF)
- Calculator results emailed as report

**Month 2:**
- "2030 Deadline Action Plan Template" (editable doc)
- "Grant Finder Results" emailed with updates when schemes change

**Month 3:**
- "[Property Type] Upgrade Planner" (spreadsheet)
- "EPC Analysis Report" for uploaded certificates

**Email sequences:**
- Welcome sequence (what GreenLord offers, key resources)
- Regulatory update alerts (immediate when changes happen)
- Monthly digest (new content, tool updates, grant changes)

**Goal:** 5,000 subscribers by month 6, 15,000 by month 12.

**Why this matters:**
- Owned audience independent of Google
- Return traffic when we publish updates
- Eventually monetisable
- Survey audience for original research

---

## 12. Phased Delivery Plan

### 12.1 Phase Overview

| Phase | Duration | Focus | Status |
|-------|----------|-------|--------|
| Phase 1: Foundation | Weeks 1-4 | Platform, core content, calculator | ✅ COMPLETE |
| Phase 2: Grant Database | Weeks 5-8 | Grant tool and content | ✅ COMPLETE (merged into Phase 3) |
| Phase 3: Content Depth | Weeks 9-14 | Property guides, local guides, tools | ✅ COMPLETE |
| Phase 4: Data and Authority | Weeks 15-20 | EPC data pipeline, research, outreach | 🔜 NEXT |
| Phase 5: Scale and Optimise | Weeks 21-24 | Gap analysis, CRO, expansion | Pending |

---

### 12.2 Phase 1: Foundation (Weeks 1-4)

**Deliverables:**
- Platform infrastructure
- Core content (15+ pages) ✓ MOSTLY DONE
- Cost calculator (full functionality) ✓ IN PROGRESS
- Fix all v1 issues (placeholders, bugs, broken links)
- Email capture with basic lead magnet
- Submit to Search Console, request indexing

**EXIT CRITERIA:**
- Site live on production domain
- Calculator working end-to-end with PDF export
- 20+ pages indexed
- Email capture functional

---

### 12.3 Phase 2: Grant Database (Weeks 5-8)

**This phase now focuses on the grant tool—a core differentiator.**

**Deliverables:**
- Build grant eligibility checker
- Populate national schemes (ECO4, BUS, Warm Homes: Local)
- Populate top 10 councils
- Create grant-related content (guides for each scheme)
- Integrate grant recommendations into calculator results

**EXIT CRITERIA:**
- Grant checker live with national schemes + 10 councils
- Grant content published (10+ pages)
- Calculator shows "you may be eligible for..." recommendations

---

### 12.4 Phase 3: Content Depth (Weeks 9-14) ✓ COMPLETE

**Deliverables:**
- Remaining property type guides (6-8 more) ✓ 7 new guides (10 total)
- Local guides (10 cities) ✓ 10 city guides + overview page
- Exemption pathway tool ✓ COMPLETE
- EPC Analyser tool ✓ COMPLETE (moved from Phase 4)
- Grant eligibility checker ✓ COMPLETE
- Expand grant database ✓ National schemes + council flex info

**EXIT CRITERIA:**
- 10+ property type guides live ✓ (10 guides)
- 10 local guides live ✓ (10 guides)
- 60+ total pages ⚠️ (47 pages - close to target)
- All tools functional ✓ (4 tools live)
- Grant database populated ✓

**Completed 31 January 2026**

---

### 12.5 Phase 4: Data and Authority (Weeks 15-20)

**Deliverables:**
- EPC register data pipeline
- First original research publication ("State of Landlord EPC Compliance")
- Outreach campaign (forums, guest posts, PR)
- Expert interviews and case studies
- ~~EPC Analyser tool~~ (completed in Phase 3)

**EXIT CRITERIA:**
- EPC data analysis capability operational
- "State of Landlord EPC Compliance" report published
- 10+ quality backlinks acquired
- 3+ expert interviews published
- ~~EPC Analyser in beta~~ ✓ Already live

---

### 12.6 Phase 5: Scale and Optimise (Weeks 21-24)

**Deliverables:**
- Content gap analysis and fills
- Internal linking optimisation
- Featured snippet targeting
- Conversion rate optimisation
- Second research publication
- Expand grant database to 30+ councils

**EXIT CRITERIA:**
- Traffic targets met (see metrics)
- Top 3 rankings for priority keywords
- 10+ featured snippets
- Email list at 5,000+

---

## 13. Success Metrics

### 13.1 Traffic Metrics

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Organic sessions | 2,500 | 15,000 | 50,000 |
| Keywords ranking (top 20) | 75 | 250 | 500+ |
| Keywords ranking (top 3) | 10 | 50 | 100+ |
| Featured snippets | 3 | 15 | 30+ |

---

### 13.2 Tool Usage Metrics

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Calculator completions | 500 | 3,000 | 15,000/month |
| Grant checker uses | 200 | 2,000 | 10,000/month |
| PDF exports | 100 | 500 | 2,000/month |
| EPC uploads | - | 500 | 2,000/month |

---

### 13.3 Authority Metrics

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Referring domains | 5 | 25 | 75 |
| Domain Rating | 10+ | 25+ | 40+ |
| Press mentions | - | 1 | 5+ |
| Cited in industry reports | - | - | Yes |

---

### 13.4 Email List Metrics

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Subscribers | 1,000 | 5,000 | 15,000 |
| Open rate target | 35%+ | 35%+ | 35%+ |
| Click rate target | 5%+ | 5%+ | 5%+ |

---

### 13.5 Quality Metrics

| Metric | Measurement | Target |
|--------|-------------|--------|
| Content accuracy | Errors reported by users | Zero factual errors live more than 48 hours |
| Content currency | Pages updated within 30 days of regulatory change | 100% |
| Page speed | Core Web Vitals pass rate | 100% of pages |
| Accessibility | WCAG 2.1 AA compliance | 100% of pages |

---

### 13.6 Tool-Specific Metrics

| Metric | Target |
|--------|--------|
| Calculator start rate | 30% of page visitors |
| Calculator completion rate | 60% of starters |
| Time to complete | Under 3 minutes average |
| Results page engagement | Under 30% bounce from results |
| Tool to content navigation | 40%+ click through to related content |

---

## 14. Risks and Mitigations

### 14.1 Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Regulatory change invalidates content | Medium | High | Rapid update workflow, monitoring of government announcements, modular content structure |
| Google algorithm update affects rankings | Medium | Medium | Focus on quality and user value, no black-hat techniques, diversified keyword targeting |
| AI content detected or penalised | Low-Medium | High | Human review layer, original analysis, strong E-E-A-T signals, cited sources |
| Competitor enters with more resources | Medium | Medium | First-mover advantage on underserved niches, focus on quality over breadth |
| Tool data becomes outdated | High | Medium | Documented data sources, scheduled review, visible "last updated" dates |
| Low engagement despite traffic | Medium | Medium | User feedback mechanisms, analytics-driven iteration, content testing |
| Technical performance issues | Low | Medium | Performance monitoring, CDN, static generation where possible |

---

### 14.2 New Risk: Competitor Response

**Risk:** The Independent Landlord or EPC Advisor sees our traction and improves their offering.

**Mitigation:**
- Move fast; build tools they can't easily replicate
- Build relationships (harder to compete with collaborators)
- Create data moat (EPC register analysis, grant database)
- Build email list (owned audience)

**Likelihood:** Medium
**Impact:** Medium

---

### 14.3 New Risk: Grant Scheme Changes

**Risk:** Government changes or cancels key grant schemes, invalidating our database.

**Mitigation:**
- Monitoring and rapid update process
- Version history and change tracking
- Position as "always current" rather than static resource
- Diversify value beyond just grants

**Likelihood:** High (schemes change frequently)
**Impact:** Low (if we update quickly, it's actually an opportunity)

---

### 14.4 New Risk: EPC Reform

**Risk:** Government changes EPC methodology significantly, requiring content rewrites.

**Mitigation:**
- Monitor consultation and regulatory pipeline
- Build content in modular way (easy to update sections)
- Position as experts on the transition (opportunity, not just risk)
- New metrics (HEM:EPC) will create confusion; we explain it

**Likelihood:** High (confirmed for 2026)
**Impact:** Medium (creates work but also opportunity)

---

### 14.5 Dependency Risks

| Dependency | Risk | Mitigation |
|------------|------|------------|
| Government source documents | Documents removed or URLs change | Local copies of all source documents |
| Google Search Console API | API changes or access issues | Multiple data export methods |
| Third-party cost data | Data becomes unavailable or stale | Multiple sources, regular validation |
| Local authority scheme information | Schemes change without notice | Regular review schedule, user feedback mechanism |

---

## 15. Open Decisions and Assumptions

### 15.1 Resolved Decisions

| Decision | Resolution |
|----------|------------|
| Brand name | GreenLord ✓ |
| Domain | [production domain] ✓ |
| Author persona | GreenLord Team ✓ |

---

### 15.2 New Open Decisions

| Decision | Options | Recommendation | Decision needed by |
|----------|---------|----------------|-------------------|
| EPC PDF parsing approach | Client-side JS parsing / Server-side processing / Third-party API | Server-side for reliability and data capture | Week 6 |
| Grant database update process | Manual weekly review / Automated monitoring / Crowdsourced updates | Manual initially, build automation over time | Week 5 |
| EPC register data access | Bulk download processing / API access / Partnership with existing provider | Bulk download initially (free), consider API for real-time | Week 12 |
| Research report format | Blog post / Downloadable PDF / Interactive microsite | All three (blog summary, full PDF, interactive data explorer) | Week 15 |
| Monetisation approach (future) | Affiliate (installer referrals) / Sponsored content / Premium tools / Lead gen | Defer decision until Month 6, focus on traffic first | Month 6 |

---

### 15.3 Assumptions

This PRD assumes the following. Flag immediately if any assumption is incorrect:

- **Regulatory stability:** 2030 deadline and cost cap will not change materially before launch
- **Resource availability:** Engineering and content resource available as planned
- **Market timing:** Landlord interest in EPC compliance is increasing, not decreasing
- **SEO viability:** Organic search remains a viable acquisition channel for this content type
- **No paid acquisition:** Version 1.0 relies entirely on organic traffic; no paid spend planned

---

## Appendices

### Appendix A: Keyword Target List

Detailed keyword list with search volume estimates, competition assessment, and priority ranking. To be maintained as separate document and updated regularly.

#### Priority Tier 1: Property Type Keywords (Low Competition, High Value)

| Keyword | Est. Volume | Competition | Priority |
|---------|-------------|-------------|----------|
| victorian terrace epc upgrade | 100-200 | Low | High |
| improve epc victorian house | 150-300 | Low | High |
| 1930s house epc rating | 100-200 | Low | High |
| solid wall insulation epc | 80-150 | Low | High |
| purpose built flat epc improvement | 50-100 | Very Low | High |
| hmo epc requirements | 100-200 | Low | High |
| period property epc upgrade | 80-150 | Low | High |

#### Priority Tier 2: Regulatory and Decision Keywords

| Keyword | Est. Volume | Competition | Priority |
|---------|-------------|-------------|----------|
| epc c deadline 2030 landlords | 300-500 | Medium | High |
| epc cost cap landlords | 150-300 | Medium | High |
| rdsap 10 changes landlords | 50-150 | Low | High |
| mees regulations landlords | 200-400 | Medium | High |
| epc exemption register landlord | 100-200 | Medium | Medium |
| warm homes plan landlords | 100-300 | Low | High |

#### Priority Tier 3: Cost and Funding Keywords

| Keyword | Est. Volume | Competition | Priority |
|---------|-------------|-------------|----------|
| epc d to c cost | 200-400 | Medium | High |
| cheapest way to improve epc | 150-300 | Medium | High |
| landlord energy grants 2026 | 100-200 | Low | High |
| eco4 landlords eligibility | 80-150 | Low | High |
| warm homes local grant landlords | 50-150 | Low | High |
| boiler upgrade scheme rental property | 80-150 | Low | Medium |

#### Priority Tier 4: Local Keywords

| Keyword Pattern | Est. Volume Each | Competition | Priority |
|-----------------|------------------|-------------|----------|
| [city] landlord epc grants | 30-100 | Very Low | High |
| [city] epc assessor | 50-150 | Low | Medium |
| [council] eco4 scheme | 20-50 | Very Low | Medium |

---

### Appendix B: Competitor Analysis Summary

Detailed competitor profiles maintained as separate document. Summary of key competitors and positioning:

| Competitor | Type | Strengths | Gaps We Exploit |
|------------|------|-----------|-----------------|
| The Independent Landlord | Specialist creator | Genuine expertise, community trust | No tools, broader focus, capacity limits |
| Landlord Studio | SaaS content | Professional, well-written | Not independent, generic advice |
| NRLA | Trade association | Institutional authority | Behind paywall, dry and policy-focused |
| LandlordZone | News and community | Domain authority | News not guides, variable quality |
| GOV.UK | Government | Authoritative | Dense, not landlord-friendly |
| Energy Saving Trust | Charity | Trusted | Consumer focus, not landlord-specific |

---

### Appendix C: Content Brief Template

Standard template for article briefs. To be used for all content production.

```
Article title: [Working title]
Primary keyword: [Target keyword]
Secondary keywords: [2-3 additional targets]
Search intent: [Informational / Commercial / Navigational]
Target audience: [Primary / Secondary / Tertiary]
Word count target: [Range]
Pillar page: [Which pillar this clusters under]
Required sections: [Outline of H2s]
Source documents: [List of sources to reference]
Internal links required: [Specific pages to link to]
Competitor content to review: [URLs of competing content]
Differentiation notes: [How we do this better]
```

---

### Appendix D: Source Document Register

Master list of primary source documents. All content claims must trace to these sources.

| Document | Source | Date | Status |
|----------|--------|------|--------|
| Warm Homes Plan | DESNZ | January 2026 | Acquired |
| MEES Regulations SI 2015/962 | legislation.gov.uk | 2015 + amendments | Acquired |
| PRS Minimum Standard consultation response | GOV.UK | 2020-2023 | Acquired |
| RdSAP 10 methodology | BRE | June 2025 | Pending release |
| ECO4 guidance | Ofgem | Current | Acquired |
| Boiler Upgrade Scheme guidance | GOV.UK | Current | Acquired |
| GBIS guidance | Ofgem | Current | Acquired |
| English Housing Survey 2023 | DLUHC | 2024 | Acquired |

---

*End of Document*
