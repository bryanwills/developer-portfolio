"use client"

import { portfolio } from '@/data/portfolio'

export default function Skills() {
  const { skills } = portfolio

  if (!skills || skills.length === 0) return null

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build amazing applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border bg-card hover:bg-accent hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-semibold text-lg">
                    {skill.charAt(0)}
                  </span>
                </div>
                <p className="font-medium text-sm group-hover:text-primary transition-colors">
                  {skill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
