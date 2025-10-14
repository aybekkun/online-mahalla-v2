"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ProjectCategory, Region } from "@/lib/types"
import { useLanguage } from "@/lib/language-context"

interface ProjectFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  selectedRegion: string
  onRegionChange: (value: string) => void
}

const categories: (ProjectCategory | "All")[] = ["All", "Industry", "Agriculture", "Services"]

const regions: (Region | "All")[] = [
  "All",
  "Tashkent",
  "Samarkand",
  "Bukhara",
  "Andijan",
  "Fergana",
  "Namangan",
  "Kashkadarya",
  "Surkhandarya",
  "Khorezm",
  "Navoi",
  "Jizzakh",
  "Syrdarya",
  "Karakalpakstan",
]

export function ProjectFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedRegion,
  onRegionChange,
}: ProjectFiltersProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-6 rounded-lg border bg-card p-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">{t("filterTitle")}</h3>
      </div>

      {/* Search */}
      <div className="space-y-2">
        <Label htmlFor="search">{t("searchByName")}</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="search"
            type="search"
            placeholder={t("searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <Label htmlFor="category">{t("category")}</Label>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger id="category">
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
          <SelectTrigger id="region">
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
