import React from 'react'
import './doctors.css'

const Doctors = () => {
  return (
    <div className='app__doctors'>
        <div className='head'>
            <h3>Our Medical Team</h3>
        </div>
        <div className='head__text'>
            <h4>Practice Advice</h4>
            <h2>Our Doctors Specialize in You!</h2>
            <p>Trying all to practice neutrality while minding compassion and quality service is what they tirelessly work for.</p>
        </div>
        <div className='line' />
        <div className='app__collection'>
            <div className='doctors__management'>
                <img src='' alt='doc' />
            </div>
            <div className='dictors__neurology'></div>
            <div className='doctors__cardiology'></div>
            <div className='doctors__dental'></div>
            <div className='doctors__lab'></div>
            <div className='dictors__eye'></div>
            <div className='doctors__pulmonary'></div>
            <div className='doctors__xray'></div>
        </div>
    </div>
  )
}

export default Doctors
