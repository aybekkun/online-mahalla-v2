export type ProjectCategory = "Industry" | "Agriculture" | "Services"

export type Region =
  | "Tashkent"
  | "Samarkand"
  | "Bukhara"
  | "Andijan"
  | "Fergana"
  | "Namangan"
  | "Kashkadarya"
  | "Surkhandarya"
  | "Khorezm"
  | "Navoi"
  | "Jizzakh"
  | "Syrdarya"
  | "Karakalpakstan"

export interface Project {
  id: number
  title: string
  category: ProjectCategory
  region: Region
  image: string
  initiator: string
  contact: string
  goal: string
  productionCapacity: string
  jobsCreated: number
  implementationDeadline: string
  totalInvestment: number
  bankLoan: number
  netProfit: number
  bank: string
  description: string
}
