# Deploying AdeelSab to Hostinger

AdeelSab runs as a **server-side Next.js app** on **Hostinger Business Web Hosting**, deployed from GitHub. Every push to `main` builds and deploys automatically.

- **Node.js:** 22.x (`.nvmrc` and `package.json` → `engines`)
- **Rendering:** every marketing page is prerendered at build time. The only dynamic route is `POST /api/waitlist`.
- **Persistence:** waitlist leads go to **Supabase** (Postgres). Nothing is written to the server's disk, because Hostinger overwrites deployment folders on every build.

---

## 1. One-time setup

### 1.1 Before you start

- [ ] The code is pushed to a GitHub repository (e.g. `adeelsab-web`) on the `main` branch
- [ ] You have the real logo files in `public/brand/`, and you've run `npm run brand:assets` (see [README](README.md#brand-assets))
- [ ] You have a Supabase account, or will create one through the wizard in step 1.7
- [ ] You have a Hostinger email mailbox for sending lead notifications (e.g. `noreply@adeelsab.com`)

### 1.2 Remove any existing site on the domain (only if one exists)

If `adeelsab.com` is already added to the hosting plan as a regular website, you must remove it first. Node.js sites have to be added as a new website.

> ⚠️ **This is irreversible.** Download a full backup (files and databases) from hPanel before removing anything.

### 1.3 Create the Node.js app

1. hPanel → **Websites** → **Add Website** → **Deploy Web App**
2. Choose **Import Git Repository**
3. Click **Authorize** to install the Hostinger GitHub app, and give it access to the repository
4. Select `adeelsab-web` and the `main` branch

> One hosting plan connects to **one GitHub account** at a time, and all Node.js sites on the plan share it. The Business plan allows up to **5** Node.js apps.

### 1.4 Build settings

Next.js is detected automatically as a backend framework. Confirm these values:

| Setting | Value |
|---|---|
| Node version | **22.x** |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `.next` |
| Start command | `npm run start` |

`next start` reads the `PORT` variable that Hostinger provides, so no port is hardcoded.

### 1.5 Environment variables

hPanel → your Node.js app → **Environment Variables**. Add every key from [`.env.example`](.env.example):

| Key | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://adeelsab.com` |
| `SUPABASE_URL` | Yes | Injected by the Database Connect Wizard (step 1.7) |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Injected by the wizard. **Server-only, never share.** |
| `SMTP_HOST` | Yes | `smtp.hostinger.com` |
| `SMTP_PORT` | Yes | `465` |
| `SMTP_USER` | Yes | Full mailbox address, e.g. `noreply@adeelsab.com` |
| `SMTP_PASS` | Yes | Mailbox password |
| `LEAD_NOTIFY_TO` | Yes | Where new-lead emails are sent |
| `NEXT_PUBLIC_GA_ID` | No | `G-XXXXXXXXXX`. Empty disables analytics. |
| `NEXT_PUBLIC_WHATSAPP` | Yes | Digits only, e.g. `923001234567` |
| `IP_HASH_SALT` | No | Any long random string |

> Environment variable changes apply on the **next deployment**. Add them before the first build, or redeploy afterwards.
>
> `NEXT_PUBLIC_*` values are baked into the build. Changing one always needs a redeploy, not just a restart.

**What happens if one is missing:** on startup the server logs a clear `STARTUP CONFIGURATION ERROR` naming every missing key. Marketing pages stay online. Missing Supabase keys make waitlist submissions fail, and visitors see the WhatsApp fallback. Missing SMTP keys only skip the notification email; the lead is still stored.

### 1.6 Deploy

Click **Deploy**. The first build takes a few minutes. Follow it on the **Deployments** page.

### 1.7 Database (Supabase)

1. On the Node.js app dashboard, open the **Database Connect Wizard**
2. Select **Supabase**, authorise, and pick or create a project
3. The wizard injects the required environment variables and rebuilds the app
4. In the Supabase dashboard → **SQL Editor** → **New query**, paste and run [`supabase/schema.sql`](supabase/schema.sql)

   This creates the `waitlist_leads` table and indexes, and enables Row Level Security with no policies. Only the server's service role key can read or write leads.

