import { Target, Users, Rocket } from "lucide-react"

export function OurMission() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
          <p className="mb-12 text-pretty text-lg opacity-90 md:text-xl">
            To democratize tech education by providing personalized, mentor-led training that transforms beginners into
            job-ready professionals with portfolios that speak for themselves.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Personalized Learning</h3>
              <p className="text-sm opacity-90">
                Every student gets individual attention tailored to their learning pace and career goals.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Expert Mentorship</h3>
              <p className="text-sm opacity-90">
                Learn from industry professionals who've walked the path and know what employers want.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Career Success</h3>
              <p className="text-sm opacity-90">
                Build a portfolio of real projects that prove your skills and open doors to opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
