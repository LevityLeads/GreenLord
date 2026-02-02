# GreenLord UI/UX Audit Report

**Date:** 2 February 2026
**Auditor:** Claude Code (via AI-assisted review)
**Site:** https://greenlord.co.uk
**Platform:** Next.js 16 + React 19 + Tailwind CSS 4

---

## Executive Summary

GreenLord is a well-structured, content-rich platform for UK landlords navigating EPC compliance. The technical foundation is solid (Next.js 16 with App Router, TypeScript, modern React patterns). However, there are **critical SEO gaps** and several UI/UX improvements needed to achieve the goals of being "super clear, easy to navigate, super fast, and amazing for SEO."

### Priority Score Card

| Category | Current Score | Target | Priority |
|----------|--------------|--------|----------|
| SEO Technical | 8/10 | 9/10 | IMPROVED |
| Navigation & IA | 8/10 | 9/10 | IMPROVED |
| Page Speed | 7/10 | 9/10 | MEDIUM |
| Mobile UX | 7/10 | 9/10 | MEDIUM |
| Accessibility | 9/10 | 9/10 | IMPROVED |
| Content UX | 8/10 | 9/10 | LOW |

---

## CRITICAL PRIORITY: SEO Issues

### 1. ~~Missing sitemap.xml~~ [COMPLETED]

**Status:** RESOLVED - Dynamic sitemap created at `src/app/sitemap.ts`

- All 45+ pages included with proper priorities
- Change frequencies set (weekly for time-sensitive content, monthly for guides)
- Accessible at `/sitemap.xml`

### 2. ~~Missing robots.txt~~ [COMPLETED]

**Status:** RESOLVED - Created `public/robots.txt`

- Allows all crawlers
- Blocks `/api/` routes
- References sitemap location
- Includes crawl-delay directive

### 3. ~~Missing Per-Page Canonical URLs~~ [COMPLETED]

**Status:** RESOLVED - Canonical URLs added to all 45 pages

- Each page now has its own canonical URL in metadata
- Removed incorrect global canonical from layout.tsx
- Example: `/regulations` now has canonical `https://greenlord.co.uk/regulations`

### 4. ~~Missing Structured Data~~ [COMPLETED]

**Status:** RESOLVED - Organization and WebSite schemas added

- `Organization` schema added to root layout (JSON-LD)
- `WebSite` schema added to root layout (JSON-LD)
- Schema helpers available for Article, FAQ, BreadcrumbList

**Remaining:** Add Article schema to content pages, FAQPage schema to FAQ page (future enhancement)

### 5. ~~Missing og-image.png~~ [COMPLETED]

**Status:** RESOLVED - Dynamic OG images created

- `opengraph-image.tsx` generates branded 1200x630 OG image
- `twitter-image.tsx` generates Twitter card image
- Uses Next.js ImageResponse for dynamic generation
- Includes branding, key stats (2030 deadline, 45+ guides, 4 tools)

### 6. No Page-Specific Meta Descriptions [MEDIUM]

**Issue:** While the homepage and some pages have good descriptions, several pages may be using the default site description.

**Recommendation:**
- Audit all 45 pages for unique meta descriptions
- Each description should be 150-160 characters
- Include primary keyword and call-to-action where appropriate

### 7. Missing hreflang Tags [LOW]

**Issue:** Site targets UK audience (`en_GB`) but doesn't declare regional targeting to search engines.

**Recommendation:**
- Add `<link rel="alternate" hreflang="en-gb" href="..." />` to confirm regional targeting
- Consider if Scotland-specific content needs separate handling (different EPC rules)

---

## HIGH PRIORITY: Navigation & Information Architecture

### 8. ~~Navigation Dropdown Accessibility Issues~~ [COMPLETED]

**Status:** RESOLVED - Full keyboard accessibility implemented

