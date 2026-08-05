import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { buildDocsPageMetadata, buildTechArticleJsonLd } from '@/lib/seo';
import { pageMarkdownUrl } from '@/lib/markdown';

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const slug = params.slug ?? [];
  const page = source.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const path = slug.length === 0 ? '/docs' : `/docs/${slug.join('/')}`;
  const jsonLd = buildTechArticleJsonLd({
    title: page.data.title,
    description: page.data.description ?? '',
    path,
  });
  const markdownUrl = pageMarkdownUrl(slug.length === 0 ? undefined : slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <DocsTitle className="font-extrabold">{page.data.title}</DocsTitle>
          <MarkdownCopyButton markdownUrl={markdownUrl}>
            Copy page
          </MarkdownCopyButton>
        </div>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug ?? [];
  const page = source.getPage(slug);
  if (!page) return {};

  return buildDocsPageMetadata(
    page.data.title,
    page.data.description ?? '',
    slug,
  );
}
