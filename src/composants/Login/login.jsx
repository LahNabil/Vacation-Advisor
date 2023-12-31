import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIslogin] = useState(false);

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend for authentication
      const response = await fetch('http://localhost:8080/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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
        setIslogin(true);
        console.log('Authentication successful', email, password, data.token);
      } else {
        console.error('Authentication failed:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <div className='containerr'>
        <div>
          <h1 className='text-center my-3'>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='form-label'>Email:</label>
              <input
                type="text"
                value={email}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
                required
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
                className='form-control'
              />
            </div>
            <div>
              <button type="submit" className='btn btn-primary w-100'>Login</button>
            </div>
          </form>
          <p>
            Click here to Register <Link to="/register">Register</Link>
          </p>
        </div>
        {isLogin && <Navigate to="/" />}
    </div>
  );
 };

 export default Login;
