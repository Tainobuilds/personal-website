export function Testimonial() {
  return (
    <section className="px-8 py-16">
      <h2 className="mb-8 text-4xl font-extrabold">Work that moves culture</h2>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.5fr]">
        <div
          aria-hidden
          className="flex aspect-[3/4] items-center justify-center rounded-lg border border-border bg-sand text-sm uppercase tracking-wide text-muted"
        >
          IMAGE: portrait
        </div>
        <blockquote className="text-2xl italic">
          &ldquo;Yadan brings rare clarity to complex ideas—shaping brands,
          products, and stories into work that feels both useful and
          culturally alive.&rdquo;
          <cite className="mt-6 block text-base not-italic text-muted">
            Creative Partner
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
