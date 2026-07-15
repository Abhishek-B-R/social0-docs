---
title: "Developer settings — API keys & webhooks"
description: Manage API keys and webhook endpoints in the Social0 dashboard.
---

## Overview

The **Developer** page (`/dashboard/api-keys`) is where you create API keys for programmatic access and manage webhook endpoints. API keys authenticate requests to the [Social0 REST API](/docs/api) at `https://api.social0.app/v1`, power the [CLI](/docs/integrations/cli) (`npm install -g social0`), and power [local MCP](/docs/integrations/mcp) setups.

When you connect via hosted MCP (`https://mcp.social0.app/mcp`), Social0 creates a dedicated **connector API key** after OAuth approval. The UI may label it “Claude MCP Connector” (or similar) depending on the client. Revoke it here anytime — reconnecting mints a new one. Manual `sk_live_` keys are needed for the CLI, local `npx` MCP, or the REST API.

## How to open Developer settings

1. In the Dashboard, open the sidebar (or **More** on mobile).
2. Click **Developer** (under Configuration, or go directly to [social0.app/dashboard/api-keys](https://social0.app/dashboard/api-keys)).

You'll see two tabs: **API Keys** and **Webhooks**.

## API Keys

### Create a key

1. Click **Create key**.
2. Enter a name (e.g. "Production CI" or "Zapier integration").
3. Copy the full key (`sk_live_…`) — it is shown **once**.
4. Store it in an environment variable or secrets manager.

Name keys by integration (e.g. "Claude Desktop", "Cursor MCP") so you can revoke individually.

### Key table

| Column | Description |
|--------|-------------|
| Name | Label you chose |
| Key prefix | First characters of the key (e.g. `sk_live_abc…`) |
| Last used | When the key was last used for an API request |
| Created | When the key was created |

### Actions

| Action | What it does |
|--------|--------------|
| **Rename** | Change the key's display name |
| **Regenerate** | Creates a new key and **revokes the old one immediately** |
| **Revoke** | Permanently deletes the key |

Revoked or expired keys return `401 invalid_api_key` on API requests.

### Security

- Never commit keys to git or expose them in browser code
- Use one key per integration so you can revoke individually
- Rotate keys periodically via **Regenerate**

See [Authentication](/docs/api/authentication) for request headers and best practices.

### Use with CLI

```bash
npm install -g social0
social0 login   # paste sk_live_…
social0 accounts
```

See [CLI quickstart](/docs/integrations/cli/quickstart).

### Use with MCP

Prefer remote MCP (`https://mcp.social0.app/mcp`) with OAuth when your host supports it. For local stdio:

```json
{
  "mcpServers": {
    "social0": {
      "command": "npx",
      "args": ["-y", "@social0/mcp"],
      "env": {
        "SOCIAL0_API_KEY": "sk_live_your_key_here"
      }
    }
  }
}
```

See [MCP Server setup](/docs/integrations/mcp/quickstart).

## Webhooks

Switch to the **Webhooks** tab on the same page.

### Add an endpoint

1. Click **Add endpoint**.
2. Enter your HTTPS URL (must be public — no localhost).
3. Select events: `post.published`, `post.failed`, `post.scheduled`, `post.deleted`.
4. Copy the **signing secret** — shown once after create.

### Manage endpoints

- View all endpoints with their URL, events, and active status
- Delete endpoints you no longer need

You can also manage webhooks via the [Webhooks API](/docs/api/reference/webhooks). See [Webhooks guide](/docs/api/webhooks) for delivery format and signature verification.

## API documentation

- **MCP Server:** [Manage posts from AI assistants](/docs/integrations/mcp)
- **Docs site:** [API Overview](/docs/api)
- **Quickstart:** [Publish your first post](/docs/api/quickstart)
- **Interactive reference:** [api.social0.app/docs](https://api.social0.app/docs)
- **OpenAPI spec:** [api.social0.app/openapi.json](https://api.social0.app/openapi.json)

## Tips

- Create separate keys for development and production so you can revoke one without affecting the other.
- Set up a `post.published` webhook to avoid polling job status.
- Include the `x-request-id` header from API responses when contacting support.

## Common questions

**Q: Where do I get my API key?**  
A: Dashboard → **Developer** → Create key. Copy `sk_live_…` when shown.

**Q: I lost my key. Can I retrieve it?**  
A: No — only the hash is stored. Regenerate to get a new key (old one is revoked).

**Q: Do API keys have scopes?**  
A: Not yet. All keys are full-access today.

**Q: Can I manage webhooks without the dashboard?**  
A: Yes — use `POST /v1/webhooks` and related endpoints. See [Webhooks reference](/docs/api/reference/webhooks).

**Q: Can I use this key with Claude or Cursor?**  
A: Yes — set `SOCIAL0_API_KEY` in your MCP host config. See [MCP quick start](/docs/integrations/mcp/quickstart).
