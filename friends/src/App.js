import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/> {" "}
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
