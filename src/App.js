import React, { Component } from 'react';
import QuoteBox from "./components/QuoteBox";
import './App.css';
import * as axios from "axios";
import { connect } from 'react-redux';
import * as actions from './actions';
// import {getNewQuote} from "./actions";

// const url = "http://quotesondesign.com/wp-json/";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     serverResponse: []
  //   };
  // }
  //
  // async getData() {
  //   const res = await axios(`${url}posts?filter[orderby]=rand&filter[posts_per_page]=1`);
  //   const data = await res.data;
  //   this.setState({ serverResponse: data[0] });
  // }

  componentDidMount() {
    // this.getData().catch(alert);
    //this.props.getNewQuote();
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
