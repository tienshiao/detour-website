---
name: Link Routes
lede: Links open in the Space they belong to, by the site they go to or the app they came from.
title: Open links in a specific Space on Mac · Link Routes | Detour
description: Detour's Link Routes send links to the right Space by their site, address or the app they came from, so Slack links open in Work and GitHub opens in Side.
accent: "#0B84D6"
label: LINK ROUTES
media:
  type: image
  src: /assets/features/link-routes.webp
  width: 880
  height: 831
  alt: "Detour's Settings, Links pane with three routes: Domain is github.com opens in the Work Space, Domain is wikipedia.org opens in the Reading Space, and links from Mail open in Quarantine, its URL field left empty so it reads Any URL from this app, or a domain such as example.com. Below them, the Default setting Open other links in is Most Recent Space"
  caption: "Three routes: GitHub to Work, Wikipedia to Reading, and every link from Mail to Quarantine."
arc:
  arcName: Air Traffic Control
  same:
    - Routes live in **Settings › Links**. Click **New Route**, give it a condition and choose where its links open.
    - A URL can **contain** some text or **be equal to** an exact address.
    - A **Default** decides where every other link goes, and **Most Recent Space** is one of its choices.
    - The minus button removes a route.
  different:
    - Routes can also match by **Domain is** (a site and its subdomains) and by **From app**, the app the link came from.
    - The Default starts as **Most Recent Space**. Arc's started as Little Arc; in Detour, [Quick Detour](/features/quick-detour/) is a choice you make.
    - Besides Spaces, a route can open links in a Private window or in [Quarantine](/features/quarantine/).
    - A Space that a route points to can't be deleted until you change the route. Arc removed such routes with the Space.
faq:
  - q: How do I make links from Slack always open in my work Space?
    a: In **Settings › Links**, click **New Route**, choose Slack in **From app**, leave the URL field empty and set **Open in** to your work Space. Detour also has to be your default browser, so set it in **Settings › General**.
  - q: How do I open certain websites in a specific Space automatically?
    a: Add a route with **Domain is** and the site's domain, such as `github.com`, and choose the Space in **Open in**. It covers the site's subdomains too, and it applies to links from other apps, addresses you type in a new tab and links you click to that site from another one.
  - q: Why didn't my link open in the Space I routed it to?
    a: Routes are tried from the top and the first that matches wins, so a route above it may have caught the link. A link to the same site you're on stays in its tab, and so do Shift-, Option- and [[⌥⌘]]-clicks. Links from other apps reach Detour only when it is your default browser.
  - q: Do routes work in Private windows?
    a: "A route to **Private Window** works from anywhere. Nothing routes out of a Private window, though: a link clicked or typed there stays in it."
  - q: Can I route links to a Space on another Profile?
    a: Yes. Routes belong to the whole app, not to one Profile, so any Space can be a route's destination. The link opens with that Space's Profile and its logins.
related:
  - spaces
  - quick-detour
  - quarantine
  - profiles
---

## What it does

You click a link in Slack and it opens in your personal Space, between a recipe and a shopping cart. Link Routes fix that. Each route says which links go where: everything from `github.com` to your Side Space, every link from Slack to Work, one weekly report to a Private window.

A route looks at the address, the app the link came from, or both. It applies to three kinds of links:

- links you open in other apps, such as Mail, Slack or Notes
- addresses you type in a new tab with <kbd>⌘T</kbd>
- links you click on a page that lead to another site

The link opens in a new tab in its Space. If a window already shows that Space, it comes to the front. If not, your most recent window switches to the Space.

## How to use it

### Add a route

1. Choose **Detour › Settings…** (<kbd>⌘,</kbd>) and click **Links**.
2. Click **New Route**. A new row appears at the bottom of the list.
3. Set the **URL** condition and type what to match:
   - **Domain is**: a site and all its subdomains. `example.com` also covers `www.example.com` and `mail.example.com`, but not `badexample.com`. Port numbers are ignored.
   - **Contains**: any text in the address, such as `docs.google.com/spreadsheets`.
   - **Is equal to**: one exact address, written out in full, such as `https://example.com/report`. The part after a `#` doesn't count.
   - **Any URL**: no address condition. Choosing an app and leaving the field empty does the same.
4. Optionally choose an app in **From app**. The list shows the apps that are running now; **Choose…** opens your Applications folder to pick any other app. With both conditions set, a link has to match both.
5. Choose where the links go in **Open in**.

The route is saved as soon as it is complete. Until then, the row shows an orange warning saying what's missing.

To route every link from one app, choose the app in **From app** and leave the URL field empty. The field then reads "Any URL from this app, or a domain such as example.com". Type a domain as well to route only that site's links from the app. A route with neither a URL nor an app isn't saved, and its warning says so: "Enter a domain, such as example.com, or choose an app."

A **From app** route also applies to a link that starts Detour when it isn't running. If Detour can't tell which app that link came from, it opens in Quarantine whenever a **From app** route to Quarantine could have matched it, to be safe: one whose URL condition (if it has one) matches the link, with no route above it that matches.

### Where links can go

| Open in | What happens |
| --- | --- |
| A Space | A new tab in that Space, selected, with that Space's Profile and logins. |
| **Most Recent Space** | A link from another app opens in the Space you used last. A typed or clicked link stays where it is. |
| **Private Window** | A new tab in your most recent Private window, or a new one. |
| **Quick Detour** | A small one-page window you can move into a Space later. Links from other apps only. See [Quick Detour](/features/quick-detour/). |
| **Quarantine** | A throwaway window with none of your cookies. Links from other apps, and links you click that the route matches. See [Quarantine](/features/quarantine/). |

### Choose the Default

Under **Default**, **Open other links in** decides where links go when no route matches. It starts as **Most Recent Space**, which is how browsers usually behave: links from other apps open in the Space in front, and links you type or click stay where you are.

Set it to a Space and every link no route matches goes there, including addresses you type in a new tab and links you click to another site. Set it to **Quick Detour** or **Quarantine** and only links from other apps go there.

### Put routes in order

Routes are tried from the top, and the first one that matches decides. Put narrow routes above broad ones: a route for `docs.google.com/spreadsheets` to Work above one for all of `google.com` to Personal. Drag a route by the handle at its left to move it. The minus button at the right of a route removes it at once.

### Make Detour your default browser

Links from other apps go to your default browser. In **Settings › General**, click **Set as Default Browser** and confirm. Without it, routes still apply to what you type and click in Detour.

### What isn't routed

Some links always stay where you are, because you chose where they open:

- a link to the same site as the page you're on
- Shift-click (opens a Peek), Option-click (opens a split) and <kbd>⌥⌘</kbd>-click (opens a Quick Detour)
- **Open Link in New Tab** and the other items in a link's right-click menu
- links inside a Peek, and pages that send you somewhere else on their own
- searches, and addresses you type with <kbd>⌘L</kbd> to change the current tab

A Space that a route or the Default points to can't be deleted. Detour says which routes use it, and **Open Links Settings…** takes you to them.
