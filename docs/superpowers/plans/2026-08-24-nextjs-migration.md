# Next.js + Tailwind Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the personal portfolio from static HTML/CSS/JS to Next.js (App Router) + TypeScript + Tailwind CSS, in place, preserving the existing warm-light editorial visual identity, landing the new positioning, the 3-pillar homepage IA, and a reusable case-study template.

**Architecture:** Server Components for everything static (Hero, WorkCard, Pillar, About, Faq, Testimonial, TrustStrip, case-study sections); Client Components only where there's interactive state (Services accordion, MobileDrawer). Content lives in typed `.ts` data files under `src/content/`, read through `src/lib/workData.ts` helpers — no component imports content directly except `page.tsx` files.

**Tech Stack:** Next.js (App Router, latest stable), TypeScript, Tailwind CSS v4 (CSS-first `@theme` config, matching `~/tasklocal-provider-chatbot`'s setup), no CMS/database/test framework.

**Spec:** [`docs/superpowers/specs/2026-08-24-nextjs-migration-design.md`](../specs/2026-08-24-nextjs-migration-design.md)

## Global Constraints

- Title (byte-identical everywhere): `AI-Native Product Designer & Frontend Developer`
- Hero bio (byte-identical everywhere): `Product Designer & Frontend Engineer building AI-native tools, frictionless workflows, and high-craft digital experiences that people trust and love to use.`
- Niche phrase, exact wording every time it appears: `health & wellness, lifestyle, and tech`
- Design tokens (hex values are exact, do not approximate): background `#f2f1ed`, foreground `#111111`, accent `#b5652f`, placeholder-bg `#ece6d8`, placeholder-border `#ddd4bf`, muted `#a39d8c`
- Font stack stays system sans: `"Helvetica Neue", Arial, sans-serif` — no new webfont this pass
- No CMS, no MDX, no test framework, no automated tests this pass
- Every `WorkCard` "View case study" CTA links to `/work/[slug]` — never external, never disabled
- Aligned keeps its real product name "Aligned" (not genericized)
- Only Kippo ships `status: "full"`; Aligned, 311 Insights, Ticket Triage — MVP, and TaskLocal AI Matcher ship `status: "coming-soon"`

---

## Task 1: Scaffold the Next.js project and port design tokens

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `src/app/globals.css`, `.eslintrc` (whatever `create-next-app` generates)
- Move: `images/` → `public/images/`, `assets/` → `public/assets/`, `favicon.svg` → `public/favicon.svg`, `robots.txt` → `public/robots.txt`, `sitemap.xml` → `public/sitemap.xml`
- Modify: `.gitignore` (add `.next/`, `node_modules/`)

**Interfaces:**
- Produces: Tailwind utility classes `bg-background`, `text-foreground`, `text-accent`, `bg-placeholder-bg`, `border-placeholder-border`, `text-muted`, and `font-sans` — every later task's components use these, not raw hex values.

- [ ] **Step 1: Scaffold with create-next-app**

Run from the project root:

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --eslint --no-turbopack --use-npm
```

When prompted about the non-empty directory, proceed (it only adds files, doesn't touch existing ones). This installs Next.js, React, TypeScript, and Tailwind v4 with sensible defaults.

- [ ] **Step 2: Move static assets into `public/`**

```bash
mkdir -p public
git mv images public/images
git mv assets public/assets
git mv favicon.svg public/favicon.svg
git mv robots.txt public/robots.txt
git mv sitemap.xml public/sitemap.xml
```

- [ ] **Step 3: Replace `src/app/globals.css` with the ported design tokens**

```css
@import "tailwindcss";

@theme {
  --color-background: #f2f1ed;
  --color-foreground: #111111;
  --color-accent: #b5652f;
  --color-placeholder-bg: #ece6d8;
  --color-placeholder-border: #ddd4bf;
  --color-muted: #a39d8c;
  --font-sans: "Helvetica Neue", Arial, sans-serif;
}

body {
  background: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans);
  line-height: 1.5;
}
```

- [ ] **Step 4: Verify Tailwind tokens resolve**

Temporarily replace the generated `src/app/page.tsx` body with:

```tsx
export default function Home() {
  return <div className="bg-background text-accent p-8">token check</div>;
}
```

Run: `npm run dev`, open `http://localhost:3000`
Expected: page background is the cream tone (`#f2f1ed`) and the text "token check" renders in the clay/terracotta color (`#b5652f`), confirming the `@theme` tokens are wired up. Leave `page.tsx` in this placeholder state — Task 7 replaces it for real.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Scaffold Next.js + TypeScript + Tailwind, port design tokens"
```

---

## Task 2: Content types, workData helpers, and the 4 stub case studies

**Files:**
- Create: `src/content/work/types.ts`
- Create: `src/content/work/aligned.ts`
- Create: `src/content/work/insights-311.ts`
- Create: `src/content/work/ticket-triage.ts`
- Create: `src/content/work/tasklocal.ts`
- Create: `src/content/workIndex.ts`
- Create: `src/lib/workData.ts`

**Interfaces:**
- Produces: `WorkContent` type, `WORK_INDEX: WorkContent[]`, `getAllWork(): WorkContent[]`, `getWorkByPillar(pillar: 1 | 2 | 3): WorkContent[]`, `getWorkBySlug(slug: string): WorkContent | undefined` — Task 3 (WorkCard/Pillar) and Task 8 (case study template) both consume these.

- [ ] **Step 1: Write the content type**

`src/content/work/types.ts`:

```ts
export type WorkContent = {
  slug: string;
  pillar: 1 | 2 | 3;
  status: "full" | "coming-soon";
  hero: {
    title: string;
    pitch: string;
    roleTags: string[];
    bannerImage?: string;
    bannerVideo?: string;
  };
  bottleneck?: {
    friction: string;
    insight: string;
  };
  system?: {
    cards: { title: string; body: string; image?: string }[];
  };
  showcase?: {
    items: { image?: string; video?: string; caption?: string }[];
  };
  takeaways?: {
    outcomes: string[];
    technical: string[];
  };
  externalLink?: { label: string; href: string };
};
```

- [ ] **Step 2: Write the 4 "coming-soon" stub content files**

`src/content/work/aligned.ts`:

```ts
import type { WorkContent } from "./types";

