import { UserPlus, Users, Target, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Step 1: Apply & Get Matched",
    description:
      "Fill out our simple application form telling us about your goals, background, and what you want to achieve. Our team reviews your application within 48 hours and matches you with a mentor who specializes in your chosen field.",
    details: ["15-minute application", "48-hour response time", "Free consultation call"],
  },
  {
    icon: Target,
    title: "Step 2: Custom Learning Plan",
    description:
      "Your mentor creates a personalized curriculum tailored to your skill level, learning pace, and career goals. No cookie-cutter courses—every plan is unique to you.",
    details: ["Personalized curriculum", "Flexible schedule", "Clear milestones & goals"],
  },
  {
    icon: Users,
    title: "Step 3: One-on-One Sessions",
    description:
      "Meet with your mentor 2-3 times per week for focused learning sessions. Get real-time feedback, ask questions, and work through challenges together.",
    details: ["2-3 sessions per week", "1-2 hours per session", "Screen sharing & live coding"],
  },
  {
    icon: Code2,
    title: "Step 4: Build Real Projects",
    description:
      "Apply what you learn by building portfolio projects that solve real problems. Your mentor guides you through planning, development, and deployment.",
    details: ["3-5 portfolio projects", "Real-world applications", "Code reviews & feedback"],
  },
  {
    icon: Rocket,
    title: "Step 5: Launch Your Career",
    description:
      "Graduate with a portfolio that proves your skills, a certificate of completion, and career support including resume reviews, interview prep, and job placement assistance.",
    details: ["Portfolio review", "Resume & LinkedIn optimization", "Job placement support"],
  },
]

export function ProcessSteps() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{step.description}</p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {step.details.map((detail, i) => (
                      <span key={i} className="inline-flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-12 top-24 hidden h-12 w-0.5 bg-gradient-to-b from-primary to-transparent md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
