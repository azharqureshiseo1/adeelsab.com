import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

/**
 * AI and agent crawlers, named explicitly. `*` already allows them, but agent-readiness
 * checkers look for the named agents, and naming them makes the permission deliberate
 * rather than incidental. Remove a name here to opt that crawler out.
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "meta-externalagent",
  "Amazonbot",
  "DuckAssistBot",
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_AGENTS, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: siteUrl("/sitemap.xml"),
    host: siteUrl(),
  };
}
