---
title: "Connections"
description: Connect and manage social accounts in Main or a team workspace.
---

## Overview

The **Connected Accounts** page (Connections) is where you link social accounts so you can publish from one place. You can connect multiple accounts per platform.

**Connecting accounts requires a paid plan** — on Free you can only explore the dashboard. How many accounts you can connect depends on your plan (see [Plans](/docs/billing/plans)). Pro allows up to **50** connected accounts.

### Main vs workspace

Connections are **per-workspace**:

- **Main (personal)** — accounts with no team workspace selected
- **Team / solo workspace** — accounts connected while that workspace is active

The same platform can exist in Main and another workspace separately. Use the [Workspaces board](/docs/dashboard/workspaces) to **move** accounts between Main and workspaces without reconnecting.

In a **collaborative team**, only **Owner** and **Admin** can connect, disconnect, reauth, or move. **Members** can view connections but cannot change them. Full matrix: [Teams & Workspaces](/docs/dashboard/teams#roles--permissions).

**For API and MCP:** connect accounts in the dashboard first, then use `GET /v1/accounts` or MCP `list_accounts`. Twitter/X and Bluesky must be connected in the dashboard. See [Connect accounts (API)](/docs/api/guides/connect-accounts) and [MCP](/docs/integrations/mcp).

## How to open Connections

1. Switch to the right context with the **Workspace switcher** (Main or a team workspace).
2. Open **Connections** in the sidebar, or go to `/dashboard/connections` (Main) or `/dashboard/teams/:teamId/connections` (team).

After OAuth you’ll return to the same Connections URL you started from (including team URLs).

## What you’ll see

- **Account limit banner** — If you’ve hit your plan’s limit, an orange banner offers **Upgrade** to Billing. Upgrade CTAs only appear if **you** can access Billing (your personal plan). Teammates on someone else’s Pro team typically won’t see an Upgrade button here.
- **Platform sections** — LinkedIn, Facebook, Bluesky, YouTube, Pinterest, Instagram, TikTok, X (Twitter), Threads — each with **Connect** (when allowed) and connected account pills.
- **Connected account pills** — Profile picture or initial, username, **refresh** to renew, **X** to disconnect (Owner/Admin).
- **Token expired / Reconnect** — Renew without removing the account.
- **Token management** — May include **Refresh Twitter Premium Status**.
- **Support** — Email **support@social0.app** if you’re stuck.

## How to connect another account

1. Confirm you’re in the correct workspace (Main or team).
2. Click **Connect** for the platform.
3. Sign in and approve permissions.
4. If the platform asks you to choose (Facebook Page, Instagram, LinkedIn profile/pages), select and confirm.
5. You’ll return to Connections with the new account in that workspace.

Facebook / LinkedIn / Instagram-via-Facebook multi-select flows stay **workspace-scoped**.

## Connection flow by platform

- **Twitter/X** — Sign in and authorize. Connect again for another X account.
- **Bluesky** — Sign in (or app password).
- **LinkedIn** — Choose profile and/or company pages. See [Choose LinkedIn accounts](/docs/dashboard/connections/linkedin/select).
- **Facebook** — Choose Page(s) (Pages only, not personal profiles). See [Choose Facebook Page](/docs/dashboard/connections/facebook/select).
- **Instagram** — Via Facebook Page. See [Choose Instagram account](/docs/dashboard/connections/instagram/select).
- **TikTok / YouTube / Pinterest / Threads** — Sign in and authorize as prompted.

## Disconnect, refresh, or move

- **Disconnect** — **X** on the account pill (Owner/Admin). Confirm when asked.
- **Refresh / Reconnect** — Renew the token without removing history.
- **Move** — On the [Workspaces board](/docs/dashboard/workspaces), move accounts between Main and workspaces. Moving into a team you admin assigns ownership to the **team owner**. Duplicate platform account in the destination → conflict error.

## Tips

- Reconnect expired accounts before retrying a failed post.
- TikTok may show your creator name; that’s normal.
- Members who need to connect accounts should ask an Owner/Admin, or get the Admin role.

## Common questions

**Q: Why can’t I click Connect?**  
A: You’re on Free, you hit your plan’s account limit, or you’re a **Member** in a team workspace (view-only for connections).

**Q: Why don’t I see Upgrade?**  
A: Billing CTAs only show if you can open **your** Billing page. Team collaboration uses the **owner’s** Pro.

**Q: Can the same account live in Main and a team workspace?**  
A: Yes — connections are per-workspace. Moving into a workspace that already has that account shows an error.

**Q: Why does it say “Token expired”?**  
A: Click **Reconnect** or the refresh icon — you don’t need to disconnect first.
