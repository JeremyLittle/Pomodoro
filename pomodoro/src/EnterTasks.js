import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
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
import CompletedTasks from "./CompletedTasks";
import firebase from "./Firebase.js";
import { logout } from "./Auth.js";

export default class EnterTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      tasks: [],
      enter: [],
      isClicked: false,
      redirect: false,
      badSubmit: false,
      isChanged: false
    };
  }

  componentDidMount() {}

  handleChange = e => {
    console.log(this.state.value);
    this.setState({ value: e.target.value, isChanged: true });
  };

  handleClick = e => {
    // this.state.isChanged
    if (this.state.value !== null) {
      let newTaskList = this.state.tasks;
      let newStr = this.state.value;
      let newObj = { type: newStr, time: Date.now() };
      newTaskList.push(newObj);
      this.setState({ tasks: newTaskList });
    }
    this.setState({ isClicked: true, value: "" });
    console.log(this.state.value);
    // if (this.state.value.length >= 0 || this.state.isChanged) {
    //   this.setState({ isClicked: true });
    // }
    // this.setState({ isChanged: false });
  };

  setisClickedFalse = () => {
    this.setState({ isClicked: false });
  };

  addEnterLine = () => {
    let newEnter = (
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>
            Add another task
          </Button>
        </FormGroup>
      </form>
    );
    this.setState({ enter: newEnter });
  };

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        return <Redirect to="/iEat" />;
      })
      .catch(function(error) {
        // An error happened.
      });
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.isClicked) {
      this.addEnterLine();
      this.setisClickedFalse();
    }
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    if (this.state.badSubmit) {
      alert("Please enter tasks first!");
    }
    return (
      <div>
        <CompletedTasks />
        <ControlLabel>Enter completed tasks below:</ControlLabel>
        <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>
          Add task
        </Button>
        {/* {this.state.enter.map(comp => comp)} */}
        {this.state.enter}
        <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleSubmit}>
          Submit tasks
        </Button>
        <Button onClick={this.logout}> Log out </Button>
      </div>
    );
  }
}
