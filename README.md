# GreenLord - UK Landlord EPC Compliance Platform

The authoritative resource for UK private landlords navigating EPC compliance requirements. Clear guidance, interactive tools, and property-specific recommendations.

## Phase 1 Implementation

This is the Phase 1 foundation implementation including:

- **19 content pages** covering regulations, property guides, costs, and resources
- **Upgrade Cost Calculator** with realistic UK cost data and recommendations
- **Component library** with UI, content, and layout components
- **Design system** following PRD specifications (deep blue primary, teal accent)

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
│   ├── costs/             # Costs section
│   ├── property-types/    # Property guides
│   ├── regulations/       # Regulations section
│   ├── resources/         # FAQ and Glossary
│   └── tools/             # Calculator and tools
├── components/
│   ├── calculator/        # Calculator components
│   ├── content/           # Content components (callouts, tables)
│   ├── layout/            # Layout components (header, footer)
│   └── ui/                # UI primitives (buttons, inputs)
├── data/                  # Calculator cost data
└── lib/                   # Utilities, types, constants
```

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Key Features

- Mobile-first responsive design
- WCAG 2.1 AA accessibility compliance
- SEO optimized with schema.org markup
- Static site generation for performance
