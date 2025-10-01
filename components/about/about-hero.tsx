export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/20 to-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Our Story
          </div>
          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Building Africa's Next Generation of <span className="text-primary">Tech Leaders</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            At Creit Tech Academy, we believe in personalized learning. Every student deserves one-on-one attention,
            expert mentorship, and real-world skills that lead to career success.
          </p>
        </div>
      </div>
    </section>
  )
}
