# Yadan Taino — Personal Website

Personal portfolio for Yadan Taino (Made by Taino), a Creative Director &
Product Designer in New York City working at the intersection of product
design, brand systems, and AI-native product building.

**Live site:** https://yadan-taino-personal-website.vercel.app/

Built during the Pursuit AI-Native Program, starting July 2026.

## What this is

A single-page portfolio site, positioned for **health & wellness,
lifestyle, and tech** brands, structured to lead with capabilities before
personal story (inspired by [clay.global](https://clay.global)):

1. **Hero** — headline, subline, availability badge
2. **Trust strip** — placeholder brand wordmarks
3. **Services** — Branding, Digital Products, Development, Generative AI,
   UI/UX Design (accordion, text-only)
4. **Selected work** — project cards (name, outcome, skill tags, case
   study link): Aligned, Kippo, 311 Insights, Ticket Triage — MVP
5. **Testimonial**
6. **About** — bio + a lightweight "Currently" tag strip
7. **FAQ**
8. **Contact**

Plus a growing set of standalone case-study pages, starting with
**`kippo.html`** (hero video/photo mockup, more to come).

## Tech stack

Plain HTML, CSS, and JavaScript — no framework, no build step, no npm
dependencies. Chosen deliberately to keep the codebase simple and fully
readable while learning to code. (A Next.js migration has been discussed
but not started — see "Status" below.)

## Project structure

```
index.html                  Homepage
kippo.html                  Kippo case study (in progress)
styles.css                  All site styles
script.js                   Mobile nav + services accordion behavior
images/                     Hero portrait, Aligned work-card image
assets/images/kippo/        Kippo case-study photo
assets/videos/kippo/        Kippo case-study hero video
favicon.svg, robots.txt, sitemap.xml   SEO/meta basics
CLAUDE.md                   Locked copy, positioning rules, working
                             style, and a running log of known gaps —
                             the source of truth for continuing work
```

## Running locally

No build step — just serve the folder:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Case studies

- **Kippo** (`kippo.html`) — real UX process exists (persona, research,
  usability studies, wireframe-to-mockup iterations) from a 24-slide
  deck; currently only the hero banner is wired into the page. The full
  narrative is the next content push.
- **Aligned, 311 Insights, Ticket Triage — MVP** — represented as
  Selected work cards on the homepage; dedicated case-study pages not
  built yet.

## Status

Actively in progress. For the full list of locked copy, positioning
decisions, and known gaps, see [`CLAUDE.md`](CLAUDE.md) — it's kept
up to date as the source of truth for anyone (human or AI) picking this
project back up.

## Topics
Product Design · UX/UI Design · Creative Direction · Brand Design ·
AI-Native Product Building · AI Enablement · Frontend Development
