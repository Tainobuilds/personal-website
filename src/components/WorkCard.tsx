import Link from "next/link";
import Image from "next/image";
import type { WorkContent } from "@/content/work/types";

export function WorkCard({ work }: { work: WorkContent }) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group block cursor-pointer transition-all duration-300 hover:scale-[1.01]"
    >
      <article>
        {work.bannerImage ? (
          <div className="relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-lg bg-sand">
            <Image src={work.bannerImage} alt={work.title} fill className="object-cover" />
          </div>
        ) : (
          <div
            aria-hidden
            className="mb-3 flex aspect-[4/5] w-full items-center justify-center rounded-lg border border-border bg-sand text-sm uppercase tracking-wide text-muted"
          >
            IMAGE: {work.title}
          </div>
        )}
        <h3 className="mb-1.5 text-xl font-bold group-hover:text-accent">{work.title}</h3>
        <p className="mb-2.5 text-[0.95rem] leading-snug text-dark/80">{work.outcomeSummary}</p>
        <p className="mb-3 flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-sand px-2.5 py-1 text-xs uppercase tracking-wide text-muted"
            >
              {tag}
            </span>
          ))}
        </p>
        <span className="inline-block text-sm font-semibold text-accent underline">
          View case study
        </span>
      </article>
    </Link>
  );
}
