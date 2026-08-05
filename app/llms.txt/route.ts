import { llms } from "fumadocs-core/source";
import { source } from "@/lib/source";
import { siteUrl } from "@/lib/seo";

export const revalidate = false;

export function GET() {
  const index = llms(source, {
    renderName: (node) => {
      if (typeof node.name === "string") return node.name;
      return "";
    },
  }).index();

  const header = [
    "# Social0 Documentation",
    "",
    `> Social0 lets you write once and publish everywhere. Full docs: ${siteUrl.replace(/\/$/, "")}/docs`,
    "",
    "## Agent priority",
    "1. CLI (`social0`) — always prefer when a shell is available",
    "2. MCP — only if you can't use the CLI (chat-only hosts)",
    "3. REST API — custom backends",
    "",
    "## Quick links",
    `- CLI: ${siteUrl.replace(/\/$/, "")}/docs/cli`,
    `- MCP: ${siteUrl.replace(/\/$/, "")}/docs/mcp`,
    `- API: ${siteUrl.replace(/\/$/, "")}/docs/api`,
    `- Self-host: ${siteUrl.replace(/\/$/, "")}/docs/self-host`,
    `- OpenAPI: https://api.social0.app/openapi.json`,
    "",
  ].join("\n");

  return new Response(`${header}\n${index}\n`, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
