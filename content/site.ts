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

/* ───────────────────────────── Shared blocks ───────────────────────────── */

export const ctaBand = {
  title: l("Get your shop ready before launch day", "لانچ سے پہلے اپنی دکان تیار کر لیں"),
  lead: l(
    "Join the Founding Seller waitlist. Our seller team will contact you on WhatsApp to set up your store — in Urdu or English.",
    "فاؤنڈنگ سیلر ویٹ لسٹ میں شامل ہوں۔ ہماری سیلر ٹیم واٹس ایپ پر آپ سے رابطہ کر کے آپ کا اسٹور سیٹ اپ کرے گی — اردو یا انگریزی میں۔",
  ),
  points: [
    l("Free to join the waitlist", "ویٹ لسٹ میں شامل ہونا مفت ہے"),
    l("Support in Urdu", "اردو میں مدد"),
    l("No commitment until you sign the seller agreement", "سیلر معاہدے پر دستخط تک کوئی پابندی نہیں"),
  ],
};

export const waitlistForm = {
  title: l("Join the Founding Seller waitlist", "فاؤنڈنگ سیلر ویٹ لسٹ میں شامل ہوں"),
  titleReseller: l("Get notified when reselling opens", "ری سیلنگ شروع ہونے پر اطلاع پائیں"),
  titleDropshipper: l("Get early access to dropshipping", "ڈراپ شپنگ تک ابتدائی رسائی حاصل کریں"),
  intro: l("Takes under a minute. We'll contact you on WhatsApp.", "ایک منٹ سے کم وقت لگے گا۔ ہم واٹس ایپ پر رابطہ کریں گے۔"),
  fields: {
    fullName: l("Full name", "پورا نام"),
    fullNamePh: l("e.g. Muhammad Adeel", "مثلاً محمد عدیل"),
    whatsapp: l("WhatsApp number", "واٹس ایپ نمبر"),
    whatsappPh: l("03XX XXXXXXX", "03XX XXXXXXX"),
    city: l("City", "شہر"),
    cityPh: l("Select your city", "اپنا شہر منتخب کریں"),
    businessType: l("I want to join as", "میں شامل ہونا چاہتا/چاہتی ہوں بطور"),
    businessTypePh: l("Select one", "ایک منتخب کریں"),
    category: l("Main product category", "اہم پروڈکٹ کیٹیگری"),
    categoryPh: l("Select a category", "کیٹیگری منتخب کریں"),
    volume: l("Orders per month", "ماہانہ آرڈرز"),
    volumePh: l("Select", "منتخب کریں"),
    message: l("Anything we should know?", "کچھ اور بتانا چاہیں؟"),
    messagePh: l("e.g. I run a wholesale clothing shop in Anarkali", "مثلاً انارکلی میں کپڑوں کی ہول سیل دکان ہے"),
    optional: l("optional", "اختیاری"),
  },
  businessTypes: {
    local_seller: l("Local seller / shop", "لوکل سیلر / دکاندار"),
    reseller: l("Reseller", "ری سیلر"),
    dropshipper: l("Dropshipper", "ڈراپ شپر"),
    other: l("Other", "دیگر"),
  },
  volumes: {
    starting: l("Just starting", "ابھی شروع کر رہا/رہی ہوں"),
    "1-50": l("1–50 orders", "1 سے 50 آرڈرز"),
    "51-200": l("51–200 orders", "51 سے 200 آرڈرز"),
    "201-1000": l("201–1,000 orders", "201 سے 1,000 آرڈرز"),
    "1000+": l("More than 1,000 orders", "1,000 سے زیادہ آرڈرز"),
  },
  otherCategory: l("Other", "دیگر"),
  consent: l(
    "By joining, you agree that AdeelSab may contact you on WhatsApp about selling on the platform. We never sell your details. See our",
    "شامل ہو کر آپ اتفاق کرتے ہیں کہ AdeelSab پلیٹ فارم پر فروخت کے بارے میں واٹس ایپ پر آپ سے رابطہ کر سکتا ہے۔ ہم آپ کی معلومات کبھی فروخت نہیں کرتے۔ دیکھیں ہماری",
  ),
  privacy: l("Privacy Policy", "پرائیویسی پالیسی"),
  submit: l("Join the waitlist", "ویٹ لسٹ میں شامل ہوں"),
  submitting: l("Submitting…", "بھیجا جا رہا ہے…"),
  errors: {
    required: l("This field is required.", "یہ خانہ ضروری ہے۔"),
    name: l("Please enter your full name (2–80 characters).", "براہ کرم اپنا پورا نام لکھیں (2 سے 80 حروف)۔"),
    whatsapp: l(
      "Enter a valid Pakistani mobile number, e.g. 0300 1234567.",
      "درست پاکستانی موبائل نمبر لکھیں، مثلاً 0300 1234567۔",
    ),
    city: l("Please select your city.", "براہ کرم اپنا شہر منتخب کریں۔"),
    businessType: l("Please select how you want to join.", "براہ کرم منتخب کریں کہ آپ کس طرح شامل ہونا چاہتے ہیں۔"),
    message: l("Please keep your message under 1,000 characters.", "براہ کرم پیغام 1,000 حروف سے کم رکھیں۔"),
    rate_limited: l(
      "Too many attempts. Please try again later, or message us on WhatsApp.",
      "بہت زیادہ کوششیں۔ براہ کرم بعد میں کوشش کریں یا واٹس ایپ پر پیغام بھیجیں۔",
    ),
    server: l("Something went wrong on our side.", "ہماری طرف سے کوئی مسئلہ ہو گیا۔"),
  },
  success: {
    title: l("You're on the list!", "آپ ویٹ لسٹ میں شامل ہو گئے!"),
    body: l(
      "Thank you. Our seller team will contact you on WhatsApp before launch. To speed things up, send us a message now:",
      "شکریہ۔ ہماری سیلر ٹیم لانچ سے پہلے واٹس ایپ پر آپ سے رابطہ کرے گی۔ جلدی کے لیے ابھی ہمیں پیغام بھیجیں:",
    ),
    cta: l("Message us on WhatsApp", "واٹس ایپ پر پیغام بھیجیں"),
  },
  failure: {
    title: l("We couldn't save your details", "ہم آپ کی معلومات محفوظ نہیں کر سکے"),
    body: l(
      "Your connection or our server had a problem. Don't lose your place — send your details to us on WhatsApp and we'll add you manually.",
      "آپ کے انٹرنیٹ یا ہمارے سرور میں مسئلہ آیا۔ اپنی جگہ ضائع نہ کریں — اپنی معلومات واٹس ایپ پر بھیجیں، ہم آپ کو خود شامل کر لیں گے۔",
    ),
    cta: l("Send my details on WhatsApp", "میری معلومات واٹس ایپ پر بھیجیں"),
    retry: l("Try again", "دوبارہ کوشش کریں"),
  },
};

/* ───────────────────────────── Home ───────────────────────────── */

