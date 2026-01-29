import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Background color variant */
  background?: 'white' | 'muted' | 'primary' | 'accent';
  /** Vertical padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Optional section ID for anchor links */
  id?: string;
  /** HTML element to render */
  as?: 'section' | 'div' | 'article' | 'aside';
  /** ARIA label for accessibility */
  ariaLabel?: string;
}

const backgroundClasses = {
  white: 'bg-white',
  muted: 'bg-neutral-50',
  primary: 'bg-primary-50',
  accent: 'bg-accent-50',
};

const paddingClasses = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-20 md:py-32',
};

/**
 * Page section component with configurable background and padding.
 * Use for creating distinct visual sections on a page.
 */
export function Section({
  children,
  className,
  background = 'white',
  padding = 'md',
  id,
  as: Component = 'section',
  ariaLabel,
}: SectionProps) {
  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
}

export default Section;
