import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ipeedy</h2>
        </div>
        <p className="App-intro">
          An ecommerce application created for greatness 🐳
        </p>
      </div>
    );
  }
}

export default App;
