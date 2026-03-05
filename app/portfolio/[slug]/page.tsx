import { notFound } from "next/navigation";
import PortfolioContent from "./SlugContent";
import { projects } from "@/lib/utils";
import Contact from "@/components/layouts/Contact";




export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
  const project = projects.find((p) => p.slug.toString() === slug);

  if (!project) return notFound();

  return (
    <>
      <PortfolioContent project={project}/>
      <Contact/>
    </>
  );
}


