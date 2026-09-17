import type { WorkContent } from "./types";

export const trends: WorkContent = {
  slug: "trends",
  pillar: 3,
  status: "full",
  title: "Trends",
  bannerImage: "/images/trends/logo-mockup.jpg",
  tagline:
    "Automating retail compliance at the point of intake — turning a 12-minute manual typing bottleneck into a single scan.",
  tags: ["Retail Automation", "Real-Time Data", "Workflow UX"],
  role: "Product Designer & Developer",
  timeline: "2026",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK", "Redis"],
  problem:
    "Trends LIC runs fast — staff are already stretched across the floor and the back room, and new shipments land constantly. Every one of those shipments needs labels made right away: strain, size, THC%, price, all read off the product and typed in by hand before anything can go on the shelf. It's not just tedious, it's a real time sink in a job that doesn't have spare minutes to give it.",
  legacyContext: {
    image: "/images/trends/legacy-laptop.jpg",
    caption: "The old backroom laptop setup, hand-typing every label into ZebraDesigner Essentials",
  },
  insight: {
    text: "The dispensary's live menu already has the right answer for every product — the fix isn't a faster typist, it's never typing at all.",
    attribution: "Product direction",
  },
  architecture: {
    heading: "QR-first, AI-vision fallback",
    steps: [
      "The phone camera captures a photo of the sticker on a back-stock item.",
      "A plain client-side QR decode runs first — free, instant, and exact whenever it works.",
      "Only when that decode fails does the frame ever leave the phone, falling back to AI vision to read the label.",
      "Cost- and accuracy-conscious by design: the paid, slower path is the fallback, never the default.",
    ],
  },
  gallery: [
    {
      image: "/images/trends/home.png",
      caption: "Trends Studio home — Back Stock and Front Stock",
    },
    {
      image: "/images/trends/front-stock-search.png",
      caption: "Front Stock — live menu search, ready to print",
    },
    {
      image: "/images/trends/front-stock-label.png",
      caption: "Front Stock — fields auto-filled from the live menu match, label ready to print",
    },
  ],
  extraPhotos: [
    {
      image: "/images/trends/front-stock-print-setup.jpg",
      caption:
        "Trends Studio live in the back room — a Front Stock label auto-filled and printing on a real Zebra printer",
    },
  ],
  secondarySolution: {
    heading: "Back Stock — camera-assisted, or by hand",
    narrative:
      "Back Stock is a different problem: a brand-new shipment isn't on the live menu yet, so there's no API record for the API to pull from. The question wasn't how to automate all of it — it was how to stay fast when only some of it can be. Staff get a real choice: snap a photo and let a QR/AI camera pick up the details in real time, or just type them in by hand. Either way, the label prints just as fast.",
    uiImage: {
      image: "/images/trends/back-stock-camera-scan.jpg",
      caption: "Sticker Camera — scanning a compliance sticker, Lot #/Exp captured live",
    },
    productShot: {
      image: "/images/trends/product-shelf.jpg",
      caption: "A real back-stock product, with its compliance sticker and QR code",
    },
    labelPreview: {
      image: "/images/trends/back-stock-label-result.jpg",
      caption: "Back Stock result — Lot # and Exp date auto-filled straight from the scan",
    },
  },
  mechanicsHeading: "Features",
  mechanics: [
    {
      label: "Front Stock",
      value: "API-connected",
      description:
        "Search connects straight to the dispensary's live menu — brand, category, potency, and price fill in on their own the moment a product is picked. No re-typing what the system already knows.",
    },
    {
      label: "Back Stock camera",
      value: "QR + AI vision",
      description:
        "Snap a photo of a shipment's LOT/EXP sticker and the details pick themselves up — a fast on-device QR decode first, AI vision as the fallback when there's no QR to read.",
    },
    {
      label: "Lock Batch",
      value: "Scan once",
      description:
        "One shipment often means many identical units. Locking Lot #/Exp/Metrc Tag across entries means staff scan once, not once per label.",
    },
    {
      label: "Hold-steady capture",
      value: "~600ms",
      description:
        "The phone camera auto-fires a capture after the frame holds still for ~600ms — no blurry photos from staff fumbling a manual shutter button.",
    },
  ],
  outcomeSummary:
    "Replaced hand-typed dispensary labels with a live-menu-connected print workflow, plus a phone-camera flow for back-stock that reads a sticker instead of retyping it.",
};
