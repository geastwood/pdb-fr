import React, {Component} from 'react';
import Dom from 'react-dom';
import About from './container/About/';
import App from './App';
import {Route, Link} from 'react-router';
import {reduxReactRouter, ReduxRouter, routerStateReducer} from 'redux-router';
import {Provider} from 'react-redux';
import reducers from './Reducers';
import {createHistory} from 'history';

import {compose, createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

var store = compose(
    applyMiddleware(thunkMiddleware),
    reduxReactRouter({
        createHistory
    })
)(createStore)(reducers);

Dom.render(
    <Provider store={store}>
        <ReduxRouter>
            <Route path="/" component={App}/>
            <Route path="about" component={About}>
              <Route path=":id" component={About}/>
            </Route>
        </ReduxRouter>
    </Provider>
    , document.getElementById('app'));

