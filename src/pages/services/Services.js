import React from 'react'
import './services.css'
import { TbBrain } from 'react-icons/tb'

const Services = () => {
  return (
    <div className='app__services'>
        <div className='head services'>
            <h3>What we do</h3>
        </div>
        <div className='head__text'>
            <h2 style={{color: '#02D6A3'}}>Departments</h2>
            <h2>We gat you covered in every section</h2>
            <p>Trying all to practice neutrality while minding compassion and quality service is what they tirelessly work for.</p>
        </div>
        <div className='line' />

        <div className='app__container'>
            <div className='single__service'>
                <TbBrain />
                <h2>Neurology</h2>
                <p>Lorem ipsum dolor sit amet. We offer neurology at our Nairobi main Hospital. Pay us a visit for more information</p>
            </div>
        </div>
    </div>
  )
}

export default Services
