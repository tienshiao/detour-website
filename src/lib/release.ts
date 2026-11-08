// The current release, as every page shows it. scripts/publish-release.sh in
// the app repo rewrites src/data/release.json; nothing else should mention a
// version number or DMG size. (Its release date is read by the sitemap
// integration in astro.config.mjs.)
import release from "../data/release.json";

export const version: string = release.version;
export const dmgSize: string = release.dmgSize;
export const dmgName = `Detour-${version}.dmg`;
export const dmgUrl = `https://github.com/tienshiao/detour/releases/download/v${version}/${dmgName}`;
