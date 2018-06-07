import React, { Component } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "./Firebase.js";
import { auth } from "./Auth.js";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      alert: false,
      name: "",
      disablebut: false,
      gender: "",
      age: ""
    };
  }
  updateField(field, value) {
    this.setState({
      [field]: value
    });
  }

  emptyInputs=()=>{
      if(this.state.name === "" || this.state.age === "" || this.state.gender === ""){
          return true; 
      }
      else{
          return false; 
      }
  }
  handleClick = e => {
    auth(this.state.username, this.state.password)
      .then(user => {
        console.log(user);
        if (user) {
          console.log(this.state);
          console.log(user.user.uid);
          let userID = user.user.uid;
          let obj = {
            email: this.state.username,
            tasks: "",
            cycles: "",
            age: this.state.age,
            gender: this.state.gender,
            name: this.state.name,
            password: this.state.password
          };
          let newPostKey = firebase
            .database()
            .ref(userID)
            .set(obj);
        }
      })
      .catch(error => {
        alert("Registration error: " + error.message);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="registerform">
        <div className="registerbox">
          <h1 id="registertitle"> Register </h1>
          {this.state.alert && this.alertFail()}
          Email
          <input
            name="username"
            id="usernameinput"
            value={this.state.username}
            onChange={e => this.updateField("username", e.target.value)}
          />
          <br />
          Password
          <input
            name="password"
            id="passwordinput"
            value={this.state.password}
            onChange={e => this.updateField("password", e.target.value)}
          />
          <br/>
          Name
          <input
            name = "name"
            id = "input"
            value = {this.state.name}
            onChange={e => this.updateField("name", e.target.value)}
          />
          <br/>
          Age
          <input
            type = "number"
            name = "age"
            id = "input"
            value = {this.state.age}
            onChange={!isNaN(this.state.age)&&(e => this.updateField("age", e.target.value))}
          />
          <br />
          Gender
          <select id = "input"  onChange = {e=>this.updateField("gender", e.target.value)}>
              <option value = "Female">Female</option>
              <option value = "Male">Male</option>
              <option value = "Other">Other</option>
          </select>
          <br/>
          <button id="registerbut" disabled = {this.emptyInputs()}
          onClick={(!this.emptyInputs())&&(e => this.handleClick(e))}>
            {" "}
            Register{" "}
          </button>
        </div>
        <div className = "register">
            <p id = "registerlink">Already registered?  </p>
            <Link to = "./Login">
            <p id = "registerlink2"> Login </p>
            </Link>
        </div>
      </div>
    );
  }
}
