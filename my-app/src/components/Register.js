// React
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Styling
import { Button, Form, FormGroup, Input } from 'reactstrap';
//Import Particles-JS
import Particles from 'react-particles-js';
import "./Register.css";


export default function Register() {
  // Set initial state for credentials, fetch check and error
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  // Set credentials to it's state
  const handleChanges = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log("Credentials from Registration", credentials);
  };

  // POST credentials to local storage token
  let history = useHistory();
  const register = e => {
    e.preventDefault();
    setIsFetching(true);
    axiosWithAuth()
      .post('/api/register', credentials)
      .then(res => {
        console.log(res.data);
        history.push('/login');
      })
      .catch(err => console.log(err));
  };


  return (
    <div>
    <div>
      <div>
        <div>
          <h2>Register:</h2>
          <form onSubmit={register}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={credentials.email}
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