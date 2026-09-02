# The Stack Index

**The Local-First & Self-Hosted Stack Index** — a curated directory of software that keeps your data on your own devices and servers. Browse by category, license, platform, and the SaaS it replaces.

🔗 **[localfirststack.com](https://localfirststack.com)**

Built with [Astro](https://astro.build) — no server-rendered pages, no client-side framework, no third-party fonts or trackers. Deployed to k3s via GitOps (see [Deploy](#deploy-gitops) below).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # preview the production build
```

Requires Node 20.3+ (or 22+).

## Add a tool

Create a Markdown file in `src/content/tools/<slug>.md` with frontmatter matching the
schema in `src/content.config.ts`. Category slugs live in `src/lib/categories.ts`.
See `/submit` on the site for the entry template. That's the whole contribution — no
build tooling required to propose one.

## Architecture

- **Content**: Astro content collection (`src/content/tools/*.md`), one file per tool.
- **Taxonomy**: categories in `src/lib/categories.ts`; each gets its own SEO page.
- **SEO**: per-page meta + Open Graph, JSON-LD (SoftwareApplication / CollectionPage /
  BreadcrumbList / ItemList), sitemap, RSS, robots.txt, canonical URLs.
- **Styling**: self-contained design system in `src/styles/global.css` (no external
  fonts — CSP-friendly), light/dark aware.

## Deploy (GitOps)

Push to `main` → GitHub Actions (`.github/workflows/build.yml`) builds and pushes
`chochinize/stack-index` to Docker Hub, then bumps the image tag in
`base/kustomization.yaml`. **ArgoCD** (`argo-app.yaml`) auto-syncs the `base/`
kustomization into the `stack-index` namespace on k3s.

The canonical URL lives in `astro.config.mjs` (`site`) and `src/lib/site.ts` — keep
both in sync if the production domain ever changes.

## License

No license file yet — until one's added, all rights are reserved by default.