- Converted to client component with React state management
- `aria-expanded` now updates dynamically based on open state
- Full keyboard navigation: Arrow keys, Escape, Enter/Space, Home/End
- Focus management: first menu item focused on open, return to trigger on close
- Click outside to close
- Mouse hover still works for non-keyboard users
- Proper ARIA roles and labeling throughout

### 9. Overly Deep Navigation Structure [MEDIUM]

**Issue:** The navigation has 6 top-level items with 3-10 children each. This is a lot to process, especially on first visit.

**Current Structure:**
- Regulations (5 children)
- Property Guides (10 children)
- Local Guides (10 children)
- Costs & Funding (7 children)
- Tools (4 children)
- Resources (3 children)

**Recommendation:**
- Consider grouping "Property Guides" and "Local Guides" under a single "Guides" menu
- Add a search function (critical for 45+ pages)
- Implement "Popular/Featured" items in dropdowns
- Add visual hierarchy to distinguish primary vs secondary nav items

### 10. No Search Functionality [HIGH]

**Issue:** With 45+ pages of content, there's no way for users to search the site.

**Impact:** Users looking for specific information (e.g., "ECO4 eligibility") must navigate manually through menus.

**Recommendation:**
- Add global search with keyboard shortcut (Cmd/Ctrl+K)
- Consider Algolia, Meilisearch, or client-side search (pagefind)
- Index all content including FAQ answers and glossary terms

### 11. Breadcrumbs Not Consistent [MEDIUM]

**Issue:** Breadcrumbs appear on content pages but implementation varies. Some pages have them in the PageHeader, others render them separately within the article.

**Example (regulations/page.tsx):**
- Breadcrumbs defined in `breadcrumbs` const
- Rendered inside `<article>` after PageHeader
- PageHeader also receives breadcrumbs prop

**Recommendation:**
- Standardize breadcrumb implementation across all pages
- Always render via PageHeader component
- Ensure BreadcrumbList schema is output with breadcrumbs

### 12. Footer Has Too Many Links [LOW]

**Issue:** Footer contains 35+ links across 6 columns. This is overwhelming and may dilute link equity.

**Recommendation:**
- Reduce footer to key pages only (5-6 per column max)
- Add a "View All" link for each section
- Consider using a more compact design

---

## MEDIUM PRIORITY: Performance

### 13. ~~Large Image Files~~ [COMPLETED]

**Status:** RESOLVED - Images converted to WebP format.

| Metric | Before (PNG) | After (WebP) | Improvement |
|--------|-------------|--------------|-------------|
| Total Size | 15.6 MB | 5.4 MB | **65% smaller** |
| Average | 347 KB | 121 KB | **65% smaller** |
| Format | PNG | WebP | Modern format |

**Remaining considerations:**
- Consider generating multiple sizes for responsive images
- Ensure all images have explicit `width` and `height` to prevent CLS
- Continue using Next.js Image component for automatic optimization

### 14. No Image Priority Strategy [MEDIUM]

**Issue:** While the homepage hero image has `priority` prop, other above-fold images may not be properly prioritized.

**Recommendation:**
- Audit all pages for above-fold images
- Add `priority` prop to LCP (Largest Contentful Paint) images
- Add `loading="eager"` for critical images

### 15. Client Components Could Be Optimized [MEDIUM]

**Issue:** Several components are marked as `'use client'` that may not need full client-side rendering:
- Header.tsx - countdown could be handled differently
- Navigation.tsx - could use CSS-only solution or partial hydration

**Recommendation:**
- Use React Server Components where possible
- Consider partial hydration patterns
- Move countdown calculation to server-side with revalidation

### 16. No Caching Headers Configuration [MEDIUM]

**Issue:** No custom caching configuration in `next.config.ts`.

**Recommendation:**
- Add caching headers for static assets
- Configure stale-while-revalidate for content pages
- Consider ISR (Incremental Static Regeneration) for content pages

### 17. CSS Bundle Size [LOW]

**Issue:** While Tailwind CSS 4 is tree-shakeable, the globals.css has custom utilities that may not be optimized.

