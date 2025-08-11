import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer__content'>
        <p className='footer__text'>
          © 2024 Bryan Wills. Built with React and modern web technologies.
        </p>
        <div className='footer__links'>
          <a
            href='https://github.com/bryanwills'
            className='footer__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/bryan-wills'
            className='footer__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
