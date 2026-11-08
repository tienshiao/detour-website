// @ts-check
import { readFileSync, writeFileSync } from "node:fs";
import { defineConfig } from "astro/config";

const site = "https://detourbrowser.com";

/**
 * Writes dist/sitemap.xml from the pages the build produced, so a new page is
 * listed without anyone editing the sitemap. The home page's lastmod is the
 * release date (it changes with every release); other pages carry none until
 * they have a real last-modified date to report.
 * @returns {import("astro").AstroIntegration}
 */
function sitemap() {
  return {
    name: "detour-sitemap",
    hooks: {
      "astro:build:done": ({ dir, pages }) => {
        const release = JSON.parse(readFileSync(new URL("./src/data/release.json", import.meta.url), "utf-8"));
        const urls = pages
          .map(({ pathname }) => pathname)
          .filter((pathname) => !/^(404|500)\/?$/.test(pathname))
          .sort()
          .map((pathname) => {
            const loc = new URL(pathname, `${site}/`).href;
            const lastmod = pathname === "" || pathname === "/" ?`\n    <lastmod>${release.date}</lastmod>` : "";
            return `  <url>\n    <loc>${loc}</loc>${lastmod}\n  </url>`;
          });
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
        writeFileSync(new URL("sitemap.xml", dir), xml);
      },
    },
  };
}

export default defineConfig({
  site,
  // Pages build to <path>/index.html; Cloudflare serves them at <path>/.
  trailingSlash: "always",
  // Keep the markup's whitespace as written (Astro 7 defaults to JSX rules,
  // which drop the spaces between inline elements).
  compressHTML: false,
  integrations: [sitemap()],
});
