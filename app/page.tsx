import Link from "next/link";
import type { Metadata } from "next";
import {
  IconBook,
  IconCode,
  IconServer,
  IconTerminal2,
  IconRobot,
} from "@tabler/icons-react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Social0 Docs",
  description:
    "Documentation for the Social0 dashboard, CLI, API, AI assistants, and self-hosting.",
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
        <p className="mx-auto mt-3 max-w-md text-(--muted-foreground)">
          Documentation for the Social0 dashboard, CLI, API, AI assistants, and
          self-hosting.
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
            <Link href="/docs/self-host" className={soft}>
              <IconServer className="size-4 text-(--accent)" strokeWidth={1.75} />
              Self-hosting
            </Link>
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
