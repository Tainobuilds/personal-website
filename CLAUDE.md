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
- **SUPERSEDED 2026-09-22:** hero tagline changed from "Bridging
  front-end engineering and product design. I build clean design
  systems and leverage AI tools to create frictionless workflows that
  solve everyday problems." (locked 2026-08-24) to add a "create
  useful apps and sites" clause, per explicit user request.
- **Hero tagline (locked 2026-09-22):** "Bridging front-end engineering
  and product design. I build clean design systems, create useful apps
  and sites, and leverage AI tools to make workflows easier and
  frictionless — solving everyday problems." Also mirrored into
  `layout.tsx`'s three SEO description fields (top-level `description`,
  written in the third person to match its own style, plus the
  matching `openGraph`/`twitter` descriptions, which are first-person
  like the hero) so search/social previews stay consistent with the
  visible copy.
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
2. Services ("what I offer" — tagline + accordion list) — **Trust
   strip removed 2026-09-23** (see below), so Hero flows straight into
   Services now.
3. Selected work — now 3 pillars instead of a flat grid:
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
4. Testimonial
5. About (with a lightweight "Currently" tag strip near the top)
6. FAQ
7. Contact

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

### Trust strip — REMOVED 2026-09-23
Was: text-based placeholder wordmarks (Adidas, SoundCloud, Kiehl's,
Jose Cuervo, NYFW, Swim Week, Vida Y Moss, Trends Dispensary) in a
strip between Hero and Services, locked 2026-08-06. **Removed
entirely** per explicit user request — those brands are from Yadan's
modeling/campaign work, not design/dev client work, and having them
right under the "Front-End Developer & Product Designer" hero read as
distracting and potentially misrepresenting (implying design/dev
client relationships that don't exist). `TrustStrip.tsx` deleted,
import + usage removed from `page.tsx`. Homepage now goes straight
from Hero into Services. If brand-credibility proof is wanted here
again later, it should be real client logos with actual permission —
not this list.

### "Currently" tags (locked 2026-08-06, updated 2026-09-22)
Small pill tags near the top of the About section, not a full section.
Update these as circumstances change — they're meant to stay current,
unlike the rest of the locked copy in this file. **2026-09-22**: down
to a single tag, **"Pursuit Software Development AI Program"** — the
"Nonexclusive with FFT Models" modeling tag was dropped per explicit
user request (no longer circumstances worth surfacing here), and the
Pursuit program's display name changed from "Pursuit AI-Native cohort"
everywhere it appeared site-wide (the tag itself, `CredentialTimeline`,
and `IdentityToggle`'s Builder badge/alt text/captions) — same
"AI-Native" → plainer-wording pattern as the 2026-08-24 title change
(see Positioning above), not a program-name error to correct back.

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
- **Palette (refined 2026-08-24, Cream → white 2026-09-22)**: warm
  neutral, named tokens — Sand `#EDE8DF` (secondary surface), Dark
  `#2C2A24` (headline/body text, replaces pure `#111111`), Muted
  `#7A7468` (secondary text, replaces `#a39d8c`), Border `#E8E3DA`
  (replaces `#ddd4bf`). Still black-feeling but warmer than pure
  black. **Cream is now pure white `#FFFFFF`** (was `#F5F0E8`, itself
  a replacement for the earlier `#f2f1ed`) — the user asked to drop
  the beige page background for "more of a lux feeling." Single CSS
  variable (`--color-cream` in `globals.css`, name kept as-is —
  renaming it sitewide wasn't worth the diff), so every `bg-cream`/
  `text-cream` usage updated automatically, same pattern as the
  2026-09-15 accent-color change. Sand/Border/Muted were deliberately
  left alone — against a white page they read as a warmer, distinct
  card surface instead of a background that blends in, which is the
  effect that reads as "lux" rather than "pure white and gray."
- **Accent color (CHANGED 2026-09-22): petrol teal `#106B6B`.**
  Replaces the vibrant orange `#FF5C00` locked 2026-09-15 — user said
  they weren't a fan of the orange and asked for "cool unique" options
  to elevate the site. Offered 3 directions (deep cobalt `#2E3F8E`,
  oxblood `#7A2333`, petrol teal `#106B6B`); user was torn between
  cobalt and teal, so both were previewed live (homepage Services
  numbers + Trends' stat banner) before deciding. **Flagged and
  accepted knowingly**: teal sits close to Trends Studio's own
  in-product teal/green wordmark and stat colors in its screenshots —
  the same "don't blur a project's own palette into site chrome"
  concern that ruled out `#D97706` for Spruce back on 2026-09-15 — but
  the user picked teal anyway once shown the comparison, so this one's
  an informed choice, not an oversight to revisit. Single CSS variable
  (`--color-accent` in `globals.css`), same site-wide propagation
  pattern as every accent change before it.
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

## Known gaps (as of 2026-09-23)
- **Resolved (Aligned's "70%" stat now attributed to Juny, 2026-09-23)**:
  `problem` used to open with the 70%-adherence-drop figure as a bare,
  unsourced statistic. Per the user (who confirmed this is the real
  source — they interviewed Juny, the same licensed physical
  therapist already credited elsewhere in this case study as Aligned's
  clinical collaborator, and this is her number), now opens: "According
  to Juny — the licensed physical therapist Aligned was built
  alongside — 70% of patients drop their home exercise program within
  the first 4 weeks." Ties an already-established real person to a
  number that previously read as generic/uncredited — same
  "attribute real claims to their real source" principle applied
  throughout this doc, just applied to the problem paragraph instead
  of a pull-quote this time (the existing `insight.attribution` field
  is for the *Alex Rivera* quote specifically, a different persona —
  didn't touch that).
- **Resolved (Trends pillar moved above Spruce, 2026-09-23)**: per
  explicit user request ("my top 3 case study" — reading as their
  favorite/strongest one, not a literal ranking position), swapped the
  render order of Pillar 2 (Spruce, "AI Workflows & Interactive
  Systems") and Pillar 3 (Trends, "Retail Automation & Workflow
  Engineering") in `src/app/page.tsx`. Homepage order is now Kippo/
  Aligned → Trends → Spruce. Purely a JSX reorder — the `pillar: 2`/
  `pillar: 3` values on `WorkContent` in `spruce.ts`/`trends.ts` were
  NOT changed (still their original categorization), and neither
  project's own case-study page or content changed at all.
- **Resolved (Aligned's hero now has motion — a Body tension video
  mockup, 2026-09-23)**: the user re-exported a NEW mckp.live video —
  `Aligned/iPhone 17 Pro (1).mp4` was overwritten (same filename, new
  content: 2878×2160, 60fps, ~6s, dated 2026-09-23) with a camera
  pull-back animation of the **Body tension** screen (the same one
  the 2026-09-23 still swap uses), replacing the old Welcome-screen
  video from 2026-09-19 that was never used. Now Aligned's
  `bannerVideo` (`public/assets/videos/aligned/
  mockup-bodytension-video.mp4`, 1440×~1080, ~500KB), with
  `bannerImage` (the still) as its `poster`.
  **Badge removal was a real project this time** — the "Made with
  mckp.live" badge in this export sits *inside the phone's screen
  content* (over "Skip for now") for the first ~3.4s while the camera
  is still zooming, and only settles into the simpler "below the
  phone, over velvet" position for the rest of the clip. Reconstructing
  a translucent badge sliding across moving, perspective-shifting
  screen content frame-by-frame was going to need real per-frame quad
  tracking (tried it — a homography approach broke down because the
  animation has genuine changing 3D perspective, not just 2D pan/zoom,
  so a naive "detect 2 clean points, infer the rest" shortcut produced
  60-120px errors) — **not worth building for a decorative hero video**
  when a much cheaper fix was available: the clip was **trimmed to
  start at t=3.8s**, after the badge has fully cleared the phone and
  settled at a fixed screen-space position (confirmed pixel-identical
  bbox `(1074,1836)-(1803,1931)` across many sampled frames — it's a
  UI overlay in screen coordinates, not part of the 3D scene) over
  velvet only. Result is a ~2.2s, 132-frame clip. **Also discovered
  the badge fades out on its own** near the clip's original end
  (visible fading across frames ~110→130 of the trimmed clip) — didn't
  change the fix, just meant later frames needed the same reconstruction
  even though the badge was already faint/gone there (harmless to
  reconstruct over already-clean velvet).
  **Fix technique — clone-stamp, not interpolation**: the
  border-interpolation approach used for Kippo's video and the
  Aligned still (blend top row → bottom row + random per-pixel noise)
  produced a flat, textureless rectangle here — velvet's diagonal
  fold pattern is low-frequency and directional, not something
  row-interpolation + white noise can reproduce. Switched to a
  **clone-stamp**: crop a same-size patch of real velvet from just
  below the badge region (still within frame bounds — the first
  attempt cloned from 40px further down and wrapped into the phone
  bezel because the true clean space is tighter than it looks, only
  ~189px available below the badge for a 175px-tall patch, so use a
  3px gap, not 40), then alpha-composite it back over the badge
  region through a cosine-feathered mask (soft ~20px falloff on all
  sides, then a light Gaussian blur on the mask itself) so there's no
  hard rectangular seam. Applied identically to all 132 frames (same
  fixed bbox, since the badge doesn't move once settled), re-encoded
  with ffmpeg (scaled to 1440px wide, CRF 23, faststart). Verified
  by extracting frames from the *final compressed output* (not just
  the pre-encode PNGs) to confirm compression didn't reintroduce
  visible seams.
  **New template capability**: the video branch in `CaseStudyBento.tsx`
  didn't respect `bannerFit` at all (always a fixed
  `max-h-[560px] w-full` box) — with this video's native ~4:3-ish
  aspect in that wide/short box, `object-cover` cropped the top of
  the phone off. Extended the video branch to honor
  `bannerFit: "portrait"` the same way the image branch already does
  (`aspect-[4/5]` mobile, `h-[780px]` desktop) — now applies to any
  future project that pairs a portrait video with a portrait still.
  Homepage card is unaffected either way (`WorkCard` never reads
  `bannerVideo`, only `cardImage ?? bannerImage`, so it still shows
  the still). Verified at desktop and 375px mobile, no overflow either
  width; `tsc` and build both pass. Scripts are scratchpad-only
  (`alignedvid/` — trim, per-frame clone-stamp heal, re-encode); the
  original unhealed `Aligned/iPhone 17 Pro (1).mp4` stays untouched on
  disk if this ever needs redoing with a different trim point or
  technique.
- **Resolved (Trends' homepage copy rewritten to lead with the real-
  business angle, 2026-09-23)**: two fields, same reasoning as the
  Kippo homepage-blurb fix just above — the old copy was accurate but
  read as a technical changelog ("Replaced manual 8-10 minute hand-
  typed dispensary label entry with a real-time API-connected thermal
  print engine — roughly 90% faster..."), not something that hooks a
  visitor. The user's brief used "store studio program" — corrected to
  the actual verified product name **Trends Studio** rather than
  invented wording, same pattern as every other Trends correction in
  this doc. Both rewrites lead with **it's AI-assisted and it's live
  in a real dispensary right now**, per the user's explicit ask to
  highlight that this is a real business being helped in real time,
  not a class-project demo:
  - Pillar 3 description (`src/app/page.tsx`): "Built Trends Studio —
    an AI-assisted system for in-store organization and labeling, live
    in a real dispensary today and saving real time on a busy sales
    floor."
  - Trends' own homepage-card `outcomeSummary` (`trends.ts`): "An
    AI-assisted labeling system running in a real dispensary right
    now — cutting label entry from minutes to seconds and freeing up
    staff for the floor."
  Worded them differently from each other on purpose since they sit
  right next to each other on the homepage (pillar description, then
  the one card in that pillar) — same "real dispensary, right now"
  core claim, different sentence shape, so it doesn't read as literally
  repeated. Nice coincidence: the storefront photo directly below the
  card blurb (`storefront.jpg`, showing the real "TRENDS, 27-25 44th
  Dr, Long Island City" signage) already visually reinforces the "real
  business" claim — didn't need a new asset for this pass. `tagline`
  and `problem` (the case-study page itself) weren't touched — this
  was scoped to the homepage/"outside" teaser copy only, same scope as
  the Kippo fix.
- **Resolved (Kippo's homepage-card blurb rewritten, 2026-09-23)**:
  `outcomeSummary` (the homepage card's one-liner, before the click —
  same field/pattern as the Spruce blurb fix earlier this session)
  said "Resolved a navigation-hesitation problem parents hit in
  testing, validated across two rounds of usability studies." — per
  the user, too dry/research-jargon-y to hook someone landing on the
  site who doesn't know what Kippo is yet. Now: "Helps parents buy and
  resell kids' clothing fast — saving real time and money, without the
  chaos of disorganized marketplaces." Grounded in the same verified
  problem statement already on the page (rising cost of kids'
  clothing, existing resale options being disorganized/time-consuming/
  unreliable) — not a new claim, just leads with the real-world payoff
  instead of the UX-research process. The old navigation-hesitation
  detail isn't lost, it's still the actual `mechanics[0]` entry on the
  case-study page itself — this only changed the *outside* teaser.
  `tagline` (the case-study header subtitle) already mentioned
  parents/buy/resell/safely, so it wasn't touched.
- **Resolved (Hero's "Available for select projects" badge hidden on
  mobile, 2026-09-23)**: the user shared a real phone screenshot
  (Safari, iPhone) — on real mobile Safari (not just the dev viewport
  emulator), the badge sat directly over their face. The `object-top`
  fix from earlier this session (see the 2026-09-22 entry) fixed the
  crop cutting off the *top* of the head, but didn't address this
  separate issue: the badge is positioned in the text flow above the
  headline, and at narrow widths the headline wraps to 4 lines,
  pushing that whole text block down far enough that the badge lands
  over the face rather than the dark sky/building area above it. Fix:
  `hidden md:inline-flex` on the badge — gone below the 768px
  breakpoint, unchanged on desktop (confirmed still visible at
  1200px). Simpler and lower-risk than trying to reposition it per
  breakpoint; the badge is a "nice to have" pill, not load-bearing
  copy, so dropping it on mobile costs nothing.
- **Resolved (Aligned hero/card mockup swapped to Body tension,
  2026-09-23)**: per explicit user request, the 3D velvet-phone mockup
  (`bannerImage`, drives both the case-study hero and — since Aligned
  has no separate `cardImage` — the homepage card too) now shows the
  **Body tension** screen ("Where is your body holding tension
  today?") instead of Welcome. **No new mckp.live export existed** for
  this screen (checked `Aligned/` — only the same Welcome-screen
  `iPhone 17 Pro.png`/`.mp4` from the 2026-09-19 pass are there), so
  instead of asking the user to make one, the swap was done entirely
  with Pillow: detected the phone screen's real quad corners in the
  existing mockup photo by thresholding for the screen's bright warm-
  cream background (had to tighten the threshold once — the first pass
  also picked up a bright velvet highlight on the sofa as a false
  corner), then warped the already-isolated `02-body-tension.webp`
  (the flat, transparent-rounded-corner cutout from the walkthrough,
  same source used in "The Flow") into that quad with a real
  perspective homography (not just a rotation — this mockup has
  genuine 3D perspective skew) and alpha-pasted it over the original
  Welcome content. **Pure-Python homography, no numpy**: wrote a small
  Gaussian-elimination linear solver for the 8-coefficient system PIL's
  `Image.PERSPECTIVE` needs; the standard "find_coeffs" recipes floating
  around online are inconsistently documented about which points are
  pa vs. pb — got it backwards on the first attempt (content rendered
  wildly oversized, spilling past the bezel) before fixing the
  row-construction to put the *output/destination* quad coordinates
  first. Checked all 4 edges zoomed in after the fix — bezel curvature,
  the dynamic-island cutout, and the home-indicator bar all line up
  cleanly with no old-content bleed. **Same cache-busting rename as
  Kippo's fix**: overwriting `mockup-hero.webp` in place kept serving
  the old Welcome image (Next's image optimizer caches by URL) even
  after a reload, so the file is now
  `public/images/aligned/mockup-hero-bodytension.webp` and
  `aligned.ts`'s `bannerImage` points at the new name. Script is
  scratchpad-only (`aligned2/` — corner-detection + homography-solve +
  warp-and-composite, three short passes to get right); re-run it
  against a fresh screenshot if this mockup ever needs to change again.
- **Resolved (Trust strip removed, 2026-09-23)**: per explicit user
  request — those brand wordmarks were from modeling/campaign work,
  not design/dev clients, and sitting right under the "Front-End
  Developer & Product Designer" hero read as misrepresenting client
  relationships that don't exist. `TrustStrip.tsx` deleted; `page.tsx`
  no longer imports or renders it. See the superseded "Trust strip"
  entry under Visual design direction above for the full note.
- **Resolved (Kippo's top Figma link removed, 2026-09-23)**: per
  explicit user request, dropped `kippo.ts`'s `links` field (the
  "View Figma prototype" link that showed in the case-study header's
  Links column). The header now shows "Private / not yet public" for
  Kippo, same fallback every other project on the shared template uses
  when it has no `links` — consistent with Aligned, Spruce, and
  Trends. The Figma file itself wasn't touched, only the header link;
  if the user wants it referenced elsewhere on the page later (e.g. in
  the Solution or Design process section body text) that's a separate,
  smaller ask.
- **Resolved (testimonial attribution removed, 2026-09-22)**:
  `Testimonial.tsx`'s quote had a `<cite>` line reading "Creative
  Partner" — flagged as unverified placeholder attribution back on
  2026-09-17 and never replaced with a real one. Removed it outright
  per explicit user request rather than leaving a placeholder; the
  quote itself stays (still unverified — see the open item below).
- **Resolved (real Contact section with an inquiry form, 2026-09-22)**:
  the "Contact" section was previously just a bare centered heading +
  mailto link + social links, living inside `Footer.tsx` (`id="contact"`,
  no card, no way to leave a message beyond composing your own email).
  New `Contact.tsx` — a two-column card (`bg-sand`, `border-border`,
  matches the Testimonial section's `md:grid-cols-[1fr_1.5fr]`-style
  split): left side keeps the direct email + social links, right side
  is a real form (Name, Email, "What do you need help with?" — reusing
  the 5 real Services names as options, plus "Something else" — and a
  project-description textarea). **No backend, no third-party account**:
  submitting builds a `mailto:designtaino@gmail.com` link with the
  form fields folded into the subject/body and hands off to the
  visitor's own email client (`window.location.href = mailto:...`) —
  deliberately avoided wiring up a form-backend service (Resend,
  Formspree, etc.) since that would need an account/API key only the
  user can create (account creation is off-limits for Claude to do on
  someone's behalf). A short confirmation line appears after
  submitting ("Opening your email app..."). `id="contact"` moved from
  `Footer.tsx` to this new component (still the only `#contact` anchor
  in the codebase, nav links unaffected); `Footer.tsx` is now just the
  copyright line. Both `Contact` and `Footer` render globally from
  `layout.tsx` (same place `Footer` always did), so the form now
  appears at the bottom of every case-study page too, not just the
  homepage. Verified: two-column at desktop width (≥768px, confirmed
  at 1200px), stacks on mobile (375px, no horizontal overflow), and a
  scripted form-fill + submit confirmed the mailto-link handler and
  confirmation message both fire correctly.
- **Resolved (full name in the testimonial quote, 2026-09-22)**:
  `Testimonial.tsx`'s quote said "Yadan brings rare clarity..." — the
  only bare "Yadan" (no "Taino") in that section — now "Yadan Taino
  brings rare clarity...". The photo's alt text already said "Yadan
  Taino"; only the visible quote text needed the fix.
- **Resolved (Spruce homepage-card blurb matched to the new tagline,
  2026-09-22)**: the same rewrite that landed on the case-study
  `tagline` this session ("A two-sided marketplace where customers and
  providers find each other...") hadn't propagated to the homepage
  card, which reads a separate field (`outcomeSummary`) and still said
  the older "Architected an AI-assisted marketplace where the model
  can propose but never invent..." line. Condensed the same two-sided
  + filter + AI-matching framing into one shorter sentence for the
  card: "A two-sided marketplace where customers and providers find
  each other — filter fast, or just describe what you need and let AI
  find the right match." Now the card (before the click) and the
  case-study header (after) tell the same story. Reminder for next
  time a project's positioning changes: `tagline` and `outcomeSummary`
  are two separate fields on `WorkContent` — `CaseStudyHeader` reads
  `tagline`, `WorkCard` reads `outcomeSummary` — so a copy change
  meant to apply "everywhere" needs both touched explicitly.
- **Resolved (Spruce case-study tagline rewritten, 2026-09-22)**:
  replaced the one-sentence tagline ("A two-sided home-services
  marketplace — customers find trusted providers, providers manage
  bookings and get paid.") with a two-sentence version per the user's
  own framing: sentence 1 covers the two-sided marketplace plus real
  filtering (service type, price, availability — all genuinely visible
  in the app's own UI, see the mockup screenshots); sentence 2 covers
  the AI matching chat, framed as the user described it — describe
  what you need in plain language instead of searching, and it
  surfaces the right provider. Not overclaiming beyond the verified
  architecture (Case study evidence → Spruce, intent/match
  separation): the AI extracts search terms, a deterministic module
  does the actual matching. `tagline` only — this is the case-study
  header subtitle; the homepage card's own subtitle
  (`outcomeSummary`) is a separate field and wasn't touched.
- **Resolved (page background white, hero head-crop fixed, 2026-09-22)**:
  two site-wide visual fixes from the same request. (1) `--color-cream`
  changed from beige `#F5F0E8` to pure white `#FFFFFF` — see the
  updated Palette entry in Visual design direction above for the full
  reasoning. (2) The Hero photo's top of head was getting cropped off
  on wide/short viewports — `min-h-screen` + `object-cover` with the
  browser's default center object-position crops symmetrically
  top-and-bottom, and on a wide desktop window that box is short
  enough relative to the (tall, portrait-orientation) source photo
  that the crop line lands above the hairline. Confirmed by screenshot
  at both mobile (375px, head fully visible, "so it looked fine there)
  and desktop width (≈800px tall box, top of head visibly clipped).
  Fix: added `object-top` to the image's className in `Hero.tsx` —
  anchors the image's top edge to the box's top edge, so cropping only
  ever removes from the bottom (more of the jacket/body on short
  boxes) and the head is guaranteed in frame at any viewport height,
  not just the ones tested. Confirmed at both mobile and desktop after
  the fix.
- **Resolved (Trends "01/The Challenge" rewritten as a fuller story,
  2026-09-22)**: replaced the short, logistics-only paragraph
  ("Trends LIC runs fast...") with a longer narrative dictated by the
  user, cleaned up into portfolio prose but keeping their actual
  points and order: inventory management is messy for any retailer,
  not just customer-facing but the backend system underneath it;
  cannabis makes that sharper — strict protocols and New York's Office
  of Cannabis Management (OCM) compliance rules add oversight most
  retail doesn't carry; at Trends LIC specifically, that pressure hit
  hardest when the store got busy and staff were split between
  helping customers up front and getting shipments labeled in the
  back at the same time; the paragraph then names **Trends Studio**
  directly as the system built to close that gap (Front Stock +
  Back Stock, one place); closes on the user's own framing that the
  same problem — and the system's usefulness — generalizes to other
  dispensaries and retail operations, worded as design intent
  ("designed with that kind of reuse in mind"), not a deployment
  claim, since it's not actually in use anywhere but Trends LIC.
  OCM/Metrc are referenced as real regulatory context, consistent
  with the Metrc Tag field already verified in "Case study evidence"
  below. Only `trends.ts`'s `problem` field changed — the hero
  screenshot, stat banner, and legacy-laptop photo alongside it are
  unchanged and still render fine next to the longer text (checked at
  desktop and 375px mobile, no overflow).
- **Resolved (Aligned's "The Flow" — dropped the first number, made
  Home stand out, 2026-09-22)**: two related changes to the shared
  `walkthrough` renderer in `CaseStudyBento.tsx` (so both apply to any
  future project using this field, not just Aligned):
  1. The first tile no longer shows a number — confirmed with the
     user this was about the walkthrough step tags specifically
     ("01 / ONBOARDING" on Welcome, "02 / ONBOARDING" on Body
     tension, etc.). Now the first tile is bare "ONBOARDING" and
     numbering starts at "1" on the second tile ("1 / ONBOARDING" on
     Body tension, …, "6 / SESSION" on the last one) — i.e. label is
     `i === 0 ? step.group : \`${i} / ${step.group}\`` instead of the
     old zero-padded `i + 1`.
  2. New optional `featured?: boolean` on `WalkthroughStep`
     (`types.ts`) — set `true` on Aligned's Home step (what the user
     calls "screen 5," the daily-use screen with the streak and
     Start-session button) per their explicit ask to make "one of our
     most important screens" get noticed fast. A featured tile gets
     `sm:col-span-2` (full-width at the 2-col breakpoint, half-width
     at 4-col), an accent-tinted bordered card background, a larger
     phone image (280px vs 240px), and a small amber "★ Most-used
     screen" pill above the image. The 7-step + 1-note grid still
     packs cleanly into full rows with the one 2-wide tile in the
     mix (checked: row 1 = the 4 remaining single-width Onboarding
     tiles, row 2 = Home(2-wide) + Session intro + Session complete,
     row 3 = the closing note tile alone) — confirmed on the live
     page, no gaps or overflow.
- **Resolved (Solution/Design System widths swapped, 2026-09-22)**:
  on the shared `CaseStudyBento` template, when a project has both an
  architecture card and a `designSystem`, The Solution used to be the
  narrow `sm:col-span-1` box and Design System the wide
  `sm:col-span-2` one — now reversed (Solution `sm:col-span-2`, Design
  System plain `col-span-1`), so the process narrative gets the wider
  box and the token swatches sit in the smaller one. Affects every
  project on this template that ships a `designSystem` — currently
  Aligned and Spruce (Kippo has no `designSystem`, so its Solution
  card still gets the full `sm:col-span-3` it always had when
  `hasDesignSystem` is false). Checked both on the real page: Spruce's
  6 tokens still wrap cleanly in the narrower box.
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
- **Superseded 2026-09-23** — see the newer entry above: the phone's
  on-screen content changed from Welcome to Body tension, filename
  renamed to `mockup-hero-bodytension.webp`. Everything below about
  the velvet-mockup scene, the badge removal, and the unused
  video/embed options is still accurate background, just describes
  the Welcome-screen version of the same photo.
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
- **Resolved (feature brief, 2026-09-02)**: About page now has an Overview + Skills credential timeline (`CredentialTimeline.tsx`) and an identity toggle (`IdentityToggle.tsx`), per `madebytainofeaturebrief.md`. Real photo assets live in `public/images/identity/`. **Not yet built from that brief**: item 3 (per-project `<InteractiveMockup>` hover component) — still waiting on a screen recording; brief suggests prototyping on Ticket Triage first since it has a live demo. Item 4 (chatbot) is explicitly parked for later.
- **Resolved (Designer + Builder merged, mockups dropped, 2026-09-22)**:
  was a 3-way Designer/Builder/Fashion toggle; per explicit user
  request, Designer and Builder are now one tab, **"Designer /
  Builder"** (`key: "designer-builder"`), and its two Aligned/Kippo
  project-mockup photos are gone — it now shows only the real Pursuit
  cohort/classroom photos that used to live under Builder alone (the
  ones the user asked for: "photos of me and classmates and teacher").
  Kept that tab's badge ("Pursuit Software Development AI Program —
  Building & Shipping in Public") and wrote a combined tagline
  ("Designing systems, not just screens — learning in public, shipping
  in public.") folding both original taglines into one. **Fashion tab
  is untouched**, per explicit instruction to "keep the fashion one
  the way that it is" — same 3 photos, same tagline, same 3-column
  layout. Net effect: toggle is now 2 tabs instead of 3.
  `public/images/work-aligned.jpg` is now fully unused sitewide (it
  was already superseded as Aligned's own case-study hero by
  `mockup-hero.webp`, and this was its last remaining consumer) — file
  stays on disk, same "don't delete, just stop referencing" pattern
  used for other superseded one-off assets in this doc.
- **Known bug worth remembering**: `AnimatePresence` (from the `motion` package) never completed its exit animation in this dev environment — confirmed across a server restart, `.next` cache clear, and fresh tabs, so it wasn't stale HMR state. If a future feature needs an exit-then-enter crossfade, don't assume `AnimatePresence` "just works" here without testing the unmount actually happens; `IdentityToggle` was rewritten to a plain fade-in (no exit tracking) to route around it.
- Kippo and Ticket Triage work cards still show a bordered placeholder box on the homepage grid (no `bannerImage` set in their content files yet) — Aligned has a real image; Kippo has a real image too via its case-study banner but the *homepage card* itself doesn't reuse it yet; 311 Insights has no image at all (Spruce got one 2026-09-19, see Known gaps). Worth wiring `bannerImage` into more of the content files.
- 311 Insights' case-study page has real problem/mechanics content but no `architecture` or `designSystem` card yet, and no hero image — it's the one project still clearly reading as "in progress."
- Testimonial section quote is still placeholder copy, not a real testimonial. **The portrait image is real now** (resolved 2026-09-17): `public/images/testimonial-portrait.jpg`, copied from `Picture of me in suit.JPG` at the repo root per explicit user request — a real full-body mirror-selfie portrait, default `object-cover`/center-crop keeps the face and suit in frame. **The "Creative Partner" attribution is gone (resolved 2026-09-22)**, removed outright rather than left as a placeholder — the quote text itself is still unverified/placeholder, don't treat it as real until the user confirms an actual testimonial to replace it with.
- Trust strip uses text-only placeholder wordmarks, not real logos — needs real logo assets and confirmed client permission before launch.
- **Resolved (Vercel now serving the real Next.js app, 2026-09-23)**:
  root cause matched the 2026-09-19 diagnosis below — the Vercel
  **project** (name: `personal-website`, under the `yadan-taino`
  team/scope — findable at `vercel.com/yadan-taino/personal-website`;
  don't confuse with the *Claude Code session* also nicknamed "Yadan
  Taino portfolio site" in an unrelated sidebar) had **Framework
  Preset = "Other"** left over from the pre-migration plain-HTML site.
  User fixed it themselves in the dashboard (Project → Settings →
  Build and Deployment → Framework Preset → **Next.js**, left Build/
  Output/Install Command overrides off so Vercel uses Next.js
  defaults) walked through step by step over several screenshots
  since Vercel's nested Team-Settings-vs-Project-Settings-vs-General-
  Settings-vs-Build-and-Deployment navigation is genuinely confusing
  from screenshots alone — then triggered **Deployments → (latest) →
  ⋯ → Redeploy** to rebuild the existing commit under the corrected
  settings. **Verified with `curl` after the redeploy finished**
  (2026-09-23): `/`, `/work/kippo`, `/work/aligned` all return `200`
  (previously all `NOT_FOUND`); response HTML now contains real
  `_next/static/...` JS/CSS chunk references and the correct `<title>`
  tag; spot-checked that it's serving *today's* build specifically,
  not a stale cached one, by confirming the Trust strip is absent, the
  Contact form ("Send inquiry") is present, Kippo's Figma link is
  absent, and Aligned's hero references
  `mockup-hero-bodytension.webp` — all same-day changes. Confirmed
  canonical production domain is indeed
  `yadan-taino-personal-website.vercel.app` (matches what's already
  hardcoded in `layout.tsx`'s metadata) — the other domain Vercel
  showed during this process,
  `personal-website-9id8rzrd0-yadan-taino.vercel.app`, is just that
  one deployment's own auto-generated alias, not something to
  reference anywhere. **No further action needed** on this — every
  future `git push` to `main` should now deploy correctly without
  repeating this fix.
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
