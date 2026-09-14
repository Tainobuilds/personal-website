import type { WorkContent } from "./types";

export const trends: WorkContent = {
  slug: "trends",
  pillar: 3,
  status: "full",
  title: "Trends",
  tagline:
    "An internal label-printing workflow for a dispensary — live menu data in, a printed Zebra label out, no hand-typing.",
  tags: ["Retail Automation", "Real-Time Data", "Workflow UX"],
  role: "Product Designer & Developer",
  timeline: "2026",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK", "Redis"],
  problem:
    "Back-of-house staff at a Long Island City dispensary were hand-typing every label into ZebraDesigner Essentials — slow, error-prone, and disconnected from the live menu and compliance data (Lot #, expiration, Metrc tag) staff were already holding in their hands.",
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
