import type { WorkContent } from "./types";

// Source: the ~/anna-museo repo — a Next.js rebuild of annamuseo.com (the
// family's Shopify store) plus the Find Your Ritual consultation. All
// screenshots were captured from that build with Playwright, 2026-09-27.
// Framed as a website/design showcase per the user (2026-09-27): no
// Context / Challenge / Insight cards. Credit stays honest — Yadan rebuilt
// the storefront (following the brand's existing look) and designed and
// built Find Your Ritual; the original live Shopify site isn't claimed.
// Email capture and Shopify pre-fill are NOT built — "Next" only.
const IMG = "/images/work/anna-museo";

export const annaMuseo: WorkContent = {
  slug: "anna-museo",
  pillar: 1,
  status: "full",
  title: "Annà Museo",
  tagline:
    "A family-owned skincare line — I built the web design and UX experience, rebuilding the storefront and designing Find Your Ritual, a personalized consultation paced like the ritual itself.",
  tags: ["Skincare Line", "Web Design", "AI Features"],
  role: "Storefront rebuild, product design & front-end (solo)",
  timeline: "September 2026",
  projectStatus: "Working prototype, designed for Shopify integration",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Claude API", "Vitest"],
  scopeNote:
    "The storefront shown is my Next.js rebuild of annamuseo.com (the live store runs on Shopify); Find Your Ritual is a working prototype. Brand, products, and photography © Annà Museo.",
  bannerImage: `${IMG}/site-hero-desktop.png`,
  cardImage: `${IMG}/card-kairi.webp`,
  links: [{ label: "Live brand site — annamuseo.com", href: "https://annamuseo.com" }],
  screenSections: [
    {
      heading: "The Website",
      intro:
        "White gallery walls, all-lowercase type, black-and-white ritual portraits, and El Yunque rainforest footage — a storefront that feels like walking through a small museum. Every page works from phone to desktop.",
      layout: "pairs",
      framePath: "annà museo",
      items: [
        {
          caption: "The serums — kachi water by day, kairi oil by night",
          desktop: `${IMG}/site-serums-desktop.png`,
          mobile: `${IMG}/site-serums-mobile.png`,
        },
        {
          caption: "Product page — the ritual method and sensory notes for each serum",
          desktop: `${IMG}/site-product-desktop.png`,
          mobile: `${IMG}/site-product-mobile.png`,
        },
      ],
    },
    {
      heading: "Find Your Ritual",
      intro:
        "The brand's static “curate your serum” form, reimagined as a consultation — one gentle question at a time, in English or Spanish, ending in a named ritual and an apothecary label. The note shown is the built-in template version; the Claude-written note uses the same slot.",
      layout: "phones",
      items: [
        { caption: "First, take a breath — the consultation opens slowly", mobile: `${IMG}/ritual-welcome-mobile.png` },
        { caption: "One question per screen, unhurried pacing", mobile: `${IMG}/ritual-question-mobile.png` },
        { caption: "Concerns chosen with a tap — no typing", mobile: `${IMG}/ritual-concerns-mobile.png` },
        { caption: "Fully bilingual, from the first question", mobile: `${IMG}/ritual-spanish-mobile.png` },
        { caption: "Here's what you told us — every answer editable", mobile: `${IMG}/ritual-review-mobile.png` },
        { caption: "Your ritual — named, in the brand's voice", mobile: `${IMG}/ritual-results-mobile.png` },
        { caption: "The apothecary label, modeled on the real bottle", mobile: `${IMG}/ritual-label-mobile.png` },
      ],
    },
    {
      heading: "On Desktop",
      layout: "pairs",
      framePath: "annà museo · /ritual",
      items: [
        {
          caption: "Your ritual — results in the brand's voice",
          desktop: `${IMG}/ritual-results-desktop.png`,
          mobile: `${IMG}/ritual-results-mobile.png`,
        },
      ],
    },
  ],
  architecture: {
    heading: "Approach",
    steps: [
      "Ritual-first design — a breathing intro, one question per screen with a line explaining why it's asked, and a review before results. The pace is the ritual.",
      "Personal, not clinical — each result is named from the customer's answers (“your restoring ritual”) with a mood line drawn from the serums' own sensory notes.",
      "AI with restraint — fixed rules choose the botanicals and keep safety rules in code; Claude only writes the personal note, so it can never invent an ingredient.",
    ],
  },
  mechanicsHeading: "Outcome",
  mechanicsIntro:
    "A rebuilt storefront and a working consultation that turns a static form into a ritual. Answers now travel into the live Shopify cart under the store's own intake questions — tested end to end on annamuseo.com — so the formulator sees everything. Next: family review and formulator sign-off on the ingredient list, and email capture.",
  mechanics: [
    {
      label: "Consultation",
      value: "8 questions",
      description: "One per screen, plus an optional note and a review with edit-back before results.",
    },
    {
      label: "Languages",
      value: "EN / ES",
      description:
        "The whole consultation — questions, review, results, and the apothecary label — switches to Spanish.",
    },
    {
      label: "Answer combinations tested",
      value: "25,600",
      description:
        "Every day + night combination checked: no empty labels, no botanical repeated across serums, every safety rule held.",
    },
  ],
  reflection:
    "AI should respect the brand it's serving. The engineering here isn't the model — it's the restraint around it.",
  outcomeSummary:
    "A family-owned skincare line — I built the web design and UX experience, from the storefront to a bilingual, ritual-paced consultation.",
};
