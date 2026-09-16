export type WorkStatus = "full" | "coming-soon";

export type DesignToken = { name: string; hex: string };

export type ArchitectureBlock = { heading: string; steps: string[] };

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
  /** Before/After operational comparison — omit image to render the standard honest placeholder */
  beforeAfter?: {
    metricBadge: string;
    before: { heading: string; image?: string; points: string[] };
    after: { heading: string; image?: string; points: string[] };
  };
  /** Embedded video walkthrough (e.g. Loom) */
  videoEmbed?: { url: string; heading: string; subtext: string };
  /** Real product screenshots — omit image to render the standard honest placeholder */
  gallery?: { image?: string; caption: string }[];
  /** 01 / The Problem */
  problem: string;
  /** 02 / Human Insight */
  insight: { text: string; attribution?: string };
  /** 03 / Technical Architecture (or Design Process, for design-only projects) */
  architecture?: ArchitectureBlock;
  /** 04 / Design System Tokens — omitted when the project has no documented product design system */
  designSystem?: { name: string; tokens: DesignToken[]; typography?: string };
  /** Key Mechanics & Impact, 3-up grid (wraps to additional rows past 3) */
  mechanics: Mechanic[];
  /** Overrides the default "Impact" heading above the mechanics grid */
  mechanicsHeading?: string;
  /** Homepage WorkCard outcome sentence */
  outcomeSummary: string;
};
