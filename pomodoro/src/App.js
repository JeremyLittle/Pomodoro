import React, { Component } from 'react';
import './App.css';
import Firebase from './Firebase.js';
import Stopwatch from './Stopwatch.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch/>
        {/* <Firebase /> */}
      </div>
    );
  }
}

export default App;
