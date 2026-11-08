# detour-website

The site at https://detourbrowser.com, built with [Astro](https://astro.build) and served as static assets by a Cloudflare Worker (`wrangler.jsonc`).

## Setup

Node is pinned in `.nvmrc` (nvm.fish: `nvm use` in this folder).

```sh
npm ci
```

## Work on it

```sh
npm run dev       # http://localhost:4321, reloads on save
npm run build     # writes dist/
npx wrangler dev  # serves dist/ the way Cloudflare does (run build first)
```

## Layout

- `src/data/release.json`: the current version, DMG size and release date. Every download link, the version pill and the structured data read it. `scripts/publish-release.sh` in the app repo rewrites it; nothing else should state a version or size.
- `src/layouts/Base.astro`: head metadata (canonical and share URLs are built from `site` in `astro.config.mjs`), nav, footer.
- `src/pages/`: one file per page. Pages build to `<path>/index.html` and are linked with a trailing slash.
- `public/`: copied as is (`styles.css`, `script.js`, `robots.txt`, `assets/`).
- `dist/sitemap.xml` is generated at build time from the pages that exist (the `sitemap()` integration in `astro.config.mjs`).

## Deploy

Every push to `main` deploys: Cloudflare's Git integration (Workers Builds) clones the repo, runs `npm ci`, then `npx wrangler deploy`, which builds the site first (`build.command` in `wrangler.jsonc`).

Releases go through `scripts/publish-release.sh` in the app repo: it updates `release.json`, commits, builds a clean export of the commit, pushes, and runs `wrangler deploy` from the export (the same commit the Git build deploys). To deploy by hand, run `npx wrangler deploy` from a clean checkout.
