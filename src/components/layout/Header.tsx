'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { daysUntilDeadline } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';
import { Navigation } from './Navigation';
import { MobileNav } from './MobileNav';
import { Container } from './Container';

interface HeaderProps {
  className?: string;
}

/**
 * Logo component - text-based professional styling
 */
function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'rounded-md'
      )}
      aria-label={`${SITE_CONFIG.name} - Home`}
    >
      {/* Logo icon - stylized leaf/house combination */}
      <div
        className={cn(
          'flex items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-600',
          'transition-all duration-200',
          isScrolled ? 'h-8 w-8' : 'h-10 w-10'
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            'text-white transition-all duration-200',
            isScrolled ? 'h-5 w-5' : 'h-6 w-6'
          )}
          aria-hidden="true"
        >
          {/* Simplified house with leaf design */}
          <path
            d="M12 3L4 9V21H9V14H15V21H20V9L12 3Z"
            fill="currentColor"
            fillOpacity="0.3"
          />
          <path
            d="M12 3L4 9V21H9V14H15V21H20V9L12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7C12 7 10 9 10 11C10 12.1 10.9 13 12 13C13.1 13 14 12.1 14 11C14 9 12 7 12 7Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Logo text */}
      <div className="flex flex-col">
        <span
          className={cn(
            'font-bold text-primary-800 tracking-tight transition-all duration-200',
            isScrolled ? 'text-lg' : 'text-xl lg:text-2xl'
          )}
        >
          {SITE_CONFIG.name}
        </span>
        <span
          className={cn(
            'text-neutral-500 transition-all duration-200 hidden sm:block',
            isScrolled ? 'text-[10px] leading-tight' : 'text-xs leading-tight'
          )}
        >
          EPC Compliance Made Simple
        </span>
      </div>
    </Link>
  );
}

/**
 * Deadline countdown badge component
 * Uses client-only rendering to avoid hydration mismatch with Date calculations
 */
function DeadlineCountdown({ isScrolled }: { isScrolled: boolean }) {
  const [mounted, setMounted] = useState(false);

  // Track mount state to enable client-only rendering and avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional: tracking mount state for hydration safety
    setMounted(true);
  }, []);

  // Only calculate after mount to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const days = daysUntilDeadline();
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);

  return (
    <div
      className={cn(
        'hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full',
        'bg-warning-50 border border-warning-200',
        'transition-all duration-200',
        isScrolled ? 'scale-90' : 'scale-100'
      )}
      role="status"
      aria-label={`${days} days until EPC C deadline`}
    >
      <Clock
        className={cn(
          'text-warning-600 transition-all duration-200',
          isScrolled ? 'h-3.5 w-3.5' : 'h-4 w-4'
        )}
        aria-hidden="true"
      />
      <div className="flex flex-col">
        <span
          className={cn(
            'font-semibold text-warning-700 leading-none transition-all duration-200',
            isScrolled ? 'text-xs' : 'text-sm'
          )}
        >
          {years}y {months}m until deadline
        </span>
        <span
          className={cn(
            'text-warning-600 leading-none transition-all duration-200',
            isScrolled ? 'text-[9px]' : 'text-[10px]'
          )}
        >
          Oct 2030 EPC C requirement
        </span>
      </div>
    </div>
  );
}

/**
 * Main site header component.
 * Features:
 * - Sticky positioning with shrink-on-scroll behavior
 * - Professional text-based logo
 * - Desktop navigation with dropdown menus
 * - Mobile hamburger menu with slide-out drawer
 * - Deadline countdown badge
 */
export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Handle scroll to shrink header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMobileNav = useCallback(() => {
    setIsMobileNavOpen(true);
  }, []);

  const closeMobileNav = useCallback(() => {
    setIsMobileNavOpen(false);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-30 w-full',
          'bg-white/95 backdrop-blur-md',
          'border-b border-neutral-200',
          'transition-all duration-200',
          isScrolled ? 'shadow-sm' : 'shadow-none',
          className
        )}
      >
        <Container>
          <div
            className={cn(
              'flex items-center justify-between',
              'transition-all duration-200',
              isScrolled ? 'h-14' : 'h-16 lg:h-20'
            )}
          >
            {/* Logo */}
            <Logo isScrolled={isScrolled} />

            {/* Desktop Navigation */}
            <Navigation />

            {/* Right side: Countdown + Mobile menu button */}
            <div className="flex items-center gap-3">
              {/* Deadline countdown - hidden on mobile */}
              <DeadlineCountdown isScrolled={isScrolled} />

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={openMobileNav}
                className={cn(
                  'lg:hidden flex items-center justify-center',
                  'rounded-md p-2 text-neutral-600',
                  'transition-colors duration-150',
                  'hover:bg-neutral-100 hover:text-neutral-800',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
                )}
                aria-label="Open navigation menu"
                aria-expanded={isMobileNavOpen}
                aria-controls="mobile-navigation"
              >
                <Menu
                  className={cn(
                    'transition-all duration-200',
                    isScrolled ? 'h-5 w-5' : 'h-6 w-6'
                  )}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile navigation drawer */}
      <MobileNav isOpen={isMobileNavOpen} onClose={closeMobileNav} />
    </>
  );
}

export default Header;
