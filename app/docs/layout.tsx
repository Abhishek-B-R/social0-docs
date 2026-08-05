import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { SidebarCloudBar } from '@/components/sidebar-cloud-bar';
import { SidebarGitHubBanner } from '@/components/sidebar-github-banner';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      // ponytail: Fumadocs top tabs also use grid-area:main and cover #nd-page when nav is off
      tabs={false}
      themeSwitch={{ enabled: false }}
      sidebar={{
        defaultOpenLevel: 1,
        banner: <SidebarGitHubBanner key="sidebar-github" />,
        footer: <SidebarCloudBar key="sidebar-cloud-bar" />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
