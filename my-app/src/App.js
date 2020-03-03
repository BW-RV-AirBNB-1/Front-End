import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./components/Home.js";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import ListingPage from './components/ListingPage.js';
import LandingPage from "./components/LandingPage.js";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route>
          <ListingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
