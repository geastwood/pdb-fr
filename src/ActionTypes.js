import fetch from 'isomorphic-fetch';
import {prop} from 'huan';

// define actions and action creator
export const FILTER_ARTICLE_BY_PUBLISHERS = 'FILTER_ARTICLE_BY_PUBLISHERS';
export const RESET_PUBLISHER_FILTER = 'RESET_PUBLISHER_FILTER';
export const FILTER_ARTICLE_BY_YEAR = 'FILTER_ARTICLE_BY_YEAR';

export const REQUEST_AUTHOR = 'REQUEST_AUTHOR';
export const RECEIVE_AUTHOR = 'RECEIVE_AUTHOR';

export function filterArticleByPub(publishers) {
  return {type: FILTER_ARTICLE_BY_PUBLISHERS, publishers};
}
export function resetPublisherFilter() {
  return {type: RESET_PUBLISHER_FILTER};
}

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export function requestArticle() {
  return {
    type: REQUEST_ARTICLES
  };
}

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export function receiveArticles(json) {
  return {
    type: RECEIVE_ARTICLES,
    items: json,
    receivedTiem: Date.now()
  };
}

export function filterArticleByYear(year) {
  return {type: FILTER_ARTICLE_BY_YEAR, year}
}

export function fetchArticles() {
  return function(dispatch) {
    dispatch(requestArticle());
    fetch('/data/article', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json.data);
        dispatch(receiveArticles(json.data));
      });
  };
}

export function requestAuthor(authorId) {
  return {
    type: REQUEST_AUTHOR,
    authorId
  }
}

export function receiveAuthor(data, authorId) {
  return {
    type: RECEIVE_AUTHOR,
    data, authorId
  };
}

export function fetchAuthor(authorId) {
  return (dispatch, getState) => {
    var authors = getState().authors, authorData;
    dispatch(requestAuthor(authorId));
    if ((authorData = prop(authorId, authors)) && authorData.success !== false) {
      dispatch(receiveAuthor(authorData, authorId));
    } else {
      fetch(`/data/author/${authorId}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(json => dispatch(receiveAuthor(json, authorId)))
    }
  };
}
