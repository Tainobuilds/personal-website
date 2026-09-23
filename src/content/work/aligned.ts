import type { WorkContent } from "./types";

export const aligned: WorkContent = {
  slug: "aligned",
  pillar: 1,
  status: "full",
  title: "Aligned",
  tagline:
    "A physical therapy companion app that turns a doctor's prescription into a daily ritual you actually want to keep.",
  tags: ["UX/UI Design", "Product Design", "Health Tech"],
  role: "Product Designer (UX/UI)",
  timeline: "2026",
  techStack: ["Figma-style tap-through prototype", "Claude Design"],
  bannerImage: "/images/aligned/mockup-hero-bodytension.webp",
  bannerVideo: "/assets/videos/aligned/mockup-bodytension-video.mp4",
  bannerPoster: "/assets/videos/aligned/mockup-bodytension-poster.webp",
  bannerFit: "portrait",
  problem:
    "According to Juny — the licensed physical therapist Aligned was built alongside — 70% of patients drop their home exercise program within the first 4 weeks. The exercises work, adherence doesn't. The target user spends 8+ hours seated daily, building the very tension physical therapy is meant to release, and has typically already downloaded and abandoned 2 other PT apps that feel clinical, dense, and joyless.",
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
  walkthrough: {
    heading: "The Flow",
    intro:
      "Seven of the interactive prototype's ten screens, in the order a first-time user meets them — from the first hello to the end of their first session. The whole flow is tappable in the prototype itself.",
    overview: {
      image: "/images/aligned/prototype-stage.jpg",
      caption:
        "The full interactive prototype: a ten-step flow across onboarding, daily, and session, with a “try this” note on every screen.",
    },
    steps: [
      {
        image: "/images/aligned/01-welcome.webp",
        group: "Onboarding",
        label: "Welcome",
        title: "Set the tone before the user does anything",
        caption:
          "A soft serif headline and warm blob shapes set the tone — the opposite of a clinical PDF. The promise is up front: built around your body, guided by your therapist's plan, done in 15 minutes a day.",
        principle: "Soft, not strict",
      },
      {
        image: "/images/aligned/02-body-tension.webp",
        group: "Onboarding",
        label: "Body tension",
        title: "Start with where it hurts",
        caption:
          "Tap the body silhouette or the checklist — both update the same state — then set a pain check-in (7/10 here). That first number isn't just intake; it's the baseline the last screen pays off.",
        principle: "Show it working",
      },
      {
        image: "/images/aligned/03-notifications.webp",
        group: "Onboarding",
        label: "Notifications",
        title: "Sell the experience before asking permission",
        caption:
          "A real iOS-style preview shows the actual reminder — “15 minutes for your back?” — before the user is asked to allow anything. One quiet ping at 7:00 PM, off whenever they like.",
        principle: "Soft, not strict",
      },
      {
        image: "/images/aligned/04-all-set.webp",
        group: "Onboarding",
        label: "You're all set",
        title: "A celebration that stays quiet",
        caption:
          "No confetti. A single check ring sets up the visual reward language that comes back at the end of every session.",
        principle: "Soft, not strict",
      },
      {
        image: "/images/aligned/05-home.webp",
        group: "Daily",
        label: "Home",
        title: "Today, in one card",
        caption:
          "“Hey Alex. Your back has been waiting. Today is 15 minutes.” One dark card holds the whole plan — 5 exercises, 15 minutes, 7:00 PM — behind a single Start session button. Below it, the streak shows its grace days openly instead of hiding the mechanics.",
        principle: "15 minutes, no negotiation",
        featured: true,
      },
      {
        image: "/images/aligned/06-session-intro.webp",
        group: "Session",
        label: "Session intro",
        title: "Know the whole session before you start",
        caption:
          "A preview of every move — Pelvic tilt (2 min), Glute bridge (3 min), Cat-cow (2 min) and more — so 15 minutes feels finite. The video slot is held for real footage from the therapist.",
        principle: "15 minutes, no negotiation",
      },
      {
        image: "/images/aligned/07-session-complete.webp",
        group: "Session",
        label: "Session complete",
        title: "Show it working",
        caption:
          "“You showed up today. Day 4 of your streak.” The pain check-in comes back — 4/10, “3 points lighter than before” — and the body map starts cooling from orange as sessions add up. Progress you can see, not just count.",
        principle: "Show it working",
      },
    ],
    note: {
      title: "A tappable prototype, end to end",
      body: "Each screen here is one step of a ten-step interactive prototype — tap inside the phone or use the flow buttons to move through onboarding, the daily home, and a full session.",
    },
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
