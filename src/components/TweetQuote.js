import React, {Component} from 'react';

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

export default TweetQuote;
