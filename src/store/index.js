import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

const middleWare = process.env.NODE_ENV === 'development' ? applyMiddleware(ReduxThunk, logger) : applyMiddleware(ReduxThunk);

const store = createStore(reducers, middleWare);

export default store;
