import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default class Topbar extends Component {
  render() {
    return (
      <Navbar fixedTop="true" inverse="true">
        Hello There!
      </Navbar>
    );
  }
}
