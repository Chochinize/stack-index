import type { Tool } from './tools';

// "Self-hosted alternative to {SaaS}" is the highest-intent query pattern for this
// site. We derive one landing page per SaaS product referenced by >= MIN_TOOLS tools,
// listing the local-first / self-hosted options that replace it. Pages are only made
// where there's a real choice to present (avoids thin single-item doorway pages).
export const MIN_TOOLS = 2;

export type AltGroup = {
  slug: string;
  name: string;
  tools: Tool[];
};

/** SaaS name -> URL slug. Drops parentheticals like "Empower (Personal Capital)". */
export function slugifySaas(name: string): string {
  return name
    .toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Group tools by the SaaS they replace, keeping only groups with a real set of options. */
export function buildAlternatives(tools: Tool[], min = MIN_TOOLS): AltGroup[] {
  const map = new Map<string, AltGroup>();
  for (const t of tools) {
    for (const saas of t.data.alternativeTo ?? []) {
      const slug = slugifySaas(saas);
      if (!slug) continue;
      let g = map.get(slug);
      if (!g) {
        g = { slug, name: saas, tools: [] };
        map.set(slug, g);
      }
      g.tools.push(t);
    }
  }
  return [...map.values()]
    .filter((g) => g.tools.length >= min)
    .sort((a, b) => b.tools.length - a.tools.length || a.name.localeCompare(b.name));
}

/** The set of SaaS slugs that actually have a page (for safe linking from tool pages). */
export function alternativeSlugSet(tools: Tool[], min = MIN_TOOLS): Set<string> {
  return new Set(buildAlternatives(tools, min).map((g) => g.slug));
}
