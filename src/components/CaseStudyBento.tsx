import Image from "next/image";
import type { WorkContent } from "@/content/work/types";

export function CaseStudyBento({ work }: { work: WorkContent }) {
  const hasArchitecture = !!work.architecture;
  const hasDesignSystem = !!work.designSystem;

  return (
    <>
      {/* Editorial header */}
      <header className="mx-auto max-w-[1100px] px-8 pb-10 pt-8">
        <p className="mb-6 text-sm text-muted">
          <a href="/#projects" className="hover:text-accent">
            &larr; Back to Selected work
          </a>
        </p>
        <ul className="mb-5 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-sand px-3 py-1 text-xs uppercase tracking-wide text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h1 className="mb-3 font-serif text-5xl font-semibold italic">{work.title}</h1>
        <p className="mb-8 max-w-[640px] text-lg text-dark/80">{work.tagline}</p>
        <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
          <div>
            <dt className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Role</dt>
            <dd className="text-sm">{work.role}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Timeline</dt>
            <dd className="text-sm">{work.timeline}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Tech Stack</dt>
            <dd className="text-sm">{work.techStack.join(", ")}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Links</dt>
            <dd className="text-sm">
              {work.links && work.links.length > 0 ? (
                <ul className="flex flex-col gap-0.5">
                  {work.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener" className="text-accent underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-muted">Private / not yet public</span>
              )}
            </dd>
          </div>
        </dl>
      </header>

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

        {/* Before / After operational comparison — spans 3 */}
        {work.beforeAfter && (
          <div className="col-span-1 sm:col-span-3">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-wide text-accent">
                Before &amp; After
              </p>
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
                    <ul className="flex flex-col gap-2 text-sm text-dark/70">
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

        {/* Embedded video walkthrough — spans 3 */}
        {work.videoEmbed && (
          <div className="col-span-1 rounded-2xl border border-border bg-sand p-7 sm:col-span-3">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
              {work.videoEmbed.heading}
            </p>
            <p className="mb-5 max-w-2xl text-sm text-dark/70">{work.videoEmbed.subtext}</p>
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

        {/* 01 / The Problem — spans 2 */}
        <div className="col-span-1 rounded-2xl border border-border bg-sand p-7 sm:col-span-2">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
            01 / The Problem
          </p>
          <p className="text-dark/80">{work.problem}</p>
        </div>

        {/* 02 / Human Insight — dark accent, spans 1 */}
        <div className="col-span-1 rounded-2xl bg-dark p-7 text-cream">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#F9A826]">
            02 / Human Insight
          </p>
          <p className="italic leading-snug">{work.insight.text}</p>
          {work.insight.attribution && (
            <p className="mt-4 text-sm text-cream/60">{work.insight.attribution}</p>
          )}
        </div>

        {/* 03 / Technical Architecture — dark code box */}
        {hasArchitecture && work.architecture && (
          <div
            className={`col-span-1 rounded-2xl bg-[#1a1814] p-7 text-cream ${
              hasDesignSystem ? "" : "sm:col-span-3"
            }`}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#4ade80]">
              03 / {work.architecture.kind === "code" ? "Technical Architecture" : "Design Process"}
            </p>
            <p className="mb-4 font-semibold">{work.architecture.heading}</p>
            {work.architecture.kind === "code" ? (
              <pre className="overflow-x-auto rounded-lg bg-black/30 p-4 text-xs leading-relaxed">
                <code>{work.architecture.snippet}</code>
              </pre>
            ) : (
              <ol className="flex flex-col gap-3 text-sm text-cream/80">
                {work.architecture.steps.map((step, i) => (
                  <li key={i}>
                    <span className="mr-2 text-[#4ade80]">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}

        {/* 04 / Design System Tokens — spans 2 */}
        {hasDesignSystem && work.designSystem && (
          <div className="col-span-1 rounded-2xl border border-border bg-sand p-7 sm:col-span-2">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
              04 / Design System Tokens
            </p>
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
              <p className="text-sm text-dark/70">{work.designSystem.typography}</p>
            )}
          </div>
        )}

        {/* Key Mechanics & Impact — 3-up, spans 3 */}
        <div className="col-span-1 grid grid-cols-1 gap-4 sm:col-span-3 sm:grid-cols-3">
          {work.mechanics.map((mechanic) => (
            <div key={mechanic.label} className="rounded-2xl border border-border bg-cream p-6">
              <p className="mb-1 text-2xl font-bold text-accent">{mechanic.value}</p>
              <p className="mb-2 text-sm font-semibold">{mechanic.label}</p>
              <p className="text-sm text-dark/70">{mechanic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
