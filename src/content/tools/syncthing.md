---
name: Syncthing
tagline: Continuous, peer-to-peer file sync with no cloud in the middle.
description: Syncthing is an open-source, local-first file synchronization tool that syncs folders directly between your devices over an encrypted peer-to-peer connection — no central server, no cloud account.
category: files-sync-backup
tags: [sync, p2p, encryption, offline, backup]
models: [local-first]
license: MPL-2.0
openSource: true
pricing: free
platforms: [Windows, macOS, Linux, Android, Docker]
language: Go
website: https://syncthing.net
repo: https://github.com/syncthing/syncthing
docs: https://docs.syncthing.net
stars: 64000
alternativeTo: [Dropbox, Google Drive, Resilio Sync]
featured: false
added: 2026-06-19
---

Syncthing keeps folders identical across your devices by talking **directly** between them — laptop to phone to home server — over TLS-encrypted connections. There is no central cloud: your files are only ever on machines you own.

It's continuous and bidirectional, handles conflicts gracefully, and works across NAT thanks to relay/discovery servers that never see your file contents. For a lot of people it's the missing piece that makes a fully self-owned setup practical.

**Good to know**

- Every device holds a full copy — sync doubles as redundancy.
- No account, no size limits; you provide the storage.
- Great companion to Obsidian, KeePassXC, and photo libraries.
