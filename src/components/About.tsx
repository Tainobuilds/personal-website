import { CredentialTimeline } from "./CredentialTimeline";

const CURRENTLY_TAGS = ["Pursuit AI-Native cohort", "Nonexclusive with FFT Models"];

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 items-end gap-8 px-8 py-16 md:grid-cols-2"
    >
      <h2 className="text-6xl font-extrabold">About</h2>

      <p className="col-span-full flex flex-wrap items-center gap-2.5 text-sm">
        <span className="font-bold uppercase tracking-wide text-muted">Currently</span>
        {CURRENTLY_TAGS.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1.5 text-dark/80"
          >
            {tag}
          </span>
        ))}
      </p>

      <p className="mb-4 italic text-dark/80">
        I&apos;m Yadan Taino — a Front-End Developer and Product Designer
        based in New York City. I bridge the gap between human-centered
        design and modern front-end execution. From building robust design
        systems in Figma and React to leveraging AI tools for workflow
        optimization, I focus on crafting intuitive digital experiences that
        solve real human problems.
      </p>
      <p className="mb-4 italic text-dark/80">
        I design and ship digital products and brands for health &amp;
        wellness, lifestyle, and tech—from first concept to live product.
        Founders and business owners come to me when they don&apos;t want a
        design file and a hand-off; they want the thing built, launched, and
        true to their brand.
      </p>
      <p className="mb-4 italic text-dark/80">
        Years of working as a commercial model—campaigns, runway, life in
        front of the camera—sharpened something most designers never
        develop: a lived understanding of aesthetics, culture, and how a
        brand actually feels to the people inside it. These aren&apos;t
        industries I study. They&apos;re industries I&apos;m in.
      </p>
      <p className="mb-4 italic text-dark/80">
        Everything I build has one goal: products that genuinely improve how
        people move, feel, and show up. That&apos;s why my flagship project,
        Aligned, is a recovery and movement app built alongside a licensed
        physical therapist—clinical expertise, designed and shipped.
      </p>

      <CredentialTimeline />
    </section>
  );
}
