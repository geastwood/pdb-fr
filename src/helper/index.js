import {pluck, compose, curry, groupBy, map, prop} from 'huan';

var filter = curry((f, xs) => xs.filter(f));
var flatten = xs => xs.reduce((rst, v) => rst.concat(v), []);
var sort = xs => xs.sort();
var visibleArticle = filter(article => article.show !== false);

export var getAuthors = compose(groupBy(prop('id')), sort, flatten, pluck('authors'), visibleArticle);

export var getPublishers = compose(map(prop('journal')), visibleArticle);

export var getYears = compose(map(Number), map(prop('year')), visibleArticle);
