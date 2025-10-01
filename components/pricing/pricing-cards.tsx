import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star } from "lucide-react"

const pricingTiers = [
  {
    name: "Mentor's Table",
    price: "₦250,000",
    duration: "per program",
    description: "Premium one-on-one mentorship with unlimited access to your dedicated mentor.",
    isPopular: true,
    features: [
      "Dedicated personal mentor",
      "3 sessions per week (1-2 hours each)",
      "Unlimited chat support (24/7)",
      "3-5 portfolio projects",
      "Code reviews within 24 hours",
      "Career coaching & resume review",
      "Job placement assistance",
      "Lifetime alumni network access",
    ],
  },
  {
    name: "Peer Studio",
    price: "₦180,000",
    duration: "per program",
    description: "Small group learning with 3-4 peers and a shared mentor for collaborative growth.",
    isPopular: false,
    features: [
      "Shared mentor (3-4 students)",
      "2 group sessions per week",
      "Peer collaboration projects",
      "3 portfolio projects",
      "Code reviews within 48 hours",
      "Group study sessions",
      "Career guidance workshops",
      "Alumni network access",
    ],
  },
  {
    name: "Team Entry",
    price: "₦120,000",
    duration: "per program",
    description: "Affordable entry point with structured curriculum and mentor support in larger groups.",
    isPopular: false,
    features: [
      "Group mentor (6-8 students)",
      "2 sessions per week",
      "Structured curriculum",
      "2 portfolio projects",
      "Weekly code reviews",
      "Community support forum",
      "Basic career guidance",
      "Certificate of completion",
    ],
  },
  {
    name: "Partner Access",
    price: "₦80,000",
    duration: "per program",
    description: "Self-paced learning with mentor check-ins and community support for motivated learners.",
    isPopular: false,
    features: [
      "Bi-weekly mentor check-ins",
      "Self-paced curriculum",
      "Community forum access",
      "1-2 portfolio projects",
      "Monthly code reviews",
      "Recorded session library",
      "Basic career resources",
      "Certificate of completion",
    ],
  },
]

export function PricingCards() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 ${
                tier.isPopular
                  ? "border-primary bg-gradient-to-b from-primary/5 to-card shadow-lg scale-105"
                  : "border-border bg-card"
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>

              {/* Price */}
              <div className="mb-4">
                <div className="text-4xl font-bold text-primary">{tier.price}</div>
                <div className="text-sm text-muted-foreground">{tier.duration}</div>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>

              {/* Features */}
              <div className="mb-6 space-y-3">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full ${
                  tier.isPopular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Link href="/contact">Choose {tier.name}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All prices are in Nigerian Naira (₦). Payment plans available.{" "}
            <Link href="#payment-options" className="text-primary hover:underline font-medium">
              See payment options
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