export const aligned: WorkContent = {
  slug: "aligned",
  pillar: 1,
  status: "coming-soon",
  hero: {
    title: "Aligned",
    pitch:
      "Turned a physical therapist's clinical expertise into a guided recovery app people actually stick with.",
    roleTags: ["UX/UI", "Branding", "Mobile Development"],
    bannerImage: "/images/work-aligned.jpg",
  },
};
```

`src/content/work/insights-311.ts`:

```ts
import type { WorkContent } from "./types";

export const insights311: WorkContent = {
  slug: "311-insights",
  pillar: 3,
  status: "coming-soon",
  hero: {
    title: "311 Insights",
    pitch:
      "Turned raw, live NYC 311 data into filterable charts and a map that surface real reporting patterns by borough and complaint type.",
    roleTags: ["Development", "Generative AI", "Data Viz"],
  },
};
```

`src/content/work/ticket-triage.ts`:

```ts
import type { WorkContent } from "./types";

export const ticketTriage: WorkContent = {
  slug: "ticket-triage",
  pillar: 2,
  status: "coming-soon",
  hero: {
    title: "Ticket Triage — MVP",
    pitch:
      "Automated support ticket triage—categorization, urgency scoring, and SLA-risk flagging—so specialists open an already-prioritized queue.",
    roleTags: ["Development", "Generative AI", "Product Design"],
  },
  externalLink: {
    label: "View live app",
    href: "https://support-ticket-sorter.vercel.app",
  },
};
```

`src/content/work/tasklocal.ts`:

```ts
import type { WorkContent } from "./types";

export const tasklocal: WorkContent = {
  slug: "tasklocal-ai-matcher",
  pillar: 2,
  status: "coming-soon",
  hero: {
    title: "TaskLocal AI Matcher",
    pitch:
      "A guided intake and matching system for a local-services marketplace—intent and synonym matching, a provider dashboard with SLA trust badges, and real-time booking sync.",
    roleTags: ["AI Prompting", "Next.js/Tailwind", "Product Engineering"],
  },
};
```

- [ ] **Step 3: Write `workIndex.ts` and `workData.ts`**

`src/content/workIndex.ts` (Kippo import added in Task 4 — for now this file compiles with the 4 stubs; Task 4 extends it):

```ts
import { aligned } from "./work/aligned";
import { insights311 } from "./work/insights-311";
import { ticketTriage } from "./work/ticket-triage";
import { tasklocal } from "./work/tasklocal";
import type { WorkContent } from "./work/types";

export const WORK_INDEX: WorkContent[] = [
  aligned,
  insights311,
  ticketTriage,
  tasklocal,
];
```

`src/lib/workData.ts`:

```ts
import { WORK_INDEX } from "@/content/workIndex";
import type { WorkContent } from "@/content/work/types";

export function getAllWork(): WorkContent[] {
  return WORK_INDEX;
}

export function getWorkByPillar(pillar: 1 | 2 | 3): WorkContent[] {
  return WORK_INDEX.filter((item) => item.pillar === pillar);
}

export function getWorkBySlug(slug: string): WorkContent | undefined {
  return WORK_INDEX.find((item) => item.slug === slug);
}
```

- [ ] **Step 4: Verify it compiles and the data is reachable**

Temporarily add to the placeholder `src/app/page.tsx` from Task 1:

```tsx
import { getAllWork } from "@/lib/workData";

export default function Home() {
  const work = getAllWork();
  return (
    <div className="bg-background text-accent p-8">
      token check — {work.length} projects loaded
    </div>
  );
}
```

Run: `npm run dev`, open `http://localhost:3000`
Expected: page shows "token check — 4 projects loaded". Leave in this state — Task 4 brings it to 5, Task 7 replaces the page for real.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Add work content types, 4 coming-soon case study stubs, and workData helpers"
```

---

## Task 3: Kippo's full case-study content

**Files:**
- Create: `src/content/work/kippo.ts`
- Modify: `src/content/workIndex.ts:1-11` (add the Kippo import and array entry)

**Interfaces:**
- Consumes: `WorkContent` type from `src/content/work/types.ts` (Task 2)
- Produces: `kippo: WorkContent` with `status: "full"`, all five sections populated — Task 8's case-study template renders every section this object provides.

- [ ] **Step 1: Write the full Kippo content, sourced from the 24-slide deck already in the repo (`Kippo App Case Study PNG/`) and the enhanced screens/video already wired into the old `kippo.html`**

`src/content/work/kippo.ts`:

```ts
import type { WorkContent } from "./types";

