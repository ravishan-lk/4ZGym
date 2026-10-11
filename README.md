# 4Z Gym — Premium Bilingual Website (Phase 1)

**4Z Gym** — *Strength for Body. Peace for Mind.*  
Founder/Coach: Asanka Rajitha  
Branches: Eheliyagoda + Nawagamuwa  
Contact: 4zgymsl@gmail.com  

## Included in this deliverable

- Black/charcoal/red premium responsive design, using the real supplied 4Z Gym logo.
- **24 prerendered pages**: 12 routes × English/Sinhala (home, story, Asanka profile, locations, two branch pages, programs, memberships, gallery, contact, privacy, terms).
- Premium homepage and founder-led gym brand experience.
- Tentative LKR 5,000 / 24,000 / 45,000 membership prices, with branch choice for inquiry context.
- Five suggested programs and **five empty coach profile slots**. Do not invent staff identities.
- Two branch addresses and stated daily 6 AM–10 PM opening hours.
- Contact/visit forms with required-field validation, anti-spam honeypot, server-side checks and browser feedback.
- Vercel `/api/inquiry` function storing leads in Supabase **before** attempting an email notification.
- Notifications to `4zgymsl@gmail.com` via either (a) optional Gmail Apps Script or (b) verified-domain Resend.
- Optional **separately deployable** Sanity Studio for editing content and photos, with build-time synchronization.
- Local SEO metadata, JSON-LD, alt language links, sitemap, robots policy, accessibility basics.
- No Next.js required: this is a **custom lightweight, dependency-free statically generated website + Vercel serverless function**. It deploys cleanly to Vercel while leaving Phase 2 CRM independent.

**Important:** This is an implementation and design preview, **not a deployed live website**. Forms only work when your Vercel environment variables and Supabase table are configured. The site ships with robots disallowed and a visible approval notice until `SITE_APPROVED=1`.

## 1. Local preview

Install Node.js 20 or later. Then:

```bash
npm run dev
```

Visit `http://localhost:3000/en/` and `http://localhost:3000/si/`.

The local preview server cannot execute Vercel serverless forms. A form submitted to the local preview will report that live setup is required, rather than claiming a submission was received.

Build static pages for deploy:

```bash
npm run build
```

Output: `dist/`.

### Site routes

| English | Sinhala |
|---|---|
| `/en/` | `/si/` |
| `/en/about/` | `/si/about/` |
| `/en/asanka-rajitha/` | `/si/asanka-rajitha/` |
| `/en/locations/` | `/si/locations/` |
| `/en/locations/eheliyagoda/` | `/si/locations/eheliyagoda/` |
| `/en/locations/nawagamuwa/` | `/si/locations/nawagamuwa/` |
| `/en/programs/` | `/si/programs/` |
| `/en/memberships/` | `/si/memberships/` |
| `/en/gallery/` | `/si/gallery/` |
| `/en/contact/` | `/si/contact/` |
| `/en/privacy/` | `/si/privacy/` |
| `/en/terms/` | `/si/terms/` |

## 2. Deploy on Vercel

1. Create a private GitHub repository and upload the project contents (`dist/` may be omitted; Vercel will build it).
2. In Vercel select **Add New → Project** and import the repo.
3. Framework Preset: **Other**.
4. Root Directory: repository root.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Install Command: leave default (`npm install` works; this main package has no dependencies).
8. Add environment variables from `.env.example` as needed.
9. Deploy. Vercel automatically gives you a `*.vercel.app` preview URL.
10. Later connect your verified custom domain in Vercel Project Settings → Domains, then set `SITE_URL=https://YOUR-DOMAIN` and redeploy.

**Hosting plan:** Verify Vercel's current commercial-use terms and appropriate plan; do not assume the free Hobby tier is appropriate for a commercial gym.

## 3. Enable working inquiry and visit forms (required for production)

### A. Create a Supabase project

1. Create a Supabase project.
2. In Supabase SQL Editor run `content/inquiries.sql`.
3. On Vercel configure:

```bash
SUPABASE_URL=https://YOURPROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_secret_service_role_key
```

The service-role key is used **server side only** and must never be prefixed with `NEXT_PUBLIC_` or put in `public/`. Row-level security is enabled. No public insert/select policies are created.

The endpoint stores data before email delivery. Failed emails remain saved with `notification_status='failed'` for manual review/retry. There is **no staff CRM dashboard** in Phase 1.

### B. Notifications to 4zgymsl@gmail.com — choose ONE option

**Option 1: Gmail Apps Script (useful before buying a custom domain)**

1. Sign into Google Apps Script as the intended business Google account.
2. Create a new script and paste `integrations/google-apps-script/Code.gs`.
3. Add a random long `GYM_WEBHOOK_SECRET` via Project Settings → Script Properties.
4. Deploy as Web App, execute as **Me**, accessible to **Anyone** so the Vercel backend can call it; it will reject requests without the secret. Protect and rotate the secret if compromised.
5. Add to Vercel (Production scope):

