import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TweetQuote extends Component {
  render() {
    return (
      <a href="twitter.com/intent/tweet">
        <button id="tweet-quote">
          Tweet Quote
        </button>
      </a>
    );
  }
}

TweetQuote.propTypes = {};

export default TweetQuote;
