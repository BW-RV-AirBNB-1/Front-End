import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useHistory } from "react-router-dom";



export default function Login () {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState([])

  // Set credentials to it's state
  const handleChanges = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log("NEW credentials from Login", credentials);
  };

  const history = useHistory();

  // POST credentials to local storage
  const login = e => {
    e.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
          console.log(res.data)
          history.push("/Home")
        // localStorage.setItem('username', credentials.username);
      })
      .catch(err => console.log(err));
    console.log(credentials)
};


  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <input 
                type="username" 
                name="username" 
                placeholder="username" 
                value={credentials.username} 
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