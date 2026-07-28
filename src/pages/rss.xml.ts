import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE, canonicalPath } from '../lib/site';

export async function GET(context: APIContext) {
  const tools = await getCollection('tools');
  const items = tools
    .sort((a, b) => +b.data.added - +a.data.added)
    .map((t) => ({
      title: t.data.name,
      description: t.data.description,
      link: canonicalPath(`/tools/${t.id}`),
      pubDate: t.data.added,
      categories: [t.data.category, ...t.data.tags],
    }));

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items,
    customData: `<language>en-us</language>`,
  });
}
