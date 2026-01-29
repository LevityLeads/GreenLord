import { cn, generateBreadcrumbSchema } from '@/lib/utils';
import type { BreadcrumbItem } from '@/lib/types';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export interface BreadcrumbsProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Whether to show the home icon for the first item */
  showHomeIcon?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Breadcrumbs - Navigation breadcrumbs with proper schema.org markup.
 * Improves navigation and SEO.
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   items={[
 *     { name: 'Home', url: 'https://greenlord.co.uk' },
 *     { name: 'Regulations', url: 'https://greenlord.co.uk/regulations' },
 *     { name: 'EPC C 2030 Deadline', url: 'https://greenlord.co.uk/regulations/epc-c-2030-deadline' },
 *   ]}
 * />
 * ```
 */
export function Breadcrumbs({
  items,
  showHomeIcon = true,
  className,
}: BreadcrumbsProps) {
  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visual breadcrumbs */}
      <nav
        className={cn('mb-6', className)}
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap items-center gap-1 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={item.url}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {/* Separator */}
                {!isFirst && (
                  <ChevronRight
                    className="h-4 w-4 text-neutral-400 mx-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  // Current page (not a link)
                  <span
                    className="text-neutral-600 font-medium truncate max-w-[200px] sm:max-w-none"
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.name}
                  </span>
                ) : (
                  // Link to previous page
                  <Link
                    href={new URL(item.url).pathname}
                    className="inline-flex items-center gap-1 text-neutral-500 hover:text-primary-600 transition-colors"
                    itemProp="item"
                  >
                    {isFirst && showHomeIcon && (
                      <Home
                        className="h-4 w-4 flex-shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={cn(
                        'truncate max-w-[150px] sm:max-w-none',
                        isFirst && showHomeIcon && 'sr-only sm:not-sr-only'
                      )}
                      itemProp="name"
                    >
                      {item.name}
                    </span>
                  </Link>
                )}

                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumbs;
