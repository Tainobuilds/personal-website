import { WorkCard } from "./WorkCard";
import type { WorkContent } from "@/content/work/types";

export function Pillar({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: WorkContent[];
}) {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="mb-6 max-w-[640px] text-dark/80">{description}</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <WorkCard key={item.slug} work={item} />
        ))}
      </div>
    </div>
  );
}
