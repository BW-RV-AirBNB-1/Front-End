import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



export default function Login () {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState([])

  // Set credentials to it's state
  const handleChanges = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log("NEW credentials from Login", credentials);
  };

  // POST credentials to local storage
  const login = e => {
    e.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post('/users/api/login', credentials)
      .then(res => {
        localStorage.setItem('email', res.data.user.email);
        localStorage.setItem('password', credentials.password);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={credentials.email} 
                onChange={handleChanges} 
                required />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={credentials.password} 
                onChange={handleChanges} 
                required />
        <button>Log in</button>
        </form>
        <p>{isFetching ? 'Loading...' : null}</p>
        <p>{error ? error : null}</p>
    </div>
  );
};