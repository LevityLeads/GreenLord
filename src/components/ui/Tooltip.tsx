'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TooltipProps {
  /** Content to display in the tooltip */
  content: React.ReactNode;
  /** The element that triggers the tooltip */
  children: React.ReactElement<{
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    'aria-describedby'?: string;
  }>;
  /** Position of the tooltip relative to the trigger */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Delay before showing tooltip (in ms) */
  delay?: number;
  /** Maximum width of the tooltip */
  maxWidth?: number;
  /** Whether the tooltip is disabled */
  disabled?: boolean;
  /** Additional class name */
  className?: string;
}

const positionClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrowClasses = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-neutral-800 border-x-transparent border-b-transparent',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-neutral-800 border-x-transparent border-t-transparent',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-neutral-800 border-y-transparent border-r-transparent',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-neutral-800 border-y-transparent border-l-transparent',
};

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 200,
  maxWidth = 250,
  disabled = false,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = React.useId();

  const showTooltip = () => {
    if (disabled) return;
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  };

  // Clean up timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Clone the child element to add event handlers
  // eslint-disable-next-line react-hooks/refs
  const trigger = React.cloneElement(children, {
    onMouseEnter: (e: React.MouseEvent) => {
      showTooltip();
      children.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hideTooltip();
      children.props.onMouseLeave?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      showTooltip();
      children.props.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      hideTooltip();
      children.props.onBlur?.(e);
    },
    'aria-describedby': isVisible ? tooltipId : undefined,
  });

  return (
    <span className={cn('relative inline-flex', className)}>
      {trigger}
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={cn(
            'absolute z-50 px-3 py-2',
            'bg-neutral-800 text-white text-sm font-medium rounded-lg',
            'shadow-lg whitespace-normal',
            'animate-fade-in',
            positionClasses[position]
          )}
          style={{ maxWidth }}
        >
          {content}
          <div
            className={cn(
              'absolute h-0 w-0 border-4',
              arrowClasses[position]
            )}
            aria-hidden="true"
          />
        </div>
      )}
    </span>
  );
};

Tooltip.displayName = 'Tooltip';

// Simple info tooltip trigger with icon
export interface InfoTooltipProps {
  /** Content to display in the tooltip */
  content: React.ReactNode;
  /** Position of the tooltip */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Size of the info icon */
  size?: 'sm' | 'md' | 'lg';
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({
  content,
  position = 'top',
  size = 'md',
}) => {
  const sizeStyles = {
    sm: 'w-4 h-4 text-xs',
    md: 'w-5 h-5 text-sm',
    lg: 'w-6 h-6 text-base',
  };

  return (
    <Tooltip content={content} position={position}>
      <button
        type="button"
        className={cn(
          'inline-flex items-center justify-center rounded-full',
          'bg-neutral-200 text-neutral-600',
          'hover:bg-neutral-300 hover:text-neutral-800',
          'transition-colors duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
          sizeStyles[size]
        )}
        aria-label="More information"
      >
        <span aria-hidden="true">?</span>
      </button>
    </Tooltip>
  );
};

InfoTooltip.displayName = 'InfoTooltip';

export { Tooltip, InfoTooltip };
export default Tooltip;
