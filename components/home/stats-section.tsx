import { Users, Award, Briefcase, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Graduates",
    description: "Trained and certified",
  },
  {
    icon: Award,
    value: "95%",
    label: "Success Rate",
    description: "Job placement within 6 months",
  },
  {
    icon: Briefcase,
    value: "200+",
    label: "Partner Companies",
    description: "Hiring our graduates",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Student Rating",
    description: "Based on 300+ reviews",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">Trusted by Hundreds of Tech Professionals</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
            Our results speak for themselves. Join a community of successful tech professionals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-xl font-semibold">{stat.label}</div>
              <div className="text-sm opacity-90">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
