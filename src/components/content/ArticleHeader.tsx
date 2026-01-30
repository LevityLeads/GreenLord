import { cn, formatDate } from '@/lib/utils';
import { Calendar, Clock, User, RefreshCw } from 'lucide-react';

export interface ArticleHeaderProps {
  /** Article title */
  title: string;
  /** Original publication date (ISO string) */
  publishedDate: string;
  /** Last updated date (ISO string) */
  lastUpdated?: string;
  /** Author name */
  author: string;
  /** Estimated reading time in minutes */
  readingTime: number;
  /** Optional subtitle or excerpt */
  subtitle?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ArticleHeader - Article title, publication date, last updated date, author, and reading time.
 * Displays prominently at the top of article content.
 *
 * @example
 * ```tsx
 * <ArticleHeader
 *   title="EPC C 2030 Deadline: Complete Guide for Landlords"
 *   publishedDate="2024-06-15"
 *   lastUpdated="2025-01-20"
 *   author="James Crawford"
 *   readingTime={15}
 *   subtitle="Everything you need to know about the upcoming EPC requirements for rental properties"
 * />
 * ```
 */
export function ArticleHeader({
  title,
  publishedDate,
  lastUpdated,
  author,
  readingTime,
  subtitle,
  className,
}: ArticleHeaderProps) {
  const showUpdated = lastUpdated && lastUpdated !== publishedDate;

  return (
    <header className={cn('mb-8 pb-6 border-b border-neutral-200', className)}>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-800 mb-4 leading-tight">
        {title}
      </h1>

      {subtitle && (
        <p className="text-lg text-neutral-600 mb-6 max-w-3xl">
          {subtitle}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600">
        {/* Author */}
        <div className="flex items-center gap-1.5">
          <User className="h-4 w-4 text-neutral-400" aria-hidden="true" />
          <span>
            <span className="sr-only">Written by </span>
            {author}
          </span>
        </div>

        {/* Divider */}
        <span className="hidden sm:inline text-neutral-300" aria-hidden="true">
          |
        </span>

        {/* Published date */}
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4 text-neutral-400" aria-hidden="true" />
          <time dateTime={publishedDate}>
            <span className="sr-only">Published on </span>
            {formatDate(publishedDate)}
          </time>
        </div>

        {/* Updated date */}
        {showUpdated && (
          <>
            <span className="hidden sm:inline text-neutral-300" aria-hidden="true">
              |
            </span>
            <div className="flex items-center gap-1.5 text-accent-700">
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              <time dateTime={lastUpdated}>
                <span className="sr-only">Last updated on </span>
                Updated {formatDate(lastUpdated)}
              </time>
            </div>
          </>
        )}

        {/* Divider */}
        <span className="hidden sm:inline text-neutral-300" aria-hidden="true">
          |
        </span>

        {/* Reading time */}
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-neutral-400" aria-hidden="true" />
          <span>
            {readingTime} min read
          </span>
        </div>
      </div>
    </header>
  );
}

export default ArticleHeader;
