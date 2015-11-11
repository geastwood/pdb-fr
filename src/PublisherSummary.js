import React from 'react';
import PublisherItem from './PublisherItem';
import {format} from './helper/Publisher';
import Progressbar from './component/progressbar';
import bian from 'bian';

export default React.createClass({
  getPublishers() {
    return this.props.publishers.bian().uniqueBy('id').toValue();
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
