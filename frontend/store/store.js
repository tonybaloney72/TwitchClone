import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const configureStore = (preloadedState = {}) => {

    let middleware = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middleware = [...middleware, logger];
    }
    return createStore(RootReducer, preloadedState, applyMiddleware(...middleware))
};

export default configureStore;