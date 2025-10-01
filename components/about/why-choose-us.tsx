import { CheckCircle2 } from "lucide-react"

const reasons = [
  "One-on-one mentorship from industry professionals",
  "Flexible learning schedules that fit your life",
  "Build 3-5 portfolio projects during your program",
  "Learn industry-standard tools and best practices",
  "Career support including resume reviews and interview prep",
  "Lifetime access to course materials and community",
  "Affordable payment plans and flexible options",
  "Small cohorts ensuring personalized attention",
]

export function WhyChooseUs() {
  return (
    <section className="bg-accent/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Creit Tech Academy?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
