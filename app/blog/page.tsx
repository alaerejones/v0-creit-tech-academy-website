import { BlogHero } from "@/components/blog/blog-hero"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"

export const metadata = {
  title: "Tech Blog | Software Development, Data Science, Design & Career Growth",
  description:
    "Read expert articles on software development, data analysis, UI/UX design, career growth, and tech industry insights. Learn from professionals and stay updated.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </>
  )
}
