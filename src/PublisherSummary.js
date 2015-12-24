import React from 'react';
import PublisherItem from './PublisherItem';
import Progressbar from './component/progressbar';
import {uniqByKey} from 'huan';

export default React.createClass({
  getPublishers() {
    return uniqByKey('id', this.props.publishers);
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
          {this.getPublishers().map((publisher) => {
            return (
              <PublisherItem
                key={publisher.id}
                publisher={publisher}
                onPublisherClick={this.props.onPublisherClick}
              />
              )
          }).concat(button)}
        </ul>
      )
  }
});
