# Website Banner Image Brief

This brief documents the banner image direction already implemented for the Set Apart Plumbing website and should guide future image generation, image sourcing, cropping, and replacement exports.

## Project Overview

**Company Name:** Set Apart Plumbing

**Industry:** Licensed plumbing, drainage, gas fitting, hot water, maintenance, and emergency plumbing services.

**Website URL:** `https://setapartplumbing.com.au`

**Target Audience:** Homeowners, landlords, strata contacts, small businesses, and commercial clients across the NSW Central Coast who need reliable plumbing support from a licensed local operator.

**Primary Goal of Website:**

- Generate quote and phone enquiries.
- Build trust in Harry and Set Apart Plumbing.
- Showcase quality workmanship and real service capability.
- Help visitors quickly find service and service-area information.

## Brand Identity

**Brand Personality:**

- Professional
- Trustworthy
- Modern
- Premium but practical
- Friendly
- Approachable
- Local
- Technical
- Faith and values-led

**Additional Notes:**

The site should feel like a high-quality local trade business: clean, capable, established, and easy to contact. Avoid anything that feels like a generic stock trade website.

## Emotional Response

When visitors see the banner images, they should think:

- These people do careful, high-quality plumbing work.
- This company is trustworthy and local to the Central Coast.
- Harry is approachable, practical, and professional.
- I would feel comfortable calling or requesting a quote.

## Current Website Implementation

The website already uses real banner assets from `public/images`.

Home hero slideshow:

- `public/images/new-bannerimage.png`
- `public/images/additionalbannerimage.png`

Reusable subpage banner component:

- `src/components/ui/SubpageHero.tsx`

Subpage banner asset pattern:

- Desktop: `public/images/banners/desktop/[slug]-banner.webp`
- Mobile: `public/images/banners/mobile/[slug]-banner-mobile.webp`

Custom branded banners:

- `public/images/banners/custom/about-banner-clean.webp`
- `public/images/banners/custom/recent-work-banner-clean.webp`

Do not render design reference files directly on the public website.

## Page Details and Banner Direction

### Home

**Purpose:** Build immediate trust, communicate Central Coast plumbing services, and drive call or quote actions.

**Current Subject Direction:** A slideshow mixing drainage/general plumbing context and bathroom plumbing/fit-off context.

**Overlay Position:** Left.

**Negative Space:** 40% to 50% on the left or through a darkened area that supports text.

**Notes:** The home hero uses dark navy gradient overlays. Images must remain readable behind white, gold, and silver hero text.

### About

**Purpose:** Introduce Harry and reinforce trust, workmanship, integrity, and local ownership.

**Current Asset:** `public/images/banners/custom/about-banner-clean.webp`

**Subject Direction:** Clean bathroom or plumbing work scene with professional finish. A genuine photo of Harry can be considered if approved and high quality.

**Overlay Position:** Left.

**Negative Space:** 40%.

### Services

**Purpose:** Present the breadth of plumbing services and encourage visitors to choose the right service page.

**Current Asset Pattern:** `services-banner.webp` and `services-banner-mobile.webp`.

**Subject Direction:** Professional trade context, bathroom/kitchen plumbing, neat pipework, tools, van, or service scene. Must feel broad enough to represent all services.

**Overlay Position:** Left.

**Negative Space:** 40%.

### Individual Service Pages

**Purpose:** Match each service page with a specific, useful visual cue.

**Current Services Include:**

- Emergency plumbing
- Blocked drains
- Hot water systems
- Leak detection
- Gas fitting
- Tap and toilet repairs
- Bathroom and kitchen plumbing
- Stormwater drainage
- Plumbing maintenance
- Residential and commercial plumbing

**Subject Direction:** Use service-specific imagery with clear focal points. For example, blocked drain pages should show drainage or clearing context, hot water pages should show systems or servicing, and bathroom/kitchen pages should show completed fixtures or fit-offs.

### Recent Work

**Purpose:** Showcase craftsmanship and the range of completed work.

**Current Asset:** `public/images/banners/custom/recent-work-banner-clean.webp`

**Subject Direction:** Collage or composed scene of bathroom, hot water, drain, kitchen, and service work. Keep it clean and professional, not cluttered.

### Contact

**Purpose:** Make visitors feel confident calling or submitting the quote form.

**Current Asset Pattern:** `contact-banner.webp` and `contact-banner-mobile.webp`.

**Subject Direction:** Friendly service context, clean tools, van, phone/contact moment, or neat completed plumbing work. Avoid people smiling directly at camera unless it is a genuine brand photo.

### Service Areas

**Purpose:** Support local Central Coast relevance.

**Current Asset Pattern:** `service-areas-banner.webp` and `service-areas-banner-mobile.webp`.

**Subject Direction:** Local service context, vehicle/trade work in a residential or light commercial setting, or subtle Central Coast location cues. Avoid generic skyline or map-only imagery.

## Image Requirements

**Desktop Hero:** `1920 x 800` preferred.

**Alternative Desktop Hero:** `1920 x 700`.

**Subpage Desktop Banner:** `1920 x 500`.

