import type { CollectionEntry } from 'astro:content';

export type Tool = CollectionEntry<'tools'>;
export type Model = 'local-first' | 'self-hosted';

export const MODEL_LABEL: Record<Model, string> = {
  'local-first': 'Local-first',
  'self-hosted': 'Self-hosted',
};

/** First letter for the generated avatar tile. */
export function initial(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

/** Deterministic two-stop gradient derived from a name (stable avatar per tool). */
export function avatarStyle(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360;
  const h2 = (h + 42) % 360;
  return `background:linear-gradient(135deg,hsl(${h} 58% 46%),hsl(${h2} 60% 38%));`;
}

/** Newest first, featured floated up. */
export function sortTools(tools: Tool[]): Tool[] {
  return [...tools].sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return +b.data.added - +a.data.added;
  });
}

export function countByCategory(tools: Tool[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const t of tools) m.set(t.data.category, (m.get(t.data.category) ?? 0) + 1);
  return m;
}
