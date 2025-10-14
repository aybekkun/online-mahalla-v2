"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Briefcase, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/types"
import { useLanguage } from "@/lib/language-context"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <Card className="overflow-hidden border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-card">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium px-3 py-1"
            >
              {project.category}
            </Badge>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span className="font-medium">{project.region}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold leading-tight text-balance group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border/50">
            <Briefcase className="h-4 w-4" />
            <span className="font-medium">
              {project.jobsCreated} {t("jobsCreated")}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
