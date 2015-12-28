import React from 'react';
import {Popover} from 'react-bootstrap';

export default React.createClass({
  render() {
    if (this.props.authorDetail) {
      console.log(this.props.authorDetail);
      return <div>{this.props.authorDetail.author.name} - ({this.props.authorDetail.paperLists.length})</div>
    } else {
      return <p>Loading...</p>
    }
  }
});
