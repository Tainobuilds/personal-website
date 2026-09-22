# CLAUDE.md

## What this is
Personal portfolio site for Yadan Taino (Made by Taino), a Creative Director & Product Designer in NYC.

## Purpose
- Pursuit AI-Native program Cycle 1 assignment — deploy to Vercel with a clean commit history.
- A real business asset (not just a class exercise) — should be presentable to clients/employers.

## Positioning
- **SUPERSEDED 2026-08-24:** title changed again, from "AI-Native
  Product Designer & Frontend Developer" (2026-08-21) to **"Front-End
  Developer & Product Designer."** Confirmed explicitly by the user as
  part of a larger site-wide brief, not an accident. History: title
  was "Creative Director & Product Designer" until 2026-07-27→2026-08-21
  reversal to "Developer" wording, then this 2026-08-24 reorder/rename.
  Don't revert to either earlier version.
- **Title (locked 2026-08-24): "Front-End Developer & Product Designer."**
- **Hero tagline (locked 2026-08-24):** "Bridging front-end engineering
  and product design. I build clean design systems and leverage AI
  tools to create frictionless workflows that solve everyday problems."
- **AI positioning guardrail (locked 2026-08-24):** AI is framed
  strictly as an assistive tool and workflow accelerator that enhances
  human judgment — never as a replacement for core design/engineering
  fundamentals, and never as the headline identity itself (contrast
  with the superseded "AI-Native" framing above, which put AI in the
  title). Apply this framing everywhere AI is mentioned (Services,
  FAQ, case studies).
- **About bio intro (locked 2026-08-24):** "I'm Yadan Taino — a
  Front-End Developer and Product Designer based in New York City. I
  bridge the gap between human-centered design and modern front-end
  execution. From building robust design systems in Figma and React
  to leveraging AI tools for workflow optimization, I focus on
  crafting intuitive digital experiences that solve real human
  problems." Replaces About paragraph 1 (and supersedes paragraph 2's
  "Creative Director and Product Designer" phrasing wherever it
  repeats the title) — the other About paragraphs (commercial-model
  background, Aligned flagship line) are unaffected and still apply.
- **Final niche wording (locked): "health & wellness, lifestyle, and tech."** Always use this exact phrase everywhere the niche is mentioned (hero, About, Selected work, meta/SEO tags). Do not revert to earlier variations like "fashion" or "wellness, lifestyle, and fashion."
- Key differentiator line: "Industries I don't just design for — I live in them."
- Selected Work intro line: "My focus is health & wellness, lifestyle, and tech — from fitness and recovery to skincare to the tools I build. Industries I don't just design for — I live in them."

### Full-stack / dev work (historical — see Positioning above for current title)
Old stance (2026-07-27 to 2026-08-21): title stayed "Creative Director &
Product Designer," and frontend/backend/AI-native work only showed up as
evidence inside case studies, never as a title change. Superseded
2026-08-21 by putting "Developer" in the title, then refined 2026-08-24
to the current "Front-End Developer & Product Designer" + AI-as-tool
guardrail above. Kept here for history; don't apply the old constraint.

Case studies should still demonstrate, concretely:
- frontend and backend implementation
- technical architecture
- AI-assisted development (framed as assistive, per the guardrail above)
- prototyping
- technical constraints and tradeoffs
- how design decisions were translated into working products

### About section copy
1. **SUPERSEDED 2026-08-24** — see "About bio intro (locked 2026-08-24)" under Positioning above; use that instead of this line: "I'm Yadan Taino — a Creative Director and Product Designer based in New York City."
2. "I design and ship digital products and brands for health & wellness, lifestyle, and tech — from first concept to live product. Founders and business owners come to me when they don't want a design file and a hand-off; they want the thing built, launched, and true to their brand."
3. "Years of working as a commercial model — campaigns, runway, life in front of the camera — sharpened something most designers never develop: a lived understanding of aesthetics, culture, and how a brand actually feels to the people inside it. These aren't industries I study. They're industries I'm in."
4. "Everything I build has one goal: products that genuinely improve how people move, feel, and show up. That's why my flagship project, Aligned, is a recovery and movement app built alongside a licensed physical therapist — clinical expertise, designed and shipped."

### Services section copy (locked 2026-08-06)
Order: Branding, Digital Products, Development, Generative AI, UI/UX Design.
"Motion" was intentionally dropped — do not re-add it.
1. **Branding** — "Strong branding sets you apart in a crowded market and turns first impressions into lasting loyalty."
2. **Digital Products** — "I design and build digital products that feel as good as they look — combining thoughtful UX with the technical execution to actually ship them."
3. **Development** — "Front-end to back-end, I build fast, reliable products that work great on every device. Performance and user experience matter just as much to me as the code underneath."
4. **Generative AI** — "AI is part of how I build, not just how I sketch ideas — I use AI-native tools for engineering, data, prototyping, and shipping to move faster without cutting corners." (Deliberately broader than "prototyping only" — Yadan uses AI across engineering, data, and shipping too.)
5. **UI/UX Design** — "Every screen is designed around how people actually think and move through a product — clear, intuitive, and built on research, not guesswork."

## Site structure
**Migrated to Next.js (App Router) + TypeScript + Tailwind CSS v4,
2026-09-02.** No longer plain HTML/CSS/JS — see "Tech stack" in
README.md. Homepage order unchanged from the pre-migration site
(updated 2026-08-06 — leads with capabilities before the personal
story, inspired by clay.global):
1. Hero (headline, subline, availability badge, scroll hint)
2. Trust strip (placeholder brand wordmarks)
3. Services ("what I offer" — tagline + accordion list)
4. Selected work — now 3 pillars instead of a flat grid:
   - **High-Craft Visual Design & Prototyping**: Kippo, Aligned
   - **AI Workflows & Interactive Systems**: Spruce — **Ticket Triage
     — MVP removed here 2026-09-17**, per explicit user decision.
     Its content file (`src/content/work/ticket-triage.ts`) is NOT
     deleted, just removed from `workIndex.ts` — it's real, verified
     work, just not on the current homepage roster. Restore it (add
     back to `workIndex.ts`) if asked, rather than rewriting it from
     scratch. Pillar 2's homepage description also had its "and
     automated triage" clause trimmed off (`src/app/page.tsx`) since
     it no longer applies with Ticket Triage gone.
   - **Retail Automation & Workflow Engineering** (renamed from
     "Data-Driven MVPs & Product Engineering" on 2026-09-15): Trends
     (label-printing workflow tool) — **replaced 311 Insights here
     2026-09-14**, per explicit user decision. 311 Insights' content
     file (`src/content/work/insights-311.ts`) is NOT deleted, just
     removed from `workIndex.ts` — it's real, verified work, just not
     on the current homepage roster. Restore it (add back to
     `workIndex.ts`) if asked, rather than rewriting it from scratch.
5. Testimonial
6. About (with a lightweight "Currently" tag strip near the top)
7. FAQ
8. Contact

Nav labels: About, Projects, Contact — desktop nav always visible;
mobile (<768px) uses a hamburger that opens a full-screen drawer
(`src/components/MobileDrawer.tsx`) — this replaced the earlier
"no mobile hamburger menu" rule during the migration.

### Case-study pages (added 2026-09-02, headers/architecture revised 2026-09-15, Trends split off its own template 2026-09-17)
`CaseStudyHeader.tsx` (extracted 2026-09-17) is the shared editorial
header — tag pills, serif title, 4-column Role/Timeline/Tech
Stack/Links metadata — used by both templates below.

