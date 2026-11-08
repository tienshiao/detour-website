---
name: Peek
lede: Open a link in a panel over the page you're on, then close it or keep it as a tab.
title: Preview a link without leaving the page on Mac · Peek | Detour
description: Detour's Peek opens a link in a panel over the page. Shift-click any link, or click a link to another site in a pinned tab, then close it or keep it as a tab.
accent: "#AB4ABA"
label: PEEK
media:
  type: video
  src: /assets/features/peek.mp4
  poster: /assets/features/peek-poster.webp
  width: 1140
  height: 820
  label: "A Wikipedia article in Detour. Shift-clicking the Safari link slides the Safari article up in a Peek over the page, with Close, Open in New Tab and Open in Split View buttons beside it; clicking Open in New Tab turns the Peek into a selected tab in the sidebar"
  caption: "Shift-click a link to Peek at it, then keep it as a tab with Open in New Tab."
arc:
  arcName: Peek
  same:
    - Clicking a link to another site in a pinned tab or a favorite opens it in a Peek, so the pinned page stays where it was.
    - Shift-click opens any link in a Peek.
    - Buttons next to the Peek open it as a new tab or put it in a split.
    - The close button, Escape, [[⌘W]] or a click outside the Peek closes it.
  different:
    - A meeting link in a pinned calendar opens in a Peek like any other link to another site. Arc opened meeting links in a new tab.
  notInDetour:
    - A shortcut that opens the Peek as a tab ([[⌘O]] in Arc). Click **Open in New Tab** next to the Peek.
    - Settings that turn Peek off. To skip the Peek, [[⌘]]-click a link to open it in a background tab.
    - Reopening a closed Peek with [[⇧⌘T]] or [[⌘Z]].
faq:
  - q: How do I preview a link without leaving the page?
    a: Shift-click it. The link opens in a Peek, a panel over the page you're reading. Press Escape when you're done and you're back where you were.
  - q: How do I turn a Peek into a normal tab?
    a: Click **Open in New Tab**, the second button to the right of the Peek. The page moves into a new tab with its back history, and the Peek closes. **Open in Split View** puts it next to the page instead.
  - q: Why do links in my pinned tabs open in a Peek?
    a: So the pinned page stays on its own site. A link to another site, or one that opens a new window, opens in a Peek over the pinned tab. Links within the same site load in the tab as usual. [[⌘]]-click a link to open it in a background tab instead.
  - q: Where did my Peek go when I switched tabs?
    a: It stays with its tab. Switch back to the tab and the Peek is there again, where you left it, even after you quit and reopen Detour. Close it with Escape or [[⌘W]].
  - q: Do pages I open in a Peek show up in my history?
    a: No. Pages you visit in a Peek aren't added to History. Open the Peek in a new tab if you want the page there.
related:
  - pinned-tabs
  - favorites
  - split-tabs
---

## What it does

A Peek opens a link in a rounded panel over the page you're on. The page behind it dims but stays exactly where it was, so you can read the link, check something and close it without losing your place.

It's made for quick looks: the article a chat message links to, a footnote, a product page from a search, a document linked from your mail. If it turns out to be worth keeping, open it as a tab or put it beside the page in a split.

Pinned tabs and favorites use Peek on their own. A link that leaves the site opens in a Peek, so your mail, calendar or chat stays on its home page instead of wandering off.

## How to use it

### Open a Peek

- **Shift-click a link** in any tab.
- **Click a link to another site in a pinned tab or a favorite.** Links that open a new window, and pages that open a new tab from a script, open in a Peek there too, even on the same site. A link within the same site loads in the tab as usual.

Links you click inside a Peek open in the same Peek.

### Close it or keep it

Three buttons sit to the right of the Peek, from the top:

- **Close** closes it. So do Escape, <kbd>⌘W</kbd> and a click on the dimmed page around it.
- **Open in New Tab** moves the page into a new tab, with its back and forward history.
- **Open in Split View** puts the page next to the one you were on, in a [split](/features/split-tabs/). The button doesn't show when the tab is already in a split.

### Come back to a Peek

A Peek belongs to its tab. Switch to another tab and it goes away with the tab; switch back and it's there again, still on the page you left it on. It stays after you quit and reopen Detour too. While a tab has a Peek, its row in the sidebar shows the Peek's icon.

<kbd>⌘L</kbd> with a Peek open shows the Peek's address, and anything you type opens in a new tab.

### Other ways to open a link

| Do this | Press |
| --- | --- |
| Open a link in a Peek | <kbd>⇧</kbd>-click |
| Open a link in a split | <kbd>⌥</kbd>-click |
| Open a link in a background tab | <kbd>⌘</kbd>-click |
| Close the Peek | Escape or <kbd>⌘W</kbd> |
