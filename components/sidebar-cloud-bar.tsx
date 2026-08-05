'use client';

import { IconExternalLink } from '@tabler/icons-react';
import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';

/** Cloud CTA + theme switch — pinned to the sidebar footer. */
export function SidebarCloudBar() {
  return (
    <div className="flex items-center rounded-xl border bg-fd-secondary/50 p-0.5 text-fd-muted-foreground">
      <a
        href="https://social0.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 flex-1 items-center gap-1.5 px-2.5 py-1.5 text-sm leading-snug transition-colors hover:text-fd-foreground"
      >
        <span className="min-w-0">Use in the cloud</span>
        <IconExternalLink className="size-3.5 shrink-0" strokeWidth={1.5} />
      </a>
      <div className="mx-0.5 w-px self-stretch bg-fd-border" aria-hidden />
      <ThemeSwitch className="shrink-0 border-0 rounded-none px-1 py-0 *:rounded-md" />
    </div>
  );
}
