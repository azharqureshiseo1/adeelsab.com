/**
 * ALL user-facing copy, English + Urdu. Single source of truth.
 * Components never hardcode strings — they read from here.
 *
 * `{token}` placeholders are filled at render time (usually with a <Fact />
 * so unconfirmed business values show a visible TODO marker).
 *
 * Urdu copy was drafted for launch and must be reviewed by a native editor —
 * see CONTENT-TODO.md.
 */
import type { L } from "@/lib/i18n";

const l = (en: string, ur: string): L => ({ en, ur });

/* ───────────────────────────── Global ───────────────────────────── */

export const common = {
  brand: "AdeelSab",
  ctaFounding: l("Become a Founding Seller", "فاؤنڈنگ سیلر بنیں"),
  ctaJoinWaitlist: l("Join the waitlist", "ویٹ لسٹ میں شامل ہوں"),
  ctaHowItWorks: l("How it works", "یہ کیسے کام کرتا ہے"),
  learnMore: l("Learn more", "مزید جانیں"),
  readMore: l("Read more", "مزید پڑھیں"),
  whatsappUs: l("Chat on WhatsApp", "واٹس ایپ پر بات کریں"),
  skipToContent: l("Skip to content", "مواد پر جائیں"),
  launchingSoon: l("Launching soon · Pakistan", "جلد لانچ ہو رہا ہے · پاکستان"),
  badgeNowOnboarding: l("Now onboarding", "رجسٹریشن جاری ہے"),
  badgeWaitlist: l("Waitlist open", "ویٹ لسٹ کھلی ہے"),
  badgeComingSoon: l("Coming soon", "جلد آ رہا ہے"),
  badgePhase2: l("Phase 2", "دوسرا مرحلہ"),
  minRead: l("min read", "منٹ کا مطالعہ"),
  updated: l("Updated", "اپ ڈیٹ"),
  onThisPage: l("On this page", "اس صفحے پر"),
  breadcrumbHome: l("Home", "ہوم"),
};

export const nav = {
  sellWithUs: l("Sell With Us", "ہمارے ساتھ بیچیں"),
  sellMenu: [
    {
      href: "/sell/local-sellers",
      label: l("Local Sellers", "لوکل سیلرز"),
      desc: l("Shops, wholesalers and brands — now onboarding", "دکاندار، ہول سیلرز اور برانڈز — رجسٹریشن جاری ہے"),
    },
    {
      href: "/sell/resellers",
      label: l("Resellers", "ری سیلرز"),
      desc: l("Sell our catalogue with zero inventory — waitlist", "بغیر اسٹاک کے بیچیں — ویٹ لسٹ"),
    },
    {
      href: "/sell/dropshippers",
      label: l("Dropshippers", "ڈراپ شپرز"),
      desc: l("Store sync and white-label shipping — Phase 2", "اسٹور سنک اور وائٹ لیبل شپنگ — دوسرا مرحلہ"),
    },
    {
      href: "/founding-seller",
      label: l("Founding Seller Program", "فاؤنڈنگ سیلر پروگرام"),
      desc: l("Launch-only benefits for early sellers", "ابتدائی سیلرز کے لیے خصوصی فوائد"),
    },
  ],
  main: [
    { href: "/delivery", label: l("Delivery", "ڈیلیوری") },
    { href: "/pricing", label: l("Pricing", "قیمتیں") },
    { href: "/seller-hub", label: l("Seller Hub", "سیلر ہب") },
    { href: "/about", label: l("About", "ہمارے بارے میں") },
  ],
  openMenu: l("Open menu", "مینو کھولیں"),
  closeMenu: l("Close menu", "مینو بند کریں"),
};

export const footer = {
  tagline: l(
    "A Pakistani multi-vendor marketplace. Sell to customers across Pakistan — we handle delivery, cash collection and payouts.",
    "ایک پاکستانی ملٹی وینڈر مارکیٹ پلیس۔ پورے پاکستان میں بیچیں — ڈیلیوری، کیش کلیکشن اور ادائیگیاں ہماری ذمہ داری۔",
  ),
  columns: [
    {
      title: l("Sell", "بیچیں"),
      links: [
        { href: "/founding-seller", label: l("Founding Seller Program", "فاؤنڈنگ سیلر پروگرام") },
        { href: "/sell/local-sellers", label: l("Local Sellers", "لوکل سیلرز") },
        { href: "/sell/resellers", label: l("Resellers", "ری سیلرز") },
        { href: "/sell/dropshippers", label: l("Dropshippers", "ڈراپ شپرز") },
        { href: "/reseller-listings", label: l("Reseller-Enabled Listings", "ری سیلر لسٹنگز") },
      ],
    },
    {
      title: l("Platform", "پلیٹ فارم"),
      links: [
        { href: "/how-it-works", label: l("How it works", "یہ کیسے کام کرتا ہے") },
        { href: "/delivery", label: l("Delivery & COD", "ڈیلیوری اور COD") },
        { href: "/pricing", label: l("Pricing & commission", "قیمتیں اور کمیشن") },
        { href: "/payouts", label: l("Payouts", "ادائیگیاں") },
      ],
    },
    {
      title: l("Company", "کمپنی"),
      links: [
        { href: "/about", label: l("About", "ہمارے بارے میں") },
        { href: "/careers", label: l("Careers", "نوکریاں") },
        { href: "/blog", label: l("Blog", "بلاگ") },
        { href: "/contact", label: l("Contact", "رابطہ") },
      ],
    },
    {
      title: l("Resources", "وسائل"),
      links: [
        { href: "/seller-hub", label: l("Seller Hub", "سیلر ہب") },
        { href: "/seller-hub/getting-started", label: l("Getting started", "آغاز کیسے کریں") },
        { href: "/seller-hub/reducing-rto-in-cod", label: l("Reducing RTO", "RTO کم کرنا") },
        { href: "/seller-hub/ntn-and-tax-basics", label: l("NTN & tax basics", "NTN اور ٹیکس کی بنیادی باتیں") },
      ],
    },
  ],
  legal: [
    { href: "/legal/privacy", label: l("Privacy Policy", "پرائیویسی پالیسی") },
    { href: "/legal/terms", label: l("Terms of Use", "شرائط استعمال") },
    { href: "/legal/seller-agreement", label: l("Seller Agreement", "سیلر معاہدہ") },
  ],
  registration: l("SECP Reg. {secp} · NTN {ntn}", "SECP رجسٹریشن {secp} · NTN {ntn}"),
  address: l("Office: {address}", "دفتر: {address}"),
  follow: l("Follow us", "ہمیں فالو کریں"),
  madeIn: l("Made in Pakistan 🇵🇰", "پاکستان میں تیار کردہ 🇵🇰"),
  rights: l("All rights reserved.", "جملہ حقوق محفوظ ہیں۔"),
};

export const whatsappFab = {
  label: l("Chat with AdeelSab on WhatsApp", "واٹس ایپ پر AdeelSab سے بات کریں"),
  prefill: "Assalam o Alaikum AdeelSab, I want to sell on your marketplace. Please guide me.",
};

export const notFound = {
  title: l("This page doesn't exist", "یہ صفحہ موجود نہیں"),
  lead: l(
    "The link may be old, or the page may have moved. Pick where you want to go:",
    "لنک پرانا ہو سکتا ہے یا صفحہ منتقل ہو گیا ہے۔ جہاں جانا چاہتے ہیں منتخب کریں:",
  ),
  home: l("Back to home", "ہوم پر واپس جائیں"),
};
