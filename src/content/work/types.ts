export type WorkStatus = "full" | "coming-soon";

export type DesignToken = { name: string; hex: string };

export type ArchitectureBlock =
  | { kind: "code"; heading: string; language: string; snippet: string }
  | { kind: "process"; heading: string; steps: string[] };

export type Mechanic = { label: string; value: string; description: string };

export type WorkContent = {
  slug: string;
  pillar: 1 | 2 | 3;
  status: WorkStatus;
  title: string;
  tagline: string;
  tags: string[];
  role: string;
  timeline: string;
  techStack: string[];
  links?: { label: string; href: string }[];
  bannerImage?: string;
  bannerVideo?: string;
  /** 01 / The Problem */
  problem: string;
  /** 02 / Human Insight */
  insight: { text: string; attribution?: string };
  /** 03 / Technical Architecture (or Design Process, for design-only projects) */
  architecture?: ArchitectureBlock;
  /** 04 / Design System Tokens — omitted when the project has no documented product design system */
  designSystem?: { name: string; tokens: DesignToken[]; typography?: string };
  /** Key Mechanics & Impact, 3-up */
  mechanics: [Mechanic, Mechanic, Mechanic];
  /** Homepage WorkCard outcome sentence */
  outcomeSummary: string;
};
