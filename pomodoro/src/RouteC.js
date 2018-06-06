import React, { Component } from "react";
import "./App.css";
import App from "./App.js";
import Login from "./Login.js";
import Register from "./Register.js";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import EnterTasks from "./EnterTasks.js";

export default class RouteC extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect to="/register" />
          <Route path="/entertasks" component={EnterTasks} />
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}
