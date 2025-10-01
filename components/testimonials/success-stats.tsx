import { TrendingUp, Users, Briefcase, Award } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "95%",
    label: "Job Placement Rate",
    description: "Within 6 months of graduation",
  },
  {
    icon: Users,
    value: "500+",
    label: "Graduates",
    description: "Across all programs",
  },
  {
    icon: Briefcase,
    value: "₦450K",
    label: "Average Starting Salary",
    description: "For our graduates",
  },
  {
    icon: Award,
    value: "4.9/5",
    label: "Student Rating",
    description: "Based on 300+ reviews",
  },
]

export function SuccessStats() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">Our Track Record Speaks for Itself</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
            These numbers represent real people who transformed their careers through our programs.
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
