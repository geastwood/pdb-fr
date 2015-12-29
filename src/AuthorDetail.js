import React from 'react';
import {Popover} from 'react-bootstrap';

export default React.createClass({
  render() {
    var authorDetail = this.props.authorDetail;

    if (authorDetail) {
      if (authorDetail.success === false) {
        return <div>loading error</div>
      }
      return <div>{this.props.authorDetail.author.name} has {this.props.authorDetail.paperLists.length} paper(s)</div>;
    } else {
      return <div>Loading...</div>
    }
  }
});
