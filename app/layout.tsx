import type { Metadata, Viewport } from "next";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { langInitScript } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LangProvider } from "@/components/layout/LangProvider";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { WhatsAppFab } from "@/components/blocks/WhatsAppFab";
import { Analytics } from "@/components/Analytics";
import { SiteJsonLd } from "@/components/SiteJsonLd";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

// Not preloaded: English is the default, so Urdu glyphs load only when needed.
const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-nastaliq",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://adeelsab.com"),
  title: { default: "AdeelSab — Sell across Pakistan", template: "%s · AdeelSab" },
  description: "Pakistan's pre-launch multi-vendor marketplace. Join the Founding Seller waitlist.",
  applicationName: "AdeelSab",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "AdeelSab",
    locale: "en_PK",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AdeelSab — Sell across Pakistan" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${nastaliq.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langInitScript }} />
        <SiteJsonLd />
      </head>
      <body className="flex min-h-screen flex-col">
        <LangProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
          <RevealObserver />
        </LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
