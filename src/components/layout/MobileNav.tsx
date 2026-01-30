'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MAIN_NAVIGATION } from '@/lib/constants';
import type { NavItem } from '@/lib/types';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MobileNavItemProps {
  item: NavItem;
  onLinkClick: () => void;
}

/**
 * Individual mobile navigation item with expandable children.
 */
function MobileNavItem({ item, onLinkClick }: MobileNavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onLinkClick}
          className={cn(
            'block px-4 py-3 text-base font-medium text-neutral-800',
            'border-b border-neutral-100',
            'transition-colors duration-150',
            'hover:bg-primary-50 hover:text-primary-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500'
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-b border-neutral-100">
      {/* Section header with expand toggle */}
      <div className="flex items-stretch">
        <Link
          href={item.href}
          onClick={onLinkClick}
          className={cn(
            'flex-1 px-4 py-3 text-base font-medium text-neutral-800',
            'transition-colors duration-150',
            'hover:bg-primary-50 hover:text-primary-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500'
          )}
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={toggleExpanded}
          className={cn(
            'flex items-center justify-center px-4',
            'text-neutral-500 hover:text-primary-600',
            'transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500',
            'border-l border-neutral-100'
          )}
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label} submenu`}
        >
          {isExpanded ? (
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          ) : (
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Expandable children list */}
      <ul
        className={cn(
          'overflow-hidden transition-all duration-200 ease-in-out',
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!isExpanded}
      >
        {item.children?.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={onLinkClick}
              tabIndex={isExpanded ? 0 : -1}
              className={cn(
                'block py-2.5 pl-8 pr-4 text-sm text-neutral-600',
                'bg-neutral-50',
                'transition-colors duration-150',
                'hover:bg-primary-50 hover:text-primary-700',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500'
              )}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

/**
 * Mobile navigation drawer component.
 * Slides in from the right side of the screen.
 * Includes expandable sections for sub-navigation items.
 */
export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-neutral-900/50 backdrop-blur-sm',
          'transition-opacity duration-300',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Navigation drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-xl',
          'transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
          <span className="text-lg font-semibold text-primary-700">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className={cn(
              'rounded-md p-2 text-neutral-500',
              'transition-colors duration-150',
              'hover:bg-neutral-100 hover:text-neutral-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
            )}
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="overflow-y-auto h-[calc(100%-4.5rem)]" aria-label="Mobile navigation">
          <ul className="divide-y divide-neutral-100">
            {MAIN_NAVIGATION.map((item) => (
              <MobileNavItem key={item.href} item={item} onLinkClick={onClose} />
            ))}
          </ul>

          {/* CTA section at bottom */}
          <div className="p-4 mt-4 border-t border-neutral-200">
            <Link
              href="/tools/cost-calculator"
              onClick={onClose}
              className={cn(
                'block w-full py-3 px-4 text-center text-sm font-semibold',
                'bg-primary-700 text-white rounded-lg',
                'transition-colors duration-150',
                'hover:bg-primary-800',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
              )}
            >
              Calculate Your Upgrade Costs
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default MobileNav;
