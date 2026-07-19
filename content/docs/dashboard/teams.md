---
title: "Teams & Workspaces"
description: Create teams, invite teammates, switch workspaces, and collaborate on posts with Pro.
---

## Overview

**Teams** and **Workspaces** let you organize connections and collaborate with others.

- A **team** is the organization: membership, invites, and roles live here.
- A **workspace** belongs to a team and holds **connections** (and the posts you publish with them).
- **Main (personal)** is always there — your solo home, with no team selected.

Team membership grants access to **all** workspaces in that team (invites are per-team, not per-workspace).

{/* SCREENSHOT: Teams list at /dashboard/teams — owned collaborative teams + joined teams */}

## Concepts (learn these first)

### Hierarchy

1. **Main (personal)** — Always exists. Connections with no workspace. Solo user’s home. `activeWorkspaceId` is empty.
2. **Team** — Container for members and invites. Collaboration depends on the **team owner’s Pro** plan.
3. **Workspace** — Child of a team. Connections live here. Publish scope follows the active workspace.

### Two kinds of teams

| | Collaborative team | Solo workspace container |
|--|--------------------|--------------------------|
| Listed on [Teams](https://social0.app/dashboard/teams) | Yes | No |
| Invite teammates | Yes | No |
| Counts toward max 5 owned teams | Yes | No |
| Who can create | **Pro** only | Any **paid** plan (Starter, Growth, or Pro) |
| Delete only workspace | Delete the **team** instead | Deletes the container; connections move to **Main** |

### Caps

- Max **5** owned collaborative teams per Pro owner
- Max **15** teammates per team (excluding the owner), counting **active members + pending invites**
- Pro connected-account cap: **50** across your account
- Names truncated to **80** characters

### Plan gates

| Plan | Multi-workspace (solo) | Collaborative teams |
|------|------------------------|---------------------|
| Free | No | No |
| Starter / Growth | Yes | No |
| Pro | Yes | Yes |

List price for Pro is **$49/mo**; early-adopter pricing may still show in the app. Confirm on [Billing](https://social0.app/dashboard/billing).

## Roles & permissions

Roles: **Owner**, **Admin**, **Member**.

| Capability | Owner | Admin | Member | Notes |
|------------|:-----:|:-----:|:------:|-------|
| Invite / revoke invites | ✓ | ✓ | — | |
| Remove members / change roles | ✓ | ✓ | — | Cannot change or remove the owner |
| Connect / disconnect / reauth / move accounts | ✓ | ✓ | — | Members can **view** connections |
| Create / edit / delete / publish posts | ✓ | ✓ | ✓ | Work acts on the **owner’s** resources |
| Manage queue slots | ✓ | ✓ | — | |
| Rename/delete team; add/rename/delete workspaces | ✓ | — | — | Owner only |
| Access Billing | Own billing | Own billing | Own billing | Billing is always **personal** |
| Leave team | — | ✓ | ✓ | Owner cannot leave |

### When the owner’s Pro lapses

- Teammates lose collaboration permissions (actions fail with a renew message).
- Owner keeps their own workspace access; Teams UI shows **paused** + **Renew Pro**.
- New invites and invite accepts are blocked; owner can’t add workspaces.
- Members do **not** need their own Pro to collaborate on an owner’s team — only the **owner** needs Pro.

---

## Owner path: create a collaborative team

1. Upgrade to **Pro** if needed → [Billing](https://social0.app/dashboard/billing).
2. Open [Teams](https://social0.app/dashboard/teams) → **Create team**,  
   or open [Workspaces](https://social0.app/dashboard/workspaces) → create → choose **Shared with a team**.
3. Social0 creates the team plus a **default workspace**.
4. You land in team settings: `/dashboard/teams/:teamId/settings`.

{/* SCREENSHOT: Team settings — rename, workspaces, invites, members */}

Checklist after create:

- [ ] Rename the team if you want
- [ ] Connect accounts in the default workspace (as Owner/Admin)
- [ ] Invite teammates (email + Admin or Member)

## Invite a teammate

1. Open team settings → invite by **email** and choose role (**Admin** or **Member**).
2. Invite expires in **7 days**.
3. Invitee gets an email (CTA into the dashboard). The **dashboard banner** (Accept / Decline) is the primary UX.
4. On accept, Social0 activates the **default workspace** (or the oldest workspace if needed) and opens the team composer: `/dashboard/teams/:teamId/composer`.
5. Legacy path still works: `/invite/:token` (must be signed in as the **invited email**).

{/* SCREENSHOT: Invite Accept / Decline banner on the dashboard */}

Teammates do **not** need Pro to join and post on the owner’s team.

## Switch context (Main vs team)

- Use the sidebar **Workspace switcher**: **Main** vs owned/joined workspaces.
- Team work uses the URL tree `/dashboard/teams/:teamId/*` (composer, posts, connections, calendar, bulk tools, create).
- These stay **personal** (do not wipe team membership): Billing, Settings, API keys, Feedback, Workspaces board, Teams list, More.
- Visiting a personal page does **not** leave the team permanently — return to a `/dashboard/teams/:teamId/...` URL to re-activate that workspace.
- The home **logo** goes to your **personal** composer and leaves team context.

{/* SCREENSHOT: Sidebar workspace switcher — Main vs team workspaces */}

## Workspaces board

Open [Workspaces](https://social0.app/dashboard/workspaces) (`/dashboard/workspaces`). Full walkthrough: [Workspaces board](/docs/dashboard/workspaces).

You can:

- Create a **solo** workspace (any paid plan), a **new collaborative team**, or **add a workspace** to a team you own
- Rename or delete (type-name confirm)
- Open / switch into a workspace
- **Move** connections between **Main** and workspaces **without reconnecting**

Move ownership rules:

- Into a workspace **you** own → you own the connection
- Into a team you **admin** → connection belongs to the **team owner**
- Same platform account already in the destination → clear conflict error

{/* SCREENSHOT: Workspaces board with Move connections */}

## Connect accounts inside a team workspace

1. Switch into the team workspace (or open `/dashboard/teams/:teamId/connections`).
2. You must be **Owner** or **Admin** to connect, disconnect, reauth, or move.
3. Connections are **per-workspace** — the same platform can exist in Main and another workspace separately.
4. After OAuth, you return to the **team** connections URL.
5. Facebook / LinkedIn / Instagram-via-Facebook multi-select flows stay workspace-scoped.
6. **Members** can see connections but cannot connect or disconnect. Upgrade CTAs on Connections only appear if **you** can access Billing (your personal plan).

## Collaborate on content

In plain language:

- Posts, media, queues, and plan limits use the **team owner’s** account and plan.
- The signed-in teammate is still recorded as the person who acted.
- Resurface / auto-plug / Growth features follow the **owner’s** plan.
- Composer, Posts, Calendar, and Bulk tools inside `/dashboard/teams/:teamId/*` use the **active workspace’s** connections.

{/* SCREENSHOT: Team composer URL /dashboard/teams/:teamId/composer */}

## Queue in a team

- **Owner** and **Admin** manage queue slots.
- **Members** can schedule into existing slots but cannot manage the slot list.

## Leave, delete workspace, or delete team

| Action | Who | What happens |
|--------|-----|--------------|
| Leave team | Admin / Member | You leave; owner cannot leave |
| Delete non-default workspace | Owner | Connections move to the **default** workspace (duplicates skipped) |
| Delete default when others exist | Owner | Not allowed — delete or reassign other workspaces first |
| Delete only collaborative workspace | Owner | Not allowed — **delete the team** instead |
| Delete solo workspace container | Owner of that container | Container removed; connections → **Main** |
| Delete team | Owner | Choose **keep connections → Main** or **discard** team connections |

---

## Pages you’ll use

| Page | URL | Purpose |
|------|-----|---------|
| Teams list | `/dashboard/teams` | Owned collaborative + joined teams; create; empty/upgrade state |
| Create team | `/dashboard/teams/create` | New collaborative team + default workspace |
| Team settings | `/dashboard/teams/:teamId/settings` | Rename, workspaces, invites, members, leave/delete |
| Team app | `/dashboard/teams/:teamId/*` | Composer, posts, connections, calendar, bulk tools |
| Workspaces board | `/dashboard/workspaces` | Create, rename, delete, open, move connections |
| Invite (legacy) | `/invite/:token` | Accept while signed in as invited email |

Personal-only (always yours): `/dashboard/billing`, `settings`, `api-keys`, `feedback`, `workspaces`, `teams`, `more`.

---

## Common mistakes

- Expecting Starter/Growth to invite teammates → need **Pro** for collaborative teams.
- Thinking invites unlock one workspace only → invites are **per-team** (all workspaces).
- Deleting the only collaborative workspace → delete the **team** instead.
- Confusing **Billing** while in a team → Billing is always **your** subscription, not the team’s.
- Connecting as a **Member** → only Owner/Admin can manage connections.
- Assuming moving a connection into a team you admin keeps **your** ownership → it belongs to the **team owner**.
- Sharing one login instead of inviting → use invites so roles and audit stay clear.

## When Pro lapses

1. Owner: Teams UI shows collaboration **paused**; renew on [Billing](https://social0.app/dashboard/billing).
2. Teammates: post/manage actions return permission errors until the owner renews.
3. Invites: cannot send or accept new ones until Pro is active again.
4. Owner can still use their own workspaces and Main for solo work.

---

## Edge cases & FAQ

**Why did accepting an invite open the team composer (not Main)?**  
Accept activates the team’s default workspace so you land where collaboration happens.

**Why can’t I invite on Starter/Growth?**  
Collaborative teams require **Pro**. Starter/Growth can still create **solo** multi-workspaces.

**Why can’t I delete this workspace?**  
You can’t delete the **default** while other workspaces exist, and you can’t delete the **only** workspace of a collaborative team — delete the team instead.

**Why did my connection’s ownership move to the team owner?**  
Moving into a team workspace you admin assigns the connection to the **team owner**.

**Why don’t I see Upgrade on Connections as a member?**  
Upgrade/Billing CTAs only show if **you** can open Billing (personal). Team Pro is the **owner’s** subscription.

**What happens if the owner cancels Pro?**  
Collaboration pauses for everyone. Owner keeps personal access; teammates cannot act until Pro is renewed.

**Do members need their own Pro?**  
**No** — not to collaborate on the owner’s team. They need their own paid plan only for **their** Main / solo workspaces.

**Are invites per-workspace or per-team?**  
**Per-team** — access to all workspaces in that team.

**Is the invite email a magic link?**  
The **dashboard banner** (Accept / Decline) is primary. `/invite/:token` is a legacy/alternate path.

**Why is Billing still `/dashboard/billing` when I’m in a team?**  
Billing routes are **personal-only**. Team context is not wiped; return to `/dashboard/teams/:id/...` to continue.

**Can the same Instagram (or other) account live in Main and a team workspace?**  
Yes — connections are per-workspace. Moving into a destination that already has that account shows a conflict error.

---

## Tips

- Create one collaborative team per client or brand; use workspaces inside it to split account sets.
- Prefer **Admin** for people who should connect accounts; **Member** for creators who only post.
- After upgrades, reopen Teams or refresh if the UI still shows the old gate for a moment.
- Docs icon in the Teams UI opens this page.

## Related

- [Workspaces board](/docs/dashboard/workspaces)
- [Connections](/docs/dashboard/connections)
- [Billing (dashboard)](/docs/dashboard/billing)
- [Plans](/docs/billing/plans)
- [Composer](/docs/dashboard/composer)

## For developers (API appendix)

Teams collaboration is a **dashboard** feature. Public REST API keys remain **per user** (not team-scoped). Dashboard internals use `/api/team/*` (list/create team, workspaces board, switch, leave, move accounts, invites, members). Auth resolves a workspace context: resource owner vs signed-in actor. Invite expiry defaults to **7** days (`WORKSPACE_INVITE_EXPIRY_DAYS`). See the [REST API](/docs/api) for public `/v1` publishing with your own key.
