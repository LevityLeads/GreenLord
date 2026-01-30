import { cn } from '@/lib/utils';
import { Lightbulb } from 'lucide-react';

export interface TipBoxProps {
  /** Optional title for the tip */
  title?: string;
  /** The tip content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * TipBox - Practical recommendations and best practices callout.
 * Uses teal accent color with lightbulb icon.
 *
 * @example
 * ```tsx
 * <TipBox title="Pro Tip">
 *   Get multiple quotes from TrustMark-registered installers to ensure quality work.
 * </TipBox>
 *
 * <TipBox>
 *   Always request an EPC assessment before planning improvements.
 * </TipBox>
 * ```
 */
export function TipBox({ title = 'Tip', children, className }: TipBoxProps) {
  return (
    <aside
      className={cn(
        'my-6 rounded-lg border border-accent-300 bg-accent-50 p-4 sm:p-5',
        className
      )}
      role="note"
      aria-label={`Tip: ${title}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <Lightbulb
            className="h-5 w-5 text-accent-700"
            aria-hidden="true"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-accent-800 mb-2">
            {title}
          </h4>
          <div className="text-sm text-accent-900/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default TipBox;
