import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-[#08124D] text-[#FEF4F0]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/creit-logo-light.png"
                alt="Creit Tech Academy Logo"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <span className="text-lg font-bold text-[#FEF4F0] sm:text-xl">Creit Tech Academy</span>
            </Link>
            <p className="mb-4 text-sm leading-relaxed opacity-90">
              Empowering African tech talent through personalized mentorship and hands-on training. Build real skills,
              create a portfolio, and launch your tech career.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#FEF4F0]/10 p-2 transition-colors hover:bg-primary"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#FEF4F0]/10 p-2 transition-colors hover:bg-primary"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#FEF4F0]/10 p-2 transition-colors hover:bg-primary"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#FEF4F0]/10 p-2 transition-colors hover:bg-primary"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-90 transition-opacity hover:opacity-100 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="opacity-90 transition-opacity hover:opacity-100 hover:text-primary">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="opacity-90 transition-opacity hover:opacity-100 hover:text-primary"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="opacity-90 transition-opacity hover:opacity-100 hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="opacity-90 transition-opacity hover:opacity-100 hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="opacity-90 transition-opacity hover:opacity-100 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="opacity-90 transition-opacity hover:opacity-100 hover:text-primary"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@creittechacademy.com" className="opacity-90 transition-opacity hover:opacity-100">
                  info@creittechacademy.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+2348012345678" className="opacity-90 transition-opacity hover:opacity-100">
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="opacity-90">Abuja, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Stay Updated</h3>
            <p className="mb-4 text-sm opacity-90">Subscribe to our newsletter for tech tips and program updates.</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#FEF4F0] text-[#08124D] placeholder:text-[#08124D]/60"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FEF4F0] to-[#FCE0D1] text-[#08124D] hover:opacity-90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-[#FEF4F0]/20 pt-8 text-center text-sm opacity-90">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} Creit Tech Academy.
            <br />
            All rights reserved.
            <br />A division of{" "}
            <a
              href="https://creittech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline transition-opacity hover:opacity-80"
            >
              Creit Technologies Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
