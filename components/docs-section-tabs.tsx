"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { href: "/docs", label: "Documentation", match: (path: string) => path === "/docs" || (!path.startsWith("/docs/api") && !path.startsWith("/docs/cli") && !path.startsWith("/docs/mcp") && !path.startsWith("/docs/self-host") && path.startsWith("/docs")) },
  { href: "/docs/api", label: "Public API", match: (path: string) => path.startsWith("/docs/api") },
  { href: "/docs/cli", label: "CLI", match: (path: string) => path.startsWith("/docs/cli") },
  { href: "/docs/mcp", label: "MCP", match: (path: string) => path.startsWith("/docs/mcp") },
  { href: "/docs/self-host", label: "Self-host", match: (path: string) => path.startsWith("/docs/self-host") },
] as const;

export function DocsSectionTabs() {
  const pathname = usePathname() ?? "/docs";

  return (
    <nav
      aria-label="Documentation sections"
      className="flex items-center gap-1 overflow-x-auto"
    >
      {sections.map((section) => {
        const active = section.match(pathname);
        return (
          <Link
            key={section.href}
            href={section.href}
            className={`shrink-0 border-b-2 px-2.5 pb-3 pt-1 text-sm font-medium transition-colors ${
              active
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
          >
            {section.label}
          </Link>
        );
      })}
    </nav>
  );
}
