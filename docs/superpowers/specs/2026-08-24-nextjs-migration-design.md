# Next.js + Tailwind Migration — Design

## Purpose

Migrate the personal portfolio from static HTML/CSS/JS to Next.js (App
Router) + Tailwind CSS + TypeScript, while strictly preserving the
existing warm-light, Clay-inspired editorial visual identity (see
`CLAUDE.md` → "Visual design direction"). Bundled with the migration:
a positioning change (new title/hero bio, confirmed 2026-08-21), a new
3-pillar homepage information architecture, and a reusable dynamic
case-study template.

This is a full rebuild, not a 1:1 port — the goal is a codebase that
scales as more case studies get written, without re-copying
header/footer markup into every new page (the problem `kippo.html`
already has).

## Positioning (confirmed, not open for this spec)

- Title: **"AI-Native Product Designer & Frontend Developer"**
- Hero bio: **"Product Designer & Frontend Engineer building AI-native
  tools, frictionless workflows, and high-craft digital experiences
  that people trust and love to use."**
- Source of truth: `CLAUDE.md` → Positioning section (updated
  2026-08-21). Any copy elsewhere in this spec that repeats these
  lines must stay byte-identical to CLAUDE.md — CLAUDE.md wins on
  conflict.

## Tech stack

- **Next.js, App Router** (latest stable) — matches the ecosystem
  default and `~/tasklocal-provider-chatbot`'s setup.
- **TypeScript** — confirmed 2026-08-21, matches TaskLocal, matches
  the new "Frontend Developer" positioning.
- **Tailwind CSS** — confirmed. Config translates the existing design
  tokens (see "Design tokens" below) rather than starting from
  Tailwind's defaults.
- No CMS, no database. Content is TypeScript data files committed to
  the repo, same trust model as the current hand-written HTML.

## Migration approach

Convert this repo in place:
1. Add `package.json`, `next.config.ts`, `tsconfig.json`, Tailwind
   config.
2. Move `images/` and `assets/` into `public/`, keeping the same
   relative sub-paths (`public/images/...`, `public/assets/...`) so
   existing `<img src>` references only need an updated root, not a
   full path rewrite.
3. Build `src/app/layout.tsx`, `src/app/page.tsx`, and
   `src/app/work/[slug]/page.tsx` fresh, porting real copy from
   `index.html`/`kippo.html`/`CLAUDE.md` — not auto-converting the old
   HTML.
4. Delete `index.html`, `kippo.html`, `styles.css`, `script.js`,
   `.claude/launch.json`'s static-site entry once the Next.js version
   is verified working locally.
5. One cutover commit/PR, not a long-lived hybrid state. Vercel
   auto-detects the framework change on push — no dashboard
   reconfiguration expected, but this should be confirmed once
   deployed (see "Open follow-ups").

## Project structure

```
src/
  app/
    layout.tsx              Root layout: <html>, global nav, footer, fonts
    page.tsx                Homepage
    globals.css              Tailwind directives + any base overrides
    work/
      [slug]/
        page.tsx            Case study template (dynamic route)
        not-found.tsx        Unknown slug → 404
  components/
    Header.tsx              Logo, nav, mobile drawer
    Footer.tsx               Editorial footer (contact, social links)
    MobileDrawer.tsx         Responsive nav drawer
    Hero.tsx
    TrustStrip.tsx
    Services.tsx             Accordion, reuses existing copy from CLAUDE.md
    Pillar.tsx                One of the 3 homepage pillar groups
    WorkCard.tsx              Single project card (used inside Pillar)
    Testimonial.tsx
    About.tsx                 Includes the "Currently" tag strip
    Faq.tsx
  content/
    work/
      kippo.ts                Full 5-step content (real)
      aligned.ts               Stub: hero/pitch only, rest "coming soon"
      insights-311.ts          Stub
      ticket-triage.ts         Stub
      tasklocal.ts              Stub
    workIndex.ts               Array of { slug, pillar, ...WorkSummary } for homepage cards + [slug] lookup
  lib/
    workData.ts                getAllWork(), getWorkBySlug() helpers
public/
  images/                     (moved from images/)
  assets/                     (moved from assets/)
  favicon.svg, robots.txt, sitemap.xml
```

Component boundary rule (per the isolation principle): every component
in `src/components/` takes props and renders — no component reaches
into `src/content/` directly except `page.tsx` files, which fetch data
and pass it down. This keeps components testable/reusable independent
of where the content lives.

## Design tokens (Tailwind config)

Ported directly from `styles.css`, not reinterpreted:

| Token | Value | Current use |
|---|---|---|
| `background` (cream) | `#f2f1ed` | Body background |
| `foreground` (ink) | `#111111` | Headlines, body text |
| `accent` (clay) | `#b5652f` | Service numbers, CTA links, "active" states |
| `placeholder-bg` | `#ece6d8` | Placeholder image boxes |
| `placeholder-border` | `#ddd4bf` | Placeholder image boxes |
| `muted` | `#a39d8c` | Secondary text (tags, closed accordion items) |

