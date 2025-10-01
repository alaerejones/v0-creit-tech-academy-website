import { ProgramsHero } from "@/components/programs/programs-hero"
import { ProgramsGrid } from "@/components/programs/programs-grid"
import { ProgramBenefits } from "@/components/programs/program-benefits"
import { ProgramCTA } from "@/components/programs/program-cta"

export const metadata = {
  title: "Tech Training Programs | UI/UX, Data Analysis, Frontend & Backend Development",
  description:
    "Choose from 6 specialized tech training programs: UI/UX Design, Data Analysis, Data Science, Frontend Development, Mobile Development, and Backend Development. One-on-one mentorship included.",
}

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramsGrid />
      <ProgramBenefits />
      <ProgramCTA />
    </>
  )
}
