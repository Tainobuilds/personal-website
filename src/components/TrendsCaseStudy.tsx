import Image from "next/image";
import type { WorkContent } from "@/content/work/types";
import { CaseStudyHeader } from "./CaseStudyHeader";

const STATS = [
  { value: "12m → <1m", label: "Intake-to-Print Speed" },
  { value: "7", label: "Fields Auto-Filled from Live API" },
  { value: "Real-Time", label: "Dispensary API Menu Sync" },
];

const FEATURE_KICKERS = ["01 / API ENGINE", "02 / FALLBACK VISION", "03 / BATCH LOCK", "04 / SHUTTER SPEED"];

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

function FramedShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0D0D0D] p-3">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

export function TrendsCaseStudy({ work }: { work: WorkContent }) {
  const [home, frontStock, backStock] = work.gallery ?? [];

  return (
    <>
      <CaseStudyHeader work={work} />

      <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-8 pb-16">
        {/* Hero media showcase */}
        {home?.image && (
          <div className="overflow-hidden rounded-3xl border border-[#111111]/10 bg-[#111111] p-4 shadow-2xl md:p-8">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
              <Image src={home.image} alt={home.caption} fill className="object-cover" priority />
            </div>
          </div>
        )}

        {/* Big stat / impact banner */}
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-sand p-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="mb-1 text-5xl font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-dark/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* The Challenge */}
        <div className="rounded-2xl border border-border bg-sand p-8">
          <p className="mb-4 text-2xl font-bold tracking-tight">The Challenge</p>
          <p className="leading-relaxed text-dark/80">{work.problem}</p>
        </div>

        {/* Feature Spotlight 1 — full width */}
        {frontStock?.image && (
          <div className="overflow-hidden rounded-2xl border border-border bg-cream">
            <FramedShot src={frontStock.image} alt={frontStock.caption} />
            <div className="p-6">
              <p className="mb-1 font-semibold">Front Stock — Live Menu Search</p>
              <p className="text-sm leading-relaxed text-dark/70">{frontStock.caption}</p>
            </div>
          </div>
        )}

        {/* Feature Spotlight 2 — asymmetrical 2-column */}
        {backStock?.image && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[3fr_2fr]">
            <div className="overflow-hidden rounded-2xl border border-border bg-cream">
              <FramedShot src={backStock.image} alt={backStock.caption} />
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-border bg-sand p-6">
              <p className="mb-2 font-semibold">Back Stock Auto-Fill</p>
              <p className="text-sm leading-relaxed text-dark/70">
                Category, Brand, Size/Type, Strain, Class, Potency, and Price all fill in on their own
                once a product is matched — the same panel builds the thermal label preview live, so
                what prints is exactly what's on screen.
              </p>
            </div>
          </div>
        )}

        {/* The Insight — high-contrast accent card */}
        <div className="rounded-2xl bg-[#111111] p-8 text-white">
          <p className="mb-4 text-2xl font-bold tracking-tight text-accent">The Insight</p>
          <p className="text-xl leading-relaxed">
            <span className="text-accent">&ldquo;</span>
            {work.insight.text}
            <span className="text-accent">&rdquo;</span>
          </p>
          {work.insight.attribution && (
            <p className="mt-4 text-sm text-white/60">{work.insight.attribution}</p>
          )}
        </div>

        {/* The Solution — horizontal timeline */}
        {work.architecture && (
          <div className="rounded-2xl border border-border bg-sand p-8">
            <p className="mb-1 text-2xl font-bold tracking-tight">The Solution</p>
            <p className="mb-6 text-sm text-dark/70">{work.architecture.heading}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              {work.architecture.steps.map((step, i) => (
                <div key={step} className="relative rounded-xl border border-border bg-cream p-5">
                  <p className="mb-2 text-2xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <p className="text-sm leading-relaxed text-dark/80">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features grid — polished */}
        <div>
          <p className="mb-4 text-2xl font-bold tracking-tight">
            {work.mechanicsHeading ?? "Features"}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {work.mechanics.map((mechanic, i) => (
              <div
                key={mechanic.label}
                className="rounded-2xl border border-border bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 text-accent">
                    <FeatureIcon index={i} />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">
                    {FEATURE_KICKERS[i] ?? `0${i + 1}`}
                  </p>
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
