import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function BlogNewsletter() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12 text-center space-y-6">
          <div className="flex justify-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Never Miss a <span className="text-primary">Tech Insight</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Get weekly articles, career tips, and exclusive resources delivered straight to your inbox.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row sm:justify-center max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground">Join 5,000+ tech professionals. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