```bash
GOOGLE_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
GOOGLE_SCRIPT_SECRET=YOUR_STRONG_RANDOM_SECRET
```

6. Send a test inquiry and verify both the Supabase row and the Gmail inbox. Apps Script/Gmail quotas and spam handling apply.

**Option 2: Resend (recommended after verifying a sender domain)**

```bash
RESEND_API_KEY=...
RESEND_FROM=4Z Gym <notifications@your-verified-domain.lk>
```

The receiving address remains **4zgymsl@gmail.com**. Do not impersonate an unverified Gmail sending address. If both are configured, Apps Script takes precedence.

**Spam safeguards:** A hidden honeypot, request field limits, same-origin enforcement when `ALLOWED_ORIGINS` is set and server-side validation are provided. Before public launch, add production-grade rate limiting/bot verification (e.g. managed WAF/Turnstile) and operational retry monitoring, especially for high-traffic campaigns.

### C. Allowed origin

```bash
ALLOWED_ORIGINS=https://YOURPROJECT.vercel.app,https://your-domain.lk
```

Set to the production origin(s). Include any needed preview origin explicitly for preview-form testing. All production requests must use HTTPS.

## 4. CMS — optional Sanity Studio integration

The initial code uses built-in approved/draft sample data in `src/content.mjs`, because no Sanity account/project has been connected yet.

The optional Sanity Studio scaffold is distributed **separately** from this Vercel website package, so it cannot be mistaken for the public website root. It supports editing:
- Founder intro (English / Sinhala).
- Membership prices.
- Branch addresses, phones and map lookup query.
- Hero, founder, branch and gallery images.

Connect it as follows:

1. Create a Sanity project and dataset (e.g. `production`).
2. Download and extract the separate `4Z_Gym_Sanity_Studio_Optional.zip`, then in the Studio directory run `npm install`.
3. Copy the Studio `.env.example` to `.env` and set `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`.
4. Run `npm run dev` from the `cms/` directory; create/publish **one** `4Z Gym Website Settings` document.
5. In the root website's Vercel environment configure `SANITY_PROJECT_ID` and `SANITY_DATASET` (and `SANITY_READ_TOKEN` only if reading a private dataset).
6. Redeploy the public website; it fetches published content at build time and falls back to preview defaults for missing fields.
7. For automatic updates, configure Sanity's publishing webhook to trigger a Vercel Deploy Hook (optional).

The Sanity Studio is a **separate application**; no CMS account is pre-connected, and Studio hosting/deploy is not automatically provisioned by this repository. All content should be verified before publication. Store real portraits, credentials evidence and member photo permissions privately; publish only approved content.

### Direct content editing

You can also edit text, suggested programs and dates in `src/content.mjs` and run `npm run build`. This is enough for developer-led content maintenance before connecting the CMS.

## 5. Publish safely

**Before making the website public:**

- Replace logo-derived placeholder artwork with **real 4Z Gym and Asanka Rajitha photography** through the CMS.
- Confirm Asanka's NASM / ISSA / REPs / NVQ certificates and Dubai/competition claims.
- Confirm the stated pricing and whether each plan is valid at each branch. Current values are provisional.
- Confirm the proposed five programs, **five coaching profiles** (currently empty) and each branch's amenities (currently marked “to confirm”).
- Confirm the Nawagamuwa Plus Code and map pin, both addresses, opening hours and phone details.
- Approve the English/Sinhala translations, legal notices, member-photo consent and privacy policy.
- Verify forms store inquiries and that Google Apps Script or Resend sends them to `4zgymsl@gmail.com`.
- Add production-grade anti-spam/rate limiting and monitor email notification failures.
- Set your `SITE_URL` to the deployed domain, then set `SITE_APPROVED=1` **only when genuinely approved**, and redeploy. This removes the preview notice and allows search-engine crawling.

## 6. Phase 2 (not included)

Lead CRM, member login, payment gateway, recurring memberships, attendance tracking, trainer appointment scheduling, staff dashboard and automation are intentionally **out of scope** here. The website already captures branch IDs, membership plan IDs and lead interest so they can be integrated later.

## Important development notes

- `SITE_URL` defaults to the actual Vercel deployment URL when Vercel provides `VERCEL_URL`, rather than a made-up domain.
- Secrets must only be set on the server side in Vercel. Do not commit `.env` files.
- The contact form is a *request*, not a confirmed booking.
- Images generated from the supplied logo are not photographs of the gym/trainer. They are design placeholders.
- Any changes to staff numbers, facilities, pricing or certifications should be approved by the client before removing the preview banner.
