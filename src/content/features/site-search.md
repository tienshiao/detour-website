---
name: Site Search
lede: Search YouTube, Wikipedia or any site straight from the address bar, without opening its home page first.
title: Search any website from the address bar · Site Search | Detour
description: Detour's Site Search searches one site from the Command Palette. Type its keyword or the start of its name, press Tab, then your search. Add your own sites.
accent: "#0090B8"
label: SITE SEARCH
arc:
  arcName: Site Search
  same:
    - "In the bar that [[⌘T]] opens, type the site's shortcut, press Tab, type your search and press Return."
    - You add a site with a name, a shortcut and the address of its results page, with `%s` where the search terms go.
  different:
    - The sites are listed in **Settings › Search**. Arc kept them in its Chromium settings page.
    - Detour calls the shortcut a **Keyword**.
faq:
  - q: How do I search YouTube directly from the address bar?
    a: Press [[⌘T]], type `yt` and press Tab. The field turns into **Search YouTube**. Type what you're looking for and press Return, and YouTube's results open in a new tab.
  - q: How do I add a custom search engine for a site?
    a: Search the site once in Detour and copy the address of the results page. In **Settings › Search**, click **+**, give the site a name and an optional keyword, paste the address and replace your search terms in it with `%s`. Then type the keyword or the site's name and press Tab.
  - q: Do I have to remember a keyword?
    a: No. Typing the start of the site's name and pressing Tab works too, so `wiki` and Tab searches Wikipedia. So does Tab when the address bar completes to the site, such as `you` completing to youtube.com.
  - q: Why is there a site in my list that I didn't add?
    a: Sites that publish a search description (OpenSearch) add themselves when you visit them. They show **From site** instead of a keyword, and Tab offers them when the address bar completes to that site. Remove one with **−** and it isn't added again.
  - q: Are site searches per Profile?
    a: No. There is one list for all your Profiles. The search engine used for everything else is set per Profile, in **Settings › Profiles**.
related:
  - command-palette
  - history
  - profiles
---

## What it does

A site search sends your search straight to one site. Instead of opening YouTube, clicking its search box and typing, you type `yt`, press Tab, type "lofi beats" and press Return. You land on YouTube's results.

It's for the sites you search all the time: an encyclopedia, a shop, a code host, a map, your team's wiki. Six come set up: YouTube, Wikipedia, GitHub, Google Maps, Amazon and Reddit. You can add any site whose search results have their own address, and sites that describe their search to browsers add themselves when you visit them.

## How to use it

### Search a site

1. Press <kbd>⌘T</kbd> to open the [Command Palette](/features/command-palette/), or <kbd>⌘L</kbd> to search from the tab you're on.
2. Type the site's keyword, such as `yt` for YouTube, and press Tab. Space works too, right after a keyword.
3. The site's name appears in a colored tag in front of the field, which now reads **Search YouTube**. Type your search and press Return.

From <kbd>⌘T</kbd> the results open in a new tab; from <kbd>⌘L</kbd>, in the tab you're on.

Don't remember the keyword? Type the start of the site's name or address, such as `wiki`, and press Tab. A **Search Wikipedia** row with a Tab key in the list shows which site Tab will search.

To leave a site search, press Backspace before typing anything, or Escape, which also clears the field.

### Starter sites

| Site | Keyword |
| --- | --- |
| YouTube | `yt` |
| Wikipedia | `w` |
| GitHub | `gh` |
| Google Maps | `maps` |
| Amazon | `amz` |
| Reddit | `r` |

### Add a site

1. Search the site once and copy the address of its results page, for example `https://www.amazon.com/s?k=socks`.
2. Choose **Detour › Settings…** (<kbd>⌘,</kbd>) and click **Search**.
3. Click **+** under the list. Fill in **Name**, an optional **Keyword**, and the **Address** with `%s` in place of your search terms: `https://www.amazon.com/s?k=%s`.
4. Click **Add**. The button stays off until the site has a name and the address starts with `https://` or `http://` and contains `%s`.

A keyword is one word and can't be used by two sites.

### Edit or remove a site

- Select a site in **Settings › Search** and click the pencil, or double-click it, to change its name, keyword or address.
- Select it and click **−** to remove it. Detour doesn't ask first. A site you remove isn't added back when you visit it, though you can still add it by hand.

### Sites that add themselves

Many sites publish a search description that browsers can read. When you visit one, Detour adds it to the list with **From site** in the **Keyword** column. Tab offers it when the palette completes to that site's address. Give it a keyword in **Settings › Search** to reach it like the others.

Detour doesn't add sites from Private windows or Quarantine.
