import Image from "next/image";
import type { WorkContent } from "@/content/work/types";
import { CaseStudyHeader } from "./CaseStudyHeader";

const STATS = [
  { value: "12m → <1m", label: "Intake-to-Print Speed" },
  { value: "7", label: "Fields Auto-Filled from Live API" },
  { value: "Real-Time", label: "Dispensary API Menu Sync" },
];

const FEATURE_KICKERS = ["01 / API ENGINE", "02 / FALLBACK VISION", "03 / BATCH LOCK", "04 / SHUTTER SPEED"];
const FEATURE_BADGES = ["200 OK", "Fallback Enabled", "Batch Locked", "~600ms"];

const FEATURE_ICONS = [
  // API / sync
  <path key="api" d="M8 12a4 4 0 0 1 4-4h4m0 0-2-2m2 2-2 2M16 12a4 4 0 0 1-4 4H8m0 0 2 2m-2-2 2-2" />,
  // Camera / vision
  <path
    key="vision"
    d="M4 8a2 2 0 0 1 2-2h1l1.5-2h7L17 6h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z M12 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
  />,
  // Lock
  <path key="lock" d="M6 11V8a6 6 0 1 1 12 0v3m-13 0h14v9H5v-9Z" />,
  // Shutter / aperture
  <path
    key="shutter"
    d="M12 3v6m6.36-1.64-4.24 4.24M21 12h-6M18.36 18.36l-4.24-4.24M12 21v-6M5.64 18.36l4.24-4.24M3 12h6M5.64 5.64l4.24 4.24"
  />,
];

function FeatureIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {FEATURE_ICONS[index]}
    </svg>
  );
}

