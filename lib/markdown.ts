import { siteUrl } from "@/lib/seo";
import type { InferPageType } from "fumadocs-core/source";
import type { source } from "@/lib/source";

type DocsPage = InferPageType<typeof source>;

const docsIndexUrl = `${siteUrl.replace(/\/$/, "")}/llms.txt`;

/** Agent-friendly preamble + page markdown for Copy page / raw routes. */
export async function buildPageMarkdown(page: DocsPage): Promise<string> {
  const body = await page.data.getText("raw");
  const title = page.data.title;
  const description = page.data.description ?? "";

  const parts = [
    "> ## Documentation Index",
    `> Fetch the complete documentation index at: ${docsIndexUrl}`,
    "> Use this file to discover all available pages before exploring further.",
    "",
    `# ${title}`,
    "",
  ];

  if (description) {
    parts.push(`> ${description}`, "");
  }

  // Strip YAML frontmatter from raw source — title/description already above
  const withoutFrontmatter = body.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n*/, "");
  parts.push(withoutFrontmatter.trim(), "");

  return parts.join("\n");
}

export function pageMarkdownUrl(slug: string[] | undefined): string {
  if (!slug || slug.length === 0) return "/llms.mdx";
  return `/llms.mdx/${slug.join("/")}`;
}
