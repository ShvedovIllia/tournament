import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux-seamless-immutable';

const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
    });

export default createRootReducer;
