# Writing a feature guide page

Each feature worth a guide gets a page at `/features/<id>/`, written as one Markdown file in `src/content/features/<id>.md`. `src/pages/features/[id].astro` renders every page in the same order, so a page only supplies content. The pilot pages are `spaces.md` and `split-tabs.md`; copy one to start.

A feature gets a page when there is a real guide to write (steps or settings) or people search for it. Features with only a sentence or two to say go on the features index instead.

## What the page is for

The page is a user manual first. Someone who just installed Detour should be able to follow it without guessing. Search phrasing goes in the slots search engines read (title, description, slug, lede, FAQ headings), never at the cost of a clear heading or step.

## Page order (fixed by the template)

1. **Breadcrumb and label pill:** from `name` and `label`.
2. **H1:** the feature's name, exactly as the app and the home page call it ("Spaces", "Split Tabs"). Never a question, never a slogan.
3. **Lede:** one plain sentence saying what you get, in the words a person would use ("Two web pages side by side in one window…").
4. **Media:** one loop or still, with a caption.
5. **Body (Markdown):** `## What it does`, then `## How to use it`. See below.
6. **Coming from Arc:** only when `arc` is set.
7. **Questions:** the FAQ.
8. **Related:** cards for related features that have a page.
9. **Download:** the site footer.

## Frontmatter

| Field | What it is | Rules |
| --- | --- | --- |
| `name` | H1, breadcrumb, related-card title | The feature's name in the app. |
| `lede` | The line under the H1, and the related-card text | One sentence, no jargon, under about 110 characters. |
| `title` | The `<title>` | The generic phrase people search for, then `· <Name> \| Detour`. Under about 65 characters. Example: `View two tabs side by side on Mac · Split Tabs \| Detour`. |
| `description` | Meta description and share text | About 150–160 characters. Names the feature and says what you can do with it. |
| `accent` | Color for the pill, steps and the Arc headings | The color of the feature's home page section. |
| `label` | Pill text | Defaults to the name in capitals. |
| `media` | The page's main loop or still | `type: video` with `src`, `poster`, `width`, `height`, `label` (what the loop shows, for screen readers), optional `caption`; or `type: image` with `src`, `width`, `height`, `alt`, optional `caption`. |
| `shareImage` | Social share image | Optional. A landscape image works best; omit it to use the site screenshot. |
| `arc` | Coming from Arc box | Only for features Arc had in comparable form (see below). |
| `faq` | Questions | 3 to 6 entries of `q` and `a`. |
| `related` | Ids of related pages | Ids without a page yet are skipped, so list the right ones now. |

Frontmatter strings that render as HTML (FAQ answers, Arc items) allow a small inline Markdown: `**bold**`, `*emphasis*`, `` `code` ``, `[links](/path/)` and keys as `[[⌘T]]`.

## The body

### What it does

Two or three short paragraphs: what the feature is, then why you'd want it, starting from the problem ("you're logged into the wrong account again"), not from the implementation. Concrete examples beat adjectives.

### How to use it

`###` subsections, one per task the reader has ("Make a split", "Switch Spaces", "Separate the tabs"), then a `### Shortcuts` table when the feature has shortcuts.

- **Numbered lists** for steps that happen in order. **Bulleted lists** for alternatives ("Any of these makes a split").
- Name controls exactly as the app shows them, in bold: **Separate Tabs**, **Spaces › Manage Spaces…**. Use `›` between menu levels.
- Keys as `<kbd>⌥⌘→</kbd>` in the body and `[[⌥⌘→]]` in frontmatter, with the Mac symbols in Apple's order: ⌃ ⌥ ⇧ ⌘, then the key (⇧⌘N, ⌥⌘→). The app's menus show the same order.
- Menu items by the name the menu shows: the File menu's item is **Pin/Unpin Tab**, a tab's own menu says **Pin Tab**.
- Every step, menu title and shortcut is checked against the current release before the page ships: in the code at the release tag and in the running app (TASK-292.2's harness dumped the menus and drove the entry points).
- Extra screenshots go in a `<figure>` with `width` and `height` set to the file's pixel size, `loading="lazy"` and an `alt` describing what is on screen; cap the display size with `style="max-width:…"` for small crops.
- Don't link to feature pages that don't exist yet; the related cards fill in on their own.

## Coming from Arc

Include `arc` only when Arc had the feature in comparable form (Spaces, Split View, Little Arc, Air Traffic Control, the Command Bar, Peek, auto-archive, pinned tabs, favorites, profiles). Features Arc never had (Quarantine, Dev Mode, Site Search) leave it out and don't mention Arc at all: Detour is not pitched as an Arc clone.

- `arcName` is Arc's name for the feature.
- `same`, `different`, `notInDetour`: short, factual items, sourced from Arc's own help center where it covers the point, else from more than one reputable source; leave out details sources disagree on.
- Arc's help center (resources.arc.net) refuses scripted fetches, but the Wayback Machine has it: `https://archive.org/wayback/available?url=resources.arc.net/hc/en-us/articles/<id>` finds the latest capture, and `https://web.archive.org/web/<timestamp>id_/<url>` returns the original (gzip-compressed) page. About 220 article URLs are captured. Third-party guides often disagree with it, e.g. on Arc's shortcuts (Split View is ⌘⇧+, Spaces are ⌃1, ⌃2…).
- No Arc logos, screenshots or styling.
- The box links to the Switching from Arc hub (`/arc/`) automatically once that page exists.

## Questions

3 to 6 questions people actually ask, phrased the way they'd type them ("How do I keep work and personal browsing separate on a Mac?"). These are the page's search-question slots, so the general phrasing belongs here, not in the H1. Answers are two or three sentences and stand on their own. After launch, rewrite them from the Search Console queries that bring people to the page (TASK-292.12).

## Media

Captures come from the staged demo profile and kit in the app repo's `docs/task-110` (public pages only, no personal data). Loops are muted MP4s with a poster, under about 1.5 MB, and play only when on screen and never with reduced motion (`public/script.js` handles every `video.feature-media`). Every image has `width` and `height`.

## Structured data

The template adds `BreadcrumbList` (Detour › feature). No `HowTo` markup: Google no longer shows it. When the features index lands, the breadcrumb gains a Features level.

## Checklist before shipping a page

- `npm run build` passes and the page is in `dist/sitemap.xml`.
- The home page section or grid entry links to the page.
- Checked in a browser at desktop width and at 390 px (no horizontal scroll).
- Steps and shortcuts checked against the release.
