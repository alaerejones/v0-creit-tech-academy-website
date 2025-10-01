export function Timeline() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Typical <span className="text-primary">Program Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Most students complete their program in 3-5 months, depending on their chosen path and availability.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-8">
              <TimelineItem
                month="Month 1"
                title="Foundations & Setup"
                description="Learn the fundamentals, set up your development environment, and complete your first small projects."
              />
              <TimelineItem
                month="Month 2-3"
                title="Core Skills & Projects"
                description="Dive deep into advanced concepts while building 2-3 major portfolio projects with mentor guidance."
              />
              <TimelineItem
                month="Month 4"
                title="Specialization & Polish"
                description="Focus on your area of interest, refine your portfolio, and prepare for job applications."
              />
              <TimelineItem
                month="Month 5+"
                title="Career Launch"
                description="Final project completion, portfolio review, resume optimization, and job placement support."
                isLast
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  month,
  title,
  description,
  isLast = false,
}: {
  month: string
  title: string
  description: string
  isLast?: boolean
}) {
  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Timeline Dot */}
      <div className="flex-shrink-0">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
          {month.split(" ")[1]}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="rounded-xl bg-card border border-border p-6 shadow-sm">
          <div className="text-sm font-semibold text-primary mb-1">{month}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
