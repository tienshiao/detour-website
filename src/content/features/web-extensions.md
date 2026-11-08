---
name: Web Extensions
lede: Install extensions from the Chrome Web Store. Many work, including 1Password, and some don't yet.
title: Use Chrome extensions in a Mac browser · Web Extensions | Detour
description: Detour installs Chrome Web Store extensions on WebKit, Safari's engine. See how to add, pin, update and remove them, and which ones work and which don't yet.
accent: "#3E63DD"
label: WEB EXTENSIONS
media:
  type: image
  src: /assets/features/web-extensions.webp
  width: 1140
  height: 820
  alt: "Dark Reader, installed from the Chrome Web Store, pinned in Detour's address bar with its popup open over a Wikipedia article it has turned dark"
  caption: "Dark Reader from the Chrome Web Store, pinned to the address bar."
arc:
  arcName: Extensions
  same:
    - Extensions come from the Chrome Web Store, and **Extensions › Add Extensions…** in the menu bar takes you there.
    - You pin an extension to the address bar to keep its button in reach.
    - Extensions are off in private windows until you allow them one by one.
  different:
    - Detour runs extensions on WebKit, the engine Safari uses, where Arc ran them on Chromium like Chrome. Most of the extension APIs are the same, but not all, so some Chrome extensions don't work in Detour yet.
    - The setting is **Allow in Private**, in **Settings › Extensions**. Arc's was **Allow in Incognito**, on its extensions page.
    - Each Profile can run a different set of extensions, switched in **Settings › Profiles**.
  notInDetour:
    - Importing extensions from another browser. Install each one again from the Chrome Web Store.
faq:
  - q: Can I use Chrome extensions in Detour?
    a: Yes, most of them. Choose **Extensions › Add Extensions…**, find the extension in the Chrome Web Store and click **Add to Chrome**. Detour runs them on WebKit rather than Chrome's engine, so a few that depend on Chrome-only features don't work yet.
  - q: Does 1Password work in Detour?
    a: Yes. Install 1Password from the Chrome Web Store, keep the 1Password app for Mac running, and add Detour as a browser in the 1Password app (**Settings › Browser › Add Browser**). It then unlocks with the app and fills logins, also in Private windows if you allow it there.
  - q: Why doesn't an extension work in Detour?
    a: It may use a part of Chrome's extension system that WebKit doesn't have yet, such as side panels, tab groups or watching network requests. Check that it's turned on in **Settings › Extensions** and for your Profile in **Settings › Profiles**, then try reloading the page.
  - q: Do extensions update automatically?
    a: Yes. Detour checks extensions from the Chrome Web Store for updates about every five hours. To check now, choose **Extensions › Check for Extension Updates**. An update that asks for new permissions waits, turned off, until you accept them.
  - q: How do I remove an extension?
    a: Choose **Extensions › Manage Extensions…**, select the extension and click **Uninstall Extension**. It's removed from every Profile, along with its data.
related:
  - profiles
  - private-browsing
  - content-blocker
---

## What it does

Detour runs browser extensions: password managers, reading tools, developer tools. You get them from the Chrome Web Store, as you would in Chrome, Arc or Brave.

Detour is built on WebKit, the engine Safari uses, not on Chrome's. WebKit runs the same kind of extensions (Manifest V3, the current format) and most of what they ask of the browser works: popups, settings pages, content on web pages, notifications, and talking to a desktop app on your Mac. A few Chrome-only parts are still missing, so some extensions don't work yet. Support is a work in progress, and the list below says where it stands.

### What works and what doesn't yet

As of November 2026 (Detour 0.4):

**Known to work**

- **1Password**: unlocks with the 1Password app, fills logins and updates from the store. It needs the 1Password app for Mac running, with Detour added as a browser in it ([below](#use-1password)).

**Known not to work yet**

- **Claude**, Anthropic's extension: it needs a side panel, tab groups and Chrome's debugger API, which Detour doesn't have yet.
- Extensions that open in a **side panel** don't show their panel.
- Extensions that **watch or change network requests** with Chrome's `webRequest` API install, but never see a request.
- Signing in through Chrome's **identity** API, **tab groups** and the **downloads** API don't work yet in any extension.
- Older **Manifest V2** extensions don't install. Detour says "Only Manifest V3 extensions are supported".

For anything else, try it: an extension that doesn't work can be removed in a few clicks.

Detour also has its own [Content Blocker](/features/content-blocker/) for ads and trackers, so you don't need an extension for that.

## How to use it

### Install from the Chrome Web Store

1. Choose **Extensions › Add Extensions…**. The Chrome Web Store opens in a new tab.
2. Find the extension and click **Add to Chrome**.
3. Detour downloads it and asks **Install "…"?**, saying where it comes from ("From the Chrome Web Store."), the permissions it asks for and its **Site access**, such as "All websites". Click **Install**.

The extension is on in every Profile, but not in Private windows. A file that isn't signed as the store's own is named as such in the question, and one whose signature doesn't check out isn't installed.

A website can also offer an extension as a `.crx` file. Clicking its link shows the same question instead of downloading the file, and names the site it came from.

### Use an extension

- **Its popup:** choose **Extensions ›** the extension's name **› Show Popup**, or click its button in the address bar if you pinned it.
- **Its settings:** **Extensions ›** the extension's name **› Options…**, or **Settings…** next to its name in **Settings › Extensions**.
- **Pin it:** hover over the address at the top of the sidebar and click the **Site Settings** button (the sliders). Under **Extensions**, click the pin next to the extension (**Pin to address bar**). Pinned extensions' buttons appear in the address when you hover over it.

### Choose where extensions run

- **Turn one off everywhere:** in **Settings › Extensions**, select it and turn off **Enabled**.
- **Per Profile:** in **Settings › Profiles**, select a Profile and use the switches under **Extensions**. A work password manager can run in your Work Profile only.
- **In Private windows:** select the extension in **Settings › Extensions** and turn on **Allow in Private**. What it stores there is kept in memory only and cleared when the last Private window closes.

**Settings › Extensions** also lists each extension's permissions, with a switch for each one you can take back.

### Use 1Password

1. Install and open the **1Password** app for Mac, and keep Detour in your Applications folder.
2. Install the 1Password extension from the Chrome Web Store, as above.
3. In the 1Password app, open **Settings**, select **Browser**, click **Add Browser** and choose Detour.

The extension then unlocks when the app does and fills logins on web pages. Detour has no password manager of its own, so this is how you get saved logins and autofill.

### Updates

Detour checks extensions from the Chrome Web Store for updates about every five hours while it runs, and shortly after it starts when the last check is older than that. To check now, choose **Extensions › Check for Extension Updates**, or click **Check for Updates** for one extension in **Settings › Extensions**.

- An update that asks for **new permissions** is installed turned off. **Settings › Extensions** shows what it wants; click **Accept and Enable** to turn it back on.
- An update for an extension that's busy, for example with its popup open, waits until it's idle. Click **Install Now** in **Settings › Extensions** to install it right away.

### Remove an extension

Choose **Extensions › Manage Extensions…**, select the extension and click **Uninstall Extension**, then **Uninstall**. It's removed from every Profile with all its data.

### Load an extension you're developing

Choose **Develop › Load Unpacked Extension…** and pick the folder that holds its `manifest.json`. After you change its files, choose **Develop › Reload "…"**, or click **Reload** in **Settings › Extensions**.
