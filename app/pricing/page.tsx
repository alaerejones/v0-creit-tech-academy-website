import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { CorporateTraining } from "@/components/pricing/corporate-training"
import { PaymentOptions } from "@/components/pricing/payment-options"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export const metadata = {
  title: "Pricing & Payment Plans | Affordable Tech Training with Flexible Options",
  description:
    "Choose from 4 training tiers: Mentor's Table, Peer Studio, Team Entry, and Partner Access. Flexible payment plans available. Limited to 20 seats per month.",
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <CorporateTraining />
      <PaymentOptions />
      <PricingFAQ />
    </>
  )
}
