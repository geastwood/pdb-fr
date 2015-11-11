import React, {Component} from 'react';
import {group, entry} from './util';

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
      limit = Math.min(this.state.display, total.length),
        controlBtn = (
          <li
            key="control"
            onClick={this.toggleShow.bind(this)}
            >
            <button className="btn btn-xs" style={style.li}>
              {this.state.showAll ? 'Show less' : 'Show all'}
            </button>
          </li>
        );

      if (this.state.showAll) {
        limit = total.length;
      }

    if (this.props.isFetching) {
      return <div className="row" style={{textAlign: 'center'}}>Loading author's summary...</div>;
    }
    return (
      <ul style={style.ul}>
        {total.slice(0, limit - 1).map((author, i) => {
          return (
            <li key={author.id}
              style={style.li}>
              <button
                className="btn btn-primary btn-xs"
                type="button"
                >
                {author.name}
              </button>
            </li>
          )
        }).concat(this.state.display < total.length ? controlBtn : [])}
      </ul>
    )
  }
}
