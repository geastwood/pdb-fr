import React from 'react';
import PublisherItem from './PublisherItem';
import Progressbar from './component/progressbar';
import {uniqByKey} from 'huan';

var getPublishers = (publishers) => {
  return uniqByKey('id', publishers);
};

export default React.createClass({
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
          {getPublishers(this.props.publishers).map((publisher) => {
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
