export type ProjectCategory = "Industry" | "Agriculture" | "Services"

export type Region =
  | "Nukus"
  | "Kegeyli"
  | "Chimbay"
  | "Taxtakupir"
  | "Turtkul"
  | "Kungrad"
  | "Amudarya"
  | "Muynak"
  | "Qo‘ng‘irot"
  | "Bozatau"
  | "Shumanay"
  | "Qanlikol"
  | "Karakalpakstan"

export interface Project {
  id: number
  title: string
  category: ProjectCategory
  region: Region
  mahalla: string
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