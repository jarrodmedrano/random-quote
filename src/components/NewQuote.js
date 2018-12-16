import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {getNewQuote} from "../actions";


class NewQuote extends Component {
  render() {
    return (
        <button id="new-quote" onClick={this.props.getNewQuote}>
          New Quote
        </button>
    );
  }
}

export default connect(null, {getNewQuote})(NewQuote);