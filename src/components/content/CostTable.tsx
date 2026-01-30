import { cn, formatCurrency } from '@/lib/utils';

export interface CostItem {
  /** Name of the improvement or service */
  improvement: string;
  /** Low estimate in GBP */
  lowEstimate: number;
  /** High estimate in GBP */
  highEstimate: number;
  /** Optional notes or caveats */
  notes?: string;
}

export interface CostTableProps {
  /** Table title/caption */
  title?: string;
  /** Array of cost items to display */
  items: CostItem[];
  /** Whether to show a total row */
  showTotal?: boolean;
  /** Optional footer note */
  footerNote?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CostTable - Table for displaying price ranges with consistent formatting.
 * Includes columns for improvement name, low estimate, and high estimate.
 * Features alternating row colors for readability.
 *
 * @example
 * ```tsx
 * <CostTable
 *   title="Estimated Upgrade Costs"
 *   items={[
 *     { improvement: 'Loft Insulation', lowEstimate: 300, highEstimate: 600 },
 *     { improvement: 'Cavity Wall Insulation', lowEstimate: 500, highEstimate: 1500 },
 *     { improvement: 'New Boiler', lowEstimate: 2000, highEstimate: 4000 },
 *   ]}
 *   showTotal
 *   footerNote="Costs vary by region and property size. Get multiple quotes."
 * />
 * ```
 */
export function CostTable({
  title,
  items,
  showTotal = false,
  footerNote,
  className,
}: CostTableProps) {
  const totalLow = items.reduce((sum, item) => sum + item.lowEstimate, 0);
  const totalHigh = items.reduce((sum, item) => sum + item.highEstimate, 0);

  return (
    <div className={cn('my-6 overflow-hidden rounded-lg border border-neutral-200', className)}>
      {title && (
        <div className="border-b border-neutral-200 bg-primary-50 px-4 py-3">
          <h4 className="text-sm font-semibold text-primary-800">{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="bg-primary-50 text-left">
              <th
                scope="col"
                className="px-4 py-3 font-semibold text-primary-800"
              >
                Improvement
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-right font-semibold text-primary-800 whitespace-nowrap"
              >
                Low Estimate
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-right font-semibold text-primary-800 whitespace-nowrap"
              >
                High Estimate
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.improvement}
                className={cn(
                  'border-t border-neutral-100',
                  index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'
                )}
              >
                <td className="px-4 py-3 text-neutral-900">
                  <span className="font-medium">{item.improvement}</span>
                  {item.notes && (
                    <span className="block text-xs text-neutral-500 mt-0.5">
                      {item.notes}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-right text-neutral-700 whitespace-nowrap">
                  {formatCurrency(item.lowEstimate)}
                </td>
                <td className="px-4 py-3 text-right text-neutral-700 whitespace-nowrap">
                  {formatCurrency(item.highEstimate)}
                </td>
              </tr>
            ))}
            {showTotal && (
              <tr className="border-t-2 border-primary-200 bg-primary-50">
                <td className="px-4 py-3 font-semibold text-primary-800">
                  Estimated Total
                </td>
                <td className="px-4 py-3 text-right font-semibold text-primary-800 whitespace-nowrap">
                  {formatCurrency(totalLow)}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-primary-800 whitespace-nowrap">
                  {formatCurrency(totalHigh)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {footerNote && (
        <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-2">
          <p className="text-xs text-neutral-500 italic">{footerNote}</p>
        </div>
      )}
    </div>
  );
}

export default CostTable;
