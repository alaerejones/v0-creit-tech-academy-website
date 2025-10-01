import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PortfolioCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Ready to Build Your <span className="text-primary">Own Portfolio?</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join our next cohort and create impressive projects that showcase your skills and land you your dream tech
            job.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
