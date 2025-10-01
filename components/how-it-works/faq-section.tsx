import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "Do I need prior experience?",
    answer:
      "No! Our programs are designed for complete beginners. Your mentor will assess your current level and create a personalized plan that starts where you are.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "We recommend 10-15 hours per week including mentor sessions and self-study. However, the schedule is flexible and can be adjusted to fit your availability.",
  },
  {
    question: "What if I need to pause my program?",
    answer:
      "Life happens! You can pause your program for up to 2 months without penalty. Just let your mentor know and we'll adjust your schedule.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! Upon successful completion of your program and portfolio projects, you'll receive an industry-recognized certificate from Creit Tech Academy.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
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
          <p className="text-muted-foreground mb-6">Still have questions?</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
