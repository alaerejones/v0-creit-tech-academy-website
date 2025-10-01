"use client"

import { useState } from "react"
import { Code, Database, Palette, TrendingUp, Lightbulb } from "lucide-react"

const categories = [
  { id: "all", name: "All Posts", icon: Lightbulb },
  { id: "software", name: "Software", icon: Code },
  { id: "data", name: "Data", icon: Database },
  { id: "design", name: "Design", icon: Palette },
  { id: "growth", name: "Growth", icon: TrendingUp },
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