**Trends is a one-off, not the shared template.** `/work/trends`
renders `TrendsCaseStudy.tsx`, not `CaseStudyBento` (branched in
`src/app/work/[slug]/page.tsx` on `work.slug === "trends"`) — a
Clay.global-high-craft treatment richer than the other 4 case studies
get. **Section order (locked 2026-09-17, 3rd pass):** header →
full-bleed hero (macOS-style `BrowserFrame` — traffic-light dots +
mock URL bar `trends.studio`, purely decorative chrome, not a real
domain — wrapping `work.gallery[0]`) → 3-stat impact banner →
**01/The Challenge** (problem text + `legacyContext` side card,
currently an honest placeholder — no real photo of the old backroom
laptop setup exists yet) → **02/The Insight** (high-contrast
`#111111` card, accent quote marks) → **03/The Solution, told as two
separate flows** (confirmed correct by the user 2026-09-17, since
Front Stock and Back Stock solve genuinely different problems — Front
Stock has a live API to pull from, Back Stock doesn't because a
brand-new shipment isn't in the menu yet): **Front Stock** first
(`work.gallery[1]` search screen + `work.gallery[2]` full auto-filled
label screen, side by side, both `BrowserFrame`d — no crop, the full
screenshot, per explicit user correction below), then **Back Stock**
(`work.secondarySolution` — narrative text, a `BrowserFrame`d camera
UI shot, the `architecture.steps` QR-first/AI-vision-fallback list,
and a small dark `LabelPreviewBox` — both images still honest
placeholders, no real Back Stock screenshots exist yet) → **04/Engineering
Features** (2-up grid, closing the page — numbered icon kickers + a
small status badge per card: "200 OK," "Fallback Enabled," "Batch
Locked," "~600ms" — styling flourishes echoing the real app's own
"Mobile Sync Ready" badge, not literal telemetry claims).

**Correction (2026-09-16→17 pass)**: the image saved as
`back-stock-label.png` was mislabeled — its fields
(Category/Brand/Size-Type/Strain/Class/Potency/Price, no Lot#/Exp/
Metrc Tag) and its "← back to search" link confirm it's actually the
**Front Stock** label editor, not Back Stock. Renamed to
`front-stock-label.png`. A tight crop of it
(`public/images/trends/label-preview.png`, made via Python Pillow) was
briefly used as a small "label preview" box, but the user asked
2026-09-17 to revert Front Stock's solution visual back to the full
screenshot instead (**"that was good you could keep it just change
the name because that technically wasn't back stock still front
stock"**) — so `label-preview.png` is unused for now (file stays on
disk; don't reuse it under a "Back Stock" caption, since it's visibly
a Front Stock label and doing so would recreate the exact mislabeling
this correction fixed).

**Real product clarification from the user, 2026-09-17**: Back Stock
isn't "QR-first, manual as a last-resort fallback" the way the
architecture steps alone might imply — it's a **user choice between
two equally valid paths**, because brand-new shipments aren't in the
live menu yet, so there's nothing for the API to autofill from. Staff
either snap a photo and let the QR/AI camera fill fields in real time,
or type it in by hand — both are first-class, not fallback-vs-ideal.
`secondarySolution.narrative` in `trends.ts` carries this framing;
`work.architecture.steps` (QR-first, AI-vision-fallback) is still
accurate as the *technical* mechanism behind the camera path
specifically, now correctly scoped to the Back Stock section only
(it used to sit next to the Front Stock screenshot, which conflated
the two flows).

**Correction, carried over from the 2nd pass**: the brief's stat
banner again asked for "100% Typing Error Reduction," which has no
basis — no error-rate measurement exists, before or after. Kept the
same substitution: **"7 / Fields Auto-Filled from Live API,"** an
exact, verifiable count read directly off the real screenshot. The
other two stats ("12m → <1m" intake speed, "Real-Time" API sync) are
the same firsthand figures already established.

**Resolved 2026-09-17, later same evening**: the "trends folder" the
user meant was `~/trends-label-studio` (their separate, real product
repo) — not this portfolio's `public/images/trends/`. Found 5 real
photos there (`IMG_1712.HEIC`, `IMG_2105.JPG`, `IMG_2111.HEIC`,
`IMG_2311.jpg`, `IMG_2312.HEIC`), converted the HEICs via macOS `sips`
(`sips -s format jpeg -Z 1600 in.HEIC --out out.jpg`), and copied
(not moved — originals untouched in `trends-label-studio`) into
`public/images/trends/` with descriptive names:
- `legacy-laptop.jpg` (IMG_1712) — the real "LABEL LAPTOP" running
  ZebraDesigner Essentials next to a physical Zebra GX420d printer,
  hand-building a label. Now `legacyContext.image`.
- `front-stock-print-setup.jpg` (IMG_2111) — the live Trends Label
  Studio web app auto-filling a Front Stock label (Lost Farm gummies)
  with the physical printer mid-print, real label visible in the
  tray. New `extraPhotos[0]`, shown under the Front Stock screenshots.
- `back-stock-camera-scan.jpg` (IMG_2311) — the real "Trends — Sticker
  Camera" screen, live-scanning a compliance sticker (green targeting
  box) with LOT/EXP already captured at the bottom. Now
  `secondarySolution.uiImage.image`.
- `product-shelf.jpg` (IMG_2105) — a real back-stock product (WYLD
  gummies) held up in front of the actual red-bin shelving, its
  compliance sticker and QR code visible. New
  `secondarySolution.productShot.image`.
