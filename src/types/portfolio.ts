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

export interface Portfolio {
  header: Header
  about: About
  projects: Project[]
  skills: string[]
  experience: Experience[]
  contact: Contact
}
