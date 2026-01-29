import { cn } from '@/lib/utils';
import { Check, X, Minus } from 'lucide-react';

export interface ComparisonOption {
  /** Name of the option */
  name: string;
  /** Whether this is the recommended option */
  recommended?: boolean;
  /** Values for each feature (true/false/string) */
  features: Record<string, boolean | string | null>;
}

export interface ComparisonTableProps {
  /** Table title/caption */
  title?: string;
  /** Feature names (row headers) */
  featureLabels: Record<string, string>;
  /** Options to compare (columns) */
  options: ComparisonOption[];
  /** Optional footer note */
  footerNote?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ComparisonTable - For presenting options side by side with feature comparison.
 * Highlights the recommended option.
 *
 * @example
 * ```tsx
 * <ComparisonTable
 *   title="Insulation Options Compared"
 *   featureLabels={{
 *     cost: 'Typical Cost',
 *     savings: 'Annual Savings',
 *     disruption: 'Installation Disruption',
 *     suitable: 'Suitable for Solid Walls',
 *   }}
 *   options={[
 *     {
 *       name: 'External Wall Insulation',
 *       recommended: true,
 *       features: { cost: '8,000-15,000', savings: '200-300', disruption: 'Medium', suitable: true }
 *     },
 *     {
 *       name: 'Internal Wall Insulation',
 *       features: { cost: '5,000-12,000', savings: '180-280', disruption: 'High', suitable: true }
 *     },
 *   ]}
 * />
 * ```
 */
export function ComparisonTable({
  title,
  featureLabels,
  options,
  footerNote,
  className,
}: ComparisonTableProps) {
  const featureKeys = Object.keys(featureLabels);

  const renderFeatureValue = (value: boolean | string | null | undefined) => {
    if (value === true) {
      return (
        <span className="inline-flex items-center justify-center">
          <Check className="h-5 w-5 text-success-600" aria-label="Yes" />
        </span>
      );
    }
    if (value === false) {
      return (
        <span className="inline-flex items-center justify-center">
          <X className="h-5 w-5 text-danger-500" aria-label="No" />
        </span>
      );
    }
    if (value === null || value === undefined) {
      return (
        <span className="inline-flex items-center justify-center">
          <Minus className="h-5 w-5 text-neutral-400" aria-label="Not applicable" />
        </span>
      );
    }
    return <span className="text-neutral-700">{value}</span>;
  };

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
            <tr className="bg-neutral-50">
              <th
                scope="col"
                className="px-4 py-3 text-left font-semibold text-neutral-600"
              >
                <span className="sr-only">Feature</span>
              </th>
              {options.map((option) => (
                <th
                  key={option.name}
                  scope="col"
                  className={cn(
                    'px-4 py-3 text-center font-semibold min-w-[140px]',
                    option.recommended
                      ? 'bg-accent-100 text-accent-800'
                      : 'text-neutral-800'
                  )}
                >
                  <span className="block">{option.name}</span>
                  {option.recommended && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-accent-600 text-white rounded-full">
                      Recommended
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureKeys.map((featureKey, index) => (
              <tr
                key={featureKey}
                className={cn(
                  'border-t border-neutral-100',
                  index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
                )}
              >
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-medium text-neutral-700"
                >
                  {featureLabels[featureKey]}
                </th>
                {options.map((option) => (
                  <td
                    key={`${option.name}-${featureKey}`}
                    className={cn(
                      'px-4 py-3 text-center',
                      option.recommended && 'bg-accent-50/50'
                    )}
                  >
                    {renderFeatureValue(option.features[featureKey])}
                  </td>
                ))}
              </tr>
            ))}
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

export default ComparisonTable;
