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
   - **AI Workflows & Interactive Systems**: Spruce, Ticket Triage — MVP
   - **Data-Driven MVPs & Product Engineering**: Trends (label-printing
     workflow tool) — **replaced 311 Insights here 2026-09-14**, per
     explicit user decision. 311 Insights' content file
     (`src/content/work/insights-311.ts`) is NOT deleted, just removed
     from `workIndex.ts` — it's real, verified work, just not on the
     current homepage roster. Restore it (add back to `workIndex.ts`)
     if asked, rather than rewriting it from scratch.
5. Testimonial
6. About (with a lightweight "Currently" tag strip near the top)
7. FAQ
8. Contact

Nav labels: About, Projects, Contact — desktop nav always visible;
mobile (<768px) uses a hamburger that opens a full-screen drawer
(`src/components/MobileDrawer.tsx`) — this replaced the earlier
"no mobile hamburger menu" rule during the migration.

### Case-study pages (added 2026-09-02, headers/architecture revised 2026-09-15)
Live at `/work/[slug]`, one reusable Bento Grid template
(`src/components/CaseStudyBento.tsx`) driven by typed content files in
`src/content/work/*.ts`. Structure: editorial header (tag pills, serif
title, 4-column Role/Timeline/Tech Stack/Links metadata), then an
asymmetrical 3-column grid — full-bleed hero media, an optional video
embed (Spruce's Loom walkthrough) or Before/After operational grid
(Trends) right below the header, **The Challenge** (was "01/The
Problem"), **The Insight** (was "02/Human Insight", dark accent card),
**The Solution** (was "03/Technical Architecture or Design Process"),
**Design System** (was "04/Design System Tokens" — only rendered when
a project has its own documented design system: Aligned and Spruce do,
Kippo and Ticket Triage don't, so the card is simply omitted for
them), and an **Impact** 3-up mechanics row (was "Key Mechanics &
Impact"). **2026-09-15: raw code snippets removed sitewide** — the
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

All 5 case studies (Kippo, Aligned, Spruce, Ticket Triage, 311
Insights) ship with real content sourced from "Case study evidence"
below — 311 Insights is the one still marked lighter/in-progress since
its full write-up isn't built yet, same honest-placeholder principle
used everywhere else on this site.

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

## Known gaps (as of 2026-09-15, second pass)
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
- Kippo and Ticket Triage work cards still show a bordered placeholder box on the homepage grid (no `bannerImage` set in their content files yet) — Aligned has a real image; Kippo has a real image too via its case-study banner but the *homepage card* itself doesn't reuse it yet; Spruce and 311 Insights have no image at all. Worth wiring `bannerImage` into more of the content files.
- 311 Insights' case-study page has real problem/mechanics content but no `architecture` or `designSystem` card yet, and no hero image — it's the one project still clearly reading as "in progress."
- Testimonial section quote is still placeholder copy, not a real testimonial.
- Trust strip uses text-only placeholder wordmarks, not real logos — needs real logo assets and confirmed client permission before launch.
- Vercel build settings should be confirmed to pick up the Next.js framework automatically after this migration's push — not yet verified against the live deployment.
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
- **Kippo**: full Google-style UX process exists in the 24-slide deck — problem
  statement, persona ("Sarah"), user research summary, pain points, paper
  wireframes → digital wireframes → low-fi prototype → usability study (4
  participants, round 1 + round 2 findings) → mockups with explicit
  before/after reasoning (e.g. added Boys/Girls/Infants category icons after
  users showed navigation hesitation). Figma prototype links are in the deck.
  Also involved actual mobile app development (not just static comps) using
  HTML/CSS/JS.
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
