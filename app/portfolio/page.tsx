import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { PortfolioCTA } from "@/components/portfolio/portfolio-cta"

export const metadata = {
  title: "Student Portfolio Gallery | Real Projects from Our Graduates",
  description:
    "Explore impressive portfolios created by Creit Tech Academy graduates. See real projects in UI/UX design, web development, data analysis, and more.",
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </>
  )
}