export const home = {
  meta: {
    title: "AdeelSab — Sell across Pakistan. We handle the rest.",
    description:
      "AdeelSab is a Pakistani multi-vendor marketplace launching soon. List your products once — we handle nationwide delivery, cash on delivery and payouts. Join the Founding Seller waitlist.",
  },
  hero: {
    eyebrow: common.launchingSoon,
    title: l("Sell across Pakistan. We handle the rest.", "پورے پاکستان میں بیچیں۔ باقی کام ہمارا۔"),
    sub: l(
      "List your products once. We deliver to customers nationwide, collect cash on delivery and pay you on a fixed schedule — no website, no courier accounts, no chasing payments.",
      "اپنی پروڈکٹس ایک بار لسٹ کریں۔ ہم ملک بھر میں ڈیلیوری کرتے ہیں، کیش آن ڈیلیوری وصول کرتے ہیں اور طے شدہ شیڈول پر آپ کو ادائیگی کرتے ہیں — نہ ویب سائٹ، نہ کوریئر اکاؤنٹس، نہ پیسوں کے پیچھے بھاگنا۔",
    ),
    micro: l("Free to join the waitlist · Support in Urdu", "ویٹ لسٹ میں شامل ہونا مفت · اردو میں مدد"),
    imageAlt: l(
      "A shop owner arranging products on the shelves of their store",
      "دکاندار اپنی دکان میں شیلف پر پروڈکٹس ترتیب دے رہا ہے",
    ),
    cardTitle: l("Order delivered · COD collected", "آرڈر ڈیلیور · COD وصول"),
    cardSub: l("Payout scheduled to your account", "آپ کے اکاؤنٹ میں ادائیگی شیڈول"),
  },
  paths: {
    eyebrow: l("Three ways to earn", "کمانے کے تین طریقے"),
    title: l("Choose how you want to sell", "منتخب کریں کہ آپ کیسے بیچنا چاہتے ہیں"),
    lead: l(
      "We're opening in stages so every seller launches into real demand. Local sellers come first.",
      "ہم مرحلہ وار کھول رہے ہیں تاکہ ہر سیلر حقیقی ڈیمانڈ کے ساتھ شروع کرے۔ پہلے لوکل سیلرز۔",
    ),
    items: [
      {
        key: "local",
        href: "/sell/local-sellers",
        badge: common.badgeNowOnboarding,
        title: l("Local Sellers", "لوکل سیلرز"),
        promise: l(
          "Put your shop in front of customers across Pakistan.",
          "اپنی دکان کو پورے پاکستان کے گاہکوں تک پہنچائیں۔",
        ),
        bullets: [
          l("We create your product listings for free", "ہم آپ کی پروڈکٹ لسٹنگز مفت بناتے ہیں"),
          l("Delivery and cash collection handled for you", "ڈیلیوری اور کیش وصولی ہماری ذمہ داری"),
          l("Payouts to bank, JazzCash or Easypaisa", "بینک، JazzCash یا Easypaisa میں ادائیگی"),
        ],
        cta: l("Start as a local seller", "بطور لوکل سیلر شروع کریں"),
      },
      {
        key: "reseller",
        href: "/sell/resellers",
        badge: common.badgeWaitlist,
        title: l("Resellers", "ری سیلرز"),
        promise: l(
          "Earn by selling products you never have to stock.",
          "ایسی پروڈکٹس بیچ کر کمائیں جن کا اسٹاک رکھنا نہ پڑے۔",
        ),
        bullets: [
          l("Zero inventory, zero upfront investment", "نہ اسٹاک، نہ پیشگی سرمایہ"),
          l("Every margin published upfront", "ہر مارجن پہلے سے واضح"),
          l("Opens once the catalogue is ready", "کیٹلاگ تیار ہوتے ہی شروع"),
        ],
        cta: l("Join the reseller waitlist", "ری سیلر ویٹ لسٹ میں شامل ہوں"),
      },
      {
        key: "dropshipper",
        href: "/sell/dropshippers",
        badge: common.badgeComingSoon,
        title: l("Dropshippers", "ڈراپ شپرز"),
        promise: l(
          "Connect your online store to Pakistani suppliers.",
          "اپنے آن لائن اسٹور کو پاکستانی سپلائرز سے جوڑیں۔",
        ),
        bullets: [
          l("Real-time stock sync", "اسٹاک کی لمحہ بہ لمحہ اپ ڈیٹ"),
          l("White-label packaging", "وائٹ لیبل پیکجنگ"),
          l("Shopify & WooCommerce integration", "Shopify اور WooCommerce انٹیگریشن"),
        ],
        cta: l("See what's coming", "دیکھیں کیا آ رہا ہے"),
      },
    ],
  },
  capability: {
    title: l("What's in place for launch", "لانچ کے لیے کیا تیار ہے"),
    lead: l(
      "We're pre-launch, so we won't show you vanity numbers. Here is what every seller gets from day one.",
      "ہم ابھی لانچ سے پہلے ہیں، اس لیے دکھاوے کے اعداد نہیں دکھائیں گے۔ یہ وہ ہے جو ہر سیلر کو پہلے دن سے ملے گا۔",
    ),
    items: [
      {
        stat: l("Own fleet", "اپنا فلیٹ"),
        label: l("for same-city delivery in {fleetCities}", "{fleetCities} میں اسی شہر کی ڈیلیوری کے لیے"),
      },
      {
        stat: l("3", "3"),
        label: l("national courier partners — TCS, Leopards, PostEx", "قومی کوریئر پارٹنرز — TCS، Leopards، PostEx"),
      },
      { stat: l("COD", "COD"), label: l("cash on delivery across Pakistan", "پورے پاکستان میں کیش آن ڈیلیوری") },
      {
        stat: l("{payoutDays}", "{payoutDays}"),
        label: l("day payout cycle after delivery", "دن میں ڈیلیوری کے بعد ادائیگی"),
      },
      { stat: l("اردو", "اردو"), label: l("seller support in Urdu and English", "اردو اور انگریزی میں سیلر سپورٹ") },
    ],
  },
  how: {
    eyebrow: l("How it works", "یہ کیسے کام کرتا ہے"),
    title: l("From your shelf to your customer's door", "آپ کی شیلف سے گاہک کے دروازے تک"),
    steps: [
      {
        title: l("Register", "رجسٹر کریں"),
        body: l(
          "Join the waitlist. We call you on WhatsApp, verify your CNIC and bank details, and sign the seller agreement.",
          "ویٹ لسٹ میں شامل ہوں۔ ہم واٹس ایپ پر کال کر کے آپ کا شناختی کارڈ اور بینک تفصیلات تصدیق کرتے ہیں اور سیلر معاہدہ کرتے ہیں۔",
        ),
      },
      {
        title: l("List products — or we list them for you", "پروڈکٹس لسٹ کریں — یا ہم کر دیں"),
        body: l(
          "Send photos and prices on WhatsApp. Founding Sellers get their listings written and set up by our team.",
          "واٹس ایپ پر تصاویر اور قیمتیں بھیجیں۔ فاؤنڈنگ سیلرز کی لسٹنگز ہماری ٹیم خود لکھ کر سیٹ اپ کرتی ہے۔",
        ),
      },
      {
        title: l("Order arrives", "آرڈر آتا ہے"),
        body: l(
          "You get notified, pack the order, and we pick it up. Delivery and cash collection are on us.",
          "آپ کو اطلاع ملتی ہے، آپ آرڈر پیک کرتے ہیں اور ہم اٹھا لیتے ہیں۔ ڈیلیوری اور کیش وصولی ہماری ذمہ داری۔",
        ),
      },
      {
        title: l("You get paid", "آپ کو ادائیگی ملتی ہے"),
        body: l(
          "Your earnings, minus published commission and shipping, go to your bank, JazzCash or Easypaisa on a fixed schedule.",
          "آپ کی کمائی، شائع شدہ کمیشن اور شپنگ منہا کر کے، طے شدہ شیڈول پر بینک، JazzCash یا Easypaisa میں۔",
        ),
      },
    ],
  },
  resellerListings: {
    eyebrow: l("Only on AdeelSab", "صرف AdeelSab پر"),
    title: l("Reseller-Enabled Listings", "ری سیلر اینیبلڈ لسٹنگز"),
    lead: l(
      "One switch turns a single listing into a sales team. Sellers decide; resellers see every number upfront.",
      "ایک بٹن آپ کی لسٹنگ کو سیلز ٹیم میں بدل دیتا ہے۔ فیصلہ سیلر کا؛ ری سیلر کو ہر رقم پہلے سے معلوم۔",
    ),
    sellers: {
      title: l("For sellers", "سیلرز کے لیے"),
      body: l(
        "Mark a product as reseller-enabled and set the margin you're willing to share. Resellers across Pakistan promote it to their own customers. You pay that margin only when their sale is delivered.",
        "کسی پروڈکٹ کو ری سیلر اینیبلڈ کریں اور وہ مارجن طے کریں جو آپ دینا چاہتے ہیں۔ پورے پاکستان کے ری سیلرز اسے اپنے گاہکوں تک پہنچاتے ہیں۔ یہ مارجن صرف تب دیتے ہیں جب ان کی فروخت ڈیلیور ہو جائے۔",
      ),
      points: [
        l("You choose which products and what margin", "کون سی پروڈکٹ اور کتنا مارجن — آپ طے کریں"),
        l("No upfront cost for the extra reach", "زیادہ رسائی کے لیے کوئی پیشگی خرچ نہیں"),
        l("Switch it off any time", "جب چاہیں بند کر دیں"),
      ],
    },
    resellers: {
      title: l("For resellers", "ری سیلرز کے لیے"),
      body: l(
        "Browse products whose sellers have agreed to share a margin. Every margin is published before you share a product — no negotiation, no inventory, no money upfront.",
        "وہ پروڈکٹس دیکھیں جن کے سیلرز مارجن دینے پر راضی ہیں۔ ہر مارجن پہلے سے شائع ہوتا ہے — نہ مول تول، نہ اسٹاک، نہ پیشگی رقم۔",
      ),
      points: [
        l("Published margin on every product", "ہر پروڈکٹ پر شائع شدہ مارجن"),
        l("We deliver and collect cash for you", "ڈیلیوری اور کیش وصولی ہماری"),
        l("Earnings paid on a fixed schedule", "کمائی طے شدہ شیڈول پر"),
      ],
    },
    cta: l("See how it works", "دیکھیں یہ کیسے کام کرتا ہے"),
  },
  delivery: {
    eyebrow: l("Delivery & COD", "ڈیلیوری اور COD"),
    title: l("Your products reach customers anywhere in Pakistan", "آپ کی پروڈکٹس پاکستان میں کہیں بھی گاہک تک"),
    lead: l(
      "Same-city orders go out with our own riders. Everything else ships through established national courier networks — with cash on delivery wherever they deliver.",
      "اسی شہر کے آرڈرز ہمارے اپنے رائیڈرز لے جاتے ہیں۔ باقی سب معروف قومی کوریئر نیٹ ورکس کے ذریعے — جہاں وہ ڈیلیور کرتے ہیں وہاں کیش آن ڈیلیوری۔",
    ),
    points: [
      {
        title: l("Own fleet", "اپنا فلیٹ"),
        body: l("Same-city delivery in {fleetCities}", "{fleetCities} میں اسی شہر میں ڈیلیوری"),
      },
      {
        title: l("Nationwide", "ملک بھر میں"),
        body: l("Through TCS, Leopards and PostEx", "TCS، Leopards اور PostEx کے ذریعے"),
      },
      {
        title: l("Cash on delivery", "کیش آن ڈیلیوری"),
        body: l("Collected and remitted to you", "وصول کر کے آپ کو منتقل"),
      },
      {
        title: l("Returns handled", "واپسی کا انتظام"),
        body: l("RTO charges published — no surprises", "RTO چارجز واضح — کوئی سرپرائز نہیں"),
      },
    ],
    partnersLabel: l("Delivering with", "ڈیلیوری پارٹنرز"),
    cta: l("Delivery, rates & RTO", "ڈیلیوری، ریٹس اور RTO"),
  },
  founding: {
    eyebrow: l("Founding Seller Program", "فاؤنڈنگ سیلر پروگرام"),
    title: l("Join before launch. Keep the benefits after.", "لانچ سے پہلے شامل ہوں۔ فوائد بعد میں بھی۔"),
    lead: l(
      "Sellers who join before launch get terms we won't offer again, in exchange for helping build the catalogue customers see on day one.",
      "لانچ سے پہلے شامل ہونے والے سیلرز کو ایسی شرائط ملیں گی جو دوبارہ نہیں ملیں گی — بدلے میں آپ وہ کیٹلاگ بنانے میں مدد دیں جو گاہک پہلے دن دیکھیں گے۔",
    ),
    benefits: [
      l("Reduced commission for your first {months} months", "پہلے {months} ماہ کم کمیشن"),
      l("Free listing creation by our team", "ہماری ٹیم کی طرف سے مفت لسٹنگ"),
      l("Priority support on WhatsApp", "واٹس ایپ پر ترجیحی سپورٹ"),
      l("Featured placement at launch", "لانچ پر نمایاں جگہ"),
      l("Founding Seller badge on your store", "آپ کے اسٹور پر فاؤنڈنگ سیلر بیج"),
    ],
    cap: l("Limited to the first {cap} sellers.", "صرف پہلے {cap} سیلرز کے لیے۔"),
    cta: l("See the full program", "مکمل پروگرام دیکھیں"),
  },
  trust: {
    title: l("Who you're dealing with", "آپ کس سے معاملہ کر رہے ہیں"),
    lead: l(
      "A registered Pakistani company you can call, message or visit.",
      "ایک رجسٹرڈ پاکستانی کمپنی جسے آپ کال، میسج یا وزٹ کر سکتے ہیں۔",
    ),
    secp: l("SECP registration", "SECP رجسٹریشن"),
    ntn: l("National Tax Number", "نیشنل ٹیکس نمبر"),
    office: l("Office", "دفتر"),
    whatsapp: l("WhatsApp", "واٹس ایپ"),
    founderAlt: l("Portrait of the AdeelSab founder", "AdeelSab کے بانی کی تصویر"),
    founderRole: l("Founder, AdeelSab", "بانی، AdeelSab"),
  },
  faq: {
    eyebrow: l("Straight answers", "سیدھے جواب"),
    title: l("Questions sellers ask us first", "سیلرز کے سب سے پہلے سوالات"),
  },
};

