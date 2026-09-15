import type { WorkContent } from "./types";

export const trends: WorkContent = {
  slug: "trends",
  pillar: 3,
  status: "full",
  title: "Trends",
  tagline:
    "Automated Dispensary Label & Product Engine — live menu data in, a state-compliant Zebra label out, no hand-typing.",
  tags: ["Retail Automation", "Real-Time Data", "Workflow UX"],
  role: "Product Designer & Developer",
  timeline: "2026",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK", "Redis"],
  problem:
    "Back-of-house staff at a Long Island City dispensary sat at an old backroom laptop hand-typing every label into ZebraDesigner Essentials — product name, strain, tier pricing, THC% — item by item, disconnected from the live menu and compliance data (Lot #, expiration, Metrc tag) they were already holding in their hands. A single intake batch took roughly 10-12 minutes, with real risk of a mistyped price or potency number.",
  insight: {
    text: "A phone in the back room already has a camera — but AI vision costs money and isn't instant. The right first move is a plain client-side QR decode; AI vision only runs when that fails.",
    attribution: "Architecture decision — cost/accuracy-conscious, not AI-first by default",
  },
  architecture: {
    kind: "code",
    heading: "QR-first, AI-vision fallback",
    language: "ts",
    snippet: `// Phone captures a sticker photo. Try the free, exact path first.
const qrText = decodeQrClientSide(capturedFrame); // jsQR, on-device

if (qrText && looksLikeStickerData(qrText)) {
  // Free and exact — no AI call at all.
  await sendToLaptop({ lot, exp, metrcTag, source: "qr" });
} else {
  // Only now does the frame leave the phone for AI vision.
  const result = await fetch(\`/api/pair/\${pairId}/frame\`, {
    method: "POST",
    body: frameBlob,
  });
  await sendToLaptop({ ...result.json(), source: "vision" });
}`,
  },
  beforeAfter: {
    metricBadge: "~10-12 min → <60 sec per batch",
    before: {
      heading: "Legacy Workflow — Backroom Laptop",
      points: [
        "Hand-typed into ZebraDesigner Essentials, field by field",
        "No connection to the live menu — prices and potency copied off a printed sheet",
        "~10-12 minutes per intake batch",
        "A mistyped price or THC% ships straight to the shelf",
      ],
    },
    after: {
      heading: "Trends — Automated Label Engine",
      points: [
        "Pulls live product, pricing, and potency data from the Sweed POS API",
        "QR-first phone capture for back-stock, AI vision only as a fallback",
        "Under 60 seconds per batch",
        "Data comes from the source system, not a re-typed copy",
      ],
    },
  },
  mechanics: [
    {
      label: "Front Stock",
      value: "Live menu search",
      description:
        "Search the dispensary's actual live menu (brand, product, category, THC%, price) and print a shelf tag — no hand-typing from a printed price list.",
    },
    {
      label: "QR-first extraction",
      value: "Free before paid",
      description:
        "A sticker's QR code is decoded on-device first (free, instant, exact). AI vision only runs as a fallback when that fails.",
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
    "Replaced hand-typed dispensary labels with a live-menu-connected print workflow, plus a phone-camera flow for back-stock that tries a free QR decode before ever calling AI vision.",
};
