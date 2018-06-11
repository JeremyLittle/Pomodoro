import React, { Component } from "react";
import {
  Checkbox,
  Radio,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Alert
} from "react-bootstrap";
import firebase from "./Firebase.js";
import { logout } from "./Auth.js";

export default class EnterTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      enter: [],
      isClicked: false
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClick = e => {
    let newStr = this.state.value;
    let newObj = { type: newStr, time: Date.now() };
    if (newObj.type !== "") {
      let taskRef = firebase
        .database()
        .ref(firebase.auth().currentUser.uid)
        .child("tasks")
        .child(newObj.type)
        .set(newObj.time);
    }
    this.setState({ isClicked: true, value: "" });
  };

  setisClickedFalse = () => {
    this.setState({ isClicked: false });
  };

  render() {
    if (this.state.isClicked) {
      this.setisClickedFalse();
    }
    return (
      <div>
        <ControlLabel>Enter completed tasks below:</ControlLabel>
        <form>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              placeholder="Task"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <Button
              bsStyle="primary"
              bsSize="xsmall"
              onClick={this.handleClick}
            >
              Add
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
