import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';

import middleware from './middleware';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const rootReducers = rootReducer(history);
const middlewares = middleware(history);

const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;
