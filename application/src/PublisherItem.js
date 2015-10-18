import React, {Component} from 'react';

export default class PublisherItem extends Component {
  render() {
    var style = {
      float:'left', margin: '5px'
    },
    publisher = this.props.publisher;

    return (
      <li
        style={style}
        onClick={() => this.props.onPublisherClick([publisher.name])}
        >
        <button
          className="btn btn-primary btn-sm"
          type="button"
          >
          {publisher.name} <span
            className="badge"
            >
            {publisher.value}
          </span>
        </button>
      </li>
    )
  }
}
