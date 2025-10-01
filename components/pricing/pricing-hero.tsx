export function PricingHero() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Seats Capped at 20/Month
          </div>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-balance">
            Invest in Your <span className="text-primary">Tech Future</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Choose the training tier that fits your goals and budget. All plans include one-on-one mentorship, portfolio
            projects, and career support.
          </p>
        </div>
      </div>
    </section>
  )
}
