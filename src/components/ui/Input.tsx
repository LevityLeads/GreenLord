'use client';

import * as React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label for the input */
  label?: string;
  /** Hint text displayed below the input */
  hint?: string;
  /** Error message - when present, shows error state */
  error?: string;
  /** Input size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Icon to display on the left side of the input */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side of the input */
  rightIcon?: React.ReactNode;
  /** Full width input */
  fullWidth?: boolean;
  /** Container class name */
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      label,
      hint,
      error,
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = true,
      type = 'text',
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if not provided
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;

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

    return (
      <div className={cn('w-full', !fullWidth && 'w-auto', containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
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
          {leftIcon && (
            <div
              className={cn(
                'absolute left-3 top-1/2 -translate-y-1/2',
                'text-neutral-400',
                hasError && 'text-danger-500'
              )}
              aria-hidden="true"
            >
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            type={type}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : hint ? hintId : undefined
            }
            className={cn(
              // Base styles
              'w-full rounded-lg border bg-white',
              'transition-all duration-200 ease-in-out',
              'placeholder:text-neutral-400',
              // Focus styles
              'focus:outline-none focus:ring-2 focus:ring-offset-0',
              // Size styles
              sizeStyles[size],
              // Icon padding
              leftIcon && 'pl-10',
              (rightIcon || hasError) && 'pr-10',
              // State styles
              hasError
                ? 'border-danger-500 focus:border-danger-500 focus:ring-danger-200'
                : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-100',
              // Disabled styles
              disabled && 'bg-neutral-100 cursor-not-allowed opacity-50',
              className
            )}
            {...props}
          />
          {rightIcon && !hasError && (
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
              aria-hidden="true"
            >
              {rightIcon}
            </div>
          )}
          {hasError && (
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 text-danger-500"
              aria-hidden="true"
            >
              <AlertCircle className="h-5 w-5" />
            </div>
          )}
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

Input.displayName = 'Input';

export { Input };
export default Input;
