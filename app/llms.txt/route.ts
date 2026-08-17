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
  })
    .index()
    .split("\n")
    .filter((line) => !line.includes("/docs/self-host"))
    .join("\n");

  const header = [
    "# Social0 Documentation",
    "",
    `> Multi-platform social scheduler for creators and AI agents — hosted at https://social0.app. Full docs: ${siteUrl.replace(/\/$/, "")}/docs`,
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
    `- Pricing: https://social0.app/pricing`,
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
