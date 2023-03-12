import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__navbar'>
        <div className='navbar__logo'>
            <Link to='/'>Medi<span>Plus</span></Link>
        </div>
        <div className='navbar__links'>
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>Services</Link>
                </li>
                <li>
                    <Link>Gallery</Link>
                </li>
                <li>
                    <Link>About Us</Link>
                </li>
                <li>
                    <Link>Contact</Link>
                </li>
            </ul>
        </div>
        <div className='navbar__button'>
            <button>
                <span className='blinking-text'>Call Emergency!</span>
            </button>
        </div>
      </div>
      <div className='app__hero'></div>
    </div>
  )
}

export default Header
