import Image from "next/image";
import type { WorkContent } from "@/content/work/types";
import { CaseStudyHeader } from "./CaseStudyHeader";

export function CaseStudyBento({ work }: { work: WorkContent }) {
  const hasArchitecture = !!work.architecture;
  const hasDesignSystem = !!work.designSystem;

  return (
    <>
      <CaseStudyHeader work={work} />

      {/* Bento grid */}
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 px-8 pb-16 sm:grid-cols-3">
        {/* Hero mockup card — full bleed, spans 3 */}
        {(work.bannerVideo || work.bannerImage) && (
          <div className="col-span-1 overflow-hidden rounded-2xl bg-sand sm:col-span-3">
            {work.bannerVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={work.bannerImage}
                className="block max-h-[560px] w-full object-cover"
              >
                <source src={work.bannerVideo} type="video/mp4" />
              </video>
            ) : (
              work.bannerImage && (
                <div className="relative aspect-[16/9] w-full">
                  <Image src={work.bannerImage} alt={work.title} fill className="object-cover" />
                </div>
              )
            )}
          </div>
        )}

        {/* Embedded video walkthrough — spans 3, right below the hero overview */}
        {work.videoEmbed && (
          <div className="col-span-1 rounded-2xl border border-border bg-sand p-8 sm:col-span-3">
            <p className="mb-2 text-2xl font-bold tracking-tight">{work.videoEmbed.heading}</p>
            <p className="mb-5 max-w-2xl leading-relaxed text-dark/70">{work.videoEmbed.subtext}</p>
            <div className="aspect-video overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                src={work.videoEmbed.url}
                title={work.videoEmbed.heading}
                allow="fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        )}

        {/* Before / After operational comparison — spans 3 */}
        {work.beforeAfter && (
          <div className="col-span-1 sm:col-span-3">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-2xl font-bold tracking-tight">Before &amp; After</p>
              <span className="rounded-full bg-dark px-4 py-1.5 text-sm font-semibold text-cream">
                {work.beforeAfter.metricBadge}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[work.beforeAfter.before, work.beforeAfter.after].map((side) => (
                <div
                  key={side.heading}
                  className="overflow-hidden rounded-2xl border border-border bg-sand"
                >
                  {side.image ? (
                    <div className="relative aspect-[4/3] w-full">
                      <Image src={side.image} alt={side.heading} fill className="object-cover" />
                    </div>
                  ) : (
                    <div
                      aria-hidden
                      className="flex aspect-[4/3] w-full items-center justify-center text-sm uppercase tracking-wide text-muted"
                    >
                      IMAGE: {side.heading}
                    </div>
                  )}
                  <div className="p-6">
                    <p className="mb-3 font-semibold">{side.heading}</p>
                    <ul className="flex flex-col gap-2 text-sm leading-relaxed text-dark/70">
                      {side.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* The Challenge — spans 2 */}
        <div className="col-span-1 rounded-2xl border border-border bg-sand p-8 sm:col-span-2">
          <p className="mb-4 text-2xl font-bold tracking-tight">The Challenge</p>
          <p className="leading-relaxed text-dark/80">{work.problem}</p>
        </div>

        {/* Product gallery — real screenshots, spans 3 */}
        {work.gallery && work.gallery.length > 0 && (
          <div className="col-span-1 grid grid-cols-1 gap-4 sm:col-span-3 sm:grid-cols-3">
            {work.gallery.map((shot) => (
              <div
                key={shot.caption}
                className="overflow-hidden rounded-2xl border border-border bg-sand"
              >
                {shot.image ? (
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={shot.image} alt={shot.caption} fill className="object-cover" />
                  </div>
                ) : (
                  <div
                    aria-hidden
                    className="flex aspect-[4/3] w-full items-center justify-center px-4 text-center text-sm uppercase tracking-wide text-muted"
                  >
                    IMAGE: {shot.caption}
                  </div>
                )}
                <p className="p-4 text-sm text-dark/70">{shot.caption}</p>
              </div>
            ))}
          </div>
        )}

        {/* The Insight — dark accent, spans 1 */}
        <div className="col-span-1 rounded-2xl bg-dark p-8 text-cream">
          <p className="mb-4 text-2xl font-bold tracking-tight text-[#F9A826]">The Insight</p>
          <p className="italic leading-relaxed">{work.insight.text}</p>
          {work.insight.attribution && (
            <p className="mt-4 text-sm text-cream/60">{work.insight.attribution}</p>
          )}
        </div>

        {/* The Solution — dark card, process steps only (no raw code) */}
        {hasArchitecture && work.architecture && (
          <div
            className={`col-span-1 rounded-2xl bg-[#1a1814] p-8 text-cream ${
              hasDesignSystem ? "" : "sm:col-span-3"
            }`}
          >
            <p className="mb-4 text-2xl font-bold tracking-tight text-[#4ade80]">The Solution</p>
            <p className="mb-4 font-semibold">{work.architecture.heading}</p>
            <ol className="flex flex-col gap-3 leading-relaxed text-cream/80">
              {work.architecture.steps.map((step, i) => (
                <li key={i}>
                  <span className="mr-2 text-[#4ade80]">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Design System — spans 2 */}
        {hasDesignSystem && work.designSystem && (
          <div className="col-span-1 rounded-2xl border border-border bg-sand p-8 sm:col-span-2">
            <p className="mb-4 text-2xl font-bold tracking-tight">Design System</p>
            <p className="mb-4 text-sm text-dark/80">{work.designSystem.name}</p>
            <div className="mb-4 flex flex-wrap gap-3">
              {work.designSystem.tokens.map((token) => (
                <div key={token.name} className="flex items-center gap-2">
                  <span
                    className="h-8 w-8 rounded-full border border-border"
                    style={{ backgroundColor: token.hex }}
                  />
                  <span className="text-xs">
                    <span className="block font-semibold">{token.name}</span>
                    <span className="text-muted">{token.hex}</span>
                  </span>
                </div>
              ))}
            </div>
            {work.designSystem.typography && (
              <p className="text-sm leading-relaxed text-dark/70">{work.designSystem.typography}</p>
            )}
          </div>
        )}

        {/* Product walkthrough — phone screens on a dark stage, spans 3 */}
        {work.walkthrough && (
          <div className="col-span-1 rounded-3xl bg-[#1A1814] p-6 text-cream sm:col-span-3 md:p-10">
            <p className="mb-2 text-2xl font-bold tracking-tight">{work.walkthrough.heading}</p>
            <p className="mb-8 max-w-2xl leading-relaxed text-cream/70">{work.walkthrough.intro}</p>

            {work.walkthrough.overview && (
              <figure className="mb-12">
                <div className="relative aspect-[1930/1678] overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={work.walkthrough.overview.image}
                    alt={work.walkthrough.overview.caption}
                    fill
                    sizes="(max-width: 1100px) 100vw, 1000px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-cream/50">
                  {work.walkthrough.overview.caption}
                </figcaption>
              </figure>
            )}

            <ol className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {work.walkthrough.steps.map((step, i) => (
                <li key={step.label} className="flex flex-col">
                  <div className="relative mx-auto mb-5 aspect-[644/1399] w-full max-w-[240px]">
                    <Image
                      src={step.image}
                      alt={`${step.label} screen`}
                      fill
                      sizes="240px"
                      className="object-contain"
                    />
                  </div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-accent">
                    {String(i + 1).padStart(2, "0")} / {step.group}
                  </p>
                  <p className="mb-2 text-lg font-bold leading-snug">{step.title}</p>
                  <p className="text-sm leading-relaxed text-cream/70">{step.caption}</p>
                  {step.principle && (
                    <p className="mt-3 inline-block self-start rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-semibold text-cream/60">
                      {step.principle}
                    </p>
                  )}
                </li>
              ))}
              {work.walkthrough.note && (
                <li className="flex flex-col justify-center rounded-2xl border border-white/10 p-6">
                  <p className="mb-2 text-lg font-bold leading-snug">{work.walkthrough.note.title}</p>
                  <p className="text-sm leading-relaxed text-cream/70">{work.walkthrough.note.body}</p>
                </li>
              )}
            </ol>
          </div>
        )}

        {/* Impact / Features — 3-up, spans 3 */}
        <div className="col-span-1 sm:col-span-3">
          <p className="mb-4 text-2xl font-bold tracking-tight">
            {work.mechanicsHeading ?? "Impact"}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {work.mechanics.map((mechanic) => (
              <div key={mechanic.label} className="rounded-2xl border border-border bg-cream p-6">
                <p className="mb-1 text-2xl font-bold text-accent">{mechanic.value}</p>
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
