---
name: Pinned Tabs & Folders
lede: Keep the sites you always use at the top of each Space, grouped in folders, one click from home.
title: Organize pinned tabs in folders · Pinned Tabs & Folders | Detour
description: Detour's pinned tabs keep your everyday sites at the top of each Space, in folders if you like. Close one and it stays; click it to reopen the page you pinned.
accent: "#7C5CFF"
label: PINNED TABS & FOLDERS
media:
  type: video
  src: /assets/features/pinned.mp4
  poster: /assets/features/pinned-poster.webp
  width: 700
  height: 880
  label: Pinned tabs grouped into Design and Research folders that collapse and expand in the sidebar
  caption: Pinned tabs sit above the line, in folders that open and close with a click.
arc:
  arcName: Pinned Tabs and Folders
  same:
    - Pinned tabs belong to one Space and sit above the line in the sidebar.
    - "[[⌘D]] pins and unpins a tab, and dragging a tab above the line pins it."
    - A pinned tab stays on its site. Links to other sites open in a Peek.
    - Pinned tabs never archive, and folders group them.
  different:
    - To get back to the page you pinned, close the pinned tab and click it again. Arc reset a pinned tab when you clicked its icon.
    - You make a folder with **New Folder** in the sidebar's right-click menu. The **+** at the bottom of Detour's sidebar adds a Space.
  notInDetour:
    - Sharing a folder as a link, and previewing a folder's tabs when you hover over it.
    - Hiding the whole pinned section with the arrow next to the Space's name. Close individual folders instead.
faq:
  - q: How do I keep a tab open permanently in my browser?
    a: Pin it with [[⌘D]]. A pinned tab stays at the top of its Space, comes back when you relaunch Detour, and is never archived. Closing it doesn't remove it either; it waits in place until you click it again.
  - q: What happens when I close a pinned tab?
    a: Its page closes and frees its memory, but the tab stays in the sidebar where it was. Click it to load the address you pinned. To remove a pinned tab for good, close it first, then click the **×** on its row.
  - q: Why do links from a pinned tab open in a preview?
    a: A pinned tab is meant to stay on its site, so links to other sites open in a Peek on top of it instead of taking the tab elsewhere. Close the Peek with [[⌘W]] or Esc, or open it as a tab if you want to keep it.
  - q: Are pinned tabs shared between Spaces?
    a: No. Each Space has its own pinned tabs and folders. For sites you want in every Space, drag the tab to the top of the sidebar to make it a [favorite](/features/favorites/); favorites are shared by every Space on the same Profile.
  - q: Can a folder hold tabs that aren't pinned?
    a: No. Folders live in the pinned section. Dragging a tab onto a folder pins it there, and a folder can hold other folders.
  - q: Can I pin tabs in a Private window?
    a: No. A Private window keeps nothing when it closes, so it has no pinned tabs, and **Pin Tab** is not available there.
related:
  - spaces
  - favorites
  - split-tabs
  - peek
  - tab-archiving
---

## What it does

Pinned tabs are for the sites you always have open: mail, calendar, the doc you're writing, the project board. They sit at the top of a Space's tab list, above a thin line, and they stay there. Each Space has its own set, so Work's pinned tabs don't crowd Personal's.

A pinned tab doesn't go away when you close it. The page closes and its memory is freed, but the tab keeps its place in the sidebar, and clicking it loads the address you pinned. So closing a pinned tab is also how you reset it: you're back on the page you pinned, not wherever you'd wandered off to.

While you use a pinned tab, it behaves like an app for its site. You can go anywhere on the same site, and the sidebar shows a slash before the page's title ("/ Pull requests") while you're away from the pinned page. Links to other sites open in a Peek on top, so the pinned tab stays put. Pinned tabs are never archived.

Folders group pinned tabs, say Design and Research, and can hold folders of their own. Click a folder to open or close it.

## How to use it

### Pin a tab

Any of these pins the tab you're on or the one you pick:

- Press <kbd>⌘D</kbd>, or choose **File › Pin Tab**.
- Right-click the tab in the sidebar and choose **Pin Tab**.
- Drag the tab above the line in the sidebar, or onto a folder.

The pinned tab goes to the end of the pinned section, and the page it shows becomes its home. A tab that hasn't loaded a page yet can't be pinned.

### Go back to the page you pinned

1. Close the pinned tab: press <kbd>⌘W</kbd>, or click the **–** button on its row.
2. Click the tab. It loads the address you pinned.

### Rename, move or unpin a pinned tab

Right-click the pinned tab:

- **Rename…** changes the name the sidebar shows. Type it and press Return.
- **Move to** moves the tab, still pinned, to another Space.
- **Unpin Tab** moves it back to the top of your other tabs. <kbd>⌘D</kbd> or **File › Unpin Tab** does the same for the tab you're on, and you can also drag it below the line.

Drag pinned tabs up and down to reorder them.

### Remove a pinned tab

1. Close it with <kbd>⌘W</kbd> or the **–** button.
2. Click the **×** on its row. **Edit › Undo** (<kbd>⌘Z</kbd>) brings it back.

### Group pinned tabs in folders

1. Right-click an empty part of the sidebar's tab list and choose **New Folder**. A folder called "New Folder" appears at the end of the pinned section.
2. Right-click the folder, choose **Rename…**, type a name and press Return.
3. Drag pinned tabs onto the folder. Dragging a tab that isn't pinned onto a folder pins it there.

Right-click a folder for more:

- **New Nested Folder** makes a folder inside it.
- **Delete Folder** removes the folder but keeps what was in it: its tabs and folders move up a level, to where the folder was.

### Pin a split

Drag a split's row above the line to pin both tabs as a pair. Each half keeps working like a pinned tab: closing one side closes only that side's page, and the pair stays together. To make them two separate pinned tabs, right-click the pinned split and choose **Separate Tabs**.

### Shortcuts

| Do this | Press |
| --- | --- |
| Pin or unpin the current tab | <kbd>⌘D</kbd> |
| Close a pinned tab (it stays pinned) | <kbd>⌘W</kbd> |
| Close a Peek | <kbd>⌘W</kbd> or Esc |
| Undo | <kbd>⌘Z</kbd> |
