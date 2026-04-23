import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { CaseStudyClient } from "./CaseStudyClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return <CaseStudyClient project={project} />;
}
