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
  evolution: {
    heading: "From Sketch to Screen",
    intro:
      "Three of Kippo's screens, followed from early sketches and wireframes through the Figma mockups to the final design. The clearest change came straight out of usability testing.",
    rows: [
      {
        kicker: "01 / Home",
        title: "One page, four drafts",
        story:
          "The whole page was already in the notebook sketch: a welcome line, a sale banner, outfit ideas, a recommended row, “shop the look,” and a five-tab bar. The digital wireframe kept that skeleton, the Figma mockup filled it with real photography, and the final design gave it a voice — a personal greeting, a bold sale card, and prices on the recommended items.",
        stages: [
          { label: "Paper sketch", image: "/images/kippo/sketch-home.webp", width: 913, height: 1400 },
          { label: "Digital wireframe", image: "/images/kippo/wireframe-home.webp", width: 1050, height: 1572 },
          { label: "Figma mockup", image: "/images/kippo/mockup-home.webp", width: 904, height: 1682 },
          {
            label: "Final design",
            image: "/images/kippo/final-home.webp",
            width: 645,
            height: 1400,
            final: true,
          },
        ],
        changes: [
          "The sketched “Designers” block was dropped in the digital wireframe.",
          "Placeholder boxes became real photos in the Figma mockup, then a sale card, an outfit-ideas banner, and priced recommendations in the final design.",
          "The five-tab bar carried through every stage.",
        ],
      },
      {
        kicker: "02 / Shop",
        title: "Where testing changed the design",
        story:
          "In the first usability round, participants hesitated on category navigation — they weren't sure where to go. The wireframe's plain text tabs (Girls · Boys · Infants) became an icon for each, and the second round confirmed the fix. The final design keeps that icon row as its anchor.",
        stages: [
          {
            label: "Digital wireframe",
            image: "/images/kippo/wireframe-shop.webp",
            width: 1050,
            height: 1602,
            note: "Text tabs",
          },
          {
            label: "Figma mockup",
            image: "/images/kippo/mockup-shop-icons.webp",
            width: 530,
            height: 1151,
            note: "Icons added after round 1",
          },
          {
            label: "Final design",
            image: "/images/kippo/final-shop.webp",
            width: 645,
            height: 1400,
            final: true,
          },
        ],
        changes: [
          "Text tabs became Boys / Girls / Infants icons — the usability round 1 fix, validated in round 2.",
          "Multicolor category bars became one warm palette, from terracotta down to deep brown.",
          "A “325 items curated for you” line now frames the page.",
        ],
      },
      {
        kicker: "03 / Product detail",
        title: "Photo first, details right under the price",
        story:
          "The sketch already had the skeleton: a photo, name, price, size selector with a size guide, and a description. The final design leads with a full-bleed photo and puts what a cautious parent is looking for — condition, size, and seller — directly under the price, a direct answer to the trust concern research surfaced.",
        stages: [
          { label: "Paper sketch", image: "/images/kippo/sketch-product.webp", width: 808, height: 1400 },
          { label: "Figma mockup", image: "/images/kippo/mockup-product.webp", width: 904, height: 1682 },
          {
            label: "Final design",
            image: "/images/kippo/final-product.webp",
            width: 645,
            height: 1400,
            final: true,
          },
        ],
        changes: [
          "“Add to bag” became “Proceed to checkout” in the Figma mockup, and stayed.",
          "Size went from a “Select size” label to tappable chips (12M · 18M · 2T · 3T).",
          "The sketch's “You might like” row was dropped.",
        ],
      },
    ],
    overview: {
      image: "/images/kippo/figma-flow-map.webp",
      width: 1890,
      height: 1275,
      heading: "The whole Figma prototype, zoomed out",
      caption:
        "Home, shopping tabs, product listing, product selection, cart, payment, shipping and billing, and order confirmation — wired together as tappable flows.",
    },
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
