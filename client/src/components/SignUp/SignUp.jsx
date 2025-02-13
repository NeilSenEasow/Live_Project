import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <h1 className="sign-up-title">Sign Up</h1>
      <form className="sign-up-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="sign-up-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
