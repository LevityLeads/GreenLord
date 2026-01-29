'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label for the checkbox */
  label: string;
  /** Additional description text */
  description?: string;
  /** Error message - when present, shows error state */
  error?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Container class name */
  containerClassName?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      containerClassName,
      label,
      description,
      error,
      size = 'md',
      id,
      disabled,
      checked,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if not provided
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    const errorId = `${checkboxId}-error`;

    const hasError = Boolean(error);

    const sizeStyles = {
      sm: {
        checkbox: 'h-4 w-4',
        icon: 'h-3 w-3',
        label: 'text-sm',
        description: 'text-xs',
      },
      md: {
        checkbox: 'h-5 w-5',
        icon: 'h-3.5 w-3.5',
        label: 'text-base',
        description: 'text-sm',
      },
      lg: {
        checkbox: 'h-6 w-6',
        icon: 'h-4 w-4',
        label: 'text-lg',
        description: 'text-base',
      },
    };

    const styles = sizeStyles[size];

    return (
      <div className={cn('w-full', containerClassName)}>
        <label
          htmlFor={checkboxId}
          className={cn(
            'relative flex items-start gap-3 cursor-pointer',
            'min-h-[44px] py-2',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          <div className="flex items-center h-5 mt-0.5">
            <div className="relative">
              <input
                ref={ref}
                type="checkbox"
                id={checkboxId}
                disabled={disabled}
                checked={checked}
                aria-invalid={hasError}
                aria-describedby={hasError ? errorId : undefined}
                className={cn(
                  'peer appearance-none rounded border-2 cursor-pointer',
                  'transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                  styles.checkbox,
                  checked
                    ? 'bg-primary-600 border-primary-600'
                    : 'bg-white border-neutral-300',
                  hasError && !checked && 'border-danger-400',
                  disabled && 'cursor-not-allowed',
                  className
                )}
                {...props}
              />
              {checked && (
                <Check
                  className={cn(
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                    'text-white pointer-events-none',
                    styles.icon
                  )}
                  strokeWidth={3}
                  aria-hidden="true"
                />
              )}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <span
              className={cn(
                'block font-medium text-neutral-800',
                styles.label
              )}
            >
              {label}
            </span>
            {description && (
              <span
                className={cn(
                  'block mt-1 text-neutral-500',
                  styles.description
                )}
              >
                {description}
              </span>
            )}
          </div>
        </label>
        {hasError && (
          <p
            id={errorId}
            className="mt-1 text-sm text-danger-600"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
