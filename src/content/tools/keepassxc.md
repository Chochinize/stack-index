---
name: KeePassXC
tagline: An offline password manager with a single encrypted file you own.
description: KeePassXC is a local-first, open-source password manager that stores your credentials in a single strongly-encrypted database file on your device — no cloud, no account, no subscription.
category: passwords-security
tags: [passwords, offline, encryption, keepass, cross-platform]
models: [local-first]
license: GPL-3.0
openSource: true
pricing: free
platforms: [Windows, macOS, Linux]
language: C++
website: https://keepassxc.org
repo: https://github.com/keepassxreboot/keepassxc
docs: https://keepassxc.org/docs/
stars: 24000
alternativeTo: [1Password, LastPass, Dashlane]
featured: false
added: 2026-06-10
---

KeePassXC keeps every password, key, and secret in one **encrypted `.kdbx` file** that lives wherever you put it. There's no server and no account: the app opens your database with a master key, and that's the whole trust model.

Because the database is just a file, you sync it however you like — Syncthing, a USB stick, your own cloud — and pair it with browser extensions and mobile KeePass apps that read the same format. It's the archetypal local-first security tool.

**Good to know**

- Battle-tested KeePass database format with many compatible clients.
- Browser integration, TOTP, SSH agent, and passkeys.
- You own the file; back it up like you'd back up anything precious.
