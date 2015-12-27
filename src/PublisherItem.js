import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class PublisherItem extends Component {
  render() {
    var style = {
      float:'left', margin: '5px'
    },
    publisher = this.props.publisher;

    return (
      <li
        style={style}
        onClick={() => this.props.onPublisherClick([publisher])}
        >
        <Button bsStyle="primary" bsSize="small">
          {publisher.name} <span
            className="badge"
            >
            {publisher.value}
          </span>
        </Button>
      </li>
    )
  }
}
