"use client"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import type { Locale } from "@/lib/i18n"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function Header() {
	const { locale, setLocale, t } = useLanguage()

	return (
		<header className="sticky top-0 z-50 w-full glass-effect">
			<div className="container mx-auto px-6 lg:px-12">
				<div className="flex h-20 items-center justify-between gap-6">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 group">
						<div className="text-2xl font-bold gradient-text transition-all group-hover:scale-105">
							Onlayn Mahalla
						</div>
					</Link>

					{/* Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						<Link
							href="/"
							className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
						>
							{t("home")}
						</Link>
						<Link
							href="/#projects"
							className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
						>
							{t("projects")}
						</Link>
					</nav>

					{/* Language Selector */}
					<div className="flex items-center gap-3">
						<Select
							value={locale}
							onValueChange={(value) => setLocale(value as Locale)}
						>
							<SelectTrigger className="w-[110px] border-0 bg-secondary/50 hover:bg-secondary transition-colors">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="uz">O'zbek</SelectItem>
								<SelectItem value="ru">Русский</SelectItem>
								<SelectItem value="en">English</SelectItem>
								<SelectItem value="kaa">Qaraqalpaq</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
		</header>
	)
}
