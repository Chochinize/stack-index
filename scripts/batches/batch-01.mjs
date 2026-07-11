// Batch 01 — curated additions. Facts (stars/language/freshness) are enriched live from
// GitHub by the importer; the prose here is original (written for this site).
export default [
  {
    slug: 'photoprism', name: 'PhotoPrism', repo: 'photoprism/photoprism',
    category: 'media-photos', models: ['self-hosted'], license: 'AGPL-3.0', pricing: 'freemium',
    tags: ['photos', 'ai', 'search', 'faces'], platforms: ['Docker', 'Web'],
    website: 'https://www.photoprism.app', alternativeTo: ['Google Photos', 'Apple iCloud Photos'],
    tagline: 'AI-powered photo management you host yourself.',
    description: 'PhotoPrism is a self-hosted, AI-powered photo app that automatically tags, indexes, and organizes your library with face and object recognition — a private alternative to Google Photos.',
    body: `PhotoPrism turns a folder of photos into a searchable, browsable library on your own server. Its on-device machine learning tags scenes, objects, and faces automatically, so you can search "beach 2019" or a person's face without any of it leaving your hardware.

It handles RAW files, live photos, and huge collections, with a fast progressive-web-app UI that works on phone and desktop alike.

**Good to know**
- Runs entirely offline; the ML classification is local.
- Reads your existing folder structure without moving originals.
- Great pairing with a NAS or a big local disk.`,
  },
  {
    slug: 'paperless-ngx', name: 'Paperless-ngx', repo: 'paperless-ngx/paperless-ngx',
    category: 'files-sync-backup', models: ['self-hosted'], license: 'GPL-3.0', pricing: 'free',
    tags: ['documents', 'ocr', 'archive', 'scanning'], platforms: ['Docker', 'Web'],
    website: 'https://docs.paperless-ngx.com', alternativeTo: ['Evernote', 'DEVONthink', 'Dropbox'],
    tagline: 'Scan, OCR, and archive your documents into a searchable vault.',
    description: 'Paperless-ngx is a self-hosted document management system that OCRs your scanned paper and PDFs into a fully searchable, tagged archive — a private, paperless alternative to Evernote and cloud document stores.',
    body: `Paperless-ngx eats your paperwork. Point it at a scanner or a watch folder and it runs OCR on every document, extracts dates and correspondents, and files everything into a searchable, tagged archive you fully control.

Once ingested, you find any invoice, contract, or letter in seconds by full-text search — and the originals stay on your own storage.

**Good to know**
- Automatic OCR, tagging, and correspondent detection.
- Full-text search across every document.
- Consumes from scanners, email, or a watched directory.`,
  },
  {
    slug: 'gitea', name: 'Gitea', repo: 'go-gitea/gitea',
    category: 'infra-devops', models: ['self-hosted'], license: 'MIT', pricing: 'free',
    tags: ['git', 'forge', 'ci', 'code'], platforms: ['Docker', 'Linux', 'Web'],
    website: 'https://about.gitea.com', alternativeTo: ['GitHub', 'GitLab', 'Bitbucket'],
    tagline: 'A lightweight, self-hosted Git forge.',
    description: 'Gitea is a lightweight, self-hosted Git service with pull requests, issues, a registry, and CI (Actions) — a fast, low-resource alternative to GitHub and GitLab you run yourself.',
    body: `Gitea gives you your own GitHub: repositories, pull requests, issues, wikis, a package registry, and Gitea Actions for CI — all from a single Go binary or container that runs happily on modest hardware.

For anyone who wants their source code (and its history) on infrastructure they own, it's the go-to lightweight forge.

**Good to know**
- Single binary; sips resources (runs on a Pi).
- Actions gives GitHub-compatible CI/CD.
- Built-in package/container registry.`,
  },
  {
    slug: 'nginx-proxy-manager', name: 'Nginx Proxy Manager', repo: 'NginxProxyManager/nginx-proxy-manager',
    category: 'infra-devops', models: ['self-hosted'], license: 'MIT', pricing: 'free',
    tags: ['reverse-proxy', 'tls', 'nginx', 'ingress'], platforms: ['Docker', 'Web'],
    website: 'https://nginxproxymanager.com', alternativeTo: ['Cloudflare Tunnel', 'manual nginx', 'Traefik'],
    tagline: 'A friendly UI for reverse proxying with automatic TLS.',
    description: 'Nginx Proxy Manager puts a simple web UI on top of nginx to expose your self-hosted services with automatic Let’s Encrypt TLS — no hand-editing config files.',
    body: `Nginx Proxy Manager is the easiest way to put your self-hosted apps behind clean hostnames with HTTPS. A friendly dashboard handles proxy hosts, access lists, and automatic Let's Encrypt certificates, so you never touch a raw nginx config.

It's the piece a lot of homelabs use to turn "http://192.168.x.x:8096" into "https://jellyfin.mydomain.com".

**Good to know**
- Automatic TLS certificates and renewal.
- Access lists and basic auth per host.
- One container; great first reverse proxy.`,
  },
  {
    slug: 'ntfy', name: 'ntfy', repo: 'binwiederhier/ntfy',
    category: 'infra-devops', models: ['self-hosted'], license: 'Apache-2.0 / GPL-2.0', pricing: 'free',
    tags: ['notifications', 'push', 'pubsub', 'alerts'], platforms: ['Docker', 'Web', 'iOS', 'Android', 'CLI'],
    website: 'https://ntfy.sh', alternativeTo: ['Pushover', 'Pushbullet', 'Gotify'],
    tagline: 'Send push notifications to your phone from any script.',
    description: 'ntfy is a self-hosted pub-sub notification service that sends push notifications to your phone or desktop from a simple HTTP request — a free, self-hostable alternative to Pushover and Pushbullet.',
    body: `ntfy lets any script, server, or cron job ping your phone with a single \`curl\`. Publish to a topic, subscribe on your devices, and you have instant push notifications for backups finishing, servers going down, or anything else — all through a server you own.

It's dead simple by design: no accounts required, just topics and HTTP.

**Good to know**
- Notify from a one-line HTTP request.
- Native iOS/Android apps; self-host or use the public server.
- Great glue for homelab alerting.`,
  },
  {
    slug: 'portainer', name: 'Portainer', repo: 'portainer/portainer',
    category: 'infra-devops', models: ['self-hosted'], license: 'Zlib', pricing: 'freemium',
    tags: ['docker', 'containers', 'management', 'kubernetes'], platforms: ['Docker', 'Web'],
    website: 'https://www.portainer.io', alternativeTo: ['Docker Desktop', 'cloud container consoles'],
    tagline: 'A visual dashboard for managing Docker and Kubernetes.',
    description: 'Portainer is a self-hosted management UI for Docker, Swarm, and Kubernetes — deploy, inspect, and control your containers from a browser instead of the command line.',
    body: `Portainer wraps your container engine in a clean web UI. Start and stop containers, view logs, manage volumes and networks, deploy stacks, and administer a Kubernetes cluster — without memorizing CLI flags.

It's the friendly cockpit many self-hosters put in front of their Docker host to make day-to-day operations click-through.

**Good to know**
- Manages Docker, Swarm, and Kubernetes.
- Stack deploys from Compose files.
- Community Edition is free and open.`,
  },
  {
    slug: 'joplin', name: 'Joplin', repo: 'laurent22/joplin',
    category: 'notes-knowledge', models: ['local-first'], license: 'AGPL-3.0', pricing: 'free',
    tags: ['notes', 'markdown', 'e2ee', 'sync'], platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    website: 'https://joplinapp.org', alternativeTo: ['Evernote', 'OneNote', 'Notion'],
    tagline: 'An open-source, end-to-end encrypted notebook.',
    description: 'Joplin is an open-source, local-first note-taking app with Markdown, web clipping, and end-to-end encrypted sync to your own storage — a private alternative to Evernote and OneNote.',
    body: `Joplin keeps your notes and to-dos in Markdown on your device, with optional end-to-end encrypted sync through storage you choose — your own Nextcloud, WebDAV, or S3. There's no mandatory account and no company reading your notebooks.

A web clipper, attachments, and a big plugin ecosystem make it a genuine Evernote replacement that respects your data.

**Good to know**
- Local-first Markdown; sync via your own backend.
- End-to-end encryption option.
- Web clipper + plugins + mobile apps.`,
  },
  {
    slug: 'seafile', name: 'Seafile', repo: 'haiwen/seafile',
    category: 'files-sync-backup', models: ['self-hosted'], license: 'GPLv2 (Community)', pricing: 'freemium',
    tags: ['files', 'sync', 'storage', 'sharing'], platforms: ['Docker', 'Linux', 'Web', 'iOS', 'Android'],
    website: 'https://www.seafile.com', alternativeTo: ['Dropbox', 'Google Drive'],
    tagline: 'High-performance self-hosted file sync and share.',
    description: 'Seafile is a self-hosted file sync-and-share platform built for speed and reliability, with client-side encryption and fast delta sync — a private alternative to Dropbox and Google Drive.',
    body: `Seafile organizes files into libraries and syncs them quickly and reliably across your devices, with optional client-side encryption for sensitive libraries. It's engineered for performance, so large libraries and many files stay snappy.

Everything lives on your server, with desktop and mobile clients that feel like the commercial products they replace.

**Good to know**
- Fast block-level delta sync.
- Optional end-to-end encrypted libraries.
- Community Edition is free and open source.`,
  },
  {
    slug: 'audiobookshelf', name: 'Audiobookshelf', repo: 'advplyr/audiobookshelf',
    category: 'media-photos', models: ['self-hosted'], license: 'GPL-3.0', pricing: 'free',
    tags: ['audiobooks', 'podcasts', 'streaming', 'media-server'], platforms: ['Docker', 'Web', 'iOS', 'Android'],
    website: 'https://www.audiobookshelf.org', alternativeTo: ['Audible', 'Spotify (podcasts)'],
    tagline: 'A self-hosted server for your audiobooks and podcasts.',
    description: 'Audiobookshelf is a self-hosted audiobook and podcast server that streams your library to mobile apps with progress sync — a private alternative to Audible and podcast platforms.',
    body: `Audiobookshelf turns your audiobook and podcast collection into a private streaming service. It tracks your listening progress across devices, fetches metadata and cover art, and streams to polished iOS and Android apps.

Own your audiobooks instead of renting access — and keep your listening history to yourself.

**Good to know**
- Progress sync across all your devices.
- Podcast auto-download and management.
- Multi-user with per-user progress.`,
  },
  {
    slug: 'freshrss', name: 'FreshRSS', repo: 'FreshRSS/FreshRSS',
    category: 'read-later-bookmarks', models: ['self-hosted'], license: 'AGPL-3.0', pricing: 'free',
    tags: ['rss', 'feeds', 'reader', 'news'], platforms: ['Docker', 'Web'],
    website: 'https://freshrss.org', alternativeTo: ['Feedly', 'Inoreader', 'Google Reader'],
    tagline: 'A fast, self-hosted RSS feed aggregator.',
    description: 'FreshRSS is a self-hosted RSS and Atom feed reader that’s fast, lightweight, and multi-user — a private alternative to Feedly and Inoreader that keeps your reading habits your own.',
    body: `FreshRSS pulls your feeds into one fast, keyboard-friendly reader on your own server. It scales to hundreds of feeds, supports web scraping for sites without feeds, and exposes an API so you can use third-party mobile reader apps.

Reclaim the open web without a feed-reader company tracking what you read.

**Good to know**
- Handles hundreds of feeds smoothly.
- API for popular mobile RSS clients.
- Multi-user; low resource footprint.`,
  },
  {
    slug: 'rocketchat', name: 'Rocket.Chat', repo: 'RocketChat/Rocket.Chat',
    category: 'collaboration', models: ['self-hosted'], license: 'MIT', pricing: 'freemium',
    tags: ['chat', 'team', 'messaging', 'collaboration'], platforms: ['Docker', 'Web', 'iOS', 'Android'],
    website: 'https://www.rocket.chat', alternativeTo: ['Slack', 'Microsoft Teams', 'Discord'],
    tagline: 'A self-hosted team chat platform you fully control.',
    description: 'Rocket.Chat is a self-hosted team collaboration and messaging platform with channels, DMs, voice, and video — an open alternative to Slack and Microsoft Teams that keeps conversations on your server.',
    body: `Rocket.Chat gives teams channels, direct messages, threads, voice, and video on infrastructure they own. It's extensible with apps and integrations, supports federation, and lets admins control retention, compliance, and where every message lives.

For organizations that can't put conversations in someone else's cloud, it's a full Slack replacement you host yourself.

**Good to know**
- Channels, DMs, threads, voice, and video.
- Integrations, bots, and an app marketplace.
- Self-host for full data control.`,
  },
  {
    slug: 'plane', name: 'Plane', repo: 'makeplane/plane',
    category: 'productivity-tasks', models: ['self-hosted'], license: 'AGPL-3.0', pricing: 'freemium',
    tags: ['project-management', 'issues', 'kanban', 'sprints'], platforms: ['Docker', 'Web'],
    website: 'https://plane.so', alternativeTo: ['Jira', 'Linear', 'Asana'],
    tagline: 'Self-hosted issue tracking and project planning.',
    description: 'Plane is a self-hosted project and issue tracker with cycles, modules, and roadmaps — an open-source alternative to Jira and Linear for teams that want their planning data in-house.',
    body: `Plane brings modern issue tracking to your own server: backlogs, sprints (cycles), modules, and roadmaps with a clean, fast interface. It's aimed at product and engineering teams who like Linear's ergonomics but want to self-host.

Your issues, specs, and roadmap stay on infrastructure you control, not a per-seat SaaS.

**Good to know**
- Cycles, modules, and roadmap views.
- Fast, keyboard-friendly UI.
- Self-hosted via Docker Compose.`,
  },
  {
    slug: 'pi-hole', name: 'Pi-hole', repo: 'pi-hole/pi-hole',
    category: 'home-automation', models: ['self-hosted'], license: 'EUPL-1.2', pricing: 'free',
    tags: ['dns', 'ad-blocking', 'privacy', 'network'], platforms: ['Docker', 'Linux', 'Raspberry Pi'],
    website: 'https://pi-hole.net', alternativeTo: ['NextDNS', 'AdGuard DNS'],
    tagline: 'Network-wide ad blocking via your own DNS.',
    description: 'Pi-hole is a self-hosted DNS sinkhole that blocks ads and trackers for every device on your network — a local, private alternative to hosted DNS filtering like NextDNS.',
    body: `Pi-hole runs as your network's DNS server and quietly drops requests to ad and tracker domains, cleaning up browsing for every device — phones, TVs, IoT — with no client software. A tidy dashboard shows exactly what's being blocked.

Because it runs on your own hardware (a Raspberry Pi is the classic host), your DNS queries stay on your network.

**Good to know**
- Blocks ads/trackers network-wide, no per-device setup.
- Runs on a Pi, a VM, or a container.
- Detailed query dashboard and allow/deny lists.`,
  },
  {
    slug: 'frigate', name: 'Frigate', repo: 'blakeblackshear/frigate',
    category: 'home-automation', models: ['local-first'], license: 'MIT', pricing: 'free',
    tags: ['nvr', 'cameras', 'ai', 'object-detection'], platforms: ['Docker', 'Web'],
    website: 'https://frigate.video', alternativeTo: ['Nest', 'Ring', 'Blue Iris'],
    tagline: 'Local, AI-powered camera recording with object detection.',
    description: 'Frigate is a local-first network video recorder (NVR) with real-time AI object detection — a private alternative to cloud cameras like Nest and Ring that keeps footage on your own hardware.',
    body: `Frigate watches your security cameras and runs real-time object detection locally, recording only what matters and alerting on people, cars, or animals — all without sending a single frame to a vendor's cloud. It pairs tightly with Home Assistant.

With a Coral or GPU it runs detection efficiently on modest hardware, so your camera footage stays entirely on your network.

**Good to know**
- Real-time local AI detection (Coral/GPU accelerated).
- Deep Home Assistant integration.
- Records events, not 24/7 noise.`,
  },
  {
    slug: 'ghostfolio', name: 'Ghostfolio', repo: 'ghostfolio/ghostfolio',
    category: 'finance', models: ['self-hosted'], license: 'AGPL-3.0', pricing: 'freemium',
    tags: ['investing', 'portfolio', 'wealth', 'finance'], platforms: ['Docker', 'Web'],
    website: 'https://ghostfol.io', alternativeTo: ['Empower (Personal Capital)', 'Sharesight'],
    tagline: 'Track your investments and net worth, privately.',
    description: 'Ghostfolio is a self-hosted wealth and investment tracker for stocks, ETFs, crypto, and more — an open-source, privacy-first alternative to Empower (Personal Capital) and Sharesight.',
    body: `Ghostfolio brings your whole portfolio — stocks, ETFs, crypto, cash — into one private dashboard that shows performance, allocation, and net worth over time. You add transactions and it does the analytics, all on a server you run.

For people who want the Personal Capital overview without handing a fintech company their entire financial picture.

**Good to know**
- Multi-asset portfolio and net-worth tracking.
- Performance, allocation, and dividend views.
- Self-host to keep financial data private.`,
  },
];
