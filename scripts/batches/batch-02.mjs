// Batch 02 — chosen to both add depth and UNLOCK new /alternatives/{x} pages by
// giving single-tool SaaS a second option (Feedly, NextDNS, Google Analytics,
// Pushover, Datadog, Trello). License is left to GitHub's SPDX unless overridden.
export default [
  {
    slug: 'miniflux', name: 'Miniflux', repo: 'miniflux/v2',
    category: 'read-later-bookmarks', models: ['self-hosted'], pricing: 'free',
    tags: ['rss', 'feeds', 'reader', 'minimal'], platforms: ['Docker', 'Web'],
    website: 'https://miniflux.app', alternativeTo: ['Feedly', 'Google Reader', 'Inoreader'],
    tagline: 'A minimalist, opinionated self-hosted RSS reader.',
    description: 'Miniflux is a lightweight, no-frills self-hosted RSS reader focused on speed and readability — a distraction-free, private alternative to Feedly and Inoreader.',
    body: `Miniflux is deliberately minimal: a fast, single-binary RSS reader that strips articles to clean, readable text and gets out of your way. No social features, no bloat — just your feeds, on your server.

It exposes a documented API and speaks the Google Reader/Fever protocols, so you can pair it with third-party mobile clients while keeping your reading data private.

**Good to know**
- Single Go binary; tiny footprint.
- Keyboard-driven, readability-focused UI.
- API + Google Reader/Fever compatibility for mobile apps.`,
  },
  {
    slug: 'adguard-home', name: 'AdGuard Home', repo: 'AdguardTeam/AdGuardHome',
    category: 'home-automation', models: ['self-hosted'], pricing: 'free',
    tags: ['dns', 'ad-blocking', 'privacy', 'network'], platforms: ['Docker', 'Linux', 'Raspberry Pi'],
    website: 'https://adguard.com/adguard-home/overview.html', alternativeTo: ['NextDNS', 'Pi-hole'],
    tagline: 'Network-wide ad and tracker blocking with a modern UI.',
    description: 'AdGuard Home is a self-hosted, network-wide DNS filter that blocks ads, trackers, and malicious domains for every device — a local, private alternative to NextDNS.',
    body: `AdGuard Home runs as your network's DNS server and filters out ads, trackers, and malware domains for every connected device, with a polished dashboard, per-client rules, and encrypted DNS (DoH/DoT) built in.

It's a strong, batteries-included option for keeping your DNS — and the record of everywhere your devices connect — on hardware you control.

**Good to know**
- Built-in DNS-over-HTTPS/TLS upstreams.
- Per-client rules and parental controls.
- Clean UI; runs on a Pi or a container.`,
  },
  {
    slug: 'umami', name: 'Umami', repo: 'umami-software/umami',
    category: 'infra-devops', models: ['self-hosted'], pricing: 'free',
    tags: ['analytics', 'privacy', 'web', 'metrics'], platforms: ['Docker', 'Web'],
    website: 'https://umami.is', alternativeTo: ['Google Analytics', 'Plausible'],
    tagline: 'Simple, privacy-friendly web analytics you host yourself.',
    description: 'Umami is a self-hosted, privacy-focused web analytics tool — a lightweight, cookie-free alternative to Google Analytics that keeps your visitors’ data on your own server.',
    body: `Umami gives you the numbers that matter — visitors, page views, referrers, countries — in a clean dashboard, without cookies, without tracking individuals, and without sending anything to Google. A single lightweight script collects it, and all the data lives in your own database.

Because it's cookie-free and privacy-respecting, it sidesteps most consent-banner headaches too.

**Good to know**
- No cookies; GDPR-friendly by design.
- Tiny tracking script; fast dashboard.
- Self-host to keep visitor data yours.`,
  },
  {
    slug: 'matomo', name: 'Matomo', repo: 'matomo-org/matomo',
    category: 'infra-devops', models: ['self-hosted'], pricing: 'freemium',
    tags: ['analytics', 'privacy', 'web', 'reporting'], platforms: ['Docker', 'Web'],
    website: 'https://matomo.org', alternativeTo: ['Google Analytics', 'Adobe Analytics'],
    tagline: 'The full-featured, self-hosted web analytics platform.',
    description: 'Matomo is a powerful self-hosted web analytics platform with the depth of Google Analytics but full data ownership — reports, funnels, heatmaps, and goals on your own server.',
    body: `Matomo is the heavyweight of open web analytics: detailed visitor reports, funnels, goals, e-commerce tracking, and even heatmaps and session recordings — all self-hosted, so 100% of the data belongs to you and isn't shared with an ad company.

For teams that need GA-level insight without handing their audience to Google, it's the established replacement.

**Good to know**
- Full data ownership; no data sampling.
- Optional heatmaps, funnels, and A/B testing.
- Import from Google Analytics to switch.`,
  },
  {
    slug: 'gotify', name: 'Gotify', repo: 'gotify/server',
    category: 'infra-devops', models: ['self-hosted'], license: 'MIT', pricing: 'free',
    tags: ['notifications', 'push', 'self-hosted', 'alerts'], platforms: ['Docker', 'Web', 'Android'],
    website: 'https://gotify.net', alternativeTo: ['Pushover', 'Pushbullet', 'Firebase'],
    tagline: 'A simple self-hosted server for push notifications.',
    description: 'Gotify is a self-hosted server for sending and receiving push notifications, controlled by a simple REST API — a private, no-cloud alternative to Pushover and Pushbullet.',
    body: `Gotify is a tiny self-hosted notification server: apps and scripts POST messages to it over a simple REST API, and its Android app (or the web UI) delivers them instantly. There's no third-party push service in the loop — your alerts stay on your infrastructure.

It's a popular, dependency-light choice for homelab alerting and app notifications.

**Good to know**
- Single Go binary; minimal setup.
- REST API + WebSocket streaming.
- Android app and web client included.`,
  },
  {
    slug: 'planka', name: 'Planka', repo: 'plankanban/planka',
    category: 'productivity-tasks', models: ['self-hosted'], license: 'AGPL-3.0', pricing: 'free',
    tags: ['kanban', 'boards', 'tasks', 'collaboration'], platforms: ['Docker', 'Web'],
    website: 'https://planka.app', alternativeTo: ['Trello', 'Asana'],
    tagline: 'A self-hosted kanban board in the Trello style.',
    description: 'Planka is a self-hosted, real-time kanban board for teams — a clean, open-source alternative to Trello that keeps your boards and cards on your own server.',
    body: `Planka recreates the familiar Trello experience — boards, lists, cards, labels, due dates, and real-time collaboration — as software you host yourself. Drag cards across lists, assign members, and attach files, all without a per-user SaaS bill.

For small teams that just want a shared kanban board without giving up their data, it's a tidy fit.

**Good to know**
- Real-time multi-user boards.
- Markdown cards, labels, and attachments.
- One Docker Compose stack to run.`,
  },
  {
    slug: 'standard-notes', name: 'Standard Notes', repo: 'standardnotes/app',
    category: 'notes-knowledge', models: ['self-hosted'], pricing: 'freemium',
    tags: ['notes', 'e2ee', 'encryption', 'privacy'], platforms: ['Windows', 'macOS', 'Linux', 'Web', 'iOS', 'Android'],
    website: 'https://standardnotes.com', alternativeTo: ['Evernote', 'Simplenote', 'Google Keep'],
    tagline: 'End-to-end encrypted notes you can self-host.',
    description: 'Standard Notes is an end-to-end encrypted note-taking app with an optional self-hosted sync server — a private, security-first alternative to Evernote and Google Keep.',
    body: `Standard Notes encrypts everything end-to-end, so even the sync server can't read your notes — and you can run that server yourself for total control. It's built for longevity and privacy, with a focus on plain, durable notes over flashy features.

Self-host the syncing server and your encrypted notes never touch anyone else's cloud.

**Good to know**
- End-to-end encryption by default.
- Self-hostable sync server (Docker).
- Apps on every major platform.`,
  },
  {
    slug: 'mattermost', name: 'Mattermost', repo: 'mattermost/mattermost',
    category: 'collaboration', models: ['self-hosted'], license: 'MIT / AGPL (source-available)', pricing: 'freemium',
    tags: ['chat', 'team', 'devops', 'messaging'], platforms: ['Docker', 'Linux', 'Web', 'iOS', 'Android'],
    website: 'https://mattermost.com', alternativeTo: ['Slack', 'Microsoft Teams'],
    tagline: 'A self-hosted team chat built for developers.',
    description: 'Mattermost is a self-hosted team messaging platform aimed at engineering and DevOps teams, with channels, integrations, and workflows — a private alternative to Slack and Microsoft Teams.',
    body: `Mattermost delivers Slack-style channels, threads, and DMs on infrastructure you run, with deep integrations, slash commands, and CI/CD-friendly workflows that make it a favorite with developer and DevOps teams.

Self-hosting means your conversations, integrations, and compliance data all stay inside your own boundary.

**Good to know**
- Channels, threads, integrations, and bots.
- Playbooks and workflow automation.
- Self-host for full compliance and data control.`,
  },
  {
    slug: 'grafana', name: 'Grafana', repo: 'grafana/grafana',
    category: 'infra-devops', models: ['self-hosted'], pricing: 'free',
    tags: ['dashboards', 'monitoring', 'metrics', 'observability'], platforms: ['Docker', 'Linux', 'Web'],
    website: 'https://grafana.com/oss/grafana/', alternativeTo: ['Datadog', 'New Relic'],
    tagline: 'Beautiful dashboards for all your metrics and logs.',
    description: 'Grafana is the open-source standard for metrics and observability dashboards, self-hosted and pluggable across dozens of data sources — an alternative to Datadog and New Relic.',
    body: `Grafana turns Prometheus, Loki, InfluxDB, SQL, and dozens of other data sources into rich, interactive dashboards and alerts. It's the visualization layer at the heart of most self-hosted monitoring stacks, and it runs entirely on your own servers.

Own your observability instead of paying per-host to a SaaS to look at your own metrics.

**Good to know**
- Connects to virtually any metrics/logs source.
- Alerting and templated dashboards.
- The backbone of most homelab monitoring.`,
  },
  {
    slug: 'netdata', name: 'Netdata', repo: 'netdata/netdata',
    category: 'infra-devops', models: ['self-hosted'], pricing: 'freemium',
    tags: ['monitoring', 'metrics', 'realtime', 'observability'], platforms: ['Docker', 'Linux'],
    website: 'https://www.netdata.cloud', alternativeTo: ['Datadog', 'New Relic'],
    tagline: 'Real-time, per-second monitoring for your servers.',
    description: 'Netdata is a self-hosted, real-time infrastructure monitoring agent with per-second metrics and zero-config dashboards — a private alternative to Datadog and other hosted monitoring.',
    body: `Netdata drops onto a server and instantly gives you thousands of per-second metrics — CPU, memory, disk, network, containers, services — in gorgeous real-time dashboards, with smart anomaly detection and almost no configuration.

Run it purely on your own infrastructure and you get deep, live visibility without shipping telemetry to a paid cloud.

**Good to know**
- Per-second granularity, auto-detected metrics.
- Near-zero configuration to start.
- Runs standalone; no external service required.`,
  },
  {
    slug: 'ente', name: 'Ente Photos', repo: 'ente-io/ente',
    category: 'media-photos', models: ['self-hosted'], pricing: 'freemium',
    tags: ['photos', 'e2ee', 'encryption', 'backup'], platforms: ['Docker', 'Web', 'iOS', 'Android', 'Desktop'],
    website: 'https://ente.io', alternativeTo: ['Google Photos', 'Apple iCloud Photos'],
    tagline: 'End-to-end encrypted photo storage you can self-host.',
    description: 'Ente is an end-to-end encrypted photo storage and backup app that you can self-host — a private, zero-knowledge alternative to Google Photos and iCloud where even the server can’t see your images.',
    body: `Ente backs up your photos with end-to-end encryption, so your library is unreadable to anyone but you — and its server is open source and self-hostable if you want to hold the whole stack. Polished apps handle automatic backup, albums, and sharing across devices.

For people who want the Google Photos convenience with true zero-knowledge privacy, it's a compelling pick.

**Good to know**
- Zero-knowledge, end-to-end encryption.
- Open-source, self-hostable server.
- Native apps with automatic backup.`,
  },
  {
    slug: 'kavita', name: 'Kavita', repo: 'Kareadita/Kavita',
    category: 'media-photos', models: ['self-hosted'], pricing: 'free',
    tags: ['ebooks', 'comics', 'manga', 'reading'], platforms: ['Docker', 'Web'],
    website: 'https://www.kavitareader.com', alternativeTo: ['Kindle', 'Comixology'],
    tagline: 'A self-hosted digital library for books, comics, and manga.',
    description: 'Kavita is a fast, self-hosted reading server for ebooks, comics, and manga with a built-in reader — a private alternative to Kindle and Comixology for your own collection.',
    body: `Kavita organizes your ebooks, comics, and manga into a clean, searchable library and serves them to a slick in-browser reader, tracking your progress as you go. It handles EPUB, PDF, CBZ/CBR and more, with collections, reading lists, and multi-user support.

Your reading collection — and what you read — stays on your own server.

**Good to know**
- Reads EPUB, PDF, CBZ/CBR, and more.
- Built-in web reader with progress tracking.
- Multi-user with reading lists and collections.`,
  },
  {
    slug: 'woodpecker-ci', name: 'Woodpecker CI', repo: 'woodpecker-ci/woodpecker',
    category: 'infra-devops', models: ['self-hosted'], pricing: 'free',
    tags: ['ci-cd', 'pipelines', 'automation', 'containers'], platforms: ['Docker', 'Linux'],
    website: 'https://woodpecker-ci.org', alternativeTo: ['GitHub Actions', 'CircleCI', 'Jenkins'],
    tagline: 'A simple, container-native CI/CD engine you host yourself.',
    description: 'Woodpecker CI is a lightweight, self-hosted continuous integration engine that runs pipelines in containers — an open alternative to GitHub Actions, CircleCI, and Jenkins.',
    body: `Woodpecker runs your build and deploy pipelines in containers, configured with simple YAML, and plugs into Gitea, Forgejo, GitHub, and GitLab. It's a lean, understandable CI system you can host next to your own forge without a SaaS runner bill.

For self-hosters who already run their own git, it completes the picture with private CI/CD.

**Good to know**
- Container-native pipelines from simple YAML.
- Integrates with Gitea, GitHub, GitLab, and more.
- Lightweight and easy to self-host.`,
  },
  {
    slug: 'excalidraw', name: 'Excalidraw', repo: 'excalidraw/excalidraw',
    category: 'collaboration', models: ['local-first'], pricing: 'free',
    tags: ['whiteboard', 'diagrams', 'drawing', 'offline'], platforms: ['Web', 'Docker', 'Desktop'],
    website: 'https://excalidraw.com', alternativeTo: ['Miro', 'Whimsical', 'Figjam'],
    tagline: 'A local-first virtual whiteboard with a hand-drawn feel.',
    description: 'Excalidraw is an open-source, local-first virtual whiteboard for sketching diagrams with a hand-drawn look — data stays in your browser or your own server, a private alternative to Miro and FigJam.',
    body: `Excalidraw is the go-to for quick, hand-drawn-style diagrams and wireframes. By default your drawing lives locally in your browser — nothing is uploaded — and you can self-host the whole app plus a collaboration server if you want real-time boards on your own infrastructure.

It's fast, delightful, and keeps your sketches yours.

**Good to know**
- Local-first: drawings stay in your browser by default.
- Self-hostable app + optional collaboration server.
- Export to PNG/SVG; end-to-end encrypted live sessions.`,
  },
];
