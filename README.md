# GreenLord - UK Landlord EPC Compliance Platform

The authoritative resource for UK private landlords navigating EPC compliance requirements. Clear guidance, interactive tools, and property-specific recommendations for the 2030 EPC C deadline.

## Current Status: Phase 3 Complete

**47 pages** | **4 interactive tools** | **10 property guides** | **10 local city guides**

### What's Included

#### Interactive Tools
- **Upgrade Cost Calculator** - Personalised cost estimates by property type, size, and region
- **Grant Eligibility Checker** - Check ECO4, Boiler Upgrade Scheme, Warm Homes Local, GBIS eligibility
- **Exemption Pathway Tool** - Cost cap exemption assessment with evidence checklist
- **EPC Analyser** - Interpret your EPC, identify quick wins, compare to similar properties

#### Property Type Guides (10)
- Victorian Terrace (pre-1919) | Edwardian House | Pre-1919 Semi-Detached
- 1930s Semi-Detached | 1950s House | 1960s-1970s House | 1980s-1990s House
- Purpose-Built Flat | Converted Flat | HMO

#### Local City Guides (10)
Manchester | Birmingham | Leeds | Liverpool | Bristol | Sheffield | Newcastle | Nottingham | Leicester | Hackney

#### Costs & Funding Guides
- D to C Upgrade Costs | E to C Upgrade Costs | Cheapest Improvements Ranked
- ECO4 for Landlords | Boiler Upgrade Scheme | Warm Homes Local Grant

#### Regulations Content
- EPC C 2030 Deadline | MEES Regulations Guide | Cost Cap Exemptions
- RdSAP 10 Changes | Warm Homes Plan

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── costs/             # Costs & funding guides (7 pages)
│   ├── local-guides/      # City-specific guides (11 pages)
│   ├── property-types/    # Property guides (11 pages)
│   ├── regulations/       # Regulations section (6 pages)
│   ├── resources/         # FAQ and Glossary (3 pages)
│   └── tools/             # Interactive tools (5 pages)
├── components/
│   ├── calculator/        # Cost calculator components
│   ├── epc-analyser/      # EPC analyser components
│   ├── exemption/         # Exemption tool components
│   ├── grants/            # Grant checker components
│   ├── content/           # Content components (callouts, tables)
│   ├── layout/            # Layout components (header, footer)
│   └── ui/                # UI primitives (buttons, inputs)
├── data/                  # Calculator and grant scheme data
└── lib/                   # Utilities, types, constants, analysis logic
```

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Images

All AI-generated images are stored in `public/images/generated/` as WebP files for optimal performance.

### Image Configuration

Image paths are defined in `src/lib/default-images.ts`. The `GeneratedImage` component uses these defaults.

### Adding New Images

1. **Generate** a new image using KIE AI (or similar)
2. **Save** the image to your computer
3. **Upload** to GitHub: Go to `public/images/generated/` → "Add file" → "Upload files"
4. **Run compression**: Go to Actions → "Compress Images" → "Run workflow" (converts to WebP)
5. **Update config**: Add the image ID to `src/lib/default-images.ts`:
   ```typescript
   'my-new-image': '/images/generated/my-new-image.webp',
   ```

### GitHub Actions

| Action | Purpose |
|--------|---------|
| **Download AI Images** | Bulk download images from temporary URLs |
| **Compress Images** | Convert PNG/JPG to WebP, resize to max 1200px |

Both actions commit changes automatically after running.

## Key Features

- Mobile-first responsive design
- WCAG 2.1 AA accessibility compliance
- SEO optimized with schema.org markup
- Static site generation for performance
