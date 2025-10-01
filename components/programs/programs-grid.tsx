import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette, BarChart3, Database, Code, Smartphone, Server, CheckCircle } from "lucide-react"

const programs = [
  {
    icon: Palette,
    title: "UI/UX Design",
    duration: "3-4 Months",
    description:
      "Master the art of creating beautiful, user-centered digital experiences. Learn user research, wireframing, prototyping, and visual design.",
    deliverables: [
      "3 Complete Case Studies",
      "Design System Portfolio",
      "Mobile App Design Project",
      "User Research Documentation",
    ],
    tools: ["Figma", "Adobe XD", "Miro", "Maze"],
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    duration: "3-4 Months",
    description:
      "Transform raw data into actionable insights. Master Excel, SQL, Python, and data visualization to make data-driven decisions.",
    deliverables: [
      "4 Analysis Projects",
      "Interactive Dashboards",
      "SQL Query Portfolio",
      "Business Intelligence Reports",
    ],
    tools: ["Excel", "SQL", "Python", "Power BI", "Tableau"],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Database,
    title: "Data Science",
    duration: "4-5 Months",
    description:
      "Dive deep into machine learning, statistical analysis, and predictive modeling. Build AI-powered solutions that solve real problems.",
    deliverables: ["3 ML Projects", "Predictive Models", "Data Pipeline Portfolio", "Research Paper"],
    tools: ["Python", "TensorFlow", "Scikit-learn", "Jupyter"],
    color: "from-indigo-500/10 to-purple-500/10",
  },
  {
    icon: Code,
    title: "Frontend Development",
    duration: "4-5 Months",
    description:
      "Build responsive, interactive websites and web applications. Master HTML, CSS, JavaScript, React, and modern frontend frameworks.",
    deliverables: ["5 Web Projects", "React Portfolio Site", "E-commerce Application", "API Integration Projects"],
    tools: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind"],
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    duration: "4-5 Months",
    description:
      "Create native mobile applications for iOS and Android. Learn React Native and build apps that users love.",
    deliverables: ["3 Mobile Apps", "App Store Ready Project", "Backend Integration", "Push Notifications System"],
    tools: ["React Native", "Expo", "Firebase", "Redux"],
    color: "from-orange-500/10 to-red-500/10",
  },
  {
    icon: Server,
    title: "Backend Development",
    duration: "4-5 Months",
    description:
      "Build robust server-side applications and APIs. Master Node.js, databases, authentication, and cloud deployment.",
    deliverables: ["4 API Projects", "Full-Stack Application", "Database Design Portfolio", "Cloud Deployment"],
    tools: ["Node.js", "Express", "PostgreSQL", "MongoDB", "AWS"],
    color: "from-slate-500/10 to-zinc-500/10",
  },
]

export function ProgramsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon & Duration */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${program.color}`}
                >
                  <program.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {program.duration}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mb-3 text-2xl font-bold">{program.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{program.description}</p>

              {/* Deliverables */}
              <div className="mb-6 space-y-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">What You'll Build:</p>
                {program.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Tools:</p>
                <div className="flex flex-wrap gap-2">
                  {program.tools.map((tool, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:shadow-lg"
              >
                <Link href="/contact">Apply for This Program</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
