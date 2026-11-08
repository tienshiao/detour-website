---
name: History
lede: Every page you've visited, searchable by title or address, and easy to delete.
title: Search and clear browsing history on Mac · History | Detour
description: Detour's History page lists the pages you visited on a Profile, by day. Search by title or address, pick a time range, and delete entries or clear history.
accent: "#8D6E4C"
label: HISTORY
arc:
  arcName: History
  same:
    - "[[⌘Y]] opens it."
    - History is kept per Profile, and clearing it clears only that Profile's.
  different:
    - The menu item is **Navigate › Show All History**. Arc's was **Archive › View History**.
    - You clear history on the History page itself, for the last hour, today or all of it. Arc sent you to the Profile's browsing data settings.
faq:
  - q: How do I see my browsing history in Detour?
    a: Press [[⌘Y]] or choose **Navigate › Show All History**. The History page opens in a tab, with the newest visits first, grouped by day.
  - q: How do I delete one page from my history?
    a: Open History with [[⌘Y]], find the page, point at its row and click the **×** at the end. To delete several, tick the box at the start of each row and click **Delete**.
  - q: How do I clear my history for the last hour or for today?
    a: On the History page, click **Clear History…** and choose **Last hour**, **Today** or **All history**, then confirm. Only the Profile you're in is cleared, and it can't be undone.
  - q: Is my history shared between Profiles?
    a: No. Each Profile has its own history, and the History page shows only the Profile of the Space you're in. Spaces that share a Profile share its history.
  - q: How long does Detour keep my history?
    a: 90 days. Older visits are removed when Detour starts. Pages you open in a Private window or a Peek are never recorded.
related:
  - profiles
  - command-palette
  - tab-archiving
  - private-browsing
---

## What it does

History is the list of pages you've visited, newest first and grouped by day: Today, Yesterday, then each earlier date. Each entry has the page's title, its site and the time you were there. Click one to open it again.

It's how you find the article you read on Tuesday and didn't keep open, or the docs page whose name you only half remember. Search by any word of the title, or by part of the address, and narrow it to today, yesterday, the last week or a single day.

History belongs to a **Profile**. The History page shows the pages you visited in every Space on the Profile you're in, plus its Quick Detour windows, and nothing from your other Profiles. The [Command Palette](/features/command-palette/) suggests pages from the same history as you type.

## How to use it

### Open History

Press <kbd>⌘Y</kbd> or choose **Navigate › Show All History**. History opens in a new tab in the Space you're in. If the Space already has a History tab, <kbd>⌘Y</kbd> takes you to it.

Click an entry to open the page in the History tab, or <kbd>⌘</kbd>-click it to open it in a new tab in the background.

### Find a page

- Type in **Search History** at the top. Detour matches the page's title and its address, so `invoice` and `github.com/acme` both work.
- Use the time menu next to the search field to pick **All time**, **Today**, **Yesterday**, **Last 7 days**, **Last 30 days** or **Specific day…**, which shows a date picker.

While you search, each page is listed once, at the last time you visited it.

### Delete entries

- Point at a row and click the **×** at its end to delete it.
- To delete several, tick the box at the start of each row: it appears when you point at the row. Shift-click a second box to tick the rows in between, or press <kbd>⌘A</kbd> to tick everything listed. Then click **Delete** at the top, or press Delete.

Deleting a row from a search removes every visit to that page in the time range you're looking at.

### Clear history

1. Click **Clear History…** at the top of the History page.
2. Choose **Last hour**, **Today** or **All history**.
3. Detour asks first, naming the Profile it will clear. Click **Clear History** to confirm. Other Profiles keep theirs, and it can't be undone.

### What isn't recorded

- Pages in a [Private window](/features/private-browsing/) or in [Quarantine](/features/quarantine/). A Private window's History page says "Private browsing keeps no history".
- Pages you visit inside a [Peek](/features/peek/). Open the Peek in a new tab and later visits are recorded as usual.
- Pages that failed to load.

Detour keeps 90 days of history and removes older visits when it starts.

Closed and archived tabs are kept separately, on the Archived Tabs page: see [Tab Archiving](/features/tab-archiving/). Clearing history doesn't remove them.

### Shortcuts

| Do this | Press |
| --- | --- |
| Open History | <kbd>⌘Y</kbd> |
| Tick every loaded entry | <kbd>⌘A</kbd> |
| Delete the ticked entries | Delete |
| Untick everything | Escape |
