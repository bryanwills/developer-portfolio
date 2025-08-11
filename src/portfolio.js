const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://bryanwills.dev',
  title: 'Bryan Wills',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bryan Wills',
  role: 'Software Engineer',
  description:
    'Passionate software engineer with expertise in building scalable web applications and modern user interfaces. I specialize in React, TypeScript, and full-stack development, creating elegant solutions that solve real-world problems. When I\'m not coding, you\'ll find me exploring new technologies and contributing to open source projects.',
  resume: 'https://bryanwills.dev/resume',
  social: {
    linkedin: 'https://linkedin.com/in/bryan-wills',
    github: 'https://github.com/bryanwills',
    twitter: 'https://twitter.com/bryanwills',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
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
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'Django',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Git',
  'CI/CD',
  'REST APIs',
  'GraphQL',
  'SASS/SCSS',
  'Jest',
  'Cypress',
]

const experience = [
  {
    company: 'Freelance Developer',
    position: 'Software Engineer',
    duration: '2018 - Present',
    description: 'Building scalable web applications and providing technical consulting for startups and established businesses.',
    achievements: [
      'Led development of 5+ client projects with 100% client satisfaction',
      'Improved application performance by 40% on average',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    company: 'Code Louisville',
    position: 'Frontend Development Student',
    duration: '2020 - 2021',
    description: 'Practiced modern web development practices to aspiring developers in the Louisville community.',
    achievements: [
      'Graduated 50+ students with 85% employment rate',
      'Developed comprehensive curriculum covering React, TypeScript, and modern CSS',
      'Created hands-on projects that mirror real-world development scenarios'
    ]
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bryan@bryanwills.dev',
  location: 'Louisville, KY',
  availability: 'Available for new opportunities',
}

export { header, about, projects, skills, experience, contact }
