// Canonical category taxonomy. Each tool's `category` frontmatter must reference
// one of these slugs. Descriptions are unique, keyword-rich intro copy so every
// category page has original text to rank on (programmatic SEO).
export type Category = {
  slug: string;
  name: string;
  /** One-line summary used on cards and meta descriptions. */
  blurb: string;
  /** Longer intro rendered at the top of the category page. */
  intro: string;
  icon: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: 'notes-knowledge',
    name: 'Notes & Knowledge',
    blurb: 'Local-first note-taking and personal knowledge bases.',
    intro:
      'Own your notes. These local-first and self-hosted note-taking apps and personal knowledge bases keep your writing in open formats on your own devices — no lock-in, works offline, syncs on your terms.',
    icon: '📝',
  },
  {
    slug: 'files-sync-backup',
    name: 'Files, Sync & Backup',
    blurb: 'Self-hosted file sync, storage, and backup you control.',
    intro:
      'Replace Dropbox and Google Drive. These self-hosted file sync, cloud storage, and backup tools put your files on hardware you own, with end-to-end control over where your data lives.',
    icon: '🗂️',
  },
  {
    slug: 'media-photos',
    name: 'Media & Photos',
    blurb: 'Self-hosted photo libraries and media servers.',
    intro:
      'Your photos and media, your server. Self-hosted photo management and media streaming servers give you a private alternative to Google Photos, iCloud, and the big streaming platforms.',
    icon: '🎞️',
  },
  {
    slug: 'productivity-tasks',
    name: 'Productivity & Tasks',
    blurb: 'Local-first tasks, calendars, and personal productivity.',
    intro:
      'Plan without the cloud watching. Local-first task managers, calendars, and productivity apps that keep your plans private and available offline.',
    icon: '✅',
  },
  {
    slug: 'collaboration',
    name: 'Communication & Collaboration',
    blurb: 'Self-hosted chat, docs, and team collaboration.',
    intro:
      'Collaborate on your own terms. Self-hosted chat, real-time docs, and team collaboration platforms that replace Slack, Notion, and Google Workspace without handing over your conversations.',
    icon: '💬',
  },
  {
    slug: 'passwords-security',
    name: 'Passwords & Security',
    blurb: 'Self-hosted password managers and secrets vaults.',
    intro:
      'Hold your own keys. Self-hosted password managers and secrets vaults keep credentials encrypted on infrastructure you control — a private alternative to hosted password services.',
    icon: '🔐',
  },
  {
    slug: 'home-automation',
    name: 'Home & Automation',
    blurb: 'Local-first smart home and automation hubs.',
    intro:
      'A smart home that stays home. Local-first home automation hubs run entirely on your network, keeping sensors, cameras, and routines working even when the internet is down.',
    icon: '🏠',
  },
  {
    slug: 'read-later-bookmarks',
    name: 'Read-Later & Bookmarks',
    blurb: 'Self-hosted read-it-later and bookmark managers.',
    intro:
      'Save the web to your shelf, not theirs. Self-hosted read-it-later apps and bookmark managers archive articles and links on your own server — a durable alternative to Pocket and Instapaper.',
    icon: '🔖',
  },
  {
    slug: 'finance',
    name: 'Finance & Budgeting',
    blurb: 'Local-first personal finance and budgeting.',
    intro:
      'Your money, off the grid. Local-first budgeting and personal finance apps keep your transactions and net worth on your own devices instead of a fintech server.',
    icon: '💰',
  },
  {
    slug: 'infra-devops',
    name: 'Self-Hosting Infrastructure',
    blurb: 'The infra that powers a self-hosted stack.',
    intro:
      'The plumbing of self-hosting. Reverse proxies, container managers, dashboards, and automation that hold a homelab together and make running your own services sustainable.',
    icon: '🧰',
  },
];

const BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));

export function getCategory(slug: string): Category | undefined {
  return BY_SLUG.get(slug);
}

export function categoryName(slug: string): string {
  return BY_SLUG.get(slug)?.name ?? slug;
}
