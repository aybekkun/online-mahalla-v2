"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import type { ProjectCategory, Region } from "@/lib/types"
import { useLanguage } from "@/lib/language-context"

interface ProjectFiltersProps {
	selectedCategory: string
	onCategoryChange: (value: string) => void
	selectedRegion: string
	onRegionChange: (value: string) => void
}

const categories: (ProjectCategory | "All")[] = [
	"All",
	"Industry",
	"Agriculture",
	"Services",
]
const regions: (Region | "All")[] = [
	"All",
	"Nukus",
	"Kegeyli",
	"Chimbay",
	"Taxtakupir",
	"Turtkul",
	"Kungrad",
	"Amudarya",
	"Muynak",
	"Qo‘ng‘irot",
	"Bozatau",
	"Shumanay",
	"Qanlikol",
	"Karakalpakstan",
]
export function ProjectFilters({
	selectedCategory,
	onCategoryChange,
	selectedRegion,
	onRegionChange,
}: ProjectFiltersProps) {
	const { t } = useLanguage()

	return (
		<div className="flex rounded-lg gap-4 border bg-card p-6">
			{/* Search */}

			{/* Category Filter */}
			<div className="space-y-2">
				<Label htmlFor="category">{t("category")}</Label>
				<Select value={selectedCategory} onValueChange={onCategoryChange}>
					<SelectTrigger className="w-[170px]" id="category">
						<SelectValue placeholder="Select category" />
					</SelectTrigger>
					<SelectContent>
						{categories.map((category) => (
							<SelectItem key={category} value={category}>
								{category === "All" ? t("all") : category}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			{/* Region Filter */}
			<div className="space-y-2">
				<Label htmlFor="region">{t("region")}</Label>
				<Select value={selectedRegion} onValueChange={onRegionChange}>
					<SelectTrigger className="w-[170px]" id="region">
						<SelectValue placeholder="Select region" />
					</SelectTrigger>
					<SelectContent>
						{regions.map((region) => (
							<SelectItem key={region} value={region}>
								{region === "All" ? t("all") : region}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
