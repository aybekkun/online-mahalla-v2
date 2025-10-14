import { notFound } from "next/navigation"
import { projects } from "@/lib/projects-data"
import { ProjectDetailsClient } from "./project-details-client"

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    notFound()
  }

  return <ProjectDetailsClient project={project} />
}
