import React, { Component } from "react";
import firebase from "./Firebase.js";
import { Link, Redirect } from "react-router-dom";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ redirect: true });
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return <div />;
  }
}
