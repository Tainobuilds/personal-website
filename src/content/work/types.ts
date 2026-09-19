export type WorkStatus = "full" | "coming-soon";

export type DesignToken = { name: string; hex: string };

export type ArchitectureBlock = { heading: string; steps: string[] };

export type Mechanic = { label: string; value: string; description: string };

export type WalkthroughStep = {
  /** Portrait phone-screen image (transparent rounded corners, ~644x1399) */
  image: string;
  /** Prototype section this screen belongs to, e.g. "Onboarding" */
  group: string;
  /** Short screen name, e.g. "Welcome" */
  label: string;
  title: string;
  caption: string;
  /** Design principle this screen is the clearest example of */
  principle?: string;
};

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
  /** A "before" legacy-context image for The Challenge — omit image for the standard honest placeholder */
  legacyContext?: { image?: string; caption: string };
  /** 01 / The Problem */
  problem: string;
  /** 02 / Human Insight */
  insight: { text: string; attribution?: string };
  /** 03 / Technical Architecture (or Design Process, for design-only projects) */
  architecture?: ArchitectureBlock;
  /** Step-by-step product story told through phone screens on a dark stage */
  walkthrough?: {
    heading: string;
    intro: string;
    /** Wide shot of the whole interactive prototype, shown above the steps */
    overview?: { image: string; caption: string };
    steps: WalkthroughStep[];
    /** Optional closing tile that fills the last grid cell */
    note?: { title: string; body: string };
  };
  /** A second, parallel solution narrative (e.g. a different flow within the same product) */
  secondarySolution?: {
    heading: string;
    narrative: string;
    uiImage?: { image?: string; caption: string };
    productShot?: { image?: string; caption: string };
    labelPreview?: { image?: string; caption: string };
  };
  /** Extra real-world supporting photos for a solution section (e.g. hardware/physical setup) */
  extraPhotos?: { image?: string; caption: string }[];
  /** 04 / Design System Tokens — omitted when the project has no documented product design system */
  designSystem?: { name: string; tokens: DesignToken[]; typography?: string };
  /** Key Mechanics & Impact, 3-up grid (wraps to additional rows past 3) */
  mechanics: Mechanic[];
  /** Overrides the default "Impact" heading above the mechanics grid */
  mechanicsHeading?: string;
  /** Homepage WorkCard outcome sentence */
  outcomeSummary: string;
};
