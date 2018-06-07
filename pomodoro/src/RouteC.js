import React, { Component } from "react";
import "./App.css";
import App from "./App.js";
import Login from "./Login.js";
import Register from "./Register.js";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import EnterTasks from "./EnterTasks.js";
import firebase from './Firebase.js';
import Profile from './Profile.js';
import ImageDrop from "./ImageDrop";
import Timer from "./Timer.js";

export default class RouteC extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect to="/login" />
          <Route path="/timer" component={Timer} />
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/image" component={ImageDrop} />

        </div>
      </BrowserRouter>
    );
  }
}
