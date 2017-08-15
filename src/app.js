/**
 * Created by Muhamad Rizki on 15/8/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import ContainerHeader from './js/layouts/ContainerHeader';
import Home from './js/layouts/Home';
import About from './js/componens/About';
import Todo from './js/layouts/Todo';
import todoApp from './reducers';

let store = createStore(todoApp)

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={ContainerHeader}>
            </Route>
        </Router>
    </Provider>
    , app);

