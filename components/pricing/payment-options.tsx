import { CreditCard, Calendar, Wallet } from "lucide-react"

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Full Payment",
    description: "Pay the full amount upfront and get a 5% discount on your program fee.",
    discount: "5% Discount",
  },
  {
    icon: Calendar,
    title: "Installment Plan",
    description: "Split your payment into 2-3 monthly installments with no additional fees.",
    discount: "No Extra Fees",
  },
  {
    icon: Wallet,
    title: "Flexible Options",
    description: "We accept bank transfers, card payments, and mobile money for your convenience.",
    discount: "Multiple Methods",
  },
]

export function PaymentOptions() {
  return (
    <section id="payment-options" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">
            Flexible <span className="text-primary">Payment Options</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We make it easy to invest in your education with multiple payment methods and plans.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <method.icon className="h-6 w-6" />
              </div>
              <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {method.discount}
              </div>
              <h3 className="mb-2 text-xl font-bold">{method.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
