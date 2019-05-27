import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import GiphiesWithModal from '../components/GiphiesWithModal';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router history={history}>
          <Route component={GiphiesWithModal} />
        </Router>
      </div>
    );
  }
}

export default App;
