import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class TweetQuote extends Component {

  createQuote = () => {
    if(this.props.data) {
      return `https://www.twitter.com/intent/tweet?text=${this.props.data.quote} - ${this.props.data.author}`;
    }
  };

  render() {
    return (
      <a href={this.createQuote()} target="_blank">
        <button id="tweet-quote">
          Tweet Quote
        </button>
      </a>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state.quote
  }
};

export default connect(mapStateToProps)(TweetQuote);
