import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu, Button } from "antd";
import "./Topbar.css";
import firebase from "./Firebase";

const MenuItemGroup = Menu.ItemGroup;

export default class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    const usersRef = firebase
      .database()
      .ref(firebase.auth().currentUser.uid + "/name");
    usersRef.on("value", snapshot => {
      let name = snapshot.val();
      this.setState({
        name: name
      });
    });
  }

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
          <div>
            {" "}
            Currently logged into {this.state.name}
            <Button key="logout" type="danger" className="logout">
              <Link to="/logout">Logout</Link>
            </Button>
          </div>
        </Menu>
      </div>
    );
  }
}
