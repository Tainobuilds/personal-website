import type { WorkContent } from "./types";

// Source: the ~/anna-museo repo (Next.js sandbox of annamuseo.com, the
// Shopify store). Screenshots were captured from that build with
// Playwright, 2026-09-27. Every Approach/Outcome claim below matches what
// the prototype actually does — email capture and Shopify pre-fill are
// NOT built yet, so they're listed as next steps, not features.
const IMG = "/images/work/anna-museo";

export const annaMuseo: WorkContent = {
  slug: "anna-museo-ritual-consultation",
  pillar: 2,
  status: "full",
  eyebrow: "AI Product Feature · Family Brand",
  title: "Ancestral Botanical Matcher",
  tagline: "An AI ritual consultation for Annà Museo — my family's made-to-order skincare line.",
  tags: ["AI Product Feature", "Product Design", "Bilingual UX"],
  role: "Product design + AI engineering (solo)",
  timeline: "September 2026",
  projectStatus: "Working prototype, designed for Shopify integration",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Claude API", "Vitest"],
  scopeNote:
    "Concept prototype — the AI consultation layer, designed to integrate with the brand's Shopify site. Brand and products © Annà Museo (annamuseo.com).",
  cardImage: `${IMG}/card.webp`,
  context: {
    text: "Annà Museo is my family's skincare line — Afro-Latina-owned, Queens-crafted, made-to-order botanical serums rooted in Taíno ancestral wisdom. Every formula is handcrafted for the individual. Their site had a static “curate your serum” intake form. I wanted to turn that form into a consultation.",
    link: {
      label: "View the live brand site",
      href: "https://annamuseo.com",
      description: "annamuseo.com — the family's Shopify store, where every serum is still ordered today.",
    },
  },
  problem:
    "Generic skincare AI feels clinical — blood-test energy. That's the opposite of a brand built on ritual, ancestry, and the senses. And a static form can't guide someone to the right ritual; it can only collect answers. The challenge: build AI that feels like the brand, and that a family business can actually trust with custom formulations.",
  insight: {
    text: "Personalization doesn't need a diagnosis. The brand already describes every serum in sensory terms — skin feel, aroma, mood — so the consultation can speak that language instead of a clinical one.",
  },
  screens: {
    heading: "The Consultation",
    intro:
      "Real screenshots from the working prototype, captured on desktop and mobile. The personal note shown is the built-in template version — the Claude-written note uses the same slot.",
    framePath: "annà museo · /ritual prototype",
    items: [
      {
        caption: "Welcome — the consultation entry",
        desktop: `${IMG}/ritual-welcome-desktop.png`,
        mobile: `${IMG}/ritual-welcome-mobile.png`,
      },
      {
        caption: "One question per screen, unhurried pacing",
        desktop: `${IMG}/ritual-question-desktop.png`,
        mobile: `${IMG}/ritual-question-mobile.png`,
      },
      {
        caption: "Here's what you told us — every answer editable before results",
        desktop: `${IMG}/ritual-review-desktop.png`,
        mobile: `${IMG}/ritual-review-mobile.png`,
      },
      {
        caption: "Your ritual — results in the brand's voice",
        desktop: `${IMG}/ritual-results-desktop.png`,
        mobile: `${IMG}/ritual-results-mobile.png`,
      },
    ],
  },
  architecture: {
    heading: "Approach",
    steps: [
      "Ritual-first UX — a grounding intro (“first, take a breath.”), one question per screen with microcopy explaining why each is asked, and a “here's what you told us” review where any answer can be edited before results. The pace is the ritual.",
      "Safety by architecture — a deterministic rules engine picks the serums and botanicals from a curated library. Hard rules live in code, not the model: scent sensitivity or rosacea → no aromatic botanicals; acne-prone skin → no pore-clogging oils. Pregnancy is asked directly, never inferred, and routes to the formulator instead of a proposal.",
      "The LLM does one job — Claude narrates the finished ritual in the brand's voice. The server rebuilds the formula from the answers itself, so the note can only describe botanicals the rules chose; it can never invent botanicals or formulas.",
      "Personalization through the senses — instead of diagnosing skin, each result is named from the answers (“your restoring ritual,” “your calming ritual”) with a mood line drawn from each serum's own sensorial notes, and the note echoes the customer's own words back when they leave one.",
      "Bilingual from the start — the whole consultation runs in English or Spanish, because the brand and its community already live in both.",
    ],
  },
  mechanicsHeading: "Outcome",
  mechanicsIntro:
    "A working Next.js prototype: an 8-question consultation, a review step with edit-back, a named ritual with an apothecary label modeled on the real bottle, and a personal note — built as a standalone page that can sit alongside the brand's Shopify store. Next: family review and formulator sign-off on the botanical library, then Shopify integration — passing answers into the existing order flow — and email capture.",
  mechanics: [
    {
      label: "Botanicals the model can invent",
      value: "0",
      description:
        "Claude never sees the ingredient library. Rules choose; the model only writes the note about what they chose.",
    },
    {
      label: "Answer combinations tested",
      value: "25,600",
      description:
        "Every day + night combination checked in tests: no empty labels, no botanical repeated across serums, every safety exclusion held.",
    },
    {
      label: "Languages",
      value: "EN / ES",
      description:
        "Questions, review, and results switch to Spanish. The botanical descriptions on the label are still English — next on the list.",
    },
  ],
  reflection:
    "AI should respect the brand it's serving. The engineering here isn't the model — it's the restraint around it.",
  outcomeSummary:
    "An AI ritual consultation for my family's made-to-order skincare line — rules choose the botanicals, and Claude writes the note in the brand's voice.",
};
