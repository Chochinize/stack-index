---
name: Vaultwarden
tagline: A lightweight, self-hosted server compatible with Bitwarden clients.
description: Vaultwarden is a self-hosted password manager server compatible with the official Bitwarden apps and extensions — run your own vault on tiny hardware and keep every credential on infrastructure you control.
category: passwords-security
tags: [passwords, vault, bitwarden, encryption, self-hosted]
models: [self-hosted]
license: AGPL-3.0
openSource: true
pricing: free
platforms: [Docker, Linux, Web, iOS, Android]
language: Rust
website: https://github.com/dani-garcia/vaultwarden
repo: https://github.com/dani-garcia/vaultwarden
docs: https://github.com/dani-garcia/vaultwarden/wiki
stars: 44000
alternativeTo: [Bitwarden, 1Password, LastPass]
featured: false
added: 2026-06-11
---

Vaultwarden is a lightweight reimplementation of the Bitwarden server in Rust. It speaks the same API as official Bitwarden, so you use the normal Bitwarden apps and browser extensions — but the vault itself lives on **your** server.

It's famous for running on almost nothing (a Raspberry Pi is plenty) while still supporting organizations, attachments, and features that cost money on the hosted service. Your encrypted vault never leaves your control.

> Official Bitwarden clients, your own zero-cost server.

**Good to know**

- Runs comfortably in a small container.
- Put it behind a reverse proxy with TLS — it holds your secrets.
- Supports org vaults, sends, and 2FA.
