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
import {Grid, Row, Col} from 'react-bootstrap';

var App = React.createClass({
  render() {
    return (
      <Grid>
        <Link to="/about">About</Link>
        <Row>
          <PublisherSummary
            isFetching={this.props.articles.isFetching}
            publishers={getPublishers(this.props.articles.items)}
            onPublisherClick={(publishers) => this.props.dispatch(filterArticleByPub(publishers))}
            onResetPublisherFilter={() => this.props.dispatch(resetPublisherFilter())}
          />
        </Row>
        <hr/>
        <Row>
          <Col md={4}>
            <YearSummary
              onSeriesClick={(year) => this.props.dispatch(filterArticleByYear(year))}
              years={getYears(this.props.articles.items)}
            />
          </Col>
          <Col md={8}>
            <AuthorSummary
              display={5}
              className="col-md-8"
              isFetching={this.props.articles.isFetching}
              authors={getAuthors(this.props.articles.items)}/>
          </Col>
        </Row>
        <hr/>
        <Row>
          <ArticleList
            isFetching={this.props.articles.isFetching}
            articles={this.props.articles.items}
          />
        </Row>
      </Grid>
    )
  }
});

export default connect(v => v)(App);
