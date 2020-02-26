import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import reduxThunk from 'redux-thunk';

const createMiddleware = (history: History) => {
    return [reduxThunk, reduxPromiseMiddleware, routerMiddleware(history)];
};

export default createMiddleware;
