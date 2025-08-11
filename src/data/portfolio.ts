import { Portfolio } from '@/types/portfolio'

export const portfolio: Portfolio = {
  header: {
    homepage: 'https://bryanwills.dev',
    title: 'Bryan Wills',
  },

  about: {
    name: 'Bryan Wills',
    role: 'Senior Software Engineer',
    description:
      'Passionate software engineer with expertise in building scalable web applications and modern user interfaces. I specialize in React, TypeScript, and full-stack development, creating elegant solutions that solve real-world problems. When I\'m not coding, you\'ll find me exploring new technologies and contributing to open source projects.',
    resume: 'https://bryanwills.dev/resume',
    social: {
      linkedin: 'https://linkedin.com/in/bryan-wills',
      github: 'https://github.com/bryanwills',
      twitter: 'https://twitter.com/bryanwills',
    },
  },

  projects: [
    {
      name: 'MealForge - Recipe Management App',
      description:
        'A comprehensive recipe management and meal planning application built with Next.js, TypeScript, and Clerk authentication. Features include personal recipe creation, external recipe discovery via Spoonacular API, recipe saving system, and meal planning capabilities.',
      stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Clerk', 'Tailwind CSS'],
      sourceCode: 'https://github.com/bryanwills/mealforge',
      livePreview: 'https://mealforge-orpin.vercel.app',
      featured: true,
    },
    {
      name: 'BigBrainCoding - AI Learning Platform',
      description:
        'An AI-powered coding education platform that helps developers learn new technologies through interactive tutorials, code examples, and personalized learning paths.',
      stack: ['React', 'TypeScript', 'AI/ML', 'Node.js', 'MongoDB'],
      sourceCode: 'https://github.com/bryanwills/bigbraincoding',
      livePreview: null,
      featured: true,
    },
    {
      name: 'Real Estate Agent Website',
      description:
        'A modern, responsive website for real estate agents built with Next.js. Features include property listings, contact forms, and professional presentation of real estate services.',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      sourceCode: 'https://github.com/bryanwills/Real-Estate-Agent-Website-NextJS-Stack',
      livePreview: null,
      featured: false,
    },
    {
      name: 'Docker Development Environment',
      description:
        'A comprehensive Docker development environment setup with multiple services, including databases, caching layers, and development tools for full-stack applications.',
      stack: ['Docker', 'Docker Compose', 'PostgreSQL', 'Redis', 'Nginx'],
      sourceCode: 'https://github.com/bryanwills/docker',
      livePreview: null,
      featured: false,
    },
    {
      name: 'Disney Solana - Web3 Platform',
      description:
        'A Web3 platform built on Solana blockchain featuring Disney-themed NFTs, marketplace functionality, and blockchain integration for digital collectibles.',
      stack: ['Solana', 'Web3', 'React', 'TypeScript', 'Blockchain'],
      sourceCode: 'https://github.com/bryanwills/disneysolana.com',
      livePreview: null,
      featured: false,
    },
    {
      name: 'CasePrep - Interview Preparation',
      description:
        'An interview preparation platform designed to help candidates practice case studies, technical questions, and behavioral interviews with comprehensive feedback and scoring.',
      stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Authentication'],
      sourceCode: 'https://github.com/bryanwills/caseprep',
      livePreview: null,
      featured: false,
    },
  ],

  skills: [
    {
      name: 'React',
      icon: 'react',
      githubRepos: ['mealforge', 'bigbraincoding', 'Real-Estate-Agent-Website-NextJS-Stack', 'disneysolana.com', 'caseprep']
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
      githubRepos: ['mealforge', 'bigbraincoding', 'Real-Estate-Agent-Website-NextJS-Stack', 'disneysolana.com', 'caseprep']
    },
    {
      name: 'Node.js',
      icon: 'nodejs',
      githubRepos: ['bigbraincoding', 'caseprep']
    },
    {
      name: 'Next.js',
      icon: 'nextjs',
      githubRepos: ['mealforge', 'Real-Estate-Agent-Website-NextJS-Stack']
    },
    {
      name: 'PostgreSQL',
      icon: 'postgresql',
      githubRepos: ['mealforge', 'docker']
    },
    {
      name: 'MongoDB',
      icon: 'mongodb',
      githubRepos: ['bigbraincoding', 'caseprep']
    },
    {
      name: 'Docker',
      icon: 'docker',
      githubRepos: ['docker', 'mealforge']
    },
    {
      name: 'Git',
      icon: 'git',
      githubRepos: ['mealforge', 'bigbraincoding', 'Real-Estate-Agent-Website-NextJS-Stack', 'docker', 'disneysolana.com', 'caseprep']
    },
    {
      name: 'CI/CD',
      icon: 'github',
      githubRepos: ['mealforge', 'bigbraincoding', 'Real-Estate-Agent-Website-NextJS-Stack', 'docker', 'disneysolana.com', 'caseprep']
    },
    {
      name: 'REST APIs',
      icon: 'api',
      githubRepos: ['mealforge', 'bigbraincoding', 'caseprep']
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwind',
      githubRepos: ['mealforge', 'Real-Estate-Agent-Website-NextJS-Stack']
    },
    {
      name: 'Prisma',
      icon: 'prisma',
      githubRepos: ['mealforge']
    },
    {
      name: 'Express.js',
      icon: 'express',
      githubRepos: ['bigbraincoding', 'caseprep']
    },
  ],

  experience: [
    {
      company: 'Big Brain Coding',
      position: 'Founder/CEO',
      duration: '2023 - Present',
      description: 'Founded and leading an AI-powered coding education platform that helps developers learn new technologies through interactive tutorials and personalized learning paths.',
      achievements: [
        'Built and launched bigbraincoding.com platform',
        'Developed AI-powered learning algorithms for personalized education',
        'Created comprehensive curriculum covering modern web technologies'
      ]
    },
    {
      company: 'Code Louisville',
      position: 'Student',
      duration: '2020 - 2022',
      description: 'Completed comprehensive web development training program covering modern frontend and backend technologies.',
      achievements: [
        'Graduated with proficiency in React, TypeScript, and modern CSS',
        'Completed hands-on projects that mirror real-world development scenarios',
        'Developed strong foundation in full-stack web development'
      ]
    }
  ],

  contact: {
    email: 'bryanwi09@gmail.com',
    location: 'Louisville, KY',
    availability: 'Available for new opportunities',
  },

  githubActivity: {
    username: 'bryanwills',
    recentRepos: [
      {
        name: 'mealforge',
        description: 'Comprehensive recipe management and meal planning application',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
        lastUpdated: '2025-01-15'
      },
      {
        name: 'bigbraincoding',
        description: 'AI-powered coding education platform',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
        lastUpdated: '2025-01-10'
      },
      {
        name: 'Real-Estate-Agent-Website-NextJS-Stack',
        description: 'Modern real estate agent website built with Next.js',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
        lastUpdated: '2025-01-12'
      }
    ]
  }
}
