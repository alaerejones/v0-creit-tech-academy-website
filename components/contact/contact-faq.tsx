import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does the application process take?",
    answer:
      "After submitting your application, we'll review it within 24-48 hours and schedule a brief call to discuss your goals and answer any questions. The entire process typically takes 3-5 business days.",
  },
  {
    question: "Do I need prior tech experience to apply?",
    answer:
      "No prior experience is required! Our programs are designed for beginners. We assess your commitment, learning ability, and career goals rather than existing technical skills.",
  },
  {
    question: "Can I switch programs after starting?",
    answer:
      "Yes, if you realize another program is a better fit within the first two weeks, we can help you transition. However, we recommend choosing carefully based on your career goals during the application process.",
  },
  {
    question: "What happens after I submit this form?",
    answer:
      "You'll receive a confirmation email immediately. Within 24-48 hours, our admissions team will reach out to schedule a brief call to discuss your application, answer questions, and guide you through the next steps.",
  },
  {
    question: "Are there any entrance requirements?",
    answer:
      "We look for commitment, willingness to learn, and clear career goals. You'll need a computer with internet access and the ability to dedicate 10-15 hours per week to your studies.",
  },
]

export function ContactFAQ() {
  return (
    <section className="bg-accent/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border bg-background px-6">
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <a href="mailto:hello@creittechacademy.com" className="font-medium text-primary hover:underline">
                Email us directly
              </a>{" "}
              and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
