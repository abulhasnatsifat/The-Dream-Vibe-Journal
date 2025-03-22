import React from 'react';
import './Sign_Up.css';
import { useNavigate } from 'react-router-dom';

const Sign_Up = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add your signup logic
    // After successful signup:
    navigate('/login');
  };

  return (
    <div className="welcome-container">
      <div className="glass-container">
        <p className="welcome-text">Welcome to Dream Vibe Journal</p>
        <p className="welcome-text">Create your account to start journaling</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/updated">Forgot Password?</a>
          </div>
          <button type="submit" className="glass-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Sign_Up;
        