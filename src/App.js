import React, { Component } from 'react';
import QuoteBox from "./components/QuoteBox";
import './App.css';

class App extends Component {
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

export default App;
