import React from 'react'
import './tips.css'

const Tips = () => {
  return (
    <div className='app__tips'>
      <h4>AWESOME TIPS</h4>
      <div className='heading'>
        <h2>Health Tips</h2>
        <div className='tips__text'>
            <p>We are dedicated to proving you with the best healthcare services. We'll give you proffesional doctors and nurses for your wellbeing. The team works 24hrs a day to ensure you're covered always.</p>
            <button className='btn2'>VIEW MORE</button>
        </div>
      </div>
      <div className='tips__images'>
        <img className='tip-images' src='https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='none' />
        <img className='tip-images' src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='none' />
        <img className='tip-images' src='https://images.unsplash.com/photo-1666214280465-a40313304801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='none' />
        <img className='tip-images' src='https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MjJ8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='none' />
        <img className='tip-images' src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='none' />
        <img className='tip-images' src='https://images.unsplash.com/photo-1666214278797-b2cc1b12be76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='none' />
      </div>
    </div>
  )
}

export default Tips
