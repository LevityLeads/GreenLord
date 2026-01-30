import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge variant style */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Optional icon to display before text */
  icon?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', icon, children, ...props }, ref) => {
    const variantStyles = {
      default: cn(
        'bg-neutral-100 text-neutral-700',
        'border border-neutral-200'
      ),
      neutral: cn(
        'bg-neutral-100 text-neutral-600',
        'border border-neutral-200'
      ),
      primary: cn(
        'bg-primary-100 text-primary-700',
        'border border-primary-200'
      ),
      secondary: cn(
        'bg-accent-100 text-accent-700',
        'border border-accent-200'
      ),
      success: cn(
        'bg-success-50 text-success-600',
        'border border-success-200'
      ),
      warning: cn(
        'bg-warning-50 text-warning-600',
        'border border-warning-200'
      ),
      danger: cn(
        'bg-danger-50 text-danger-600',
        'border border-danger-200'
      ),
    };

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 font-medium rounded-full',
          'whitespace-nowrap',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
export default Badge;
