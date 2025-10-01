"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const programs = [
  "UI/UX Design",
  "Data Analysis",
  "Data Science",
  "Frontend Development",
  "Mobile Development",
  "Backend Development",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your application! We'll get back to you within 24 hours.")
  }

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-foreground">Apply Now</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            required
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            required
            placeholder="+234 XXX XXX XXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="program">Program of Interest *</Label>
          <Select value={formData.program} onValueChange={(value) => setFormData({ ...formData, program: value })}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a program" />
            </SelectTrigger>
            <SelectContent>
              {programs.map((program) => (
                <SelectItem key={program} value={program}>
                  {program}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message">Tell Us About Yourself</Label>
          <Textarea
            id="message"
            placeholder="Share your background, goals, and why you want to join Creit Tech Academy..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-2 min-h-[120px]"
          />
        </div>

        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Submit Application
        </Button>

        <p className="text-sm text-muted-foreground">
          By submitting this form, you agree to our privacy policy and consent to be contacted about our programs.
        </p>
      </form>
    </div>
  )
}
