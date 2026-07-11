---
name: "ntfy"
tagline: "Send push notifications to your phone from any script."
description: "ntfy is a self-hosted pub-sub notification service that sends push notifications to your phone or desktop from a simple HTTP request — a free, self-hostable alternative to Pushover and Pushbullet."
category: "infra-devops"
tags: ["notifications", "push", "pubsub", "alerts"]
models: ["self-hosted"]
license: "Apache-2.0 / GPL-2.0"
openSource: true
pricing: "free"
platforms: ["Docker", "Web", "iOS", "Android", "CLI"]
language: "Go"
website: "https://ntfy.sh"
repo: "https://github.com/binwiederhier/ntfy"
stars: 31708
alternativeTo: ["Pushover", "Pushbullet", "Gotify"]
featured: false
added: 2026-07-11
---

ntfy lets any script, server, or cron job ping your phone with a single `curl`. Publish to a topic, subscribe on your devices, and you have instant push notifications for backups finishing, servers going down, or anything else — all through a server you own.

It's dead simple by design: no accounts required, just topics and HTTP.

**Good to know**
- Notify from a one-line HTTP request.
- Native iOS/Android apps; self-host or use the public server.
- Great glue for homelab alerting.
