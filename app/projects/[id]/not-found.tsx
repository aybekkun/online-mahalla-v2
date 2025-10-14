import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4 px-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Link href="/">
            <Button className="bg-[#004AAD] hover:bg-[#003580]">Return to Home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
