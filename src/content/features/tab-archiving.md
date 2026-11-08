---
name: Tab Archiving
lede: Tabs you stop using put themselves away, and wait on the Archived Tabs page until you want them back.
title: Automatically close unused tabs on Mac · Tab Archiving | Detour
description: Detour archives tabs you haven't looked at in 12 hours, or a time you choose per Profile. Closed and archived tabs wait on the Archived Tabs page to be restored.
accent: "#64748B"
label: TAB ARCHIVING
media:
  type: image
  src: /assets/features/tab-archiving.webp
  width: 1140
  height: 820
  alt: "Detour's Archived Tabs page in the sidebar, with a Search Archive field and archived tabs such as Hypertext, MacBook Air and Xcode grouped under Yesterday, 2 days ago and 3 days ago, each with its Space's icon"
  caption: "Archived tabs wait on the Archived Tabs page, grouped by day."
arc:
  arcName: Auto Archive
  same:
    - Tabs you haven't looked at archive after 12 hours by default, and looking at a tab starts its clock again.
    - The time is set per Profile, under **Archive tabs after**.
    - Pinned tabs and favorites are never archived.
    - Closed and archived tabs from every Space are listed together, and you can search them. A restored tab goes back to the Space it came from.
    - A tab's menu has **Archive Tabs Below**.
    - Archived tabs have their own page in the sidebar, to the left of your first Space.
  different:
    - You can turn it off. Choose **Never** under **Archive tabs after**.
    - Clear it with **Navigate › Clear Archived Tabs…**, or **Clear Archive…** in the page's filter menu.
faq:
  - q: How do I stop Detour from closing my tabs?
    a: Choose **Detour › Settings…**, click **Profiles**, select the Profile and set **Archive tabs after** to **Never**. Or pin the tabs you want to keep with [[⌘D]]. Pinned tabs and favorites are never archived.
  - q: Where did my tab go?
    a: If you haven't looked at it in a while, it was archived. Choose **Navigate › Show Archived Tabs**, find it by title or address and click it. It goes back where it was, in its own Space.
  - q: How do I reopen a tab I closed by accident?
    a: Press [[⇧⌘T]] (**File › Reopen Closed Tab**) to bring back the last tab you closed in this Space. Tabs you closed longer ago are also on the Archived Tabs page.
  - q: Does archiving delete the page or its history?
    a: No. An archived tab is kept on the Archived Tabs page with its address, title and back and forward history until you restore or delete it. Your browsing History isn't touched.
  - q: What's the difference between a sleeping tab and an archived tab?
    a: A sleeping tab stays in the sidebar but gives back its memory; it reloads when you click it. An archived tab leaves the sidebar for the Archived Tabs page. Both are set per Profile, with **Sleep tabs after** and **Archive tabs after**.
related:
  - pinned-tabs
  - favorites
  - spaces
  - history
---

## What it does

Tabs pile up: the search you finished, the article you meant to read, ten pages from yesterday's research. Detour clears them out for you. A tab you haven't looked at for 12 hours is archived: it leaves the sidebar, and the Archived Tabs page keeps it until you want it back.

The tabs you want to keep belong in your pinned tabs and favorites, which are never archived. Everything else can come and go, so the sidebar only shows what you're working on now.

Nothing is lost. The Archived Tabs page lists every tab that was archived or that you closed, from every Space, newest first. Search it, restore a tab with one click, and it's back in its Space with its back and forward history.

## How to use it

### Choose when tabs archive

1. Choose **Detour › Settings…** (<kbd>⌘,</kbd>) and click **Profiles**, then select the Profile.
2. Set **Archive tabs after** to **12 hours** (the default), **24 hours**, **7 days**, **30 days** or **Never**.

The time counts from when you last left the tab, so a tab you keep coming back to is never archived. Each Profile has its own setting, so a Work Profile can keep tabs for a week while Personal clears out every evening.

### What is never archived

- Pinned tabs and favorites.
- Tabs in Private windows.
- The last tab in a Space.
- One half of a [split](/features/split-tabs/). A split is archived only when you've left both tabs alone.

### Archive tabs yourself

Right-click a tab in the sidebar and choose:

- **Archive Tab** to put it away now.
- **Archive Tabs Below** to archive every tab under it in the list. It's handy at the end of the day.

**Edit › Undo Archive Tab** (<kbd>⌘Z</kbd>) brings a tab back right after you archive it.

### Find and restore a tab

1. Choose **Navigate › Show Archived Tabs**, or swipe right with two fingers over the sidebar while you're on your first Space: the Archived Tabs page slides in from the left.
2. Tabs are grouped by when they were closed: Today, Yesterday, then days, weeks and months ago. Each one shows its title, its address and its Space's emoji.
3. Type in **Search Archive…** to find a tab by its title or address. To see one Space only, click the filter button and pick the Space.
4. Click a tab to restore it, or select it and press Return. It goes back into its own Space at the place it was, and Detour switches to that Space.

Choose **Navigate › Show Archived Tabs** again to go back to your tabs.

### Delete archived tabs

- Right-click a tab on the Archived Tabs page and choose **Delete**, or select it and press Delete.
- To empty the page, choose **Clear Archive…** from the filter menu or **Navigate › Clear Archived Tabs…**, then click **Clear**. With a Space picked in the filter, only that Space's tabs are cleared. This can't be undone.

### Archived tabs and closed tabs

Tabs you close yourself go to the Archived Tabs page too, so you can find them later. **File › Reopen Closed Tab** (<kbd>⇧⌘T</kbd>) only brings back tabs you closed, newest first, never ones that were archived.

Sleeping is something else. **Sleep tabs after** (15 minutes to 2 hours, or Never; 1 hour by default) frees a quiet tab's memory but leaves it in the sidebar, and it reloads when you click it. Archiving takes the tab out of the sidebar.

### Shortcuts

| Do this | Press |
| --- | --- |
| Reopen the last tab you closed | <kbd>⇧⌘T</kbd> |
| Undo an archive | <kbd>⌘Z</kbd> |
| Restore the selected archived tab | Return |
| Delete the selected archived tab | Delete |
