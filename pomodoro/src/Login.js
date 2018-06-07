
import React, {Component} from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import firebase from './Firebase.js';
import { login } from './Auth.js';
import tomato from './pomodoro.png';
import { logout } from './Auth.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user: false
    };
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
        if (user!==null) {
          this.setState({
            user: true
          })
        } else {
          user: false
        }
      });
  }

  updateField = (field, value) => {
    this.setState({
      [field]: value
    });
  };

    render(){
        if(this.state.user){
            return <Redirect to = '/entertasks'/>
        }
        return(
            <div className = "loginform">
                <img src={tomato} className = "tomato"/>
                <div className = "loginbox">
                    Email:  
                    <input
                        name = "username"
                        id = "usernameinput"
                        value = {this.state.username}
                        onChange = {e=>this.updateField("username",e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    Password: 
                    <input
                        name = "password"
                        id = "passwordinput"
                        value = {this.state.password}
                        onChange = {e=>this.updateField("password",e.target.value)}
                    />
                    <ButtonToolbar>
                        <button onClick={e=>this.handleClick(e)}>
                            {" "}
                            Log In {" "}
                        </button>
                        <Link to = "./Register">
                        <button>
                            {" "}
                            Register {" "}
                        </button> 
                        </Link>
                        <button onClick = {logout}>
                            {" "}
                            Log out {" "}
                        </button>
                    </ButtonToolbar>
                </div>
            </div>
                
        );
    }
}