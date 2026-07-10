import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One entry = one local-first and/or self-hosted tool. Body (markdown) is the
// long-form writeup rendered on the tool's detail page. Frontmatter drives cards,
// filtering, taxonomy pages, and structured data.
const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    // Category slug — must match one in src/lib/categories.ts.
    category: z.string(),
    tags: z.array(z.string()).default([]),
    // A tool can be local-first, self-hosted, or both. At least one required.
    models: z.array(z.enum(['local-first', 'self-hosted'])).min(1),
    license: z.string(),
    openSource: z.boolean().default(true),
    pricing: z.enum(['free', 'freemium', 'paid']).default('free'),
    platforms: z.array(z.string()).default([]),
    language: z.string().optional(),
    website: z.string().url(),
    repo: z.string().url().optional(),
    docs: z.string().url().optional(),
    // Manually-snapshotted GitHub stars (optional; for "popular" sorting/labels).
    stars: z.number().optional(),
    // SaaS products this replaces — powers "self-hosted alternative to X" SEO.
    alternativeTo: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    added: z.coerce.date(),
  }),
});

export const collections = { tools };
