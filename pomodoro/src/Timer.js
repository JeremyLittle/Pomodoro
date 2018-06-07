import React, { Component } from "react";
import EnterTasks from "./EnterTasks";
import Stopwatch from "./Stopwatch";
import { Button } from 'antd';

export default class Timer extends Component {
  render() {
    return (
      <div>
        <EnterTasks />
        <Stopwatch />
        <Button type = "Danger" name= "Leaderboard"> 
          Leaderboard </Button>
      </div>
    );
  }
}
