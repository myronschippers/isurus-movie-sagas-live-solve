import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import DetailPage from '../pages/DetailPage/DetailPage';
import EditPage from '../pages/EditPage/EditPage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <p>Empty Page</p>

          <Route exact path="/" component={HomePage} />
          <Route path="/detail" component={DetailPage} />
          <Route path="/edit" component={EditPage} />
        </div>
      </Router>
    );
  }
}

export default App;
