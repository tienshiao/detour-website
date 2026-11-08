---
name: Content Blocker
lede: Ads, trackers, cookie banners and known malicious sites blocked out of the box, with no extension to install.
title: Block ads and trackers on Mac · Content Blocker | Detour
description: Detour's built-in Content Blocker stops ads, trackers, cookie notices and malicious URLs using EasyList. Switch it off for one site, or pick lists per Profile.
accent: "#30A46C"
label: CONTENT BLOCKER
faq:
  - q: Does Detour have a built-in ad blocker?
    a: Yes. The Content Blocker is on from the first launch for every Profile, using EasyList for ads, EasyPrivacy for trackers, a list of cookie notices and a list of malicious URLs. You don't need to install an extension.
  - q: A site looks broken or asks me to turn off my ad blocker. What do I do?
    a: Hover over the address at the top of the sidebar, click the **Site Settings** button and turn off **Block content on this site**. The page reloads without blocking, and Detour remembers the choice for that site on that Profile.
  - q: Why do I still see some ads?
    a: Filter lists don't catch everything, and some sites change their ads faster than the lists follow. A few kinds of advanced filter rules also can't be expressed in WebKit's content rules, so Detour skips them. The lists update every 24 hours, or right away with **Update All Now** in **Settings › Content Blocking**.
  - q: Does the Content Blocker work in Private windows?
    a: Yes. Private windows and Quarantine use the **Private** Profile's content blocking settings. A site you switch blocking off for there is remembered only until the last Private window closes.
  - q: Can I add my own filter lists or rules?
    a: Not yet. Detour uses the four lists shown in **Settings › Content Blocking**, and you can turn each one off per Profile. You can also install a content-blocking extension from the Chrome Web Store; Detour runs on WebKit, so some Chrome extensions work and some don't yet.
related:
  - profiles
  - private-browsing
  - quarantine
  - web-extensions
---

## What it does

Detour blocks ads, trackers, cookie consent banners and addresses known to spread malware before they load. It's built in and on from the first launch, for every Profile, so there's nothing to find, install or set up.

It uses four public filter lists, the same ones many ad blockers start from: **EasyList** for ads, **EasyPrivacy** for trackers, **Cookie notices** for consent banners and pop-ups, and **Malicious URLs** for addresses known to serve malware. Detour downloads them, turns them into WebKit content rules and updates them every 24 hours. The rules run inside WebKit, the engine Safari uses, so no extension sees the pages you visit.

Some sites break when a script they depend on is blocked, or refuse to show anything until you turn your ad blocker off. For those, switch blocking off for that one site and leave it on everywhere else.

## How to use it

### See what was blocked

1. Hover over the address at the top of the sidebar and click the **Site Settings** button (the sliders) at its right end.
2. Under **Content Blocking**, the shield's badge and the line below it say how many resources were blocked on this page, for example "30 resources blocked on this page".

In a Quick Detour or Quarantine window, the **Site Settings** button is in the bar at the top.

### Turn blocking off for one site

1. Open **Site Settings** as above.
2. Turn off **Block content on this site**. The page reloads with nothing blocked.

Detour remembers the choice for that site on that Profile, so the site stays unblocked in every Space that uses the Profile. Turn the switch back on to block it again.

### Choose lists for a Profile

1. Choose **Detour › Settings…** (<kbd>⌘,</kbd>) and click **Profiles**, then select the Profile.
2. Under **Content Blocking**, turn off **Block content** to stop blocking for every Space on that Profile, or turn off single lists: **EasyList (ads)**, **EasyPrivacy (trackers)**, **Cookie notices** or **Malicious URLs**.

All four lists are on for a new Profile. The **Private** Profile has its own switches, which Private windows and Quarantine use.

### Update the lists

**Settings › Content Blocking** lists each filter list with how many rules it has (**In List**), how many are in use (**Active**), its status and when it was last updated. Lists update on their own every 24 hours.

- **Update All Now** checks every list for a newer version right away.
- **Clear Cache & Redownload** throws the lists away and downloads them again, for when one looks wrong or won't load.
