import { WORK_INDEX } from "@/content/workIndex";
import type { WorkContent } from "@/content/work/types";

export function getAllWork(): WorkContent[] {
  return WORK_INDEX;
}

export function getWorkByPillar(pillar: 1 | 2 | 3): WorkContent[] {
  return WORK_INDEX.filter((item) => item.pillar === pillar);
}

export function getWorkBySlug(slug: string): WorkContent | undefined {
  return WORK_INDEX.find((item) => item.slug === slug);
}
