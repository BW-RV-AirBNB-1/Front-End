import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Dashboard from "./components/Dashboard.js";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import ListingPage from './components/ListingPage.js';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
         <div><h1>this is test</h1></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
