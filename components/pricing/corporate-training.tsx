import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Users, Award, Headphones } from "lucide-react"

const corporateFeatures = [
  {
    icon: Building2,
    title: "Custom Curriculum",
    description: "Tailored training programs designed for your team's specific needs and tech stack.",
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Train 5+ employees simultaneously with dedicated mentors and group sessions.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Industry-recognized certificates for all participants upon program completion.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Post-training support and consultation to ensure successful implementation.",
  },
]

export function CorporateTraining() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                For Organizations
              </div>
              <h2 className="text-3xl font-bold md:text-4xl text-balance">
                Corporate <span className="text-primary">Training Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Upskill your entire team with customized training programs designed for your organization's needs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {corporateFeatures.map((feature, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <div className="text-2xl font-bold">Custom Pricing</div>
              <p className="text-muted-foreground">
                Contact us for a tailored quote based on your team size, program duration, and specific requirements.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Request Corporate Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
