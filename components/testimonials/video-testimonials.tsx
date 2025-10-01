import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

const videoTestimonials = [
  {
    name: "Sarah Okonkwo",
    role: "UI/UX Designer",
    thumbnail: "/woman-presenting-design-portfolio.jpg",
    duration: "3:45",
  },
  {
    name: "David Oluwaseun",
    role: "Frontend Developer",
    thumbnail: "/man-coding-on-laptop.jpg",
    duration: "4:12",
  },
  {
    name: "Grace Adebayo",
    role: "Data Analyst",
    thumbnail: "/woman-analyzing-data-dashboard.jpg",
    duration: "3:28",
  },
]

export function VideoTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Watch Their <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear directly from our graduates about their journey and career transformation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {videoTestimonials.map((video, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.name}
                  className="h-full w-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all group-hover:bg-black/50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white">
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold">{video.name}</h3>
                <p className="text-sm text-muted-foreground">{video.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">
              Start Your Success Story <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
