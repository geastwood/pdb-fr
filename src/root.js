import React, {Component} from 'react';
import Dom from 'react-dom';
import About from './container/About/';
import ArticleView from './ArticleView';
import Search from './Search';
import App from './App';
import {Route, Link, IndexRoute, Router} from 'react-router';
import {Provider} from 'react-redux';
import reducers from './Reducers';
import {createHistory} from 'history';

import {compose, createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

var store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers);

Dom.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <Route path="/" component={App}>
        <IndexRoute component={Search}/>
        <Route path="article" component={ArticleView}>
          <Route path=":query" component={ArticleView}/>
        </Route>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));

