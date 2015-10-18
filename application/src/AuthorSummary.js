import React, {Component} from 'react';
import {group, entry} from './util';

export default class AuthorSummary extends Component {
  getAll() {
    return entry(group(this.props.authors), 'count')
  }
  render() {
    if (this.props.isFetching) {
      return <div className="row" style={{textAlign: 'center'}}>Loading author's summary...</div>;
    }
    return (
      <ul style={{listStyle: 'none'}}>
        {this.getAll().map((author, i) => {
          return (
            <li key={i}
              style={{float: 'left', margin: '2px'}}>
              <button
                className="btn btn-primary btn-xs"
                type="button"
                >
                {author.name}
              </button>
            </li>
          )
        })}
      </ul>
    )
  }
}
