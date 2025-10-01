"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const programs = [
  {
    value: "ui-ux-design",
    label: "UI/UX Design",
    tiers: ["Mentor's Table (₦250K)", "Peer Studio (₦180K)", "Team Entry (₦120K)", "Partner Access (₦80K)"],
  },
  {
    value: "data-analysis",
    label: "Data Analysis",
    tiers: ["Mentor's Table (₦250K)", "Peer Studio (₦180K)", "Team Entry (₦120K)", "Partner Access (₦80K)"],
  },
  {
    value: "data-science",
    label: "Data Science",
    tiers: ["Mentor's Table (₦250K)", "Peer Studio (₦180K)", "Team Entry (₦120K)", "Partner Access (₦80K)"],
  },
  {
    value: "frontend-development",
    label: "Frontend Development",
    tiers: ["Mentor's Table (₦250K)", "Peer Studio (₦180K)", "Team Entry (₦120K)", "Partner Access (₦80K)"],
  },
  {
    value: "mobile-development",
    label: "Mobile Development",
    tiers: ["Mentor's Table (₦250K)", "Peer Studio (₦180K)", "Team Entry (₦120K)", "Partner Access (₦80K)"],
  },
  {
    value: "backend-development",
    label: "Backend Development",
    tiers: ["Mentor's Table (₦250K)", "Peer Studio (₦180K)", "Team Entry (₦120K)", "Partner Access (₦80K)"],
  },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    tier: "",
    experience: "",
    goals: "",
    availability: "",
    message: "",
  })

  const selectedProgram = programs.find((p) => p.value === formData.program)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your application! We'll get back to you within 24 hours.")
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground">Apply Now</h2>
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
          <Select
            value={formData.program}
            onValueChange={(value) => setFormData({ ...formData, program: value, tier: "" })}
          >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a program" />
            </SelectTrigger>
            <SelectContent>
              {programs.map((program) => (
                <SelectItem key={program.value} value={program.value}>
                  {program.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedProgram && (
          <div className="space-y-6 animate-fade-in-up border-l-4 border-primary pl-4">
            <div>
              <Label htmlFor="tier">Training Tier *</Label>
              <RadioGroup
                value={formData.tier}
                onValueChange={(value) => setFormData({ ...formData, tier: value })}
                className="mt-3 space-y-3"
              >
                {selectedProgram.tiers.map((tier) => (
                  <div key={tier} className="flex items-center space-x-2">
                    <RadioGroupItem value={tier} id={tier} />
                    <Label htmlFor={tier} className="font-normal cursor-pointer">
                      {tier}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="experience">Current Experience Level *</Label>
              <Select
                value={formData.experience}
                onValueChange={(value) => setFormData({ ...formData, experience: value })}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                  <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="looking-to-specialize">Looking to Specialize</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="goals">What are your career goals? *</Label>
              <Textarea
                id="goals"
                required
                placeholder="Tell us what you want to achieve with this program..."
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                className="mt-2 min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="availability">When can you start? *</Label>
              <Select
                value={formData.availability}
                onValueChange={(value) => setFormData({ ...formData, availability: value })}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select your preferred start time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediately">Immediately</SelectItem>
                  <SelectItem value="within-2-weeks">Within 2 Weeks</SelectItem>
                  <SelectItem value="within-1-month">Within 1 Month</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        <div>
          <Label htmlFor="message">Additional Information</Label>
          <Textarea
            id="message"
            placeholder="Share any additional details about your background or questions you have..."
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
