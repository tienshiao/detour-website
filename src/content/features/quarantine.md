---
name: Quarantine
lede: Open links from mail, chat and strangers in a throwaway window that has none of your cookies.
title: Open untrusted links safely on Mac · Quarantine | Detour
description: Detour's Quarantine opens links from mail, chat and unknown senders in a throwaway window with none of your cookies and no history. Keep only what's worth it.
accent: "#F2542D"
label: QUARANTINE
media:
  type: video
  src: /assets/features/quarantine.mp4
  poster: /assets/features/quarantine-poster.webp
  width: 1320
  height: 880
  label: "A link to MDN's Using HTTP cookies page in a TextEdit document opens in a Detour Quarantine window marked with an orange Quarantine badge; clicking Open in Reading moves the page into a tab in the Reading Space"
  caption: "A link from TextEdit lands in a Quarantine window. Open in moves it into a Space."
faq:
  - q: How do I open a link without the site knowing who I am?
    a: Send it to Quarantine with a Link Route. The page opens in a window with an empty set of cookies of its own, so the site sees a first-time visitor instead of your account, and tracking tags are removed from the address. Your IP address is still yours, so the site can tell where you connect from.
  - q: Does Quarantine protect me from malware?
    a: Not by itself. It keeps your cookies and logins away from the site and throws away whatever the site stored. Detour asks before every download from a Quarantine window, but it doesn't check the file. The content blocker's **Malicious URLs** list blocks known bad addresses, as it does in Private windows.
  - q: Can I sign in to a site in Quarantine?
    a: Yes, but the login lasts only as long as that window. When you choose **Open in**, the page loads fresh in your Space, with that Space's logins, so you sign in there if you need to.
  - q: Why can't I open Quarantine from a menu or by typing an address?
    a: Quarantine is for links that come to you, so it is only a Link Routes destination. An address you type is one you chose, and never goes there. To browse without your logins, open a [Private window](/features/private-browsing/) with [[⇧⌘N]].
  - q: Does a quarantined page show up in my history?
    a: No. Nothing in a Quarantine window is recorded in History, it isn't saved when you quit, and it never goes to Archived Tabs. If you move the page into a Space with **Open in**, that visit is recorded there like any other.
related:
  - private-browsing
  - link-routes
  - quick-detour
  - content-blocker
---

## What it does

A link in an email or a chat message tells the site who you are the moment you click it. It arrives with your cookies, so the site sees you signed in, and it often carries tags that say which mail or campaign you clicked. Quarantine opens those links in a throwaway window instead. The page gets an empty set of cookies and site data of its own, nothing goes into your history, and everything the site stored is gone when you close the window.

Use it to triage links you didn't ask for: a newsletter, a shortened link from someone you don't know, a "your parcel is waiting" mail. Look at the page first. If it's worth keeping, **Open in** moves it into one of your Spaces, where it loads fresh with that Space's logins. If not, close the window and nothing of it stays behind.

Quarantine isn't a button you press for each link. You decide in **Settings › Links** which links go there: every link from Mail, say, or every link from another app except the sites you trust.

### What a quarantined page gets

| | In Quarantine |
| --- | --- |
| Your cookies and logins | None, from any Profile or Private window. Each Quarantine window starts with an empty store of its own. |
| What the site stores | Kept in memory for that window only, and removed when it closes. **Open in** doesn't carry it along. |
| History | Nothing is recorded, and the window isn't restored when you reopen Detour. |
| Tracking tags in the link | `utm_` tags and click IDs such as `gclid`, `fbclid` and `msclkid` are removed before the page loads, and from links you follow inside it. Other parts of the address stay. |
| Your browser's fingerprint | The page sees Safari's standard user agent. Where your Mac's WebKit offers them, its fingerprinting protections are on too: on recent macOS, canvas and audio readouts are randomized and the screen size the page reads is the window's. |
| Extensions | Only the ones you allowed in Private windows. |
| Downloads | Detour asks before each one. A file you accept goes to your Downloads folder and stays there. |
| Your IP address | Unchanged. Quarantine keeps a visit from being tied to your accounts and browsing. It doesn't make you anonymous. |

Pop-ups and new windows the page opens, such as a sign-in window or a link that opens in a new window, share its store. A link you Command-click inside it opens in another Quarantine window with a store of its own.

## How to use it

### Send links to Quarantine

1. Choose **Detour › Settings…** (<kbd>⌘,</kbd>) and click **Links**.
2. Pick the links:
   - **Everything from other apps:** under **Default**, set **Open other links in** to **Quarantine**. Then add routes for the apps and sites you trust, for example Slack to your Work Space. Routes are tried from the top and the first that matches wins, so trusted links skip Quarantine.
   - **One app:** click **New Route**, choose the app in **From app** (Mail, say), leave the URL field empty and set **Open in** to **Quarantine**.
   - **One site or kind of address:** click **New Route**, choose **Domain is**, **Contains** or **Is equal to**, type the pattern and set **Open in** to **Quarantine**.
3. Make Detour your default browser in **Settings › General** with **Set as Default Browser**, so links from other apps come to Detour.

A route to Quarantine with a URL condition also catches matching links you click on a page that lead to another site, except in Private windows. A Default of Quarantine takes only links from other apps, so the links you click while browsing stay where they are.

When a link starts Detour and Detour can't tell which app it came from, it opens in Quarantine if any of your routes sends links there.

### Look first, then keep it or throw it away

1. The link opens in a window of its own, in front of your other windows. An orange **Quarantine** badge sits where a Quick Detour shows its Profile. Click it to see what Quarantine does and which site the link came from.
2. Read the page as usual. The address in the middle of the bar is where the page is now, even if the link redirected you somewhere else.
3. Then either:
   - **Keep it:** click **Open in** followed by a Space's name, or press <kbd>⌘O</kbd>. The arrow next to it lists every Space on every Profile. The page opens in a new tab there, loaded fresh with that Space's logins, and the Quarantine window closes. Text you typed into the page and its Back history don't come along.
   - **Throw it away:** close the window with <kbd>⌘W</kbd>. Its cookies and site data go with it.

### Quarantine or a Private window?

Both keep no history. They differ in what they share:

- A [Private window](/features/private-browsing/) is for browsing you start yourself. All Private windows share one set of cookies until you quit Detour, so you can sign in once and stay signed in across them.
- Quarantine is for links that arrive from somewhere else. Every window has its own empty store and wipes it when it closes, tracking tags are removed, and you decide link by link whether a page moves into a Space.

### Shortcuts

| Do this | Press |
| --- | --- |
| Open the page in the Space named in the bar | <kbd>⌘O</kbd> |
| Close the window and throw the page away | <kbd>⌘W</kbd> |
| Open Settings to set up routes | <kbd>⌘,</kbd> |
