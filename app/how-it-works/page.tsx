import { HowItWorksHero } from "@/components/how-it-works/how-it-works-hero"
import { ProcessSteps } from "@/components/how-it-works/process-steps"
import { LearningExperience } from "@/components/how-it-works/learning-experience"
import { Timeline } from "@/components/how-it-works/timeline"
import { FAQSection } from "@/components/how-it-works/faq-section"

export const metadata = {
  title: "How It Works | Creit Tech Academy Application & Learning Process",
  description:
    "Learn how our personalized tech training works: from application to graduation. Discover our 5-step process, learning experience, and what to expect.",
}

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <ProcessSteps />
      <LearningExperience />
      <Timeline />
      <FAQSection />
    </>
  )
}
