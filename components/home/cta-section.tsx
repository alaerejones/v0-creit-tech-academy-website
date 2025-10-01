import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-card p-8 shadow-xl md:p-12 border border-border">
          <div className="text-center space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Calendar className="inline-block mr-2 h-4 w-4" />
              Next Cohort Starts Soon
            </div>

            <h2 className="text-3xl font-bold md:text-4xl text-balance">
              Ready to Build Your <span className="text-primary">Tech Career?</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Don't wait another day to start your journey. With only 20 seats available per month, spots fill up fast.
              Apply now and take the first step toward your dream tech career.
            </p>

            <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold"
              >
                <Link href="/contact">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base font-semibold bg-transparent">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Have questions?{" "}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                Contact us
              </Link>{" "}
              or check out our{" "}
              <Link href="/testimonials" className="text-primary hover:underline font-medium">
                student success stories
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
