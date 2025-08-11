export interface Header {
  homepage: string
  title: string
}

export interface About {
  name: string
  role: string
  description: string
  resume: string
  social: {
    linkedin: string
    github: string
    twitter?: string
  }
}

export interface Project {
  name: string
  description: string
  stack: string[]
  sourceCode: string
  livePreview: string
  featured: boolean
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string
  achievements: string[]
}

export interface Contact {
  email: string
  location: string
  availability: string
}

export interface Skill {
  name: string
  icon: string
  githubRepos: string[]
}

export interface GitHubRepo {
  name: string
  description: string
  language: string
  stars: number
  forks: number
  lastUpdated: string
}

export interface GitHubActivity {
  username: string
  recentRepos: GitHubRepo[]
}

export interface Portfolio {
  header: Header
  about: About
  projects: Project[]
  skills: Skill[]
  experience: Experience[]
  contact: Contact
  githubActivity: GitHubActivity
}