/** FAQ items. `{tokens}` are filled with facts (visible TODO markers until confirmed). */
export const faqs = {
  commission: {
    q: l("How much commission do you charge?", "آپ کتنا کمیشن لیتے ہیں؟"),
    a: l(
      "Commission is a percentage of the item price, set by category and published in full on our pricing page. Every fee we charge is listed there — if a fee isn't on that page, we don't charge it.",
      "کمیشن پروڈکٹ کی قیمت کا ایک فیصد ہے جو کیٹیگری کے حساب سے طے ہے اور ہمارے قیمتوں کے صفحے پر مکمل شائع ہے۔ ہر فیس وہاں درج ہے — جو فیس اس صفحے پر نہیں، وہ ہم نہیں لیتے۔",
    ),
  },
  payoutTiming: {
    q: l("When do I get my money?", "مجھے پیسے کب ملیں گے؟"),
    a: l(
      "Payouts are released {payoutDays} days after an order is delivered, to your bank account, JazzCash or Easypaisa. The minimum payout is {minPayout}.",
      "آرڈر ڈیلیور ہونے کے {payoutDays} دن بعد ادائیگی آپ کے بینک اکاؤنٹ، JazzCash یا Easypaisa میں کی جاتی ہے۔ کم از کم ادائیگی {minPayout} ہے۔",
    ),
  },
  rto: {
    q: l("What if a customer refuses a COD parcel?", "اگر گاہک COD پارسل لینے سے انکار کر دے تو؟"),
    a: l(
      "The parcel comes back to you (return to origin, RTO) and a return charge of {rtoCharge} applies. We publish this upfront because returns are the biggest hidden cost of COD in Pakistan. Our Seller Hub guide on reducing RTO shows how to keep it low.",
      "پارسل آپ کو واپس آتا ہے (RTO) اور {rtoCharge} واپسی چارج لگتا ہے۔ ہم یہ پہلے بتاتے ہیں کیونکہ پاکستان میں COD کا سب سے بڑا چھپا خرچ واپسی ہے۔ سیلر ہب میں RTO کم کرنے کی گائیڈ موجود ہے۔",
    ),
  },
  shipping: {
    q: l("Who pays for shipping?", "شپنگ کا خرچ کون دیتا ہے؟"),
    a: l(
      "You decide per product: the customer pays, you pay (to offer free delivery), or you split it. Rates are weight-banded and published on our delivery page.",
      "ہر پروڈکٹ کے لیے آپ طے کریں: گاہک دے، آپ دیں (مفت ڈیلیوری کے لیے)، یا دونوں آدھا آدھا۔ ریٹس وزن کے حساب سے ہیں اور ڈیلیوری کے صفحے پر شائع ہیں۔",
    ),
  },
  cod: {
    q: l("Do you offer cash on delivery?", "کیا کیش آن ڈیلیوری دستیاب ہے؟"),
    a: l(
      "Yes, across Pakistan — through our own fleet for same-city orders and through TCS, Leopards and PostEx nationwide. Cash collected is remitted to you {codDays} days after delivery.",
      "جی ہاں، پورے پاکستان میں — اسی شہر کے آرڈرز ہمارے اپنے فلیٹ سے اور ملک بھر میں TCS، Leopards اور PostEx کے ذریعے۔ وصول شدہ رقم ڈیلیوری کے {codDays} دن بعد آپ کو منتقل کی جاتی ہے۔",
    ),
  },
  unsold: {
    q: l("What if my stock doesn't sell?", "اگر میرا مال نہ بکے تو؟"),
    a: l(
      "Your stock stays with you. We never buy or hold inventory, so there is nothing to send us, take back or write off. You can change prices, pause or remove listings whenever you like. The listing fee is {listingFee}.",
      "آپ کا مال آپ کے پاس ہی رہتا ہے۔ ہم نہ اسٹاک خریدتے ہیں نہ رکھتے ہیں، اس لیے نہ کچھ بھیجنا ہے نہ واپس لینا۔ آپ جب چاہیں قیمت بدلیں، لسٹنگ روکیں یا ہٹا دیں۔ لسٹنگ فیس {listingFee} ہے۔",
    ),
  },
  // Founding Seller
  foundingFree: {
    q: l("Does it cost anything to join?", "کیا شامل ہونے کی کوئی فیس ہے؟"),
    a: l(
      "Joining the waitlist is free and doesn't commit you to anything. You only agree to terms when you sign the seller agreement during onboarding.",
      "ویٹ لسٹ میں شامل ہونا مفت ہے اور اس سے آپ پر کوئی پابندی نہیں آتی۔ شرائط پر اتفاق صرف آن بورڈنگ کے دوران سیلر معاہدے پر دستخط سے ہوتا ہے۔",
    ),
  },
  foundingAfter: {
    q: l("What happens when the Founding Seller period ends?", "فاؤنڈنگ سیلر مدت ختم ہونے کے بعد کیا ہوگا؟"),
    a: l(
      "After {months} months your commission moves to the standard rate for your category, as published on our pricing page. Your badge and store stay as they are.",
      "{months} ماہ بعد آپ کا کمیشن آپ کی کیٹیگری کے معیاری ریٹ پر آ جائے گا جو ہمارے قیمتوں کے صفحے پر شائع ہے۔ آپ کا بیج اور اسٹور ویسے ہی رہیں گے۔",
    ),
  },
  foundingCapFull: {
    q: l("What if the program is full?", "اگر پروگرام بھر جائے تو؟"),
    a: l(
      "The program is capped at {cap} sellers. If it fills before you join, you can still register and sell from launch day on standard terms.",
      "پروگرام میں صرف {cap} سیلرز کی گنجائش ہے۔ اگر آپ کے شامل ہونے سے پہلے بھر جائے تو بھی آپ رجسٹر ہو کر لانچ کے دن سے معیاری شرائط پر بیچ سکتے ہیں۔",
    ),
  },
  foundingNtn: {
    q: l("Can I join without an NTN?", "کیا NTN کے بغیر شامل ہو سکتا ہوں؟"),
    a: l(
      "Yes, you can join the waitlist without one. Our NTN and tax basics guide in the Seller Hub explains what registration means for online sellers and how to get it.",
      "جی ہاں، آپ اس کے بغیر ویٹ لسٹ میں شامل ہو سکتے ہیں۔ سیلر ہب میں NTN اور ٹیکس کی بنیادی گائیڈ بتاتی ہے کہ آن لائن سیلرز کے لیے رجسٹریشن کا کیا مطلب ہے اور یہ کیسے حاصل کریں۔",
    ),
  },
  foundingLaunch: {
    q: l("When does AdeelSab launch?", "AdeelSab کب لانچ ہوگا؟"),
    a: l(
      "Our target launch date is {launchDate}. Founding Sellers are told the confirmed date first, with enough time to get listings and stock ready.",
      "ہماری متوقع لانچ تاریخ {launchDate} ہے۔ فاؤنڈنگ سیلرز کو حتمی تاریخ سب سے پہلے بتائی جائے گی تاکہ لسٹنگز اور اسٹاک تیار کرنے کا وقت ملے۔",
    ),
  },
};

/* ───────────────────────────── Founding Seller ───────────────────────────── */

