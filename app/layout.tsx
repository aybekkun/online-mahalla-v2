import { LanguageProvider } from "@/lib/language-context"
import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Onlayn Mahalla - Top 100 Most Efficient Micro Projects",
  description: "Showcase of 100 of the most effective micro and business projects across Uzbekistan",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${GeistMono.variable}  bg-gray-200 antialiased`}>
        <LanguageProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
