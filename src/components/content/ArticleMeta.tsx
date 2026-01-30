import { cn, formatDate } from '@/lib/utils';
import { FileText, Calendar, ExternalLink } from 'lucide-react';

export interface SourceReference {
  /** Name of the source */
  name: string;
  /** URL to the source document */
  url?: string;
}

export interface ArticleMetaProps {
  /** List of sources cited in the article */
  sources: SourceReference[];
  /** Date the article was last reviewed for accuracy */
  lastReviewedDate: string;
  /** Optional reviewer name */
  reviewedBy?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ArticleMeta - Metadata display at the bottom of articles.
 * Shows sources cited and last reviewed date for credibility.
 *
 * @example
 * ```tsx
 * <ArticleMeta
 *   sources={[
 *     { name: 'GOV.UK MEES Guidance', url: 'https://www.gov.uk/...' },
 *     { name: 'Energy Saving Trust', url: 'https://energysavingtrust.org.uk' },
 *     { name: 'NRLA Landlord Guidance' },
 *   ]}
 *   lastReviewedDate="2025-01-15"
 *   reviewedBy="James Crawford"
 * />
 * ```
 */
export function ArticleMeta({
  sources,
  lastReviewedDate,
  reviewedBy,
  className,
}: ArticleMetaProps) {
  return (
    <footer
      className={cn(
        'mt-12 pt-6 border-t border-neutral-200',
        className
      )}
    >
      {/* Sources section */}
      {sources.length > 0 && (
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-3">
            <FileText className="h-4 w-4 text-neutral-500" aria-hidden="true" />
            Sources Cited
          </h3>
          <ul className="space-y-1.5">
            {sources.map((source, index) => (
              <li key={index} className="text-sm text-neutral-600">
                {source.url ? (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-primary-600 transition-colors"
                  >
                    {source.name}
                    <ExternalLink
                      className="h-3 w-3 opacity-50"
                      aria-hidden="true"
                    />
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                ) : (
                  <span>{source.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Last reviewed section */}
      <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-neutral-500 bg-neutral-50 rounded-lg p-3">
        <Calendar className="h-4 w-4" aria-hidden="true" />
        <span>
          Last reviewed for accuracy:{' '}
          <time dateTime={lastReviewedDate} className="font-medium text-neutral-700">
            {formatDate(lastReviewedDate)}
          </time>
        </span>
        {reviewedBy && (
          <span className="text-neutral-500">
            by <span className="font-medium text-neutral-700">{reviewedBy}</span>
          </span>
        )}
      </div>

      {/* Editorial notice */}
      <p className="mt-4 text-xs text-neutral-400">
        While we make every effort to ensure accuracy, regulations may change. Always verify
        current requirements with official government sources before making decisions.
      </p>
    </footer>
  );
}

export default ArticleMeta;