export const kippo: WorkContent = {
  slug: "kippo",
  pillar: 1,
  status: "full",
  hero: {
    title: "Kippo",
    pitch:
      "An app for parents to safely buy and resell kids' clothing—designed and built end to end.",
    roleTags: ["UX Research", "UI Design", "Mobile Development"],
    bannerImage: "/assets/images/kippo/iphone-17-pro-photo.png",
    bannerVideo: "/assets/videos/kippo/iphone-17-pro-video.mp4",
  },
  bottleneck: {
    friction:
      "Parents struggle with the rising cost of children's clothing and find current resale options—like Facebook Marketplace and Craigslist—disorganized, time-consuming, and unreliable. Research surfaced four concrete pain points: high cost of kids' clothing, limited income flexibility, lack of trust in existing resale platforms, and time constraints from busy schedules.",
    insight:
      "I assumed parents were mainly chasing discounts. Interviews with parents like Sarah (a single mother of two balancing bills and childcare) and Jamal (a gig worker with an unpredictable schedule) showed convenience, trust, and time-efficiency mattered just as much as price—the insight that shaped everything after it: an all-in-one, user-friendly platform could meaningfully ease their burden, not just save them money.",
  },
  system: {
    cards: [
      {
        title: "Persona: Sarah",
        body: "34-year-old single mother of two, retail clerk. “They grow so fast—I can’t keep up, and it’s not like clothes are getting any cheaper.” Goal: provide her kids with clothes. Frustration: income mostly goes to bills, leaving little room for clothing.",
      },
      {
        title: "Paper wireframes",
        body: "Goal: a welcoming, dynamic entry point that encourages discovery, promotes deals, and personalizes the experience for the user.",
      },
      {
        title: "Digital wireframes",
        body: "Goal: help users quickly browse kids' products by age group and category. Tab filters surface what's relevant immediately; large tappable category blocks reduce cognitive load and improve accessibility.",
      },
      {
        title: "Low-fidelity prototype",
        body: "Built and tested in Figma before any visual polish, so navigation and flow problems surfaced before mockup work started.",
      },
    ],
  },
  showcase: {
    items: [
      {
        image: "/assets/images/kippo/iphone-17-pro-photo.png",
        caption: "Home screen: curated deals and outfit ideas surfaced up front, so budget-conscious parents see savings first.",
      },
      {
        caption:
          "Category screen, before/after: usability testing showed participants hesitating on where to go. Adding Boys/Girls/Infants icons above the category list resolved the navigation-hesitation problem participants hit in round-1 testing.",
      },
      {
        caption:
          "Round 2 usability findings drove the selling flow: participants wanted to upload photos or details in any order without error messages, and wanted clearer guidance and reassurance during listing and checkout—both folded into the refined mockups.",
      },
    ],
  },
  takeaways: {
    outcomes: [
      "Resolved a navigation-hesitation problem parents hit in testing, validated across two rounds of usability studies with 4 participants.",
      "Round 1 findings (entry points via promotions, category misnavigation, comparison-shopping before checkout) directly shaped round-2 design decisions.",
      "Round 2 findings (flexible photo/detail upload order, clearer listing guidance) refined the selling flow before final mockups.",
    ],
    technical: [
      "Full UX process from problem statement through persona research, paper wireframes, digital wireframes, low-fidelity prototype, and two rounds of usability testing.",
      "Involved actual mobile app development (HTML/CSS/JS), not just static design comps—the same designed-and-built pattern as Aligned.",
      "Figma prototype available as supporting reference (see link below).",
    ],
  },
  externalLink: {
    label: "View Figma prototype",
    href: "https://www.figma.com/design/2Wdy34apAh2BlAgori9ZU2/Kippo-Kids-App?node-id=0-1&t=PiLmJa3aflJzMqAU-1",
  },
};
```

- [ ] **Step 2: Wire Kippo into the work index**

Modify `src/content/workIndex.ts`:

```ts
import { kippo } from "./work/kippo";
import { aligned } from "./work/aligned";
import { insights311 } from "./work/insights-311";
import { ticketTriage } from "./work/ticket-triage";
import { tasklocal } from "./work/tasklocal";
import type { WorkContent } from "./work/types";

export const WORK_INDEX: WorkContent[] = [
  kippo,
  aligned,
  insights311,
  ticketTriage,
  tasklocal,
];
```

- [ ] **Step 3: Verify all 5 load**

In the placeholder `page.tsx`, confirm the counter text now reads "token check — 5 projects loaded" after `npm run dev`.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Add full Kippo case study content from the 24-slide deck"
```

---

## Task 4: Root layout — Header, MobileDrawer, Footer

**Files:**
- Create: `src/lib/navLinks.ts`
- Create: `src/components/Header.tsx`
- Create: `src/components/MobileDrawer.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/app/layout.tsx` (replace generated content)

**Interfaces:**
- Produces: `NAV_LINKS` (shared by Header and MobileDrawer so the 3 nav entries are defined once), `<Header />`, `<Footer />` rendered on every route via `layout.tsx` — Task 7 (homepage) and Task 8 (case study pages) both render inside this layout and don't re-implement nav/footer.

- [ ] **Step 1: Write the shared nav links constant**

`src/lib/navLinks.ts`:

```ts
export const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;
```

- [ ] **Step 2: Write `Footer.tsx` (Server Component, no interactivity)**

```tsx
export function Footer() {
  return (
    <footer id="contact" className="px-8 py-16 text-center">
      <h2 className="mb-4 text-2xl font-extrabold">Contact</h2>
      <p>
        <a href="mailto:designtaino@gmail.com" className="underline">
          designtaino@gmail.com
        </a>
      </p>
      <p className="mt-3 flex justify-center gap-6 underline">
        <a href="https://www.linkedin.com/in/yadantaino" target="_blank" rel="noopener">
          LinkedIn
        </a>
        <a href="https://github.com/Tainobuilds" target="_blank" rel="noopener">
          GitHub
        </a>
        <a href="https://www.instagram.com/MadebyTaino" target="_blank" rel="noopener">
          Instagram
        </a>
      </p>
      <p className="mt-8 text-sm text-[#666]">&copy; 2026</p>
    </footer>
  );
}
```

- [ ] **Step 3: Write `MobileDrawer.tsx` (Client Component — has open/close state)**

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/navLinks";

export function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="rounded p-2"
      >
        <span className="block h-0.5 w-6 bg-foreground" />
        <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
        <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-lg">
              &times;
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-12 text-xl">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Write `Header.tsx` (Server Component; renders the desktop nav directly, delegates mobile to `MobileDrawer`)**

