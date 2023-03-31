import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import './Signup.css';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>
  
      <h2>Signup</h2>
      <div className="signup-form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-input"
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="form-input"
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="form-input"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default Signup;
