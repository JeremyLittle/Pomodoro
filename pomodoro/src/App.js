<<<<<<< HEAD
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./Timer";
=======
import React, { Component } from 'react';
import './App.css';
import Stopwatch from './Stopwatch.js';
import Timer from "./Timer.js";

>>>>>>> 011a4a34951f8f4d15fcc4cf9529c4dd870b3d91

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Pomodoro stuff goes here.</p>
<<<<<<< HEAD
=======
        <Stopwatch/>
        <Timer />

>>>>>>> 011a4a34951f8f4d15fcc4cf9529c4dd870b3d91
      </div>
    );
  }
}

export default App;
