import Image from "next/image";

export function Testimonial() {
  return (
    <section className="px-8 py-16">
      <h2 className="mb-8 text-4xl font-extrabold">Work that moves culture</h2>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.5fr]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-sand">
          <Image
            src="/images/testimonial-portrait.jpg"
            alt="Yadan Taino"
            fill
            className="object-cover"
          />
        </div>
        <blockquote className="text-2xl italic">
          &ldquo;Yadan Taino brings rare clarity to complex ideas—shaping brands,
          products, and stories into work that feels both useful and
          culturally alive.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
