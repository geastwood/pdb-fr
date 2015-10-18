import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './Reducers';
import App from './App'
import fetchArticles from './ActionTypes';

// create store with reducers
var storeWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
var store = storeWithMiddleware(reducers);

store.dispatch(fetchArticles());

// pass store to app
// * receive `dispatch` as prop
React.render(
  <Provider store={store}>
    {() => <App/>}
  </Provider>
    , document.getElementById('app'));
