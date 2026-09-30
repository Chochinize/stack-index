---
name: Hyperconsciousness
tagline: Encrypted, append-only knowledge storage with scoped access for agents.
description: Hyperconsciousness is a developer-alpha Rust knowledge store with a CLI, device sync and scoped, expiring MCP access to signed, encrypted records.
category: notes-knowledge
tags: [notes, knowledge, encryption, mcp, cli, offline]
models: [local-first, self-hosted]
license: MIT
openSource: true
pricing: free
platforms: [macOS, Linux, Windows]
language: Rust
website: https://github.com/louis030195/hyperconsciousness
repo: https://github.com/louis030195/hyperconsciousness
docs: https://github.com/louis030195/hyperconsciousness#readme
added: 2026-09-30
---

Hyperconsciousness (`hc`) stores notes and files as signed, encrypted, append-only records on your own devices. Its Rust engine exposes a CLI and MCP/HTTP interfaces. Local storage works without a required hosted service, and configured peers can sync records across devices.

Owners give agents scoped, expiring grants to retrieve records by kind, tag and sensitivity. Capture requires explicit write permission. The repository includes agent skills and an optional local, read-only dashboard; it is a developer tool, not a finished desktop or mobile note-taking app.

**Good to know**

- Developer alpha under the MIT license. APIs and commands may change.
- Follow the [source-install instructions](https://github.com/louis030195/hyperconsciousness#install-from-source) and local store setup in the README.
- The storage format and implementation are public. Encrypted records require the owner's keys to read; preserve those keys and recovery material.
- Grants constrain HC API access. They do not isolate processes that already have access to the owner's account, files or keys.
- A hosted model provider can see the plaintext returned to it through MCP. There has been no independent security audit; see the [security limits](https://github.com/louis030195/hyperconsciousness/blob/main/docs/CONSTRAINTS.md).
