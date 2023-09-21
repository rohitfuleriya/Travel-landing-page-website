import React, { useState } from 'react';
import './signup.css';
import { useHistory } from 'react-router-dom'; // Import React Router's useHistory

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [signupSuccess, setSignupSuccess] = useState(false); // Track signup success
  const history = useHistory(); // Get the history object from React Router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful signup (replace this with your actual signup logic)
    setTimeout(() => {
      setSignupSuccess(true);
    }, 1000); // Simulating an API call with a delay
    
    // You would typically call your API here for user registration
    // If the signup is successful, setSignupSuccess(true)
  };

  // Redirect to the login page if signup was successful
  if (signupSuccess) {
    history.push('/login');
    return null; // Return null to prevent rendering the Signup component
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-wrapper">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
