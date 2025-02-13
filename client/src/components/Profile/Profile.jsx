import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user data from the MongoDB cluster
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5001/auth/user', { // Using the DEV URL
          method: 'GET',
          credentials: 'include', // Include credentials for session management
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUser(data); // Set user data
      } catch (err) {
        setError(err.message); // Set error message if fetching fails
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
