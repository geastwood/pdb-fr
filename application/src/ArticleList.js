import React from 'react';
import {Component} from 'react';
import Article from './Article';
import Progressbar from './component/progressbar';

var ArticleList = class extends Component {
  getStyle(opts) {
    return {
      display: (opts.show === false) ? 'none' : 'list-item'
    };
  }
  render() {
    if (this.props.isFetching) {
      return (
        <Progressbar text='loading articles...'/>
      )
    }
    return (
      <ul>
        {this.props.articles.map((article, key) => {
          return (
            <li key={key} style={this.getStyle(article)}>
              <Article {...article}/>
            </li>
            )
        })}
      </ul>
    )
  }
};

export default ArticleList;
