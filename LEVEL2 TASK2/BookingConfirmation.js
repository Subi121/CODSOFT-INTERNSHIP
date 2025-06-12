import React, { useState } from 'react';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && resume) {
      setSubmitted(true);
      // Add booking logic here, such as sending data to an API
    } else {
      alert("Please fill out all fields");
    }
  };

  if (submitted) {
    return (
      <div className='page-center'>
      <div className="confirmation-message">
        <div class="mess">
        <h2>Congratulations! {name}</h2>
        <p>You have been applied to this job successfully.</p>
   
      </div>
      </div>
      </div>
    );
  }

  return (
    
    <div className="booking-page">
        <div class="man2">
      <h1>Confirm Your Application</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          <span>Your Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </label>
       <label>
  <span>Resume (PDF only)</span>
  <input
    type="file"
    accept=".pdf"
    onChange={(e) => setResume(e.target.files[0])}
    required
  />
</label>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default BookingConfirmation;

