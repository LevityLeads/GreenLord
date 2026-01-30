'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  /** Unique name for the radio group */
  name: string;
  /** Label for the radio group */
  label?: string;
  /** Hint text displayed below the label */
  hint?: string;
  /** Error message - when present, shows error state */
  error?: string;
  /** Options to display */
  options: RadioOption[];
  /** Currently selected value */
  value?: string;
  /** Callback when selection changes */
  onChange?: (value: string) => void;
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
  /** Whether the entire group is disabled */
  disabled?: boolean;
  /** Container class name */
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  hint,
  error,
  options,
  value,
  onChange,
  direction = 'vertical',
  disabled = false,
  className,
}) => {
  const groupId = React.useId();
  const hintId = `${groupId}-hint`;
  const errorId = `${groupId}-error`;

  const hasError = Boolean(error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={cn('w-full', className)} role="radiogroup" aria-labelledby={label ? `${groupId}-label` : undefined}>
      {label && (
        <div id={`${groupId}-label`} className="block font-medium text-neutral-800 mb-3">
          {label}
        </div>
      )}
      {hint && !hasError && (
        <p id={hintId} className="text-sm text-neutral-500 mb-3">
          {hint}
        </p>
      )}
      <div
        className={cn(
          'flex gap-4',
          direction === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'
        )}
      >
        {options.map((option) => {
          const optionId = `${groupId}-${option.value}`;
          const isSelected = value === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={cn(
                'relative flex items-start gap-3 p-4 rounded-lg border cursor-pointer',
                'transition-all duration-200 ease-in-out',
                'min-h-[44px]',
                isSelected
                  ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-100'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50',
                hasError && !isSelected && 'border-danger-300',
                isDisabled && 'opacity-50 cursor-not-allowed hover:border-neutral-200 hover:bg-white'
              )}
            >
              <div className="flex items-center h-5">
                <input
                  type="radio"
                  id={optionId}
                  name={name}
                  value={option.value}
                  checked={isSelected}
                  onChange={handleChange}
                  disabled={isDisabled}
                  aria-describedby={hasError ? errorId : hint ? hintId : undefined}
                  className={cn(
                    'h-5 w-5 border-2 rounded-full appearance-none cursor-pointer',
                    'transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    isSelected
                      ? 'border-primary-600 bg-primary-600'
                      : 'border-neutral-300 bg-white',
                    hasError && !isSelected && 'border-danger-400',
                    isDisabled && 'cursor-not-allowed'
                  )}
                  style={{
                    backgroundImage: isSelected
                      ? 'radial-gradient(circle, white 0%, white 35%, transparent 35%)'
                      : 'none',
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <span
                  className={cn(
                    'block text-base font-medium',
                    isSelected ? 'text-primary-800' : 'text-neutral-700'
                  )}
                >
                  {option.label}
                </span>
                {option.description && (
                  <span className="block mt-1 text-sm text-neutral-500">
                    {option.description}
                  </span>
                )}
              </div>
            </label>
          );
        })}
      </div>
      {hasError && (
        <p
          id={errorId}
          className="mt-3 text-sm text-danger-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
