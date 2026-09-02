import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen">
      <Image
        src="/images/hero-portrait.jpg"
        alt="Yadan Taino standing on a New York City street at night"
        fill
        priority
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/55" />
      <div className="relative z-10 flex min-h-screen max-w-[600px] flex-col px-8 py-12 text-white">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
          Available for select projects
        </p>
        <h1 className="mb-4 text-5xl font-extrabold leading-tight">
          Front-End Developer &amp; Product Designer
        </h1>
        <p className="max-w-[480px] text-lg text-[#ddd]">
          Bridging front-end engineering and product design. I build clean
          design systems and leverage AI tools to create frictionless
          workflows that solve everyday problems.
        </p>
        <p className="mt-auto text-sm tracking-wide text-[#ccc]">
          Scroll To View More ↓
        </p>
      </div>
    </section>
  );
}
