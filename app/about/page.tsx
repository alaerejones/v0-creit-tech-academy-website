import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { OurMission } from "@/components/about/our-mission"
import { OurValues } from "@/components/about/our-values"
import { MeetTheTeam } from "@/components/about/meet-the-team"
import { WhyChooseUs } from "@/components/about/why-choose-us"

export const metadata = {
  title: "About Us | Creit Tech Academy - Personalized Tech Training & Mentorship",
  description:
    "Learn about Creit Tech Academy's mission to provide one-on-one tech training with expert mentors. Discover our story, values, and commitment to your success.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurValues />
      <WhyChooseUs />
      <MeetTheTeam />
    </>
  )
}
