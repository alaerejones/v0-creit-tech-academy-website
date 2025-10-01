import { Clock, Users, Award, Briefcase } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Learn at your own pace with sessions scheduled around your availability.",
  },
  {
    icon: Users,
    title: "Small Cohorts",
    description: "Maximum 20 students per month ensures personalized attention for everyone.",
  },
  {
    icon: Award,
    title: "Industry Certificate",
    description: "Earn a recognized certificate upon completion of your program.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Get help with resume building, portfolio reviews, and job placement.",
  },
]

export function ProgramBenefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Every Program <span className="text-primary">Includes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            No matter which path you choose, you get the full Creit Tech Academy experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <benefit.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
