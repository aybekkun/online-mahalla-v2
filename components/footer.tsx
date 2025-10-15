"use client"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-secondary/30 mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">QR</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("footerDescription")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/#industry" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("industryProjects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#agriculture"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("agricultureProjects")}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("serviceProjects")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@100loyiha.uz</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+998 71 123 45 67</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Tashkent, Uzbekistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} QR. {t("allRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
