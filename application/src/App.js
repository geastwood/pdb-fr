import React from 'react';
import ArticleList from './ArticleList';
import PublisherSummary from './PublisherSummary';
import AuthorSummary from './AuthorSummary';
import YearSummary from './YearSummary';
import {filterArticleByPub, resetPublisherFilter} from './ActionTypes'
import {connect} from 'react-redux';

var App = React.createClass({
  getPublishers(articles) {
    return articles.filter(article => article.show !== false).map(article => article.publisher);
  },
  getYears(articles) {
    return articles.filter(article => article.show !== false).map(v => v.year).map(Number);
  },
  getAuhtors(articles) {
    return articles
      .filter(article => article.show !== false)
      .reduce((rst, article) => {
        return rst.concat(article.author.split(';'))
      }, []).sort();
  },
  render() {
    return (
      <div>
        <div className="row">
          <PublisherSummary
            isFetching={this.props.articles.isFetching}
            publishers={this.getPublishers(this.props.articles.items)}
            onPublisherClick={(publishers) => this.props.dispatch(filterArticleByPub(publishers))}
            onResetPublisherFilter={() => this.props.dispatch(resetPublisherFilter())}
          />
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-4">
            <YearSummary years={this.getYears(this.props.articles.items)}/>
          </div>
          <div className="col-md-8">
            <AuthorSummary
              className="col-md-8"
              isFetching={this.props.articles.isFetching}
              authors={this.getAuhtors(this.props.articles.items)}/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <ArticleList
            isFetching={this.props.articles.isFetching}
            articles={this.props.articles.items}
          />
        </div>
      </div>
    )
  }
});

export default connect(v => v)(App);
