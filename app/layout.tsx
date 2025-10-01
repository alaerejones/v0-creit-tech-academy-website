import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Creit Tech Academy | One-on-One Tech Training in Nigeria",
  description:
    "Get personalized tech training with real mentorship. Learn UI/UX Design, Data Analysis, Frontend & Backend Development with portfolio-building projects. Tech training in Abuja, Nigeria.",
  keywords: [
    "tech training Nigeria",
    "UI/UX courses Abuja",
    "backend dev mentorship Africa",
    "data analysis training",
    "frontend development courses",
    "tech mentorship Nigeria",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
