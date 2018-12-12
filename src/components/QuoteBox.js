import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewQuote from "./NewQuote";
import TweetQuote from "./TweetQuote";
import {getNewQuote} from "../actions";

class QuoteBox extends Component {
  createQuote = () => {
    if(this.props.data) {
      return {__html: this.props.data.content};
    }
  };

  createAuthor = () => {
    if(this.props.data) {
      return this.props.data.title;
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
    data: state[0]
  }
};

export default connect(mapStateToProps)(QuoteBox);
