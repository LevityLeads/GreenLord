# Product Requirements Document
# Landlord EPC Compliance Platform

**Version:** 1.0  
**Status:** Draft  
**Created:** 29 January 2026  
**Last Updated:** 29 January 2026

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Market Context](#2-market-context)
3. [Target Audience](#3-target-audience)
4. [Product Principles](#4-product-principles)
5. [Content Architecture](#5-content-architecture)
6. [Interactive Tools](#6-interactive-tools)
7. [Design Requirements](#7-design-requirements)
8. [Technical Requirements](#8-technical-requirements)
9. [Content Production](#9-content-production)
10. [Phased Delivery Plan](#10-phased-delivery-plan)
11. [Success Metrics](#11-success-metrics)
12. [Risks and Mitigations](#12-risks-and-mitigations)
13. [Open Decisions and Assumptions](#13-open-decisions-and-assumptions)
14. [Appendices](#appendices)

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

- **Existing content is inadequate.** Competitor analysis reveals that most content is either too generic, outdated, behind paywalls, or written from a policy rather than practical perspective. Property-specific guidance is almost non-existent.

- **The audience is underserved.** Small portfolio landlords, who represent 94% of all UK landlords, lack the resources to navigate regulatory complexity but are too sophisticated for basic consumer advice.

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

### 2.2 Regulatory Framework

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

### 2.3 RdSAP 10 Transition

The EPC assessment methodology is changing. RdSAP 10 launches in June 2025 with several significant changes:

- New carbon emission calculations reflecting current grid decarbonisation
- Updated assumptions for heating systems and insulation performance
- Changes to how improvements are valued in the rating calculation
- Potential for existing ratings to change under the new methodology

This creates immediate confusion for landlords: should they get a new EPC now under the current methodology, or wait for RdSAP 10? Clear guidance on this transition represents a significant content opportunity.

### 2.4 Competitive Landscape Summary

| Competitor Type | Examples | Strengths | Weaknesses |
|-----------------|----------|-----------|------------|
| Specialist content creators | The Independent Landlord | Genuine expertise, trusted voice, active community | One-person operation, broader focus than just EPC, no tools |
| SaaS content marketing | Landlord Studio, Goodlord | Professional design, well-written guides | Content supports software sales, not independent or specialist |
| Trade associations | NRLA, RLA | Institutional authority, lobbying influence | Content often behind paywall, dry and policy-focused |
| News and community sites | LandlordZone | Domain authority from decades online | News-focused not guide-focused, variable quality |
| Letting agency blogs | Various | Local knowledge | Generic content, rarely updated, self-serving |
| Government and institutional | GOV.UK, Energy Saving Trust | Authoritative on regulations | Dense, hard to navigate, not landlord-specific |

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

#### Property Type Guides

| Attribute | Specification |
|-----------|---------------|
| Purpose | Property-specific upgrade guidance |
| Word count | 1,500 to 2,500 words |
| Required sections | Typical starting EPC; Common issues and challenges; Recommended upgrades in priority order; Realistic cost ranges; Example upgrade pathway |
| Visual elements | Property archetype illustration, improvement priority diagram |
| Target keywords | Property type plus EPC/upgrade terms |
| Quantity | 8 to 10 property type guides |

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
| Quantity | 4 interactive tools |

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

Four interactive tools differentiate the platform and provide genuine utility. Tools are designed to guide landlords toward informed decisions, not to replace professional advice.

### 6.1 Upgrade Cost Calculator

**Purpose:** Provide landlords with realistic cost estimates for improving their property from its current EPC rating to EPC C or above. The calculator acknowledges uncertainty while giving more specific guidance than generic ranges.

**User inputs:**

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

**Outputs:**
- Estimated total cost range (low, mid, high scenarios)
- Recommended improvements listed in priority order
- Estimated EPC point improvement per measure
- Cost per EPC point for each measure (efficiency ranking)
- Indication of whether cost cap exemption likely applies
- Link to relevant property type guide for detailed information

**Data sources:**
- Energy Saving Trust benchmark costs
- Warm Homes Plan cost assumptions from January 2026 documentation
- Contractor pricing research (ongoing validation)
- Regional adjustment factors from construction cost indices

**Displayed caveats:**
- "These are estimates only. Actual costs will vary based on property condition, access, and contractor availability."
- "A professional EPC assessment is required for accurate recommendations."
- "Prices based on [month/year] data and may have changed."

### 6.2 Grant Eligibility Checker

**Purpose:** Help landlords understand what funding they might qualify for across national and local schemes. The funding landscape is fragmented and confusing; this tool provides a single starting point.

**User inputs:**

| Input | Options | Required |
|-------|---------|----------|
| Property postcode | Full UK postcode for local scheme lookup | Yes |
| Property type | Dropdown matching property categories | Yes |
| Current EPC rating | A through G, or "I don't know" | Yes |
| Tenant status | Current tenant in place / Between tenancies / New purchase | Yes |
| Tenant receives means-tested benefits | Yes / No / Don't know (for ECO4 eligibility) | No |
| Property in conservation area | Yes / No / Don't know | No |
| Listed building status | Grade I / Grade II / Not listed / Don't know | No |

**Outputs:**
- List of potentially eligible schemes, each showing:
  - Scheme name and administering body
  - What improvements it covers
  - Typical funding amount or percentage
  - How to apply with direct link
  - Key eligibility requirements
- Schemes not eligible for, with clear explanation of why
- Schemes requiring further investigation (edge cases)

**Scope consideration:** Version 1.0 will focus on major national schemes (ECO4, Warm Homes: Local Grant, Boiler Upgrade Scheme, Great British Insulation Scheme) plus the top 20 local authority areas by rental stock. Full local authority coverage is a subsequent phase.

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

---

## 7. Design Requirements

### 7.1 Design Principles

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

## 8. Technical Requirements

### 8.1 Architecture Overview

Custom-built platform. No off-the-shelf CMS. Architecture should prioritise performance, SEO, and maintainability.

**Recommended approach:**
- Static site generation for content pages (performance and SEO)
- API layer for interactive tools and dynamic data
- Headless CMS or structured content repository for editorial workflow
- CDN delivery for all static assets

### 8.2 Performance Requirements

| Metric | Target | Measurement |
|--------|--------|-------------|
| Largest Contentful Paint (LCP) | Under 2.5 seconds | Core Web Vitals |
| First Input Delay (FID) | Under 100 milliseconds | Core Web Vitals |
| Cumulative Layout Shift (CLS) | Under 0.1 | Core Web Vitals |
| PageSpeed Insights (mobile) | 90+ score | Google PageSpeed |
| PageSpeed Insights (desktop) | 95+ score | Google PageSpeed |
| Time to First Byte (TTFB) | Under 600 milliseconds | Server response |

Performance is a ranking factor. Tool pages with interactive elements must still meet Core Web Vitals. Lazy loading for below-fold content. Critical CSS inlined.

### 8.3 SEO Technical Requirements

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

### 8.4 Content Management Requirements

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

### 8.5 Analytics and Tracking

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

### 8.6 Infrastructure

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

## 9. Content Production

### 9.1 AI-Assisted Workflow

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

### 9.2 Quality Standards

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

### 9.3 Source Document Library

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

## 10. Phased Delivery Plan

### 10.1 Phase Overview

| Phase | Duration | Focus | Exit Criteria |
|-------|----------|-------|---------------|
| Phase 1: Foundation | Weeks 1-4 | Platform build, core content, first tool | Site live, 15+ pages published, cost calculator functional |
| Phase 2: Content Expansion | Weeks 5-10 | Property guides, funding content, second tool | 40+ pages published, all property guides live, 2 tools live |
| Phase 3: Local and Depth | Weeks 11-16 | Local guides, remaining tools, SEO refinement | 60+ pages, 10+ local guides, all tools live |
| Phase 4: Optimisation | Weeks 17-24 | Performance tuning, content gaps, authority building | Traffic targets met, ranking for priority keywords |

### 10.2 Phase 1: Foundation (Weeks 1-4)

**Platform development:**
- Core site architecture and build
- Design system and component library
- Content management interface
- Analytics integration
- SEO technical foundation (sitemap, schema, etc.)

**Content deliverables:**
- Homepage
- Regulations pillar page
- EPC C 2030 deadline article
- MEES regulations guide
- Cost cap and exemptions article
- RdSAP 10 changes article
- Warm Homes Plan summary
- 3 priority property type guides (Victorian terrace, 1930s semi, purpose-built flat)
- Costs pillar page
- D to C upgrade costs article
- FAQ page (initial)
- Glossary (initial)

**Tool deliverables:**
- Upgrade Cost Calculator (full functionality)

### 10.3 Phase 2: Content Expansion (Weeks 5-10)

**Content deliverables:**
- Remaining property type guides (5-6 additional)
- Property types pillar page
- E to C upgrade costs article
- Cheapest improvements ranked article
- Warm Homes: Local Grant guide
- ECO4 for landlords guide
- Boiler Upgrade Scheme guide
- Great British Insulation Scheme guide
- Funding pillar page
- Timeline article (what happens when)
- Compliance checklist article

**Tool deliverables:**
- Exemption Pathway Tool

### 10.4 Phase 3: Local and Depth (Weeks 11-16)

**Content deliverables:**
- Local guides for 10 priority cities: London, Birmingham, Manchester, Leeds, Liverpool, Bristol, Sheffield, Newcastle, Nottingham, Glasgow
- Local pillar page
- Additional cluster content based on Search Console data
- FAQ expansion based on user questions
- Glossary expansion

**Tool deliverables:**
- Grant Eligibility Checker (major schemes + priority councils)
- Upgrade Priority Recommender

### 10.5 Phase 4: Optimisation (Weeks 17-24)

**Focus areas:**
- Content gap analysis based on ranking and traffic data
- Underperforming content refresh
- Additional local guides (10 more cities)
- Internal linking optimisation
- Featured snippet targeting for high-value queries
- Page speed optimisation
- Tool refinement based on usage analytics
- Authority building (PR, expert outreach, links)

---

## 11. Success Metrics

### 11.1 Leading Indicators (Weekly Review)

| Metric | Measurement | Target |
|--------|-------------|--------|
| Content velocity | Pages published vs. plan | On track or ahead |
| Indexation | Pages indexed in Search Console | 95%+ of published pages |
| Impressions | Total impressions in Search Console | Week-on-week growth |
| Average position | Mean position for target keywords | Improvement trend |
| Core Web Vitals | PageSpeed scores | Maintain 90+ mobile |
| Tool completions | Calculator/tool completion rate | 60%+ of starts |

### 11.2 Primary Metrics (Monthly Review)

| Metric | Measurement | Target (Month 3) | Target (Month 6) |
|--------|-------------|------------------|------------------|
| Organic sessions | GA4 | 1,000 | 5,000 |
| Organic users | GA4 | 800 | 4,000 |
| Pages per session | GA4 | 1.8 | 2.2 |
| Average session duration | GA4 | 2 minutes | 3 minutes |
| Bounce rate | GA4 | Under 70% | Under 60% |
| Keywords ranking (top 20) | Tracking tool | 50 | 150 |
| Keywords ranking (top 3) | Tracking tool | 5 | 25 |
| Featured snippets | Tracking tool | 1 | 5 |

### 11.3 Quality Metrics

| Metric | Measurement | Target |
|--------|-------------|--------|
| Content accuracy | Errors reported by users | Zero factual errors live more than 48 hours |
| Content currency | Pages updated within 30 days of regulatory change | 100% |
| Page speed | Core Web Vitals pass rate | 100% of pages |
| Accessibility | WCAG 2.1 AA compliance | 100% of pages |

### 11.4 Tool-Specific Metrics

| Metric | Target |
|--------|--------|
| Calculator start rate | 30% of page visitors |
| Calculator completion rate | 60% of starters |
| Time to complete | Under 3 minutes average |
| Results page engagement | Under 30% bounce from results |
| Tool to content navigation | 40%+ click through to related content |

---

## 12. Risks and Mitigations

### 12.1 Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Regulatory change invalidates content | Medium | High | Rapid update workflow, monitoring of government announcements, modular content structure |
| Google algorithm update affects rankings | Medium | Medium | Focus on quality and user value, no black-hat techniques, diversified keyword targeting |
| AI content detected or penalised | Low-Medium | High | Human review layer, original analysis, strong E-E-A-T signals, cited sources |
| Competitor enters with more resources | Medium | Medium | First-mover advantage on underserved niches, focus on quality over breadth |
| Tool data becomes outdated | High | Medium | Documented data sources, scheduled review, visible "last updated" dates |
| Low engagement despite traffic | Medium | Medium | User feedback mechanisms, analytics-driven iteration, content testing |
| Technical performance issues | Low | Medium | Performance monitoring, CDN, static generation where possible |

### 12.2 Dependency Risks

| Dependency | Risk | Mitigation |
|------------|------|------------|
| Government source documents | Documents removed or URLs change | Local copies of all source documents |
| Google Search Console API | API changes or access issues | Multiple data export methods |
| Third-party cost data | Data becomes unavailable or stale | Multiple sources, regular validation |
| Local authority scheme information | Schemes change without notice | Regular review schedule, user feedback mechanism |

---

## 13. Open Decisions and Assumptions

### 13.1 Decisions Required

| Decision | Options | Recommendation | Owner | Due |
|----------|---------|----------------|-------|-----|
| Brand name and domain | Various options TBD | Select short, memorable, keyword-relevant if possible | Product | Week 1 |
| Author identity | Real person / Pseudonymous expert / Brand byline | Pseudonymous expert with credible bio; real person if available | Product | Week 1 |
| Newsletter platform | Mailchimp / ConvertKit / Custom | ConvertKit for flexibility | Engineering | Week 2 |
| Keyword tracking tool | SEMrush / Ahrefs / Custom | Ahrefs for data quality | Product | Week 2 |
| Grant database scope v1 | Major national schemes only / +Top 20 councils | Major national + top 20 councils | Product | Week 4 |

### 13.2 Assumptions Made

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
