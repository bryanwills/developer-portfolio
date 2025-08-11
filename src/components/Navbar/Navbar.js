import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { projects, skills, contact, experience } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <a
            href='#about'
            onClick={toggleNavList}
            className='nav__link'
          >
            About
          </a>
        </li>

        {experience && experience.length ? (
          <li className='nav__list-item'>
            <a
              href='#experience'
              onClick={toggleNavList}
              className='nav__link'
            >
              Experience
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='nav__link'
            >
              Skills
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='nav__link'
            >
              Projects
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='nav__link'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleNavList}
        className='nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
