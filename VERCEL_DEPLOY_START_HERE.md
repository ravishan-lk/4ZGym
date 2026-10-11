# 4Z Gym — Vercel deployment (fixed package)

This ZIP includes **only the main public website project**. Sanity Studio is separate and not required for launch.

## GitHub upload

Extract the ZIP, open `4Z_Gym_Vercel_Deploy_Clean`, and upload all **contents** to your repo root.
Your GitHub repository home must show `package.json`, `vercel.json`, `public/`, `src/`, `scripts/`, and `api/`.

## Vercel Project Settings → Build and Deployment

- Framework Preset: **Other**
- Root Directory: **./** (repository root). If you uploaded an extra parent folder, select that instead. **Never set Root Directory to `cms`**.
- Build Command: **npm run build**
- Output Directory: **dist**
- Install Command: **npm install** (default is also fine)

In Build Logs the website build must report something similar to:

    > 4z-gym-premium-website@1.0.0 build
    > node scripts/build.mjs
    Built 24 bilingual pages + assets.

If you instead see `sanity build`, Vercel is building a different root/package.

## Forms / approval

The site deploys without external credentials, but the contact/visit forms will **not** save/send submissions until Supabase and Gmail Apps Script or Resend are configured. See `README.md`. Keep `SITE_APPROVED` unset until verified details are approved; your deployed site has a preview notice and disallows indexing until approved.
