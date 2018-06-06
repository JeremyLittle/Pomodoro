import React, {Component} from 'react';
import Firebase from "./Firebase.js";

export default class Leaderboard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.p);
    return (
      <div>  
        <h1> Leaderboard </h1>
        
      </div>
    );
  }
}


