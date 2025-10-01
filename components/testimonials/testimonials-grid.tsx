import { Star, ExternalLink, Award } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    name: "Chioma Okafor",
    role: "UI/UX Designer at Flutterwave",
    program: "UI/UX Design",
    image: "/professional-african-woman-designer.jpg",
    quote:
      "CTA changed my life. I went from knowing nothing about design to landing a job at Flutterwave in just 4 months. My mentor was patient, knowledgeable, and genuinely invested in my success.",
    rating: 5,
    portfolioLink: "#",
    achievement: "Hired within 2 months of graduation",
  },
  {
    name: "Emeka Nwosu",
    role: "Frontend Developer at Paystack",
    program: "Frontend Development",
    image: "/professional-african-man-developer.jpg",
    quote:
      "The one-on-one mentorship made all the difference. I tried online courses before but always got stuck. Having a mentor to guide me through challenges was invaluable.",
    rating: 5,
    portfolioLink: "#",
    achievement: "Built 5 portfolio projects",
  },
  {
    name: "Fatima Abdullahi",
    role: "Data Analyst at Andela",
    program: "Data Analysis",
    image: "/professional-african-woman-analyst.jpg",
    quote:
      "I love how practical the training was. Every project I built is now in my portfolio and helped me land my dream job. The career support was also amazing!",
    rating: 5,
    portfolioLink: "#",
    achievement: "95% job placement rate",
  },
  {
    name: "Tunde Adeyemi",
    role: "Backend Developer at Kuda Bank",
    program: "Backend Development",
    image: "/professional-african-man-engineer.jpg",
    quote:
      "Best investment I've made in my career. The curriculum was tailored to my goals, and my mentor helped me build projects that actually impressed employers.",
    rating: 5,
    portfolioLink: "#",
    achievement: "Salary increased by 200%",
  },
  {
    name: "Amara Eze",
    role: "Mobile Developer at Jumia",
    program: "Mobile Development",
    image: "/professional-african-woman-mobile-developer.jpg",
    quote:
      "The flexibility was perfect for me as a working professional. I could learn at my own pace while getting expert guidance. Now I'm building apps for one of Africa's biggest companies!",
    rating: 5,
    portfolioLink: "#",
    achievement: "Career transition in 5 months",
  },
  {
    name: "Ibrahim Mohammed",
    role: "Data Scientist at MTN Nigeria",
    program: "Data Science",
    image: "/african-data-scientist.png",
    quote:
      "The depth of knowledge my mentor had was incredible. I learned not just the theory but how to apply machine learning to solve real business problems.",
    rating: 5,
    portfolioLink: "#",
    achievement: "Published 2 research papers",
  },
]

export function TestimonialsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {testimonial.program}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>

              {/* Achievement Badge */}
              <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-primary/5">
                <Award className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-xs font-medium">{testimonial.achievement}</span>
              </div>

              {/* Portfolio Link */}
              <Link
                href={testimonial.portfolioLink}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View Portfolio <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
