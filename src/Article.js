import React from 'react';

export default React.createClass({
  render() {
    return (
      <span>
        {this.props.year}
        <span onMouseOver={this.hover}>{this.props['title']}</span>
      </span>
    )
  }
})
