import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project, featured = false }) => (
  <div className={`project ${featured ? 'project--featured' : ''}`}>
    <div className='project__header'>
      <h3 className='project__title'>{project.name}</h3>
      {featured && <span className='project__badge'>Featured</span>}
    </div>

    <p className='project__description'>{project.description}</p>

    {project.stack && (
      <div className='project__stack'>
        {project.stack.map((item) => (
          <span key={uniqid()} className='project__stack-item'>
            {item}
          </span>
        ))}
      </div>
    )}

    <div className='project__links'>
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='project__link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon />
          <span>Code</span>
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='project__link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LaunchIcon />
          <span>Live</span>
        </a>
      )}
    </div>
  </div>
)

export default ProjectContainer
