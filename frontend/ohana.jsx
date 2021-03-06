import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import '../semantic/dist/semantic.min.css';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;  
    

    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;


    ReactDOM.render(<Root store={store} />, root);
});