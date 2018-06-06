import React, {Component} from 'react';
import {ButtonToolbar} from 'react-bootstrap';
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
        })
    }
    render(){
        console.log(this.state)
        return(
            <div className = "loginform">
                <input
                    name = "username"
                    id = "usernameinput"
                    value = {this.state.username}
                    onChange = {e=>this.updateField("username",e.target.value)}
                />
                <input
                    name = "password"
                    id = "passwordinput"
                    value = {this.state.password}
                    onChange = {e=>this.updateField("password",e.target.value)}
                />
                <ButtonToolbar>
                    <button>
                        {" "}
                        Log In {" "}
                    </button>
                </ButtonToolbar>
            </div>
        );
    }
}