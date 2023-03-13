import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='app__about'>
      <div className='about__images'>
        <img className='center' src='https://images.unsplash.com/photo-1666214278797-b2cc1b12be76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bWVkaWNhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
      </div>

      <div className='about__text'>
        <h3>ABOUT OUR MEDICAL</h3>
        <h1>We built hospitals to provide proper services to the ones in need of our medical attention</h1>
        <p>We are dedicated to heslping the sick, by giving out one of the best treatments currently in the world, with all the medical section covered. Our main aim is to guarantee you the best services, while making our best to source out the most qualified medical personell.</p>
        <div className='about__specials'>
            <div className='special_one'></div>
            <div className='special_two'></div>
        </div>
        <div className='about__buttons'>
            <button className='btn1'>VIEW MORE</button>
            <button className='btn2'>CONTACT US</button>
        </div>
      </div>
    </div>
  )
}

export default About
