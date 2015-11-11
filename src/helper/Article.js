export var format = articleList => {
  return articleList.reduce((rst, article) => {
    if (rst[article.id]) {
      rst[article.id].items.push(article);
      rst[article.id].count++;
    } else {
      rst[article.id] = {
        id: article.id,
        count: 1,
        items: [article]
      };
    }
    return rst;
  }, {});
};