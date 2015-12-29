import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Grid>
        <Link to="/">Home</Link>
        <Row>about {this.props.params.id}</Row>
      </Grid>
    );
  }
}
