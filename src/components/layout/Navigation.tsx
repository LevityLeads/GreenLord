'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
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
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

/**
 * Individual navigation item with accessible dropdown menu.
 * Supports keyboard navigation and proper ARIA attributes.
 */
function NavItemWithDropdown({ item, isOpen, onToggle, onClose }: NavItemWithDropdownProps) {
  const hasChildren = item.children && item.children.length > 0;
  const dropdownRef = useRef<HTMLLIElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Handle keyboard navigation within dropdown
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (!isOpen || !menuRef.current) return;

    const menuItems = menuRef.current.querySelectorAll<HTMLAnchorElement>('a[role="menuitem"]');
    const currentIndex = Array.from(menuItems).findIndex(
      (item) => item === document.activeElement
    );

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        onClose();
        triggerRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (currentIndex < menuItems.length - 1) {
          menuItems[currentIndex + 1]?.focus();
        } else {
          menuItems[0]?.focus();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (currentIndex > 0) {
          menuItems[currentIndex - 1]?.focus();
        } else {
          menuItems[menuItems.length - 1]?.focus();
        }
        break;
      case 'Home':
        event.preventDefault();
        menuItems[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
        menuItems[menuItems.length - 1]?.focus();
        break;
      case 'Tab':
        // Allow natural tab behavior but close menu after tabbing out
        setTimeout(() => {
          if (!dropdownRef.current?.contains(document.activeElement)) {
            onClose();
          }
        }, 0);
        break;
    }
  }, [isOpen, onClose]);

  // Handle trigger keyboard events
  const handleTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    } else if (event.key === 'ArrowDown' && !isOpen) {
      event.preventDefault();
      onToggle();
    } else if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      onClose();
    }
  };

  // Focus first menu item when dropdown opens
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstItem = menuRef.current.querySelector<HTMLAnchorElement>('a[role="menuitem"]');
      // Small delay to ensure DOM is ready
      setTimeout(() => firstItem?.focus(), 10);
    }
  }, [isOpen]);

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
    <li
      ref={dropdownRef}
      className="relative"
      onKeyDown={handleKeyDown}
    >
      {/* Dropdown trigger button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={onToggle}
        onKeyDown={handleTriggerKeyDown}
        onMouseEnter={onToggle}
        className={cn(
          'flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700',
          'transition-colors duration-200',
          'hover:text-primary-700',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'rounded-md',
          isOpen && 'text-primary-700'
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`dropdown-${item.href.replace(/\//g, '-')}`}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown menu */}
      <div
        ref={menuRef}
        id={`dropdown-${item.href.replace(/\//g, '-')}`}
        className={cn(
          'absolute left-0 top-full z-50 pt-2',
          'transition-all duration-200 ease-out',
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-2 pointer-events-none'
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby={`trigger-${item.href.replace(/\//g, '-')}`}
        onMouseLeave={onClose}
      >
        <div
          className={cn(
            'min-w-[280px] rounded-lg bg-white p-2',
            'shadow-lg ring-1 ring-neutral-900/5',
            'border border-neutral-100'
          )}
          onMouseEnter={() => {/* Keep open when hovering menu */}}
        >
          {/* Section description */}
          {item.description && (
            <div className="px-3 py-2 mb-1 border-b border-neutral-100">
              <p className="text-xs text-neutral-500">{item.description}</p>
            </div>
          )}

          {/* Dropdown links */}
          <ul className="space-y-0.5" role="none">
            {item.children?.map((child, index) => (
              <li key={child.href} role="none">
                <Link
                  href={child.href}
                  className={cn(
                    'block px-3 py-2 text-sm text-neutral-700 rounded-md',
                    'transition-colors duration-150',
                    'hover:bg-primary-50 hover:text-primary-700',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500',
                    'focus:bg-primary-50 focus:text-primary-700'
                  )}
                  role="menuitem"
                  tabIndex={isOpen ? 0 : -1}
                  onClick={onClose}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* View all link */}
          <div className="mt-2 pt-2 border-t border-neutral-100" role="none">
            <Link
              href={item.href}
              className={cn(
                'flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-600 rounded-md',
                'transition-colors duration-150',
                'hover:bg-primary-50 hover:text-primary-700',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500',
                'focus:bg-primary-50 focus:text-primary-700'
              )}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              onClick={onClose}
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
 * Renders horizontal navigation with accessible dropdown menus.
 * Supports keyboard navigation and proper ARIA attributes.
 * Hidden on mobile devices.
 */
export function Navigation({ className }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = useCallback((href: string) => {
    setOpenDropdown((current) => (current === href ? null : href));
  }, []);

  const handleClose = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  // Close dropdown when clicking outside entire nav
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav
      className={cn('hidden lg:block', className)}
      aria-label="Main navigation"
    >
      <ul className="flex items-center gap-1">
        {MAIN_NAVIGATION.map((item) => (
          <NavItemWithDropdown
            key={item.href}
            item={item}
            isOpen={openDropdown === item.href}
            onToggle={() => handleToggle(item.href)}
            onClose={handleClose}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
