"use client"

import { portfolio } from '@/data/portfolio'
import { Button } from './ui/button'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { Badge } from './ui/badge'

export default function About() {
  const { about } = portfolio

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {about.name}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                {about.role}
              </h2>
            </div>

            <p className="text-lg-xl text-muted-foreground leading-relaxed max-w-2xl">
              {about.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="/Bryan_Wills_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-3 gap-6">
              {about.social.github && (
                <a
                  href={about.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl border bg-card hover:bg-accent transition-colors"
                >
                  <Github className="h-8 w-8 mx-auto group-hover:text-primary transition-colors" />
                  <span className="sr-only">GitHub</span>
                </a>
              )}

              {about.social.linkedin && (
                <a
                  href={about.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl border bg-card hover:bg-accent transition-colors"
                >
                  <Linkedin className="h-8 w-8 mx-auto group-hover:text-primary transition-colors" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}

              {about.social.twitter && (
                <a
                  href={about.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl border bg-card hover:bg-accent transition-colors"
                >
                  <Twitter className="h-8 w-8 mx-auto group-hover:text-primary transition-colors" />
                  <span className="sr-only">Twitter</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
