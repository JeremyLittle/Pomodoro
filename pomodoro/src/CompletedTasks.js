import React, { Component } from "react";
import firebase from "./Firebase.js";

export default class CompletedTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTasks: []
    };
  }

  componentDidMount() {
    const usersRef = firebase
      .database()
      .ref("tasks/-LELVSdY7T2xYJSUPSrp/tasks");
    usersRef.on("value", snapshot => {
      let tasks = snapshot.val();
      let newState = [];
      for (let task in tasks) {
        let newTask = {
          name: tasks[task]
        };
        newState.push(newTask);
      }
      this.setState({
        userTasks: newState
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.userTasks.map(task => {
          return (
            <div>
              Name: {task.name} <br />
            </div>
          );
        })}
      </div>
    );
  }
}
