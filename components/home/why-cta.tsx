import { Target, Users, Briefcase, Award } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Personalized Learning Paths",
    description:
      "No cookie-cutter courses. Your mentor designs a curriculum based on your goals, skill level, and career aspirations.",
  },
  {
    icon: Users,
    title: "One-on-One Mentorship",
    description:
      "Direct access to experienced professionals who guide you through every challenge and celebrate every win.",
  },
  {
    icon: Briefcase,
    title: "Portfolio-First Approach",
    description:
      "Build real projects that solve actual problems. Your portfolio becomes your strongest job application.",
  },
  {
    icon: Award,
    title: "Industry-Ready Skills",
    description: "Learn the tools, frameworks, and best practices that companies actually use—not outdated theory.",
  },
]

export function WhyCTA() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Why Choose <span className="text-primary">Creit Tech Academy?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're not just another online course platform. We're your partner in building a real tech career.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
