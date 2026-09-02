export default function WorkNotFound() {
  return (
    <section className="mx-auto max-w-[700px] px-8 py-24 text-center">
      <h1 className="mb-4 text-4xl font-extrabold">Case study not found</h1>
      <p className="mb-8 text-dark/80">
        That project doesn&apos;t exist yet — or the link is out of date.
      </p>
      <a href="/#projects" className="text-accent underline">
        &larr; Back to Selected work
      </a>
    </section>
  );
}
