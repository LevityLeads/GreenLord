'use client';

import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Loading state - shows spinner and disables button */
  isLoading?: boolean;
  /** Text to show when loading (defaults to children) */
  loadingText?: string;
  /** Icon to show before button text */
  leftIcon?: React.ReactNode;
  /** Icon to show after button text */
  rightIcon?: React.ReactNode;
  /** Full width button */
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base styles
      'inline-flex items-center justify-center gap-2',
      'font-medium rounded-lg',
      'transition-all duration-200 ease-in-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      // Ensure minimum touch target for accessibility (44px)
      'min-h-[44px]'
    );

    const variantStyles = {
      primary: cn(
        'bg-primary-700 text-white',
        'hover:bg-primary-800',
        'active:bg-primary-900',
        'focus-visible:ring-primary-500'
      ),
      secondary: cn(
        'bg-accent-500 text-white',
        'hover:bg-accent-600',
        'active:bg-accent-700',
        'focus-visible:ring-accent-400'
      ),
      outline: cn(
        'border-2 border-primary-700 text-primary-700 bg-transparent',
        'hover:bg-primary-50',
        'active:bg-primary-100',
        'focus-visible:ring-primary-500'
      ),
      ghost: cn(
        'text-primary-700 bg-transparent',
        'hover:bg-primary-50',
        'active:bg-primary-100',
        'focus-visible:ring-primary-500'
      ),
      danger: cn(
        'bg-danger-600 text-white',
        'hover:bg-danger-500',
        'active:bg-danger-700',
        'focus-visible:ring-danger-500'
      ),
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm min-h-[36px]',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            <span>{loadingText || children}</span>
          </>
        ) : (
          <>
            {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export default Button;
