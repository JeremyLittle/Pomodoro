import React, { Component } from "react";
import firebase from "./Firebase.js";

export default class CompletedTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTasks: []
    };
  }

  convertToDate = ms => {
    let dateString = new Date(ms);
    return dateString.toString();
  };

  componentDidMount() {
    const usersRef = firebase
      .database()
      .ref(firebase.auth().currentUser.uid + "/tasks");
    usersRef.on("value", snapshot => {
      let tasks = snapshot.val();
      let newState = [];
      for (let task in tasks) {
        let newTask = {
          name: task,
          time: tasks[task]
        };
        newState.push(newTask);
      }
      this.setState({
        userTasks: newState
      });
    });
  }

  render() {
    console.log("HELLOOO");
    return (
      <div>
        Tasks completed in the last 24 hours:
        <br />
        {this.state.userTasks.map(task => {
          if (Date.now() - task.time < 86400000) {
            return (
              <div>
                {task.name}
                <br />
                Time: {String(this.convertToDate(task.time)).substring(0, 21)}
                <div />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
