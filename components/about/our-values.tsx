import { Heart, Lightbulb, Award, Handshake } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Student-Centered",
    description:
      "Your success is our success. We put your learning needs and career goals at the heart of everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of industry trends, teaching the latest tools and technologies that employers demand.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain high standards in our curriculum, mentorship, and student outcomes. Quality over quantity, always.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We're honest about what it takes to succeed in tech and committed to supporting you every step of the way.",
  },
]

export function OurValues() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            These principles guide how we teach, mentor, and support every student on their tech journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
