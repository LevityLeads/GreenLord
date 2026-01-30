'use client';

import { useState } from 'react';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Newsletter signup form component - Client component for form handling
 * In production, this would integrate with an email service like Mailchimp, ConvertKit, etc.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      // Simulate API call - in production, this would call a real API endpoint
      // For MVP, we store in localStorage to demonstrate functionality
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Store subscription in localStorage for MVP demo purposes
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (subscribers.includes(email)) {
        setStatus('error');
        setErrorMessage('This email is already subscribed');
        return;
      }

      subscribers.push(email);
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
      localStorage.setItem('newsletter_subscribed_at', new Date().toISOString());

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="mt-8 lg:mt-0">
        <div className="flex items-start gap-3 rounded-lg bg-success-50 p-4 border border-success-200">
          <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="text-sm font-semibold text-success-800">
              Successfully subscribed!
            </h3>
            <p className="text-sm text-success-700 mt-1">
              Thank you for subscribing. You'll receive the latest EPC regulation updates and compliance guidance.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="text-sm text-success-700 underline hover:text-success-800 mt-2"
            >
              Subscribe another email
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            disabled={status === 'loading'}
            placeholder="Enter your email"
            className={cn(
              'w-full px-4 py-2.5 text-sm',
              'bg-white border rounded-lg',
              'text-neutral-900 placeholder:text-neutral-400',
              'transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              status === 'error'
                ? 'border-danger-400 hover:border-danger-500'
                : 'border-neutral-300 hover:border-neutral-400',
              status === 'loading' && 'opacity-60 cursor-not-allowed'
            )}
            aria-invalid={status === 'error'}
            aria-describedby={status === 'error' ? 'email-error' : undefined}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            'px-5 py-2.5 text-sm font-semibold',
            'bg-primary-700 text-white rounded-lg',
            'transition-colors duration-150',
            'hover:bg-primary-800',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
            'whitespace-nowrap',
            'flex items-center justify-center gap-2',
            status === 'loading' && 'opacity-80 cursor-not-allowed'
          )}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Subscribing...
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
      {status === 'error' && (
        <div
          id="email-error"
          className="flex items-center gap-2 mt-2 text-sm text-danger-600"
          role="alert"
        >
          <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          {errorMessage}
        </div>
      )}
      <p className="mt-3 text-xs text-neutral-500">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
