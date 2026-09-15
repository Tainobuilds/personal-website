import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="bg-cream px-8 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-dark px-4 py-1.5 text-sm text-cream">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            Available for select projects
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-dark md:text-6xl">
            Front-End Developer &amp; Product Designer
          </h1>
          <p className="mb-8 max-w-lg text-xl leading-relaxed text-[#555555]">
            Bridging front-end engineering and product design. I build clean
            design systems and leverage AI tools to create frictionless
            workflows that solve everyday problems.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-dark px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-black"
          >
            Contact
          </Link>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/hero-portrait.jpg"
            alt="Yadan Taino"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <p className="mt-16 text-sm tracking-wide text-muted">Scroll To View More ↓</p>
    </section>
  );
}
