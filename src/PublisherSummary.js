import React from 'react';
import PublisherItem from './PublisherItem';
import {group, entry} from './util';
import Progressbar from './component/progressbar';

export default React.createClass({
  getPublishers() {
    return entry(group(this.props.publishers), 'count');
  },
  render() {
    if (this.props.isFetching) {
      return <Progressbar text='loading publishers...'/>
    }
    var button = (
      <li key={'publisher-filter-reset-btn'}
        style={{float: 'left', margin: '5px'}}
        onClick={this.props.onResetPublisherFilter}
        >
        <button className="btn btn-sm" type="button">
          Reset
        </button>
      </li>);
      return (
        <ul
          style={{listStyle: 'none', margin: 0}}
          className="publisher-summary">
          {this.getPublishers().map((publisher, key) => {
            return (
              <PublisherItem
                key={key}
                publisher={publisher}
                onPublisherClick={this.props.onPublisherClick}
              />
              )
          }).concat(button)}
        </ul>
      )
  }
});