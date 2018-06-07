import React, { Component } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "./Firebase.js";
import { auth } from "./Auth.js";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      alert: false
    };
  }

  updateField = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  handleClick = e => {
    auth(this.state.username, this.state.password).then(user => {
      console.log(user);
      if (user) {
        console.log(this.state);
        console.log(user.user.uid);
        let userID = user.user.uid;
        let newPostKey = firebase
          .database()
          .ref("/users/" + userID)
          .child("info")
          .push().key;
        let updates = {};
        updates["/info/" + newPostKey] = this.state.username;
        this.setState({
          username: "",
          password: ""
        });
        return firebase
          .database()
          .ref("/users/" + userID)
          .update(updates);
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="registerform">
        {this.state.alertFail && this.alertFail()}
        <input
          name="username"
          id="usernameinput"
          value={this.state.username}
          onChange={e => this.updateField("username", e.target.value)}
        />
        <input
          name="password"
          id="passwordinput"
          value={this.state.password}
          onChange={e => this.updateField("password", e.target.value)}
        />
        <ButtonToolbar>
          <Link to="./Login">
            <button> Log In </button>
          </Link>
          <Link to="./Register">
            <button onClick={e => this.handleClick(e)}> Register </button>
          </Link>
        </ButtonToolbar>
      </div>
    );
  }
}