export const founding = {
  meta: {
    title: "Founding Seller Program",
    description:
      "Join AdeelSab before launch: reduced commission, free listing creation, priority WhatsApp support, featured launch placement and a Founding Seller badge.",
  },
  hero: {
    eyebrow: l("Founding Seller Program · Pre-launch", "فاؤنڈنگ سیلر پروگرام · لانچ سے پہلے"),
    title: l("Launch with us. Get terms we won't offer again.", "ہمارے ساتھ لانچ کریں۔ ایسی شرائط جو دوبارہ نہیں ملیں گی۔"),
    sub: l(
      "We're choosing the first sellers customers will see on day one. Join now and we'll set up your store for free — and charge you less while you grow.",
      "ہم وہ پہلے سیلرز منتخب کر رہے ہیں جنہیں گاہک پہلے دن دیکھیں گے۔ ابھی شامل ہوں — ہم آپ کا اسٹور مفت سیٹ اپ کریں گے اور شروع میں کم کمیشن لیں گے۔",
    ),
    cta: l("Reserve my place", "میری جگہ محفوظ کریں"),
    counterLabel: l("Founding Sellers registered", "رجسٹرڈ فاؤنڈنگ سیلرز"),
    capLabel: l("Places in the program", "پروگرام میں کل جگہیں"),
    counterNote: l("Updated by our team, not a live counter.", "یہ تعداد ہماری ٹیم اپ ڈیٹ کرتی ہے، یہ لائیو کاؤنٹر نہیں۔"),
  },
  what: {
    eyebrow: l("What it is", "یہ کیا ہے"),
    title: l("A deal for the sellers who build the marketplace with us", "ان سیلرز کے لیے خاص پیشکش جو ہمارے ساتھ مارکیٹ پلیس بناتے ہیں"),
    body: l(
      "A marketplace is only as good as what customers find on day one. Founding Sellers are the shops and wholesalers who list before launch, so customers arrive to a full catalogue. In return, you get lower costs, hands-on setup and visibility no later seller will get.",
      "مارکیٹ پلیس اتنی ہی اچھی ہوتی ہے جتنا گاہکوں کو پہلے دن ملے۔ فاؤنڈنگ سیلرز وہ دکاندار اور ہول سیلرز ہیں جو لانچ سے پہلے لسٹ کرتے ہیں تاکہ گاہک مکمل کیٹلاگ دیکھیں۔ بدلے میں آپ کو کم خرچ، مکمل سیٹ اپ مدد اور وہ نمایاں جگہ ملتی ہے جو بعد والے سیلرز کو نہیں ملے گی۔",
    ),
  },
  benefits: {
    eyebrow: l("What you get", "آپ کو کیا ملے گا"),
    title: l("Five benefits for joining early", "جلد شامل ہونے کے پانچ فوائد"),
    lead: l(
      "Here is exactly what Founding Sellers get. Nothing is hidden in the fine print.",
      "یہ ہے وہ سب کچھ جو فاؤنڈنگ سیلرز کو ملتا ہے۔ کچھ بھی باریک حروف میں چھپا نہیں۔",
    ),
    items: [
      {
        title: l("Reduced commission", "کم کمیشن"),
        body: l(
          "Pay {foundingRate} commission for your first {months} months after launch, instead of the standard rate for your category.",
          "لانچ کے بعد پہلے {months} ماہ اپنی کیٹیگری کے معیاری ریٹ کے بجائے صرف {foundingRate} کمیشن دیں۔",
        ),
      },
      {
        title: l("Free listing creation", "مفت لسٹنگ"),
        body: l(
          "Send photos and prices on WhatsApp. Our team writes your titles and descriptions and sets up every listing for you.",
          "واٹس ایپ پر تصاویر اور قیمتیں بھیجیں۔ ہماری ٹیم عنوان اور تفصیل لکھ کر آپ کی ہر لسٹنگ خود سیٹ اپ کرے گی۔",
        ),
      },
      {
        title: l("Priority support", "ترجیحی سپورٹ"),
        body: l(
          "A direct WhatsApp line to our seller team, in Urdu or English. Founding Sellers are answered first.",
          "ہماری سیلر ٹیم سے براہ راست واٹس ایپ رابطہ، اردو یا انگریزی میں۔ فاؤنڈنگ سیلرز کو سب سے پہلے جواب۔",
        ),
      },
      {
        title: l("Featured launch placement", "لانچ پر نمایاں جگہ"),
        body: l(
          "Your products appear in the launch placements customers see first when AdeelSab opens.",
          "AdeelSab کھلنے پر آپ کی پروڈکٹس ان جگہوں پر ہوں گی جو گاہک سب سے پہلے دیکھیں گے۔",
        ),
      },
      {
        title: l("Founding Seller badge", "فاؤنڈنگ سیلر بیج"),
        body: l(
          "A badge on your store page that tells customers you've been with AdeelSab from the start.",
          "آپ کے اسٹور پیج پر بیج جو گاہکوں کو بتائے کہ آپ شروع سے AdeelSab کے ساتھ ہیں۔",
        ),
      },
    ],
  },
  who: {
    eyebrow: l("Who it's for", "یہ کس کے لیے ہے"),
    title: l("Sellers with real stock, ready to ship", "اصل اسٹاک والے سیلرز جو ڈیلیوری کے لیے تیار ہوں"),
    yes: [
      l("Shop owners in markets and bazaars", "بازاروں اور مارکیٹوں کے دکاندار"),
      l("Wholesalers and distributors", "ہول سیلرز اور ڈسٹری بیوٹرز"),
      l("Manufacturers and local brands", "مینوفیکچررز اور مقامی برانڈز"),
      l("Home-based businesses with consistent stock", "گھریلو کاروبار جن کے پاس باقاعدہ اسٹاک ہو"),
    ],
    notTitle: l("Not the right fit yet", "ابھی مناسب نہیں"),
    not: l(
      "If you don't hold stock, the reseller and dropshipper programs are built for you — they open after launch.",
      "اگر آپ کے پاس اپنا اسٹاک نہیں تو ری سیلر اور ڈراپ شپر پروگرام آپ کے لیے ہیں — یہ لانچ کے بعد کھلیں گے۔",
    ),
  },
  needs: {
    eyebrow: l("What we need from you", "ہمیں آپ سے کیا چاہیے"),
    title: l("Four things to get started", "شروع کرنے کے لیے چار چیزیں"),
    items: [
      {
        title: l("Your CNIC", "آپ کا شناختی کارڈ"),
        body: l("To verify the business owner.", "کاروبار کے مالک کی تصدیق کے لیے۔"),
      },
      {
        title: l("A payout account in your name", "آپ کے نام پر ادائیگی اکاؤنٹ"),
        body: l("Bank account, JazzCash or Easypaisa.", "بینک اکاؤنٹ، JazzCash یا Easypaisa۔"),
      },
      {
        title: l("Product photos and prices", "پروڈکٹ تصاویر اور قیمتیں"),
        body: l("Phone photos are fine — we'll guide you.", "موبائل کی تصاویر کافی ہیں — ہم رہنمائی کریں گے۔"),
      },
      {
        title: l("Stock you can pack and hand over", "ایسا اسٹاک جو آپ پیک کر کے دے سکیں"),
        body: l(
          "Orders must be ready when our rider or courier arrives.",
          "رائیڈر یا کوریئر کے آنے پر آرڈر تیار ہونا چاہیے۔",
        ),
      },
    ],
  },
  timeline: {
    eyebrow: l("Timeline to launch", "لانچ تک کا شیڈول"),
    title: l("What happens after you join", "شامل ہونے کے بعد کیا ہوتا ہے"),
    steps: [
      {
        title: l("Join the waitlist", "ویٹ لسٹ میں شامل ہوں"),
        body: l("One minute. Your place is reserved in the order you join.", "ایک منٹ۔ آپ کی جگہ شامل ہونے کی ترتیب سے محفوظ ہوتی ہے۔"),
      },
      {
        title: l("Onboarding call", "آن بورڈنگ کال"),
        body: l(
          "We call you on WhatsApp, verify your details and walk you through the seller agreement.",
          "ہم واٹس ایپ پر کال کر کے آپ کی تفصیلات تصدیق کرتے ہیں اور سیلر معاہدہ سمجھاتے ہیں۔",
        ),
      },
      {
        title: l("Listings built", "لسٹنگز تیار"),
        body: l(
          "Our team creates your listings. You check prices and stock before anything goes live.",
          "ہماری ٹیم آپ کی لسٹنگز بناتی ہے۔ کچھ بھی لائیو ہونے سے پہلے آپ قیمت اور اسٹاک چیک کرتے ہیں۔",
        ),
      },
      {
        title: l("Launch day", "لانچ کا دن"),
        body: l("Target: {launchDate}. Your store opens with the marketplace.", "متوقع: {launchDate}۔ مارکیٹ پلیس کے ساتھ آپ کا اسٹور کھلے گا۔"),
      },
    ],
  },
  formSection: {
    title: l("Reserve your Founding Seller place", "اپنی فاؤنڈنگ سیلر جگہ محفوظ کریں"),
    lead: l(
      "Places are limited to {cap} sellers and reserved in the order you join.",
      "جگہیں صرف {cap} سیلرز کے لیے ہیں اور شامل ہونے کی ترتیب سے محفوظ ہوتی ہیں۔",
    ),
  },
  faqTitle: l("Founding Seller questions", "فاؤنڈنگ سیلر سے متعلق سوالات"),
  ctaTitle: l("The first sellers set the standard", "پہلے سیلرز معیار طے کرتے ہیں"),
  ctaLead: l(
    "Reserve your place now — it takes a minute, and there's no commitment until you sign.",
    "ابھی اپنی جگہ محفوظ کریں — ایک منٹ لگتا ہے اور دستخط تک کوئی پابندی نہیں۔",
  ),
};

/* ───────────────────────────── Shared: money & coverage ───────────────────────────── */

export const commissionTable = {
  caption: l("Commission by category", "کیٹیگری کے حساب سے کمیشن"),
  category: l("Category", "کیٹیگری"),
  rate: l("Commission (% of item price)", "کمیشن (پروڈکٹ قیمت کا %)"),
  foundingNote: l(
    "Founding Sellers pay {foundingRate} on every category for their first {months} months after launch.",
    "فاؤنڈنگ سیلرز لانچ کے بعد پہلے {months} ماہ ہر کیٹیگری پر {foundingRate} کمیشن دیتے ہیں۔",
  ),
  note: l(
    "Commission is a percentage of the item price. Shipping charges are separate and listed on the delivery page.",
    "کمیشن پروڈکٹ قیمت کا فیصد ہے۔ شپنگ چارجز الگ ہیں اور ڈیلیوری کے صفحے پر درج ہیں۔",
  ),
};

