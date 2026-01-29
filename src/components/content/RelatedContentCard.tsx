import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface RelatedContentCardProps {
  /** Article title */
  title: string;
  /** Short excerpt or description */
  excerpt: string;
  /** URL to the article */
  href: string;
  /** Category tag (e.g., "Regulations", "Property Guide") */
  category: string;
  /** Optional reading time in minutes */
  readingTime?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * RelatedContentCard - Card linking to related articles.
 * Shows title, excerpt, and category tag.
 *
 * @example
 * ```tsx
 * <RelatedContentCard
 *   title="Victorian Terrace EPC Guide"
 *   excerpt="Comprehensive guide to improving EPC ratings in pre-1919 terraced properties."
 *   href="/property-types/victorian-terrace"
 *   category="Property Guide"
 *   readingTime={12}
 * />
 * ```
 */
export function RelatedContentCard({
  title,
  excerpt,
  href,
  category,
  readingTime,
  className,
}: RelatedContentCardProps) {
  return (
    <article
      className={cn(
        'group relative rounded-lg border border-neutral-200 bg-white p-4 sm:p-5',
        'hover:border-primary-300 hover:shadow-md transition-all duration-200',
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary-100 text-primary-700 rounded">
            {category}
          </span>
          {readingTime && (
            <span className="text-xs text-neutral-400">
              {readingTime} min read
            </span>
          )}
        </div>
        <h3 className="text-base font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
          <Link href={href} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-neutral-600 mb-3 flex-1 line-clamp-2">
          {excerpt}
        </p>
        <div
          className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700"
          aria-hidden="true"
        >
          Read more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}

export default RelatedContentCard;
