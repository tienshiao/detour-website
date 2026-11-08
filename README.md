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

Releases deploy through `scripts/publish-release.sh` in the app repo: it updates `release.json`, commits and pushes, then builds a clean export of the commit and runs `wrangler deploy`. To deploy a site-only change by hand, build from a clean checkout and run `npx wrangler deploy`.
