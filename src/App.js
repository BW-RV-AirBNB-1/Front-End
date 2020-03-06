import React from 'react';
import './App.css'

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Dashboard from "./components/Dashboard.js";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login.js";
import Register from "./components/Register.js"
import ListingForm from './components/ListingForm';

function App() {
  return (
    <Router>
    <Link to="/login">Link to Login</Link>    
    <Link to="/register">Link to Register</Link>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/login" render={props => <Login {...props}/>}/>
        <Route path="/register" render={props => <Register {...props}/>}/>
        <Route exact path="/">
         <div><h1>5th Wheel</h1></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
