import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';
import { Container } from './Container';
import { NewsletterForm } from './NewsletterForm';

interface FooterProps {
  className?: string;
}

interface FooterLinkColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

/**
 * Footer link column component
 */
function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-neutral-900 tracking-wide uppercase mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                'text-sm text-neutral-600',
                'transition-colors duration-150',
                'hover:text-primary-600',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                'rounded'
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


/**
 * Site footer component.
 * Features:
 * - Logo and tagline
 * - Four-column link layout on desktop (Regulations, Property Guides, Tools, Resources)
 * - Newsletter signup form
 * - Copyright notice with last update date
 */
export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn('bg-neutral-50 border-t border-neutral-200', className)}
      role="contentinfo"
    >
      <Container>
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Logo and tagline - spans 2 columns on desktop */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className={cn(
                  'inline-flex items-center gap-2',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                  'rounded-md'
                )}
                aria-label={`${SITE_CONFIG.name} - Home`}
              >
                {/* Logo icon */}
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3L4 9V21H9V14H15V21H20V9L12 3Z"
                      fill="currentColor"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M12 3L4 9V21H9V14H15V21H20V9L12 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 7C12 7 10 9 10 11C10 12.1 10.9 13 12 13C13.1 13 14 12.1 14 11C14 9 12 7 12 7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Logo text */}
                <span className="text-xl font-bold text-primary-800">
                  {SITE_CONFIG.name}
                </span>
              </Link>

              <p className="mt-4 text-sm text-neutral-600 max-w-xs">
                {SITE_CONFIG.tagline}. Your authoritative resource for navigating
                UK EPC compliance requirements.
              </p>

              {/* Social links placeholder */}
              <div className="mt-6 flex gap-4">
                <a
                  href="https://twitter.com/greenlord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'text-neutral-400 hover:text-neutral-600',
                    'transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                    'rounded'
                  )}
                  aria-label="Follow us on Twitter"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/greenlord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'text-neutral-400 hover:text-neutral-600',
                    'transition-colors duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                    'rounded'
                  )}
                  aria-label="Follow us on LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Link columns - 5 columns on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:col-span-4">
              <FooterLinkColumn title="Regulations" links={FOOTER_LINKS.regulations} />
              <FooterLinkColumn title="Property Guides" links={FOOTER_LINKS.propertyGuides} />
              <FooterLinkColumn title="Costs & Funding" links={FOOTER_LINKS.costsAndFunding} />
              <FooterLinkColumn title="Tools" links={FOOTER_LINKS.tools} />
              <FooterLinkColumn title="Resources" links={FOOTER_LINKS.resources} />
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="py-6 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-neutral-500">
              <span>Last content update: January 2026</span>
              <span className="hidden sm:inline">|</span>
              <Link
                href="/privacy"
                className={cn(
                  'hover:text-primary-600 transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                  'rounded'
                )}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className={cn(
                  'hover:text-primary-600 transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                  'rounded'
                )}
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
