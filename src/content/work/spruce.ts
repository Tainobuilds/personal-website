import type { WorkContent } from "./types";

export const spruce: WorkContent = {
  slug: "spruce",
  pillar: 2,
  status: "full",
  title: "Spruce",
  tagline:
    "A two-sided marketplace where customers and providers find each other — real filters for service type, price, and availability narrow things down fast. Or skip the search: describe what you need in plain language, and Spruce's AI matching surfaces the right provider for you.",
  tags: ["Full-Stack Engineering", "AI Workflows", "Product Design"],
  role: "Full-Stack Engineer & Product Designer",
  timeline: "In progress · 2026",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase", "Claude API"],
  bannerImage: "/images/spruce/mockup-hero.webp",
  cardImage: "/images/spruce/mockup-card.webp",
  problem:
    "Customers had no simple way to discover trusted home-service providers, while providers lacked unified tools to manage bookings and reach new clients. Dual-sided platforms only work when friction is removed for both sides at once.",
  insight: {
    text: "The matching chat has to turn “my sink won't stop dripping” into a real service-type search — without ever letting the model see the actual listings, so it structurally can't invent a provider that doesn't exist.",
    attribution: "Architecture decision, documented in the app's own DESIGN.md",
  },
  architecture: {
    heading: "Intent / Match separation",
    steps: [
      "A customer message like \"my sink won't stop dripping\" goes through a dedicated intent-extraction step — the only place in the entire matching flow that calls the model.",
      "That step has zero access to the actual listings dataset, so structurally it can only choose search terms — it can never invent or return a match on its own.",
      "A separate, fully deterministic module takes those extracted terms and scores real listings — no AI involved in the ranking itself.",
      "Net effect: the model can propose language, but it can never hallucinate a provider that doesn't exist.",
    ],
  },
  designSystem: {
    name: "Spruce Design System — Japandi-Bento",
    tokens: [
      { name: "Brand Primary (Forest)", hex: "#0B2B22" },
      { name: "Brand Accent (Amber)", hex: "#D97706" },
      { name: "Background (Linen)", hex: "#FAF8F5" },
      { name: "Sage", hex: "#A3B19B" },
      { name: "Soft", hex: "#F4F1EA" },
      { name: "Line", hex: "#E7E5E4" },
    ],
    typography:
      "Warm-neutral palette, one confident accent, modular bento card containers — applied consistently across every surface: customer browse, provider dashboard, booking modal, payment flow, and the internal admin tool.",
  },
  videoEmbed: {
    url: "https://www.loom.com/embed/60250457bd5342b282367b40aa1177a0",
    heading: "Interactive Product Walkthrough",
    subtext:
      "A 3-minute video breakdown walking through the two-sided marketplace, AI natural-language intent parser, and live Stripe payment flow.",
  },
  mechanics: [
    {
      label: "Zero-hallucination matching",
      value: "Intent ≠ Match",
      description:
        "Claude extracts structured search terms from natural language; a separate deterministic module scores real listings. The model never sees the dataset it could invent a match from.",
    },
    {
      label: "Real payments, real bug fixes",
      value: "Stripe",
      description:
        "Live payment-intent flow. Fixed a real UX bug where the Pay button was clickable before card details were actually valid, and built graceful fallback states (e.g. dev/demo environments preview the flow without a live Stripe config) so nothing hits a dead end.",
    },
    {
      label: "Two-sided surfaces",
      value: "Customer + Provider",
      description:
        "Browse/listings/reviews/bookings for customers, a provider dashboard, and an internal trust-and-safety page — not a single-screen demo.",
    },
    {
      label: "Scheduling logic rework",
      value: "4 weeks → 60 days",
      description:
        "Extended the booking calendar's availability window — a real scheduling-logic change, not just a UI tweak.",
    },
    {
      label: "Theme system, applied with judgment",
      value: "Light + Dark",
      description:
        "Retrofitted a light/dark theme across pages that were originally hardcoded dark-only — including the internal Trust & Safety dashboard — while deliberately leaving its red/orange/amber severity color-coding untouched, since that's a reserved status palette, not a branding choice.",
    },
    {
      label: "AI chat redesign",
      value: "Panel → Drawer",
      description:
        "Rebuilt the matching chat from a blocking floating panel into a slide-over drawer with quick-prompt suggestion pills and rich in-chat provider match cards (avatar, rating, rate, one-tap book) — shortening the path from \"describe the problem\" to \"book.\"",
    },
  ],
  outcomeSummary:
    "Architected an AI-assisted marketplace where the model can propose but never invent — a real Stripe checkout and dual-sided dashboards on top.",
};
