import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <div className='container'>
        <h2 className='section__title'>Skills & Technologies</h2>
        <div className='skills__grid'>
          {skills.map((skill) => (
            <div key={uniqid()} className='skill__item'>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
