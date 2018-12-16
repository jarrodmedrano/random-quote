import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewQuote from "./NewQuote";
import TweetQuote from "./TweetQuote";

class QuoteBox extends Component {
  createQuote = () => {
    if(this.props.data) {
      return {__html: this.props.data.quote};
    }
  };

  createAuthor = () => {
    if(this.props.data) {
      return this.props.data.author;
    }
  };

  render() {
    return (
      <div id="quote-box">
        <p id="text" dangerouslySetInnerHTML={this.createQuote()}>
        </p>

        <p id="author">
          {this.createAuthor()}
        </p>
        <NewQuote />
        <TweetQuote />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state.quote
  }
};

export default connect(mapStateToProps)(QuoteBox);
