import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

var style = {
  ul: {
    listStyle: 'none',
    padding: 0
  },
  li: {
    'float': 'left',
    margin: '2px'
  }
};
export default class AuthorSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: props.display || 10,
      showAll: false
    }
  }

  getAll() {
    return this.props.authors;
  }

  toggleShow() {
    this.setState({showAll: !this.state.showAll});
  }

  render() {
    var total = this.getAll(),
      limit = Math.min(this.state.display, Object.keys(total).length),
      controlBtn = (
        <li
          key="control"
          onClick={this.toggleShow.bind(this)}
        >
          <Button bsSize="xsmall" bsStyle="link" style={style.li}>
            {this.state.showAll ? 'Show less' : 'Show all'}
          </Button>
        </li>
      );

    if (this.state.showAll) {
      limit = Object.keys(total).length;
    }

    if (this.props.isFetching) {
      return <div className="row" style={{textAlign: 'center'}}>Loading author's summary...</div>;
    }
    return (
      <ul style={style.ul}>
        {Object.keys(total).slice(0, limit - 1).map((id, i) => {
          var name = total[id][0].name;
          return (
            <li key={id}
                style={style.li}>
              <Button bsSize="xsmall" bsStyle="primary"> {name} </Button>
            </li>
          )
        }).concat(this.state.display < Object.keys(total).length ? controlBtn : [])}
      </ul>
    )
  }
}
