"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { projects } from "@/lib/projects-data"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const PROJECTS_PER_PAGE = 9

export default function HomePage() {
	const { t } = useLanguage()
	const [searchQuery, setSearchQuery] = useState("")
	const [currentPage, setCurrentPage] = useState(1)

	const filteredProjects = useMemo(() => {
		return projects.filter((project) => {
			const matchesSearch =
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.category.toLowerCase().includes(searchQuery.toLowerCase())
			return matchesSearch
		})
	}, [searchQuery])

	// Pagination
	const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
	const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
	const endIndex = startIndex + PROJECTS_PER_PAGE
	const currentProjects = filteredProjects.slice(startIndex, endIndex)

	// Reset to page 1 when search changes
	useMemo(() => {
		setCurrentPage(1)
	}, [searchQuery])

	return (
		<div className="min-h-screen flex flex-col ">
			<Header />

			<main className="flex-1">
				<section className="relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(69,104,220,0.1),transparent_50%)]" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(69,104,220,0.08),transparent_50%)]" />

					<div className="container relative mx-auto px-6 lg:px-12 py-24 md:py-32 lg:py-40">
						<div className="max-w-7xl mx-auto text-center space-y-8 animate-fade-in-up">
							<h1 className="text-7xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
								<span className="gradient-text">{t("heroTitle")}</span>
							</h1>
							<p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
								{t("heroSubtitle")}
							</p>

							<div className="max-w-2xl mx-auto pt-8 animate-scale-in">
								<div className="relative">
									<Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
									<Input
										type="search"
										placeholder={t("searchPlaceholder")}
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="h-14 pl-14 pr-6 text-lg border-2 border-border/50 focus:border-primary shadow-lg bg-card/80 backdrop-blur"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="projects"
					className="container bg-ne mx-auto px-6 lg:px-12 py-16 md:py-24"
				>
					<div className="mb-12 flex items-center justify-between">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-2">
								{t("projects")}
							</h2>
							<p className="text-muted-foreground">
								{t("showing")} {startIndex + 1}-
								{Math.min(endIndex, filteredProjects.length)} {t("of")}{" "}
								{filteredProjects.length}
							</p>
						</div>
					</div>

					{currentProjects.length > 0 ? (
						<>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
								{currentProjects.map((project, index) => (
									<div
										key={project.id}
										className="animate-fade-in-up"
										style={{
											animationDelay: `${index * 0.1}s`,
											animationFillMode: "both",
										}}
									>
										<ProjectCard project={project} />
									</div>
								))}
							</div>

							{totalPages > 1 && (
								<div className="flex items-center justify-center gap-3">
									<Button
										variant="outline"
										size="icon"
										onClick={() =>
											setCurrentPage((prev) => Math.max(1, prev - 1))
										}
										disabled={currentPage === 1}
										className="h-11 w-11 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all disabled:opacity-30"
									>
										<ChevronLeft className="h-5 w-5" />
									</Button>

									<div className="flex items-center gap-2">
										{Array.from({ length: totalPages }, (_, i) => i + 1).map(
											(page) => (
												<Button
													key={page}
													variant={currentPage === page ? "default" : "outline"}
													size="sm"
													onClick={() => setCurrentPage(page)}
													className={
														currentPage === page
															? "h-11 min-w-11 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
															: "h-11 min-w-11 rounded-full border-2 hover:bg-secondary transition-all"
													}
												>
													{page}
												</Button>
											)
										)}
									</div>

									<Button
										variant="outline"
										size="icon"
										onClick={() =>
											setCurrentPage((prev) => Math.min(totalPages, prev + 1))
										}
										disabled={currentPage === totalPages}
										className="h-11 w-11 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all disabled:opacity-30"
									>
										<ChevronRight className="h-5 w-5" />
									</Button>
								</div>
							)}
						</>
					) : (
						<div className="text-center py-20">
							<div className="max-w-md mx-auto space-y-4">
								<div className="text-6xl mb-4">🔍</div>
								<h3 className="text-2xl font-bold">{t("noProjects")}</h3>
								<p className="text-muted-foreground">
									{t("tryDifferentSearch")}
								</p>
								<Button
									variant="outline"
									size="lg"
									className="mt-6 bg-transparent"
									onClick={() => {
										setSearchQuery("")
									}}
								>
									{t("clearSearch")}
								</Button>
							</div>
						</div>
					)}
				</section>
			</main>

			<Footer />
		</div>
	)
}
