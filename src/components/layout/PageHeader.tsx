import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BreadcrumbItem } from '@/lib/types';
import { Container } from './Container';
import { Section } from './Section';

interface PageHeaderProps {
  /** Page title */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Breadcrumb navigation items */
  breadcrumbs?: BreadcrumbItem[];
  /** Additional content (e.g., metadata, author info) */
  children?: React.ReactNode;
  /** Background variant */
  background?: 'white' | 'muted' | 'primary';
  /** Center the text */
  centered?: boolean;
  /** Additional class names */
  className?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb navigation component
 */
function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-neutral-500">
        {/* Home link */}
        <li className="flex items-center">
          <Link
            href="/"
            className={cn(
              'flex items-center gap-1 hover:text-primary-600',
              'transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
              'rounded'
            )}
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.url} className="flex items-center">
              <ChevronRight
                className="h-4 w-4 mx-1 text-neutral-400 flex-shrink-0"
                aria-hidden="true"
              />
              {isLast ? (
                <span
                  className="text-neutral-700 font-medium truncate max-w-[200px] sm:max-w-none"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className={cn(
                    'hover:text-primary-600 truncate max-w-[150px] sm:max-w-none',
                    'transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                    'rounded'
                  )}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Standard page header component.
 * Features:
 * - Page title with optional subtitle
 * - Optional breadcrumb navigation
 * - Configurable background color
 * - Support for additional content (metadata, author info, etc.)
 */
export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  children,
  background = 'muted',
  centered = false,
  className,
}: PageHeaderProps) {
  return (
    <Section
      background={background}
      padding="md"
      className={cn('border-b border-neutral-200', className)}
      as="div"
    >
      <Container>
        <div className={cn(centered && 'text-center')}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumbs items={breadcrumbs} />
          )}

          {/* Title */}
          <h1
            className={cn(
              'text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800',
              'tracking-tight leading-tight'
            )}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={cn(
                'mt-4 text-lg sm:text-xl text-neutral-600',
                'max-w-3xl',
                centered && 'mx-auto'
              )}
            >
              {subtitle}
            </p>
          )}

          {/* Additional content slot */}
          {children && (
            <div className={cn('mt-6', centered && 'flex justify-center')}>
              {children}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default PageHeader;
