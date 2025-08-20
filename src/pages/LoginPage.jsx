import React from 'react';
import '../styles/LoginPage.css';
import bgImage from '../assets/image/background-europe_alley.png';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left-frame">
        <div className="login-box">
          <h2>Login</h2>
          <input type="text" placeholder="ID" />
          <input type="password" placeholder="Password" />
          <button className="login-btn" onClick={()=>{
            // 로그인 로직 추가
            navigate('/home'); // 로그인 후 홈 페이지로 이동
          }}>Login</button>
          <button 
          className="register-btn"
          onClick={() => navigate('/register')}>
            Register
          </button>
        </div>
      </div>
      <div className="right-frame">
        <img
          src={bgImage}
          alt="background"
          className="right-image"
        />
      </div>
    </div>
  );
}

export default LoginPage;