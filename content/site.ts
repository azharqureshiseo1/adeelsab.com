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
};
