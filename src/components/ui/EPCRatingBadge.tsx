import * as React from 'react';
import { cn } from '@/lib/utils';
import type { EPCRating } from '@/lib/types';

export interface EPCRatingBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The EPC rating (A-G) */
  rating: EPCRating;
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Show the score range alongside the rating */
  showScoreRange?: boolean;
  /** Optional label before the rating */
  label?: string;
}

// Official EPC score ranges
const epcScoreRanges: Record<EPCRating, { min: number; max: number }> = {
  A: { min: 92, max: 100 },
  B: { min: 81, max: 91 },
  C: { min: 69, max: 80 },
  D: { min: 55, max: 68 },
  E: { min: 39, max: 54 },
  F: { min: 21, max: 38 },
  G: { min: 1, max: 20 },
};

// Official EPC rating colors (matching globals.css)
const epcColors: Record<EPCRating, { bg: string; text: string }> = {
  A: { bg: '#008054', text: 'white' },
  B: { bg: '#19b459', text: 'white' },
  C: { bg: '#8dce46', text: '#1a1a1a' },
  D: { bg: '#ffd500', text: '#1a1a1a' },
  E: { bg: '#fcaa65', text: '#1a1a1a' },
  F: { bg: '#ef8023', text: 'white' },
  G: { bg: '#e9153b', text: 'white' },
};

const EPCRatingBadge = React.forwardRef<HTMLSpanElement, EPCRatingBadgeProps>(
  (
    { className, rating, size = 'md', showScoreRange = false, label, ...props },
    ref
  ) => {
    const scoreRange = epcScoreRanges[rating];
    const colors = epcColors[rating];

    const sizeStyles = {
      sm: {
        container: 'text-xs',
        badge: 'w-6 h-6 text-xs font-bold',
        score: 'text-xs',
      },
      md: {
        container: 'text-sm',
        badge: 'w-8 h-8 text-sm font-bold',
        score: 'text-sm',
      },
      lg: {
        container: 'text-base',
        badge: 'w-10 h-10 text-lg font-bold',
        score: 'text-base',
      },
    };

    const styles = sizeStyles[size];

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2',
          styles.container,
          className
        )}
        {...props}
      >
        {label && (
          <span className="text-neutral-600 font-medium">{label}</span>
        )}
        <span
          className={cn(
            'inline-flex items-center justify-center rounded',
            'transition-transform duration-200 hover:scale-105',
            styles.badge
          )}
          style={{
            backgroundColor: colors.bg,
            color: colors.text,
          }}
          role="img"
          aria-label={`EPC Rating ${rating}`}
        >
          {rating}
        </span>
        {showScoreRange && (
          <span className={cn('text-neutral-500', styles.score)}>
            ({scoreRange.min}-{scoreRange.max})
          </span>
        )}
      </span>
    );
  }
);

EPCRatingBadge.displayName = 'EPCRatingBadge';

// EPC Rating Scale component for displaying all ratings
export interface EPCRatingScaleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Currently active/highlighted rating */
  activeRating?: EPCRating;
  /** Size of the badges */
  size?: 'sm' | 'md' | 'lg';
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
}

const EPCRatingScale = React.forwardRef<HTMLDivElement, EPCRatingScaleProps>(
  (
    { className, activeRating, size = 'md', direction = 'horizontal', ...props },
    ref
  ) => {
    const ratings: EPCRating[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    const sizeStyles = {
      sm: 'w-5 h-5 text-xs',
      md: 'w-7 h-7 text-sm',
      lg: 'w-9 h-9 text-base',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex gap-1',
          direction === 'vertical' ? 'flex-col' : 'flex-row',
          className
        )}
        role="img"
        aria-label={activeRating ? `EPC Rating Scale, current rating: ${activeRating}` : 'EPC Rating Scale'}
        {...props}
      >
        {ratings.map((rating) => {
          const colors = epcColors[rating];
          const isActive = activeRating === rating;

          return (
            <span
              key={rating}
              className={cn(
                'inline-flex items-center justify-center rounded font-bold',
                'transition-all duration-200',
                sizeStyles[size],
                isActive && 'ring-2 ring-offset-1 ring-neutral-900 scale-110',
                !isActive && activeRating && 'opacity-40'
              )}
              style={{
                backgroundColor: colors.bg,
                color: colors.text,
              }}
            >
              {rating}
            </span>
          );
        })}
      </div>
    );
  }
);

EPCRatingScale.displayName = 'EPCRatingScale';

export { EPCRatingBadge, EPCRatingScale };
