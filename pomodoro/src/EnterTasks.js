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
      enter: [],
      isClicked: false,
      redirect: false,
      badSubmit: false
    };
  }

  componentDidMount() {}

  handleChange = e => {
    console.log(this.state.value);
    this.setState({ value: e.target.value });
  };

  handleClick = e => {
    if (this.state.value !== null) {
      let newStr = this.state.value;
      let newObj = { type: newStr, time: Date.now() };
      if (newObj.type != "") {
        let taskRef = firebase
          .database()
          .ref(firebase.auth().currentUser.uid)
          .child("tasks")
          .child(newObj.type)
          .set(newObj.time);
      }
    }
    this.setState({ isClicked: true, value: "" });
    console.log(this.state.value);
  };

  setisClickedFalse = () => {
    this.setState({ isClicked: false });
  };

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        return <Redirect to="/login" />;
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
        <form>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              placeholder="Enter text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <Button
              bsStyle="primary"
              bsSize="xsmall"
              onClick={this.handleClick}
            >
              Add task
            </Button>
          </FormGroup>
        </form>
        <Button onClick={this.logout}> Log out </Button>
      </div>
    );
  }
}
