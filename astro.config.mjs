// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` is the canonical base URL — it feeds sitemap.xml, RSS, canonical
// tags, and Open Graph URLs. It's a placeholder until a domain is purchased +
// attached (see the parked "domain purchase" task). Change this one value and
// rebuild when the real domain is live.
export default defineConfig({
  site: 'https://localfirststack.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
