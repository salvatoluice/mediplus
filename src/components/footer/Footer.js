import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { GrFacebookOption } from 'react-icons/gr'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='footer__socials'>
        <h3>Company</h3>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Pricing</Link>
        <Link>Portfolio</Link>
      </div>
      <div className='footer__socials'>
        <h3>Products</h3>
        <Link>X-Ray</Link>
        <Link>Scan</Link>
        <Link>Operation</Link>
        <Link>Checkup</Link>
      </div>
      <div className='footer__socials'>
        <h3>Resources</h3>
        <Link>Privacy Policy</Link>
        <Link>Terms & Conditions</Link>
        <Link>Get Support</Link>
        <Link>Make a Suggestion</Link>
      </div>
      <div className='footer__socials'>
        <h3>Social Links</h3>
        <p>A wonderful serenity has <br /> taken posession of my entire soul.</p>
        <div className='footer_links'>
          <GrFacebookOption />
          <AiFillLinkedin />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
    </div>
  )
}

export default Footer
