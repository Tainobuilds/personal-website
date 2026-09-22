const CREDENTIALS = [
  { role: "Pursuit Software Development AI Program", year: "2026" },
  { role: "Google UX Design Certification", year: undefined },
  { role: "Graphic Designer — COOP Tech", year: "2023–2024" },
];

export function CredentialTimeline() {
  return (
    <div className="col-span-full grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-2">
      <ul className="flex flex-col gap-4">
        {CREDENTIALS.map((item) => (
          <li
            key={item.role}
            className="flex items-baseline justify-between gap-4 border-b border-border pb-3 not-italic"
          >
            <span className="text-sm font-semibold">{item.role}</span>
            {item.year && <span className="text-sm text-muted">{item.year}</span>}
          </li>
        ))}
      </ul>
      <p className="text-sm not-italic text-dark/70">
        A quick look at the credential trail — from graphic design
        fundamentals to AI-native product development.
      </p>
    </div>
  );
}