**Recommendation:**
- Audit for unused CSS (use PurgeCSS or similar)
- Move component-specific styles to component files
- Remove duplicate color definitions (CSS variables are defined twice)

---

## MEDIUM PRIORITY: Mobile UX

### 18. Mobile Navigation CTA Placement [MEDIUM]

**Issue:** The mobile nav CTA "Calculate Your Upgrade Costs" is at the bottom of the drawer, potentially below the fold.

**Location:** MobileNav.tsx:201-215

**Recommendation:**
- Move CTA to top of mobile nav, immediately visible
- Or add a fixed bottom CTA bar on mobile pages

### 19. Touch Targets Could Be Larger [MEDIUM]

**Issue:** Some interactive elements may be smaller than the recommended 44x44px minimum.

**Areas to check:**
- Footer links (currently using `text-sm`)
- Badge components
- Mobile nav expand buttons

**Recommendation:**
- Audit all touch targets on mobile
- Ensure minimum 44px touch area
- Add padding where needed without changing visual size

### 20. Homepage Hero Image Hidden on Mobile [MEDIUM]

**Issue:** The homepage hero image is completely hidden on mobile (`hidden lg:block`).

**Location:** page.tsx:83

**Impact:** Mobile users miss the visual context, and the section feels less engaging.

**Recommendation:**
- Show a smaller/cropped version on mobile
- Or use a different mobile-optimized image
- Consider using CSS `object-fit` and `object-position` for responsive cropping

### 21. Tables Not Responsive [MEDIUM]

**Issue:** Tables in content pages (e.g., regulations comparison table) use `overflow-x-auto` but may still be difficult to read on mobile.

**Recommendation:**
- Consider card-based layouts for mobile
- Or use a responsive table pattern (stacked on mobile)
- Test all tables at 320px viewport width

---

## MEDIUM PRIORITY: Accessibility

### 22. Color Contrast Issues [MEDIUM]

**Issue:** Some color combinations may not meet WCAG AA contrast requirements:
- `text-neutral-500` on white backgrounds
- `text-primary-800/80` (80% opacity)
- Warning text on warning backgrounds

**Recommendation:**
- Audit all text/background combinations
- Ensure 4.5:1 contrast for normal text
- Ensure 3:1 contrast for large text
- Remove opacity from text colors

### 23. Missing Focus Indicators on Some Elements [MEDIUM]

**Issue:** While most interactive elements have focus states, some areas may need review:
- Card hover states vs focus states
- Badge components
- Custom button variants

**Recommendation:**
- Audit all interactive elements for visible focus indicators
- Ensure focus is not only color-based (use outline or border)

### 24. Skip Link Could Be More Prominent [LOW]

**Issue:** Skip link uses `sr-only` pattern but could be more discoverable.

