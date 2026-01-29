import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the card should have a hover effect */
  hoverable?: boolean;
  /** Whether to remove padding from the card body */
  noPadding?: boolean;
  /** Card variant style */
  variant?: 'default' | 'outlined' | 'elevated' | 'highlighted';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Render as different element */
  as?: 'div' | 'article' | 'section';
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const variantClasses = {
  default: 'bg-white border border-neutral-200 shadow-sm',
  outlined: 'bg-white border-2 border-neutral-300',
  elevated: 'bg-white border border-neutral-200 shadow-lg',
  highlighted: 'bg-primary-50 border border-primary-200',
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      hoverable = false,
      noPadding = false,
      variant = 'default',
      padding = 'md',
      as: Component = 'div',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(
          'rounded-xl',
          'transition-all duration-200 ease-in-out',
          variantClasses[variant],
          hoverable && 'hover:shadow-md hover:border-neutral-300 cursor-pointer',
          noPadding ? '' : paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title of the card */
  title?: string;
  /** Subtitle or description */
  subtitle?: string;
  /** Action element (e.g., button, icon) to display on the right */
  action?: React.ReactNode;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, subtitle, action, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-start justify-between gap-4',
          'pb-4 mb-4 border-b border-neutral-100',
          className
        )}
        {...props}
      >
        <div className="flex-1 min-w-0">
          {title && (
            <h3 className="text-lg font-semibold text-primary-800 leading-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>
          )}
          {children}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Component = 'h3', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('text-lg font-semibold text-primary-800', className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

CardTitle.displayName = 'CardTitle';

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('mt-1 text-sm text-neutral-600', className)} {...props}>
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'CardDescription';

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('text-neutral-700', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

// Alias for CardBody for compatibility
const CardContent = CardBody;

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Align footer content */
  align?: 'left' | 'center' | 'right' | 'between';
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, align = 'right', children, ...props }, ref) => {
    const alignStyles = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
      between: 'justify-between',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-3',
          'pt-4 mt-4 border-t border-neutral-100',
          alignStyles[align],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardBody, CardContent, CardFooter };
export default Card;
