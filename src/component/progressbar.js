import React, {Component} from 'react';

export default class Progressbar extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>{this.props.text}</div>
    )
  }
}

Progressbar.defaultProps = {
  text: 'loading...'
};

Progressbar.propTypes = {
  text: React.PropTypes.string
};
