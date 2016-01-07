import React from 'react';
import {Button, Input, Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

var Search = React.createClass({
  handleSubmit(ev) {
    this.props.history.pushState(null, `/article/${this._searchInput.getValue()}`);
    ev.preventDefault();
  },
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} mdPush={2}>
            <form onSubmit={this.handleSubmit} style={{paddingTop: '30%'}}>
              <Input ref={input => this._searchInput = input} type="text" bsSize="large" placeholder="Type to search"/>
            </form>
          </Col>
        </Row>
      </Grid>

    );
  }
});

export default Search;
