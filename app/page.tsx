import Link from "next/link";
import type { Metadata } from "next";
import {
  IconBook,
  IconCode,
  IconTerminal2,
  IconRobot,
} from "@tabler/icons-react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Social0 Docs",
  description:
    "Documentation for Social0 — the multi-platform social scheduler for creators and AI agents, hosted at social0.app.",
  path: "/",
});

const primary =
  "group inline-flex items-center gap-2 rounded-xl border border-(--accent) bg-(--accent) px-5 py-2.5 text-sm font-medium text-(--accent-foreground) transition-opacity hover:opacity-90";
const soft =
  "group inline-flex items-center gap-2 rounded-xl border border-(--accent)/25 bg-(--accent)/10 px-5 py-2.5 text-sm font-medium text-(--foreground) transition-colors hover:border-(--accent)/45 hover:bg-(--accent)/15";
const quiet =
  "group inline-flex items-center gap-2 rounded-xl border border-(--border) bg-(--card) px-5 py-2.5 text-sm font-medium text-(--foreground) transition-colors hover:border-(--accent)/35 hover:bg-(--muted)";

export default function HomePage() {
  return (
    <main className="relative flex min-h-full flex-col items-center justify-center overflow-hidden px-6">
      <div className="relative max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-(--foreground) sm:text-4xl">
          Social0 Docs
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-(--muted-foreground)">
          Multi-platform social scheduler for creators and AI agents — hosted at{" "}
          <a
            href="https://social0.app"
            className="text-(--foreground) underline-offset-2 hover:underline"
          >
            social0.app
          </a>
          . Dashboard, CLI, Public API, and MCP docs.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/docs" className={primary}>
              <IconBook className="size-4 opacity-90" strokeWidth={1.75} />
              Browse docs
            </Link>
            <Link href="/docs/api/quickstart" className={soft}>
              <IconCode className="size-4 text-(--accent)" strokeWidth={1.75} />
              Build with the API
            </Link>
            <a href="https://social0.app/pricing" className={soft}>
              Plans & pricing
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/docs/cli/quickstart" className={quiet}>
              <IconTerminal2
                className="size-4 text-(--muted-foreground) transition-colors group-hover:text-(--accent)"
                strokeWidth={1.75}
              />
              CLI
            </Link>
            <Link href="/docs/mcp" className={quiet}>
              <IconRobot
                className="size-4 text-(--muted-foreground) transition-colors group-hover:text-(--accent)"
                strokeWidth={1.75}
              />
              AI assistants (MCP)
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
