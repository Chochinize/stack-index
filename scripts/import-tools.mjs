#!/usr/bin/env node
// Tool importer. Reads a "batch" module (an array of curated entries) and, for each
// tool with a GitHub repo, enriches it with LIVE facts from the GitHub API — stars,
// license (SPDX), primary language, homepage, and maintenance signals — then writes a
// validated content entry to src/content/tools/<slug>.md.
//
// Design intent (SEO-safe): FACTS are imported automatically (not copyrightable); the
// tagline/description/body is ORIGINAL prose supplied in the batch (unique text ranks,
// and sidesteps the source lists' share-alike licensing). Quality gates skip archived,
// low-star, and already-present tools so we never mass-dump thin pages.
//
//   node scripts/import-tools.mjs scripts/batches/batch-01.mjs [--write]
//
// Without --write it's a dry run (fetches + reports, writes nothing).

import { readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const MIN_STARS = 250;          // quality floor
const STALE_MONTHS = 24;        // warn if no push in this long
const CONTENT_DIR = 'src/content/tools';
const TODAY = new Date().toISOString().slice(0, 10);

const batchPath = process.argv[2];
const WRITE = process.argv.includes('--write');
if (!batchPath) {
  console.error('usage: node scripts/import-tools.mjs <batch.mjs> [--write]');
  process.exit(1);
}

const token = process.env.GITHUB_TOKEN || '';

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function ghRepo(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'stack-index-importer',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) return { error: `${res.status}` };
  const d = await res.json();
  const months = d.pushed_at ? (Date.now() - Date.parse(d.pushed_at)) / (1000 * 60 * 60 * 24 * 30) : 999;
  return {
    stars: d.stargazers_count,
    language: d.language || undefined,
    spdx: d.license?.spdx_id && d.license.spdx_id !== 'NOASSERTION' ? d.license.spdx_id : undefined,
    homepage: d.homepage || undefined,
    archived: !!d.archived,
    staleMonths: Math.round(months),
  };
}

// Minimal YAML scalar/array serializer for our known frontmatter fields.
function q(s) { return `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`; }
function arr(a) { return `[${(a || []).map(q).join(', ')}]`; }

function frontmatter(d) {
  const lines = [
    `name: ${q(d.name)}`,
    `tagline: ${q(d.tagline)}`,
    `description: ${q(d.description)}`,
    `category: ${q(d.category)}`,
    `tags: ${arr(d.tags)}`,
    `models: ${arr(d.models)}`,
    `license: ${q(d.license)}`,
    `openSource: ${d.openSource}`,
    `pricing: ${q(d.pricing)}`,
    `platforms: ${arr(d.platforms)}`,
    ...(d.language ? [`language: ${q(d.language)}`] : []),
    `website: ${q(d.website)}`,
    ...(d.repo ? [`repo: ${q(d.repo)}`] : []),
    ...(d.docs ? [`docs: ${q(d.docs)}`] : []),
    ...(d.stars != null ? [`stars: ${d.stars}`] : []),
    `alternativeTo: ${arr(d.alternativeTo)}`,
    `featured: ${!!d.featured}`,
    `added: ${d.added}`,
  ];
  return `---\n${lines.join('\n')}\n---\n`;
}

const OSS_NON_OPEN = /source-available|proprietary|bsl|business source/i;

const batch = (await import(pathToFileURL(path.resolve(batchPath)).href)).default;
let written = 0, skipped = 0;
const rows = [];

for (const e of batch) {
  const file = path.join(CONTENT_DIR, `${e.slug}.md`);
  if (await fileExists(file)) { rows.push([e.slug, 'SKIP', 'already exists']); skipped++; continue; }

  let gh = {};
  if (e.repo) {
    gh = await ghRepo(e.repo);
    if (gh.error) { rows.push([e.slug, 'SKIP', `github ${gh.error}`]); skipped++; continue; }
    if (gh.archived) { rows.push([e.slug, 'SKIP', 'archived upstream']); skipped++; continue; }
    if (gh.stars != null && gh.stars < MIN_STARS) { rows.push([e.slug, 'SKIP', `stars ${gh.stars} < ${MIN_STARS}`]); skipped++; continue; }
  }

  const license = e.license || gh.spdx || 'Unknown';
  const data = {
    name: e.name,
    tagline: e.tagline,
    description: e.description,
    category: e.category,
    tags: e.tags || [],
    models: e.models,
    license,
    openSource: e.openSource ?? !OSS_NON_OPEN.test(license),
    pricing: e.pricing || 'free',
    platforms: e.platforms || ['Docker', 'Self-host'],
    language: e.language || gh.language,
    website: e.website || gh.homepage || (e.repo ? `https://github.com/${e.repo}` : undefined),
    repo: e.repo ? `https://github.com/${e.repo}` : undefined,
    docs: e.docs,
    stars: e.stars ?? gh.stars,
    alternativeTo: e.alternativeTo || [],
    featured: e.featured,
    added: e.added || TODAY,
  };

  const staleNote = gh.staleMonths > STALE_MONTHS ? ` (STALE ${gh.staleMonths}mo)` : '';
  const out = frontmatter(data) + '\n' + e.body.trim() + '\n';
  if (WRITE) await writeFile(file, out, 'utf8');
  rows.push([e.slug, WRITE ? 'WRITE' : 'DRY', `${data.license} · ★${data.stars ?? '-'} · ${data.category}${staleNote}`]);
  written++;
}

console.log(`\nbatch: ${batchPath}   mode: ${WRITE ? 'WRITE' : 'DRY-RUN'}   token: ${token ? 'yes' : 'no'}\n`);
for (const [slug, status, note] of rows) console.log(`  ${status.padEnd(5)} ${slug.padEnd(22)} ${note}`);
console.log(`\n${written} to write, ${skipped} skipped.\n`);
