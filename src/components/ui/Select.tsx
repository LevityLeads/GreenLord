'use client';

import * as React from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Label for the select */
  label?: string;
  /** Hint text displayed below the select */
  hint?: string;
  /** Error message - when present, shows error state */
  error?: string;
  /** Select size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Options to display in the select */
  options: SelectOption[];
  /** Placeholder text when no option is selected */
  placeholder?: string;
  /** Full width select */
  fullWidth?: boolean;
  /** Container class name */
  containerClassName?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      containerClassName,
      label,
      hint,
      error,
      size = 'md',
      options,
      placeholder = 'Select an option',
      fullWidth = true,
      id,
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if not provided
    const generatedId = React.useId();
    const selectId = id || generatedId;
    const hintId = `${selectId}-hint`;
    const errorId = `${selectId}-error`;

    const hasError = Boolean(error);

    const sizeStyles = {
      sm: 'px-3 py-2 text-sm min-h-[36px]',
      md: 'px-4 py-3 text-base min-h-[44px]',
      lg: 'px-5 py-4 text-lg min-h-[52px]',
    };

    const labelSizeStyles = {
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-base',
    };

    const iconSizeStyles = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    };

    return (
      <div className={cn('w-full', !fullWidth && 'w-auto', containerClassName)}>
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              'block font-medium text-neutral-800 mb-2',
              labelSizeStyles[size],
              disabled && 'opacity-50'
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            value={value}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : hint ? hintId : undefined
            }
            className={cn(
              // Base styles
              'w-full rounded-lg border bg-white appearance-none cursor-pointer',
              'transition-all duration-200 ease-in-out',
              // Focus styles
              'focus:outline-none focus:ring-2 focus:ring-offset-0',
              // Size styles
              sizeStyles[size],
              // Right padding for icon
              'pr-10',
              // State styles
              hasError
                ? 'border-danger-500 focus:border-danger-500 focus:ring-danger-200'
                : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-100',
              // Disabled styles
              disabled && 'bg-neutral-100 cursor-not-allowed opacity-50',
              // Placeholder styling when no value selected
              !value && value !== 0 && 'text-neutral-400',
              className
            )}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div
            className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none',
              hasError ? 'text-danger-500' : 'text-neutral-400'
            )}
            aria-hidden="true"
          >
            {hasError ? (
              <AlertCircle className={iconSizeStyles[size]} />
            ) : (
              <ChevronDown className={iconSizeStyles[size]} />
            )}
          </div>
        </div>
        {hint && !hasError && (
          <p id={hintId} className="mt-2 text-sm text-neutral-500">
            {hint}
          </p>
        )}
        {hasError && (
          <p
            id={errorId}
            className="mt-2 text-sm text-danger-600 flex items-center gap-1"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };
export default Select;
