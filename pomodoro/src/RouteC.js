import React, {Component} from 'react';
import './App.css';
import App from './App.js';
import {BrowserRouter, Route, Link,Redirect} from 'react-router-dom'

export default class RouteC extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Redirect to = '/App'/>
                    <Route path = "/App" component = {App}/>
                </div>
            </BrowserRouter>
        )
    }
}