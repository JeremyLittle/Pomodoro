import React, { Component } from "react";
import EnterTasks from "./EnterTasks";
import Stopwatch from "./Stopwatch";

export default class Timer extends Component {
  render() {
    return (
      <div>
      <EnterTasks/>
      <Stopwatch/>
      </div>
    )
  }
}
