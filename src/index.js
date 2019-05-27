import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './app/App';

import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css';
import './assets/scss/index.scss';

import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLink, faEye, faComment, faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faLink, faEye, faComment, faHeart, faUserCircle);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
