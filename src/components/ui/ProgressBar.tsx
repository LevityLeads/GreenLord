'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Step-based progress bar for multi-step forms
export interface ProgressStep {
  id: string;
  label: string;
  description?: string;
}

export interface StepProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of steps in the progress bar */
  steps: ProgressStep[];
  /** Current active step (0-indexed) */
  currentStep: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Callback when a step is clicked (for navigation) */
  onStepClick?: (stepIndex: number) => void;
  /** Whether completed steps are clickable */
  allowNavigation?: boolean;
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({
  className,
  steps,
  currentStep,
  size = 'md',
  onStepClick,
  allowNavigation = false,
  ...props
}) => {
  const totalSteps = steps.length;

  const sizeStyles = {
    sm: {
      circle: 'w-6 h-6 text-xs',
      icon: 'h-3 w-3',
      label: 'text-xs',
      description: 'text-xs',
      connector: 'h-0.5',
    },
    md: {
      circle: 'w-8 h-8 text-sm',
      icon: 'h-4 w-4',
      label: 'text-sm',
      description: 'text-xs',
      connector: 'h-0.5',
    },
    lg: {
      circle: 'w-10 h-10 text-base',
      icon: 'h-5 w-5',
      label: 'text-base',
      description: 'text-sm',
      connector: 'h-1',
    },
  };

  const styles = sizeStyles[size];

  const handleStepClick = (stepIndex: number) => {
    if (!allowNavigation || !onStepClick) return;
    if (stepIndex < currentStep) {
      onStepClick(stepIndex);
    }
  };

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Screen reader text */}
      <div className="sr-only">
        Step {currentStep + 1} of {totalSteps}: {steps[currentStep]?.label}
      </div>

      {/* Progress steps */}
      <nav aria-label="Progress">
        <ol className="flex items-center">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            const isClickable = allowNavigation && isCompleted && onStepClick;

            return (
              <li
                key={step.id}
                className={cn(
                  'flex items-center',
                  index < totalSteps - 1 && 'flex-1'
                )}
              >
                <div className="flex flex-col items-center">
                  {/* Step circle */}
                  <button
                    type="button"
                    onClick={() => handleStepClick(index)}
                    disabled={!isClickable}
                    aria-current={isCurrent ? 'step' : undefined}
                    className={cn(
                      'flex items-center justify-center rounded-full',
                      'font-medium transition-all duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                      styles.circle,
                      isCompleted && 'bg-primary-600 text-white',
                      isCurrent && 'bg-primary-600 text-white ring-4 ring-primary-100',
                      !isCompleted && !isCurrent && 'bg-neutral-200 text-neutral-500',
                      isClickable && 'cursor-pointer hover:bg-primary-700',
                      !isClickable && 'cursor-default'
                    )}
                  >
                    {isCompleted ? (
                      <Check className={styles.icon} aria-hidden="true" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </button>

                  {/* Step label (visible on larger screens) */}
                  <div className="mt-2 text-center hidden sm:block">
                    <span
                      className={cn(
                        'block font-medium',
                        styles.label,
                        isCurrent && 'text-primary-700',
                        isCompleted && 'text-primary-600',
                        !isCurrent && !isCompleted && 'text-neutral-500'
                      )}
                    >
                      {step.label}
                    </span>
                    {step.description && (
                      <span
                        className={cn(
                          'block mt-0.5 text-neutral-500',
                          styles.description
                        )}
                      >
                        {step.description}
                      </span>
                    )}
                  </div>
                </div>

                {/* Connector line */}
                {index < totalSteps - 1 && (
                  <div
                    className={cn(
                      'flex-1 mx-2 sm:mx-4',
                      styles.connector,
                      isCompleted ? 'bg-primary-600' : 'bg-neutral-200'
                    )}
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Mobile step indicator */}
      <div className="sm:hidden mt-4 text-center">
        <span className="text-sm font-medium text-primary-700">
          {steps[currentStep]?.label}
        </span>
        <span className="text-sm text-neutral-500 ml-2">
          ({currentStep + 1} of {totalSteps})
        </span>
      </div>
    </div>
  );
};

StepProgressBar.displayName = 'StepProgressBar';

// Linear progress bar (simple percentage bar)
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Visual variant */
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'accent';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show percentage label */
  showLabel?: boolean;
  /** Custom label */
  label?: string;
  /** Accessible label for screen readers */
  ariaLabel?: string;
  /** Animate the progress bar */
  animated?: boolean;
}

const variantClasses = {
  primary: 'bg-primary-600',
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  danger: 'bg-danger-500',
  accent: 'bg-accent-600',
};

const sizeClasses = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      max = 100,
      variant = 'primary',
      size = 'md',
      showLabel = false,
      label,
      className,
      ariaLabel,
      animated = false,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div className={cn('w-full', className)} {...props}>
        {(showLabel || label) && (
          <div className="mb-1 flex items-center justify-between text-sm">
            {label && <span className="font-medium text-neutral-700">{label}</span>}
            {showLabel && (
              <span className="text-neutral-500">{Math.round(percentage)}%</span>
            )}
          </div>
        )}
        <div
          ref={ref}
          className={cn(
            'w-full overflow-hidden rounded-full bg-neutral-200',
            sizeClasses[size]
          )}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={ariaLabel || label || 'Progress'}
        >
          <div
            className={cn(
              'h-full rounded-full transition-all duration-500 ease-out',
              variantClasses[variant],
              animated && 'animate-pulse'
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

export { ProgressBar, StepProgressBar };
export default ProgressBar;
