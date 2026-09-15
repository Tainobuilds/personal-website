import type { WorkContent } from "./types";

export const ticketTriage: WorkContent = {
  slug: "ticket-triage",
  pillar: 2,
  status: "full",
  title: "Ticket Triage — MVP",
  tagline:
    "Automated support-ticket triage — categorization, urgency scoring, and SLA-risk flagging — so specialists open an already-prioritized queue.",
  tags: ["Development", "Workflow Automation", "Product Design"],
  role: "Product Designer & Developer",
  timeline: "2026",
  techStack: ["Vanilla JS", "Rule-based engine"],
  links: [{ label: "View live app", href: "https://support-ticket-sorter.vercel.app" }],
  problem:
    "Support specialists spend excessive time manually organizing and sorting high ticket volumes before they can even begin troubleshooting. That delay, plus process gaps, leads to missed SLAs and increased customer frustration.",
  insight: {
    text: "A ticket's subject line lies more often than its body. The \"critical floor\" rule exists because a real billing incident sat for four hours — its subject read as a routine account question.",
    attribution: "Design rationale, modeled on a real incident",
  },
  architecture: {
    heading: "Critical floor rule",
    steps: [
      "Categorization and scoring logic (`sorting.js`) is kept fully separate from the UI, so it can be tested or swapped independently.",
      "A base urgency score comes from the ticket's category and support tier.",
      "If the ticket's CONTENT reads as critical — outage language, or a financial-impact phrase like \"charged twice\" — the score is raised to at least P2, even when the subject line looked routine.",
      "SLA risk is applied on top, so a ticket close to breaching its deadline still surfaces even if its category isn't otherwise severe.",
    ],
  },
  mechanics: [
    {
      label: "Categorization",
      value: "Automatic",
      description: "Keyword-rule engine sorts each ticket (Account, Billing, Outage, Feature, General) before a specialist opens it.",
    },
    {
      label: "SLA-risk flagging",
      value: "On track / At risk / Breached",
      description: "Tickets close to missing their SLA deadline surface even if their category isn't otherwise severe.",
    },
    {
      label: "Critical floor",
      value: "Min. P2",
      description: "A guaranteed minimum priority for critical-severity language, regardless of SLA — an explicit human override still wins.",
    },
  ],
  outcomeSummary:
    "Automated support ticket triage — categorization, urgency scoring, and SLA-risk flagging — so specialists open an already-prioritized queue.",
};
