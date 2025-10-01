import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Creit Tech Academy was born from a simple observation: traditional tech education wasn't working for
                everyone. Large class sizes, generic curriculums, and lack of personalized attention left many talented
                individuals struggling to break into tech.
              </p>
              <p>
                As an extension of Creit Technologies Limited, we leverage years of industry experience to provide what
                we wished we had when starting out—dedicated mentors, hands-on projects, and a clear path from learning
                to employment.
              </p>
              <p>
                Today, we're proud to offer one-on-one training across six specialized tech programs, helping students
                build portfolios that prove their skills and land their dream jobs.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <Image
              src="/diverse-team-collaborating-on-tech-project-in-mode.jpg"
              alt="Creit Tech Academy team collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