- `back-stock-label-result.jpg` (IMG_2312) — the auto-filled Back
  Stock result screen (Lot #/Exp date both tagged "auto") plus its
  print preview. Now `secondarySolution.labelPreview.image`. Its
  caption deliberately says "Lot # and Exp date," not "Metrc Tag" —
  this specific screenshot's visible fields are Count/Lot #/Exp
  date/SKU, no separate Metrc field, so the caption doesn't overclaim
  beyond what's actually on screen.

New `WorkContent` fields from this pass: `secondarySolution.productShot`
and top-level `extraPhotos` (both Trends-only for now, same pattern as
`gallery`/`legacyContext`/`secondarySolution` before them).

If more case studies eventually want this richer treatment, promote
pieces of `TrendsCaseStudy.tsx` into `CaseStudyBento` rather than
one-off-ing a 3rd template — not done yet since only Trends has asked
for it so far.

Live at `/work/[slug]`, one reusable Bento Grid template
(`src/components/CaseStudyBento.tsx`) driven by typed content files in
`src/content/work/*.ts` — **used by Kippo, Aligned, Spruce, and 311
Insights (the latter off the homepage roster); Ticket Triage's
content file still exists but isn't in `workIndex.ts` either as of
2026-09-17; Trends has its own template, see above.**
Structure: editorial header, then an
asymmetrical 3-column grid — full-bleed hero media, an optional video
embed (Spruce's Loom walkthrough) or Before/After operational grid
right below the header, **The Challenge** (was "01/The
Problem"), **The Insight** (was "02/Human Insight", dark accent card),
**The Solution** (was "03/Technical Architecture or Design Process"),
**Design System** (was "04/Design System Tokens" — only rendered when
a project has its own documented design system: Aligned and Spruce do,
Kippo and Ticket Triage don't, so the card is simply omitted for
them), and an **Impact** 3-up mechanics row (was "Key Mechanics &
Impact") — the heading is overridable per project via
`mechanicsHeading` (currently unused by any of the 5 projects still on
this template, since Trends — the one that set it to "Features" — has
its own template now; the field stays on `WorkContent` for whichever
project needs it next). **`walkthrough` (added 2026-09-19, first used
by Aligned)**: an optional, generic product-story section — a dark
`#1A1814` stage (Aligned's own documented "Ink" token) with an
optional wide `overview` image, then a numbered grid of portrait phone
screens (`steps[]`: image, group, label, title, caption, optional
`principle` pill) plus an optional closing `note` tile that fills the
last grid cell. It renders between Design System and Impact so the
Solution + Design System row stays paired. Phone images are expected
at ~644×1399 with transparent rounded corners (`.webp`). **`evolution`
(added 2026-09-19, first used by Kippo)**: a second optional generic
section for process stories — rows of "the same screen at each stage"
(`rows[].stages[]`: label, image, natural `width`/`height`, optional
`note`, and `final: true` on the last stage, which renders larger with
an accent label), each row with a `story` paragraph and a "What
changed" `changes[]` bullet list, plus an optional wide `overview`
image (Kippo uses the zoomed-out Figma canvas). Tiles are a fixed
175px (early stages) / 270px (final) so rows stay consistent; each
strip scrolls sideways on narrow screens instead of overflowing the
page. Pass real `width`/`height` for every image (the layout reserves
height from them). It renders after `walkthrough` and before Impact.
`walkthrough` and `evolution` can coexist on one project (e.g. Aligned
could later add an `evolution` of its own). An optional `gallery` field (array of
`{ image?, caption }`) renders a 3-up grid of real product screenshots
right after The Challenge card — same honest-placeholder pattern as
everywhere else when `image` is omitted (also currently unused here
for the same reason — Trends' `gallery` data now feeds
`TrendsCaseStudy.tsx` instead). **2026-09-15: raw code snippets removed sitewide** — the
brief's rationale was keeping the portfolio focused on product
design/user impact/high-level engineering rather than literal code;
`ArchitectureBlock` (`src/content/work/types.ts`) is now just
`{ heading, steps: string[] }`, no more `kind: "code" | "process"`
union. Trends, Spruce, and Ticket Triage all had their code snippets
rewritten as plain-English numbered steps describing the same real
architecture decisions — nothing was fabricated, just de-coded. Every
homepage `WorkCard` is a single clickable link straight to its
case-study page (`hover:scale-[1.01]`) — no more disabled/muted cards
or mixed external-link CTAs; external links (Figma prototype, live
app) now live inside the case-study page itself via each project's
`links` field.

All 6 case-study content files (Kippo, Aligned, Spruce, Ticket Triage,
311 Insights, Trends) ship with real content sourced from "Case study
evidence" below, though only 4 are on the current homepage roster
(Kippo, Aligned, Spruce, Trends) — Ticket Triage and 311 Insights both
still exist on disk, just not in `workIndex.ts`. 311 Insights is the
one still marked lighter/in-progress since its full write-up isn't
built yet, same honest-placeholder principle used everywhere else on
this site.

### Trust strip copy (locked 2026-08-06)
Text-based placeholder wordmarks (not real logo assets — avoids
trademark/copyright issues until real client permission/assets exist):
Adidas, SoundCloud, Kiehl's, Jose Cuervo, NYFW, Swim Week, Vida Y Moss,
Trends Dispensary. Understated styling — muted color, low opacity, wraps
on narrow viewports. Swap in real logos only with actual client permission.

### "Currently" tags (locked 2026-08-06)
Small pill tags near the top of the About section, not a full section:
"Pursuit AI-Native cohort" and "Nonexclusive with FFT Models." Update
these as circumstances change — they're meant to stay current, unlike
the rest of the locked copy in this file.

### FAQ copy (locked 2026-08-06)
1. **How do you use AI in your process?**
2. **Are you open to full-time roles, contract, or both?**
3. **What does "shipping" mean for you day to day?**
4. **Are you a designer or a developer?** (reinforces the Full-stack /
   dev work stance above — both, evidence lives in case studies)

Keep answers to 2-3 sentences each — scannable, not Clay's long-form
paragraphs.

### Visual design direction (locked 2026-08-06, palette refined 2026-08-24, hero redesigned three times — twice on 2026-09-15 alone)
Reference: clay.global (UX/branding agency site) — the user explicitly wants
this look and feel, not just its "Digital Products / Development /
Generative AI" service naming.
- **Hero (CURRENT, 2026-09-15, second revision that day):**
  full-bleed personal portrait as the section background
  (`min-h-screen`, `object-cover`), dark gradient overlay
  (`from-black/80 via-black/30 to-black/10`), crisp white overlay
  typography, white "Contact" pill. This is functionally the same
  visual pattern as the very first hero (photo background + dark
  overlay + white text, superseded 2026-09-14) — the user asked for it
  back the next day. **Locked-copy conflict caught and resolved by
  asking**: this brief's requested headline ("Creative Director.
  Product Designer. Developer.") and subheadline ("I create digital
  experiences.") are word-for-word the superseded pre-2026-08-24
  positioning that CLAUDE.md explicitly says not to revert to. Asked
  the user directly rather than guessing; they confirmed **keep the
  locked title/tagline, visual-only change** — so the current hero
  still reads "Front-End Developer & Product Designer" with the
  locked tagline, just on the new full-bleed photo treatment.
  **Correction, still open**: the brief asked for
  `public/images/yadan-hero.jpg`, which still does not exist on disk
  as of this pass — using the real, existing
  `public/images/hero-portrait.jpg` (same photo used in meta tags/
  identity toggle). Swap the `src` in `Hero.tsx` once that file
  exists.
- **Hero (superseded 2026-09-15, first revision that day):** an
  asymmetrical split layout (bio/CTA left, `rounded-2xl` portrait
  right) — lasted about one day before being replaced by the
  full-bleed version above.
- **Hero (superseded 2026-09-14):** bright/light (Cream background),
  dark massive bold headline, no photo at all — "Full Clay-style
  redesign: drop the photo, light bg + dark text," per explicit user
  decision at the time. Lasted about one day too.
- **Palette (refined 2026-08-24)**: warm neutral, named tokens —
  Cream `#F5F0E8` (page background, replaces the earlier `#f2f1ed`),
  Sand `#EDE8DF` (secondary surface), Dark `#2C2A24` (headline/body
  text, replaces pure `#111111`), Muted `#7A7468` (secondary text,
  replaces `#a39d8c`), Border `#E8E3DA` (replaces `#ddd4bf`). Still
  warm-light, not stark white; still black-feeling but warmer than
  pure black.
- **Accent color (CHANGED 2026-09-15): vibrant orange `#FF5C00`.**
  Replaces the muted clay/terracotta `#b5652f` that had been locked
  since 2026-08-06 and explicitly reaffirmed on 2026-09-14. This time
  the user's brief was unambiguous and gave two options (`#FF5C00` or
  `#D97706`) — picked `#FF5C00` since `#D97706` is already Spruce's
  own case-study brand-accent color (see Case study evidence below)
  and reusing it as the site-wide accent would blur that project's own
  palette into the portfolio chrome. Single CSS variable
  (`--color-accent` in `globals.css`), so every `text-accent`/
  `border-accent`/etc. usage site-wide updated automatically — no
  further "revisit if asked" caveat; this one is settled.
- **Typography (added 2026-08-24, serif chosen 2026-09-02)**: editorial
  serif for case-study headlines/titles, clean sans-serif for body
  copy — a pairing, not the single system-sans stack used elsewhere on
  the site. Implemented as **Fraunces** (via `next/font/google`,
  registered as the `font-serif` Tailwind token in `globals.css`) for
  case-study `<h1>` titles — chosen because it's the real serif already
  used in the Aligned case study's own product design system (paired
  there with DM Sans), not an arbitrary pick. Body copy stays the
  existing system-sans stack.
- **Placeholders**: soft bordered neutral using the Sand/Border tokens
  above, not a flat solid gray block.
- **Services section**: text-only accordion (name + one-paragraph
  description), no image box per service — matches clay.global's pattern.
  Visual/case-study proof lives in the Selected work cards, not here.

## Known gaps (as of 2026-09-22)
- **Resolved (Aligned tagline names "physical therapy" explicitly,
  2026-09-22)**: the case-study header's subtitle (`aligned.ts`
  `tagline`, the sentence directly under the title on `/work/aligned`)
  used to just say "a mobile companion" — never stated the app is
  physical therapy up front. Now: "A physical therapy companion app
  that turns a doctor's prescription into a daily ritual you actually
  want to keep." Not part of the locked-copy list, so free to edit.
  The homepage card's own subtitle (`outcomeSummary`, a separate field
  — WorkCard reads that, not `tagline`) already said "a physical
  therapist's clinical expertise," so it needed no change.
- **Resolved (Trends "40% faster" brief, corrected to ~90%, 2026-09-22)**:
  the user asked to add a stat "in the realm of improved workflow
  using AI by 40%." Asked where it came from — the answer was their
  own firsthand account: staff used to spend about 8-10 minutes
  hand-typing a label, the app now does it in about a minute. The math
  on that account is actually ~87-90% faster, not 40% (a 40% cut would
  land around 5-6 minutes, not ~1) — flagged this and the user chose
  the honest math over the round "40%" figure. **Site-wide update, 3
  places, all now consistent on the 8-10 minute figure and a `~90%`
  stat**: the stat banner's first tile (`TrendsCaseStudy.tsx`, was
  "12m → <1m" / "Intake-to-Print Speed" — now "~90%" / "Faster
  Intake-to-Print (8–10m → <1m)"), Trends' own tagline (`trends.ts`,
  "12-minute" → "8-10 minute"), and the homepage Pillar 3 description
  (`src/app/page.tsx`, "12-minute" → "8-10 minute," plus "roughly 90%
  faster" added to the sentence). The old "12-minute" figure traced
  back to a still-earlier "~10-12 min" account (see the 2026-09-15
  entry below) — this isn't a contradiction, just the user restating
  their own estimate a bit differently this time; 8-10 min was what
  they said explicitly in this pass, so that's what's on the page now.
- **Resolved (Spruce mockup, redone 2026-09-22)**: the flat two-window
  overlap from the first pass (2026-09-19) was replaced with a more
  polished, cascading composition — closer in craft level to Aligned's
  and Kippo's device mockups. Same two source screenshots (no new
  images exist in `~/Spruce/` — confirmed, only the same two 2026-09-19
  files are there), same brand-token background, but now: each
  browser window is gently rotated (a few degrees, opposite
  directions) instead of sitting flat/square; the front window ("Find
  a Service," the live product) gets a soft amber glow and a stronger,
  closer shadow; the back window ("Landing") is slightly Gaussian-
  blurred and desaturated to read as a shallow depth-of-field step
  behind it — the cascading z-order itself (marketing page behind,
  live app in front) *is* the flow, marketing site leading into
  product. **Tried and reverted**: an explicit curved arrow connecting
  the two windows, plus numbered "01 Landing / 02 Find a Service"
  badges — both looked cluttered next to the tilt/glow/depth treatment
  and risked overlapping real screenshot text, so neither shipped;
  Aligned/Kippo's own mockups also carry no text overlays, so this
  keeps Spruce consistent with them. Landing screenshot is now cropped
  to end right above its dark "Ready to explore?" CTA band (the band's
  two buttons are cut off mid-button in the raw screenshot, which
  looked unfinished). Same file paths, same `bannerImage`/`cardImage`
  wiring (`public/images/spruce/mockup-hero.webp` 2400×1350,
  `mockup-card.webp` 1600×2000) — no `spruce.ts` changes needed, only
  the two image files. Script: scratchpad-only
  (`spruce/compose2.py`, superseding the first pass's `compose.py`) —
  rotation is done with `Image.rotate(angle, expand=True)`, and a
  small helper maps a point in the *pre*-rotation image to its
  on-canvas position after rotation (needed to place the glow/shadow
  precisely) — re-derive rather than trust fractions of the rotated
  image's own padded width/height, which include the rotation's
  expand-margin and don't line up with the visible card.
- **Resolved (Spruce mockup hero, 2026-09-19)**: Spruce now has a
  framed-browser mockup as its `bannerImage`
  (`public/images/spruce/mockup-hero.webp`, 2400×1350, 16:9) — the
  landing page (headline "Spruce — The Intelligent Local Services
  Marketplace") behind the "Find a Service" customer workspace, two
  macOS-style windows with soft shadows on a deep-forest-to-amber
  background built from Spruce's own tokens (Forest `#0B2B22`, Amber
  `#D97706`, Sage). **Composed entirely by us with Pillow — no
  third-party mockup tool, so no watermark/paid-plan concern.** Source:
  the two 2026-09-19 screenshots in `~/Spruce/` (current Bough logo,
  clean data — deliberately NOT the older Aug-26 screenshots in the
  zip, which show Chrome tab chrome, "QA Test Listing"-type test data
  and the old logo). The landing screenshot's right 16px is a sliver
  of another window, cropped off. The browser windows' URL bars are
  left blank (no invented domain). **Correction to remember**: a 16:9
  banner center-cropped into the homepage card's `aspect-[4/5]` shows
  only a meaningless middle strip, so `WorkContent` gained an
  optional **`cardImage`** (4:5) that `WorkCard` prefers over
  `bannerImage` — Spruce's is `public/images/spruce/mockup-card.webp`
  (1600×2000, same two windows stacked). Also fixed a latent mobile
  overflow in `CaseStudyBento`: the Spruce mechanic text
  "Browse/listings/reviews/bookings" is one unbreakable word, which
  pushed the page 18px wider than a 650px viewport; mechanic
  descriptions now use `overflow-wrap:anywhere`. Scripts live in the
  scratchpad only (`spruce/compose.py`) — re-create with Pillow
  (window chrome + rounded-corner alpha + gaussian shadow + smooth
  gaussian-glow background) if the screenshots change.
- **Resolved (Aligned mockup hero, 2026-09-19)**: the Welcome screen is
  now shown in a 3D device mockup (phone standing against deep-blue
  velvet), set as Aligned's `bannerImage` (`public/images/aligned/
  mockup-hero.webp`, 1216×2160, 9:16) and therefore also its homepage
  card image, where it sits next to Kippo's orange mockup. New generic
  `bannerFit: "portrait"` on `WorkContent` renders a 9:16 banner as a
  full-width tall hero (`h-[780px]` on desktop, `aspect-[4/5]` on
  mobile, `object-cover` centered — the phone lands inside the crop
  because it sits at the image's vertical center). Made with the same
  mckp.live editor as Kippo's; the still carried the free-tier
  **"Made with mckp.live" badge** (large dark pill, bottom center, over
  near-black velvet), which was reconstructed from the surrounding rows
  with Pillow (interpolation + matched grain; verified with a 6×
  brightened before/after). The user was told the watermark-free
  export is a paid-plan feature and chose to proceed; **a paid export
  would supersede this.** The user's files: `Aligned/iPhone 17
  Pro.png` (the still, used) and `Aligned/iPhone 17 Pro (1).mp4`
  (1216×2160, 6s, 60fps — **not used**: for its first ~3s the badge sits
  on the phone's own screen while the camera pulls back, over the orange
  button and text, which can't be reconstructed convincingly; only the
  last ~2.5s (phone settled, badge over velvet) would be clean-able, and
  that part is nearly static, so a still serves better). The tool's
  editor screenshot the user shared also showed an "Embed" option
  (`<mockup-player mockup-id=…>` web component) — deliberately not
  used: it's a live third-party script tied to their account.
  `Aligned/mockup-ready-welcome.png` (1288×2798, fake status bar
  removed) was the upload image for the editor and is not used on the
  site.
- **Resolved (Kippo "From Sketch to Screen", 2026-09-19)**: new generic
  `evolution` section (see "Case-study pages") tells the design process
  through three screens — **Home** (paper sketch → digital wireframe →
  Figma mockup → final), **Shop** (digital wireframe → Figma mockup
  with the usability-round-1 Boys/Girls/Infants icons → final), and
  **Product detail** (paper sketch → Figma mockup → final) — plus the
  zoomed-out Figma canvas. Sources and how to re-extract them are in
  "Case study evidence → Kippo". Assets: `public/images/kippo/`
  (11 `.webp`, the 3 final phones cut out with transparent corners via
  Pillow flood-fill, the rest straight from the PDF). Caption facts
  were read off the actual images; **interpretations to double-check**:
  the Home row's "dropped 'Designers' block" (visible in the sketch,
  absent in the wireframe), and the Product-detail line calling the
  condition/size/seller row "a direct answer to the trust concern
  research surfaced" (trust *is* a documented pain point; linking it to
  this design choice is my reading, not something the deck states).
- **Resolved (Kippo hero watermark removed, 2026-09-19)**: the hero
  mockup (still + video, made with mckp.live) had a baked-in "Made with
  mckp.live" badge; removed, keeping the mockup. **Video**: 250 frames
  extracted with ffmpeg, badge reconstructed on the 198 frames where it
  is visible (t = 0.55s → 3.83s, detected per frame so the fade in/out
  is covered) using smoothed-edge interpolation + matched velvet grain
  on the sofa, re-encoded with x264 CRF 21 (~437KB, was 266KB) at the
  same path. **Still**: the badge also hid the phone's bottom corner
  (the original 4K export has the same badge, so no clean source
  exists), so the fix raises the cushion crest ~20px so the phone tucks
  behind it. The cleaned still lives at
  `public/assets/images/kippo/iphone-17-pro-photo-clean.png` — the
  **`-clean` rename is deliberate**: Next's image optimizer caches by
  URL, and the old path kept serving the watermarked version (locally
  and, on Vercel, potentially across deploys). Used by `kippo.ts`
  (`bannerImage`) and `IdentityToggle.tsx` (Designer tab); the homepage
  card uses the same `bannerImage`. Scripts were scratch-only (Pillow +
  ffmpeg, no numpy on this machine); the originals remain in git
  history. If the mockup is ever re-exported, prefer a watermark-free
  export over repeating this reconstruction.
- **Resolved (Aligned story from real prototype screens, 2026-09-19)**:
  the user's repo-root `Aligned/` folder held 7 screenshots of the
  interactive prototype. Processed with Python Pillow (no numpy on this
  machine — use `ImageChops`/`getbbox`): detected each phone's bounds
  (all 644×1399), flood-filled the dark outside to make **transparent
  rounded corners**, saved as `public/images/aligned/01…07-*.webp`
  (25–50KB each), plus one wide crop of the whole prototype wrapper
  (`prototype-stage.jpg`). Wired in through the new generic
  `walkthrough` field ("The Flow" section): 7 steps in prototype order,
  each tagged with one of the 3 verified principles ("Soft, not
  strict" / "15 minutes, no negotiation" / "Show it working" — **the
  step→principle mapping is a design interpretation, easy to adjust in
  `aligned.ts`**). The originals stay untouched and untracked in
  `Aligned/`. This also makes the old 2026-09-15 open item (3) — a
  Tailwind "Mobile Device Frame" for Aligned — unnecessary: the phones
  now come pre-shaped from the prototype's own shell, so no second CSS
  frame is needed (it would double-frame them).
- Aligned's old hero banner (`work-aligned.jpg`, the splash mockup) was
  replaced 2026-09-19 (see the next entry); the file stays because the
  About → Designer tab (`IdentityToggle.tsx`) still uses it.
- **Resolved (Ticket Triage removed, 2026-09-17)**: at the user's
  request, Ticket Triage — MVP is off the homepage roster — removed
  from `workIndex.ts` (same pattern as 311 Insights: content file
  `src/content/work/ticket-triage.ts` stays on disk untouched, restore
  it by adding it back to `workIndex.ts` if asked, rather than
  rewriting it). `/work/ticket-triage` now correctly 404s (confirmed).
  Pillar 2's homepage description (`src/app/page.tsx`) had its "and
  automated triage" clause removed since Spruce alone doesn't cover
  that claim — it only describes natural-language matching now.

- **Resolved (Trends homepage card image, superseded same night)**:
  first tried the real Trends logo (`Trends Logo pic.png`, found in
  `~/trends-label-studio` — same lesson as before, "the trends
  folder" means that repo, not `public/images/trends/`) composited
  onto a Sand-colored `aspect-[4/5]` canvas (`logo-mockup.jpg`, since
  the raw square logo would've been cropped badly by `object-cover`).
  **The user then asked for something more credibility-building**:
  swapped to a real storefront photo instead — `Trends Store Front.jpeg`
  (found directly in `~/`, not a repo this time), showing the actual
  shop signage and address ("TRENDS, 27-25 44th Dr, Long Island City")
  with a "New York Locals" badge overlay. At 399×501px it already
  near-matches the card's 4:5 aspect, so no compositing was needed —
  copied straight to `public/images/trends/storefront.jpg` and set as
  `bannerImage`. `logo-mockup.jpg` removed from the repo (fully
  superseded, no remaining reference — unlike other one-off derived
  assets like `label-preview.png` which are kept since they could
  still be reused). Only affects the homepage card —
  `TrendsCaseStudy.tsx` never reads `bannerImage`, it builds its own
  hero from `gallery[0]`, so the case-study page itself is unaffected
  by either choice.

- **Resolved (real Back Stock photos, 2026-09-17 late evening)**: all
  of Trends' remaining honest placeholders are now real photos — see
  "Case-study pages" above for the full list of 5. Trends is now
  fully photo-backed end to end: legacy method, Front Stock (search →
  auto-fill → physical print), and Back Stock (scan → auto-fill →
  physical result), no fabricated or placeholder imagery left on this
  page. **Gotcha worth remembering**: when a user says "I added
  photos to the trends folder," don't assume they mean this
  portfolio's `public/images/trends/` — confirm which folder, since
  in this case they meant a *different*, unrelated real repo
  (`~/trends-label-studio`) that happens to share the word "trends."
  Time-based `find -newermt` searches also won't catch it if the
  photos have older original timestamps (these were dated Aug 28–Sep
  13, not "just now") — search by folder/filename pattern too, not
  just recency.

- **Resolved (Trends Front Stock/Back Stock split, 2026-09-17 evening)**:
  Section 03 now tells Front Stock and Back Stock as two separate
  solutions instead of one merged section (see "Case-study pages"
  above for the full breakdown) — correctly reflecting that they solve
  different problems (one has a live API to pull from, one doesn't).
  Front Stock's solution visual reverted from a cropped label to the
  full auto-fill screenshot per explicit user request. New
  `secondarySolution` field on `WorkContent` (narrative + uiImage +
  labelPreview) added for this, Trends-only for now.
  **Not done — waiting on real assets**: the user said Back Stock
  photos were added to "the trends folder," but none were found on
  disk anywhere checked (`public/images/trends/`, repo root,
  Downloads, Desktop). Both Back Stock visuals (camera-capture screen,
  and a label preview showing Lot#/Exp/Metrc) are still honest
  placeholders. Confirm save location with the user next session
  before assuming they're missing.

- **Resolved (Trends visual hierarchy pass, 2026-09-17 pm)**: reordered
  into the requested 7-part flow (Header → Hero → Stat banner →
  01/Challenge → 02/Insight → 03/Solution → 04/Features — see
  "Case-study pages" above), added macOS-style browser-chrome framing
  for the dark screenshots, and added a dedicated label-preview
  showcase in Section 03. **Two brief inaccuracies caught and
  corrected**: (1) a screenshot from the prior pass was mislabeled
  "Back Stock" when it's actually Front Stock — renamed the file and
  fixed every caption; (2) skipped the brief's "Metrc compliance
  badge"/"batch LOT/EXP" on the label preview since those belong to
  the (different, unphotographed) Back Stock intake-label flow, not
  the Front Stock shelf tag the real screenshot shows — showing them
  would have been fabricated. Still no real photo for `legacyContext`
  (the old backroom laptop) — renders the standard honest placeholder;
  drop a real photo in and wire it into `trends.ts`'s
  `legacyContext.image` whenever available.

- **Resolved (Trends Clay-level UI polish, 2026-09-17)**: Trends now
  has its own richer case-study template (`TrendsCaseStudy.tsx`, see
  "Case-study pages" above) — full-bleed hero, 3-stat banner, two
  dark-framed feature spotlights, high-contrast Insight card,
  horizontal Solution timeline, and a polished 2-up Features grid with
  numbered icon kickers. Reused the 3 real screenshots already saved
  at `public/images/trends/` — no new image files were needed despite
  the brief naming `trends-hero-full.png` and `trends-label-preview.png`.
  **Correction**: excluded the brief's "100% Typing Error Reduction"
  stat (no error-rate measurement exists) and substituted a verifiable
  one instead — "7 / Fields Auto-Filled from Live API," counted
  directly off the real auto-fill screenshot. The other 4 case studies
  (Kippo, Aligned, Spruce, Ticket Triage) are untouched, still on the
  shared `CaseStudyBento` template — confirmed via a build and a
  manual check of `/work/spruce` after the change.

- **Resolved (Trends narrative rewrite, 2026-09-16)**: at the user's
  request, Trends' Before/After grid is gone entirely (`beforeAfter`
  field removed from `trends.ts` — the `beforeAfter` type/rendering
  itself stays in `CaseStudyBento`/`types.ts` for potential reuse
  elsewhere, just unused here now). `problem`/`insight` rewritten in
  the user's own dictated voice (fast-paced dispensary floor,
  constant shipments, manual labeling as a real time sink) rather
  than the earlier "10-12 min" stat framing. New `gallery` field shows
  3 real product screenshots right after The Challenge — real images
  now (see Case study evidence below), not placeholders; the user
  saved them in the same day. The mechanics grid is relabeled "Features" (via the
  new `mechanicsHeading` field) and re-led by the two things the user
  named explicitly: Front Stock's live-menu API autofill, and Back
  Stock's QR-first/AI-vision camera capture — Lock Batch and
  Hold-steady capture kept as supporting features, nothing removed,
  just reordered and re-emphasized.
- **Resolved (layout/typography refactor, 2026-09-15 pm)**: Hero moved
  to the full-bleed photo-background treatment (see Visual design
  direction above; locked title/tagline confirmed unchanged after
  asking). Services accordion restyled into a compact horizontal
  dropdown (tighter padding/type, closed by default) — same 5 real
  services, brief's "Websites" swap-in was confirmed-declined after
  asking. Case-study template renamed its numbered eyebrow labels to
  plain Clay-style headers (The Challenge / The Insight / The Solution
  / Design System / Impact) and dropped all raw code snippets
  sitewide in favor of plain-English steps (see Case-study pages
  above). Trends' homepage pillar heading changed from "Data-Driven
  MVPs & Product Engineering" to "Retail Automation & Workflow
  Engineering" with a matching subtext, since Trends is now the only
  project in that pillar. About page's Builder identity tab is now a
  bordered 2-column editorial bento card with a "Pursuit AI-Native
  Cohort — Building & Shipping in Public" badge, using the real
  cohort/classroom photos that already existed at
  `public/images/identity/builder-*.jpg`.
- **Resolved (media/content refactor, 2026-09-15)**: Hero is now the
  photo-back split layout (see Visual design direction above). Trends
  gained a "Before & After" operational comparison (legacy
  hand-typed backroom workflow vs. the live Sweed-API-driven label
  engine) with a `~10-12 min → <60 sec per batch` metric badge — that
  range is Yadan's own firsthand account of the job, not a number
  pulled from repo docs (unlike the earlier "80% faster" claim, which
  *was* an unverifiable third-party-sounding stat and got excluded).
  Spruce now embeds a Loom walkthrough
  (`https://www.loom.com/embed/60250457bd5342b282367b40aa1177a0`,
  trusted as given directly by the user) via a new `videoEmbed` field.
  Site-wide accent color changed to vibrant orange `#FF5C00`. New
  reusable `CaseStudyBento` sections: Before/After grid (`beforeAfter`
  field) and video embed (`videoEmbed` field), both on `WorkContent`
  in `src/content/work/types.ts`.
  **Not done / corrected rather than done**:
  (1) the brief asked for `public/images/trends-before.jpg` and an
  "after" screenshot of the label-maker app — neither file exists, so
  both Before/After columns render the site's standard honest bordered
  placeholder (`IMAGE: <heading>`) instead of a fabricated image; drop
  real photos/screenshots in and wire them into `trends.ts`'s
  `beforeAfter.before.image` / `.after.image` fields whenever they're
  ready.
  (2) the brief asked for `public/images/kippo-hero.png` — doesn't
  exist; Kippo's real banner image (`/assets/images/kippo/iphone-17-pro-photo.png`)
  was left as-is rather than pointed at a broken path.
  (3) the brief asked for a Tailwind "Mobile Device Frame" component
  to wrap Aligned's "raw app screenshots" — but `work-aligned.jpg` is
  already a pre-framed device mockup (a real iPhone photographed/
  composited in, not a flat screenshot), so wrapping it in a second
  CSS phone frame would double-frame it. Didn't build the component
  since it would have no real consumer yet; build it once actual raw
  (unframed) Aligned screenshots exist.
  (4) the brief asked to "maintain the dynamic interactive preview /
  motion transition when navigating into the case study" for Kippo —
  no such page-transition system exists anywhere on the site today
  (only the existing `hover:scale-[1.01]` card hover); nothing built
  here since there's nothing pre-existing to "maintain," and adding a
  new page-transition system wasn't asked for explicitly.
- **Resolved (Clay.global-style refactor, 2026-09-14)**: Hero is now
  the full light-bg/dark-text redesign (not just a lightened photo
  overlay) — portrait photo dropped from the hero, replaced with a
  black "Available for select projects" pill and a massive bold
  headline; Header gained a black "Contact" pill CTA; three Services
  entries renamed (Front-End Development, Generative AI & Workflows,
  UI/UX & Design Systems — body copy unchanged); WorkCard now uses
  `rounded-2xl` bordered images and monospace tag pills; Trends
  (verified against `~/trends-label-studio`) replaced 311 Insights in
  Pillar 3 — `insights-311.ts` stays on disk, just removed from
  `workIndex.ts`, restore it if asked. Two brief inaccuracies were
  caught and corrected during this work: the live menu source is
  **Sweed**, not "Carrot," and the claimed "80% faster intake" has no
  support anywhere in the Trends repo, so it was excluded rather than
  published unverified.
- **Resolved by the 2026-09-02 migration**: every work card now links to a real `/work/[slug]` case-study page (Kippo, Aligned, Spruce, Ticket Triage all ship real content; 311 Insights is an honest lighter/in-progress stub). No more disabled cards or mixed external-link CTAs.
- **Resolved (feature brief, 2026-09-02)**: About page now has an Overview + Skills credential timeline (`CredentialTimeline.tsx`) and a Designer/Builder/Fashion identity toggle (`IdentityToggle.tsx`), per `madebytainofeaturebrief.md`. Designer tab reuses existing Aligned/Kippo images (no dedicated designer photos yet — explicit user call, not a placeholder). Real photo assets live in `public/images/identity/`. **Not yet built from that brief**: item 3 (per-project `<InteractiveMockup>` hover component) — still waiting on a screen recording; brief suggests prototyping on Ticket Triage first since it has a live demo. Item 4 (chatbot) is explicitly parked for later.
- **Known bug worth remembering**: `AnimatePresence` (from the `motion` package) never completed its exit animation in this dev environment — confirmed across a server restart, `.next` cache clear, and fresh tabs, so it wasn't stale HMR state. If a future feature needs an exit-then-enter crossfade, don't assume `AnimatePresence` "just works" here without testing the unmount actually happens; `IdentityToggle` was rewritten to a plain fade-in (no exit tracking) to route around it.
- Kippo and Ticket Triage work cards still show a bordered placeholder box on the homepage grid (no `bannerImage` set in their content files yet) — Aligned has a real image; Kippo has a real image too via its case-study banner but the *homepage card* itself doesn't reuse it yet; 311 Insights has no image at all (Spruce got one 2026-09-19, see Known gaps). Worth wiring `bannerImage` into more of the content files.
- 311 Insights' case-study page has real problem/mechanics content but no `architecture` or `designSystem` card yet, and no hero image — it's the one project still clearly reading as "in progress."
- Testimonial section quote is still placeholder copy, not a real testimonial. **The portrait image is real now** (resolved 2026-09-17): `public/images/testimonial-portrait.jpg`, copied from `Picture of me in suit.JPG` at the repo root per explicit user request — a real full-body mirror-selfie portrait, default `object-cover`/center-crop keeps the face and suit in frame. The quote/attribution ("Creative Partner") is still unverified placeholder text — don't treat it as real until the user confirms an actual testimonial to replace it with.
- Trust strip uses text-only placeholder wordmarks, not real logos — needs real logo assets and confirmed client permission before launch.
- **Vercel is NOT serving the Next.js app — verified 2026-09-19 with `curl` against `https://yadan-taino-personal-website.vercel.app`** (the URL in `layout.tsx` metadata): static files from `public/` resolve (`/images/hero-portrait.jpg`, `/assets/videos/kippo/…mp4`, `/robots.txt` → 200, and the new `-clean` Kippo still is live while the deleted old one 404s, so deploys *are* running on each push), but `/`, `/work/kippo`, `/index.html`, `/favicon.ico` and `/_next/static/…` all return Vercel `NOT_FOUND`. That pattern means the project is publishing `public/` as a static site — most likely **Framework Preset = "Other"** and/or **Output Directory = `public`** left over from the pre-migration plain-HTML site — instead of building Next.js. Fix is in the Vercel dashboard (Project → Settings → Build & Development: Framework Preset **Next.js**, clear the Output Directory override, then redeploy); Claude has no Vercel access here (CLI not installed, Vercel MCP unauthenticated). Until fixed, the public site shows no pages at all, regardless of what's changed in the code. Also possible: the real production URL differs from the metadata URL — worth confirming.
- The `Kippo App Case Study PNG/` deck and the 4 enhanced Kippo screens zip (`~/Downloads/Kippo Mobile App Enhancement.zip`) have now been drawn from for the Kippo case-study content, but individual slide images themselves aren't embedded in the page — only the synthesized text/mechanics and the existing hero photo/video.

## Case study evidence (for Development / Generative AI / UI-UX case studies)
Concrete proof points to draw on when writing case studies — confirmed 2026-08-06:
- **Trends** (verified 2026-09-14 via `~/trends-label-studio`'s actual
  source/README, not the user's brief alone — the brief had 2 factual
  errors, corrected below): an internal label-printing web app for
  Yadan's day job at Trends LIC (Long Island City dispensary). Real
  product name on the site should be **"Trends"** (or "Trends Label
  Studio"), not the repo's internal working name. Two real flows:
  - **Front Stock**: searches the **live Sweed menu** (SweedPos, the
    dispensary's actual POS) for brand/product name/category/THC%
    (`potencyThc`)/price, then prints a shelf tag. **Correction**: the
    user's brief didn't name a source; it is NOT "Carrot" (an earlier,
    stale memory note said Sweed was deliberately unintegrated — the
    project clearly moved past that since).
  - **Back Stock**: 4 label types (Single 4×2, 2-Product 4×2, Big 4×6,
    Bin 4×2). Entries come from menu search, a phone-camera photo, or
    by hand. The phone flow (`/back` shows a QR → `/m/[pairId]` opens a
    live camera viewfinder) tries a client-side QR decode of the
    sticker first (`jsqr`, free, exact) and only falls back to AI
    vision (`google/gemini-2.5-flash` via the Vercel `ai` SDK) if that
    fails — a real cost/accuracy-conscious architecture decision, good
    "AI as assistive layer" evidence. A "Lock Batch" toggle keeps
    Lot #/Exp/Metrc Tag filled in across entries from the same
    shipment. Prints via Zebra Browser Print to a physical Zebra
    label printer.
  - **Correction**: the brief's "cutting intake processing times by
    80%" is **not substantiated anywhere** in the repo's README or
    docs — don't use this figure. No verified time-savings metric
    exists; if one gets measured later, add it then.
  - Real test suite (Vitest, `tests/`), real Next.js 16 + React 19 +
    TypeScript + Tailwind v4 stack, deployed on Vercel.
  - **Confirmed 2026-09-16 via 3 real screenshots the user shared
    directly in chat** (dark teal/navy UI): the app's actual in-product
    branding reads **"Trends Studio"** (nav wordmark), not "Trends
    Label Studio." Home screen has two cards — "Back Stock" (BACK
    ROOM, "Mobile Sync Ready" badge, "snap the LOT/EXP sticker from
    your phone, or build by hand") and "Front Stock" (SALES FLOOR,
    "search the live menu or enter details by hand"). The Front Stock
    search view shows real live-menu results grouped by brand (Dank,
    Ayrloom, Wyld) with product/category/size. The 3rd screenshot (a
    Front Stock label reached by selecting "Garlic Breath" from that
    search — confirmed by its "← back to search" link and the absence
    of any Lot#/Exp/Metrc field, which only Back Stock intake labels
    carry) shows Category/Brand/Size-Type/Strain/Class/Potency/Price
    fields each tagged "auto" (visually confirms the API-autofill
    claim) plus a live label preview and a genuine
    graceful-degradation banner: "Zebra Browser Print isn't running on
    this computer — labels will use the system print dialog instead."
    **Resolved 2026-09-16, same day**: the user saved the 3
    screenshots into a `Trends/` folder at the repo root; moved into
    `public/images/trends/` as `home.png`, `front-stock-search.png`,
    and (originally, mislabeled) `back-stock-label.png`, wired into
    `trends.ts`'s `gallery[].image`. **Renamed 2026-09-17** to
    `front-stock-label.png` once the Front-vs-Back-Stock mixup was
    caught (see "Case-study pages" above); also cropped a tight
    close-up of just the printed-label portion into
    `label-preview.png` for the Solution section's dedicated label
    showcase. **Gotcha worth remembering**: macOS
    screenshot filenames use a narrow no-break space (U+202F, not a
    regular space) before "AM"/"PM" — a typed `mv "...4.58.54 PM.png"`
    silently fails with "No such file or directory" even though `ls`
    shows the file; use `find <dir> -name "*<unique-fragment>*" -exec
    mv {} <dest> \;` to match by a substring instead of retyping the
    full name.
- **Kippo**: full Google-style UX process exists in the 24-slide deck — problem
  statement, persona ("Sarah"), user research summary, pain points, paper
  wireframes → digital wireframes → low-fi prototype → usability study (4
  participants, round 1 + round 2 findings) → mockups with explicit
  before/after reasoning (e.g. added Boys/Girls/Infants category icons after
  users showed navigation hesitation). Figma prototype links are in the deck.
  Also involved actual mobile app development (not just static comps) using
  HTML/CSS/JS.
  - **Process assets, confirmed 2026-09-19.** The deck slides in the
    repo-root `Kippo App Case Study PNG/` folder are only 720×405 — too
    small to reuse. The **originals are inside the PDF**
    (`~/Documents/Kippo App Case Study.pdf`, 24 pages; also a copy in
    `~/Desktop/Website Assets/`): extract with poppler —
    `pdfimages -png -f <page> -l <page> file.pdf prefix` (`pdfimages`
    and `pdftoppm` are installed). Useful pages: 10 = two notebook
    photos (2871×2173 Home + Product Detail sketches, 2504×3453 the
    A–D alternatives), 11 = shop-tabs digital wireframe, 12 = home
    digital wireframe, 13 = low-fi prototype, 16 = category mockups
    before (text tabs) / after (icons), 17–18 = the Figma mockups,
    19 = the full Figma canvas (1890×1680). Deck tab reads "Sale" in
    the sketch but "Sell" from the wireframe on — don't claim the tab
    names carried over unchanged, only that a five-tab bar did.
  - **The "new" full design** = the user's `Kippo Protype Design.png`
    (a browser screenshot of a design file titled **"Kippo All Screens,
    5 pages"** — Home, Shop, Product detail visible; the other 2 pages
    are not in the screenshot), plus 4 clean exports in
    `~/Downloads/exports/` (Home, Category, Product Detail,
    **Confirmation** — "Your item is now live" — but each export is
    cropped at the bottom, so the screenshot was used for the phones).
    It looks like a Claude Design canvas (`.dc.html`); the site does
    **not** currently say so (Kippo's techStack is Figma / User
    Research / HTML/CSS/JS) — ask before crediting a tool.
- **Aligned** (verified 2026-08-25 via the real deck at
  `~/Desktop/Website Assets/Aligned — A Case Study by Yadan Taino.pdf`,
  15 pages, built in Claude Design): a genuine, detailed design case
  study — NOT a claim of a shipped React/Framer Motion app; the deck's
  own final page labels it "Case study format · Product design
  portfolio," a passion project. Persona is **Alex Rivera** (marketing
  manager, 34, NYC — chronic lower-back/hip pain from 8-10hr desk
  days), not "Sarah" (that's Kippo's persona — don't mix them up).
  Collaborator: **Juny**, a licensed physical therapist. Platform: iOS
  companion app. Real named mechanics (use these exact names, not
  invented ones):
  - **"The Forgiving Streak"** — a 30-day streak that survives one
    missed day (the flame dims to a soft amber "rest day" instead of
    resetting; returning the next day fully restores it).
  - **"A Body That Cools"** — a tappable body-map visualization on the
    home screen; pain areas glow saturated orange on day 1 and
    desaturate toward green as the user stays consistent (shown at
    Day 1 / Day 14 / Day 30).
  Three design principles: "Soft, not strict," "15 minutes, no
  negotiation," "Show it working." Product's own design system (for
  the case study's mockups, NOT the portfolio site's palette): Primary
  `#FF6B35`, Accent `#F9A826`, Success `#22C55E`, Ink `#1A1814`, Page
  `#FAF7F1`; typography pairing Fraunces (display/editorial) + DM Sans
  (UI/body) — this is a real precedent for the "confirm exact serif"
  open item in Visual design direction above, if an editorial serif is
  wanted for the portfolio's own case-study template. A full tap-through
  prototype exists (onboarding → body-tension check-in → personalize →
  home → session flow → exercise detail → session complete) — real
  screens to reference for the case-study "Interactive UI Showcase."
  This deck is a strong candidate to export screens/copy from directly,
  same pattern as the Kippo PNG deck.
  - **Prototype screenshots, confirmed 2026-09-19** (7 screenshots the
    user saved into the repo-root `Aligned/` folder, 3024×1738 each,
    all of the prototype's browser wrapper: flow sidebar, toolbar,
    phone, and a "try this" note). The sidebar lists **10 steps** in 3
    groups — Onboarding (Welcome 01, Body tension 02, Personalize 03,
    Notifications 04, You're all set 05), Daily (Home 06), Session
    (Session intro 07, Pelvic tilt 08, Glute bridge 09, Session
    complete 10). The screenshots cover 7 of the 10 (**not**
    Personalize, Pelvic tilt, or Glute bridge). Facts read directly off
    the screens, safe to cite: onboarding pain check-in set to 7/10
    with Lower back + Hips selected; one reminder at 7:00 PM ("15
    minutes for your back?"); Home = "Hey Alex. Your back has been
    waiting. Today is 15 minutes." with a "Lower back, gently" plan
    (5 exercises · 15 min · 7:00 PM) and a 3-day streak whose row shows
    today as a dashed ring ("grace days explicitly — never hidden
    mechanics," per the prototype's own note); Session intro lists
    Pelvic tilt 2 min, Glute bridge 3 min, Cat-cow 2 min (+ more) and
    its video slot is a **placeholder awaiting real footage from the
    therapist** (the prototype's own note says so — never present it
    as real footage); Session complete = "You showed up today. Day 4 of
    your streak," pain 4/10 = "3 points lighter than before," body map
    "Cooling down." One nuance vs. the deck: the deck describes the
    body map cooling orange → **green**; the prototype's own note says
    orange → **amber**. The site copy just says "cooling from orange"
    to stay true to both.
- **`~/pursuit-311-insights`**: real open-source live data (NYC 311 Socrata
  API), used to surface actual insights — concrete evidence for Development
  and Generative AI (AI-assisted build process).
- **`~/support-ticket-sorter`** ("Ticket Triage — MVP"): a real deployed
  (Vercel) product — automatically categorizes support tickets, scores
  urgency, flags SLA risk, enforces a "critical floor" priority rule modeled
  on a real incident. Logic lives in `sorting.js`, kept separate from the UI
  — good evidence of real engineering practice, not just a demo. Live URL
  confirmed 2026-08-25: `https://support-ticket-sorter.vercel.app/`, title
  "Ticket Triage — MVP," matches the code exactly. The page itself makes no
  AI/OpenAI claims — it's honestly rule-based automation, not an LLM
  integration. Represent it as what it is (real, solid rule-based
  engineering — categorization, urgency scoring, SLA-risk flagging, a
  "critical floor" rule modeled on a real incident) rather than the
  OpenAI-copilot framing from the 2026-08-24 brief, which doesn't match
  this codebase. Strong Development case study candidate; not yet linked
  from the portfolio site.
- **`~/tasklocal-provider-chatbot`** — **real product name is "Spruce,"**
  not "TaskLocal AI Matcher" (TaskLocal was just the repo/working name;
  confirmed by the user 2026-08-25). Re-verified 2026-08-25 — the repo
  has grown substantially since the 2026-08-21 check, now a genuine
  two-sided home-services marketplace:
  - **Design system**: documented in the repo's own `DESIGN.md` —
    "Spruce Design System — Japandi-Bento." Warm-neutral palette with
    one confident accent, bento-style modular rounded card containers.
    Real tokens (`src/app/globals.css`): `--brand-primary` Deep Forest
    Emerald `#0B2B22`, `--brand-accent` Warm Amber `#D97706`,
    `--brand-background` Warm Linen/Cream `#FAF8F5`, plus sage/soft/
    slate/ink-muted/line/amber-tint supporting tokens. Brand mark is
    "Bough" (`src/components/SpruceLogo.tsx`) — two open chevrons under
    an amber crown. This is the app's OWN design system, separate from
    the portfolio site's palette — don't conflate the two.
  - **Stripe payment integration is real**: `stripe`,
    `@stripe/stripe-js`, `@stripe/react-stripe-js` are actual
    dependencies; real files `src/lib/stripe.ts`,
    `src/app/api/stripe/payment-intent/route.ts`,
    `src/components/customer/PaymentStep.tsx`,
    `src/components/customer/BookingFlow.tsx`.
  - **AI matching is real and responsibly architected**: the natural-
    language chat (`/chat`, `src/lib/chat/`) uses the real
    `@anthropic-ai/sdk` (model `claude-sonnet-4-6`) in `intent.ts` to
    turn a user's message into structured search terms — deliberately
    with NO access to the listings dataset, so the model literally
    cannot invent a match. `match.ts` then runs deterministic scoring
    against real listings using only those extracted terms. This
    intent/match separation is a genuine, documented architectural
    safeguard against AI hallucination — strong, concrete evidence for
    the "AI as assistive tool, human/deterministic logic stays in
    control" positioning guardrail (see Positioning above).
  - **Supabase backend** (`@supabase/supabase-js`) — real persistence,
    not just static JSON fixtures (though `~/tasklocal-shared-data`
    still holds companion JSON fixtures for listings/bookings/
    providers/reports).
  - **Real surface area**: customer browse/listings/reviews/bookings,
    a provider dashboard, an internal trust-safety page, login, and
    the AI matching chat — not a single-screen demo.
  - **Deployment**: live at `tasklocal-workspace.vercel.app` (the user's
    2026-09-14 briefing gives this as the clean production URL; an
    earlier check found a longer preview-deployment URL
    `tasklocal-workspace-w6rbjox8h-yadan-taino.vercel.app` — both are
    SSO/deployment-protection gated, so this doesn't change the
    "Private / not yet public" `links` handling on the case-study page).
  - **Product/UX work, confirmed by the user 2026-09-14** (already
    folded into `src/content/work/spruce.ts`'s `mechanics`, this is
    the backing detail): the design-token system is applied
    consistently across every surface (customer browse, provider
    dashboard, booking modal, payment flow, internal admin tool); the
    booking calendar's availability window was extended from 4 weeks
    to 60 days (a real scheduling-logic rework); a light/dark theme
    system was retrofitted across pages that were originally
    hardcoded dark-only, including the internal Trust & Safety
    moderation dashboard — while *deliberately leaving that tool's
    red/orange/amber severity color-coding untouched*, since it's a
    reserved status palette, not a branding choice (good example of
    design judgment, not just consistency for its own sake); the AI
    matching chat was redesigned from a blocking floating panel into
    a slide-over drawer with quick-prompt suggestion pills and rich
    in-chat provider match cards (avatar, rating, rate, one-tap book);
    a real UX bug was fixed where the Stripe "Pay" button was
    clickable before card details were valid; graceful fallback
    states exist throughout (e.g. "Stripe not configured — continue
    without paying to preview the flow") so demo/dev environments
    never hit a dead end.
  - **Operational heads-up, NOT site copy** — as of the user's
    2026-09-14 briefing, the Supabase database backing this app had
    gone to sleep (free-tier auto-pause after inactivity) and was
    mid-restore. Do a live check before pointing anyone at a "click
    around this" demo link; this is a live-service caveat, not
    something to put on the case-study page itself.

## Working style
- Yadan is learning to code — explain changes in plain language, including *why*, not just *what*.
- Make small, incremental changes. Never make giant multi-file changes in one step.
- Commit after each completed section with a clear commit message.
