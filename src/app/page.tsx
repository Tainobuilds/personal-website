import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { Pillar } from "@/components/Pillar";
import { Testimonial } from "@/components/Testimonial";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { getWorkByPillar } from "@/lib/workData";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <section id="projects" className="px-8 py-16">
        <h2 className="mb-2 text-4xl font-extrabold">Selected work</h2>
        <p className="mb-12 max-w-[640px] italic text-dark/80">
          My focus is health &amp; wellness, lifestyle, and tech—from
          fitness and recovery to skincare to the tools I build. Industries I
          don&apos;t just design for—I live in them.
        </p>
        <Pillar
          title="High-Craft Visual Design & Prototyping"
          description="Editorial-quality UX/UI work, from real user research and usability testing to shipped design systems."
          items={getWorkByPillar(1)}
        />
        <Pillar
          title="AI Workflows & Interactive Systems"
          description="AI as an assistive layer, not a black box — natural-language matching and automated triage that keep a human decision in the loop."
          items={getWorkByPillar(2)}
        />
        <Pillar
          title="Data-Driven MVPs & Product Engineering"
          description="Real API data, functional logic, and full-stack execution — not just a demo."
          items={getWorkByPillar(3)}
        />
      </section>
      <Testimonial />
      <About />
      <Faq />
    </>
  );
}
