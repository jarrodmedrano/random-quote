import React, { Component } from 'react';
import QuoteBox from "./components/QuoteBox";
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getNewQuote();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Random Quote Generator
        </header>
        <QuoteBox />
      </div>
    );
  }
}



export default connect(null, actions)(App);
