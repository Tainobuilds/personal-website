import type { WorkContent } from "./types";

export const insights311: WorkContent = {
  slug: "311-insights",
  pillar: 3,
  status: "coming-soon",
  title: "311 Insights",
  tagline:
    "Turned raw, live NYC 311 data into filterable charts and a map that surface real reporting patterns by borough and complaint type.",
  tags: ["Development", "Data Viz", "Product Engineering"],
  role: "Developer",
  timeline: "2026",
  techStack: ["JavaScript", "NYC Open Data (Socrata API)"],
  problem:
    "Real open-source live data (the NYC 311 Socrata API), used to surface actual insights — not a static demo dataset.",
  insight: {
    text: "Full case study coming soon.",
  },
  mechanics: [
    { label: "Live data", value: "NYC 311", description: "Queries the public Socrata API directly." },
    { label: "Filters", value: "Borough / type", description: "Charts and map filter by complaint type and borough." },
    { label: "Status", value: "In progress", description: "Full write-up not yet built." },
  ],
  outcomeSummary:
    "Turned raw, live NYC 311 data into filterable charts and a map that surface real reporting patterns by borough and complaint type.",
};
