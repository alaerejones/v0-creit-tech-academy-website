import { TestimonialsHero } from "@/components/testimonials/testimonials-hero"
import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid"
import { SuccessStats } from "@/components/testimonials/success-stats"
import { VideoTestimonials } from "@/components/testimonials/video-testimonials"

export const metadata = {
  title: "Student Success Stories | Creit Tech Academy Testimonials & Reviews",
  description:
    "Read success stories from our graduates who landed tech jobs at top companies. See real portfolios and career transformations from our personalized training programs.",
}

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsGrid />
      <SuccessStats />
      <VideoTestimonials />
    </>
  )
}
