import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AdeelSab — Sell across Pakistan",
    short_name: "AdeelSab",
    description: "Pakistan's pre-launch multi-vendor marketplace for local sellers.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#FB5301",
    lang: "en-PK",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
