import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';
import type { HTMLAttributes, ReactNode } from 'react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: ReactNode;
}

const variantConfig = {
  info: {
    containerClass: 'bg-primary-50 border-primary-200 text-primary-800',
    iconClass: 'text-primary-600',
    icon: Info,
  },
  success: {
    containerClass: 'bg-success-50 border-success-100 text-success-600',
    iconClass: 'text-success-500',
    icon: CheckCircle,
  },
  warning: {
    containerClass: 'bg-warning-50 border-warning-100 text-warning-600',
    iconClass: 'text-warning-500',
    icon: AlertTriangle,
  },
  danger: {
    containerClass: 'bg-danger-50 border-danger-100 text-danger-600',
    iconClass: 'text-danger-500',
    icon: AlertCircle,
  },
};

export function Alert({
  children,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  icon,
  className,
  ...props
}: AlertProps) {
  const config = variantConfig[variant];
  const IconComponent = config.icon;

  return (
    <div
      role="alert"
      className={cn(
        'relative flex gap-3 rounded-lg border p-4',
        config.containerClass,
        className
      )}
      {...props}
    >
      <div className={cn('flex-shrink-0', config.iconClass)}>
        {icon || <IconComponent className="h-5 w-5" aria-hidden="true" />}
      </div>
      <div className="flex-1">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <div className="text-sm">{children}</div>
      </div>
      {dismissible && onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className={cn(
            'flex-shrink-0 rounded p-1 transition-colors hover:bg-black/5',
            config.iconClass
          )}
          aria-label="Dismiss alert"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default Alert;
