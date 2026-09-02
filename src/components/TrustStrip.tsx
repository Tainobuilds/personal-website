const BRANDS = [
  "Adidas",
  "SoundCloud",
  "Kiehl’s",
  "Jose Cuervo",
  "NYFW",
  "Swim Week",
  "Vida Y Moss",
  "Trends Dispensary",
];

export function TrustStrip() {
  return (
    <section aria-label="Brands I've worked with" className="bg-cream px-8 py-10">
      <ul className="flex flex-wrap items-center justify-center gap-x-11 gap-y-7">
        {BRANDS.map((brand) => (
          <li key={brand} className="whitespace-nowrap text-sm font-semibold text-muted opacity-80">
            {brand}
          </li>
        ))}
      </ul>
    </section>
  );
}
