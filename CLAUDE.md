# CLAUDE.md

## What this is
Personal portfolio site for Yadan Taino (Made by Taino), a Creative Director & Product Designer in NYC.

## Purpose
- Pursuit AI-Native program Cycle 1 assignment — deploy to Vercel with a clean commit history.
- A real business asset (not just a class exercise) — should be presentable to clients/employers.

## Positioning
- **Final niche wording (locked): "health & wellness, lifestyle, and tech."** Always use this exact phrase everywhere the niche is mentioned (hero, About, Selected work, meta/SEO tags). Do not revert to earlier variations like "fashion" or "wellness, lifestyle, and fashion."
- "I design and ship digital products for health & wellness, lifestyle, and tech brands — from concept to live product."
- Key differentiator line: "Industries I don't just design for — I live in them."
- Selected Work intro line: "My focus is health & wellness, lifestyle, and tech — from fitness and recovery to skincare to the tools I build. Industries I don't just design for — I live in them."
- Do NOT use the title "Developer." Use **Creative Director & Product Designer**. This is a deliberate decision (confirmed 2026-07-27), not an oversight — see "Full-stack / dev work" below before changing it.

### Full-stack / dev work
The primary title remains "Creative Director & Product Designer." Do not use
"Developer" as a top-level title or rewrite the homepage positioning around
development.

Relevant case studies may demonstrate:
- frontend and backend implementation
- technical architecture
- AI-assisted development
- prototyping
- technical constraints and tradeoffs
- how design decisions were translated into working products

These capabilities should appear as evidence inside project narratives, not
as a replacement for the primary identity.

### About section copy
1. "I'm Yadan Taino — a Creative Director and Product Designer based in New York City."
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
2. Services ("what I offer" — tagline + accordion list)
3. Selected work / Projects (flagship project: **Aligned** — a recovery/movement app built with a licensed physical therapist)
4. Testimonial
5. About
6. Contact

Nav labels: About, Projects, Contact — no mobile hamburger menu; nav is always visible.

Simple HTML/CSS/JS. Mobile-friendly.

### Visual design direction (locked 2026-08-06)
Reference: clay.global (UX/branding agency site) — the user explicitly wants
this look and feel, not just its "Digital Products / Development /
Generative AI" service naming.
- **Palette**: warm-light, not stark white — keep the existing cream body
  background (`#f2f1ed`). Black, bold headlines. No dark/black full-bleed
  sections anymore (the Services section used to be `#111` — now light,
  matching the rest of the page).
- **Accent color**: muted clay/terracotta (`#b5652f`), replacing the old
  bright orange-red (`#e2542b`). Used sparingly (e.g. service numbers),
  not as a dominant color.
- **Placeholders**: soft bordered neutral (`#ece6d8` bg, `#ddd4bf` border),
  not a flat solid gray block.
- **Services section**: text-only accordion (name + one-paragraph
  description), no image box per service — matches clay.global's pattern.
  Visual/case-study proof lives in the Selected work cards, not here.

## Known gaps (as of 2026-08-06)
- Work cards (Selected work) aren't clickable — no case-study detail view exists yet. Need a pattern that can hold both the creative/brand narrative and the technical/full-stack narrative per project (see "Full-stack / dev work" above).
- Work cards need skill/service tag chips (e.g. "UX/UI · Branding · Development", clay.global-style) plus a brief one-line description under each — requested 2026-08-06, not yet built.
- A real 24-slide Kippo case-study deck exists at `Kippo App Case Study PNG/` in the project root (untracked) — not yet wired into the site. This is the next concrete content piece to build the case-study pattern around.
- Work cards Kippo, Anna Museo, and Campaign work still show gray placeholder boxes — no images yet.
- Testimonial section quote is placeholder copy, not a real testimonial.
- A set of 4 enhanced Kippo screens (Home, Category, Product Detail, Confirmation) exist as Claude Design exports at `~/Downloads/Kippo Mobile App Enhancement.zip` — real "after" visuals for the Kippo case study, not yet pulled into the project.

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

## Working style
- Yadan is learning to code — explain changes in plain language, including *why*, not just *what*.
- Make small, incremental changes. Never make giant multi-file changes in one step.
- Commit after each completed section with a clear commit message.
