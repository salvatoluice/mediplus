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
                <span className='blinking-text'>Call fo Emergency!</span>
            </button>
        </div>
      </div>
      <div className='app__hero'>
        <div className='slanted__content'>
            <h5>WE GIVE YOU THE BEST</h5>
            <h3>Making Health</h3>
            <h3><span>Care Better together</span></h3>
            <p>We are dedicated to providing the best healthcare to you. Lorem ipsum dolor sit amet.</p>
            <div className='hero__buttons'>
                <button className='btn1'>HOW CAN WE HELP</button>
                <button className='btn2'>BOOK APPOINTMENT</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
