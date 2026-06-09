# Set Apart Plumbing Website

Production-oriented Next.js website for Set Apart Plumbing, a licensed plumbing
business servicing the NSW Central Coast.

## Technology

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- React
- Heroicons
- Headless UI
- Zod for quote-form validation

## Local Setup

```bash
npm install
npm run dev
```

The dev server normally runs at `http://localhost:3000`.

## Commands

```bash
npm run dev
npm run lint
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill values as they become available.

```bash
QUOTE_RECIPIENT_EMAIL=harry@setapartplumbing.com.au
RESEND_API_KEY=
QUOTE_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=https://setapartplumbing.com.au
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_GOOGLE_ADS_ID=
NEXT_PUBLIC_GOOGLE_ADS_QUOTE_CONVERSION_LABEL=
NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION_LABEL=
```

The quote API validates submissions now, but does not pretend to send email
unless an email provider is configured.

## Updating Business Details

Business constants live in `src/data/business.ts`.

Update this file for phone, email, licence, Facebook URL, review URL and core
navigation details.

## Services

Service content is data-driven from `src/data/services.ts`.

Adding a service there automatically supports:

- `/services`
- `/services/[slug]`
- sitemap entries
- related links

Keep service claims factual. Do not add equipment, response times, warranties or
pricing unless confirmed by Harry.

## Service Areas

Service-area content is in `src/data/service-areas.ts`.

The current pages are intentionally limited to useful Central Coast areas rather
than mass-generated thin suburb pages.

## Reviews

Review placeholders live in `src/data/reviews.ts` and are hidden from the public
site while `isPlaceholder` is `true`.

Only add genuine review names, ratings and quotations when they are approved and
properly sourced.

## Images

Expected production asset locations:

- `public/images/set-apart-logo.jpg`
- `public/images/set-apart-hero-banner.png`
- `public/images/set-apart-hero-banner.webp`
- `public/images/set-apart-hero-mobile.webp`

The current site uses optimised derivatives generated from the local supplied
brand images. Replace these with final approved exports before launch if Harry
provides cleaner source files. Avoid visible compression artefacts around the logo.

## Analytics

Analytics placeholders are present in environment variables and `src/lib/analytics.ts`.
Do not install or enable tracking with placeholder IDs.

## Deployment

The project is Vercel-ready but platform-neutral. Before launch:

- Configure production domain
- Set `NEXT_PUBLIC_SITE_URL`
- Configure quote-form email delivery
- Add genuine logo and hero imagery
- Add Search Console verification
- Submit `sitemap.xml`
- Test phone links on real devices
- Run `npm run lint` and `npm run build`

## Pre-Launch Checklist

- Confirm all business claims with Harry
- Confirm emergency availability wording
- Add genuine Google review URL and approved reviews
- Add genuine photo of Harry or job-site imagery
- Confirm hours, accepted payments and warranty wording
- Confirm specialist drain equipment wording
- Review privacy wording before launch
- Run mobile checks at 320, 375, 390, 430, 768, 1024, 1280 and 1440 px
