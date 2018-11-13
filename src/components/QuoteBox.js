import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewQuote from "./NewQuote";
import TweetQuote from "./TweetQuote";

class QuoteBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'What',
      author: 'Jarrod'
    }
  }

  render() {
    return (
      <div id="quote-box">
        <p id="text">
          {this.state.text}
        </p>
        <p id="author">
          {this.state.author}
        </p>
        <NewQuote />
        <TweetQuote />
      </div>
    );
  }
}

QuoteBox.propTypes = {};

export default QuoteBox;
