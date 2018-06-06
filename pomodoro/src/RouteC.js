import React, {Component} from 'react';
import './App.css';
import App from './App.js';
import Login from './Login.js';
import {BrowserRouter, Route, Link,Redirect} from 'react-router-dom'

export default class RouteC extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Redirect to = '/Login'/>
                    <Route path = "/App" component = {App}/>
                    <Route path = "/Login" component = {Login}/>
                </div>
            </BrowserRouter>
        )
    }
}