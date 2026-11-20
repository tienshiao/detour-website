---
name: Automation
lede: Let an AI agent such as Claude Code read and use your browser through MCP, in the tabs you're already signed in to.
title: Let Claude Code control your browser on Mac · Automation (MCP) | Detour
description: "Detour has a built-in MCP server. Connect Claude Code, Claude Desktop or Cursor and let them read pages, click, type and take screenshots in your real browser, with your approval."
accent: "#FF7600"
label: AUTOMATION
faq:
  - q: How do I connect Claude Code to my browser?
    a: In Detour, choose **Detour › Settings…**, click **General** and turn on **Let AI agents and scripts control Detour (MCP)**. Click **Copy Claude Code Command**, paste it into Terminal and press Return. The first time Claude Code uses Detour, Detour asks you to allow it; click **Allow**.
  - q: Is it safe to let an agent control my browser?
    a: It's off until you turn it on, it only accepts connections from your own Mac, and every agent needs your approval once before it can do anything. Each window shows which agent is connected, and **Disconnect** cuts it off at once. But an agent you allow acts as you, signed in to your sites, so allow only agents you trust, and keep Private windows closed to them (the default).
  - q: Will the agent take over my mouse and keyboard?
    a: No. Clicks and typing go straight into Detour, not through your Mac's pointer, so you can keep working in another app while an agent works in a Detour window behind it.
  - q: Which apps can connect?
    a: Any MCP client that can start a command, including Claude Code, Claude Desktop and Cursor. **Copy MCP Config** in **Settings › General** gives you the entry their configuration files take.
  - q: Can an agent see my Private windows?
    a: Not unless you allow it. With **Allow agents to use Private windows** off, which is the default, agents can't see or use Private windows, Private Quick Detours or Quarantine windows, or the Private Profile's extensions.
related:
  - dev-mode
  - web-extensions
  - command-palette
---

## What it does

Detour has an [MCP](https://modelcontextprotocol.io) server built in. MCP is the standard way AI agents such as Claude Code, Claude Desktop and Cursor connect to other apps. Connect one to Detour and it can see your windows, Spaces and tabs, read the page in front of you, click, type, run menu commands and take screenshots.

The agent works in your real browser, not a fresh one it started for itself. It sees the same tabs you have open and is signed in where you are, so "check the order status on that tab" or "fill in this form from my notes" just works, with no logins to repeat and no browser window to set up.

It's off until you turn it on. Every agent asks you once before it can connect, an orange label in each window names the agent that's connected, and you can disconnect it with one click.

## How to use it

### Turn it on and connect Claude Code

1. Choose **Detour › Settings…** (<kbd>⌘,</kbd>) and click **General**.
2. Under **Automation**, turn on **Let AI agents and scripts control Detour (MCP)**.
3. Click **Copy Claude Code Command** and paste the command into Terminal. It runs `claude mcp add` with a small helper inside Detour, which finds Detour and keeps the agent's access for you, so there's no address or password to copy.
4. Start Claude Code and ask it to do something in Detour, such as "list my open tabs in Detour".
5. The first time, Detour shows a prompt such as **“Claude Code” wants to control Detour**. Click **Allow**. Detour remembers the answer, so it asks only once per agent.

### Connect Claude Desktop, Cursor or another MCP client

1. Turn on automation as above.
2. Click **Copy MCP Config**. It copies an `mcpServers` entry that runs the same helper.
3. Paste the entry into the client's MCP settings, for example `claude_desktop_config.json` for Claude Desktop or `.cursor/mcp.json` for Cursor, and restart the client.
4. Allow the client when Detour asks.

### What an agent can do

- **Find its way around:** list your windows, Spaces and tabs, switch to a tab, open an address, and run menu commands such as **Reload Page** or **Pin Tab**.
- **Read a page:** its text, its HTML, the buttons, links and fields on it, its console messages and network requests, in the tab in front or in any other tab. It can also run JavaScript in the page and wait for something to appear.
- **Use a page:** click, type, press keys and choose from menus, the way you would. Detour delivers the input inside the app, so your own pointer never moves and Detour doesn't need to be in front.
- **See:** take screenshots of a window or a page.
- **Check extensions:** open an extension's popup or options page and report which browser APIs it uses that Detour doesn't have yet.

Agents can't change Detour's settings, install extensions or approve other agents.

### What you might use it for

- **Test the site you're building.** Ask Claude Code to open your `localhost` app in Detour, click through a sign-up, and read the console and network log when something fails. It sees your page as you do, in your real browser, with [Dev Mode](/features/dev-mode/)'s tools at hand.
- **Do the boring bits on sites you're signed in to.** Fill in a long form from a document, copy figures from a dashboard into a spreadsheet, or check a list of pages for broken links.
- **Ask about what's in front of you.** "Summarize the tab I'm on", "which of my open tabs mention the Q3 budget?" or "compare the prices in these three tabs".

### See what the agent is doing

- **Who's connected:** while an agent is connected, an orange label at the bottom right of each window names it, such as "Claude Code". Click it for **Disconnect**, **Turn Off Automation** and **Automation Settings…**.
- **Where it clicks:** with **Show where agents click and type** on, an orange pointer marked Agent moves to each click and the field it types into is outlined, also in windows behind other apps. Screenshots agents take leave it out.

### Stop an agent

- **Disconnect it:** click the orange label and choose **Disconnect** with the agent's name. Its access is revoked at once; if it asks again, Detour asks you again.
- **Revoke it later:** **Settings › General** lists every allowed client under **Allowed Clients**, with when you allowed it and when it last connected. Click **Revoke** to take its access away.
- **Turn it all off:** turn off **Let AI agents and scripts control Detour (MCP)**, or choose **Turn Off Automation** from the orange label. Nothing can connect until you turn it on again.

### Private windows

Agents can't see or use Private windows unless you turn on **Allow agents to use Private windows** in **Settings › General**. Off, they can't see Private windows, Private Quick Detours or Quarantine windows, their tabs or menus, or the Private Profile's extensions. Turning it off takes effect at once.

## Before you turn it on

An agent you allow acts as you. It can read anything in your tabs and click anything you could, on every site you're signed in to. Detour protects the connection: it listens only on your own Mac, refuses web pages that try to reach it, and gives each agent its own key, only after you click **Allow**. What the agent does with that access is up to the agent and to what you ask it. An agent reaches the windows of every [Profile](/features/profiles/), so allow only agents you trust, watch what they do on sites that matter, and turn automation off when you're not using it.
