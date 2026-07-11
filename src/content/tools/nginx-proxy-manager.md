---
name: "Nginx Proxy Manager"
tagline: "A friendly UI for reverse proxying with automatic TLS."
description: "Nginx Proxy Manager puts a simple web UI on top of nginx to expose your self-hosted services with automatic Let’s Encrypt TLS — no hand-editing config files."
category: "infra-devops"
tags: ["reverse-proxy", "tls", "nginx", "ingress"]
models: ["self-hosted"]
license: "MIT"
openSource: true
pricing: "free"
platforms: ["Docker", "Web"]
language: "TypeScript"
website: "https://nginxproxymanager.com"
repo: "https://github.com/NginxProxyManager/nginx-proxy-manager"
stars: 33536
alternativeTo: ["Cloudflare Tunnel", "manual nginx", "Traefik"]
featured: false
added: 2026-07-11
---

Nginx Proxy Manager is the easiest way to put your self-hosted apps behind clean hostnames with HTTPS. A friendly dashboard handles proxy hosts, access lists, and automatic Let's Encrypt certificates, so you never touch a raw nginx config.

It's the piece a lot of homelabs use to turn "http://192.168.x.x:8096" into "https://jellyfin.mydomain.com".

**Good to know**
- Automatic TLS certificates and renewal.
- Access lists and basic auth per host.
- One container; great first reverse proxy.
