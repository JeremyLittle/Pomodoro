import React, {Component} from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import firebase from './Firebase.js';
import { login } from './Auth.js';

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    updateField(field, value){
        this.setState({
            [field]: value
        });
    }

    handleClick = e => {
        login(this.state.username, this.state.password);
    }

    render(){
        return(
            <div className = "loginform">
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
                    </ButtonToolbar>
                </div>
            </div>
                
        );
    }
}