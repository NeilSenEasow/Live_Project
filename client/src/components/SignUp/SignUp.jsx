import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log({ username: name, email, password }); // Log the data being sent

    try {
      const response = await fetch(`http://localhost:5001/auth/register`, { // Using the DEV URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: name, email, password }), // Send name, email, and password
      });

      if (!response.ok) {
        const errorMessage = await response.text(); // Get the error message from the response
        throw new Error(errorMessage); // Throw an error with the message
      }

      const data = await response.text();
      setSuccess(data); // Show success message
      setError(''); // Clear any previous error
      navigate('/sign-in'); // Redirect to the login page on successful registration
    } catch (err) {
      setError(err.message); // Set error message if registration fails
      setSuccess(''); // Clear any previous success message
    }
  };

  return (
    <div className="sign-up-container">
      <h1 className="sign-up-title">Sign Up</h1>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit" className="sign-up-button">Sign Up</button>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        {success && <p className="success-message">{success}</p>} {/* Display success message */}
      </form>
      <p>Already have an account? <Link to="/sign-in">Login here</Link></p> {/* Link to sign-in page */}
    </div>
  );
};

export default SignUp;
