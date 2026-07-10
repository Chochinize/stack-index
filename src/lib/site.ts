// Central site metadata. Keep the canonical URL in sync with astro.config.mjs `site`.
export const SITE = {
  name: 'The Stack Index',
  title: 'The Local-First & Self-Hosted Stack Index',
  tagline: 'A curated directory of local-first and self-hosted software.',
  description:
    'The Stack Index is a curated, no-nonsense directory of local-first and self-hosted software — own your data, run it yourself, keep it offline. Browse by category, license, platform, and the SaaS it replaces.',
  url: 'https://localfirststack.com',
  author: 'The Stack Index',
  locale: 'en',
  // Update when a domain + social handles are attached.
  social: {
    github: 'https://github.com/Chochinize',
  },
} as const;

export const NAV = [
  { href: '/tools', label: 'All tools' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About' },
  { href: '/submit', label: 'Submit a tool' },
] as const;
