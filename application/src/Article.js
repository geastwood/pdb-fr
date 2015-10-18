import React from 'react';

export default React.createClass({
  render() {
    return (
      <span>
        {this.props.author}({this.props.year}, {this.props.publisher})
        <span onMouseOver={this.hover}>{this.props['abstract'].slice(0, 100) + '...'}</span>
      </span>
    )
  }
})
