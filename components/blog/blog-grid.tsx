import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "10 Essential JavaScript Concepts Every Developer Should Master",
    excerpt:
      "From closures to async/await, discover the fundamental JavaScript concepts that will level up your development skills and make you a better programmer.",
    category: "Software",
    categoryColor: "bg-blue-500/10 text-blue-600",
    author: "Chidi Okonkwo",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    image: "/javascript-code-on-screen.jpg",
    slug: "javascript-concepts-every-developer-should-master",
  },
  {
    title: "How to Build Your First Data Analysis Portfolio",
    excerpt:
      "A step-by-step guide to creating a compelling data analysis portfolio that showcases your skills and helps you land your dream job.",
    category: "Data",
    categoryColor: "bg-green-500/10 text-green-600",
    author: "Amina Bello",
    date: "Jan 12, 2025",
    readTime: "10 min read",
    image: "/data-visualization-dashboard.jpg",
    slug: "build-first-data-analysis-portfolio",
  },
  {
    title: "UI/UX Design Principles That Actually Matter in 2025",
    excerpt:
      "Learn the timeless design principles that create exceptional user experiences, backed by real-world examples and case studies.",
    category: "Design",
    categoryColor: "bg-purple-500/10 text-purple-600",
    author: "Tunde Adeyemi",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    image: "/ui-design-wireframes.jpg",
    slug: "ui-ux-design-principles-2025",
  },
  {
    title: "From Bootcamp to Six-Figure Salary: A Developer's Journey",
    excerpt:
      "Real stories and actionable advice from developers who successfully transitioned into tech and built thriving careers.",
    category: "Growth",
    categoryColor: "bg-orange-500/10 text-orange-600",
    author: "Ngozi Eze",
    date: "Jan 8, 2025",
    readTime: "12 min read",
    image: "/developer-celebrating-success.jpg",
    slug: "bootcamp-to-six-figure-salary",
  },
  {
    title: "Understanding SQL Joins: A Visual Guide for Beginners",
    excerpt:
      "Master SQL joins with clear visual explanations and practical examples that make complex database queries simple to understand.",
    category: "Data",
    categoryColor: "bg-green-500/10 text-green-600",
    author: "Ibrahim Yusuf",
    date: "Jan 5, 2025",
    readTime: "9 min read",
    image: "/sql-database-diagram.jpg",
    slug: "understanding-sql-joins-visual-guide",
  },
  {
    title: "React Hooks: Complete Guide with Real-World Examples",
    excerpt:
      "Deep dive into React Hooks with practical examples, best practices, and common pitfalls to avoid in your applications.",
    category: "Software",
    categoryColor: "bg-blue-500/10 text-blue-600",
    author: "Funke Adebayo",
    date: "Jan 3, 2025",
    readTime: "15 min read",
    image: "/react-code-editor.jpg",
    slug: "react-hooks-complete-guide",
  },
  {
    title: "Color Theory for UI Designers: Creating Harmonious Palettes",
    excerpt: "Learn how to choose and combine colors that create beautiful, accessible, and effective user interfaces.",
    category: "Design",
    categoryColor: "bg-purple-500/10 text-purple-600",
    author: "Chioma Okafor",
    date: "Dec 30, 2024",
    readTime: "6 min read",
    image: "/color-palette-design.jpg",
    slug: "color-theory-for-ui-designers",
  },
  {
    title: "5 Soft Skills That Will Accelerate Your Tech Career",
    excerpt:
      "Technical skills get you hired, but these soft skills will help you advance faster and become a leader in your field.",
    category: "Growth",
    categoryColor: "bg-orange-500/10 text-orange-600",
    author: "Emeka Nwosu",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    image: "/team-collaboration-meeting.jpg",
    slug: "soft-skills-accelerate-tech-career",
  },
  {
    title: "Machine Learning Basics: Your First Predictive Model",
    excerpt:
      "Build your first machine learning model from scratch with Python. No PhD required, just curiosity and willingness to learn.",
    category: "Data",
    categoryColor: "bg-green-500/10 text-green-600",
    author: "Aisha Mohammed",
    date: "Dec 25, 2024",
    readTime: "14 min read",
    image: "/machine-learning-visualization.jpg",
    slug: "machine-learning-basics-first-model",
  },
]

export function BlogGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div
                  className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${post.categoryColor}`}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{post.excerpt}</p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Read More <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
