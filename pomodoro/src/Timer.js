import React, { Component } from "react";
import EnterTasks from "./EnterTasks";
import Stopwatch from "./Stopwatch";
import { Button } from "antd";
import CompletedTasks from "./CompletedTasks";
import Topbar from "./Topbar";
import "./Timer.css";

export default class Timer extends Component {
  render() {
    return (
      <div className="Timer">
        <Topbar />
        <br />
        <center>
          <Stopwatch />
        </center>
        <br />
        <EnterTasks />
        <br />
        <CompletedTasks />
      </div>
    );
  }
}
