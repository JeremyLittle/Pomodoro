import React, { Component } from "react";
import EnterTasks from "./EnterTasks.js";
import CompletedTasks from "./CompletedTasks.js";

export default class Timer extends Component {
  render() {
    return (
      <div>
        <EnterTasks />
        <br />
        <CompletedTasks />
      </div>
    );
  }
}
