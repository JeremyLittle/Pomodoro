import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu } from "antd";
import "./Topbar.css";
const MenuItemGroup = Menu.ItemGroup;

//#d16429
export default class Topbar extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="timer">
            <Link to="/timer">Timer</Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="leaderboard">
            <Link to="/leaderboard">Leaderboard</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
