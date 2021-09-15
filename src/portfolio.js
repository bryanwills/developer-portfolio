const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://bryanwills.dev',
  title: 'bryanwills.dev.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bryan Wills',
  role: 'Front End Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://bryanwills.dev',
  social: {
    linkedin: 'https://linkedin.com/u/bryan-wills',
    github: 'https://github.com/bryanwills',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Code Louisville Front End Web Development',
    description:
      'Completed the 12 week course with Code Louisville funded by the City of Louisville to provide software development experience to anyone interested. Course consisted of HTML, CSS and JavaScript content and required a completed final project uploaded to Github.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/bryanwills/CodeLouisville/',
    livePreview: 'https://bryanwills.dev/CodeLouisville/',
  },
  {
    name: 'Sparta Mortgage',
    description:
      'The owner of Sparta Mortgage had a website hosted with Wix and wished to move it to another hosting provider first, and then update the wesbite later. He was nearing the end of his domain contract with Wix and wanted to move to a professional platform. I migrated the website from Wix to InMotion and updated some of the website until the redesign is completed. ',
    stack: ['SASS', 'HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://spartamortgage.com',
    livePreview: 'https://spartamortgage.com',
  },
  {
    name: 'URL2BEN',
    description:
      'Project is in the works. This project will take a URL and bookmark it for the user and provide a number of options for the user to save and store the URL. At any point in time on my computer, I have 100+ Chrome tabs open and I want a better way to manage my research, or bookmarks so that my computer is not bogged down with Chrome hogging memory. Delicious was pretty close to what I wanted when it was active. Looking to implement my version of Delicious and have more control over the content and resources.',
    stack: ['Python', 'Django' ],
    sourceCode: 'https://github.com/bryanwills/URL2BEN/',
    livePreview: 'https://github.com/bryanwills/URL2BEN/',
  },
  {
    name: 'Examples of Front End Web Development Designs',
    description:
      'Multiple examples of Front End Web Development Designs that anyone can use for their project. There are various options to choose from, hamburger menus, navigation ',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Sass' ],
    sourceCode: 'https://github.com/bryanwills/FrontEndWebDevDesigns',
    livePreview: 'https://github.com/bryanwills/FrontEndWebDevDesigns',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Python',
  'Django',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bryanwi09@gmail.com',
}

export { header, about, projects, skills, contact }