export const payoutRails = {
  title: l("Get paid where you want", "جہاں چاہیں ادائیگی لیں"),
  items: [
    {
      name: l("Bank account", "بینک اکاؤنٹ"),
      body: l("Any Pakistani bank account in the seller's name (IBAN).", "سیلر کے نام پر کسی بھی پاکستانی بینک کا اکاؤنٹ (IBAN)۔"),
    },
    {
      name: l("JazzCash", "JazzCash"),
      body: l("Mobile wallet registered to the seller's CNIC.", "سیلر کے شناختی کارڈ پر رجسٹرڈ موبائل والیٹ۔"),
    },
    {
      name: l("Easypaisa", "Easypaisa"),
      body: l("Mobile wallet registered to the seller's CNIC.", "سیلر کے شناختی کارڈ پر رجسٹرڈ موبائل والیٹ۔"),
    },
  ],
};

export const coverage = {
  mapLabel: l(
    "Map of Pakistan showing AdeelSab delivery coverage by city",
    "پاکستان کا نقشہ جس میں شہروں کے حساب سے AdeelSab ڈیلیوری کوریج دکھائی گئی ہے",
  ),
  legendFleet: l("Own fleet (same-city delivery)", "اپنا فلیٹ (اسی شہر میں ڈیلیوری)"),
  legend3pl: l("Nationwide via TCS · Leopards · PostEx", "ملک بھر میں TCS · Leopards · PostEx کے ذریعے"),
  fleetPending: l("Own-fleet cities will be marked here once confirmed.", "اپنے فلیٹ والے شہر تصدیق کے بعد یہاں دکھائے جائیں گے۔"),
  citiesTitle: l("Cities on the map", "نقشے پر شہر"),
  mapNote: l(
    "Courier partners also deliver to towns and villages beyond the cities shown.",
    "کوریئر پارٹنرز دکھائے گئے شہروں کے علاوہ قصبوں اور دیہات میں بھی ڈیلیور کرتے ہیں۔",
  ),
};

/* ───────────────────────────── Sell hub ───────────────────────────── */

export const sellHub = {
  meta: {
    title: "Sell With Us",
    description:
      "Three ways to earn on AdeelSab: local sellers (now onboarding), resellers (waitlist) and dropshippers (Phase 2). Compare and choose.",
  },
  hero: {
    eyebrow: l("Sell With Us", "ہمارے ساتھ بیچیں"),
    title: l("One marketplace, three ways to earn", "ایک مارکیٹ پلیس، کمانے کے تین طریقے"),
    lead: l(
      "Whether you own a shop, want to sell without stock, or run your own online store — here's where you fit, and when each path opens.",
      "چاہے آپ کی دکان ہو، بغیر اسٹاک کے بیچنا چاہتے ہوں، یا اپنا آن لائن اسٹور چلاتے ہوں — یہاں دیکھیں آپ کہاں فٹ ہوتے ہیں اور ہر راستہ کب کھلے گا۔",
    ),
  },
  why: {
    title: l("Why we open in this order", "ہم اس ترتیب سے کیوں کھول رہے ہیں"),
    body: l(
      "Every product on AdeelSab comes from independent sellers — we don't buy or hold stock ourselves. Resellers can only sell what's already listed, so we're onboarding local sellers first. The reseller program opens once the catalogue is deep enough to be worth your time.",
      "AdeelSab پر ہر پروڈکٹ آزاد سیلرز کی ہے — ہم خود اسٹاک نہیں خریدتے یا رکھتے۔ ری سیلرز صرف وہی بیچ سکتے ہیں جو پہلے سے لسٹڈ ہو، اس لیے پہلے لوکل سیلرز کو شامل کیا جا رہا ہے۔ ری سیلر پروگرام تب کھلے گا جب کیٹلاگ اتنا بڑا ہو کہ آپ کا وقت ضائع نہ ہو۔",
    ),
  },
  compare: {
    title: l("Compare the three paths", "تینوں راستوں کا موازنہ"),
    head: [l("", ""), l("Local Sellers", "لوکل سیلرز"), l("Resellers", "ری سیلرز"), l("Dropshippers", "ڈراپ شپرز")],
    rows: [
      {
        label: l("Who it's for", "کس کے لیے"),
        cells: [
          l("Shops, wholesalers, brands", "دکاندار، ہول سیلرز، برانڈز"),
          l("Anyone with customers to sell to", "ہر وہ شخص جس کے پاس گاہک ہوں"),
          l("Owners of online stores", "آن لائن اسٹور کے مالکان"),
        ],
      },
      {
        label: l("Stock needed", "اسٹاک درکار"),
        cells: [l("Yes — your own", "ہاں — اپنا"), l("No", "نہیں"), l("No", "نہیں")],
      },
      {
        label: l("Upfront investment", "پیشگی سرمایہ"),
        cells: [l("None to join", "شامل ہونے کے لیے کوئی نہیں"), l("None", "کوئی نہیں"), l("None", "کوئی نہیں")],
      },
      {
        label: l("How you earn", "کمائی کیسے"),
        cells: [
          l("Your selling price, minus commission", "آپ کی قیمت فروخت، کمیشن منہا کر کے"),
          l("The published margin on each sale", "ہر فروخت پر شائع شدہ مارجن"),
          l("Your store price, minus supplier price", "آپ کے اسٹور کی قیمت، سپلائر قیمت منہا کر کے"),
        ],
      },
      {
        label: l("Status", "صورتحال"),
        cells: [l("Now onboarding", "رجسٹریشن جاری ہے"), l("Waitlist open", "ویٹ لسٹ کھلی ہے"), l("Phase 2", "دوسرا مرحلہ")],
      },
    ],
  },
};

/* ───────────────────────────── Local sellers ───────────────────────────── */

