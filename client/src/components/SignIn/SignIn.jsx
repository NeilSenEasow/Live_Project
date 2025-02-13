import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://live-project-q2fh.onrender.com/auth/login', { // Directly using the URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.text();
      alert(data); // Show success message or handle it as needed
    } catch (err) {
      setError(err.message); // Set error message if login fails
    }
  };

  return (
    <div className="sign-in-container">
      <h1 className="sign-in-title">Sign In</h1>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </form>
    </div>
  );
};

export default SignIn;
