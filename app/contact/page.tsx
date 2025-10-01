import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFAQ } from "@/components/contact/contact-faq"

export const metadata = {
  title: "Contact Us | Apply to Creit Tech Academy - Start Your Tech Journey",
  description:
    "Ready to start your tech career? Contact Creit Tech Academy to apply for our one-on-one training programs. Get answers to your questions and begin your journey.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactFAQ />
    </>
  )
}
