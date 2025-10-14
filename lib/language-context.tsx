"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Locale } from "./i18n"
import { translations } from "./i18n"

interface LanguageContextType {
	locale: Locale
	setLocale: (locale: Locale) => void
	t: (key: keyof (typeof translations)["en"]) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>("uz")

	const t = (key: keyof (typeof translations)["uz"]) => {
		return translations[locale][key] || translations.uz[key]
	}

	return (
		<LanguageContext.Provider value={{ locale, setLocale, t }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider")
	}
	return context
}
