import Link from "next/link";
import { IconBrandX, IconExternalLink } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { DocsSectionTabs } from "@/components/docs-section-tabs";

export function DocsNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            aria-label="Social0 Docs home"
            className="flex shrink-0 items-center gap-2"
          >
            <span className="font-brand text-[22px] tracking-tight text-[var(--foreground)]">
              Social0
            </span>
          </Link>
          <span className="hidden text-[var(--border)] sm:inline">|</span>
          <div className="min-w-0 pt-2">
            <DocsSectionTabs />
          </div>
        </div>

        <nav className="flex shrink-0 items-center gap-4">
          <ThemeToggle />
          <a
            href="https://social0.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)] sm:flex"
          >
            Dashboard
            <IconExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
          <a
            href="https://x.com/social0_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            aria-label="X (Twitter)"
          >
            <IconBrandX className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </nav>
      </div>
    </header>
  );
}
