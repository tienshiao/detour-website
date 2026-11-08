---
name: Privacy Setup
lede: Keep banking, work and personal browsing apart, and open strangers' links without your cookies.
title: Set up Detour for privacy on Mac · Privacy Setup | Detour
description: "Step-by-step privacy setup for Detour on Mac: separate Profiles, Link Routes for your bank, Quarantine for mail links, Safari's user agent, tracker lists."
accent: "#4F46E5"
label: PRIVACY SETUP
faq:
  - q: How do I make Detour look like Safari to websites?
    a: In **Settings › Profiles**, select the Profile and set **Identify as** to **Safari**. Websites then see exactly the user agent Safari sends on your Mac, with nothing that names Detour. Do it for each Profile you use, and for **Private** if you want Private windows to match.
  - q: Should I use extensions in my banking Profile?
    a: Keep it to none, or only the password manager you trust. An extension that can read pages can read your bank's pages too. A new Profile starts with no extensions, and one you install is on only in the Profile you installed it from, so Banking stays empty unless you turn something on there, under **Extensions** in that Profile's settings.
  - q: Does Detour send what I type in the address bar to the search engine?
    a: Only while **Search suggestions** is on for the Profile, which it is by default. Turn it off in **Settings › Profiles** and nothing leaves your Mac until you press Return; the command palette still suggests your open tabs and history.
  - q: Does Detour hide my IP address?
    a: No. Neither Profiles, Private windows nor [Quarantine](/features/quarantine/) change your IP address or network. Sites and your network see where you connect from, as with any browser. Use a VPN or a network service for that.
  - q: Is Quarantine more private than a Private window?
    a: For links that come to you, yes. Each Quarantine window starts with an empty store of its own, removes tracking tags from the link, and turns on WebKit's fingerprinting protections where your Mac has them. Private windows open at the same time share their cookies with each other.
related:
  - profiles
  - link-routes
  - quarantine
  - private-browsing
  - content-blocker
  - spaces
---

## What it does

Detour has no single privacy switch. It has pieces that each close one gap, and this guide sets them up together: separate Profiles so your bank never sees your other browsing, routes that send each site to its own Space, Quarantine for links that arrive in mail and chat, a user agent that blends in with Safari, tracker blocking, and Private windows that forget.

By the end you'll have a Banking Space that only your bank's sites open in, with no extensions running; Work and Personal Spaces that can't see each other's logins; and links from your mail app opening in a throwaway window that has none of your cookies.

None of this makes you anonymous. The last section says plainly what Detour doesn't hide.

## How to set it up

### 1. Make a Profile for each part of your life

A [Profile](/features/profiles/) owns cookies and logins, site data, history and extensions. A [Space](/features/spaces/) is a set of tabs, and each Space uses one Profile. Several Spaces can share one, so Personal and Reading can both use your personal Profile, while Work and Banking each get their own.

1. Choose **Detour › Settings…** (<kbd>⌘,</kbd>) and click **Profiles**.
2. Click **+** under the list, type a name such as **Work**, and click **Create**. Do the same for **Personal** and **Banking**.
3. Click **Spaces** and click **+** under the list for each Space you want: Work, Personal, Banking. Choose each one's Profile from its **Profile** menu.

A new Profile starts empty: no logins, no history. Sign in to each account in its own Space.

### 2. Keep extensions out of Banking

An extension that can read pages can read every page in the Profiles it runs in. A new Profile starts with no extensions, and an extension you install is on only in the Profile you installed it from, so Banking stays empty unless you turn one on there.

1. Install extensions from a window in Work or Personal, not from Banking.
2. If you want your password manager in Banking, choose **Settings › Profiles**, select **Banking** and turn it on under **Extensions**. Leave the rest off.

**Turn On in All Profiles** in **Extensions › Manage Extensions…** includes Banking. If you use it for an extension, turn that extension off again in Banking.

### 3. Send your bank and work sites to their Space

[Link Routes](/features/link-routes/) open links in the Space they belong to, so your bank always opens in Banking with its logins, never in Personal next to everything else.

1. In **Settings › Links**, click **New Route**.
2. Leave the URL condition on **Domain is** and type your bank's domain, such as `examplebank.com`. It covers its subdomains too.
3. Set **Open in** to your **Banking** Space.
4. Add a route like it for each bank, and for your work sites to **Work**.

