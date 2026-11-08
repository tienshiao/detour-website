---
name: Split Tabs
lede: Two web pages side by side in one window, kept together as one row in the sidebar.
title: View two tabs side by side on Mac · Split Tabs | Detour
description: Detour's Split Tabs put two web pages side by side in one window. Drag a tab onto another or Option-click a link, resize the panes, and keep the pair together.
accent: "#2F7BF6"
label: SPLIT TABS
media:
  type: image
  src: /assets/features/split.webp
  width: 1392
  height: 792
  alt: A Detour window showing a Wikipedia article and Apple's Mac page side by side, shown in the sidebar as one split row
  caption: One split, one sidebar row. Each half of the row is one pane.
shareImage:
  src: /assets/features/split.webp
  width: 1392
  height: 792
  alt: A Detour window with two web pages side by side
arc:
  arcName: Split View
  same:
    - Two pages side by side in one window, shown as a single entry in the sidebar.
    - Drag a tab from the sidebar onto the page to split it.
    - Drag the gap between the panes to resize them.
  different:
    - A split holds two tabs. Arc's Split View holds up to four.
    - Panes sit side by side only. Arc can also stack them top and bottom.
  notInDetour:
    - A keyboard shortcut that adds a split. Option-click a link, or choose **Split with Next Tab** in a tab's menu.
faq:
  - q: Can I split more than two tabs?
    a: No. A split is two tabs side by side, and a tab can be in one split at a time. Two panes keep each page wide enough to use on a laptop screen.
  - q: How do I open a link next to the page I'm reading?
    a: Option-click it. The link opens in a new pane to the right. If the tab is already split, the link loads in the other pane instead of adding a tab.
  - q: Does a split remember how I sized it?
    a: Yes. Each split keeps its divider position when you switch tabs and when you quit and reopen Detour.
  - q: What happens to the other tab when I close one pane?
    a: It stays open as a normal tab and becomes the selected one. In a pinned split, closing a pane only puts that side to sleep, so the pair stays pinned.
  - q: Option-click used to download links in Safari. How do I download a link in Detour?
    a: Right-click the link and choose **Download Linked File**. Option-click opens links in a split instead.
related:
  - spaces
  - pinned-tabs
  - peek
---

## What it does

A split puts two tabs side by side in one window. In the sidebar the pair is a single row: each half shows one page's icon and title, so the two stay together when you switch to another tab and come back.

It's for the jobs where you keep looking from one page to another: writing next to the docs you're quoting, a ticket next to the pull request, a recipe next to the shopping list, a video next to your notes. Instead of flipping tabs or arranging two windows, you get both pages in one place, and they move, pin and close as a pair.

## How to use it

### Make a split

Any of these makes a split:

- **Drag a tab onto the page.** Drag a tab from the sidebar onto the left or right side of the page you're looking at. A preview shows which half it will take.
- **Drag a tab onto another tab.** In the sidebar, drop a tab on the left or right edge of another tab's row. Dropping it in the middle of the row just moves it.
- **Option-click a link.** The link opens in a new pane to the right of the current page. You can also right-click a link and choose **Open Link in Split View**, or click the split button in a Peek.
- **From the sidebar menu.** Right-click a tab and choose **Split with Next Tab** to pair it with the tab below it.

Option-clicking a link in a pinned tab or a favorite leaves that tab alone: Detour opens a new split in your tabs with a copy of the page on the left and the link on the right.

### Work in a split

1. Click a pane to work in it. The focused pane has a thin outline, and the address bar, Back and Forward, Find (<kbd>⌘F</kbd>) and Close Tab (<kbd>⌘W</kbd>) all act on it.
2. Drag the gap between the panes to resize them, anywhere from 20% to 80% of the window. Each split remembers its size.
3. Click the split's row in the sidebar to come back to it. Detour returns you to the pane you used last.

When you switch tabs with <kbd>⌃Tab</kbd> or walk the sidebar with <kbd>⌥⌘↑</kbd> and <kbd>⌥⌘↓</kbd>, a split counts as one tab.

### Move or pin a split

- Drag the split's row to move both tabs together.
- Drag it into the pinned section, or onto a pinned folder, to pin the pair. Drag it back into your tabs to unpin it; it stays a split.
- Pinning the focused pane with **File › Pin Tab** (<kbd>⌘D</kbd>) takes that tab out of the split and pins it on its own.

### Separate the tabs

- Right-click the split's row and choose **Separate Tabs**. Both tabs stay open, next to each other.
- Or drag one half out of the row by its icon and drop it between other tabs.
- Or close one pane, with the close button on its half of the row or <kbd>⌘W</kbd>. The other tab stays open on its own.
- **Close Both Splits** in the row's menu closes both tabs. **Undo** (<kbd>⌘Z</kbd>) brings the pair back, and undoing **Separate Tabs** or a single close joins the tabs up again.

### Shortcuts

| Do this | Press |
| --- | --- |
| Open a link in a split | <kbd>⌥</kbd>-click the link |
| Close the focused pane | <kbd>⌘W</kbd> |
| Find in the focused pane | <kbd>⌘F</kbd> |
| Undo a separate or a close | <kbd>⌘Z</kbd> |
