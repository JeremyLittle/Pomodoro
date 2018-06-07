import React, { Component } from 'react';
import './App.css';
import Stopwatch from './Stopwatch.js';
import Timer from "./Timer.js";


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Pomodoro stuff goes here.</p>
        <Stopwatch />
        <Timer />

      </div>
    );
  }
}

export default App;
