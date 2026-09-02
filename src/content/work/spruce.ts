import type { WorkContent } from "./types";

export const spruce: WorkContent = {
  slug: "spruce",
  pillar: 2,
  status: "full",
  title: "Spruce",
  tagline:
    "A two-sided home-services marketplace — customers find trusted providers, providers manage bookings and get paid.",
  tags: ["Full-Stack Engineering", "AI Workflows", "Product Design"],
  role: "Full-Stack Engineer & Product Designer",
  timeline: "In progress · 2026",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase", "Claude API"],
  problem:
    "Customers had no simple way to discover trusted home-service providers, while providers lacked unified tools to manage bookings and reach new clients. Dual-sided platforms only work when friction is removed for both sides at once.",
  insight: {
    text: "The matching chat has to turn “my sink won't stop dripping” into a real service-type search — without ever letting the model see the actual listings, so it structurally can't invent a provider that doesn't exist.",
    attribution: "Architecture decision, documented in the app's own DESIGN.md",
  },
  architecture: {
    kind: "code",
    heading: "Intent / Match separation",
    language: "ts",
    snippet: `// src/lib/chat/intent.ts — the ONLY Anthropic call in the matching flow.
// This module has no access to the listings dataset, so it can only
// choose search terms — never a result.
export async function extractIntent(message: string): Promise<Intent> {
  const response = await anthropic.messages.create({
    model: INTENT_MODEL, // "claude-sonnet-4-6"
    system: INTENT_SYSTEM_PROMPT,
    messages: [...history, { role: "user", content: message }],
  });
  return parseStructuredIntent(response);
}

// src/lib/chat/match.ts — deterministic. No model access here.
export function matchListings(intent: Intent, listings: Listing[]) {
  return listings
    .filter((l) => l.serviceType === intent.serviceType)
    .sort((a, b) => scoreListing(b, intent) - scoreListing(a, intent));
}`,
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
    typography: "Warm-neutral palette, one confident accent, modular bento card containers",
  },
  mechanics: [
    {
      label: "Zero-hallucination matching",
      value: "Intent ≠ Match",
      description:
        "Claude extracts structured search terms from natural language; a separate deterministic module scores real listings. The model never sees the dataset it could invent a match from.",
    },
    {
      label: "Real payments",
      value: "Stripe",
      description:
        "Live payment-intent flow (src/lib/stripe.ts, api/stripe/payment-intent) powers the customer booking checkout.",
    },
    {
      label: "Two-sided surfaces",
      value: "Customer + Provider",
      description:
        "Browse/listings/reviews/bookings for customers, a provider dashboard, and an internal trust-and-safety page — not a single-screen demo.",
    },
  ],
  outcomeSummary:
    "Architected an AI-assisted marketplace where the model can propose but never invent — a real Stripe checkout and dual-sided dashboards on top.",
};
