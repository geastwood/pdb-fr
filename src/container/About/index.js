import React, {Component} from 'react';
import {Link} from 'react-router';

export default class About extends Component {
  componentWillMount() {
    debugger;
  }
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <div>about {this.props.params.id}</div>
      </div>
    );
  }
}
