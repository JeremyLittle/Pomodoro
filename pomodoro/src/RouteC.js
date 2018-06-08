import React, { Component } from "react";
import "./App.css";
import App from "./App.js";
import Login from "./Login.js";
import Register from "./Register.js";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Timer from "./Timer";
import firebase from "./Firebase.js";
import Profile from "./Profile.js";
import ImageDrop from "./ImageDrop";
import Leaderboard from "./Leaderboard.js";
import Logout from "./Logout.js";
import task from "./task.js"

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
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/logout" component={Logout} />
          <Route path="/tasks" component = {task}/>
        </div>
      </BrowserRouter>
    );
  }
}