5. **Check the variable names.** If the wizard used different names than `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, add these two keys yourself with the same values, then redeploy.

### 1.8 Domain and SSL

1. Connect `adeelsab.com` (and `www`, if you use it) to the Node.js app
2. Enable the free SSL certificate
3. Visit `https://adeelsab.com` and confirm the padlock

### 1.9 Post-deploy checklist

- [ ] Home page loads over HTTPS
- [ ] `https://adeelsab.com/sitemap.xml` and `/robots.txt` load
- [ ] Switch to Urdu: text turns right-to-left in Nastaliq, and the choice survives a reload
- [ ] Submit the waitlist form with a real number → success message
- [ ] A new row appears in Supabase → Table Editor → `waitlist_leads`
- [ ] The notification email arrives at `LEAD_NOTIFY_TO`
- [ ] `GET https://adeelsab.com/api/waitlist` returns **405**
- [ ] The WhatsApp button opens a chat with the right number
- [ ] If GA is set: GA4 → Realtime shows a `waitlist_submit` event
- [ ] Share a page link on WhatsApp → the preview shows the OG image

---

## 2. Day-to-day

- **Deploying:** push to `main`. Hostinger builds and deploys automatically.
- **Deployments page:** status, timestamp and full build logs for every deployment. Check here first when something fails.
- **Restart:** the dashboard's **Restart** button restarts the server process without a rebuild. Use it after a crash or a stuck process.
- **Resource graphs:** CPU, RAM and I/O against plan limits. If a metric approaches its limit, **investigate before upgrading**. On this site it almost always means a page has accidentally become dynamically rendered (see [§4](#4-troubleshooting)).
- **Leads:** Supabase → Table Editor → `waitlist_leads`, or export to CSV from there.

---

## 3. Hosting facts to know

- Build files live at `/home/{username}/domains/{domain}/hbuilds/current/nodejs`. `current` is a symlink to the newest successful build.
- The **last two successful builds** are retained. To roll back, redeploy an earlier commit, e.g. `git revert` the bad commit and push.
- **A failed deployment leaves the existing live version in place.**
- `.htaccess` in `public_html` is generated automatically to route traffic to the `nodejs` directory. **A 403 after redeploying usually means this file is wrong. Redeploying regenerates it.**
- **Files under `hbuilds/` and `public_html` are overwritten on every deployment.** Manual edits via File Manager, FTP or SSH do not persist. This is why leads are stored in Supabase and never on disk.
- npm commands run automatically during deployment and **cannot be run over SSH**.
- **Vulnerability monitoring** scans dependencies after each deploy. Auto-fix opens a **pull request** on the repository. Review it and merge it yourself; nothing is pushed to branches directly.

---

## 4. Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Build fails | TypeScript or ESLint error | Read the build log on the Deployments page. Run `npm run lint && npm run typecheck && npm run build` locally. |
| 403 after deploy | Stale `.htaccess` | Redeploy |
| Waitlist shows "We couldn't save your details" | Supabase env vars missing or wrong, or `schema.sql` not run | Check the deployment logs for `[env] Missing` or `Supabase insert failed`. Fix, then redeploy. |
| Leads stored but no email | SMTP credentials wrong | Logs show `[waitlist] notification email failed`. Check `SMTP_USER`/`SMTP_PASS` and the mailbox. |
| A lead was lost during an outage | Server error during insert | Search the deployment logs for `UNEXPECTED ERROR — lead not stored`. The full payload is logged there. |
| CPU or RAM near the limit | A page became dynamic | Run `npm run build` locally. Every page must show `○` or `●`; only `/api/waitlist` may show `ƒ`. Remove any `cookies()`, `headers()` or `no-store` fetch from page components. |
| WhatsApp button opens the wrong number | `NEXT_PUBLIC_WHATSAPP` | Update the value, then **redeploy** (a restart isn't enough) |
| Urdu shows in a plain font | Google Fonts blocked during build | Rebuild. Fonts are downloaded at build time and self-hosted from `/_next/static/media`. |

---

## 5. CI

`.github/workflows/ci.yml` runs lint, typecheck and build on every pull request. It **does not deploy**, because Hostinger builds from the repository itself. Don't add a deploy workflow.
