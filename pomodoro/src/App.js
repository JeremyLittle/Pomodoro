import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Firebase from './Firebase.js';
// import Leaderboard from './Leaderboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Firebase />
        {/* <Leaderboard/> */}
      </div>
    );
  }
}

export default App;
