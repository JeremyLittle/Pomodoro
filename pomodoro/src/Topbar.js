import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu } from "antd";
const MenuItemGroup = Menu.ItemGroup;

//#d16429
export default class Topbar extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="timer">Timer</Menu.Item>
          <Menu.Item key="profile">Profile</Menu.Item>
          <Menu.Item key="leaderboard">Leaderboard</Menu.Item>
        </Menu>
      </div>
    );
  }
}
