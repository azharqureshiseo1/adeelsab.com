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
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
