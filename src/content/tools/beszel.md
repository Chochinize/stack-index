---
name: "Beszel"
tagline: "A lightweight server monitoring hub with a clean dashboard."
description: "Beszel is a lightweight self-hosted server monitoring platform with historical metrics, Docker stats, and alerts — a simple, own-your-metrics alternative to Netdata and Datadog."
category: "infra-devops"
tags: ["monitoring", "metrics", "servers", "lightweight"]
models: ["self-hosted"]
license: "MIT"
openSource: true
pricing: "free"
platforms: ["Docker", "Linux", "Raspberry Pi"]
language: "Go"
website: "https://beszel.dev"
repo: "https://github.com/henrygd/beszel"
stars: 23698
alternativeTo: ["Netdata", "Datadog", "Uptime Robot"]
featured: false
added: 2026-07-23
---

Beszel pairs a small hub with tiny agents on each machine to give you CPU, memory, disk, network, and per-container Docker stats in one clean dashboard — with history and alerting, but without the resource appetite of heavier stacks.

It's aimed squarely at homelabs and small fleets: fast to deploy, easy to read, and entirely self-hosted so your telemetry stays yours.

**Good to know**
- Lightweight hub + agent architecture.
- Per-container Docker metrics out of the box.
- Configurable alerts via email, webhooks, and push.
