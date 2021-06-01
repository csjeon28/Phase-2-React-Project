import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Trivia from './Trivia';
import Comments from './Comments';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className='app-navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/trivia'>Trivia</Link></li>
            <li><Link to='/comments'>Comments</Link></li>
          </ul>
        </div>
        <Switch>
          <div className="app-navbar-content">
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/trivia' component={Trivia} />
            <Route path='/comments' component={Comments} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