export const localSellers = {
  meta: {
    title: "Sell Online as a Local Seller",
    description:
      "Sell your shop's products across Pakistan on AdeelSab. Free listing creation, full commission table, RTO charges, payout schedule and delivery coverage — stated plainly.",
  },
  hero: {
    eyebrow: l("For shop owners, wholesalers & local brands", "دکانداروں، ہول سیلرز اور مقامی برانڈز کے لیے"),
    title: l("Your shop, open to all of Pakistan", "آپ کی دکان، پورے پاکستان کے لیے کھلی"),
    lead: l(
      "Keep running your shop the way you do today. We bring the orders, deliver them, collect the cash and pay you — and we tell you every cost before you sign.",
      "اپنی دکان ویسے ہی چلائیں جیسے آج چلاتے ہیں۔ آرڈرز ہم لائیں گے، ڈیلیور کریں گے، کیش وصول کر کے آپ کو ادائیگی کریں گے — اور ہر خرچ دستخط سے پہلے بتائیں گے۔",
    ),
    cta: l("Join as a local seller", "بطور لوکل سیلر شامل ہوں"),
    whatsapp: l("Ask us in Urdu on WhatsApp", "واٹس ایپ پر اردو میں پوچھیں"),
  },
  objectionsIntro: {
    eyebrow: l("Your questions, answered first", "آپ کے سوالات، پہلے جوابات"),
    title: l("The six things every shop owner asks us", "چھ باتیں جو ہر دکاندار ہم سے پوچھتا ہے"),
  },
  complicated: {
    q: l("“Selling online is complicated.”", "”آن لائن بیچنا مشکل ہے۔“"),
    title: l("You don't have to do the online part", "آن لائن کام آپ کو نہیں کرنا"),
    body: l(
      "No website, no app skills, no photo studio. Send us your products on WhatsApp and our team builds your store for you.",
      "نہ ویب سائٹ، نہ ایپ کی مہارت، نہ فوٹو اسٹوڈیو۔ واٹس ایپ پر اپنی پروڈکٹس بھیجیں، ہماری ٹیم آپ کا اسٹور خود بنائے گی۔",
    ),
    points: [
      {
        title: l("Free listing creation", "مفت لسٹنگ"),
        body: l("We write titles and descriptions and set up your listings.", "ہم عنوان اور تفصیل لکھ کر آپ کی لسٹنگز سیٹ اپ کرتے ہیں۔"),
      },
      {
        title: l("Onboarding call in Urdu", "اردو میں آن بورڈنگ کال"),
        body: l("A real person walks you through everything, step by step.", "ایک اصل انسان آپ کو قدم بہ قدم سب کچھ سمجھاتا ہے۔"),
      },
      {
        title: l("Phone photos are enough", "موبائل تصاویر کافی ہیں"),
        body: l("Our guide shows how to take clear photos with any phone.", "ہماری گائیڈ بتاتی ہے کہ کسی بھی فون سے صاف تصاویر کیسے لیں۔"),
      },
    ],
    guide: l("Read: product photography with a phone", "پڑھیں: موبائل سے پروڈکٹ فوٹوگرافی"),
  },
  returns: {
    q: l("“Returns will cost me.”", "”واپسی کا خرچ مجھ پر پڑے گا۔“"),
    title: l("Here is exactly what a return costs", "واپسی کا اصل خرچ یہ ہے"),
    body: l(
      "With cash on delivery, some customers refuse parcels at the door. When that happens the parcel is returned to you (return to origin, or RTO) and a return charge applies. We publish it here rather than surprising you with it later.",
      "کیش آن ڈیلیوری میں کچھ گاہک دروازے پر پارسل لینے سے انکار کر دیتے ہیں۔ ایسی صورت میں پارسل آپ کو واپس آتا ہے (RTO) اور واپسی چارج لگتا ہے۔ ہم اسے یہاں شائع کرتے ہیں تاکہ بعد میں کوئی سرپرائز نہ ہو۔",
    ),
    tableZone: l("Delivery zone", "ڈیلیوری زون"),
    tableCharge: l("RTO charge per parcel", "فی پارسل RTO چارج"),
    points: [
      l(
        "Returned parcels come back to you — the product stays yours.",
        "واپس ہونے والے پارسل آپ کو واپس ملتے ہیں — پروڈکٹ آپ کی ہی رہتی ہے۔",
      ),
      l(
        "The charge depends on where the parcel was going — see the table.",
        "چارج اس بات پر منحصر ہے کہ پارسل کہاں جا رہا تھا — ٹیبل دیکھیں۔",
      ),
    ],
    guide: l("Read: how to reduce RTO on COD orders", "پڑھیں: COD آرڈرز میں RTO کیسے کم کریں"),
    more: l("Full return and RTO policy", "مکمل واپسی اور RTO پالیسی"),
  },
  commission: {
    q: l("“There'll be hidden commissions.”", "”چھپے ہوئے کمیشن ہوں گے۔“"),
    title: l("Every commission rate, on one table", "ہر کمیشن ریٹ، ایک ٹیبل میں"),
    body: l(
      "This is the full list. If a fee isn't on our pricing page, we don't charge it.",
      "یہ مکمل فہرست ہے۔ جو فیس ہمارے قیمتوں کے صفحے پر نہیں، وہ ہم نہیں لیتے۔",
    ),
    more: l("See every fee on the pricing page", "قیمتوں کے صفحے پر ہر فیس دیکھیں"),
  },
  money: {
    q: l("“When do I get my money?”", "”مجھے پیسے کب ملیں گے؟“"),
    title: l("A fixed payout schedule, to the account you choose", "طے شدہ شیڈول پر، آپ کے منتخب اکاؤنٹ میں ادائیگی"),
    schedule: [
      {
        title: l("Order delivered", "آرڈر ڈیلیور"),
        body: l("The customer receives the parcel and pays cash.", "گاہک پارسل وصول کر کے کیش ادا کرتا ہے۔"),
      },
      {
        title: l("Cash remitted", "کیش منتقل"),
        body: l("Collected cash reaches us within {codDays} days.", "وصول شدہ کیش {codDays} دن میں ہم تک پہنچتا ہے۔"),
      },
      {
        title: l("Payout released", "ادائیگی جاری"),
        body: l(
          "Your earnings are paid {payoutDays} days after delivery, minimum {minPayout}.",
          "آپ کی کمائی ڈیلیوری کے {payoutDays} دن بعد ادا کی جاتی ہے، کم از کم {minPayout}۔",
        ),
      },
    ],
    more: l("Payout details", "ادائیگی کی تفصیلات"),
  },
  reach: {
    q: l("“Will it reach my customers?”", "”کیا یہ میرے گاہکوں تک پہنچے گا؟“"),
    title: l("Same-city by our riders. Everywhere else by national couriers.", "اسی شہر میں ہمارے رائیڈرز۔ باقی ہر جگہ قومی کوریئرز۔"),
    more: l("Delivery times and rates", "ڈیلیوری کا وقت اور ریٹس"),
  },
  ntn: {
    q: l("“Do I need an NTN?”", "”کیا مجھے NTN چاہیے؟“"),
    title: l("You can join without one — here's what to know", "آپ اس کے بغیر شامل ہو سکتے ہیں — یہ جاننا ضروری ہے"),
    points: [
      l(
        "You can join the waitlist and start onboarding without an NTN.",
        "آپ NTN کے بغیر ویٹ لسٹ میں شامل ہو کر آن بورڈنگ شروع کر سکتے ہیں۔",
      ),
      l(
        "For individuals, registering with FBR is free through the IRIS portal, and your CNIC number is used as your NTN.",
        "افراد کے لیے FBR کے IRIS پورٹل پر رجسٹریشن مفت ہے اور آپ کا شناختی کارڈ نمبر ہی آپ کا NTN ہوتا ہے۔",
      ),
      l(
        "Being on FBR's Active Taxpayers List (ATL) usually means lower withholding tax on business transactions.",
        "FBR کی ایکٹو ٹیکس پیئرز لسٹ (ATL) میں ہونے سے عام طور پر کاروباری لین دین پر ود ہولڈنگ ٹیکس کم ہوتا ہے۔",
      ),
    ],
    disclaimer: l(
      "Tax rules change with each Finance Act. This is general information, not tax advice — confirm your situation with a tax adviser.",
      "ٹیکس قوانین ہر فنانس ایکٹ کے ساتھ بدلتے ہیں۔ یہ عمومی معلومات ہے، ٹیکس مشورہ نہیں — اپنی صورتحال کسی ٹیکس ماہر سے تصدیق کریں۔",
    ),
    guide: l("Read: NTN and tax basics for online sellers", "پڑھیں: آن لائن سیلرز کے لیے NTN اور ٹیکس کی بنیادی باتیں"),
  },
  onboarding: {
    eyebrow: l("Onboarding", "آن بورڈنگ"),
    title: l("Five steps from waitlist to your first order", "ویٹ لسٹ سے پہلے آرڈر تک پانچ قدم"),
    steps: [
      {
        title: l("Join the waitlist", "ویٹ لسٹ میں شامل ہوں"),
        body: l("Share your name, WhatsApp and city.", "اپنا نام، واٹس ایپ اور شہر بتائیں۔"),
      },
      {
        title: l("Onboarding call", "آن بورڈنگ کال"),
        body: l("We call you in Urdu or English and answer every question.", "ہم اردو یا انگریزی میں کال کر کے ہر سوال کا جواب دیتے ہیں۔"),
      },
      {
        title: l("Verify and sign", "تصدیق اور دستخط"),
        body: l("Verify your CNIC and payout account, and sign the seller agreement.", "شناختی کارڈ اور ادائیگی اکاؤنٹ کی تصدیق کریں اور سیلر معاہدے پر دستخط کریں۔"),
      },
      {
        title: l("Listings go live", "لسٹنگز لائیو"),
        body: l("We build your listings; you approve prices and stock.", "ہم لسٹنگز بناتے ہیں؛ آپ قیمت اور اسٹاک منظور کرتے ہیں۔"),
      },
      {
        title: l("First order", "پہلا آرڈر"),
        body: l("Pack it, hand it to the rider or courier, and get paid on schedule.", "پیک کریں، رائیڈر یا کوریئر کو دیں اور شیڈول پر ادائیگی پائیں۔"),
      },
    ],
  },
  bring: {
    title: l("What to keep ready", "کیا تیار رکھیں"),
    items: [
      l("Your CNIC (front and back)", "شناختی کارڈ (آگے اور پیچھے)"),
      l("Bank account, JazzCash or Easypaisa details in your name", "آپ کے نام پر بینک، JazzCash یا Easypaisa کی تفصیلات"),
      l("Photos of your products — a phone camera is fine", "پروڈکٹس کی تصاویر — موبائل کیمرا کافی ہے"),
      l("Your prices and how many of each item you have", "آپ کی قیمتیں اور ہر آئٹم کی تعداد"),
    ],
  },
  callback: {
    title: l("Prefer to talk it through?", "بات کر کے سمجھنا چاہتے ہیں؟"),
    body: l(
      "Leave your WhatsApp number and our seller team will call you back in Urdu. No forms to understand, no pressure to sign.",
      "اپنا واٹس ایپ نمبر دیں، ہماری سیلر ٹیم آپ کو اردو میں کال بیک کرے گی۔ نہ مشکل فارم، نہ دستخط کا دباؤ۔",
    ),
    cta: l("Message us on WhatsApp", "واٹس ایپ پر پیغام بھیجیں"),
    hours: l("Office hours: {officeHours}", "دفتری اوقات: {officeHours}"),
  },
  ctaTitle: l("Open your shop to all of Pakistan", "اپنی دکان پورے پاکستان کے لیے کھولیں"),
};

/* ───────────────────────────── Resellers ───────────────────────────── */

