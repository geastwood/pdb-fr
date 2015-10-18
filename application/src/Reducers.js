import * as redux from 'redux';

import {
  FILTER_ARTICLE_BY_PUBLISHERS, RESET_PUBLISHER_FILTER,
  REQUEST_ARTICLES, RECEIVE_ARTICLES
} from './ActionTypes';

/**
 * Reducer
 */
export var articles = function(articles = {
  isFetching: false,
  items: []
}, action) {
  switch(action.type) {
    case FILTER_ARTICLE_BY_PUBLISHERS:
      return Object.assign({}, articles, {items: articles.items.map(article => {
        article.show = action.publishers.indexOf(article.publisher) !== -1;
        return article;
      })});
    case RESET_PUBLISHER_FILTER:
      return Object.assign({}, articles, {items: articles.items.map(article => {
        article.show = true;
        return article;
      })});
    case REQUEST_ARTICLES:
      return Object.assign({}, articles, {isFetching: true});
    case RECEIVE_ARTICLES:
      return Object.assign({}, articles, {isFetching: false, items: action.items});
    default:
      return articles
  }
};

export var publisherFilter = function(state, action) {
  if (action === RESET_PUBLISHER_FILTER) {
    return [];
  }
  return action.publishers || [];
};

export default redux.combineReducers({
  publisherFilter,
  articles
});
