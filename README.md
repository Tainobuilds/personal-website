# Yadan Taino — Personal Website

Personal portfolio for Yadan Taino (Made by Taino), a Front-End Developer
& Product Designer in New York City working at the intersection of
front-end engineering, product design, and AI-assisted workflows.

**Live site:** https://yadan-taino-personal-website.vercel.app/

Built during the Pursuit AI-Native Program, starting July 2026.

## What this is

A portfolio site, positioned for **health & wellness, lifestyle, and
tech** brands, structured to lead with capabilities before personal
story (inspired by [clay.global](https://clay.global)):

1. **Hero** — headline, subline, availability badge
2. **Trust strip** — placeholder brand wordmarks
3. **Services** — Branding, Digital Products, Development, Generative AI,
   UI/UX Design (accordion, text-only)
4. **Selected work** — 3 pillars of project cards, each linking to a real
   case-study page: *High-Craft Visual Design & Prototyping* (Kippo,
   Aligned), *AI Workflows & Interactive Systems* (Spruce, Ticket Triage
   — MVP), *Data-Driven MVPs & Product Engineering* (311 Insights)
5. **Testimonial**
6. **About** — bio + a lightweight "Currently" tag strip
7. **FAQ**
8. **Contact**

Plus `/work/[slug]` — a reusable Bento Grid case-study template (editorial
header, problem/insight/architecture/design-tokens/mechanics cards).

## Tech stack

Next.js (App Router) + TypeScript + Tailwind CSS v4. Content lives in
typed `.ts` data files under `src/content/` — no CMS, no database.

## Project structure

```
src/app/                    Routes: homepage, /work/[slug] case studies
src/components/              Reusable UI (Header, Hero, WorkCard,
                              CaseStudyBento, etc.)
src/content/work/            One typed file per case study
src/lib/workData.ts          getAllWork(), getWorkByPillar(), getWorkBySlug()
public/images/, public/assets/   Portrait, work images, Kippo video/photo
CLAUDE.md                    Locked copy, positioning rules, working
                              style, and verified case-study evidence —
                              the source of truth for continuing work
```

## Running locally

```
npm install
npm run dev
```

then open `http://localhost:3000`.

## Case studies

All 4 primary case studies (`/work/kippo`, `/work/aligned`,
`/work/spruce`, `/work/ticket-triage`) are built from real, verified
material — see `CLAUDE.md` → "Case study evidence" for the source of
each claim. `/work/311-insights` is an honest "coming soon" stub; the
project is real, but its full case-study write-up isn't built yet.

## Status

Actively in progress. For the full list of locked copy, positioning
decisions, and verified case-study evidence, see [`CLAUDE.md`](CLAUDE.md)
— it's kept up to date as the source of truth for anyone (human or AI)
picking this project back up.

## Topics
Front-End Development · Product Design · UX/UI Design · Design Systems ·
AI-Assisted Workflows · Brand Design
