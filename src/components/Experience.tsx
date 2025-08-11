"use client"

import { portfolio } from '@/data/portfolio'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'

export default function Experience() {
  const { experience } = portfolio

  if (!experience || experience.length === 0) return null

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and achievements in software development
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-primary">
                      {exp.company}
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground">
                      {exp.position}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
