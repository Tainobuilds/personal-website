import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden px-8 py-16">
      <Image
        src="/images/hero-portrait.jpg"
        alt="Yadan Taino"
        fill
        priority
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div className="relative z-10 max-w-2xl">
        <p className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
          Available for select projects
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Front-End Developer &amp; Product Designer
        </h1>
        <p className="mb-8 max-w-lg text-xl leading-relaxed text-white/80">
          Bridging front-end engineering and product design. I build clean
          design systems, create useful apps and sites, and leverage AI
          tools to make workflows easier and frictionless — solving
          everyday problems.
        </p>
        <Link
          href="/#contact"
          className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-cream"
        >
          Contact
        </Link>
      </div>
      <p className="absolute bottom-6 right-8 z-10 text-sm tracking-wide text-white/70">
        Scroll To View More ↓
      </p>
    </section>
  );
}
