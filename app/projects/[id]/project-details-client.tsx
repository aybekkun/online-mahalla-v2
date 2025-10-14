"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  MapPin,
  User,
  Phone,
  Target,
  Factory,
  Users,
  Calendar,
  DollarSign,
  Building2,
  TrendingUp,
  ArrowLeft,
} from "lucide-react"
import type { Project } from "@/lib/types"
import { useLanguage } from "@/lib/language-context"

interface ProjectDetailsClientProps {
  project: Project
}

export function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
  const { t } = useLanguage()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("backToProjects")}
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <section className="container mx-auto px-4 lg:px-8 pb-8">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-muted">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </section>

        {/* Project Details */}
        <section className="container mx-auto px-4 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-[#004AAD] text-white hover:bg-[#003580]">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{project.region}</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{project.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              {/* Project Goal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-[#004AAD]" />
                    {t("projectGoal")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.goal}</p>
                </CardContent>
              </Card>

              {/* Key Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("keyMetrics")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-[#E9EDF2] p-2">
                        <Factory className="h-5 w-5 text-[#004AAD]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t("productionCapacity")}</p>
                        <p className="font-semibold">{project.productionCapacity}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-[#E9EDF2] p-2">
                        <Users className="h-5 w-5 text-[#004AAD]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t("jobsCreated")}</p>
                        <p className="font-semibold">
                          {project.jobsCreated} {t("positions")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-[#E9EDF2] p-2">
                        <Calendar className="h-5 w-5 text-[#004AAD]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t("implementationDeadline")}</p>
                        <p className="font-semibold">{project.implementationDeadline}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-[#E9EDF2] p-2">
                        <Building2 className="h-5 w-5 text-[#004AAD]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t("bankingPartner")}</p>
                        <p className="font-semibold">{project.bank}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Information */}
              <Card className="border-[#004AAD]/20 bg-gradient-to-br from-[#004AAD]/5 to-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-[#004AAD]" />
                    {t("financialInfo")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t("totalInvestment")}</p>
                      <p className="text-2xl font-bold text-[#004AAD]">{formatCurrency(project.totalInvestment)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t("bankLoan")}</p>
                      <p className="text-2xl font-bold">{formatCurrency(project.bankLoan)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t("expectedNetProfit")}</p>
                      <p className="text-2xl font-bold text-green-600 flex items-center gap-1">
                        <TrendingUp className="h-5 w-5" />
                        {formatCurrency(project.netProfit)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Info */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>{t("projectInfo")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#E9EDF2] p-2">
                      <User className="h-5 w-5 text-[#004AAD]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("initiator")}</p>
                      <p className="font-semibold">{project.initiator}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#E9EDF2] p-2">
                      <Phone className="h-5 w-5 text-[#004AAD]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("contact")}</p>
                      <p className="font-semibold">{project.contact}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#E9EDF2] p-2">
                      <MapPin className="h-5 w-5 text-[#004AAD]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("region")}</p>
                      <p className="font-semibold">{project.region}</p>
                    </div>
                  </div>

                  <Button className="w-full bg-[#004AAD] hover:bg-[#003580] mt-6">{t("learnMore")}</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
