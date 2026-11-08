---
name: Private Browsing
lede: A window that keeps no history and forgets its cookies and logins when you close the last one.
title: Open a private browsing window on Mac · Private Browsing | Detour
description: Detour's Private windows keep no history and hold cookies and logins in memory until the last one closes. Extensions stay off unless you allow them. Open one with ⇧⌘N.
accent: "#5E5CE6"
label: PRIVATE BROWSING
media:
  type: image
  src: /assets/features/private-browsing.webp
  width: 1140
  height: 820
  alt: "A dark Detour Private window showing Wikipedia's Private browsing article, with a single Private Space marked by a lock in the sidebar"
  caption: "A Private window is dark, so you can tell it apart at a glance."
arc:
  arcName: Incognito windows
  same:
    - "[[⇧⌘N]] opens one, and so does the **File** menu."
    - The pages you visit aren't saved to your history.
  different:
    - Detour calls them Private windows. The menu item is **File › New Private Window**.
    - The whole window turns dark and its sidebar shows a Space of its own, **🔒 Private**, so you can tell it apart at a glance.
faq:
  - q: How do I open a private window in Detour?
    a: Press [[⇧⌘N]] or choose **File › New Private Window**. You can also right-click Detour's icon in the Dock and choose **New Private Window**.
  - q: Am I still signed in after I close a Private window?
    a: Only while another Private window, or a Private Quick Detour, is open. Private windows open at the same time share one set of cookies and logins, kept in memory only, so a site you signed in to in one still knows you in the others. When the last Private window closes, Detour clears them, and the next Private window starts signed out.
  - q: Does private browsing hide what I do from my internet provider or employer?
    a: No. A Private window keeps your visits off this Mac's history. The sites you visit, your network and your internet provider can still see your traffic as usual.
  - q: Can I use extensions in a Private window?
    a: Only the ones you allow. In **Settings › Extensions**, select the extension and turn on **Allow in Private**. What it stores in Private windows is kept in memory and cleared when the last Private window closes.
  - q: Are downloads from a Private window kept?
    a: The files are. A finished download stays in your Downloads folder, but it's listed only in that window's downloads and the list forgets it when the window closes. Detour asks before closing a Private window with downloads still running, because closing it cancels them.
  - q: What's the difference between a Private window and Quarantine?
    a: Private windows share their cookies with each other while any of them is open, and you open them yourself. [Quarantine](/features/quarantine/) is where Link Routes send links from mail or chat. Each Quarantine window has an empty store of its own that's wiped when it closes, and tracking tags are removed from the link.
related:
  - quarantine
  - profiles
  - content-blocker
  - web-extensions
  - privacy
---

## What it does

A Private window is for browsing you don't want remembered: a present you're shopping for, or a search you don't want suggested later. Nothing you visit goes into History, no cookies or site data are written to disk, and when you close the window its tabs are gone for good. It doesn't come back when you reopen Detour.

Each Private window gets a Space of its own, **🔒 Private**, on the built-in Private Profile. That Profile keeps cookies, logins and site data in memory only, never on disk. Private windows that are open at the same time share them: sign in to a site in one and you're signed in in the others. When the last Private window closes, they're cleared, so the next one starts fresh. A Private [Quick Detour](/features/quick-detour/) counts as a Private window here.

Extensions stay off in Private windows unless you allow them one by one. For a link you don't trust, where even another Private window's cookies are too much, use [Quarantine](/features/quarantine/): every Quarantine window starts empty and is wiped when it closes.

## How to use it

### Open a Private window

- Press <kbd>⇧⌘N</kbd>, or choose **File › New Private Window**.
- Or right-click Detour's icon in the Dock and choose **New Private Window**.

The window is dark and titled "Private Browsing", and it opens ready for an address.

### What a Private window keeps

| | In a Private window |
| --- | --- |
| History | Nothing is recorded. The command palette suggests only this window's tabs, never your history or another window's tabs. |
| Tabs | Not saved. Closed tabs don't go to Archived Tabs, and the window isn't restored when you reopen Detour. |
| Cookies, logins and site data | In memory only, shared by the Private windows that are open, cleared when the last one closes. |
| Site settings | A site you switch content blocking off for is remembered until the last Private window (and any Quarantine window) closes. |
| Downloads | Listed only in that window's downloads. Closing the window cancels any still running, after asking. Finished files stay in your Downloads folder. |
| Extensions | Off, unless you allow an extension in Private. |

### Allow an extension

1. Choose **Extensions › Manage Extensions…**. Settings opens on the Extensions pane.
2. Select the extension and turn on **Allow in Private**.

What an extension stores in Private windows, such as its storage, caches and cookies, is kept in memory only and cleared when the last Private window closes. The extension starts again, empty, in the next Private window.

### Change how Private windows behave

Private windows use the **Private** Profile, which has settings of its own. Choose **Detour › Settings…** (<kbd>⌘,</kbd>), click **Profiles** and select **Private** ("This profile is used for Private Windows."). There you choose its search engine and whether it shows search suggestions, when its tabs sleep, its content blocking lists and the user agent it sends. [Privacy Setup](/features/privacy/) walks through these settings for every Profile.

### What's not available

A Private window stays on its own Space, so you can't switch Spaces in it with the **Spaces** menu, the shortcuts or a swipe. Pinning tabs, **Manage Spaces…**, Archived Tabs and moving a tab to another Space aren't available either: nothing from a Private window moves into a normal Space.

### Shortcuts

| Do this | Press |
| --- | --- |
| New Private window | <kbd>⇧⌘N</kbd> |
| New tab in the Private window | <kbd>⌘T</kbd> |
| Close the tab | <kbd>⌘W</kbd> |
