"use client"

import { portfolio } from '@/data/portfolio'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const { projects } = portfolio

  if (!projects || projects.length === 0) return null

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of my recent work and personal projects
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="space-y-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border bg-card p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60" />

                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <Badge variant="secondary" className="w-fit">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.sourceCode && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}

                    {project.livePreview && (
                      <Button asChild size="sm">
                        <a
                          href={project.livePreview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center text-muted-foreground">
              Other Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl border bg-card p-6 hover:shadow-md transition-all duration-300 hover:border-primary/50"
                >
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.sourceCode && (
                        <Button asChild variant="ghost" size="sm">
                          <a
                            href={project.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}

                      {project.livePreview && (
                        <Button asChild variant="ghost" size="sm">
                          <a
                            href={project.livePreview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
