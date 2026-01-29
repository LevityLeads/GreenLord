import { clsx, type ClassValue } from 'clsx';
import type { EPCRating, Region, PropertyType, BreadcrumbItem, ArticleSchema } from './types';

// Utility for combining class names
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format currency in GBP
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format date in UK format
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

// Get EPC score range for a rating
export function getEPCScoreRange(rating: EPCRating): { min: number; max: number } {
  const ranges: Record<EPCRating, { min: number; max: number }> = {
    A: { min: 92, max: 100 },
    B: { min: 81, max: 91 },
    C: { min: 69, max: 80 },
    D: { min: 55, max: 68 },
    E: { min: 39, max: 54 },
    F: { min: 21, max: 38 },
    G: { min: 1, max: 20 },
  };
  return ranges[rating];
}

// Get color class for EPC rating
export function getEPCColorClass(rating: EPCRating): string {
  return `epc-${rating.toLowerCase()}`;
}

// Get readable property type name
export function getPropertyTypeName(type: PropertyType): string {
  const names: Record<PropertyType, string> = {
    'victorian-terrace': 'Victorian Terrace (pre-1919)',
    'edwardian-1920s': 'Edwardian and 1920s Property',
    '1930s-semi': '1930s Semi-Detached',
    '1950s-1960s': '1950s and 1960s Property',
    '1970s-1980s': '1970s and 1980s Property',
    '1990s-later': '1990s and Later New Build',
    'purpose-built-flat': 'Purpose-Built Flat',
    'converted-flat': 'Converted Flat',
    hmo: 'House in Multiple Occupation (HMO)',
  };
  return names[type];
}

// Get readable region name
export function getRegionName(region: Region): string {
  const names: Record<Region, string> = {
    london: 'London',
    'south-east': 'South East England',
    'south-west': 'South West England',
    'east-anglia': 'East Anglia',
    'east-midlands': 'East Midlands',
    'west-midlands': 'West Midlands',
    'north-west': 'North West England',
    'north-east': 'North East England',
    yorkshire: 'Yorkshire and the Humber',
    wales: 'Wales',
    scotland: 'Scotland',
    'northern-ireland': 'Northern Ireland',
  };
  return names[region];
}

// Regional cost multiplier for construction work
export function getRegionalCostMultiplier(region: Region): number {
  const multipliers: Record<Region, number> = {
    london: 1.25,
    'south-east': 1.15,
    'south-west': 1.05,
    'east-anglia': 1.02,
    'east-midlands': 0.95,
    'west-midlands': 0.98,
    'north-west': 0.95,
    'north-east': 0.90,
    yorkshire: 0.93,
    wales: 0.92,
    scotland: 0.98,
    'northern-ireland': 0.88,
  };
  return multipliers[region];
}

// Calculate reading time from word count
export function calculateReadingTime(wordCount: number): number {
  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate article schema
export function generateArticleSchema(
  headline: string,
  description: string,
  publishedDate: string,
  modifiedDate: string,
  authorName: string,
  url: string
): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GreenLord',
      logo: {
        '@type': 'ImageObject',
        url: 'https://greenlord.co.uk/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

// Generate FAQ schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Slugify text for URLs
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

// Truncate text with ellipsis
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Check if EPC rating meets minimum requirement (C or above)
export function meetsMinimumEPC(rating: EPCRating): boolean {
  return ['A', 'B', 'C'].includes(rating);
}

// Calculate days until deadline
export function daysUntilDeadline(): number {
  const deadline = new Date('2030-10-01');
  const today = new Date();
  const diffTime = deadline.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Format large numbers with commas
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-GB').format(num);
}
