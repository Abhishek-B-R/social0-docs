---
title: "Workspaces board"
description: Create solo or team workspaces, switch into them, and move connections without reconnecting.
---

## Overview

The **Workspaces** board (`/dashboard/workspaces`) is where you create and manage workspaces, open them, and **move** connected accounts between **Main** and workspaces without going through OAuth again.

A **workspace** holds connections. A **team** holds members. Solo workspace containers do **not** appear on the Teams list and are not inviteable. Collaborative teams (Pro) appear on [Teams](/docs/dashboard/teams). Full concepts and permissions: [Teams & Workspaces](/docs/dashboard/teams).

{/* SCREENSHOT: Workspaces board — cards for Main-linked workspaces, Open, Move */}

## How to open the board

1. In the Dashboard, open **Workspaces** (sidebar / More), or go to [social0.app/dashboard/workspaces](https://social0.app/dashboard/workspaces).
2. You’ll see your workspaces and actions to create, rename, delete, open, and move connections.

Personal note: this page is always **yours**. Opening it does not wipe team membership — return to `/dashboard/teams/:teamId/...` to continue in a team.

## Create a workspace

Use the create dialog. You’ll pick one path:

| Option | Who | Result |
|--------|-----|--------|
| Solo workspace | Any **paid** plan | Private multi-workspace container (not on Teams list, not inviteable) |
| Shared with a team (new) | **Pro** | New collaborative team + default workspace |
| Add to existing team | Team **owner** | New workspace under that team |

Names are truncated to **80** characters.

## Open / switch

- Click **Open** on a card, or use the sidebar **Workspace switcher**.
- Team workspaces take you into `/dashboard/teams/:teamId/...`.
- **Main** is your personal context (no team workspace selected).

## Rename / delete

- **Rename** — owner of the team (collaborative) or owner of the solo container.
- **Delete** — type the name to confirm.
  - Non-default workspace: connections move to the **default** (duplicates skipped).
  - Cannot delete the **default** while other workspaces exist.
  - Cannot delete the **only** workspace of a collaborative team — [delete the team](/docs/dashboard/teams#leave-delete-workspace-or-delete-team) instead.
  - Solo container delete: connections move to **Main**.

## Move connections

Move accounts between **Main** and workspaces without reconnecting.

1. Open the board → choose **Move** for an account (or the move flow in the UI).
2. Pick the destination (Main or a workspace you can manage).
3. Confirm.

### Ownership after move

| Destination | Who owns the connection |
|-------------|-------------------------|
| Your owned workspace | You |
| Team workspace you admin | **Team owner** |
| Destination already has that platform account | Error — resolve the conflict first |

Only **Owner** / **Admin** can move connections. Members can view, not move.

## Tips

- Use solo workspaces on Starter/Growth to separate brand accounts without inviting anyone.
- Use Pro collaborative teams when others need to post with you.
- After moving, check Connections in the destination workspace before publishing.

## Common questions

**Q: Why isn’t my solo workspace on the Teams page?**  
A: Solo containers are not collaborative teams. Manage them here on the Workspaces board.

**Q: Why did ownership change when I moved an account?**  
A: Moving into a team you admin assigns the connection to the **team owner**.

**Q: Do I need Pro for every workspace?**  
A: Solo multi-workspace works on any paid plan. Inviting people requires **Pro** collaborative teams.

## Related

- [Teams & Workspaces](/docs/dashboard/teams)
- [Connections](/docs/dashboard/connections)
- [Plans](/docs/billing/plans)
