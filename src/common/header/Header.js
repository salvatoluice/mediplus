import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  return (
    <div className='app__header'>
      <div className='app__navbar'>
        <div className='navbar__logo'>
            <Link to='/'>Medi<span>Plus</span></Link>
        </div>
        <div className='navbar__links'>
            <ul>
                <li>
                    <Link to='/doctors'>Doctors</Link>
                </li>
                <li>
                    <Link to='/login' style={{fontWeight: 'bold'}}>Login</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/emergency'>Emergency</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
        <div className="navbar__toggle" onClick={toggleNav}>
        <div className="navbar__toggle-icon"></div>
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
                <button className='btn2'><Link to='/appointment'>BOOK APPOINTMENT</Link></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
