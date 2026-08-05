import { notFound } from "next/navigation";
import { source } from "@/lib/source";
import { buildPageMarkdown } from "@/lib/markdown";

type RouteProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function GET(_req: Request, props: RouteProps) {
  const { slug } = await props.params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const markdown = await buildPageMarkdown(page);
  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export function generateStaticParams() {
  return source.generateParams();
}
