'use client';

import { cn } from '@/lib/utils';

/**
 * Newsletter signup form component - Client component for form handling
 */
export function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter signup functionality would go here
  };

  return (
    <div className="mt-8 lg:mt-0">
      <h3 className="text-sm font-semibold text-neutral-900 tracking-wide uppercase mb-4">
        Stay Updated
      </h3>
      <p className="text-sm text-neutral-600 mb-4">
        Get the latest EPC regulation updates and compliance guidance delivered to your inbox.
      </p>
      <form
        className="flex flex-col sm:flex-row gap-3"
        onSubmit={handleSubmit}
        aria-label="Newsletter signup form"
      >
        <div className="flex-1">
          <label htmlFor="footer-email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="footer-email"
            name="email"
            autoComplete="email"
            required
            placeholder="Enter your email"
            className={cn(
              'w-full px-4 py-2.5 text-sm',
              'bg-white border border-neutral-300 rounded-lg',
              'text-neutral-900 placeholder:text-neutral-400',
              'transition-colors duration-150',
              'hover:border-neutral-400',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
            )}
          />
        </div>
        <button
          type="submit"
          className={cn(
            'px-5 py-2.5 text-sm font-semibold',
            'bg-primary-700 text-white rounded-lg',
            'transition-colors duration-150',
            'hover:bg-primary-800',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
            'whitespace-nowrap'
          )}
        >
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-xs text-neutral-500">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
