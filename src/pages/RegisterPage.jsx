import React from 'react';
import '../styles/RegisterPage.css';
import bgImage from '../assets/image/background-sandy_beach.png';

function RegisterPage() {
  return (
    <div className="register-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="register-box">
        <h2>Welcome!</h2>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="email" placeholder="E-mail" />
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
}

export default RegisterPage;