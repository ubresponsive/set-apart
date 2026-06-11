# Codex and ChatGPT Project Guide

This document is the working context for future AI-assisted changes to the Set Apart Plumbing website.

## Repository

- Local path: `/Users/maccas/Projects/set-apart`
- GitHub: `https://github.com/ubresponsive/set-apart.git`
- Main branch: `main`
- Production target: Vercel

Always inspect the real repository path before making changes:

```bash
pwd
git status -sb
git remote -v
sed -n '1,220p' package.json
rg --files
```

Do not assume another Codex workspace folder is the app repository.

## Current Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS v4
- Heroicons
- Headless UI
- Zod
- Resend HTTP API for quote-form email delivery

Useful scripts:

```bash
npm run dev
npm run lint
npm run build
npm run start
```

After code changes, run `npm run lint` and `npm run build`.

## Brand and Business Facts

- Business name: Set Apart Plumbing
- Owner: Harry
- Service area: Central Coast, NSW
- Phone: `0422 131 659`
- Email: `harry@setapartplumbing.com.au`
- NSW contractor licence: `250695C`
- Slogan: `Set Apart for His Purpose.`
- Values: `Faith. Integrity. Excellence.`

Primary brand tone: professional, trustworthy, modern, approachable, practical, and quality-focused.

Keep business claims factual. Do not invent response times, warranties, pricing, equipment, qualifications, operating hours, or review details without confirmation.

## Important Routes

- `/`
- `/about`
- `/recent-work`
- `/services`
- `/services/[slug]`
- `/service-areas`
- `/service-areas/[slug]`
- `/contact`
- `/privacy`

Services are data-driven from `src/data/services.ts`.
Service areas are data-driven from `src/data/service-areas.ts`.
Business constants and navigation live in `src/data/business.ts`.

## Visual System

The site uses a dark navy header and hero treatment with blue and gold calls to action.

Core color tokens are defined in `src/app/globals.css`:

- Navy: `#020914`, `#061525`, `#082038`, `#0b2946`
- Blue: `#0068ae`, `#0089dc`, `#18a8f5`, `#4bc1ff`, `#bceaff`
- Gold: `#9b6313`, `#bd7c1e`, `#dda23c`, `#efc56f`
- Silver: `#f7f9fb`, `#eef2f5`, `#dfe5ea`, `#c4ccd4`, `#7f8c99`

Use semantic HTML text for headings and copy. Do not bake page text into images.

## Current Banner and Image Implementation

The home page hero is implemented in `src/components/sections/Hero.tsx`.

Current home hero slideshow assets:

- `public/images/new-bannerimage.png`
- `public/images/additionalbannerimage.png`

Subpage banners are handled by `src/components/ui/SubpageHero.tsx` using paired desktop and mobile WebP assets:

- Desktop: `public/images/banners/desktop/[slug]-banner.webp`
- Mobile: `public/images/banners/mobile/[slug]-banner-mobile.webp`

Some service-area pages fall back to the shared `service-areas` banner in `SubpageHero`.

The About and Recent Work pages use `src/components/ui/BrandedImageBanner.tsx` with custom clean exports:

- `public/images/banners/custom/about-banner-clean.webp`
- `public/images/banners/custom/recent-work-banner-clean.webp`

`design-reference.png` and any design reference images are references only. They must not be rendered as the website.

## Reviews

Review data is in `src/data/reviews.ts`.

The current review entries are draft/fake content approved for temporary use, but public UI must not expose internal labels such as `Draft review`, `placeholder`, or `Proposed copy for Harry to approve`.

Only replace them with genuine review names, ratings, quotations, and Google source details after Harry approves the content.

## Quote Form

The contact form posts to `/api/quote`.

The API route:

- validates with Zod via `src/lib/quote-schema.ts`
- includes a honeypot field
- rate-limits repeated submissions by IP in memory
- sends email with the Resend HTTP API
- supports `QUOTE_RECIPIENT_EMAIL` or comma/semicolon-separated `QUOTE_RECIPIENT_EMAILS`
- defaults recipient to `harry@setapartplumbing.com.au`

Required deployment environment variables:

```bash
RESEND_API_KEY=
QUOTE_RECIPIENT_EMAIL=
QUOTE_RECIPIENT_EMAILS=
QUOTE_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

Never commit secrets or API keys.

## UX Requirements to Preserve

- Header navigation switches to desktop at `xl`.
- Mobile hamburger stays visible until the desktop nav appears.
- Mobile action bar provides call and quote actions.
- Contact form inputs must remain legible with explicit navy text on white backgrounds.
- Select fields should keep explicit Heroicons chevrons.
- Banners must support mobile and desktop crops.
- Public pages should not include staging, draft, or approval-process wording.

## Pre-Launch Checks

- Confirm all business claims with Harry.
- Confirm emergency availability wording.
- Add genuine Google review URL and approved reviews.
- Confirm final banner and job imagery.
- Confirm privacy wording.
- Configure Resend env vars in Vercel.
- Configure Search Console verification and analytics only with real IDs.
- Test phone links on real devices.
- Run `npm run lint` and `npm run build`.
