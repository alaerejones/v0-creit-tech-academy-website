import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Adebayo Ogunlesi",
    role: "Founder & Lead Instructor",
    image: "/professional-african-male-tech-instructor.jpg",
    bio: "10+ years in software development. Passionate about mentoring the next generation of African tech talent.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Chioma Nwankwo",
    role: "UI/UX Design Mentor",
    image: "/professional-african-female-ux-designer.jpg",
    bio: "Award-winning designer with experience at top tech companies. Specializes in user-centered design.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emeka Okafor",
    role: "Data Science Instructor",
    image: "/professional-african-male-data-scientist.jpg",
    bio: "Data scientist with expertise in machine learning and analytics. Former lead at a fintech startup.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Fatima Abdullahi",
    role: "Full-Stack Development Mentor",
    image: "/professional-african-female-software-developer.jpg",
    bio: "Full-stack engineer passionate about building scalable applications and teaching best practices.",
    linkedin: "#",
    twitter: "#",
  },
]

export function MeetTheTeam() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Meet Our Expert Mentors</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Learn from experienced professionals who are committed to your success and passionate about sharing their
            knowledge.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-foreground">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p>
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
