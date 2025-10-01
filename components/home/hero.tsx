import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Limited to 20 Seats Per Month
            </div>

            <h1 className="text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl">
              Acquire <span className="text-primary">Real Tech Skills</span> and a Portfolio That Proves It
            </h1>

            <p className="text-base leading-relaxed text-foreground/80 md:text-lg lg:text-xl text-pretty">
              Stop watching tutorials that lead nowhere. At Creit Tech Academy, you get personalized mentorship,
              hands-on projects, and a portfolio that opens doors—not just certificates that collect dust.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-base">One-on-one mentorship from industry professionals</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-base">Build 3-5 portfolio projects that prove your skills</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-base">Flexible learning paths tailored to your goals</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:justify-center lg:justify-start">
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
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-2xl lg:aspect-[4/3]">
              <img
                src="/diverse-students-learning-tech-with-mentor-in-mode.jpg"
                alt="Students learning tech skills with personalized mentorship"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 rounded-xl bg-card p-3 md:p-4 shadow-lg animate-float border border-border">
              <div className="text-2xl md:text-3xl font-bold text-primary">95%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Job Placement Rate</div>
            </div>
            <div
              className="absolute -right-4 -top-4 md:-right-6 md:-top-6 rounded-xl bg-card p-3 md:p-4 shadow-lg animate-float border border-border"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Graduates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