```tsx
import Link from "next/link";
import { MobileDrawer } from "./MobileDrawer";
import { NAV_LINKS } from "@/lib/navLinks";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-8 px-8 py-6">
      <div className="border-l-[3px] border-foreground bg-background px-6 py-4 text-2xl font-bold">
        <Link href="/#top">
          Made<em className="font-normal italic">by</em>Taino
          <sup className="text-xs align-super">™</sup>
        </Link>
      </div>
      <nav className="hidden gap-10 text-lg md:flex">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <MobileDrawer />
    </header>
  );
}
```

- [ ] **Step 5: Wire both into `src/app/layout.tsx`, with site-wide metadata replacing the old manual `<meta>` tags**

```tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yadan Taino | AI-Native Product Designer & Frontend Developer — NYC",
  description:
    "Yadan Taino is an AI-Native Product Designer & Frontend Developer in New York City building AI-native digital products, brand systems, and UX/UI for health & wellness, lifestyle, and tech brands — from concept to shipped product.",
  keywords: [
    "AI enablement",
    "AI-native product design",
    "AI builder",
    "UX design",
    "UI design",
    "Frontend Developer",
    "Product Designer",
    "brand design",
    "New York City designer",
  ],
  authors: [{ name: "Yadan Taino" }],
  robots: "index, follow",
  metadataBase: new URL("https://yadan-taino-personal-website.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: "Made by Taino",
    title: "Yadan Taino | AI-Native Product Designer & Frontend Developer",
    description:
      "Product Designer & Frontend Engineer building AI-native tools, frictionless workflows, and high-craft digital experiences that people trust and love to use.",
    url: "https://yadan-taino-personal-website.vercel.app",
    images: ["/images/hero-portrait.jpg"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yadan Taino | AI-Native Product Designer & Frontend Developer",
    description:
      "Product Designer & Frontend Engineer building AI-native tools, frictionless workflows, and high-craft digital experiences that people trust and love to use.",
    images: ["/images/hero-portrait.jpg"],
  },
  icons: { icon: "/favicon.svg" },
  themeColor: "#111111",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yadan Taino",
  alternateName: "Made by Taino",
  url: "https://yadan-taino-personal-website.vercel.app/",
  image: "https://yadan-taino-personal-website.vercel.app/images/hero-portrait.jpg",
  jobTitle: "AI-Native Product Designer & Frontend Developer",
  description:
    "AI-Native Product Designer & Frontend Developer in New York City designing and shipping AI-native digital products, brand systems, and UX/UI for health & wellness, lifestyle, and tech brands.",
  email: "mailto:designtaino@gmail.com",
  sameAs: ["https://www.linkedin.com/in/yadantaino", "https://github.com/Tainobuilds"],
  knowsAbout: [
    "AI-Native Product Design",
    "AI Enablement",
    "Forward Deployed Engineering",
    "UX Design",
    "UI Design",
    "Brand Strategy",
    "Product Design",
    "AI Builders",
  ],
  address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Verify**

Run: `npm run dev`, open `http://localhost:3000`
Expected: header with logo + desktop nav shows at viewport widths ≥768px; resize below 768px (or use browser dev tools device toolbar) and confirm the hamburger button appears and the mobile drawer opens/closes on click. Footer renders below the placeholder homepage content from Task 3.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "Add root layout: Header, mobile drawer, Footer, site-wide metadata"
```

---

## Task 5: Homepage sections — Hero, TrustStrip, Services, Testimonial, About, Faq

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/TrustStrip.tsx`
- Create: `src/components/Services.tsx`
- Create: `src/components/Testimonial.tsx`
- Create: `src/components/About.tsx`
- Create: `src/components/Faq.tsx`

**Interfaces:**
- Produces: `<Hero />`, `<TrustStrip />`, `<Services />`, `<Testimonial />`, `<About />`, `<Faq />` — each a standalone component with no required props, consumed by `src/app/page.tsx` in Task 7.

- [ ] **Step 1: `Hero.tsx` (Server Component)**

```tsx
import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen">
      <Image
        src="/images/hero-portrait.jpg"
        alt="Yadan Taino standing on a New York City street at night"
        fill
        priority
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/55" />
      <div className="relative z-10 flex min-h-screen max-w-[600px] flex-col px-8 py-12 text-white">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
          Available for select projects
        </p>
        <h1 className="mb-4 text-5xl font-extrabold leading-tight">
          AI-Native Product Designer &amp; Frontend Developer
        </h1>
        <p className="max-w-[480px] text-lg text-[#ddd]">
          Product Designer &amp; Frontend Engineer building AI-native tools,
          frictionless workflows, and high-craft digital experiences that
          people trust and love to use.
        </p>
        <p className="mt-auto text-sm tracking-wide text-[#ccc]">
          Scroll To View More ↓
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: `TrustStrip.tsx` (Server Component)**

```tsx
const BRANDS = [
  "Adidas",
  "SoundCloud",
  "Kiehl’s",
  "Jose Cuervo",
  "NYFW",
  "Swim Week",
  "Vida Y Moss",
  "Trends Dispensary",
];

