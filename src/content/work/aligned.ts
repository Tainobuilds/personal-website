import type { WorkContent } from "./types";

export const aligned: WorkContent = {
  slug: "aligned",
  pillar: 1,
  status: "full",
  title: "Aligned",
  tagline:
    "A mobile companion that turns a doctor's prescription into a daily ritual you actually want to keep.",
  tags: ["UX/UI Design", "Product Design", "Health Tech"],
  role: "Product Designer (UX/UI)",
  timeline: "2026",
  techStack: ["Figma-style tap-through prototype", "Claude Design"],
  bannerImage: "/images/work-aligned.jpg",
  problem:
    "70% of patients drop their home exercise program within the first 4 weeks — the exercises work, adherence doesn't. The target user spends 8+ hours seated daily, building the very tension physical therapy is meant to release, and has typically already downloaded and abandoned 2 other PT apps that feel clinical, dense, and joyless.",
  insight: {
    text: "“I know I should do my exercises. I just never feel like it after a long day — and then I feel guilty, which makes it worse.”",
    attribution: "Alex Rivera, 34 — Marketing Manager, NYC, primary persona",
  },
  architecture: {
    heading: "Three Design Principles",
    steps: [
      "Soft, not strict — grace days and encouraging language; the app never joins in the user's guilt spiral, and never compares today to \"yesterday's better self.\"",
      "15 minutes, no negotiation — sessions never exceed 15 minutes. The unit of progress is showing up, not how long you stayed.",
      "Show it working — pain is invisible, but its absence is invisible too. A body map quietly cools down as the user stays consistent.",
    ],
  },
  designSystem: {
    name: "Aligned product design system",
    tokens: [
      { name: "Primary", hex: "#FF6B35" },
      { name: "Accent", hex: "#F9A826" },
      { name: "Success", hex: "#22C55E" },
      { name: "Ink", hex: "#1A1814" },
      { name: "Page", hex: "#FAF7F1" },
    ],
    typography: "Fraunces (display/editorial) + DM Sans (UI/body)",
  },
  mechanics: [
    {
      label: "The Forgiving Streak",
      value: "30 days",
      description:
        "A streak that survives one missed day — the flame dims to a soft amber \"rest day\" instead of resetting. Returning the next day fully restores it.",
    },
    {
      label: "A Body That Cools",
      value: "Day 1 → 30",
      description:
        "A tappable body map on the home screen. Pain areas glow saturated orange on day 1 and desaturate toward green as the user stays consistent.",
    },
    {
      label: "Session length",
      value: "15 min",
      description:
        "Every session is capped at 15 minutes — short enough to fit into anybody's schedule, no negotiation.",
    },
  ],
  outcomeSummary:
    "Turned a physical therapist's clinical expertise into a guided recovery app people actually stick with.",
};
