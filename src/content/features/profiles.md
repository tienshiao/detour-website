---
name: Profiles
lede: Separate logins, history and extensions for work, personal and client browsing, side by side in one browser.
title: Use multiple accounts on the same site · Profiles | Detour
description: Detour's Profiles keep logins, cookies, history and extensions apart, so you can be signed in to work and personal accounts on one site at once.
accent: "#1FB6A8"
label: PROFILES
media:
  type: image
  src: /assets/features/profiles-list.webp
  width: 448
  height: 230
  displayWidth: 360
  alt: Detour's Profiles settings listing Private for Private Windows, Work with 1 Space, Personal with 2 Spaces and Client X with 1 Space
  caption: Settings › Profiles lists each Profile and how many Spaces use it.
arc:
  arcName: Profiles
  same:
    - A Profile holds logins, cookies, history and extensions, and one Profile can serve several Spaces.
    - Favorites and the archive timing belong to the Profile.
    - A new Profile starts empty, with no logins and no history.
    - You can't delete a Profile while a Space still uses it.
  different:
    - You create Profiles in **Settings › Profiles** and choose a Space's Profile in **Settings › Spaces**. Arc did both from the Space's menu.
  notInDetour:
    - Saved passwords and autofill. Detour has no password manager of its own; a password manager extension, such as 1Password, can be turned on for each Profile.
faq:
  - q: How do I stay signed in to two accounts on the same site?
    a: Put each account in its own Profile. Make a Space for each, give each Space one of the Profiles, and sign in once in each Space. Both stay signed in, and you switch between them by switching Spaces.
  - q: What does a Profile keep separate?
    a: Cookies and logins, everything else websites store, your browsing history, which extensions run, and your favorites. It also has its own search engine, tab timing, content blocking and user agent settings.
  - q: Is a Profile the same as a Space?
    a: No. A Space is a set of tabs; a Profile is the logins and data those tabs use. Several Spaces can share one Profile, like Personal and Reading, and still keep their tabs apart.
  - q: What happens to my logins when I give a Space a different Profile?
    a: The Space's tabs reload with the other Profile's logins. Nothing is lost; the first Profile keeps its logins for any Space that uses it.
  - q: How do I delete a Profile?
    a: Move every Space that uses it to another Profile in **Settings › Spaces**, then select the Profile in **Settings › Profiles** and click **−**. Deleting a Profile also deletes its logins, website data and favorites.
related:
  - spaces
  - favorites
  - private-browsing
  - content-blocker
  - web-extensions
---

## What it does

A Profile is a separate set of everything websites know about you: cookies and logins, site data, your browsing history, and the extensions you run. Each Space uses one Profile. Give Work and Personal different Profiles and you can be signed in to your work and personal Google accounts at the same time, in one window, without logging out or opening another browser.

It's for anyone who uses the same sites as two people: a company account and a personal one, several client accounts, a test account next to your own. Switching Spaces switches accounts. Spaces that don't need separate logins can share a Profile, so Personal and Reading can both use your personal one.

Detour starts with one Profile, called Default. Make more in Settings whenever you need them.

## How to use it

### Create a Profile

1. Choose **Detour › Settings…** (<kbd>⌘,</kbd>) and click **Profiles**.
2. Click **+** under the list of Profiles.
3. Type a name and click **Create**.

A new Profile starts empty: no logins, no history, no favorites. It fills up as you use it.

### Give a Space a Profile

1. In **Settings › Spaces**, select the Space. You can also right-click the Space's emoji at the bottom of the sidebar and choose **Edit Space…**.
2. Choose a Profile from the **Profile** menu.
3. Detour asks **Change Profile?** first. Click **Change**, and the Space's tabs reload with the new Profile's logins.

<figure>
  <img src="/assets/features/profiles-spaces.webp" width="448" height="230" loading="lazy" style="max-width:360px" alt="Detour's Spaces settings: Work uses the Work profile, Personal and Reading share the Personal profile, Side uses Client X">
  <figcaption>Settings › Spaces shows which Profile each Space uses.</figcaption>
</figure>

### Change a Profile's settings

Select a Profile in **Settings › Profiles**. Its settings apply to every Space that uses it.

| Setting | What it does |
| --- | --- |
| **Name** | What the Profile is called in Settings. |
| **Search engine** | Where searches from the command palette (<kbd>⌘T</kbd>, <kbd>⌘L</kbd>) go: Google, DuckDuckGo, Bing, Yahoo, Ecosia or Kagi. **Search suggestions** shows the engine's suggestions as you type. |
| **Archive tabs after** | How long a tab can go unused before it's archived: 12 hours (the default), 24 hours, 7 days, 30 days or Never. Pinned tabs and favorites are never archived. |
| **Sleep tabs after** | How long a tab can sit unseen before Detour unloads it to save memory: 15 minutes, 30 minutes, 1 hour (the default), 2 hours or Never. A sleeping tab reloads when you open it. |
| **Per-tab isolation** | Gives every tab its own temporary cookies and storage, so tabs don't share logins and nothing is kept. A tab that goes to sleep loses its logins. |
| **Block content** | Turns content blocking on, with the filter lists you choose: EasyList (ads), EasyPrivacy (trackers), Cookie notices and Malicious URLs. |
| **Extensions** | A switch for each installed extension, so an extension can run in one Profile and not another. |
| **Identify as** | The user agent websites see: Detour, Safari, or a Custom string. |
| **Saved permissions** | The apps you've allowed links to open without asking. **Clear** forgets them. |

### Delete a Profile

1. In **Settings › Spaces**, move every Space that uses the Profile to another one. The Profiles list shows how many Spaces use each.
2. In **Settings › Profiles**, select the Profile and click **−**.

If a Space still uses the Profile, Detour says **Cannot Delete Profile** and how many Spaces use it. Deleting a Profile also deletes its logins, website data and favorites.

### The Private profile

Private windows (<kbd>⇧⌘N</kbd>) use a built-in Profile called Private. Its settings, like the search engine and content blocking, apply to every Private window. It records no history and saves no cookies or website data to disk. You can't delete it.
