import React, { Component } from "react";
import EnterTasks from "./EnterTasks";
import Stopwatch from "./Stopwatch";
import CompletedTasks from "./CompletedTasks";

export default class Timer extends Component {
  render() {
    return (
      <div>
        <Stopwatch />
        <EnterTasks />
        <CompletedTasks />
      </div>
    );
  }
}
