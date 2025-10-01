import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, HelpCircle } from "lucide-react"

export function ProgramCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Not Sure Which Program <span className="text-primary">Is Right for You?</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our admissions team will help you choose the perfect path based on your goals, interests, and career
            aspirations.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Talk to an Advisor <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/how-it-works">
                <HelpCircle className="mr-2 h-5 w-5" />
                How It Works
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
