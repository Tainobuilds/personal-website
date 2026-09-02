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
One page, in this order (updated 2026-08-06 — leads with capabilities
before the personal story, inspired by clay.global):
1. Hero (headline, subline, availability badge, scroll hint)
2. Trust strip (placeholder brand wordmarks)
3. Services ("what I offer" — tagline + accordion list)
4. Selected work / Projects (flagship project: **Aligned** — a recovery/movement app built with a licensed physical therapist)
5. Testimonial
6. About (with a lightweight "Currently" tag strip near the top)
7. FAQ
8. Contact

Nav labels: About, Projects, Contact — no mobile hamburger menu; nav is always visible.

Simple HTML/CSS/JS. Mobile-friendly.

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

### Visual design direction (locked 2026-08-06, palette refined 2026-08-24)
Reference: clay.global (UX/branding agency site) — the user explicitly wants
this look and feel, not just its "Digital Products / Development /
Generative AI" service naming.
- **Palette (refined 2026-08-24)**: warm neutral, named tokens —
  Cream `#F5F0E8` (page background, replaces the earlier `#f2f1ed`),
  Sand `#EDE8DF` (secondary surface), Dark `#2C2A24` (headline/body
  text, replaces pure `#111111`), Muted `#7A7468` (secondary text,
  replaces `#a39d8c`), Border `#E8E3DA` (replaces `#ddd4bf`). Still
  warm-light, not stark white; still black-feeling but warmer than
  pure black.
- **Accent color**: muted clay/terracotta (`#b5652f`) — unchanged,
  still used sparingly (service numbers, CTA links), not as a
  dominant color.
- **Typography (added 2026-08-24)**: editorial serif for case-study
  headlines/titles, clean sans-serif for body copy — a pairing, not
  the single system-sans stack used elsewhere on the site. Confirm
  exact serif choice before implementing (not yet specified).
- **Placeholders**: soft bordered neutral using the Sand/Border tokens
  above, not a flat solid gray block.
- **Services section**: text-only accordion (name + one-paragraph
  description), no image box per service — matches clay.global's pattern.
  Visual/case-study proof lives in the Selected work cards, not here.

## Known gaps (as of 2026-08-06)
- Work cards (Aligned, Kippo, 311 Insights, Ticket Triage — MVP) now have outcome copy, tags, and a "View case study" CTA, but no actual case-study detail view exists yet to link to. Kippo's CTA points to its Figma prototype and Ticket Triage's CTA points to the live Vercel app as interim real destinations; Aligned and 311 Insights show a muted "coming soon" state since they have no public destination yet. Need a pattern that can hold both the creative/brand narrative and the technical/full-stack narrative per project (see "Full-stack / dev work" above).
- Kippo and 311 Insights work cards still show gray placeholder image boxes — no images wired in yet (Aligned has a real image; Ticket Triage still needs one too).
- A real 24-slide Kippo case-study deck exists at `Kippo App Case Study PNG/` in the project root (untracked) — not yet wired into the site. This is the next concrete content piece to build the case-study pattern around.
- Testimonial section quote is placeholder copy, not a real testimonial.
- A set of 4 enhanced Kippo screens (Home, Category, Product Detail, Confirmation) exist as Claude Design exports at `~/Downloads/Kippo Mobile App Enhancement.zip` — real "after" visuals for the Kippo case study, not yet pulled into the project.
- Trust strip uses text-only placeholder wordmarks, not real logos — needs real logo assets and confirmed client permission before launch.

## Case study evidence (for Development / Generative AI / UI-UX case studies)
Concrete proof points to draw on when writing case studies — confirmed 2026-08-06:
- **Kippo**: full Google-style UX process exists in the 24-slide deck — problem
  statement, persona ("Sarah"), user research summary, pain points, paper
  wireframes → digital wireframes → low-fi prototype → usability study (4
  participants, round 1 + round 2 findings) → mockups with explicit
  before/after reasoning (e.g. added Boys/Girls/Infants category icons after
  users showed navigation hesitation). Figma prototype links are in the deck.
  Also involved actual mobile app development (not just static comps) using
  HTML/CSS/JS.
- **Aligned**: also involved actual mobile app development using HTML/CSS/JS,
  not just design comps — same "designed AND built" story as Kippo.
- **`~/pursuit-311-insights`**: real open-source live data (NYC 311 Socrata
  API), used to surface actual insights — concrete evidence for Development
  and Generative AI (AI-assisted build process).
- **`~/support-ticket-sorter`** ("Ticket Triage — MVP"): a real deployed
  (Vercel) product — automatically categorizes support tickets, scores
  urgency, flags SLA risk, enforces a "critical floor" priority rule modeled
  on a real incident. Logic lives in `sorting.js`, kept separate from the UI
  — good evidence of real engineering practice, not just a demo. Strong
  Development/Generative AI case study candidate; not yet linked from the
  portfolio site.
- **`~/tasklocal-provider-chatbot`** ("TaskLocal AI Matcher," added
  2026-08-21, still in progress — confirmed real via repo inspection, not
  from user description alone): Next.js 16 + Tailwind + React 19 app with
  a `MatchingChatbot` (intent + synonym matching logic) and a
  `ProviderDashboard` (SLA trust badges, booking ledger, quick-filters,
  real-time event sync). Commit history shows a Thumbtack-style guided
  intake flow. Companion repo `~/tasklocal-shared-data` holds JSON
  fixtures (listings, bookings, providers, reports). Not deployed
  anywhere public yet — confirm a live URL or screenshots before writing
  the case study card.

## Working style
- Yadan is learning to code — explain changes in plain language, including *why*, not just *what*.
- Make small, incremental changes. Never make giant multi-file changes in one step.
- Commit after each completed section with a clear commit message.
