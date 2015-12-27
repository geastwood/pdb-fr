import React from 'react';
import ArticleList from './ArticleList';
import PublisherSummary from './PublisherSummary';
import AuthorSummary from './AuthorSummary';
import {Route, Link} from 'react-router';
import YearSummary from './YearSummary';
import {
  filterArticleByPub,
  filterArticleByYear,
  resetPublisherFilter
} from './ActionTypes'
import {connect} from 'react-redux';
import {getAuthors, getPublishers, getYears} from './helper';

var App = React.createClass({
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <div className="row">
          <PublisherSummary
            isFetching={this.props.articles.isFetching}
            publishers={getPublishers(this.props.articles.items)}
            onPublisherClick={(publishers) => this.props.dispatch(filterArticleByPub(publishers))}
            onResetPublisherFilter={() => this.props.dispatch(resetPublisherFilter())}
          />
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-4">
            <YearSummary
              onSeriesClick={(year) => this.props.dispatch(filterArticleByYear(year))}
              years={getYears(this.props.articles.items)}
            />
          </div>
          <div className="col-md-8">
            <AuthorSummary
              display={5}
              className="col-md-8"
              isFetching={this.props.articles.isFetching}
              authors={getAuthors(this.props.articles.items)}/>
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