export function TrustStrip() {
  return (
    <section aria-label="Brands I've worked with" className="bg-background px-8 py-10">
      <ul className="flex flex-wrap items-center justify-center gap-x-11 gap-y-7">
        {BRANDS.map((brand) => (
          <li key={brand} className="whitespace-nowrap text-sm font-semibold text-muted opacity-80">
            {brand}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: `Services.tsx` (Client Component — accordion has open/close state)**

```tsx
"use client";

import { useState } from "react";

const SERVICES = [
  {
    name: "Branding",
    body: "Strong branding sets you apart in a crowded market and turns first impressions into lasting loyalty.",
  },
  {
    name: "Digital Products",
    body: "I design and build digital products that feel as good as they look—combining thoughtful UX with the technical execution to actually ship them.",
  },
  {
    name: "Development",
    body: "Front-end to back-end, I build fast, reliable products that work great on every device. Performance and user experience matter just as much to me as the code underneath.",
  },
  {
    name: "Generative AI",
    body: "AI is part of how I build, not just how I sketch ideas—I use AI-native tools for engineering, data, prototyping, and shipping to move faster without cutting corners.",
  },
  {
    name: "UI/UX Design",
    body: "Every screen is designed around how people actually think and move through a product—clear, intuitive, and built on research, not guesswork.",
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-background px-8 py-16 text-foreground">
      <p className="mb-10 max-w-[640px] text-2xl font-bold leading-tight">
        I build transformative digital experiences for health &amp; wellness,
        lifestyle, and tech brands by blending AI, design, and technology.
      </p>
      <ul className="list-none">
        {SERVICES.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={service.name} className="border-b border-placeholder-border">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className={`w-full py-5 text-left text-4xl font-bold ${
                  isOpen ? "text-foreground" : "text-muted"
                }`}
              >
                {service.name}{" "}
                <span className="text-2xl font-normal text-accent">
                  ({String(index + 1).padStart(2, "0")})
                </span>
              </button>
              {isOpen && (
                <div className="pb-8">
                  <p className="max-w-[640px] text-lg text-[#444]">{service.body}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
```

- [ ] **Step 4: `Testimonial.tsx` (Server Component)**

```tsx
export function Testimonial() {
  return (
    <section className="px-8 py-16">
      <h2 className="mb-8 text-4xl font-extrabold">Work that moves culture</h2>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.5fr]">
        <div
          aria-hidden
          className="flex aspect-[3/4] items-center justify-center rounded-lg border border-placeholder-border bg-placeholder-bg text-sm uppercase tracking-wide text-[#8a8271]"
        >
          IMAGE: portrait
        </div>
        <blockquote className="text-2xl italic">
          &ldquo;Yadan brings rare clarity to complex ideas—shaping brands,
          products, and stories into work that feels both useful and
          culturally alive.&rdquo;
          <cite className="mt-6 block text-base not-italic text-[#666]">
            Creative Partner
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: `About.tsx` (Server Component)**

```tsx
const CURRENTLY_TAGS = ["Pursuit AI-Native cohort", "Nonexclusive with FFT Models"];

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 items-end gap-8 px-8 py-16 md:grid-cols-2"
    >
      <h2 className="text-6xl font-extrabold">About</h2>

      <p className="col-span-full flex flex-wrap items-center gap-2.5 text-sm">
        <span className="font-bold uppercase tracking-wide text-muted">Currently</span>
        {CURRENTLY_TAGS.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-placeholder-border px-3 py-1.5 text-[#444]"
          >
            {tag}
          </span>
        ))}
      </p>

      <p className="mb-4 italic text-[#444]">
        I&apos;m Yadan Taino—a Creative Director and Product Designer based in
        New York City.
      </p>
      <p className="mb-4 italic text-[#444]">
        I design and ship digital products and brands for health &amp;
        wellness, lifestyle, and tech—from first concept to live product.
        Founders and business owners come to me when they don&apos;t want a
        design file and a hand-off; they want the thing built, launched, and
        true to their brand.
      </p>
      <p className="mb-4 italic text-[#444]">
        Years of working as a commercial model—campaigns, runway, life in
        front of the camera—sharpened something most designers never
        develop: a lived understanding of aesthetics, culture, and how a
        brand actually feels to the people inside it. These aren&apos;t
        industries I study. They&apos;re industries I&apos;m in.
      </p>
      <p className="mb-4 italic text-[#444]">
        Everything I build has one goal: products that genuinely improve how
        people move, feel, and show up. That&apos;s why my flagship project,
        Aligned, is a recovery and movement app built alongside a licensed
        physical therapist—clinical expertise, designed and shipped.
      </p>
    </section>
  );
}
```

Note: the About paragraph still describes the identity as "Creative Director and Product Designer" in the first line — this is the existing locked About copy from `CLAUDE.md` and is ported byte-for-byte as-is. Updating it to reference "Frontend Developer" is a copy change outside this migration's scope (the migration ports existing content; it doesn't rewrite locked prose beyond the two Positioning fields named in the spec). Flag this to the user after the migration — don't silently rewrite it.

- [ ] **Step 6: `Faq.tsx` (Server Component)**

```tsx
const FAQ_ITEMS = [
  {
    question: "How do you use AI in your process?",
    answer:
      "AI is part of how I build, not just how I sketch ideas. I use AI-native tools for engineering, data, prototyping, and shipping — on projects like the 311 visualizer and Ticket Triage MVP, that meant real features, faster, without cutting corners.",
  },
  {
    question: "Are you open to full-time roles, contract, or both?",
    answer:
      "Both. I'm currently available for select contract and freelance work, and open to full-time roles where I can own design and the build together.",
  },
  {
    question: "What does “shipping” mean for you day to day?",
    answer:
      "The thing goes live, not just gets handed off. Whether it starts as a Figma file or a line of code, I follow a project through to a working, deployed product.",
  },
  {
    question: "Are you a designer or a developer?",
    answer:
      "Both, on purpose. I'm an AI-Native Product Designer & Frontend Developer—design decisions don't get lost on their way to a working product because I build the product too.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-[760px] px-8 py-16">
      <h2 className="mb-8 text-3xl font-extrabold">FAQ</h2>
      <dl className="flex flex-col gap-7">
        {FAQ_ITEMS.map((item) => (
          <div key={item.question}>
            <dt className="mb-1.5 text-lg font-bold">{item.question}</dt>
            <dd className="leading-relaxed text-[#444]">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
```

Note: FAQ answer 4 is updated here to say "AI-Native Product Designer & Frontend Developer" instead of the old "Creative Director & Product Designer" — unlike `About.tsx`, this line's entire point is naming the current title, so it must track the Positioning change (this is a direct consequence of the Global Constraints title change, not a scope-creep rewrite).

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "Add Hero, TrustStrip, Services, Testimonial, About, Faq components"
```

(No isolated verification step here — these components have no props and aren't wired into a page yet. Task 7 wires and verifies all of them together.)

---

## Task 6: WorkCard and Pillar components

**Files:**
- Create: `src/components/WorkCard.tsx`
- Create: `src/components/Pillar.tsx`

**Interfaces:**
- Consumes: `WorkContent` type (Task 2)
- Produces: `<WorkCard work={WorkContent} />`, `<Pillar title={string} description={string} items={WorkContent[]} />` — Task 7's homepage renders 3 `<Pillar>`s, each rendering its `WorkCard`s.

- [ ] **Step 1: `WorkCard.tsx` (Server Component)**

```tsx
import Link from "next/link";
import Image from "next/image";
import type { WorkContent } from "@/content/work/types";

export function WorkCard({ work }: { work: WorkContent }) {
  const image = work.hero.bannerImage;

  return (
    <article>
      <Link href={`/work/${work.slug}`}>
        {image ? (
          <div className="relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-lg bg-placeholder-bg">
            <Image src={image} alt={work.hero.title} fill className="object-cover" />
          </div>
        ) : (
          <div
            aria-hidden
            className="mb-3 flex aspect-[4/5] w-full items-center justify-center rounded-lg border border-placeholder-border bg-placeholder-bg text-sm uppercase tracking-wide text-[#8a8271]"
          >
            IMAGE: {work.hero.title}
          </div>
        )}
      </Link>
      <h3 className="mb-1.5 text-xl font-bold">{work.hero.title}</h3>
      <p className="mb-2.5 text-[0.95rem] leading-snug text-[#444]">{work.hero.pitch}</p>
      <p className="mb-3 text-sm uppercase tracking-wide text-muted">
        {work.hero.roleTags.join(" · ")}
      </p>
      <Link
        href={`/work/${work.slug}`}
        className="inline-block text-sm font-semibold text-accent underline"
      >
        View case study
      </Link>
    </article>
  );
}
```

- [ ] **Step 2: `Pillar.tsx` (Server Component)**

```tsx
import { WorkCard } from "./WorkCard";
import type { WorkContent } from "@/content/work/types";

export function Pillar({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: WorkContent[];
}) {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="mb-6 max-w-[640px] text-[#444]">{description}</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <WorkCard key={item.slug} work={item} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "Add WorkCard and Pillar components"
```

(Verification happens in Task 7, once these render real data on the homepage.)

---

## Task 7: Homepage — wire everything together

**Files:**
- Modify: `src/app/page.tsx` (replace the Task 1/2/3 placeholder content entirely)

**Interfaces:**
- Consumes: `getWorkByPillar` (Task 2), `<Hero>`, `<TrustStrip>`, `<Services>`, `<Testimonial>`, `<About>`, `<Faq>` (Task 5), `<Pillar>` (Task 6)

- [ ] **Step 1: Write the homepage**

```tsx
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { Pillar } from "@/components/Pillar";
import { Testimonial } from "@/components/Testimonial";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { getWorkByPillar } from "@/lib/workData";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <section id="projects" className="px-8 py-16">
        <h2 className="mb-2 text-4xl font-extrabold">Selected work</h2>
        <p className="mb-12 max-w-[640px] italic text-[#444]">
          My focus is health &amp; wellness, lifestyle, and tech—from
          fitness and recovery to skincare to the tools I build. Industries I
          don&apos;t just design for—I live in them.
        </p>
        <Pillar
          title="High-Craft Visual Design &amp; Prototyping"
          description="Editorial-quality UX/UI work, from Figma prototypes and Google-style UX research to shipped mobile builds."
          items={getWorkByPillar(1)}
        />
        <Pillar
          title="AI Workflows &amp; Interactive Systems"
          description="Intent parsing, guided intake flows, and interactive systems that make repetitive workflows faster."
          items={getWorkByPillar(2)}
        />
        <Pillar
          title="Data-Driven MVPs &amp; Product Engineering"
          description="Real API data, functional logic, and full-stack execution—not just a demo."
          items={getWorkByPillar(3)}
        />
      </section>
      <Testimonial />
      <About />
      <Faq />
    </>
  );
}
```

- [ ] **Step 2: Verify the full homepage**

Run: `npm run dev`, open `http://localhost:3000`

Manually confirm, scrolling top to bottom:
- Hero shows the new title/bio over the portrait photo, badge, and scroll hint
- Trust strip shows all 8 brand names, wrapping on a narrow window
- Services accordion opens Branding by default; clicking another service closes the previous one and opens the new one
- "Selected work" shows 3 pillar groups: Pillar 1 has Kippo + Aligned, Pillar 2 has TaskLocal AI Matcher + Ticket Triage — MVP, Pillar 3 has 311 Insights
- Every "View case study" link is a real link (not disabled/muted) — hover shows the underline/accent color on all 5
- Testimonial, About (with the two Currently tags), and FAQ (4 questions) all render
- Resize below 768px width: nav collapses to the hamburger, desktop nav disappears

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "Wire homepage: hero through FAQ, 3-pillar Selected work section"
```

---

## Task 8: Case study template (`/work/[slug]`)

**Files:**
- Create: `src/app/work/[slug]/page.tsx`
- Create: `src/app/work/[slug]/not-found.tsx`
- Create: `src/components/CaseStudySections.tsx` (the 5-step section renderer, kept out of `page.tsx` to keep that file focused on routing/data/metadata)

**Interfaces:**
- Consumes: `getAllWork`, `getWorkBySlug` (Task 2), `WorkContent` type (Task 2)

- [ ] **Step 1: Write the section-rendering component**

`src/components/CaseStudySections.tsx`:

```tsx
import Image from "next/image";
import type { WorkContent } from "@/content/work/types";

export function CaseStudySections({ work }: { work: WorkContent }) {
  return (
    <>
      {/* Step 1: Hero & Pitch */}
      <section className="mx-auto max-w-[900px] px-8 pb-16 pt-8">
        <p className="mb-6 text-sm text-muted">
          <a href="/#projects" className="hover:text-accent">
            &larr; Back to Selected work
          </a>
        </p>
        <h1 className="mb-3 text-5xl font-extrabold">{work.hero.title}</h1>
        <p className="mb-6 max-w-[560px] text-lg text-[#444]">{work.hero.pitch}</p>
        <ul className="mb-8 flex flex-wrap gap-2">
          {work.hero.roleTags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-placeholder-border px-3 py-1 text-sm text-[#444]"
            >
              {tag}
            </li>
          ))}
        </ul>
        {(work.hero.bannerVideo || work.hero.bannerImage) && (
          <div className="rounded-2xl bg-[#efece6] p-6">
            {work.hero.bannerVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={work.hero.bannerImage}
                className="block w-full rounded-2xl object-cover"
              >
                <source src={work.hero.bannerVideo} type="video/mp4" />
              </video>
            ) : (
              work.hero.bannerImage && (
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image src={work.hero.bannerImage} alt={work.hero.title} fill className="object-cover" />
                </div>
              )
            )}
          </div>
        )}
      </section>

      {work.status === "coming-soon" ? (
        <section className="mx-auto max-w-[700px] px-8 pb-16">
          <p className="italic text-[#444]">
            This case study is still being built out with the full research
            and design process—wireframes, usability findings, and
            before/after decisions.
            {work.externalLink && (
              <>
                {" "}
                In the meantime, you can view the{" "}
                <a
                  href={work.externalLink.href}
                  target="_blank"
                  rel="noopener"
                  className="text-accent underline"
                >
                  {work.externalLink.label}
                </a>
                .
              </>
            )}
          </p>
        </section>
      ) : (
        <>
          {/* Step 2: The Bottleneck */}
          {work.bottleneck && (
            <section className="mx-auto max-w-[900px] px-8 pb-16">
              <h2 className="mb-6 text-2xl font-extrabold">The Bottleneck</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted">
                    The friction
                  </h3>
                  <p className="text-[#444]">{work.bottleneck.friction}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted">
                    The insight
                  </h3>
                  <p className="text-[#444]">{work.bottleneck.insight}</p>
                </div>
              </div>
            </section>
          )}

          {/* Step 3: System & Architecture */}
          {work.system && (
            <section className="mx-auto max-w-[900px] px-8 pb-16">
              <h2 className="mb-6 text-2xl font-extrabold">System &amp; Architecture</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {work.system.cards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-lg border border-placeholder-border bg-placeholder-bg p-6"
                  >
                    <h3 className="mb-2 font-bold">{card.title}</h3>
                    <p className="text-sm text-[#444]">{card.body}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Step 4: Interactive UI Showcase */}
          {work.showcase && (
            <section className="px-8 pb-16">
              <h2 className="mx-auto mb-6 max-w-[900px] text-2xl font-extrabold">
                Interactive UI Showcase
              </h2>
              <div className="mx-auto flex max-w-[900px] flex-col gap-8">
                {work.showcase.items.map((item, index) => (
                  <figure key={index}>
                    {item.video ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={item.image}
                        className="aspect-video w-full rounded-2xl bg-placeholder-bg object-cover"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    ) : (
                      item.image && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-placeholder-bg">
                          <Image src={item.image} alt={item.caption ?? ""} fill className="object-cover" />
                        </div>
                      )
                    )}
                    {item.caption && (
                      <figcaption className="mt-3 text-sm text-[#444]">{item.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Step 5: Execution & Takeaways */}
          {work.takeaways && (
            <section className="mx-auto max-w-[900px] px-8 pb-16">
              <h2 className="mb-6 text-2xl font-extrabold">Execution &amp; Takeaways</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted">
                    User outcomes
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-[#444]">
                    {work.takeaways.outcomes.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted">
                    Technical takeaways
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-[#444]">
                    {work.takeaways.technical.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {work.externalLink && (
                <a
                  href={work.externalLink.href}
                  target="_blank"
                  rel="noopener"
                  className="mt-8 inline-block text-accent underline"
                >
                  {work.externalLink.label}
                </a>
              )}
            </section>
          )}
        </>
      )}
    </>
  );
}
```

- [ ] **Step 2: Write the dynamic route page**

`src/app/work/[slug]/page.tsx`:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllWork, getWorkBySlug } from "@/lib/workData";
import { CaseStudySections } from "@/components/CaseStudySections";

export function generateStaticParams() {
  return getAllWork().map((work) => ({ slug: work.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const work = getWorkBySlug(params.slug);
  if (!work) return {};
  return {
    title: `${work.hero.title} Case Study | Yadan Taino — AI-Native Product Designer & Frontend Developer`,
    description: work.hero.pitch,
  };
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const work = getWorkBySlug(params.slug);
  if (!work) notFound();
  return <CaseStudySections work={work} />;
}
```

- [ ] **Step 3: Write the styled 404**

`src/app/work/[slug]/not-found.tsx`:

```tsx
export default function WorkNotFound() {
  return (
    <section className="mx-auto max-w-[700px] px-8 py-24 text-center">
      <h1 className="mb-4 text-4xl font-extrabold">Case study not found</h1>
      <p className="mb-8 text-[#444]">
        That project doesn&apos;t exist yet — or the link is out of date.
      </p>
      <a href="/#projects" className="text-accent underline">
        &larr; Back to Selected work
      </a>
    </section>
  );
}
```

- [ ] **Step 4: Verify every case study route**

Run: `npm run dev`

For each of `/work/kippo`, `/work/aligned`, `/work/311-insights`, `/work/ticket-triage`, `/work/tasklocal-ai-matcher`:
- Confirm the page loads with the correct title, pitch, and role tags
- Confirm `/work/kippo` shows all 5 sections (Bottleneck, System & Architecture, Interactive UI Showcase, Execution & Takeaways) plus the autoplaying looping video with the Figma link at the bottom
- Confirm the other 4 show only Hero/Pitch + the "still being built out" note (Ticket Triage's note also links to the live Vercel app)

Then confirm `/work/does-not-exist` renders the custom not-found page, not the default Next.js 404.

Run: `npm run build`
Expected: build succeeds with no type errors, and the build output lists all 5 `/work/[slug]` routes as statically generated.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Add dynamic case study template at /work/[slug] with 5-step layout"
```

---

## Task 9: Cutover — remove the static site, update supporting files

**Files:**
- Delete: `index.html`, `kippo.html`, `styles.css`, `script.js`, `.tmp-kippo-preview/` (if still present)
- Modify: `public/sitemap.xml` (add the 5 new `/work/*` routes)
- Modify: `.claude/launch.json` (point at the Next.js dev server instead of the Python static server)
- Modify: `README.md` (tech stack section)
- Modify: `CLAUDE.md` (Site structure section — record the migration and new IA)

**Interfaces:** None — this task only removes dead files and updates docs/config to match the shipped result of Tasks 1–8.

- [ ] **Step 1: Remove the old static site**

```bash
git rm index.html kippo.html styles.css script.js
rm -rf .tmp-kippo-preview
```

- [ ] **Step 2: Update `public/sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yadan-taino-personal-website.vercel.app/</loc>
    <lastmod>2026-08-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yadan-taino-personal-website.vercel.app/work/kippo</loc>
    <lastmod>2026-08-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yadan-taino-personal-website.vercel.app/work/aligned</loc>
    <lastmod>2026-08-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://yadan-taino-personal-website.vercel.app/work/311-insights</loc>
    <lastmod>2026-08-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://yadan-taino-personal-website.vercel.app/work/ticket-triage</loc>
    <lastmod>2026-08-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://yadan-taino-personal-website.vercel.app/work/tasklocal-ai-matcher</loc>
    <lastmod>2026-08-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Update `.claude/launch.json`**

```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "nextjs-dev",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "port": 3000
    }
  ]
}
```

- [ ] **Step 4: Update `README.md`'s tech stack and project structure sections**

Replace the "Tech stack" and "Project structure" sections with:

```markdown
## Tech stack

Next.js (App Router) + TypeScript + Tailwind CSS. Content lives in typed
`.ts` data files under `src/content/` — no CMS, no database.

## Project structure

```
src/app/                    Routes: homepage, /work/[slug] case studies
src/components/              Reusable UI (Header, Hero, WorkCard, etc.)
src/content/work/            One typed file per case study
src/lib/workData.ts          getAllWork(), getWorkByPillar(), getWorkBySlug()
public/images/, public/assets/   Portrait, work images, Kippo video/photo
CLAUDE.md                    Locked copy, positioning rules, working style
```

## Running locally

```
npm install
npm run dev
```

then open `http://localhost:3000`.
```

- [ ] **Step 5: Update `CLAUDE.md`'s "Site structure" section**

Replace the existing "Simple HTML/CSS/JS. Mobile-friendly." line and structure list with:

```markdown
## Site structure
Migrated to Next.js (App Router) + TypeScript + Tailwind CSS, 2026-08-24
(see `docs/superpowers/specs/2026-08-24-nextjs-migration-design.md` and
the matching plan in `docs/superpowers/plans/`). Homepage order unchanged:
1. Hero
2. Trust strip
3. Services
4. Selected work — now organized into 3 pillars instead of a flat grid:
   Pillar 1 (High-Craft Visual Design & Prototyping): Kippo, Aligned.
   Pillar 2 (AI Workflows & Interactive Systems): TaskLocal AI Matcher,
   Ticket Triage — MVP. Pillar 3 (Data-Driven MVPs & Product Engineering):
   311 Insights.
5. Testimonial
6. About (with Currently tags)
7. FAQ
8. Contact (footer)

Case studies live at `/work/[slug]`, one reusable 5-step template driven
by `src/content/work/*.ts`. Only Kippo ships `status: "full"` — the rest
are `status: "coming-soon"` until their content is written.

Nav labels: About, Projects, Contact. Desktop: always-visible nav.
Mobile (<768px): hamburger opens a full-screen drawer.
```

- [ ] **Step 6: Final full verification**

Run: `npm run build` — expected: succeeds, no type errors, no references to deleted files.
Run: `npm run dev` — click through every nav link, every WorkCard, resize to mobile width and open/close the drawer, confirm no broken links or missing images.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "Cut over: remove static site, update sitemap/launch config/README/CLAUDE.md"
git push origin main
```

---

## Post-plan follow-ups (not part of this plan, tracked for later)

- Confirm Vercel's dashboard build settings picked up the Next.js framework automatically after the push in Task 9 — check the deployment log on vercel.com.
- `About.tsx`'s first paragraph still says "Creative Director and Product Designer" (ported byte-for-byte per Task 5, Step 5's note) — flagged to the user as a follow-up decision, not silently changed.
- Full 5-step content for Aligned, 311 Insights, Ticket Triage, and TaskLocal AI Matcher — each its own future spec, same pattern used for Kippo in Task 3.
- TaskLocal AI Matcher has no public URL yet — add `externalLink` once one exists.
- New serif/sans typography pairing — explicitly out of scope per the design spec.
