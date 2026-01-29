import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

export interface SourceCitationProps {
  /** Name of the source (e.g., "GOV.UK", "Energy Saving Trust") */
  sourceName: string;
  /** Title of the document or page */
  documentTitle: string;
  /** URL to the official document */
  url: string;
  /** Optional date accessed */
  accessedDate?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SourceCitation - Unobtrusive but clickable reference to source documents.
 * Shows source name and links to official document.
 *
 * @example
 * ```tsx
 * <SourceCitation
 *   sourceName="GOV.UK"
 *   documentTitle="Domestic Private Rented Property: Minimum Energy Efficiency Standard"
 *   url="https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance"
 *   accessedDate="January 2025"
 * />
 * ```
 */
export function SourceCitation({
  sourceName,
  documentTitle,
  url,
  accessedDate,
  className,
}: SourceCitationProps) {
  return (
    <cite
      className={cn(
        'not-italic block my-4 py-2 px-3 rounded border-l-2 border-neutral-300 bg-neutral-50 text-sm',
        className
      )}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-start gap-2 text-neutral-600 hover:text-primary-600 transition-colors"
      >
        <span className="flex-1">
          <span className="font-medium text-neutral-700 group-hover:text-primary-700">
            {sourceName}:
          </span>{' '}
          <span className="text-neutral-600 group-hover:text-primary-600">
            {documentTitle}
          </span>
          {accessedDate && (
            <span className="text-neutral-400 text-xs ml-1">
              (accessed {accessedDate})
            </span>
          )}
        </span>
        <ExternalLink
          className="h-4 w-4 flex-shrink-0 mt-0.5 opacity-50 group-hover:opacity-100"
          aria-hidden="true"
        />
      </a>
      <span className="sr-only">(opens in new tab)</span>
    </cite>
  );
}

export default SourceCitation;
