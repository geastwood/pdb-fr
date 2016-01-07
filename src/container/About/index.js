import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Grid>
        <Link to="/">Search</Link>
        <Row>
          <Col>
            <ul>
              <li>python -> data mining</li>
              <li>php + mysql -> data server</li>
              <li>node -> frontend proxy</li>
              <li>react + redux -> frontend</li>
              <li>Bootstrap -> UI</li>
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  }
}
