'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { List, FileText, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number; // 2 for h2, 3 for h3
}

interface RelatedArticle {
  title: string;
  href: string;
  description?: string;
}

interface SidebarProps {
  /** Table of contents items */
  tableOfContents?: TableOfContentsItem[];
  /** Related articles to display */
  relatedArticles?: RelatedArticle[];
  /** Additional class names */
  className?: string;
  /** Whether to make sidebar sticky */
  sticky?: boolean;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

/**
 * Table of Contents component with active section highlighting
 */
function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Observer to track which section is currently visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66% 0px',
        threshold: 0,
      }
    );

    // Observe all heading elements
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
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL hash
      window.history.pushState(null, '', `#${id}`);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <List className="h-4 w-4 text-primary-600" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
          On this page
        </h2>
      </div>
      <nav aria-label="Table of contents">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={cn(
                  'block py-1.5 text-sm border-l-2 transition-all duration-150',
                  item.level === 2 ? 'pl-3' : 'pl-6',
                  activeId === item.id
                    ? 'border-primary-500 text-primary-700 font-medium bg-primary-50/50'
                    : 'border-transparent text-neutral-600 hover:text-primary-600 hover:border-neutral-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500',
                  'rounded-r'
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

/**
 * Related articles section
 */
function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <FileText className="h-4 w-4 text-primary-600" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
          Related Articles
        </h2>
      </div>
      <ul className="space-y-3">
        {articles.map((article) => (
          <li key={article.href}>
            <Link
              href={article.href}
              className={cn(
                'group block p-3 rounded-lg',
                'bg-neutral-50 hover:bg-primary-50',
                'border border-neutral-200 hover:border-primary-200',
                'transition-all duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-medium text-neutral-900 group-hover:text-primary-700">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                      {article.description}
                    </p>
                  )}
                </div>
                <ChevronRight
                  className={cn(
                    'h-4 w-4 flex-shrink-0 mt-0.5',
                    'text-neutral-400 group-hover:text-primary-500',
                    'transition-transform duration-150 group-hover:translate-x-0.5'
                  )}
                  aria-hidden="true"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Sidebar layout component for article pages.
 * Features:
 * - Table of contents with active section highlighting
 * - Smooth scroll navigation
 * - Related articles section
 * - Optional sticky positioning
 */
export function Sidebar({
  tableOfContents = [],
  relatedArticles = [],
  className,
  sticky = true,
}: SidebarProps) {
  const hasContent = tableOfContents.length > 0 || relatedArticles.length > 0;

  if (!hasContent) {
    return null;
  }

  return (
    <aside
      className={cn(
        'w-full lg:w-72 xl:w-80 flex-shrink-0',
        className
      )}
      aria-label="Article sidebar"
    >
      <div
        className={cn(
          sticky && 'lg:sticky lg:top-24',
          'space-y-6'
        )}
      >
        {/* Table of Contents */}
        {tableOfContents.length > 0 && (
          <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm">
            <TableOfContents items={tableOfContents} />
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm">
            <RelatedArticles articles={relatedArticles} />
          </div>
        )}

        {/* Optional CTA */}
        <div className="p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg border border-primary-100">
          <h3 className="text-sm font-semibold text-primary-800 mb-2">
            Need help with compliance?
          </h3>
          <p className="text-xs text-neutral-600 mb-3">
            Use our calculator to estimate your upgrade costs and plan your path to EPC C.
          </p>
          <Link
            href="/tools/cost-calculator"
            className={cn(
              'inline-flex items-center gap-1 text-sm font-medium text-primary-700',
              'hover:text-primary-800 transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
              'rounded'
            )}
          >
            Try the calculator
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
