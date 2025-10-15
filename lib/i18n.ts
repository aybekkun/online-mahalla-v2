export type Locale = "uz" | "kaa"

export const translations = {
	uz: {
		// Header
		home: "Bosh sahifa",
		industry: "Sanoat",
		agriculture: "Qishloq xo'jaligi",
		services: "Xizmatlar",
		searchPlaceholder: "Loyihalarni qidirish...",

		// Hero
		heroTitle:
			"Каракалпакстан Республикасында ислеп шыгарылып атырган онимлер!",
		heroSubtitle:
			"Каракалпакстан Республикасында ислеп шыгарылып атырган онимлер!",
		// Filters
		filterTitle: "Loyihalarni Filtrlash",
		searchByName: "Nom bo'yicha qidirish",
		category: "Kategoriya",
		region: "Viloyat",
		all: "Barchasi",

		// Project Card
		jobsCreated: "ish o'rni yaratildi",

		// Pagination
		showing: "Ko'rsatilmoqda",
		of: "dan",
		projects: "loyiha",
		noProjects: "Filtrlaringizga mos loyihalar topilmadi.",
		clearFilters: "Filtrlarni Tozalash",

		// Project Details
		backToProjects: "Loyihalarga Qaytish",
		projectGoal: "Loyiha Maqsadi",
		keyMetrics: "Asosiy Ko'rsatkichlar",
		productionCapacity: "Ishlab Chiqarish Quvvati",
		implementationDeadline: "Faoliyat boshlangan vaqti",
		bankingPartner: "Bank Hamkori",
		financialInfo: "Moliyaviy Ma'lumotlar",
		totalInvestment: "Umumiy Investitsiya",
		bankLoan: "Bank Krediti",
		expectedNetProfit: "Kutilayotgan Sof Foyda",
		projectInfo: "Loyiha Ma'lumotlari",
		initiator: "Tashabbuskor",
		contact: "Aloqa",
		learnMore: "Loyiha Haqida Ko'proq",
		positions: "ish o'rni",

		// Footer
		footerDescription:
			"O'zbekiston Respublikasi bo'ylab eng samarali 100 ta mikro va biznes loyihalarini namoyish etish.",
		quickLinks: "Tezkor Havolalar",
		industryProjects: "Sanoat Loyihalari",
		agricultureProjects: "Qishloq Xo'jaligi Loyihalari",
		serviceProjects: "Xizmat Loyihalari",
		allRights: "Barcha huquqlar himoyalangan.",
	},

	kaa: {
		// Header
		home: "Bas bet",
		industry: "Ónerkásip",
		agriculture: "Awıl xojalıǵı",
		services: "Xızmetler",
		searchPlaceholder: "Joybarlardı izlew...",

		// Hero
		heroTitle: "Qaraqalpaqstan Respublikasında islep shıǵarıp atırǵan ónimler!",
		heroSubtitle:
			"Qaraqalpaqstan Respublikasında islep shıǵarıp atırǵan ónimler!",

		// Filters
		filterTitle: "Joybarlardı súzgi",
		searchByName: "Atı boyınsha izlew",
		category: "Kategoriya",
		region: "Rayon",
		all: "Bárshası",

		// Project Card
		jobsCreated: "jumıs orınları jaratıldı",

		// Pagination
		showing: "Kórsetilgen",
		of: "ishinde",
		projects: "joybarlar",
		noProjects: "Sizdiń súzgishlerińizge sáykes joybarlar tabılmadı.",
		clearFilters: "Súzgiislerdi tazalaw",

		// Project Details
		backToProjects: "Joybarlarǵa qaytıw",
		projectGoal: "Joybardıń maqseti",
		keyMetrics: "Tiykarǵı kórsetkishler",
		productionCapacity: "Óndirislik quwat",
		implementationDeadline: "Ámeliyat baslanǵan waqtı",
		bankingPartner: "Bank sherigi",
		financialInfo: "Finanslıq maǵlıwmat",
		totalInvestment: "Jalpaq investiciya",
		bankLoan: "Bank nesiyesi",
		expectedNetProfit: "Kútiletuǵın taza payda",
		projectInfo: "Joybar maǵlıwmatı",
		initiator: "Baslamashı",
		contact: "Baylanıs",
		learnMore: "Joybardı keńirek úyreniw",
		positions: "jumıs orın",

		// Footer
		footerDescription:
			"Ózbekstan Respublikası boylap eń nátiyjeli 100 mikro hám biznes joybarlardı kórsetiw platforması.",
		quickLinks: "Tez siltemeler",
		industryProjects: "Ónerkásip joybarlar",
		agricultureProjects: "Awıl xojalıǵı joybarlar",
		serviceProjects: "Xızmet joybarlar",
		allRights: "Barlıq huqıqlar qorǵalǵan.",
	},
}

export function getTranslation(
	locale: Locale,
	key: keyof (typeof translations)["kaa"]
) {
	return translations[locale][key] || translations.uz[key]
}
