// Batch 03 — depth + UNLOCK new /alternatives/{x} pages by giving single-target
// SaaS a second self-hosted option. Verified count-1 targets this batch pushes to
// 2 (and thus unlocks a page): Google Keep, Raindrop.io, Pinboard, Kindle, Spotify,
// Apple Music, Blue Iris, Ring, Nest, Dashlane, Empower (Personal Capital), Sharesight,
// and the brand-new Google Docs page (HedgeDoc + CryptPad). Facts (stars/license/lang)
// come live from GitHub; tagline/description/body are original prose (SEO-safe).
export default [
  // ---- Notes & Knowledge ----
  {
    slug: 'trilium', name: 'Trilium Notes', repo: 'TriliumNext/Trilium',
    category: 'notes-knowledge', models: ['self-hosted', 'local-first'], pricing: 'free',
    tags: ['notes', 'knowledge-base', 'wiki', 'hierarchical'], platforms: ['Docker', 'Windows', 'macOS', 'Linux', 'Web'],
    website: 'https://triliumnext.github.io/Docs/',
    alternativeTo: ['OneNote', 'Evernote', 'Notion'],
    tagline: 'A hierarchical personal knowledge base for big, tangled note collections.',
    description: 'Trilium Notes is a self-hosted, hierarchical personal knowledge base built for large tangled note trees — a private, own-your-data alternative to OneNote and Evernote with scripting and relation maps.',
    body: `Trilium organizes notes into a deep tree where a single note can live in several places at once, so a sprawling knowledge base stays navigable instead of turning into a flat pile of files. Rich text, code notes, mind maps, and relation maps all live side by side.

Run it purely as a desktop app for local-first use, or pair the desktop client with a self-hosted server to sync across machines while your data stays on hardware you own. TriliumNext is the actively maintained continuation of the original project.

**Good to know**
- Notes can be "cloned" into multiple places in the tree.
- Built-in scripting and attributes for power users.
- Desktop-only or desktop + self-hosted sync server.`,
  },
  {
    slug: 'memos', name: 'Memos', repo: 'usememos/memos',
    category: 'notes-knowledge', models: ['self-hosted'], pricing: 'free',
    tags: ['notes', 'microblog', 'markdown', 'lightweight'], platforms: ['Docker', 'Linux', 'Web'],
    website: 'https://usememos.com',
    alternativeTo: ['Google Keep', 'Flomo', 'Standard Notes'],
    tagline: 'A lightweight, self-hosted place to jot quick notes and thoughts.',
    description: 'Memos is a lightweight, self-hosted note-taking service for quick markdown snippets and a private microblog — an own-your-data alternative to Google Keep that keeps every jotting on your own server.',
    body: `Memos is built around the fast capture of small things: a thought, a link, a to-do, a snippet of markdown. Notes stream in reverse-chronological order like a private microblog, with tags and full-text search to find them again later.

It's a single lightweight Go binary backed by SQLite, so it starts in seconds and sips resources — an easy, private replacement for scribbling into Google Keep.

**Good to know**
- Single Go binary; SQLite by default.
- Markdown, tags, and a clean public/private sharing model.
- REST API and browser extensions for fast capture.`,
  },

  // ---- Read-Later & Bookmarks ----
  {
    slug: 'karakeep', name: 'Karakeep', repo: 'karakeep-app/karakeep',
    category: 'read-later-bookmarks', models: ['self-hosted'], pricing: 'free',
    tags: ['bookmarks', 'read-later', 'ai', 'archive'], platforms: ['Docker', 'Web'],
    website: 'https://karakeep.app',
    alternativeTo: ['Raindrop.io', 'Pocket', 'Instapaper'],
    tagline: 'A self-hosted "bookmark everything" app with AI-powered tagging.',
    description: 'Karakeep is a self-hosted bookmark-everything app that hoards links, notes, and images and auto-tags them with AI — a private, own-your-data alternative to Raindrop.io and Pocket.',
    body: `Karakeep (formerly Hoarder) lets you throw links, articles, notes, and images into one searchable pile, then quietly organizes them for you: it archives a full copy of each page and can auto-tag and summarize with a local or hosted LLM.

Everything is full-text searchable and stored on your own server, so your reading list and its contents never depend on a third party staying in business.

**Good to know**
- Full-page archival so links don't rot.
- Optional AI auto-tagging (works with local models).
- Mobile apps and browser extensions for quick saving.`,
  },
  {
    slug: 'shiori', name: 'Shiori', repo: 'go-shiori/shiori',
    category: 'read-later-bookmarks', models: ['self-hosted'], pricing: 'free',
    tags: ['bookmarks', 'read-later', 'minimal', 'archive'], platforms: ['Docker', 'Linux', 'Web'],
    website: 'https://github.com/go-shiori/shiori',
    alternativeTo: ['Pinboard', 'Pocket'],
    tagline: 'A simple, single-binary bookmark manager and archiver.',
    description: 'Shiori is a simple self-hosted bookmark manager in a single Go binary that saves and archives pages for offline reading — a lightweight, private alternative to Pinboard and Pocket.',
    body: `Shiori keeps bookmarking uncomplicated: save a URL, and it grabs a readable, offline copy so the content survives even if the original page disappears. It runs equally well as a CLI tool or a small web app.

As a single Go binary backed by SQLite, it's trivial to deploy on a Pi or a container and keep your links entirely under your own control.

**Good to know**
- Single binary; usable as CLI or web UI.
- Archives a readable offline copy of each page.
- Import from Pocket and other managers.`,
  },

  // ---- Media & Photos ----
  {
    slug: 'calibre-web', name: 'Calibre-Web', repo: 'janeczku/calibre-web',
    category: 'media-photos', models: ['self-hosted'], pricing: 'free',
    tags: ['ebooks', 'library', 'reading', 'opds'], platforms: ['Docker', 'Linux', 'Web'],
    website: 'https://github.com/janeczku/calibre-web',
    alternativeTo: ['Kindle', 'Google Play Books'],
    tagline: 'A clean web library for your Calibre ebook collection.',
    description: 'Calibre-Web is a self-hosted web app that serves your Calibre ebook library in the browser and to e-readers — a private, own-your-shelf alternative to Kindle and Google Play Books.',
    body: `Calibre-Web puts a polished, browsable front end on an existing Calibre library: cover grids, metadata, full-text search, and an in-browser reader for EPUB, PDF, and comics. Send books straight to a Kindle or pull them over OPDS into any reading app.

Your whole collection lives on your own server, so the books you own stay yours — no DRM, no store account, no risk of a title vanishing from your device.

**Good to know**
- Reads an existing Calibre metadata.db.
- In-browser reader plus OPDS + send-to-Kindle.
- Per-user accounts and reading progress sync.`,
  },
  {
    slug: 'koel', name: 'Koel', repo: 'koel/koel',
    category: 'media-photos', models: ['self-hosted'], pricing: 'free',
    tags: ['music', 'streaming', 'audio', 'library'], platforms: ['Docker', 'Linux', 'Web'],
    website: 'https://koel.dev',
    alternativeTo: ['Spotify', 'Apple Music'],
    tagline: 'A sleek personal music streaming server for the web.',
    description: 'Koel is a self-hosted personal music streaming server with a polished web player — stream your own library anywhere, a private alternative to Spotify and Apple Music.',
    body: `Koel scans your music folder and turns it into a fast, good-looking streaming service you can reach from any browser: playlists, smart playlists, search, and now-playing scrobbling included.

Because it streams the files you already own from your own server, there's no subscription, no shuffling around a catalog, and nothing tracking what you listen to.

**Good to know**
- Web player with playlists and smart playlists.
- Optional mobile apps and Last.fm scrobbling.
- Streams your existing library — you own the files.`,
  },

  // ---- Communication & Collaboration ----
  {
    slug: 'jitsi-meet', name: 'Jitsi Meet', repo: 'jitsi/jitsi-meet',
    category: 'collaboration', models: ['self-hosted'], pricing: 'free',
    tags: ['video', 'conferencing', 'webrtc', 'meetings'], platforms: ['Docker', 'Linux', 'Web'],
    website: 'https://jitsi.org',
    alternativeTo: ['Zoom', 'Google Meet', 'Microsoft Teams'],
    tagline: 'Self-hosted, browser-based video conferencing with no account needed.',
    description: 'Jitsi Meet is a self-hosted, browser-based video conferencing platform that needs no accounts or installs — a private, own-your-server alternative to Zoom and Google Meet.',
    body: `Jitsi Meet runs full-featured video calls straight in the browser over WebRTC: screen sharing, chat, breakout rooms, recording, and dial-in, all without asking participants to create an account or install anything.

Host it yourself and every meeting runs on infrastructure you control, so sensitive calls never traverse a third-party conferencing cloud.

**Good to know**
- No account or download required for guests.
- Screen share, breakout rooms, recording, live streaming.
- Scales from a single container to a large SFU cluster.`,
  },
  {
    slug: 'hedgedoc', name: 'HedgeDoc', repo: 'hedgedoc/hedgedoc',
    category: 'collaboration', models: ['self-hosted'], pricing: 'free',
    tags: ['markdown', 'realtime', 'docs', 'collaboration'], platforms: ['Docker', 'Linux', 'Web'],
    website: 'https://hedgedoc.org',
    alternativeTo: ['Google Docs', 'HackMD', 'Notion'],
    tagline: 'Real-time collaborative markdown notes in the browser.',
    description: 'HedgeDoc is a self-hosted platform for real-time collaborative markdown editing — a private, own-your-server alternative to Google Docs and HackMD for team notes and documentation.',
    body: `HedgeDoc lets multiple people edit the same markdown document live, with a synchronized preview, presentations, diagrams, and shareable links. It's ideal for meeting notes, docs, and READMEs written together in real time.

Self-hosting keeps collaborative drafts — often the most sensitive stage of a document — on your own server instead of a shared cloud editor.

**Good to know**
- Live multi-cursor markdown editing.
- Slide mode, diagrams (Mermaid), and math support.
- Flexible auth: LDAP, OAuth, and more.`,
  },
  {
    slug: 'cryptpad', name: 'CryptPad', repo: 'cryptpad/cryptpad',
    category: 'collaboration', models: ['self-hosted'], pricing: 'free',
    tags: ['office', 'encrypted', 'realtime', 'privacy'], platforms: ['Docker', 'Linux', 'Web'],
    website: 'https://cryptpad.org',
    alternativeTo: ['Google Docs', 'Google Drive', 'Microsoft Office'],
    tagline: 'An end-to-end encrypted collaborative office suite.',
    description: 'CryptPad is a self-hosted, end-to-end encrypted office suite for documents, sheets, and slides — a zero-knowledge alternative to Google Docs and Google Drive where even the server cannot read your files.',
    body: `CryptPad offers a full collaborative office suite — rich text, spreadsheets, slides, kanban, and forms — with encryption that happens in your browser. The server stores only ciphertext, so a self-hosted CryptPad genuinely can't read what your team is writing.

That zero-knowledge design makes it a strong choice when confidentiality matters more than raw feature parity with the big cloud suites.

**Good to know**
- End-to-end encrypted; the server sees only ciphertext.
- Docs, sheets, slides, kanban, whiteboard, and forms.
- Shareable encrypted links with per-link permissions.`,
  },

  // ---- Home & Automation ----
  {
    slug: 'node-red', name: 'Node-RED', repo: 'node-red/node-red',
    category: 'home-automation', models: ['self-hosted'], pricing: 'free',
    tags: ['automation', 'flows', 'iot', 'low-code'], platforms: ['Docker', 'Linux', 'Raspberry Pi'],
    website: 'https://nodered.org',
    alternativeTo: ['IFTTT', 'Zapier'],
    tagline: 'Wire together devices, APIs, and services with visual flows.',
    description: 'Node-RED is a self-hosted, flow-based automation tool for wiring devices, APIs, and online services together visually — a local, own-your-logic alternative to IFTTT and Zapier.',
    body: `Node-RED gives you a browser-based canvas where you drag nodes onto flows and connect them to route events between hardware, MQTT, HTTP APIs, and thousands of community add-ons. It's the glue that ties a homelab's services and smart devices together.

Running on your own network means your automation logic — and the data flowing through it — never leaves home, and keeps working when the internet doesn't.

**Good to know**
- Visual flow editor; huge library of community nodes.
- First-class MQTT, HTTP, and IoT support.
- Runs happily on a Raspberry Pi.`,
  },
  {
    slug: 'scrypted', name: 'Scrypted', repo: 'koush/scrypted',
    category: 'home-automation', models: ['self-hosted'], pricing: 'free', license: 'ISC',
    tags: ['cameras', 'nvr', 'homekit', 'video'], platforms: ['Docker', 'Linux', 'Raspberry Pi'],
    website: 'https://www.scrypted.app',
    alternativeTo: ['Blue Iris', 'Ring', 'Nest'],
    tagline: 'A high-performance home video and camera hub with HomeKit support.',
    description: 'Scrypted is a self-hosted camera and NVR hub that unifies cameras across ecosystems and exposes them to HomeKit, Alexa, and Google — a private alternative to Ring, Nest, and Blue Iris.',
    body: `Scrypted pulls cameras from many brands and protocols into one fast hub, then re-exposes them to HomeKit Secure Video, Google Home, and Alexa — with low-latency streaming and local AI object detection.

Because recording and detection run on your own hardware, you get smart camera features without a monthly cloud subscription or footage sitting on someone else's servers.

**Good to know**
- HomeKit Secure Video without paying for a cloud plan.
- Local AI person/vehicle/animal detection.
- Bridges cameras across brands and protocols.`,
  },

  // ---- Finance & Budgeting ----
  {
    slug: 'portfolio-performance', name: 'Portfolio Performance', repo: 'buchen/portfolio',
    category: 'finance', models: ['local-first'], pricing: 'free',
    tags: ['investing', 'portfolio', 'net-worth', 'desktop'], platforms: ['Windows', 'macOS', 'Linux'],
    website: 'https://www.portfolio-performance.info',
    alternativeTo: ['Empower (Personal Capital)', 'Sharesight', 'Quicken'],
    tagline: 'Track your investment portfolio and net worth on your own machine.',
    description: 'Portfolio Performance is a local-first desktop app for tracking investment portfolios, performance, and net worth — a private alternative to Empower (Personal Capital) and Sharesight that keeps your holdings off any server.',
    body: `Portfolio Performance calculates true time- and money-weighted returns across accounts, currencies, and asset classes, with detailed charts for allocation, performance, and net worth over time. Quotes update automatically, but every figure is computed on your own machine.

Because it's a local desktop app with no account, your complete financial picture never touches a fintech server — you just back up the data file.

**Good to know**
- True TTWROR / IRR performance calculations.
- Automatic quote updates for stocks, ETFs, and crypto.
- All data in a local file — nothing uploaded.`,
  },

  // ---- Self-Hosting Infrastructure ----
  {
    slug: 'authentik', name: 'authentik', repo: 'goauthentik/authentik',
    category: 'infra-devops', models: ['self-hosted'], pricing: 'freemium', license: 'MIT',
    tags: ['sso', 'identity', 'oauth', 'saml'], platforms: ['Docker', 'Kubernetes', 'Linux'],
    website: 'https://goauthentik.io',
    alternativeTo: ['Okta', 'Auth0', 'Azure AD'],
    tagline: 'A self-hosted identity provider and single sign-on for your whole stack.',
    description: 'authentik is a self-hosted identity provider offering SSO, OAuth2, SAML, LDAP, and MFA for all your services — a private, own-your-identity alternative to Okta and Auth0.',
    body: `authentik puts a single login in front of everything you run: OAuth2/OIDC, SAML, LDAP, and a forward-auth proxy let you add SSO and multi-factor to apps that have no auth of their own. Flows, policies, and outposts make even complex access rules manageable.

Owning your identity provider means the keys to your entire self-hosted stack stay on your infrastructure rather than a third-party identity cloud.

**Good to know**
- OAuth2/OIDC, SAML, LDAP, and forward-auth in one place.
- MFA, passkeys, and customizable login flows.
- Proxy outposts add SSO to apps with no native auth.`,
  },
  {
    slug: 'beszel', name: 'Beszel', repo: 'henrygd/beszel',
    category: 'infra-devops', models: ['self-hosted'], pricing: 'free',
    tags: ['monitoring', 'metrics', 'servers', 'lightweight'], platforms: ['Docker', 'Linux', 'Raspberry Pi'],
    website: 'https://beszel.dev',
    alternativeTo: ['Netdata', 'Datadog', 'Uptime Robot'],
    tagline: 'A lightweight server monitoring hub with a clean dashboard.',
    description: 'Beszel is a lightweight self-hosted server monitoring platform with historical metrics, Docker stats, and alerts — a simple, own-your-metrics alternative to Netdata and Datadog.',
    body: `Beszel pairs a small hub with tiny agents on each machine to give you CPU, memory, disk, network, and per-container Docker stats in one clean dashboard — with history and alerting, but without the resource appetite of heavier stacks.

It's aimed squarely at homelabs and small fleets: fast to deploy, easy to read, and entirely self-hosted so your telemetry stays yours.

**Good to know**
- Lightweight hub + agent architecture.
- Per-container Docker metrics out of the box.
- Configurable alerts via email, webhooks, and push.`,
  },

  // ---- Passwords & Security ----
  {
    slug: 'passbolt', name: 'Passbolt', repo: 'passbolt/passbolt_api',
    category: 'passwords-security', models: ['self-hosted'], pricing: 'freemium',
    tags: ['passwords', 'team', 'secrets', 'sharing'], platforms: ['Docker', 'Linux', 'Web'],
    website: 'https://www.passbolt.com',
    alternativeTo: ['Dashlane', '1Password', 'LastPass'],
    tagline: 'A self-hosted password manager built for teams.',
    description: 'Passbolt is a self-hosted, end-to-end encrypted password manager designed for teams and sharing — a private, own-your-vault alternative to Dashlane and 1Password for organizations.',
    body: `Passbolt is built around collaboration: OpenPGP end-to-end encryption, fine-grained sharing of individual credentials, groups, and a full audit log make it a natural fit for teams that need to share secrets without emailing them around.

Self-hosting keeps the vault on your own server, and because encryption is anchored to each user's key, the server never sees plaintext passwords.

**Good to know**
- OpenPGP end-to-end encryption per user.
- Granular credential sharing, groups, and audit logs.
- Browser extensions and mobile apps for the team.`,
  },
];
