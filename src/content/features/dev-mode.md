---
name: Dev Mode
lede: Tabs on localhost get a striped toolbar with the console, network, an element picker and screenshots.
title: Browser for localhost web development on Mac · Dev Mode | Detour
description: "Detour's Dev Mode turns on by itself for localhost and .test sites: a toolbar with the full URL, Console, Network, an element picker and full-page screenshots."
accent: "#FF7600"
label: DEV MODE
arc:
  arcName: Developer Mode
  same:
    - It turns on by itself for localhost.
    - You can turn it on for any other site in the site settings.
    - A Dev Mode tab is outlined while it's selected, and a toolbar across the top shows the page's full address.
    - The toolbar has a screenshot button.
  different:
    - The outline is orange and black stripes round the tab's row in the sidebar. Arc's was yellow and black.
    - Detour also turns it on for `*.localhost`, `127.0.0.1` and other loopback addresses, `0.0.0.0` and `*.test` sites.
    - The toolbar opens the Web Inspector's Console and Network tabs and its element picker with one click.
  notInDetour:
    - The JSON Formatter extension that Arc installed with Developer Mode.
    - Portrait Mode's framed screenshots. Detour's captures are plain PNGs of the page.
faq:
  - q: How do I open the Web Inspector in Detour?
    a: Press [[⌥⌘I]] or choose **Develop › Web Inspector**. It's WebKit's own inspector, the same one Safari uses. On a Dev Mode tab, the **Console**, **Network** and **Select Element** buttons in the striped toolbar open it on that tab.
  - q: How do I take a full-page screenshot of a website on Mac?
    a: Turn on Dev Mode for the site (it's on already for localhost) and click **Capture Full Page** in the striped toolbar. The whole page, top to bottom, goes on the clipboard as a PNG. Option-click the button to save it to your Downloads folder instead.
  - q: Why does my localhost tab have a striped border?
    a: That's Dev Mode, which Detour turns on for local development addresses so you can tell your local app from the live site at a glance. To turn it off for one site, open **Site Settings** from the address at the top of the sidebar and turn off **Dev mode for this site**.
  - q: Can I use Dev Mode on a staging or LAN address?
    a: Yes, but you turn it on yourself. Addresses on your network, such as `192.168.1.20` or `nas.local`, aren't treated as development servers, because they're as often a printer or a NAS. Open **Site Settings** on the site and turn on **Dev mode for this site**.
related:
  - split-tabs
  - spaces
  - web-extensions
---

## What it does

When the same app runs on `localhost:3000` and in production, it's easy to test against the wrong one. Dev Mode marks local development tabs so you can't miss them, and gives them a toolbar with the tools you reach for most.

Detour turns it on by itself for addresses that can only be a server on your Mac:

- `localhost` and any name ending in `.localhost`
- `127.0.0.1` and the rest of `127.x.x.x`, `[::1]` and `0.0.0.0`
- names ending in `.test`

On a Dev Mode tab:

- **In the sidebar**, the tab shows its host and port under its title, such as `localhost:3000`. While the tab is selected, its row has an orange and black striped border.
- **Above the page**, a striped toolbar shows the full address and has buttons for screenshots, the Console, Network and the element picker.

Navigate the tab to another site and the marking goes. Come back and it returns. Each port is its own site, so `localhost:3000` and `localhost:4000` can be set differently.

## How to use it

### Turn it on or off for a site

1. Hover over the address at the top of the sidebar and click the **Site Settings** button (the sliders) at its right end.
2. Turn **Dev mode for this site** on or off.

The sidebar and the toolbar change at once, without a reload. Detour remembers the choice for that site on that Profile. In a Private window, it lasts until the Private session ends.

### Use the toolbar

From left to right:

| Button | What it does |
| --- | --- |
| **Site Settings** (the ⓘ) | Opens the same site settings as the address bar: content blocking, Dev Mode and your extensions. |
| The address | Shows the full URL. Click it to type another address for this tab. |
| **Copy URL** | Copies the address. |
| **Capture Visible Area** | Puts a PNG of what you see of the page on the clipboard. |
| **Capture Full Page** | Puts a PNG of the whole page, top to bottom, on the clipboard. |
| **Console** | Opens the Web Inspector on its Console. Click again to close it. |
| **Network** | Opens the Web Inspector on its Network tab. |
| **Select Element** | Turns on the element picker. Click an element on the page to inspect it. |

The toolbar works in [Split Tabs](/features/split-tabs/) too: each pane has its own, and its buttons act on that pane. It moves aside for a Web Inspector docked to the side of the page.

### Take a screenshot

- Click **Capture Visible Area** or **Capture Full Page** to copy the picture. A message at the top right says it's on the clipboard; paste it into a chat, a ticket or a document.
- Option-click either button to save the PNG to your Downloads folder instead, named like "Screenshot localhost-3000 2026-11-08 at 10.15.00.png".

Captures are of the page only, never the toolbar or the Web Inspector, at your screen's resolution. A very long page is scaled down so the image stays usable, and the message says so.

### Open the Web Inspector on any page

Dev Mode isn't needed for the Web Inspector: press <kbd>⌥⌘I</kbd> or choose **Develop › Web Inspector** on any tab.

### Shortcuts

| Do this | Press |
| --- | --- |
| Open the Web Inspector | <kbd>⌥⌘I</kbd> |
| Save a capture to Downloads instead of copying it | <kbd>⌥</kbd>-click the capture button |
