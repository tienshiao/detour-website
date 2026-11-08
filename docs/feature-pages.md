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
| `media` | The page's main loop or still (optional only while the capture is still to be made; never a placeholder) | `type: video` with `src`, `poster`, `width`, `height`, `label` (what the loop shows, for screen readers), optional `caption`; or `type: image` with `src`, `width`, `height`, `alt`, optional `caption`, and optional `displayWidth` (a CSS-pixel cap for small crops, which would otherwise be scaled up to the column width). |
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
- Menu items by the name the menu shows when it opens, which can differ from the item's title in code: the File menu's pin item reads **Pin Tab** or **Unpin Tab** for the current tab (its static title, Pin/Unpin Tab, is never on screen while a tab is selected). Dump menus after validating them.
- Every step, menu title and shortcut is checked against the current release before the page ships: in the code at the release tag and in the running app (TASK-292.2's harness dumped the menus and drove the entry points).
- Extra screenshots go in a `<figure>` with `width` and `height` set to the file's pixel size, `loading="lazy"` and an `alt` describing what is on screen; cap the display size with `style="max-width:…"` for small crops.
- Don't link to feature pages that don't exist yet; the related cards fill in on their own.

## Coming from Arc

Include `arc` only when Arc had the feature in comparable form (Spaces, Split View, Little Arc, Air Traffic Control, the Command Bar, Site Search, Peek, the Tab Switcher, auto-archive, history, pinned tabs, favorites, profiles, Developer Mode, extensions). Features Arc never had (Quarantine, link routing by source app) leave it out and don't mention Arc at all: Detour is not pitched as an Arc clone.

- `arcName` is Arc's name for the feature.
- `same`, `different`, `notInDetour`: short, factual items, sourced from Arc's own help center where it covers the point, else from more than one reputable source; leave out details sources disagree on.
- Arc's help center (resources.arc.net) refuses scripted fetches, but the Wayback Machine has it: `https://archive.org/wayback/available?url=resources.arc.net/hc/en-us/articles/<id>` finds the latest capture, and `https://web.archive.org/web/<timestamp>id_/<url>` returns the original (gzip-compressed) page. About 220 article URLs are captured. Third-party guides often disagree with it, e.g. on Arc's shortcuts (Split View is ⌘⇧+, Spaces are ⌃1, ⌃2…).
- No Arc logos, screenshots or styling.
- The box links to the Switching from Arc hub (`/arc/`) automatically once that page exists.

## Questions

3 to 6 questions people actually ask, phrased the way they'd type them ("How do I keep work and personal browsing separate on a Mac?"). These are the page's search-question slots, so the general phrasing belongs here, not in the H1. Answers are two or three sentences and stand on their own. After launch, rewrite them from the Search Console queries that bring people to the page (TASK-292.12).

## Media

Every page's media is a real capture of Detour, never a mockup or a made-up animation.

### Loop or still

- **A loop** when the feature is something happening: something appears, moves or switches, and a still would need a paragraph to explain it. Peek opening, ⌃Tab cycling, a link landing in Quarantine and being moved into a Space, Quick Detour over another app, typing a site-search keyword.
- **A still** when the feature is a state or a setting: what something looks like, or where to find a control. A Private window, the content blocker's site popover, Settings › Profiles. Stills load faster and work in search results and link previews.
- When in doubt, a still. Search engines read the text, the poster frame and its `aria-label` / `alt`, not the video, so a loop is for the reader, not for ranking.

### Loops

- 4 to 8 seconds, showing one action from start to finish, then a pause on the result before it repeats.
- Muted MP4 with a poster frame (the poster is the result, not a blank start), under about 1.5 MB, encoded at a constant frame rate.
- They play only when on screen and never with reduced motion (`public/script.js` handles every `video.feature-media`); the poster stands in.
- The `label` describes the whole action ("Shift-clicking a link opens it in a Peek over the page, then the Peek expands into a tab").

### Staging and capturing

- Captures come from the staged demo profile and kit in the app repo's `docs/task-110` (2× virtual display, isolated `DETOUR_DATA_DIR`): public pages only, no personal data.
- When another app has to be on screen (a link clicked elsewhere for Quarantine, Quick Detour or Link Routes), use TextEdit or Notes with a document of public links, not Mail, Messages or Slack.
- Make captures in one session, not alongside other app runs: the kit runs a virtual display and swaps the wallpaper (it snapshots and restores it).
- Every image and poster has `width` and `height`; stills are WebP.

## Structured data

The template adds `BreadcrumbList` (Detour › feature). No `HowTo` markup: Google no longer shows it. When the features index lands, the breadcrumb gains a Features level.

## Checklist before shipping a page

- `npm run build` passes and the page is in `dist/sitemap.xml`.
- The home page section or grid entry links to the page.
- Checked in a browser at desktop width and at 390 px (no horizontal scroll).
- Steps and shortcuts checked against the release.
