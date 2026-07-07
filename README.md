# Social0 Docs

Official documentation site for Social0.

This repository contains the standalone docs app (`social0-docs`) extracted from the monorepo, powered by Next.js + Fumadocs.

## What is inside

- Product guides for creators using Social0
- Platform-specific posting docs (X, Instagram, LinkedIn, TikTok, and more)
- Feature docs (scheduling, queue, bulk tools, auto-repost)
- Developer docs for architecture and app pages

## Tech stack

- Next.js
- Fumadocs
- MDX content
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), then go to `/docs`.

## Build for production

```bash
npm run build
npm start
```

## Project structure

- `app/` - docs app routes and layout
- `content/docs/` - all documentation pages (MDX)
- `components/` - shared UI components for docs
- `lib/` - docs helpers and utilities
- `public/` - static assets

## Writing docs

All new pages should be added as `.mdx` files under `content/docs/`.

Use frontmatter like:

```mdx
---
title: "Page title"
description: "Short page summary"
---
```

Preferred sections:

- `getting-started/`
- `platforms/`
- `post-types/`
- `features/`
- `billing/`
- `developer/`

## Deployment

Deploy this repo independently (for example to `docs.social0.app`).

- Build command: `npm run build`
- Runtime: standard Next.js server output
