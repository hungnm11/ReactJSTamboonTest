import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Giphy from '../components/Giphy';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router history={history}>
          <Route component={Giphy} />
        </Router>
      </div>
    );
  }
}

export default App;
