import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState(''); // State for notification
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/auth/login', { // Using the DEV URL
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
      setNotification(data); // Set notification message
      setError(''); // Clear any previous error
      navigate('/'); // Redirect to the home page on successful login
    } catch (err) {
      setError(err.message); // Set error message if login fails
      setNotification(''); // Clear any previous notification
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
      {notification && <p className="notification-message" style={{ color: 'green' }}>{notification}</p>} {/* Display notification message */}
    </div>
  );
};

export default SignIn;
