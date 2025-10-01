import { Hero } from "@/components/home/hero"
import { WhyCTA } from "@/components/home/why-cta"
import { FeaturedPrograms } from "@/components/home/featured-programs"
import { HowItWorksPreview } from "@/components/home/how-it-works-preview"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Creit Tech Academy | Get One-on-One Training, Real Tech Skills and a Portfolio That Proves It",
  description:
    "Transform your tech career with personalized mentorship. Learn UI/UX Design, Data Analysis, Frontend & Backend Development with real projects. Limited to 20 seats per month.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyCTA />
      <FeaturedPrograms />
      <HowItWorksPreview />
      <StatsSection />
      <CTASection />
    </>
  )
}
