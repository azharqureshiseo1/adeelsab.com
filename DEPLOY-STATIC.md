# Static fallback deployment

> ## ⚠️ NOT USED — REFERENCE ONLY
>
> AdeelSab is deployed as a **server-side Node.js app** (see [DEPLOY.md](DEPLOY.md)). This document describes a contingency plan in case Node.js hosting ever becomes unavailable on the plan. Do not apply these changes unless that happens.

## When this applies

Only if the site must move to plain static hosting: Apache serving files from `public_html` with PHP available, and no Node.js process.

## What changes

Almost the whole site is already prerendered, so the conversion is small. Only the waitlist API needs replacing.

### 1. Enable static export

In `next.config.mjs`:

```js
const nextConfig = {
  output: "export",
  trailingSlash: true,          // /about/ → about/index.html, friendlier on Apache
  images: { unoptimized: true },
  // …keep the remaining settings
};
```

Then delete these, which static export does not support:

- `app/api/waitlist/route.ts`
- `instrumentation.ts`

`app/sitemap.ts`, `app/robots.ts` and `app/manifest.ts` already export `dynamic = "force-static"` and will be emitted as files.

### 2. Replace the API route with PHP

Create `public/api/waitlist.php`. It must reproduce the behaviour of the Node route:

- Accept `POST` only; return 405 otherwise
- Honeypot `company_website`: if filled, return `{"ok":true}` and discard
- The same validation as `lib/validate.ts`: name 2–80 chars, Pakistani number normalised to `+92XXXXXXXXXX`, city and business type from the allowed lists
- A rate limit of 5 per hour per SHA-256 IP hash. APCu or a Supabase table can store the counts. **Never write to local files**, because deploy uploads overwrite them.
- Insert into Supabase through its REST API (`POST {SUPABASE_URL}/rest/v1/waitlist_leads` with the `apikey` and `Authorization: Bearer {SERVICE_ROLE_KEY}` headers). Keep the key in a file **outside** `public_html`, never in the web root.
- Send the notification email with Hostinger SMTP, in its own try/catch
- Return `{"ok":true}` or `{"ok":false,"error":"…"}`

Point the form at it in `components/blocks/WaitlistFormClient.tsx`:

```ts
const res = await fetch("/api/waitlist.php", { … });
```

### 3. Build and upload

```bash
npm run build          # produces out/
```

Upload the **contents** of `out/` to `public_html`, along with `api/waitlist.php`.

### 4. Things you lose

- The startup environment check in `instrumentation.ts`
- Server-side logging of failed lead payloads (use PHP `error_log` instead)
- `NEXT_PUBLIC_*` values are still baked in at build time, so rebuild and re-upload after changing them
