import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@creittechacademy.com",
    link: "mailto:hello@creittechacademy.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+234 XXX XXX XXXX",
    link: "tel:+234XXXXXXXXX",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Lagos, Nigeria",
    link: null,
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Mon - Fri: 9AM - 6PM WAT",
    link: null,
  },
]

export function ContactInfo() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-foreground">Get In Touch</h2>
      <p className="mb-8 text-muted-foreground">
        Have questions about our programs, pricing, or application process? We're here to help! Reach out through any of
        these channels.
      </p>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon
          const content = detail.link ? (
            <a href={detail.link} className="text-primary hover:underline">
              {detail.content}
            </a>
          ) : (
            <span>{detail.content}</span>
          )

          return (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-bold text-foreground">{detail.title}</h3>
                <div className="text-muted-foreground">{content}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 rounded-2xl border bg-accent/20 p-6">
        <h3 className="mb-3 text-xl font-bold text-foreground">Quick Response Guarantee</h3>
        <p className="text-sm text-muted-foreground">
          We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us
          directly.
        </p>
      </div>
    </div>
  )
}
