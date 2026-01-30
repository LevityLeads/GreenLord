import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

export interface KeyFactBoxProps {
  /** The main title or key fact headline */
  title: string;
  /** Supporting content or explanation */
  children: React.ReactNode;
  /** Optional icon to display alongside the title */
  icon?: LucideIcon;
  /** Additional CSS classes */
  className?: string;
}

/**
 * KeyFactBox - Highlighted callout box for critical numbers, dates, and requirements.
 * Uses deep blue left border with light blue-grey background.
 *
 * @example
 * ```tsx
 * <KeyFactBox title="2030 Deadline" icon={Calendar}>
 *   All rental properties must achieve EPC rating C by October 2030.
 * </KeyFactBox>
 * ```
 */
export function KeyFactBox({ title, children, icon: Icon, className }: KeyFactBoxProps) {
  return (
    <aside
      className={cn(
        'my-6 rounded-r-lg border-l-4 border-l-primary-700 bg-primary-50 p-4 sm:p-5',
        className
      )}
      role="note"
      aria-label={`Key fact: ${title}`}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex-shrink-0 mt-0.5">
            <Icon
              className="h-5 w-5 text-primary-700"
              aria-hidden="true"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-primary-800 mb-2">
            {title}
          </h4>
          <div className="text-sm text-primary-900/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default KeyFactBox;
