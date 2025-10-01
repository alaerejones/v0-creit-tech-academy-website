export function PortfolioHero() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Student Work Showcase
          </div>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-balance">
            Real Projects, <span className="text-primary">Real Skills</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl text-pretty">
            Explore the impressive portfolios created by our graduates. These aren't just practice projects—they're real
            solutions that solve actual problems.
          </p>
        </div>
      </div>
    </section>
  )
}
