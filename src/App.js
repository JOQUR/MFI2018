import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './components/homepages/HomePage';
import LoginPage from './components/homepages/LoginPage';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <ul>
          <li>
            <Link to="/home">HomePage</Link>
          </li>
          <li>
            <Link to="/login">About</Link>
          </li>
        </ul>

        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </div>
        </Router>
    );
  }
}

export default App;
