import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, BarChart3, Code, Smartphone } from "lucide-react"

const programs = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Master user research, wireframing, prototyping, and visual design with Figma.",
    deliverables: ["3 Case Studies", "Design System", "Mobile App Design"],
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Learn Excel, SQL, Python, and data visualization to make data-driven decisions.",
    deliverables: ["4 Analysis Projects", "Dashboard Portfolio", "SQL Mastery"],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Build responsive, interactive websites with HTML, CSS, JavaScript, and React.",
    deliverables: ["5 Web Projects", "React Portfolio", "API Integration"],
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Create native mobile apps for iOS and Android using React Native.",
    deliverables: ["3 Mobile Apps", "App Store Ready", "Backend Integration"],
    color: "from-orange-500/10 to-red-500/10",
  },
]

export function FeaturedPrograms() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Choose Your <span className="text-primary">Tech Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Six specialized programs designed to take you from beginner to job-ready professional.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2"
            >
              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${program.color}`}
              >
                <program.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{program.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{program.description}</p>

              <div className="space-y-2 mb-4">
                <p className="text-xs font-semibold text-primary uppercase">You'll Build:</p>
                {program.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant="ghost"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <Link href="/programs">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/programs">
              View All Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
