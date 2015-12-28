import React, {Component} from 'react';
import {OverlayTrigger, Button, Popover} from 'react-bootstrap';
import AuthorDetail from './AuthorDetail';
import {fetchAuthor} from './ActionTypes';

export default class AuthorItem extends Component {
  handleClick(ev, id) {
    this.props.dispatch(fetchAuthor(id));
  }

  render() {
    var popOverContent = <AuthorDetail authorDetail={this.props.authorsFull[this.props.id]}/>;
    return (
      <OverlayTrigger
        trigger="click"
        overlay={<Popover>{popOverContent}</Popover>}
      >
        <Button
          bsSize="xsmall"
          bsStyle="primary"
          onClick={(ev) => this.handleClick(ev, this.props.id)}
        >
          {this.props.name}
        </Button>
      </OverlayTrigger>
    )
  }
}
