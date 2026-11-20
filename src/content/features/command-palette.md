---
name: Command Palette
lede: One box to open a page, search the web, jump to a tab you already have open or run a browser command.
title: Search open tabs and history on Mac · Command Palette | Detour
description: Detour's Command Palette is its address bar. Press ⌘T to open a page or search in a new tab, or ⌘L to change this one. Open tabs, history and commands appear as you type.
accent: "#3E63DD"
label: COMMAND PALETTE
media:
  type: video
  src: /assets/features/command-palette.mp4
  poster: /assets/features/command-palette-poster.webp
  width: 1140
  height: 820
  label: "Pressing Command-T in Detour opens the Command Palette over the page; typing \"app\" lists an open Apple tab, history and search suggestions, and Return opens Apple's Mac page in a new tab"
  caption: "⌘T, a few letters, Return. Open tabs and history come first."
arc:
  arcName: Command Bar
  same:
    - "[[⌘T]] opens it for a new tab, and [[⌘L]] changes the address of the tab you're on."
    - Type a site's shortcut and press Tab to search that site. See [Site Search](/features/site-search/).
    - Each Profile has its own search engine, chosen in **Settings › Profiles**.
    - Type a command's name, such as "archive" for **Show Archived Tabs**, and press Return to run it.
  different:
    - It's an address bar first. A command shows up below the address you typed once three letters match it; type `>` first to see only commands.
    - A command that needs a Space, a tab or an extension asks for it right in the field.
    - Site searches are listed in **Settings › Search**, not in a browser settings page.
faq:
  - q: How do I switch to a tab I already have open instead of opening it again?
    a: Type part of its title or address in the palette. A tab that's already open says **Switch to Tab**; pick it with the arrow keys and press Return, or click it. Tabs in your other Spaces on the same Profile are offered too, and the window moves to that Space.
  - q: How do I change the search engine in Detour?
    a: Choose **Detour › Settings…** ([[⌘,]]), click **Profiles** and select the Profile. Pick Google, DuckDuckGo, Bing, Yahoo, Ecosia or Kagi under **Search engine**. Each Profile keeps its own, and Google is the default.
  - q: How do I turn off search suggestions?
    a: In **Settings › Profiles**, select the Profile and turn off **Search suggestions**. The palette then stops asking your search engine for suggestions as you type, and shows only your tabs, your history and a search for exactly what you typed.
  - q: Where is the address bar in Detour?
    a: The top of the sidebar shows the site you're on. Click it, or press [[⌘L]], and the palette opens with the full address selected, ready to edit.
  - q: Can I run menu commands from the Command Palette?
    a: Yes. Type part of a command's name, such as `pin` or `close tab`, and it appears in the list below what you typed; choose it and press Return. Type `>` first to list every command the window can run, or `>` and a few letters to search commands only.
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
- **Commands:** once three letters match a menu command's name, up to two commands appear below the row for what you typed. See [Run a command](#run-a-command).
- **Local web servers:** typing `localhost`, `127.0.0.1` or a port number lists the web servers running on your Mac. See [Open a local web server](#open-a-local-web-server).

Open tabs come from every Space on the window's Profile, pinned tabs included. Choosing one in another Space moves the window to that Space. History comes from the same Profile. A Private window's palette offers only that window's tabs.

### Run a command

The palette runs the commands in Detour's menus, so you can keep your hands on the keyboard.

1. Press <kbd>⌘T</kbd> and type part of the command's name: `pin` for **Pin Tab**, `tab close` for **Close Tab**, `archive` for **Show Archived Tabs**. Some commands also answer to other words, such as `refresh` for **Reload Page**.
2. The command appears below the row for what you typed, with its shortcut. Press <kbd>↓</kbd> to choose it and press Return, or click it.

To see commands only, type `>` first. `>` on its own lists every command the window can run, in menu order; `>` and a few letters lists the matches, best first. Nothing typed after `>` is ever searched on the web.

A command that needs something more asks for it in the field. **Switch to Space** and **Move Tab to Space** ask for a Space, **Split with Tab** for a tab, and **Show Extension Popup** and **Extension Options** for an extension. Press Return on the command and the field shows it as a label, with the choices listed below. Type to narrow them down and press Return. Delete at the start of the field removes the label and puts back what you typed; Escape leaves the command.

### Open a local web server

If you build websites, the palette knows which development servers are running on your Mac.

- Type `localhost`, `127.0.0.1` or the start of a port number, such as `51`. The palette lists the web servers running on your Mac that answer, each with the folder it was started from, and opens the right one with `http` or `https`.
- Type part of a project's folder name, such as `website`, to find its server, open tab or history, even without `localhost` in what you typed.
- A server you visited before keeps its history row, which shows the folder while the server runs. Addresses whose server has stopped go below the ones that are running.

Only servers started by you from a folder on your Mac are listed, not databases or other apps' ports. [Quick Detour](/features/quick-detour/) lists them too, and pages on `localhost` open with [Dev Mode](/features/dev-mode/) on.

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
| Open the selected row, or run the selected command | Return |
| List only commands | <kbd>></kbd> |
| Accept the completion, or search a site | Tab |
| Clear the field, then close the palette (opened with <kbd>⌘L</kbd>, it closes at once) | Escape |
