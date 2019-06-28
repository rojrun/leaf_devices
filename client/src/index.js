import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import rootReducer from './reducers';
import App from './components/app';

import types from './actions/types';
import {checkAuth} from './actions';

const store = createStore(rootReducer, {}, applyMiddleware(reduxPromise));

store.dispatch({
    type: types.SIGN_IN
});

checkAuth(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
