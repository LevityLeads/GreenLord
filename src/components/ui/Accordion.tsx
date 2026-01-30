'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of accordion items */
  items: AccordionItem[];
  /** Allow multiple items to be open at once */
  allowMultiple?: boolean;
  /** Variant style */
  variant?: 'default' | 'bordered' | 'separated';
}

const Accordion: React.FC<AccordionProps> = ({
  className,
  items,
  allowMultiple = false,
  variant = 'default',
  ...props
}) => {
  // Initialize open items based on defaultOpen property
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    const defaultOpen = new Set<string>();
    items.forEach((item) => {
      if (item.defaultOpen) {
        defaultOpen.add(item.id);
      }
    });
    return defaultOpen;
  });

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newOpenItems = new Set(prev);
      if (newOpenItems.has(itemId)) {
        newOpenItems.delete(itemId);
      } else {
        if (!allowMultiple) {
          newOpenItems.clear();
        }
        newOpenItems.add(itemId);
      }
      return newOpenItems;
    });
  };

  const variantStyles = {
    default: {
      container: 'divide-y divide-neutral-200',
      item: '',
      trigger: 'py-4',
      content: 'pb-4',
    },
    bordered: {
      container: 'border border-neutral-200 rounded-lg divide-y divide-neutral-200',
      item: '',
      trigger: 'px-4 py-4',
      content: 'px-4 pb-4',
    },
    separated: {
      container: 'space-y-3',
      item: 'border border-neutral-200 rounded-lg overflow-hidden',
      trigger: 'px-4 py-4',
      content: 'px-4 pb-4',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={cn(styles.container, className)} {...props}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const triggerId = `accordion-trigger-${item.id}`;
        const contentId = `accordion-content-${item.id}`;

        return (
          <div key={item.id} className={styles.item}>
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleItem(item.id)}
                className={cn(
                  'w-full flex items-center justify-between gap-4 text-left',
                  'font-medium text-neutral-800',
                  'transition-colors duration-200',
                  'hover:text-primary-700',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                  'min-h-[44px]',
                  styles.trigger
                )}
              >
                <span className="flex-1">{item.title}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 flex-shrink-0 text-neutral-500',
                    'transition-transform duration-300 ease-in-out',
                    isOpen && 'rotate-180'
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={contentId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'animate-accordion-down' : 'animate-accordion-up'
              )}
            >
              {isOpen && (
                <div className={cn('text-neutral-600', styles.content)}>
                  {item.content}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.displayName = 'Accordion';

// Single Accordion Item for more flexible composition
export interface AccordionItemComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title of the accordion item */
  title: string;
  /** Whether the item is initially open */
  defaultOpen?: boolean;
  /** Controlled open state */
  isOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (isOpen: boolean) => void;
}

const AccordionItemComponent: React.FC<AccordionItemComponentProps> = ({
  className,
  title,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onOpenChange,
  children,
  ...props
}) => {
  const [internalIsOpen, setInternalIsOpen] = React.useState(defaultOpen);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const uniqueId = React.useId();
  const triggerId = `accordion-trigger-${uniqueId}`;
  const contentId = `accordion-content-${uniqueId}`;

  const toggle = () => {
    if (isControlled) {
      onOpenChange?.(!isOpen);
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div
      className={cn(
        'border border-neutral-200 rounded-lg overflow-hidden',
        className
      )}
      {...props}
    >
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={toggle}
          className={cn(
            'w-full flex items-center justify-between gap-4 text-left',
            'px-4 py-4 font-medium text-neutral-800',
            'transition-colors duration-200',
            'hover:text-primary-700 hover:bg-neutral-50',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset',
            'min-h-[44px]'
          )}
        >
          <span className="flex-1">{title}</span>
          <ChevronDown
            className={cn(
              'h-5 w-5 flex-shrink-0 text-neutral-500',
              'transition-transform duration-300 ease-in-out',
              isOpen && 'rotate-180'
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen}
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out'
        )}
      >
        {isOpen && (
          <div className="px-4 pb-4 text-neutral-600">{children}</div>
        )}
      </div>
    </div>
  );
};

AccordionItemComponent.displayName = 'AccordionItem';

export { Accordion, AccordionItemComponent as AccordionItem };
