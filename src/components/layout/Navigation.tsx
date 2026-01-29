import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MAIN_NAVIGATION } from '@/lib/constants';
import type { NavItem } from '@/lib/types';

interface NavigationProps {
  className?: string;
}

interface NavItemWithDropdownProps {
  item: NavItem;
}

/**
 * Individual navigation item with optional dropdown menu.
 * Uses CSS hover states for dropdown visibility.
 */
function NavItemWithDropdown({ item }: NavItemWithDropdownProps) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href}
          className={cn(
            'block px-4 py-2 text-sm font-medium text-neutral-700',
            'transition-colors duration-200',
            'hover:text-primary-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
            'rounded-md'
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="group relative">
      {/* Dropdown trigger */}
      <Link
        href={item.href}
        className={cn(
          'flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700',
          'transition-colors duration-200',
          'hover:text-primary-700 group-hover:text-primary-700',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'rounded-md'
        )}
        aria-haspopup="true"
        aria-expanded="false"
      >
        {item.label}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            'group-hover:rotate-180'
          )}
          aria-hidden="true"
        />
      </Link>

      {/* Dropdown menu */}
      <div
        className={cn(
          'absolute left-0 top-full z-50 pt-2',
          'opacity-0 invisible translate-y-2',
          'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0',
          'transition-all duration-200 ease-out'
        )}
        role="menu"
        aria-orientation="vertical"
      >
        <div
          className={cn(
            'min-w-[280px] rounded-lg bg-white p-2',
            'shadow-lg ring-1 ring-neutral-900/5',
            'border border-neutral-100'
          )}
        >
          {/* Section description */}
          {item.description && (
            <div className="px-3 py-2 mb-1 border-b border-neutral-100">
              <p className="text-xs text-neutral-500">{item.description}</p>
            </div>
          )}

          {/* Dropdown links */}
          <ul className="space-y-0.5">
            {item.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={cn(
                    'block px-3 py-2 text-sm text-neutral-700 rounded-md',
                    'transition-colors duration-150',
                    'hover:bg-primary-50 hover:text-primary-700',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500'
                  )}
                  role="menuitem"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* View all link */}
          <div className="mt-2 pt-2 border-t border-neutral-100">
            <Link
              href={item.href}
              className={cn(
                'flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-600 rounded-md',
                'transition-colors duration-150',
                'hover:bg-primary-50 hover:text-primary-700',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500'
              )}
            >
              View all {item.label.toLowerCase()}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

/**
 * Desktop mega-menu style navigation component.
 * Renders horizontal navigation with dropdown menus on hover.
 * Hidden on mobile devices.
 */
export function Navigation({ className }: NavigationProps) {
  return (
    <nav
      className={cn('hidden lg:block', className)}
      aria-label="Main navigation"
    >
      <ul className="flex items-center gap-1">
        {MAIN_NAVIGATION.map((item) => (
          <NavItemWithDropdown key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
