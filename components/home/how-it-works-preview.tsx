import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserPlus, Target, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Apply & Get Matched",
    description: "Tell us your goals and we'll pair you with the perfect mentor.",
  },
  {
    icon: Target,
    title: "Custom Learning Plan",
    description: "Your mentor creates a personalized curriculum just for you.",
  },
  {
    icon: Code2,
    title: "Build Real Projects",
    description: "Work on portfolio projects with guidance every step of the way.",
  },
  {
    icon: Rocket,
    title: "Launch Your Career",
    description: "Graduate with a portfolio that gets you hired.",
  },
]

export function HowItWorksPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From application to career launch in four simple steps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 flex justify-center pt-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="h-8 w-8" />
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-[60%] hidden h-0.5 w-[80%] bg-gradient-to-r from-primary to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/how-it-works">See Full Process</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
