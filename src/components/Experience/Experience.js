import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience || experience.length === 0) return null

  return (
    <section id='experience' className='section experience'>
      <div className='container'>
        <h2 className='section__title'>Experience</h2>
        <div className='experience__grid'>
          {experience.map((exp, index) => (
            <div key={index} className='experience__item'>
              <div className='experience__header'>
                <h3 className='experience__company'>{exp.company}</h3>
                <span className='experience__duration'>{exp.duration}</span>
              </div>
              <h4 className='experience__position'>{exp.position}</h4>
              <p className='experience__description'>{exp.description}</p>
              {exp.achievements && (
                <ul className='experience__achievements'>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className='experience__achievement'>
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
