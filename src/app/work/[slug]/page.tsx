import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllWork, getWorkBySlug } from "@/lib/workData";
import { CaseStudyBento } from "@/components/CaseStudyBento";
import { TrendsCaseStudy } from "@/components/TrendsCaseStudy";

export function generateStaticParams() {
  return getAllWork().map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return {
    title: `${work.title} Case Study | Yadan Taino — Front-End Developer & Product Designer`,
    description: work.tagline,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();
  if (work.slug === "trends") return <TrendsCaseStudy work={work} />;
  return <CaseStudyBento work={work} />;
}
