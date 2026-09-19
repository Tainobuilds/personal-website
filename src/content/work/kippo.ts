import type { WorkContent } from "./types";

export const kippo: WorkContent = {
  slug: "kippo",
  pillar: 1,
  status: "full",
  title: "Kippo",
  tagline:
    "An app for parents to safely buy and resell kids' clothing — designed and built end to end.",
  tags: ["UX Research", "UI Design", "Mobile Development"],
  role: "UX Designer / Researcher",
  timeline: "5 months",
  techStack: ["Figma", "User Research", "HTML/CSS/JS"],
  links: [
    {
      label: "View Figma prototype",
      href: "https://www.figma.com/design/2Wdy34apAh2BlAgori9ZU2/Kippo-Kids-App?node-id=0-1&t=PiLmJa3aflJzMqAU-1",
    },
  ],
  bannerImage: "/assets/images/kippo/iphone-17-pro-photo-clean.png",
  bannerVideo: "/assets/videos/kippo/iphone-17-pro-video.mp4",
  problem:
    "Parents struggle with the rising cost of children's clothing and find current resale options — Facebook Marketplace, Craigslist — disorganized, time-consuming, and unreliable. Research surfaced four concrete pain points: the high cost of kids' clothing, limited income flexibility, a lack of trust in existing resale platforms, and time constraints from busy schedules.",
  insight: {
    text: "“They grow so fast — I can’t keep up, and it’s not like clothes are getting any cheaper.”",
    attribution: "Sarah, 34, single mother of two — primary research persona",
  },
  architecture: {
    heading: "UX Process",
    steps: [
      "Persona and pain-point research",
      "Paper wireframes → digital wireframes",
      "Low-fidelity Figma prototype",
      "2 rounds of usability testing (4 participants)",
      "Mockups refined from round-2 findings",
    ],
  },
  mechanics: [
    {
      label: "Navigation fix",
      value: "2 rounds",
      description:
        "Usability testing showed participants hesitating on category navigation. Adding Boys/Girls/Infants icons above the category list resolved it — validated in round 2.",
    },
    {
      label: "Selling flow",
      value: "Flexible order",
      description:
        "Round-2 feedback: parents wanted to upload photos/details in any order without error messages. Folded into the refined listing flow.",
    },
    {
      label: "Participants",
      value: "4",
      description:
        "Usability study across two rounds, evaluating shopping, checkout, and listing behavior.",
    },
  ],
  outcomeSummary:
    "Resolved a navigation-hesitation problem parents hit in testing, validated across two rounds of usability studies.",
};
