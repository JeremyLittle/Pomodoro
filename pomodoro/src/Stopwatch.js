import React, { Component } from "react";
import ReactCountdownClock from "react-countdown-clock"; // https://www.npmjs.com/package/react-countdown-clocks
import "./Stopwatch.css";
import "antd/dist/antd.css";
import firebase from "./Firebase.js";

const breakSeconds = 5 * 60; //Break timer
const workSeconds = 25 * 60; // Work timer

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
      clockType: "Work",
      seconds: workSeconds,
      cycles: 0,
      startorStop: "Start"
    };
  }
  pauseClick = e => {
    //Flip state on pause button
    this.setState({ isPaused: !this.state.isPaused });
    if (this.state.isPaused === true) {
      // Check for which button string to display
      this.setState({ startorStop: "Stop" });
    } else {
      this.setState({ startorStop: "Start" });
    }
  };
  updateFireCycles = () => {
    // For pushing cycle counter to user cycle tracker on firebase
    let cyclesRef = firebase
      .database()
      .ref(firebase.auth().currentUser.uid)
      .child("cycles")
      .set(this.state.cycles);
  };
  switchTime = e => {
    // Function for switching the timer type
    if (this.state.clockType === "Work") {
      this.setState({
        isPaused: true,
        seconds: breakSeconds,
        clockType: "Break",
        startorStop: "Start"
      });
    } else {
      let newCycles = this.state.cycles + 1;
      this.setState({
        isPaused: true,
        seconds: workSeconds,
        cycles: newCycles,
        clockType: "Work",
        startorStop: "Start"
      });
      this.updateFireCycles();
    }
  };
  componentDidMount() {
    const userRef = firebase
      .database()
      .ref(firebase.auth().currentUser.uid + "/cycles");
    userRef.on("value", snapshot => {
      this.setState({
        cycles: snapshot.val()
      });
    });
  }
  render() {
    return (
      <div>
      <br/>
      <div className="center">
        <h4 className="text"> {this.state.clockType}!</h4>

        <div className="Clock-center">
          <ReactCountdownClock
            seconds={this.state.seconds} //Imported react component
            color="#d16429"
            font="Open Sans Condensed"
            weight={30}
            size={300}
            onComplete={e => this.switchTime(e)} // Complete callback
            paused={this.state.isPaused} // Pause timer
          />
        </div>
        <br />
        <button onClick={e => this.pauseClick(e)} id="Work-button">
          {" "}
          {this.state.startorStop}{" "}
        </button>
      </div>
      </div>
    );
  }
}
