import React from 'react'
import './team.css'

const Team = () => {
  return (
    <div className='app__team'>
      <h3>ABOUT OUR MEDICAL</h3>
      <h2>Our Specialist Doctor Team</h2>
      <p>This is a team working endlessly every night and day long to ensure you get the best medical service. Here is the team that makes all possible.</p>
      <div className='team__images'>
        <div className='image__detail'>
            <img className='card-image' src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='doctor' />
            <div className='card-contnent'>
                <p className='card-name'>Ayande Vova</p>
                <p className='card-rank'>Founder</p>
            </div>
        </div>
        <div className='image__detail'>
            <img className='card-image' src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='doctor' />
            <div className='card-contnent'>
                <p className='card-name'>Ayande Vova</p>
                <p className='card-rank'>Founder</p>
            </div>
        </div>
        <div className='image__detail'>
            <img className='card-image' src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='doctor' />
            <div className='card-contnent'>
                <p className='card-name'>Ayande Vova</p>
                <p className='card-rank'>Founder</p>
            </div>
        </div>
        <div className='image__detail'>
            <img className='card-image' src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='doctor' />
            <div className='card-contnent'>
                <p className='card-name'>Ayande Vova</p>
                <p className='card-rank'>Founder</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
