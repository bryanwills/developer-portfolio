import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__brand'>
          {homepage ? (
            <a href={homepage} className='header__title'>
              {title}
            </a>
          ) : (
            <h1 className='header__title'>{title}</h1>
          )}
        </div>

        <div className='header__controls'>
          <Navbar />
          <button
            onClick={toggleTheme}
            className='theme-toggle'
            aria-label={`Switch to ${themeName === 'light' ? 'dark' : 'light'} theme`}
          >
            {themeName === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
