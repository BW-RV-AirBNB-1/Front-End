// React
import React, { useState } from 'react';
// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useHistory } from "react-router-dom";


export default function Register(props) {
  // Set initial state for credentials, fetch check and error
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    is_land_owner: false
  });

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  // Set credentials to it's state
  const handleChanges = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log("Credentials from Registration", credentials);
  };

  // POST credentials to local storage token
  const register = e => {
    e.preventDefault();
    setIsFetching(true);
    axiosWithAuth()
      .post('/api/register', credentials)
      .then(res => {
          console.log(res.data)
        localStorage.setItem("land_owner", JSON.stringify(res.data.user.is_land_owner))
        props.history.push('/dashboard');
        // localStorage.setItem("token")
      })
      .catch(err => console.log(err));
    console.log(credentials);
};

  return (
    <div>
    <div>
      <div>
        <div>
          <h2>Register:</h2>
          <form onSubmit={register}>
              <input
                type="username"
                name="username"
                placeholder="username"
                value={credentials.username}
                onChange={handleChanges}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChanges}
                required
              />
              <h4>are you a land owner?</h4>
              <input
                type="checkbox"
                name="is_land_owner"
                placeholder="are you a land owner?"
                checked={credentials.is_land_owner}
                onChange={handleChanges}
                />
            <button>Submit</button>
          </form>
          <p>{isFetching ? 'Loading...' : null}</p>
          <p>{error ? error : null}</p>
        </div>
      </div>
      </div>
    </div>
  );
};