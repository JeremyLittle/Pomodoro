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
    auth(this.state.username, this.state.password)
      .then(user => {
        console.log(user);
        if (user) {
          console.log(this.state);
          console.log(user.user.uid);
          let userID = user.user.uid;
          let obj = {
            email: this.state.username,
            tasks: "",
            cycles: "",
            age: "",
            gender: "",
            birthday: "",
            password: this.state.password
          };
          let newPostKey = firebase
            .database()
            .ref(userID)
            .set(obj);
        }
      })
      .catch(error => {
        alert("Registration error: " + error.message);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="registerform">
        <div className="registerbox">
          <h1 id="registertitle"> Register </h1>
          {this.state.alert && this.alertFail()}
          Email:
          <input
            name="username"
            id="usernameinput"
            value={this.state.username}
            onChange={e => this.updateField("username", e.target.value)}
          />
          <br />
          Password:
          <input
            name="password"
            id="passwordinput"
            value={this.state.password}
            onChange={e => this.updateField("password", e.target.value)}
          />
          <br />
          <button id="registerbut" onClick={e => this.handleClick(e)}>
            {" "}
            Register{" "}
          </button>
        </div>
        <Link to="./Login">
          <button> Log In </button>
        </Link>
      </div>
    );
  }
}
