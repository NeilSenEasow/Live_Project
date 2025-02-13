import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <h1 className="sign-in-title">Sign In</h1>
      <form className="sign-in-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
