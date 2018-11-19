import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewQuote from "./NewQuote";
import TweetQuote from "./TweetQuote";

class QuoteBox extends Component {
  createMarkup = () => {
    return {__html: this.props.quote.content};
  };

  render() {
    return (
      <div id="quote-box">
        <p id="text" dangerouslySetInnerHTML={this.createMarkup()}>
        </p>
        <p id="author">
          {this.props.quote.title}
        </p>
        <NewQuote />
        <TweetQuote />
      </div>
    );
  }
}

QuoteBox.propTypes = {};

export default QuoteBox;
