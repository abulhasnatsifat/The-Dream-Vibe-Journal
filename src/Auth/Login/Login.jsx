import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add actual login logic here
    navigate('/profile');
  };

  return (
    <div className="welcome-container">
      <div className="glass-container">
     
        <p className="welcome-text"> Welcome Back</p>
        <p className="welcome-text">Sign in to continue your journey</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/updated">Forgot Password?</a>
          </div>
          <button type="submit" className="glass-button">Sign In</button>
          <button type="button" className="glass-button" style={{marginTop: '10px'}} onClick={() => window.location.href = '/signup'}>Have no account, Create one</button>
        </form>
      </div>
    </div>
  );
};

export default Login;