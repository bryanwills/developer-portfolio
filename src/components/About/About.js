import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <section id='about' className='section about'>
      <div className='container'>
        <div className='about__content'>
          <div className='about__text'>
            {name && (
              <h1 className='about__name'>
                Hi, I'm <span className='about__name--highlight'>{name}</span>
              </h1>
            )}

            {role && (
              <h2 className='about__role'>
                {role}
              </h2>
            )}

            <p className='about__description'>{description && description}</p>

            <div className='about__actions'>
              {resume && (
                <a href={resume} className='btn btn--primary'>
                  View Resume
                </a>
              )}
            </div>
          </div>

          <div className='about__social'>
            {social && (
              <div className='social__links'>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label='github'
                    className='social__link'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label='linkedin'
                    className='social__link'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <LinkedInIcon />
                  </a>
                )}

                {social.twitter && (
                  <a
                    href={social.twitter}
                    aria-label='twitter'
                    className='social__link'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <TwitterIcon />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
