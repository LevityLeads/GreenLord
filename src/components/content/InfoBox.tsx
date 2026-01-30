import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

export interface InfoBoxProps {
  /** Optional title for the info box */
  title?: string;
  /** The information content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * InfoBox - General information callout with neutral blue styling.
 * Use for supplementary information that adds context without being critical.
 *
 * @example
 * ```tsx
 * <InfoBox title="What is an EPC?">
 *   An Energy Performance Certificate rates a property's energy efficiency
 *   from A (most efficient) to G (least efficient).
 * </InfoBox>
 *
 * <InfoBox>
 *   This information applies to properties in England and Wales only.
 * </InfoBox>
 * ```
 */
export function InfoBox({ title, children, className }: InfoBoxProps) {
  return (
    <aside
      className={cn(
        'my-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 sm:p-5',
        className
      )}
      role="note"
      aria-label={title ? `Information: ${title}` : 'Additional information'}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <Info
            className="h-5 w-5 text-primary-500"
            aria-hidden="true"
          />
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="text-base font-semibold text-neutral-800 mb-2">
              {title}
            </h4>
          )}
          <div className="text-sm text-neutral-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default InfoBox;