A route applies to links from other apps, addresses you type in a new tab, and links you click to that site from another one. Make Detour your default browser in **Settings › General** with **Set as Default Browser**, so links from other apps come to Detour at all.

### 4. Open links from mail and chat in Quarantine

[Quarantine](/features/quarantine/) opens a link in a throwaway window with none of your cookies and no history, and removes tracking tags from it. If the page is worth keeping, **Open in** moves it into a Space. Pick one way to use it in **Settings › Links**:

- **Everything from other apps:** under **Default**, set **Open other links in** to **Quarantine**. Links no route matches then land there, and the routes you added in step 3 still send your bank and work sites to their Spaces.
- **Only some apps:** click **New Route**, choose your mail app in **From app**, leave the URL field empty, and set **Open in** to **Quarantine**. Add one for each chat app you don't trust.

Routes are tried from the top and the first that matches wins. To quarantine every link from your mail app, even one that claims to go to your bank, drag the mail app's route above your bank routes.

### 5. Identify as Safari

Every browser tells each site its name and version in its user agent. Detour's default, **Detour**, sends Safari's user agent with `Detour/` and Detour's major version added at the end (such as `Detour/0`), so sites and web statistics can count people who use Detour. That small addition also makes you stand out among the far larger number of Safari users.

1. In **Settings › Profiles**, select a Profile.
2. Under **User Agent**, set **Identify as** to **Safari**. The line below shows the exact string sites will see.
3. Do the same for each Profile, including **Private** if you want Private windows to match.

With **Safari**, sites get exactly what Safari on your Mac sends: Safari's version, and macOS reported as `10_15_7`, the version every Safari reports whatever macOS you run. Nothing in it names Detour. **Custom** sends a string you type.

Quarantine always sends Safari's user agent, whatever the Profile is set to. So do Detour's own requests, such as fetching site icons, search suggestions and filter lists, and extensions' background work. An extension's page that opens in a tab follows the Profile, like any tab.

### 6. Check the tracker lists

The [Content Blocker](/features/content-blocker/) is on for every Profile from the start, with four lists: **EasyList (ads)**, **EasyPrivacy (trackers)**, **Cookie notices** and **Malicious URLs**. Each Profile has its own switches.

1. In **Settings › Profiles**, select a Profile.
2. Under **Content Blocking**, make sure **Block content** is on, with **EasyPrivacy (trackers)** and **Malicious URLs** among the lists.

The **Private** Profile's switches cover Private windows and Quarantine. If a site breaks, turn blocking off for that one site in its **Site Settings** instead of turning a list off.

### 7. Use Private windows for what shouldn't be remembered

A [Private window](/features/private-browsing/) (<kbd>⇧⌘N</kbd>) keeps no history and holds cookies and logins in memory only. Private windows open at the same time share them, and they're cleared when the last Private window closes.

Extensions stay off in Private windows unless you allow them. To allow one, choose **Extensions › Manage Extensions…**, select the extension and turn on **Allow in Private**. Allow only the ones you need there.

### 8. Turn off search suggestions

While you type in the command palette (<kbd>⌘T</kbd>, <kbd>⌘L</kbd>), Detour asks the Profile's search engine for suggestions, which sends what you've typed so far. To keep it on your Mac until you press Return:

1. In **Settings › Profiles**, select a Profile.
2. Under **Search**, turn off **Search suggestions**. You can also choose another **Search engine** there: Google (the default), DuckDuckGo, Bing, Yahoo, Ecosia or Kagi.

The palette still suggests your open tabs and history. Turn suggestions off for **Private** too if you don't want Private typing sent either.

## What Detour doesn't hide

These settings keep your accounts and browsing from being tied together through cookies, site data, link tags and the user agent. They don't make you anonymous. A site, your network and your internet provider can still see:

- **Your IP address and network.** Nothing in Detour changes where your traffic comes from. A VPN or similar service does that.
- **Your installed fonts.** A page can test which fonts your Mac has.
- **Your hardware.** The number of processor cores and your graphics hardware can be read, in every Profile and in Quarantine.
- **Your languages and time zone.** Pages read them as they would in Safari.
- **Your screen and drawing details.** In a Space or a Private window, a page can read your screen size and the small differences in how your Mac draws graphics and sound. Only Quarantine, on a Mac whose WebKit offers it, randomizes those readouts and reports the window's size instead.
- **What you type and sign into.** Once you sign in, the site knows it's you, in any Profile or window. A form you fill in sends what you typed.
