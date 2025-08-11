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
      name: 'Sparta Mortgage Platform',
      description:
        'Led the complete migration and redesign of Sparta Mortgage\'s web platform from Wix to a modern React-based solution. Implemented responsive design, improved performance by 40%, and enhanced user experience with intuitive navigation and modern UI components.',
      stack: ['React', 'TypeScript', 'SASS', 'Node.js', 'PostgreSQL'],
      sourceCode: 'https://github.com/bryanwills/sparta-mortgage',
      livePreview: 'https://spartamortgage.com',
      featured: true,
    },
    {
      name: 'URL2BEN - Smart Bookmark Manager',
      description:
        'Developed a comprehensive bookmark management system inspired by Delicious, featuring intelligent categorization, search capabilities, and cross-device synchronization. Built with Django and modern frontend technologies.',
      stack: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis'],
      sourceCode: 'https://github.com/bryanwills/URL2BEN',
      livePreview: 'https://url2ben.bryanwills.dev',
      featured: true,
    },
    {
      name: 'Frontend Component Library',
      description:
        'Created a comprehensive collection of reusable React components and design patterns. Includes navigation systems, form components, and interactive elements that can be easily integrated into any project.',
      stack: ['React', 'TypeScript', 'Storybook', 'Jest', 'SASS'],
      sourceCode: 'https://github.com/bryanwills/FrontEndWebDevDesigns',
      livePreview: 'https://components.bryanwills.dev',
      featured: false,
    },
    {
      name: 'Code Louisville Alumni Portal',
      description:
        'Built an alumni networking platform for Code Louisville graduates, featuring job boards, mentorship connections, and resource sharing. Contributed to the local tech community growth.',
      stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      sourceCode: 'https://github.com/bryanwills/code-louisville-alumni',
      livePreview: 'https://alumni.codelouisville.org',
      featured: false,
    },
  ],

  skills: [
    {
      name: 'React',
      icon: 'react',
      githubRepos: ['sparta-mortgage', 'URL2BEN', 'FrontEndWebDevDesigns', 'code-louisville-alumni']
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
      githubRepos: ['sparta-mortgage', 'FrontEndWebDevDesigns', 'code-louisville-alumni']
    },
    {
      name: 'Node.js',
      icon: 'nodejs',
      githubRepos: ['sparta-mortgage', 'code-louisville-alumni']
    },
    {
      name: 'Python',
      icon: 'python',
      githubRepos: ['URL2BEN']
    },
    {
      name: 'Django',
      icon: 'django',
      githubRepos: ['URL2BEN']
    },
    {
      name: 'PostgreSQL',
      icon: 'postgresql',
      githubRepos: ['sparta-mortgage', 'URL2BEN']
    },
    {
      name: 'MongoDB',
      icon: 'mongodb',
      githubRepos: ['code-louisville-alumni']
    },
    {
      name: 'AWS',
      icon: 'aws',
      githubRepos: ['sparta-mortgage', 'URL2BEN']
    },
    {
      name: 'Docker',
      icon: 'docker',
      githubRepos: ['sparta-mortgage', 'URL2BEN']
    },
    {
      name: 'Git',
      icon: 'git',
      githubRepos: ['sparta-mortgage', 'URL2BEN', 'FrontEndWebDevDesigns', 'code-louisville-alumni']
    },
    {
      name: 'CI/CD',
      icon: 'github',
      githubRepos: ['sparta-mortgage', 'URL2BEN', 'FrontEndWebDevDesigns', 'code-louisville-alumni']
    },
    {
      name: 'REST APIs',
      icon: 'api',
      githubRepos: ['sparta-mortgage', 'URL2BEN', 'code-louisville-alumni']
    },
    {
      name: 'GraphQL',
      icon: 'graphql',
      githubRepos: ['sparta-mortgage']
    },
    {
      name: 'SASS/SCSS',
      icon: 'sass',
      githubRepos: ['sparta-mortgage', 'FrontEndWebDevDesigns']
    },
    {
      name: 'Jest',
      icon: 'jest',
      githubRepos: ['FrontEndWebDevDesigns', 'sparta-mortgage']
    },
    {
      name: 'Cypress',
      icon: 'cypress',
      githubRepos: ['sparta-mortgage', 'URL2BEN']
    },
  ],

  experience: [
    {
      company: 'Freelance Developer',
      position: 'Senior Software Engineer',
      duration: '2021 - Present',
      description: 'Building scalable web applications and providing technical consulting for startups and established businesses.',
      achievements: [
        'Led development of 5+ client projects with 100% client satisfaction',
        'Improved application performance by 40% on average',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      company: 'Code Louisville',
      position: 'Frontend Development Instructor',
      duration: '2020 - 2021',
      description: 'Taught modern web development practices to aspiring developers in the Louisville community.',
      achievements: [
        'Graduated 50+ students with 85% employment rate',
        'Developed comprehensive curriculum covering React, TypeScript, and modern CSS',
        'Created hands-on projects that mirror real-world development scenarios'
      ]
    }
  ],

  contact: {
    email: 'bryan@bryanwills.dev',
    location: 'Louisville, KY',
    availability: 'Available for new opportunities',
  },

  githubActivity: {
    username: 'bryanwills',
    recentRepos: [
      {
        name: 'sparta-mortgage',
        description: 'Modern React-based mortgage platform',
        language: 'TypeScript',
        stars: 12,
        forks: 3,
        lastUpdated: '2024-01-15'
      },
      {
        name: 'URL2BEN',
        description: 'Smart bookmark management system',
        language: 'Python',
        stars: 8,
        forks: 2,
        lastUpdated: '2024-01-10'
      },
      {
        name: 'FrontEndWebDevDesigns',
        description: 'Component library and design patterns',
        language: 'TypeScript',
        stars: 15,
        forks: 5,
        lastUpdated: '2024-01-20'
      }
    ]
  }
}
