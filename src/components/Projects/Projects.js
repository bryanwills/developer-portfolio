import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id='projects' className='section projects'>
      <div className='container'>
        <h2 className='section__title'>Featured Projects</h2>

        {featuredProjects.length > 0 && (
          <div className='projects__featured'>
            {featuredProjects.map((project) => (
              <ProjectContainer key={uniqid()} project={project} featured={true} />
            ))}
          </div>
        )}

        {otherProjects.length > 0 && (
          <>
            <h3 className='projects__subtitle'>Other Projects</h3>
            <div className='projects__grid'>
              {otherProjects.map((project) => (
                <ProjectContainer key={uniqid()} project={project} featured={false} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects
