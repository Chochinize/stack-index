---
name: "Pi-hole"
tagline: "Network-wide ad blocking via your own DNS."
description: "Pi-hole is a self-hosted DNS sinkhole that blocks ads and trackers for every device on your network — a local, private alternative to hosted DNS filtering like NextDNS."
category: "home-automation"
tags: ["dns", "ad-blocking", "privacy", "network"]
models: ["self-hosted"]
license: "EUPL-1.2"
openSource: true
pricing: "free"
platforms: ["Docker", "Linux", "Raspberry Pi"]
language: "Shell"
website: "https://pi-hole.net"
repo: "https://github.com/pi-hole/pi-hole"
stars: 59802
alternativeTo: ["NextDNS", "AdGuard DNS"]
featured: false
added: 2026-07-11
---

Pi-hole runs as your network's DNS server and quietly drops requests to ad and tracker domains, cleaning up browsing for every device — phones, TVs, IoT — with no client software. A tidy dashboard shows exactly what's being blocked.

Because it runs on your own hardware (a Raspberry Pi is the classic host), your DNS queries stay on your network.

**Good to know**
- Blocks ads/trackers network-wide, no per-device setup.
- Runs on a Pi, a VM, or a container.
- Detailed query dashboard and allow/deny lists.
