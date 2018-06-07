import React, { Component } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import firebase from "./Firebase.js";
import { login } from "./Auth.js";
import tomato from "./pomodoro.png";
import { logout } from "./Auth.js";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user: false
    };
  }

  componentDidMount() {
    this.checkUser();
  }

  updateField = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  signIn = () => {
    console.log(this.state);
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .catch(error => {
        alert("Login failed - " + error.message);
      });
    this.checkUser();
  };

  checkUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user !== null) {
        this.setState({
          user: true
        });
      } else {
        user: false;
      }
    });
  };

  render() {
    console.log(this.state);
    if (this.state.user) {
      return <Redirect to="/timer" />;
    }
    return (
      <div className="loginform">
        <img src={tomato} className="tomato" />
        <div className="loginbox">
          <h1 id="logintitle"> Log In </h1>
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
          <button id="loginbut" onClick={this.signIn}>
            {" "}
            Log In{" "}
          </button>
        </div>
        <div className="register">
          <p id="registerlink">Don't have an account? </p>
          <Link to="./Register">
            <p id="registerlink2"> Register </p>
          </Link>
        </div>
      </div>
    );
  }
}
