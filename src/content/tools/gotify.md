---
name: "Gotify"
tagline: "A simple self-hosted server for push notifications."
description: "Gotify is a self-hosted server for sending and receiving push notifications, controlled by a simple REST API — a private, no-cloud alternative to Pushover and Pushbullet."
category: "infra-devops"
tags: ["notifications", "push", "self-hosted", "alerts"]
models: ["self-hosted"]
license: "MIT"
openSource: true
pricing: "free"
platforms: ["Docker", "Web", "Android"]
language: "Go"
website: "https://gotify.net"
repo: "https://github.com/gotify/server"
stars: 15255
alternativeTo: ["Pushover", "Pushbullet", "Firebase"]
featured: false
added: 2026-07-13
---

Gotify is a tiny self-hosted notification server: apps and scripts POST messages to it over a simple REST API, and its Android app (or the web UI) delivers them instantly. There's no third-party push service in the loop — your alerts stay on your infrastructure.

It's a popular, dependency-light choice for homelab alerting and app notifications.

**Good to know**
- Single Go binary; minimal setup.
- REST API + WebSocket streaming.
- Android app and web client included.
