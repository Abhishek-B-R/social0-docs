import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Social0 Docs",
  description:
    "Documentation for the Social0 dashboard — scheduling, publishing, and managing posts across all your social platforms.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="font-serif text-3xl tracking-tight text-(--foreground) sm:text-4xl">
          Social0 Docs
        </h1>
        <p className="mt-3 text-(--muted-foreground)">
          Documentation for the Social0 dashboard and API.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center rounded-lg border border-(--border) bg-(--accent) px-5 py-2.5 text-sm font-medium text-(--accent-foreground) transition-colors hover:opacity-90"
          >
            Browse docs
          </Link>
          <Link
            href="/docs/api/quickstart"
            className="inline-flex items-center rounded-lg border border-(--border) px-5 py-2.5 text-sm font-medium transition-colors hover:bg-(--accent)/10"
          >
            Build with the API
          </Link>
          <Link
            href="/docs/integrations/mcp"
            className="inline-flex items-center rounded-lg border border-(--border) px-5 py-2.5 text-sm font-medium transition-colors hover:bg-(--accent)/10"
          >
            AI assistants (MCP)
          </Link>
        </div>
      </div>
    </main>
  );
}
