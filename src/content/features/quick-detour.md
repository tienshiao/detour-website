---
name: Quick Detour
lede: Press ⌥⌘N in any app to look something up in a small window, then keep it or let it go.
title: Open a browser window from any app on Mac · Quick Detour | Detour
description: Detour's Quick Detour opens a small one-page browser window from any app with ⌥⌘N. Look something up, then move the page into a Space or close it.
accent: "#D6409F"
label: QUICK DETOUR
arc:
  arcName: Little Arc
  same:
    - "[[⌥⌘N]] from any app opens a small window for a quick search or address."
    - The **Open in** button at the top moves the page into a Space, and [[⌘O]] does the same.
    - Holding ⌥⌘ while clicking a sidebar tab opens it in the small window.
    - Windows you leave alone close into the archive after 6 hours by default, and you can change that in Settings.
  different:
    - Links from other apps open in your Space in front unless a [Link Route](/features/link-routes/) or the Default sends them to Quick Detour. In Arc, Little Arc was the default for them.
    - The arrow next to **Open in** lists every Space. Arc used [[⌥⌘O]] for another Space.
    - ⌥⌘-click on a link in a page opens it in a Quick Detour too.
    - A ⌥⌘-clicked sidebar tab opens as a copy; the tab stays in the sidebar.
    - The profile name at the top left switches the window to another Profile.
  notInDetour:
    - Showing or hiding all Little Arc windows from the Dock icon's menu.
faq:
  - q: How do I open a quick browser window without switching to my browser?
    a: Press [[⌥⌘N]] in any app. A search field opens over the app you're in, like Spotlight. Type an address or a search and press Return, and the page opens in a small Quick Detour window. Press Escape to close the field without opening anything.
  - q: The ⌥⌘N shortcut doesn't work from other apps. How do I turn it on?
    a: In Detour, choose **Detour › Settings…**, click **Quick Detour** and turn on **Open Quick Detour from any app with**. Click the shortcut field next to it to record another key combination if another app already uses ⌥⌘N.
  - q: How do I keep a page I opened in a Quick Detour?
    a: Click **Open in** at the top right, or press [[⌘O]], to move it into the Space the button names. The arrow next to it lists your other Spaces. The window closes and the page carries on as a tab in the sidebar.
  - q: Where did my Quick Detour window go?
    a: Windows you haven't used for 6 hours close by themselves, and so does every open one when you quit Detour. They go to the sidebar's Archived Tabs page, labelled "Quick Detour", and clicking one there opens it again. You can change the time in **Settings › Quick Detour**, or choose **Never**.
  - q: Can links from Slack or Mail open in a Quick Detour?
    a: Yes, with a [Link Route](/features/link-routes/). In **Settings › Links**, add a route with the URL condition **Any URL**, choose the app in **From app** and set **Open in** to **Quick Detour**. To send every link from other apps there, set the Default to **Quick Detour** instead.
related:
  - link-routes
  - spaces
  - quarantine
  - profiles
---

## What it does

You're writing in another app and need to check a word, a price or a map. Opening your browser drops you into your tabs, and the lookup becomes one more tab you forget to close. A Quick Detour is a small browser window with one page and no sidebar, opened from wherever you are.

Press <kbd>⌥⌘N</kbd> in any app and a search field opens over it, like Spotlight. Type and press Return, and the page opens in a window of its own. When you're done, close it. If it turns out to be worth keeping, **Open in** moves it into one of your Spaces as a normal tab.

Quick Detours you forget about close by themselves after a few hours and wait in the archive, so they never pile up.

## How to use it

### Open a Quick Detour

- **From any app:** press <kbd>⌥⌘N</kbd>. The field opens over the app in front. Type an address or a search and press Return, or pick a suggestion from your history. Escape, or a click outside the field, closes it without opening anything.
- **In Detour:** choose **File › New Quick Detour Window** or press <kbd>⌥⌘N</kbd>.
- **From a link:** hold <kbd>⌥⌘</kbd> and click a link on a page.
- **From the sidebar:** hold <kbd>⌥⌘</kbd> and click a tab. The Quick Detour gets a copy of its address; the tab itself stays where it is.
- **From other apps' links:** with a [Link Route](/features/link-routes/) whose **Open in** is **Quick Detour**, or that as the Default. Without one, links from other apps open in a Space.

You can have several open at once. A link you ⌘-click inside one opens in another.

### Use the window

The bar at the top of the window has, from left to right:

- **The Profile** whose logins the page uses. Click it to reload the page in another Profile.
- **The site's name.** Click it to go somewhere else; the same field opens over the page.
- **Site Settings** (the sliders), for the content blocker and your extensions on this site, and **Copy Link**.
- **Open in** followed by a Space's name, with an arrow for the other Spaces.

The usual browser keys work: <kbd>⌘F</kbd> to find, <kbd>⌘[</kbd> and <kbd>⌘]</kbd> for Back and Forward, <kbd>⌘W</kbd> to close.

### Keep the page, or let it go

- **Keep it:** click **Open in** or press <kbd>⌘O</kbd>. The page moves into a new tab in the Space the button names, usually the Space you were in when you opened the Quick Detour, with its Back history. The arrow lists every Space, grouped by Profile. A Space on another Profile opens the address fresh there, with that Profile's logins.
- **Let it go:** press <kbd>⌘W</kbd>. The page goes to the Archived Tabs page in the sidebar, labelled "Quick Detour", in case you want it back.

### Which Profile it uses

A Quick Detour uses the Profile of the Detour window you used last, so a lookup from your work Space signs in as you do at work. Opened while a Private window is in front, it is Private: nothing goes into History, the window is dark, and **Open in Private Window** moves the page into a Private window. A link from another app never opens in a Private Quick Detour.

### Change the settings

Choose **Detour › Settings…** (<kbd>⌘,</kbd>) and click **Quick Detour**:

- **Open Quick Detour from any app with** turns the shortcut for other apps on or off. Click the field to record a different shortcut. <kbd>⌥⌘N</kbd> still works in Detour's **File** menu when this is off.
- **Open links and sidebar tabs in Quick Detour with ⌥⌘-click** turns the ⌥⌘-click on or off.
- **Close Quick Detour windows not used for** sets the auto-close time: **Never**, **1 hour**, **6 hours** (the default), **12 hours** or **1 day**. Auto-closed windows are marked "auto-closed" on the Archived Tabs page. The window in front, one playing sound and Private ones stay open. Time your Mac spends asleep counts.

Quick Detours aren't reopened when you start Detour again. Those open when you quit go to the Archived Tabs page.

### Shortcuts

| Do this | Press |
| --- | --- |
| Open a Quick Detour, from any app | <kbd>⌥⌘N</kbd> |
| Open a link or sidebar tab in a Quick Detour | <kbd>⌥⌘</kbd>-click |
| Move the page into the Space named in the bar | <kbd>⌘O</kbd> |
| Go somewhere else in the same window | <kbd>⌘L</kbd> |
| Close the window | <kbd>⌘W</kbd> |
