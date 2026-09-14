import createMDX from "@next/mdx";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
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