export const resellers = {
  meta: {
    title: "Become a Reseller — Waitlist",
    description:
      "Sell products from AdeelSab's catalogue with zero inventory and published margins. The reseller program opens once the catalogue is ready — join the waitlist to be notified.",
  },
  hero: {
    eyebrow: l("Reseller program · Waitlist", "ری سیلر پروگرام · ویٹ لسٹ"),
    title: l("Earn from products you never have to stock", "ان پروڈکٹس سے کمائیں جن کا اسٹاک رکھنا نہ پڑے"),
    lead: l(
      "We're being straight with you: the reseller catalogue is still being built, and no products are available to resell yet. Join the waitlist and we'll message you the day it opens.",
      "ہم آپ کو صاف بتا رہے ہیں: ری سیلر کیٹلاگ ابھی تیار ہو رہا ہے اور ابھی کوئی پروڈکٹ ری سیل کے لیے دستیاب نہیں۔ ویٹ لسٹ میں شامل ہوں، جس دن یہ کھلے گا ہم آپ کو پیغام بھیجیں گے۔",
    ),
    cta: l("Notify me when it opens", "کھلنے پر مجھے اطلاع دیں"),
    status: l("Catalogue in progress", "کیٹلاگ تیار ہو رہا ہے"),
    statusBody: l(
      "Resellers can only sell what sellers have listed, so local sellers are onboarded first.",
      "ری سیلرز صرف وہی بیچ سکتے ہیں جو سیلرز نے لسٹ کیا ہو، اس لیے پہلے لوکل سیلرز شامل کیے جا رہے ہیں۔",
    ),
  },
  zero: {
    eyebrow: l("Zero investment", "صفر سرمایہ"),
    title: l("How reselling works on AdeelSab", "AdeelSab پر ری سیلنگ کیسے کام کرتی ہے"),
    lead: l(
      "You bring the customers. The seller supplies the product. We handle delivery, cash collection and your payout.",
      "گاہک آپ لائیں۔ پروڈکٹ سیلر دے۔ ڈیلیوری، کیش وصولی اور آپ کی ادائیگی ہماری ذمہ داری۔",
    ),
    steps: [
      {
        title: l("Pick a product", "پروڈکٹ چنیں"),
        body: l("Browse reseller-enabled listings, each with its margin shown.", "ری سیلر اینیبلڈ لسٹنگز دیکھیں، ہر ایک پر مارجن لکھا ہوا۔"),
      },
      {
        title: l("Share it", "شیئر کریں"),
        body: l("Send it to your customers on WhatsApp, Facebook or Instagram.", "واٹس ایپ، فیس بک یا انسٹاگرام پر اپنے گاہکوں کو بھیجیں۔"),
      },
      {
        title: l("Place the order", "آرڈر لگائیں"),
        body: l("Enter your customer's address. We deliver and collect the cash.", "گاہک کا پتہ درج کریں۔ ڈیلیوری اور کیش وصولی ہم کریں گے۔"),
      },
      {
        title: l("Earn your margin", "اپنا مارجن کمائیں"),
        body: l("Your margin is paid {payoutDays} days after delivery.", "آپ کا مارجن ڈیلیوری کے {payoutDays} دن بعد ادا ہوتا ہے۔"),
      },
    ],
  },
  margins: {
    eyebrow: l("Published margins", "شائع شدہ مارجن"),
    title: l("You see what you earn before you share", "شیئر کرنے سے پہلے معلوم کہ کتنا کمائیں گے"),
    points: [
      {
        title: l("Set by the seller, shown to you", "سیلر طے کرتا ہے، آپ کو دکھایا جاتا ہے"),
        body: l(
          "Each seller decides which products resellers can sell and the margin they'll share.",
          "ہر سیلر طے کرتا ہے کہ ری سیلرز کون سی پروڈکٹس بیچ سکتے ہیں اور کتنا مارجن دیا جائے گا۔",
        ),
      },
      {
        title: l("No negotiation", "کوئی مول تول نہیں"),
        body: l(
          "The margin is fixed on the listing. You don't have to call anyone or bargain.",
          "مارجن لسٹنگ پر طے ہوتا ہے۔ کسی کو کال کرنے یا بحث کرنے کی ضرورت نہیں۔",
        ),
      },
      {
        title: l("Earned on delivered orders", "ڈیلیور شدہ آرڈرز پر کمائی"),
        body: l(
          "Your margin is confirmed once the customer receives and pays for the order.",
          "گاہک کے آرڈر وصول کر کے ادائیگی کرنے پر آپ کا مارجن پکا ہو جاتا ہے۔",
        ),
      },
    ],
  },
  calculator: {
    title: l("Margin calculator", "مارجن کیلکولیٹر"),
    lead: l(
      "Try your own numbers. This is an estimate — real margins are shown on each listing when the program opens.",
      "اپنے اعداد آزمائیں۔ یہ اندازہ ہے — پروگرام کھلنے پر اصل مارجن ہر لسٹنگ پر دکھایا جائے گا۔",
    ),
    price: l("Product price (Rs)", "پروڈکٹ کی قیمت (روپے)"),
    margin: l("Published margin (%)", "شائع شدہ مارجن (%)"),
    orders: l("Delivered orders per month", "ماہانہ ڈیلیور شدہ آرڈرز"),
    perSale: l("You earn per sale", "فی فروخت آپ کی کمائی"),
    perMonth: l("Estimated per month", "ماہانہ اندازاً"),
    note: l(
      "Estimates only. Earnings are paid on delivered orders; refused or returned orders earn no margin.",
      "صرف اندازہ۔ کمائی ڈیلیور شدہ آرڈرز پر ملتی ہے؛ واپس یا مسترد شدہ آرڈرز پر مارجن نہیں ملتا۔",
    ),
  },
  categories: {
    eyebrow: l("Category preview", "کیٹیگریز کی جھلک"),
    title: l("Categories we're building for resellers", "وہ کیٹیگریز جو ری سیلرز کے لیے تیار کی جا رہی ہیں"),
    lead: l(
      "These are the categories we're onboarding sellers in first. Products appear when the program opens.",
      "ان کیٹیگریز میں پہلے سیلرز شامل کیے جا رہے ہیں۔ پروگرام کھلنے پر پروڈکٹس نظر آئیں گی۔",
    ),
  },
  payout: {
    title: l("When you get paid", "آپ کو ادائیگی کب ملتی ہے"),
    body: l(
      "Margins are paid {payoutDays} days after the order is delivered, to your bank account, JazzCash or Easypaisa. Minimum payout: {minPayout}.",
      "مارجن آرڈر ڈیلیور ہونے کے {payoutDays} دن بعد آپ کے بینک اکاؤنٹ، JazzCash یا Easypaisa میں ادا کیا جاتا ہے۔ کم از کم ادائیگی: {minPayout}۔",
    ),
  },
  formTitle: l("Be first when reselling opens", "ری سیلنگ کھلتے ہی سب سے پہلے جانیں"),
  formLead: l(
    "We'll message you on WhatsApp the day the reseller catalogue goes live. No spam, no sign-up fee.",
    "جس دن ری سیلر کیٹلاگ لائیو ہوگا ہم آپ کو واٹس ایپ پر پیغام بھیجیں گے۔ نہ اسپام، نہ سائن اپ فیس۔",
  ),
};

/* ───────────────────────────── Dropshippers ───────────────────────────── */

export const dropshippers = {
  meta: {
    title: "Dropshipping — Coming in Phase 2",
    description:
      "AdeelSab dropshipping is coming in Phase 2: real-time stock sync, white-label packaging, tracking API and Shopify/WooCommerce integration. Join the early-access list.",
  },
  hero: {
    eyebrow: l("Dropshippers", "ڈراپ شپرز"),
    title: l("Connect your store to Pakistani suppliers", "اپنے اسٹور کو پاکستانی سپلائرز سے جوڑیں"),
    lead: l(
      "Dropshipping arrives in Phase 2, after the marketplace launches. Here's what we're building — join the early-access list to hear first.",
      "ڈراپ شپنگ مارکیٹ پلیس لانچ کے بعد دوسرے مرحلے میں آئے گی۔ یہ ہے جو ہم بنا رہے ہیں — سب سے پہلے جاننے کے لیے ابتدائی رسائی کی فہرست میں شامل ہوں۔",
    ),
  },
  featuresTitle: l("What's coming", "کیا آ رہا ہے"),
  features: [
    {
      title: l("Real-time stock sync", "اسٹاک کی لمحہ بہ لمحہ اپ ڈیٹ"),
      body: l("Supplier stock levels update in your store automatically, so you never sell what's out of stock.", "سپلائر کا اسٹاک آپ کے اسٹور میں خود اپ ڈیٹ ہوگا تاکہ ختم شدہ مال نہ بکے۔"),
    },
    {
      title: l("White-label packaging", "وائٹ لیبل پیکجنگ"),
      body: l("Parcels ship without supplier branding, so customers see your store, not ours.", "پارسلز سپلائر کی برانڈنگ کے بغیر جائیں گے تاکہ گاہک آپ کا اسٹور دیکھے۔"),
    },
    {
      title: l("Tracking API", "ٹریکنگ API"),
      body: l("Order status and courier tracking pushed back into your own systems.", "آرڈر کی صورتحال اور کوریئر ٹریکنگ آپ کے اپنے سسٹم میں۔"),
    },
    {
      title: l("Shopify & WooCommerce", "Shopify اور WooCommerce"),
      body: l("Import products and route orders from the platforms you already use.", "جن پلیٹ فارمز کو آپ پہلے سے استعمال کرتے ہیں وہیں سے پروڈکٹس اور آرڈرز۔"),
    },
  ],
  formTitle: l("Get early access", "ابتدائی رسائی حاصل کریں"),
  formLead: l(
    "Tell us about your store. We'll contact you when Phase 2 opens for testing.",
    "اپنے اسٹور کے بارے میں بتائیں۔ دوسرا مرحلہ ٹیسٹنگ کے لیے کھلنے پر ہم رابطہ کریں گے۔",
  ),
  meanwhile: l(
    "Have your own stock? You can start selling at launch as a local seller.",
    "آپ کا اپنا اسٹاک ہے؟ آپ لانچ پر بطور لوکل سیلر بیچنا شروع کر سکتے ہیں۔",
  ),
  meanwhileCta: l("See the local seller program", "لوکل سیلر پروگرام دیکھیں"),
};

/* ───────────────────────────── Delivery ───────────────────────────── */

