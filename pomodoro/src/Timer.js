import React, { Component } from "react";
import EnterTasks from "./EnterTasks";
import Stopwatch from "./Stopwatch";
import CompletedTasks from "./CompletedTasks";
import "./Timer.css";

export default class Timer extends Component {
  render() {
    return (
      <div className="Timer">
        <Stopwatch />
        <br />
        <EnterTasks />
        <br />
        <CompletedTasks />
      </div>
    );
  }
}
