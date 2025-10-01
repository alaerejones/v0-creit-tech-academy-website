import { Video, MessageSquare, FileText, Trophy } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "Live Video Sessions",
    description: "Face-to-face learning with screen sharing, live coding, and real-time collaboration.",
  },
  {
    icon: MessageSquare,
    title: "24/7 Chat Support",
    description: "Get help between sessions via Slack or WhatsApp. Your mentor is always available.",
  },
  {
    icon: FileText,
    title: "Learning Resources",
    description: "Access curated tutorials, documentation, and resources tailored to your learning path.",
  },
  {
    icon: Trophy,
    title: "Progress Tracking",
    description: "Monitor your progress with regular assessments, project reviews, and milestone celebrations.",
  },
]

export function LearningExperience() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Your <span className="text-primary">Learning Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We've designed every aspect of the learning experience to maximize your success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
