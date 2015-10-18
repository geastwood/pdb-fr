import fetch from 'isomorphic-fetch';

// define actions and action creator
export const FILTER_ARTICLE_BY_PUBLISHERS = 'FILTER_ARTICLE_BY_PUBLISHERS';
export const RESET_PUBLISHER_FILTER = 'RESET_PUBLISHER_FILTER';

export function filterArticleByPub(publishers) {
  return { type: FILTER_ARTICLE_BY_PUBLISHERS, publishers };
}
export function resetPublisherFilter() {
  return { type: RESET_PUBLISHER_FILTER };
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

export default function fetchArticles() {
  return function(dispatch) {
    dispatch(requestArticle());
    fetch('/article', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(receiveArticles(json.data));
    });
  };
}