**Current (layout.tsx:95-99):**
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only ...">
```

**Recommendation:**
- Good implementation, but ensure it's at the very top of DOM
- Consider making it more visible for users who rely on it

### 25. Missing ARIA Labels on Some Interactive Elements [LOW]

**Issue:** Some icons within buttons may not have proper accessible names.

**Recommendation:**
- Audit all icon-only buttons for aria-label
- Ensure decorative icons have `aria-hidden="true"`
- Check that icon buttons have descriptive labels

---

## LOW PRIORITY: Content UX

### 26. Long Pages Need Better Anchoring [LOW]

**Issue:** Content pages like `/regulations` are very long (~700 lines). While TableOfContents exists, anchor links could be more discoverable.

**Recommendation:**
- Add visible anchor icons to headings (appear on hover)
- Make TOC sticky on desktop (currently implemented)
- Add "Back to top" button for long pages

### 27. Form Progress Indication [LOW]

**Issue:** The calculator form doesn't show progress through multi-step completion.

**Recommendation:**
- Add step indicators if forms have multiple logical sections
- Show completion percentage
- Consider multi-step form pattern for complex inputs

### 28. Results Sharability [LOW]

**Issue:** Calculator results cannot be easily shared or saved.

**Recommendation:**
- Add "Share Results" functionality (URL with params or generate PDF)
- Add "Print Results" button
- Consider email-to-self option

### 29. Related Content Could Be Smarter [LOW]

**Issue:** Related content cards are manually specified per page rather than dynamically generated.

**Recommendation:**
- Consider automatic related content based on categories/tags
- Add "You might also like" based on page type
- Track user behavior to improve recommendations (with consent)

### 30. Missing 404 Page [LOW]

**Issue:** No custom 404 error page found.

**Recommendation:**
- Create branded 404 page
- Include search functionality
- Show popular/suggested links

---

## Quick Wins (Can Be Done Quickly)

1. **Create robots.txt** - 5 minutes
2. **Create sitemap.ts** - 30 minutes
3. **Add og-image.png** - 15 minutes (use a design template)
4. **Fix aria-expanded in Navigation** - 15 minutes
5. **Add canonical URLs to pages** - 1-2 hours
6. ~~**Convert images to WebP**~~ - DONE (65% size reduction achieved)
7. **Add priority prop to above-fold images** - 30 minutes

---

## Implementation Roadmap

### Phase 1: Critical SEO (Week 1)
1. Create sitemap.xml (dynamic)
2. Create robots.txt
3. Add og-image.png
4. Fix canonical URLs on all pages
5. Implement structured data (Organization, BreadcrumbList)

### Phase 2: Navigation & Performance (Week 2-3)
6. Fix navigation accessibility (keyboard support, aria)
7. Add global search functionality
8. ~~Optimize images (WebP, responsive sizes)~~ - DONE
9. Audit and fix mobile touch targets

### Phase 3: Enhanced UX (Week 4)
10. Add Article schema to content pages
11. Standardize breadcrumbs
12. Add FAQPage schema
13. Create custom 404 page
14. Add "Back to top" button

### Phase 4: Polish (Ongoing)
15. Accessibility audit and fixes
16. Performance monitoring setup
17. A/B testing for conversions
18. Content freshness indicators

---

## Metrics to Track

After implementing these changes, monitor:

| Metric | Tool | Target |
|--------|------|--------|
| Core Web Vitals (LCP, FID, CLS) | PageSpeed Insights, CrUX | Pass all |
| Google Search Console indexing | GSC | 100% indexed |
| Time to First Byte | WebPageTest | < 200ms |
| First Contentful Paint | Lighthouse | < 1.5s |
| Total Blocking Time | Lighthouse | < 200ms |
| Accessibility Score | Lighthouse | > 95 |
| Organic traffic | Analytics | +50% in 3 months |
| Bounce rate | Analytics | < 50% |
| Pages/session | Analytics | > 2.5 |

---

## Appendix: Files to Create/Modify

### New Files Needed:
- `src/app/sitemap.ts` - Dynamic sitemap
- `public/robots.txt` - Robots directives
- `public/og-image.png` - Social sharing image
- `src/app/not-found.tsx` - Custom 404 page
- `src/components/layout/Search.tsx` - Global search component

### Files to Modify:
- `src/app/layout.tsx` - Add structured data
- `src/components/layout/Navigation.tsx` - Fix accessibility
- `src/components/layout/Header.tsx` - Add search
- All page files - Add canonical URLs and structured data
- `next.config.ts` - Add caching headers
- Various pages - Convert hardcoded breadcrumbs to standard pattern

---

## Conclusion

GreenLord has a strong foundation with excellent content organization and modern tech stack. The **most critical issues are SEO-related** (missing sitemap, robots.txt, and structured data), which should be addressed immediately before any traffic-building efforts.

The navigation accessibility issues are also important to fix to ensure the site works for all users.

With these improvements, the site will be well-positioned to rank for UK landlord EPC compliance searches and provide an excellent user experience across all devices.

---

*Report generated by Claude Code - AI-assisted UI/UX audit*
