import { cn } from '@/lib/utils';
import { AlertTriangle } from 'lucide-react';

export interface WarningBoxProps {
  /** The warning headline */
  title: string;
  /** The warning content */
  children: React.ReactNode;
  /** Whether this is a critical/urgent warning */
  critical?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * WarningBox - Alert box for compliance deadlines, common mistakes, and regulatory changes.
 * Uses amber/orange styling with warning icon.
 *
 * @example
 * ```tsx
 * <WarningBox title="Compliance Deadline Approaching">
 *   Properties must be compliant before new tenancies begin.
 * </WarningBox>
 *
 * <WarningBox title="Penalty Risk" critical>
 *   Non-compliance can result in fines up to 30,000.
 * </WarningBox>
 * ```
 */
export function WarningBox({ title, children, critical = false, className }: WarningBoxProps) {
  return (
    <aside
      className={cn(
        'my-6 rounded-lg border p-4 sm:p-5',
        critical
          ? 'border-danger-400 bg-danger-50'
          : 'border-warning-400 bg-warning-50',
        className
      )}
      role="alert"
      aria-label={`Warning: ${title}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <AlertTriangle
            className={cn(
              'h-5 w-5',
              critical ? 'text-danger-600' : 'text-warning-600'
            )}
            aria-hidden="true"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4
            className={cn(
              'text-base font-semibold mb-2',
              critical ? 'text-danger-600' : 'text-warning-600'
            )}
          >
            {title}
          </h4>
          <div
            className={cn(
              'text-sm leading-relaxed',
              critical ? 'text-danger-600/90' : 'text-warning-600/90'
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default WarningBox;