Typography: current site uses system sans (Helvetica Neue/Arial) with
bold/800-weight headlines. Keep the same font stack in Tailwind's
`fontFamily.sans` — no new webfont introduced by this migration. (If a
serif/sans editorial pairing is wanted per the "high-contrast
serif/sans-serif typography" note in the original request, that's a
separate follow-up, not bundled into this migration — see "Out of
scope.")

## Homepage architecture

`src/app/page.tsx` composes, in order (same order as today, per
`CLAUDE.md` → Site structure, which does not change in this migration):

1. `<Hero />` — new title/bio, same portrait photo, same badge/scroll-hint pattern
2. `<TrustStrip />`
3. `<Services />`
4. Selected work — **replaces** the current flat 4-card grid with 3
   `<Pillar />` groups, each rendering its `<WorkCard />`s:
   - Pillar 1 — High-Craft Visual Design & Prototyping: Kippo, Aligned
   - Pillar 2 — AI Workflows & Interactive Systems: TaskLocal AI
     Matcher, Ticket Triage — MVP
   - Pillar 3 — Data-Driven MVPs & Product Engineering: 311 Insights
5. `<Testimonial />`
6. `<About />` (with Currently tags)
7. `<Faq />`
8. Footer (in `layout.tsx`, not `page.tsx`, since it's shared with
   `/work/[slug]`)

`WorkCard` keeps the existing pattern (name → outcome sentence → skill
tags → CTA), now always linking to `/work/[slug]` instead of mixed
external/internal/disabled links — see "CTA behavior" below.

**Aligned naming:** kept as "Aligned" (the real product name), not
genericized to "Physical Therapy App Prototype" — flagged in chat,
no objection raised, proceeding on that basis. The PT-built framing
becomes supporting copy, not the headline name.

## Case study template (`src/app/work/[slug]/page.tsx`)

One component, driven entirely by the `WorkContent` data shape below.
Five sections, matching the requested template:

```ts
type WorkContent = {
  slug: string;
  pillar: 1 | 2 | 3;
  status: "full" | "coming-soon"; // gates sections 2-5
  hero: {
    title: string;
    pitch: string;               // editorial headline/subline
    roleTags: string[];          // e.g. ["UX Research", "AI Prompting", "Next.js/Tailwind"]
    bannerImage?: string;
    bannerVideo?: string;        // e.g. Kippo's existing hero video
  };
  bottleneck?: {                  // Step 2 — omitted when status: "coming-soon"
    friction: string;
    insight: string;
  };
  system?: {                      // Step 3
    cards: { title: string; body: string; image?: string }[];
  };
  showcase?: {                    // Step 4
    items: { image?: string; video?: string; caption?: string }[];
  };
  takeaways?: {                   // Step 5
    outcomes: string[];
    technical: string[];
  };
  externalLink?: { label: string; href: string }; // e.g. Kippo's Figma prototype
};
```

`status: "coming-soon"` pages render Hero + Pitch (step 1) plus the
same "full write-up coming soon" note pattern already approved for the
Aligned/311 homepage cards, instead of sections 2-5. This is the same
honest-placeholder principle already established on this site — no
fabricated process content for projects that don't have it yet.

**Kippo** ships with `status: "full"` and real content from the
24-slide deck + enhanced screens already in the repo (persona, pain
points, wireframe→mockup iteration with the Boys/Girls/Infants icon
decision, usability study rounds, the existing hero video).

**Aligned, 311 Insights, Ticket Triage — MVP, TaskLocal AI Matcher**
ship with `status: "coming-soon"` this pass.

## CTA behavior

Every `WorkCard` "View case study" link points to `/work/[slug]` —
no more mixed external links (Kippo's Figma, Ticket Triage's Vercel
app) or disabled/muted spans. Those external links move into each case
study's `externalLink` field and render as a secondary link on the
`coming-soon` (or full) page itself, not as the card's primary CTA.
This removes the `.is-disabled` / `.active` CSS-class split entirely —
every card becomes a real, working link.

## Data flow

- `src/content/work/*.ts` — one typed object per project, hand-written.
- `src/content/workIndex.ts` — imports all of them into one array,
  used by both the homepage (grouped by `pillar`) and
  `generateStaticParams()` in `[slug]/page.tsx`.
- `src/lib/workData.ts` — `getAllWork()`, `getWorkByPillar(n)`,
  `getWorkBySlug(slug)`. Pages call these; no component imports
  `content/` directly.
- Fully static — `generateStaticParams()` pre-renders every known
  slug at build time. No runtime data fetching on these pages.

## Error handling

- Unknown `/work/slug-that-doesnt-exist` → Next's `notFound()` →
  `not-found.tsx`, styled consistently with the rest of the site
  (not the default Next.js 404).
- Missing optional fields (e.g. no `bannerVideo`) → component falls
  back to `bannerImage`, or omits the media block entirely. No broken
  `<video>`/`<img>` tags with empty `src`.

## Testing approach

No test framework introduced in this pass (matches the "no build step
before" simplicity principle, just applied to Next.js instead of
static files). Verification is manual: run `next dev`, click through
every nav link and every `WorkCard` → case-study page, confirm the
`coming-soon` pages render cleanly, confirm mobile drawer opens/closes,
confirm `next build` succeeds with no type errors before considering
the migration done.

## Out of scope (this pass)

- New serif/sans typography pairing (visual identity otherwise stays
  as-is; a font change is a separate, separately-approved decision).
- Full 5-step content for Aligned, 311 Insights, Ticket Triage, or
  TaskLocal — each becomes its own follow-up spec when its content is
  ready, same pattern as Kippo.
- CMS, MDX, or any authoring layer beyond plain `.ts` data files.
- Automated tests.
- Confirming/adjusting Vercel project settings post-migration (flagged
  as a follow-up, not blocking this spec).

## Open follow-ups (not blocking, tracked for after implementation)

- Confirm Vercel build settings pick up the Next.js framework
  automatically after the cutover commit.
- TaskLocal AI Matcher has no public URL yet — its `externalLink`
  stays empty until one exists.
- Real images still needed for 311, Ticket Triage's `WorkCard` (per
  existing `CLAUDE.md` known-gaps list) — untouched by this migration.
