import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <div className='container'>
        <h2 className='section__title'>Get In Touch</h2>
        <div className='contact__content'>
          <div className='contact__info'>
            <h3 className='contact__subtitle'>Let's work together</h3>
            <p className='contact__description'>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className='contact__details'>
              {contact.location && (
                <div className='contact__detail'>
                  <span className='contact__label'>Location:</span>
                  <span className='contact__value'>{contact.location}</span>
                </div>
              )}

              {contact.availability && (
                <div className='contact__detail'>
                  <span className='contact__label'>Status:</span>
                  <span className='contact__value contact__value--available'>{contact.availability}</span>
                </div>
              )}
            </div>
          </div>

          <div className='contact__action'>
            <a href={`mailto:${contact.email}`} className='btn btn--primary contact__email'>
              Send me an email
            </a>
            <p className='contact__email-text'>{contact.email}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
