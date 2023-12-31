import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import './Register.css'

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend for authentication
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      if (response.status === 403) {
        console.log('Authentication failed: Forbidden');
        return;
      }
      else if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log(localStorage.getItem("token"));
        console.log("data:" + data);
        setIsAuth(true);
        console.log('Registration successful', email, password, data.token);
        
      }else {
        console.error('Registration failed:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="containe">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Firstname:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Lastname:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastnameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login" className="a">Login</Link>
      </p>
      {isAuth && <Navigate to="/" />}
    </div>
  );
};

export default RegisterPage;
