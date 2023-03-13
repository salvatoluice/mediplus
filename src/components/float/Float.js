import React from 'react'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './float.css'

const Float = () => {
  return (
    <div className='app__float'>
        <div className='float'>
          <BsFillPersonPlusFill />
          <h2>Qualified Doctors</h2>
          <p>Our qualified Doctors are dedicated to providing you with the best health care service at the nitch of time. We are responsible for your health once you are in our hands. We'll guarantee a safe and comfortable treatment.</p>
          <Link>Read More</Link>
        </div>
        <div className='float'>
          <BsFillPersonPlusFill />
          <h2>Qualified Doctors</h2>
          <p>Our qualified Doctors are dedicated to providing you with the best health care service at the nitch of time. We are responsible for your health once you are in our hands. We'll guarantee a safe and comfortable treatment.</p>
          <Link>Read More</Link>
        </div>
        <div className='float'>
          <BsFillPersonPlusFill />
          <h2>Qualified Doctors</h2>
          <p>Our qualified Doctors are dedicated to providing you with the best health care service at the nitch of time. We are responsible for your health once you are in our hands. We'll guarantee a safe and comfortable treatment.</p>
          <Link>Read More</Link>
        </div>
    </div>
  )
}

export default Float
