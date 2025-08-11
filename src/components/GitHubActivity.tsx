"use client"

import { portfolio } from '@/data/portfolio'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Github, Star, GitFork, Calendar, ExternalLink } from 'lucide-react'

export default function GitHubActivity() {
  const { githubActivity } = portfolio

  if (!githubActivity || !githubActivity.recentRepos.length) return null

  return (
    <section id="github-activity" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Recent GitHub Activity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out my latest work and contributions on GitHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubActivity.recentRepos.map((repo, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {repo.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {repo.language}
                    </Badge>
                  </div>
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(repo.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>

                <Button asChild size="sm" className="w-full">
                  <a
                    href={`https://github.com/${githubActivity.username}/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Repository
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <a
              href={`https://github.com/${githubActivity.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
