import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Maximum width variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Remove horizontal padding */
  noPadding?: boolean;
  /** HTML element to render */
  as?: 'div' | 'section' | 'article' | 'main' | 'aside';
}

const sizeClasses = {
  sm: 'max-w-3xl', // 768px
  md: 'max-w-5xl', // 1024px
  lg: 'max-w-6xl', // 1152px
  xl: 'max-w-7xl', // 1280px
  full: 'max-w-full',
};

/**
 * Responsive container component with configurable max-width and padding.
 * Centers content and provides consistent horizontal spacing.
 */
export function Container({
  children,
  className,
  size = 'xl',
  noPadding = false,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full',
        sizeClasses[size],
        !noPadding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
}

export default Container;
