import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log(`Reason: ${reason}`);
  };

  return (
    <div className='appointment-form-container'>
      <Link to='/' style={{color: '#02D6A3'}}>MediPlus</Link>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='date'>Date:</label>
          <input
            type='date'
            id='date'
            name='date'
            required
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='time'>Time:</label>
          <input
            type='time'
            id='time'
            name='time'
            required
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='reason'>Reason for Appointment:</label>
          <textarea
            id='reason'
            name='reason'
            required
            value={reason}
            onChange={(event) => setReason(event.target.value)}
          ></textarea>
        </div>

        <div className='form-group'>
          <button type='submit'>Book Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
