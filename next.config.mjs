import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
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
