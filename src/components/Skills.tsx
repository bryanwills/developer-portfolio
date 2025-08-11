"use client"

import { portfolio } from '@/data/portfolio'
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiPrisma,
  SiExpress
} from 'react-icons/si'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Github, ExternalLink } from 'lucide-react'

export default function Skills() {
  const { skills, projects } = portfolio

  if (!skills || skills.length === 0) return null

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      react: SiReact,
      typescript: SiTypescript,
      nodejs: SiNodedotjs,
      nextjs: SiNextdotjs,
      postgresql: SiPostgresql,
      mongodb: SiMongodb,
      docker: SiDocker,
      git: SiGit,
      github: SiGithub,
      tailwind: SiTailwindcss,
      prisma: SiPrisma,
      express: SiExpress,
      api: ExternalLink,
      cid: SiGithub
    }
    return iconMap[iconName] || SiGithub
  }

  const getProjectLinks = (skillName: string) => {
    const skill = skills.find(s => s.name === skillName)
    if (!skill) return []

    return skill.githubRepos.map(repoName => {
      const project = projects.find(p => p.name.toLowerCase().includes(repoName.toLowerCase()))
      return project ? { name: project.name, url: project.sourceCode } : null
    }).filter(Boolean)
  }

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-lg-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build amazing applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = getIcon(skill.icon)
            const projectLinks = getProjectLinks(skill.name)

            return (
              <div
                key={index}
                className="group p-6 rounded-xl border bg-card hover:bg-accent hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-3">
                    <p className="font-medium text-base group-hover:text-primary transition-colors">
                      {skill.name}
                    </p>

                    {projectLinks.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Featured in:</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {projectLinks.map((project, idx) => (
                            <Button
                              key={idx}
                              asChild
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2 text-xs"
                            >
                              <a
                                href={project?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                <Github className="h-3 w-3" />
                                {project?.name}
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
