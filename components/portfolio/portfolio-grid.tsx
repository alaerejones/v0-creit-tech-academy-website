import Link from "next/link"
import { ExternalLink, User } from "lucide-react"

const portfolioItems = [
  {
    title: "E-Commerce Dashboard",
    student: "Chioma Okafor",
    program: "UI/UX Design",
    description: "Complete admin dashboard for managing online store inventory, orders, and analytics.",
    image: "/ecommerce-dashboard-design.jpg",
    tags: ["Figma", "UI Design", "Dashboard"],
    link: "#",
  },
  {
    title: "Sales Analytics Platform",
    student: "Emeka Nwosu",
    program: "Data Analysis",
    description: "Interactive data visualization platform analyzing 2 years of sales data with predictive insights.",
    image: "/sales-analytics-visualization.jpg",
    tags: ["Python", "Power BI", "SQL"],
    link: "#",
  },
  {
    title: "Recipe Sharing App",
    student: "Fatima Abdullahi",
    program: "Frontend Development",
    description: "Full-featured recipe app with search, favorites, and meal planning built with React and Next.js.",
    image: "/recipe-app-interface.jpg",
    tags: ["React", "Next.js", "Tailwind"],
    link: "#",
  },
  {
    title: "Fitness Tracking Mobile App",
    student: "Tunde Adeyemi",
    program: "Mobile Development",
    description: "Cross-platform fitness app with workout tracking, progress charts, and social features.",
    image: "/fitness-app-mockup.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
  },
  {
    title: "Customer Churn Prediction Model",
    student: "Amara Eze",
    program: "Data Science",
    description: "Machine learning model predicting customer churn with 89% accuracy for telecom company.",
    image: "/ml-model-visualization.jpg",
    tags: ["Python", "TensorFlow", "Scikit-learn"],
    link: "#",
  },
  {
    title: "Task Management API",
    student: "Ibrahim Mohammed",
    program: "Backend Development",
    description: "RESTful API with authentication, real-time updates, and comprehensive documentation.",
    image: "/api-documentation-screen.jpg",
    tags: ["Node.js", "Express", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Banking App Redesign",
    student: "Grace Adebayo",
    program: "UI/UX Design",
    description: "Complete UX research and redesign of mobile banking app improving user satisfaction by 45%.",
    image: "/banking-app-redesign.jpg",
    tags: ["User Research", "Figma", "Prototyping"],
    link: "#",
  },
  {
    title: "Real Estate Listing Platform",
    student: "David Oluwaseun",
    program: "Frontend Development",
    description: "Property listing website with advanced search, map integration, and virtual tours.",
    image: "/real-estate-website.jpg",
    tags: ["React", "TypeScript", "Google Maps API"],
    link: "#",
  },
]

export function PortfolioGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    View Project <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Program Badge */}
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.program}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold leading-tight">{item.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Student */}
                <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>By {item.student}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
