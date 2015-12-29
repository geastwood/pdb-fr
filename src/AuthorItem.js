import React, {Component} from 'react';
import {OverlayTrigger, Button, Popover, Tooltip} from 'react-bootstrap';
import AuthorDetail from './AuthorDetail';
import {fetchAuthor} from './ActionTypes';

export default class AuthorItem extends Component {
  handleClick(ev, id) {
    this.props.dispatch(fetchAuthor(id));
  }

  render() {
    var tooltip = <AuthorDetail authorDetail={this.props.authorsFull[this.props.authorId]}/>;
    return (
      <OverlayTrigger
        onEnter={(ev) => this.handleClick(ev, this.props.authorId)}
        overlay={<Tooltip id={`author-detail-${this.props.authorId}`}>{tooltip}</Tooltip>}
      >
        <Button
          bsSize="xsmall"
          bsStyle="primary"
        >
          {this.props.authorName}
        </Button>
      </OverlayTrigger>
    )
  }
}