function BrowserFrame({ src, alt, path }: { src: string; alt: string; path: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#1E1E1E] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-white/50">{path}</span>
      </div>
      <div className="relative aspect-[3/2] w-full bg-[#0D0D0D]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

function LabelPreviewBox({ image, caption }: { image?: string; caption: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-3">
      {image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
          <Image src={image} alt={caption} fill className="object-contain" />
        </div>
      ) : (
        <div
          aria-hidden
          className="flex aspect-[4/3] w-full items-center justify-center rounded-xl px-3 text-center text-xs uppercase tracking-wide text-white/40"
        >
          IMAGE: {caption}
        </div>
      )}
      <p className="p-3 text-xs leading-relaxed text-white/60">{caption}</p>
    </div>
  );
}

export function TrendsCaseStudy({ work }: { work: WorkContent }) {
  const [home, frontStockSearch, frontStockLabel] = work.gallery ?? [];
  const secondary = work.secondarySolution;

  return (
    <>
      <CaseStudyHeader work={work} />

      <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-8 pb-16">
        {/* 2. Hero Product Showcase — full-width browser-framed UI mockup */}
        {home?.image && (
          <div className="rounded-3xl border border-[#111111]/10 bg-[#111111] p-4 shadow-2xl md:p-8">
            <BrowserFrame src={home.image} alt={home.caption} path="trends.studio" />
          </div>
        )}

        {/* 3. Impact Metrics Banner */}
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-sand p-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="mb-1 text-5xl font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-dark/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 4. Section 01: The Challenge — text + legacy operational context */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[3fr_2fr]">
          <div className="rounded-2xl border border-border bg-sand p-8">
            <p className="mb-4 text-2xl font-bold tracking-tight">01 / The Challenge</p>
            <p className="leading-relaxed text-dark/80">{work.problem}</p>
          </div>
          {work.legacyContext && (
            <div className="overflow-hidden rounded-2xl border border-border bg-sand">
              {work.legacyContext.image ? (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={work.legacyContext.image}
                    alt={work.legacyContext.caption}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  aria-hidden
                  className="flex aspect-[4/3] w-full items-center justify-center px-4 text-center text-sm uppercase tracking-wide text-muted"
                >
                  IMAGE: Legacy backroom setup
                </div>
              )}
              <p className="p-4 text-sm text-dark/70">{work.legacyContext.caption}</p>
            </div>
          )}
        </div>

        {/* 5. Section 02: The Insight — dark-mode feature callout card */}
        <div className="rounded-2xl bg-[#111111] p-8 text-white">
          <p className="mb-4 text-2xl font-bold tracking-tight text-accent">02 / The Insight</p>
          <p className="text-xl leading-relaxed">
            <span className="text-accent">&ldquo;</span>
            {work.insight.text}
            <span className="text-accent">&rdquo;</span>
          </p>
          {work.insight.attribution && (
            <p className="mt-4 text-sm text-white/60">{work.insight.attribution}</p>
          )}
        </div>

        {/* 6a. Section 03: The Solution — Front Stock */}
        <div className="rounded-2xl border border-border bg-sand p-8">
          <p className="mb-1 text-2xl font-bold tracking-tight">03 / The Solution — Front Stock</p>
          <p className="mb-6 text-sm text-dark/70">
            Search the live menu, everything else fills itself in.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {frontStockSearch?.image && (
              <BrowserFrame
                src={frontStockSearch.image}
                alt={frontStockSearch.caption}
                path="trends.studio/front"
              />
            )}
            {frontStockLabel?.image && (
              <BrowserFrame
                src={frontStockLabel.image}
                alt={frontStockLabel.caption}
                path="trends.studio/front"
              />
            )}
          </div>
        </div>

        {/* 6b. Section 03 continued: The Solution — Back Stock */}
        {secondary && (
          <div className="rounded-2xl border border-border bg-sand p-8">
            <p className="mb-1 text-2xl font-bold tracking-tight">03 / The Solution — {secondary.heading}</p>
            <p className="mb-6 leading-relaxed text-dark/80">{secondary.narrative}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-4">
                {secondary.uiImage &&
                  (secondary.uiImage.image ? (
                    <BrowserFrame
                      src={secondary.uiImage.image}
                      alt={secondary.uiImage.caption}
                      path="trends.studio/back"
                    />
                  ) : (
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                      <div className="flex items-center gap-2 border-b border-white/10 bg-[#1E1E1E] px-4 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                        <span className="ml-3 rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-white/50">
                          trends.studio/back
                        </span>
                      </div>
                      <div
                        aria-hidden
                        className="flex aspect-[3/2] w-full items-center justify-center px-4 text-center text-xs uppercase tracking-wide text-white/40"
                      >
                        IMAGE: {secondary.uiImage.caption}
                      </div>
                    </div>
                  ))}
                {work.architecture && (
                  <ol className="grid grid-cols-1 gap-2 text-sm leading-relaxed text-dark/70 sm:grid-cols-2">
                    {work.architecture.steps.map((step, i) => (
                      <li key={step}>
                        <span className="mr-1.5 font-bold text-accent">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              {secondary.labelPreview && (
                <LabelPreviewBox
                  image={secondary.labelPreview.image}
                  caption={secondary.labelPreview.caption}
                />
              )}
            </div>
          </div>
        )}

        {/* 7. Section 04: Engineering Features — 4-card bento grid, closing */}
        <div>
          <p className="mb-4 text-2xl font-bold tracking-tight">04 / Engineering Features</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {work.mechanics.map((mechanic, i) => (
              <div
                key={mechanic.label}
                className="rounded-2xl border border-[#111111]/10 bg-cream p-6 transition-colors hover:border-accent/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 text-accent">
                      <FeatureIcon index={i} />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-wide text-accent">
                      {FEATURE_KICKERS[i] ?? `0${i + 1}`}
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-border bg-sand px-2.5 py-1 text-[11px] font-semibold text-dark/70">
                    {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />}
                    {FEATURE_BADGES[i]}
                  </span>
                </div>
                <p className="mb-1 text-xl font-bold">{mechanic.value}</p>
                <p className="mb-2 text-sm font-semibold">{mechanic.label}</p>
                <p className="text-sm leading-relaxed text-dark/70">{mechanic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
