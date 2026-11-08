---
name: Command Palette
lede: One box to open a page, search the web or jump to a tab you already have open.
title: Search open tabs and history on Mac · Command Palette | Detour
description: Detour's Command Palette is its address bar. Press ⌘T to open a page or search in a new tab, or ⌘L to change this one. Open tabs and history appear as you type.
accent: "#3E63DD"
label: COMMAND PALETTE
arc:
  arcName: Command Bar
  same:
    - "[[⌘T]] opens it for a new tab, and [[⌘L]] changes the address of the tab you're on."
    - Type a site's shortcut and press Tab to search that site. See [Site Search](/features/site-search/).
    - Each Profile has its own search engine, chosen in **Settings › Profiles**.
  different:
    - It's an address bar more than a command line. It opens pages, searches the web and switches to open tabs.
    - Site searches are listed in **Settings › Search**, not in a browser settings page.
  notInDetour:
    - Typing a command, such as Arc's "View Archive" or "clear archive". Use **Navigate › Show Archived Tabs** and **Navigate › Clear Archived Tabs…**.
faq:
  - q: How do I switch to a tab I already have open instead of opening it again?
    a: Type part of its title or address in the palette. A tab that's already open says **Switch to Tab**; pick it with the arrow keys and press Return, or click it. Tabs in your other Spaces on the same Profile are offered too, and the window moves to that Space.
  - q: How do I change the search engine in Detour?
    a: Choose **Detour › Settings…** ([[⌘,]]), click **Profiles** and select the Profile. Pick Google, DuckDuckGo, Bing, Yahoo, Ecosia or Kagi under **Search engine**. Each Profile keeps its own, and Google is the default.
  - q: How do I turn off search suggestions?
    a: In **Settings › Profiles**, select the Profile and turn off **Search suggestions**. The palette then stops asking your search engine for suggestions as you type, and shows only your tabs, your history and a search for exactly what you typed.
  - q: Where is the address bar in Detour?
    a: The top of the sidebar shows the site you're on. Click it, or press [[⌘L]], and the palette opens with the full address selected, ready to edit.
  - q: Does the palette show my history in a Private window?
    a: No. A Private window keeps no history, and its palette offers only the tabs in that window. It never suggests pages from your other Profiles.
related:
  - site-search
  - history
  - recent-tabs
  - profiles
---

## What it does

The Command Palette is where you type in Detour. It does the job of the address bar and the search box, and it finds tabs you already have open, so you don't end up with the same page open three times.

Start typing and the list fills in: the address completes to the site you probably mean, tabs you have open say **Switch to Tab**, pages from your history follow, and your search engine adds suggestions. Press Return and you're there.

Everything the palette suggests comes from the window's Profile. In a Space on your Work Profile you see work tabs and work history, never the pages you visited on your Personal Profile.

## How to use it

### Open a page or search in a new tab

1. Press <kbd>⌘T</kbd> or choose **File › New Tab**. The palette opens in the middle of the window.
2. Type an address, or what you want to search for. The address completes to the closest match as you type.
3. Press Return. Or press <kbd>↓</kbd> and <kbd>↑</kbd> to choose a row first, or click one.

Text that isn't an address is searched with the Profile's search engine. Press <kbd>⌘T</kbd> again to close the palette without opening anything.

### Change the page in this tab

1. Press <kbd>⌘L</kbd> or choose **File › Open Location…**, or click the address at the top of the sidebar.
2. The palette opens with the current address selected. Type a new address or a search and press Return. The page opens in the same tab.

With a [Peek](/features/peek/) open, <kbd>⌘L</kbd> shows the Peek's address, and what you type opens in a new tab.

### What the list shows

- **Before you type:** the pages you visited most recently. Ones that are still open say **Switch to Tab**.
- **As you type:** the best match first, then a row that searches for exactly what you typed, other sites you've visited that start with it, up to three matching open tabs, pages from your history and search suggestions.
- **Site searches:** typing a site's keyword, such as `yt`, adds a **Search YouTube** row. Press Tab to search that site. See [Site Search](/features/site-search/).

Open tabs come from every Space on the window's Profile, pinned tabs included. Choosing one in another Space moves the window to that Space. History comes from the same Profile. A Private window's palette offers only that window's tabs.

### Choose a search engine

1. Choose **Detour › Settings…** (<kbd>⌘,</kbd>) and click **Profiles**, then select the Profile.
2. Under **Search**, pick a **Search engine**: Google (the default), DuckDuckGo, Bing, Yahoo, Ecosia or Kagi.
3. Turn off **Search suggestions** if you don't want the palette to send what you type to the search engine for suggestions.

### Shortcuts

| Do this | Press |
| --- | --- |
| Open a page or search in a new tab | <kbd>⌘T</kbd> |
| Change the page in this tab | <kbd>⌘L</kbd> |
| Move through the list | <kbd>↑</kbd> <kbd>↓</kbd> |
| Open the selected row | Return |
| Accept the completion, or search a site | Tab |
| Clear the field, then close the palette | Escape |
