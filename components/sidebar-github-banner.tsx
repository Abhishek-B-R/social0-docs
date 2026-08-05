'use client';

import { usePathname } from 'next/navigation';
import { IconBrandGithub } from '@tabler/icons-react';

const SELFHOST_REPO = 'https://github.com/Abhishek-B-R/social0-selfhost';

/** GitHub link under search — Self-host only, stays above scrolling nav. */
export function SidebarGitHubBanner() {
  const pathname = usePathname() ?? '';
  if (!pathname.startsWith('/docs/self-host')) return null;

  return (
    <a
      href={SELFHOST_REPO}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
    >
      <IconBrandGithub className="size-4 shrink-0" strokeWidth={1.5} />
      GitHub
    </a>
  );
}
