'use client';

import { usePathname } from 'next/navigation';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';

const SELFHOST_REPO = 'https://github.com/Abhishek-B-R/social0-selfhost';

/** Cloud CTA + theme switch — pinned to the sidebar footer. GitHub on Self-host. */
export function SidebarCloudBar() {
  const pathname = usePathname() ?? '';
  const onSelfHost = pathname.startsWith('/docs/self-host');

  return (
    <div className="flex flex-col gap-2">
      {onSelfHost && (
        <a
          href={SELFHOST_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-1 text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
        >
          <IconBrandGithub className="size-4 shrink-0" strokeWidth={1.5} />
          GitHub
        </a>
      )}
      <div className="flex items-center rounded-xl border bg-fd-secondary/50 p-0.5 text-fd-muted-foreground">
        <a
          href="https://social0.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 flex-1 items-center gap-1.5 px-2.5 py-1.5 text-sm leading-snug transition-colors hover:text-fd-foreground"
        >
          <span className="min-w-0">Register to the cloud</span>
          <IconExternalLink className="size-3.5 shrink-0" strokeWidth={1.5} />
        </a>
        <div className="mx-0.5 w-px self-stretch bg-fd-border" aria-hidden />
        <ThemeSwitch className="shrink-0 border-0 rounded-none px-1 py-0 *:rounded-md" />
      </div>
    </div>
  );
}