**Mobile Banner:** use a dedicated portrait or narrower crop where the subject remains visible and text remains readable.

**Format:** WebP for website-ready exports. PNG is acceptable for source/intermediate assets where quality or transparency is needed.

**No Embedded Text:** Page headings, CTAs, slogans, and service labels must remain real HTML text.

**No Logos in Banner Images:** Logos belong in the site header, metadata images, or deliberate brand assets, not inside hero photography.

## Composition

**Text Overlay Position:** Left by default.

**Required Negative Space:** 40% preferred, 30% minimum.

**Desktop Notes:**

- Focal detail should sit centre-right or right where possible.
- The left side must tolerate a dark navy gradient overlay.
- Avoid important subject matter at the extreme edges.

**Mobile Notes:**

- Provide dedicated mobile crops when using `SubpageHero`.
- Keep the main subject centred or slightly lower-centred.
- Avoid thin pipes, hands, faces, or fixtures being cropped awkwardly.

## Photography Style

Use:

- Professional DSLR photography
- Architectural or commercial trade photography
- Natural lighting where possible
- Clean bright interior lighting for bathroom/kitchen scenes
- Editorial magazine quality
- Realistic materials, reflections, fixtures, tools, and pipework

**Lens Preference:**

- 35mm architectural photography as the default.
- 24mm may be used for tight rooms if geometry stays natural.
- 50mm may be used for detail or human-scale service shots.

Avoid excessive wide-angle distortion.

## Lighting

Preferred lighting:

- Natural daylight
- Bright clean interior lighting
- Soft shadows
- Clean neutral whites
- Controlled highlights on chrome, tapware, tiles, and water surfaces

Avoid:

- Over-saturated HDR
- Heavy orange/brown casts
- Green fluorescent casts
- Overly dark stock-photo lighting
- Unrealistic reflections

## Website Design Compatibility

Every banner image must:

- Work with responsive web layouts.
- Support desktop and mobile cropping.
- Include a clear focal point.
- Include negative space for text overlays.
- Remain readable under navy gradient overlays.
- Export cleanly as WebP.
- Look credible beside the dark navy, blue, gold, white, and silver site palette.

## Colour Palette

**Primary Colours:**

- Navy 950: `#020914`
- Navy 900: `#061525`
- Navy 850: `#082038`
- Navy 800: `#0b2946`

**Secondary Colours:**

- Blue 700: `#0068ae`
- Blue 600: `#0089dc`
- Blue 500: `#18a8f5`
- Blue 400: `#4bc1ff`
- Blue 200: `#bceaff`

**Accent Colours:**

- Gold 700: `#9b6313`
- Gold 600: `#bd7c1e`
- Gold 500: `#dda23c`
- Gold 400: `#efc56f`

**Neutral Colours:**

- White: `#ffffff`
- Silver 50: `#f7f9fb`
- Silver 100: `#eef2f5`
- Silver 200: `#dfe5ea`
- Silver 300: `#c4ccd4`
- Silver 500: `#7f8c99`

**Avoid Colours:**

- Oversaturated orange
- Muddy brown
- Heavy beige/tan casts
- Neon green
- Purple-blue gradients unrelated to the brand
- Any colour grade that clashes with navy, blue, and gold CTAs

## Reference Material

Use current site assets and screenshots first:

- Existing public images in `public/images`
- Banner exports in `public/images/banners`
- Home hero implementation in `src/components/sections/Hero.tsx`
- Subpage banner implementation in `src/components/ui/SubpageHero.tsx`
- Brand logo: `public/images/set-apart-logo.jpg`

When comparing competitor or reference sites, look for:

- Clear service subject matter
- Professional trade credibility
- Clean lighting
- Practical negative space
- Modern layout compatibility
- Realistic completed work

## What To Avoid

Avoid:

- Stock photo look
- Smiling people looking at camera unless it is a genuine brand photo
- Obvious AI artifacts
- Distorted architecture
- Warped cabinetry
- Bent tapware or pipework
- Unrealistic reflections
- Over-saturated colours
- Excessive HDR
- Watermarks
- Logos
- Embedded text
- Cluttered compositions
- Dirty or unsafe-looking job sites unless the page specifically explains a problem being solved
- Images that imply services, equipment, guarantees, or certifications not confirmed by Harry

## Deliverables

Website-ready banner sets should include:

- Home page hero image or slideshow image
- About page banner
- Services banner
- Service-specific banners
- Service areas banner
- Recent work banner
- Contact banner
- Privacy or utility-page banner when needed

**Format:** WebP preferred.

**Resolution:** High resolution, exported at the target dimensions or larger.

**Text:** No text overlays.

**Logo:** No embedded logo.

**Quality:** Website-ready with clean compression and no visible artifacts.

## Review Checklist

Before replacing or adding a banner, confirm:

- The file name matches the route slug expected by the component.
- Desktop and mobile crops both exist where required.
- The image still works under the current navy gradient overlay.
- Key subject matter is not hidden by hero text or CTAs.
- The image has no visible AI artifacts, watermarks, embedded text, or warped trade details.
- `npm run lint` and `npm run build` still pass after any code or import changes.
