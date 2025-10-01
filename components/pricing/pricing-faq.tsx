import Link from "next/link"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Can I switch tiers after starting?",
    answer:
      "Yes! You can upgrade to a higher tier at any time. We'll prorate the difference and adjust your learning plan accordingly.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 14-day money-back guarantee. If you're not satisfied within the first two weeks, we'll refund your payment in full.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees! The price you see is what you pay. All materials, resources, and support are included in your program fee.",
  },
  {
    question: "Do you offer scholarships?",
    answer:
      "Yes! We offer partial scholarships for exceptional candidates with financial need. Apply and mention your interest in our scholarship program.",
  },
]

export function PricingFAQ() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Pricing <span className="text-primary">Questions?</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl bg-card border border-border p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
