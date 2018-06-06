import React, { Component } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "./firebase.js";
import { auth } from "./Auth.js";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  updateField(field, value) {
    this.setState({
      [field]: value
    });
  }

  handleClick = e => {
    e.preventDefault();
    auth(this.state.username, this.state.password);
  };

  render() {
    return (
      <div className="registerform">
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
