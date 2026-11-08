---
name: Recent Tabs
lede: Jump back to the tab you just left, or pick any recent tab from a row of previews.
title: Switch to the last used tab with Ctrl-Tab · Recent Tabs | Detour
description: Detour's Recent Tabs flips between tabs in the order you used them. Press ⌃Tab for the last tab, or hold ⌃ to pick from previews. ⌥⌘↑/↓ follow the sidebar.
accent: "#D6409F"
label: RECENT TABS
arc:
  arcName: Tab Switcher
  same:
    - "[[⌃Tab]] switches between the tabs you used most recently."
    - "[[⌥⌘↑]] and [[⌥⌘↓]] go through your tabs in the order the sidebar lists them."
  different:
    - The switcher lists every tab you've used in the Space since Detour opened, not only the last five.
  notInDetour:
    - Closing a tab from the switcher (holding [[⌃]] and pressing W in Arc).
faq:
  - q: How do I switch to the last tab I used on a Mac?
    a: Press [[⌃Tab]] (Control-Tab). Detour switches to the tab you were on before this one. Press it again to go back, so two tabs you're comparing are always one keystroke apart.
  - q: Can Control-Tab go through my tabs in order instead?
    a: "[[⌃Tab]] always goes by when you last used a tab. To go down or up the sidebar in order, press [[⌥⌘↓]] or [[⌥⌘↑]], or choose **Navigate › Next Tab** or **Previous Tab**."
  - q: Why isn't a tab in the Control-Tab switcher?
    a: The switcher lists the tabs of the Space you're in that you've used since Detour opened. Tabs in other Spaces aren't listed, and after you reopen Detour the list starts again from the tab you're on. A pinned tab or favorite that isn't open isn't listed either.
  - q: Does Control-Tab work while I'm typing in a web page?
    a: Yes. Detour takes [[⌃Tab]] before the page sees it, so it switches tabs even from a text field, and nothing you press while the switcher is open reaches the page.
  - q: How many tabs does the switcher show?
    a: Every tab you've used in the Space since Detour opened, most recent first. With many tabs the cards get smaller and the row scrolls to keep the highlighted one in view.
related:
  - split-tabs
  - spaces
  - command-palette
---

## What it does

Most of the time the tab you want is the one you were just on. Recent Tabs keeps your tabs in the order you used them, so <kbd>⌃Tab</kbd> takes you straight back to the last one, wherever it sits in the sidebar. Press it again and you're back where you started: two tabs you're comparing are always one keystroke apart.

Hold <kbd>⌃</kbd> a moment longer and a row of cards appears over the page, one for each tab you've used recently, with a preview of the page, its icon and its title. Keep pressing Tab to go further back, and let go to switch.

When you'd rather go through tabs in the order they're listed, <kbd>⌥⌘↓</kbd> and <kbd>⌥⌘↑</kbd> walk the sidebar from top to bottom.

## How to use it

### Go back to the last tab

Press <kbd>⌃Tab</kbd> and let go. Detour switches to the tab you used before this one, without showing the switcher.

### Pick from your recent tabs

1. Hold <kbd>⌃</kbd> and press Tab. After a moment, the switcher shows a card for each recent tab, with the tab you're on first and the next one highlighted.
2. Keep holding <kbd>⌃</kbd> and press Tab to move further back. <kbd>⌃⇧Tab</kbd> moves the other way, starting from the oldest. The arrow keys <kbd>←</kbd> and <kbd>→</kbd> also move, and pointing at a card highlights it.
3. Let go of <kbd>⌃</kbd> to switch to the highlighted tab. You can also press Return, or click a card.

Press Escape to close the switcher and stay where you are.

### What the switcher lists

- The tabs of the Space you're in, pinned tabs and favorites included, that you've used since Detour opened, most recent first. It never switches you to another Space.
- After you quit and reopen Detour, the list starts again with the tab you're on.
- A [split](/features/split-tabs/) is one card showing both pages. Choosing it brings back the pane you were using.
- A tab with a [Peek](/features/peek/) open shows the Peek on its card, since the Peek comes back when you switch to it.

Each card's preview is taken as you leave the tab, so it shows the page as you last saw it. A tab without a preview shows its icon.

### Go through tabs in sidebar order

- Press <kbd>⌥⌘↓</kbd> (**Navigate › Next Tab**) to go to the next tab down the sidebar, and <kbd>⌥⌘↑</kbd> (**Navigate › Previous Tab**) to go up.
- The order is your pinned tabs, then your other tabs, top to bottom. After the last tab it starts again at the top.
- A split counts as one tab. Favorites, and pinned tabs inside a collapsed folder, are skipped. A pinned tab that isn't open opens when you reach it.

### Shortcuts

| Do this | Press |
| --- | --- |
| Switch to the last tab you used | <kbd>⌃Tab</kbd> |
| Go further back in the switcher | Hold <kbd>⌃</kbd>, press Tab again |
| Go the other way in the switcher | <kbd>⌃⇧Tab</kbd> |
| Close the switcher without switching | Escape |
| Next tab in the sidebar | <kbd>⌥⌘↓</kbd> |
| Previous tab in the sidebar | <kbd>⌥⌘↑</kbd> |
