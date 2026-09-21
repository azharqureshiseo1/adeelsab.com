import createMDX from "@next/mdx";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set BUILD_STANDALONE=1 to emit .next/standalone — a self-contained server
  // that runs with `node server.js`, with no npm install or build on the host.
  // Used for zip-upload deployments; the normal build is unaffected.
  ...(process.env.BUILD_STANDALONE ? { output: "standalone" } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Pin tracing to this project (avoids picking up stray lockfiles in parent folders).
  outputFileTracingRoot: path.dirname(fileURLToPath(import.meta.url)),
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    // On-demand image optimisation is CPU-expensive and shared hosting caps CPU.
    // Ship pre-compressed WebP and skip the optimiser entirely.
    unoptimized: true,
  },
  // Files in /public have stable names (brand:assets overwrites them in place), so they
  // are cached for a month rather than a year: a replaced logo or photo then reaches
  // visitors within weeks instead of being pinned for a year. stale-while-revalidate
  // keeps repeat visits instant while the new copy is fetched in the background.
  async headers() {
    const cache = { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" };
    return [
      { source: "/images/:path*", headers: [cache] },
      { source: "/logos/:path*", headers: [cache] },
      { source: "/brand/:path*", headers: [cache] },
      { source: "/:file(favicon.ico|icon-192.png|icon-512.png|apple-touch-icon.png|og-image.png)", headers: [cache] },
    ];
  },
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