export const delivery = {
  meta: {
    title: "Delivery, COD & Returns",
    description:
      "How AdeelSab delivers across Pakistan: own fleet for same-city orders, TCS, Leopards and PostEx nationwide. Coverage map, delivery times, weight-banded rate card, COD remittance and RTO charges.",
  },
  hero: {
    eyebrow: l("Delivery & COD", "ڈیلیوری اور COD"),
    title: l("Every parcel, every city, every rupee accounted for", "ہر پارسل، ہر شہر، ہر روپے کا حساب"),
    lead: l(
      "This page lists how we deliver, how long it takes, what it costs, how cash reaches you, and what happens when a parcel comes back. No part of it is hidden.",
      "اس صفحے پر لکھا ہے کہ ہم کیسے ڈیلیور کرتے ہیں، کتنا وقت لگتا ہے، کتنا خرچ آتا ہے، کیش آپ تک کیسے پہنچتا ہے اور پارسل واپس آنے پر کیا ہوتا ہے۔ کچھ بھی چھپا نہیں۔",
    ),
    jump: [
      { href: "#coverage", label: l("Coverage", "کوریج") },
      { href: "#times", label: l("Delivery times", "ڈیلیوری کا وقت") },
      { href: "#rates", label: l("Rate card", "ریٹ کارڈ") },
      { href: "#cod", label: l("COD", "COD") },
      { href: "#rto", label: l("RTO charges", "RTO چارجز") },
      { href: "#returns", label: l("Returns", "واپسی") },
    ],
  },
  coverage: {
    eyebrow: l("Coverage", "کوریج"),
    title: l("Two networks, one checkout", "دو نیٹ ورکس، ایک چیک آؤٹ"),
    body: l(
      "When the customer is in the same city as you, our own riders collect and deliver. Everywhere else, the order ships through a national courier partner. You don't choose or manage the courier — we route every order.",
      "جب گاہک آپ کے شہر میں ہو تو ہمارے اپنے رائیڈرز آرڈر اٹھا کر ڈیلیور کرتے ہیں۔ باقی ہر جگہ آرڈر قومی کوریئر پارٹنر کے ذریعے جاتا ہے۔ آپ کو کوریئر چننے یا سنبھالنے کی ضرورت نہیں — ہر آرڈر ہم روٹ کرتے ہیں۔",
    ),
  },
  times: {
    eyebrow: l("Delivery times", "ڈیلیوری کا وقت"),
    title: l("How long delivery takes", "ڈیلیوری میں کتنا وقت لگتا ہے"),
    zone: l("Destination", "منزل"),
    carrier: l("Delivered by", "ڈیلیوری از"),
    time: l("Typical delivery time", "عام ڈیلیوری وقت"),
    cod: l("COD", "COD"),
    note: l(
      "Times are counted from pickup. Public holidays, weather and remote areas can add time.",
      "وقت پک اپ سے شمار ہوتا ہے۔ سرکاری تعطیلات، موسم اور دور دراز علاقوں میں زیادہ وقت لگ سکتا ہے۔",
    ),
  },
  partners: {
    eyebrow: l("Courier partners", "کوریئر پارٹنرز"),
    title: l("Delivered by networks your customers already trust", "ان نیٹ ورکس کے ذریعے جن پر آپ کے گاہک پہلے سے بھروسہ کرتے ہیں"),
  },
  rates: {
    eyebrow: l("Rate card", "ریٹ کارڈ"),
    title: l("Shipping rates by weight", "وزن کے حساب سے شپنگ ریٹس"),
    lead: l(
      "Rates are per parcel in Pakistani rupees, based on the packed weight and the destination.",
      "ریٹس فی پارسل پاکستانی روپوں میں ہیں، پیک شدہ وزن اور منزل کے حساب سے۔",
    ),
    weight: l("Packed weight", "پیک شدہ وزن"),
    note: l(
      "Weight is the heavier of actual weight and volumetric weight. See the packaging guide for how to keep parcels light and safe.",
      "وزن اصل وزن یا حجمی وزن میں سے جو زیادہ ہو وہ لیا جاتا ہے۔ پارسل ہلکے اور محفوظ رکھنے کے لیے پیکجنگ گائیڈ دیکھیں۔",
    ),
    guide: l("Read the packaging guide", "پیکجنگ گائیڈ پڑھیں"),
  },
  whoPays: {
    eyebrow: l("Who pays shipping", "شپنگ کون دیتا ہے"),
    title: l("You decide, per product", "ہر پروڈکٹ کے لیے آپ طے کریں"),
    options: [
      {
        title: l("Customer pays", "گاہک ادا کرے"),
        body: l(
          "The shipping rate is added at checkout. You receive your full item price, minus commission.",
          "شپنگ ریٹ چیک آؤٹ پر شامل ہوتا ہے۔ آپ کو پوری پروڈکٹ قیمت ملتی ہے، کمیشن منہا کر کے۔",
        ),
      },
      {
        title: l("You pay — free delivery", "آپ ادا کریں — مفت ڈیلیوری"),
        body: l(
          "Customers see free delivery. The shipping rate is deducted from that order's payout.",
          "گاہک کو مفت ڈیلیوری نظر آتی ہے۔ شپنگ ریٹ اس آرڈر کی ادائیگی سے منہا ہوتا ہے۔",
        ),
      },
      {
        title: l("Split it", "آدھا آدھا"),
        body: l(
          "Set how much the customer pays for delivery. The rest is deducted from that order's payout.",
          "طے کریں کہ گاہک ڈیلیوری کے لیے کتنا دے۔ باقی اس آرڈر کی ادائیگی سے منہا ہوتا ہے۔",
        ),
      },
    ],
  },
  cod: {
    eyebrow: l("Cash on delivery", "کیش آن ڈیلیوری"),
    title: l("COD everywhere we deliver", "جہاں ڈیلیوری، وہاں COD"),
    points: [
      {
        title: l("Coverage", "کوریج"),
        body: l(
          "Cash on delivery is available in every city and town our fleet and courier partners deliver to.",
          "کیش آن ڈیلیوری ہر اس شہر اور قصبے میں دستیاب ہے جہاں ہمارا فلیٹ اور کوریئر پارٹنرز ڈیلیور کرتے ہیں۔",
        ),
      },
      {
        title: l("Remittance schedule", "رقم کی منتقلی کا شیڈول"),
        body: l(
          "Cash collected by riders and couriers is remitted {codDays} days after delivery, then paid out on your payout cycle.",
          "رائیڈرز اور کوریئرز کا وصول کردہ کیش ڈیلیوری کے {codDays} دن بعد منتقل ہوتا ہے، پھر آپ کے ادائیگی سائیکل پر ادا کیا جاتا ہے۔",
        ),
      },
      {
        title: l("COD fee", "COD فیس"),
        body: l("COD handling fee per order: {codFee}.", "فی آرڈر COD ہینڈلنگ فیس: {codFee}۔"),
      },
    ],
  },
  rto: {
    eyebrow: l("RTO — return to origin", "RTO — واپسی"),
    title: l("What happens when a parcel comes back", "جب پارسل واپس آئے تو کیا ہوتا ہے"),
    lead: l(
      "Most Pakistani sellers learn about RTO charges after their first bad month. You're reading about them before your first order.",
      "زیادہ تر پاکستانی سیلرز کو RTO چارجز کا پتہ پہلے برے مہینے کے بعد چلتا ہے۔ آپ پہلے آرڈر سے پہلے ہی پڑھ رہے ہیں۔",
    ),
    whenTitle: l("When a parcel is returned to you", "پارسل آپ کو کب واپس آتا ہے"),
    when: [
      l("The customer refuses the parcel at the door", "گاہک دروازے پر پارسل لینے سے انکار کر دے"),
      l("The customer can't be reached after {attempts} delivery attempts", "{attempts} ڈیلیوری کوششوں کے بعد بھی گاہک سے رابطہ نہ ہو"),
      l("The address is incomplete or wrong", "پتہ نامکمل یا غلط ہو"),
    ],
    chargeTitle: l("What it costs", "اس کا خرچ"),
    chargeBody: l(
      "The RTO charge below applies to each returned parcel. The product comes back to you; it is not lost or written off.",
      "نیچے دیا گیا RTO چارج ہر واپس آنے والے پارسل پر لاگو ہوتا ہے۔ پروڈکٹ آپ کو واپس ملتی ہے؛ ضائع نہیں ہوتی۔",
    ),
    guide: l("How to reduce RTO on COD orders", "COD آرڈرز میں RTO کیسے کم کریں"),
  },
  returns: {
    eyebrow: l("Customer returns", "گاہک کی واپسی"),
    title: l("Return pickup, in four steps", "واپسی پک اپ، چار قدموں میں"),
    lead: l(
      "When a delivered item is returned — for example because it's damaged or not as described — this is how it comes back.",
      "جب ڈیلیور شدہ آئٹم واپس کیا جائے — مثلاً خراب ہو یا تفصیل کے مطابق نہ ہو — تو یوں واپس آتا ہے۔",
    ),
    steps: [
      {
        title: l("Return requested", "واپسی کی درخواست"),
        body: l("The customer requests a return within {returnDays} days of delivery, with a reason and photos.", "گاہک ڈیلیوری کے {returnDays} دن کے اندر وجہ اور تصاویر کے ساتھ واپسی کی درخواست کرتا ہے۔"),
      },
      {
        title: l("You're notified", "آپ کو اطلاع"),
        body: l("You see the request and the customer's photos before anything is collected.", "کچھ اٹھانے سے پہلے آپ درخواست اور گاہک کی تصاویر دیکھتے ہیں۔"),
      },
      {
        title: l("Pickup", "پک اپ"),
        body: l("A rider or courier collects the item from the customer.", "رائیڈر یا کوریئر گاہک سے آئٹم اٹھاتا ہے۔"),
      },
      {
        title: l("Back to you", "آپ تک واپس"),
        body: l("The item is delivered back to you. Return shipping is paid by: {returnPayer}.", "آئٹم آپ کو واپس پہنچایا جاتا ہے۔ واپسی شپنگ کی ادائیگی: {returnPayer}۔"),
      },
    ],
    disputes: l("Disagree with a return? See how disputes work.", "واپسی سے اختلاف ہے؟ دیکھیں تنازعات کیسے حل ہوتے ہیں۔"),
  },
  faqTitle: l("Delivery questions", "ڈیلیوری سے متعلق سوالات"),
  ctaTitle: l("Let us handle delivery. You handle the selling.", "ڈیلیوری ہم سنبھالیں۔ آپ فروخت سنبھالیں۔"),
};
