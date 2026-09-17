import type { WorkContent } from "@/content/work/types";

export function CaseStudyHeader({ work }: { work: WorkContent }) {
  return (
    <header className="mx-auto max-w-[1100px] px-8 pb-10 pt-8">
      <p className="mb-6 text-sm text-muted">
        <a href="/#projects" className="hover:text-accent">
          &larr; Back to Selected work
        </a>
      </p>
      <ul className="mb-5 flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border bg-sand px-3 py-1 text-xs uppercase tracking-wide text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <h1 className="mb-3 font-serif text-5xl font-semibold italic">{work.title}</h1>
      <p className="mb-8 max-w-[640px] text-lg text-dark/80">{work.tagline}</p>
      <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
        <div>
          <dt className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Role</dt>
          <dd className="text-sm">{work.role}</dd>
        </div>
        <div>
          <dt className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Timeline</dt>
          <dd className="text-sm">{work.timeline}</dd>
        </div>
        <div>
          <dt className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Tech Stack</dt>
          <dd className="text-sm">{work.techStack.join(", ")}</dd>
        </div>
        <div>
          <dt className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Links</dt>
          <dd className="text-sm">
            {work.links && work.links.length > 0 ? (
              <ul className="flex flex-col gap-0.5">
                {work.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener" className="text-accent underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-muted">Private / not yet public</span>
            )}
          </dd>
        </div>
      </dl>
    </header>
  );
}
