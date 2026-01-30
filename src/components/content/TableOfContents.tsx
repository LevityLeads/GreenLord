'use client';

import { cn } from '@/lib/utils';
import { List } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface TocItem {
  /** Unique ID for the heading (used for anchor links) */
  id: string;
  /** Heading text */
  text: string;
  /** Heading level (2 for H2, 3 for H3) */
  level: 2 | 3;
}

export interface TableOfContentsProps {
  /** Array of table of contents items */
  items: TocItem[];
  /** Optional title for the ToC */
  title?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * TableOfContents - Auto-generated table of contents from H2/H3 headings.
 * Sticky on desktop, highlights current section while scrolling.
 *
 * @example
 * ```tsx
 * <TableOfContents
 *   items={[
 *     { id: 'overview', text: 'Overview', level: 2 },
 *     { id: 'key-dates', text: 'Key Dates', level: 2 },
 *     { id: '2025-changes', text: '2025 Changes', level: 3 },
 *     { id: '2030-deadline', text: '2030 Deadline', level: 3 },
 *     { id: 'exemptions', text: 'Exemptions', level: 2 },
 *   ]}
 * />
 * ```
 */
export function TableOfContents({
  items,
  title = 'On this page',
  className,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0% -80% 0%',
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      className={cn(
        'lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto',
        'rounded-lg border border-neutral-200 bg-neutral-50 p-4',
        className
      )}
      aria-label="Table of contents"
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200">
        <List className="h-4 w-4 text-neutral-500" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-neutral-700">{title}</h2>
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                'block py-1 text-sm transition-colors duration-150',
                item.level === 3 && 'pl-4',
                activeId === item.id
                  ? 'text-primary-700 font-medium'
                  : 'text-neutral-600 hover:text-primary-600'
              )}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
