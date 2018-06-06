import React, {Component} from 'react';


export default class Leaderboard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let display = this.props.users.map((user) => {
      return( // Remember return 
      <div key= {user.id}>
        <h2> Name: {user.data.name} </h2>
        <p> Cycles: {user.data.cycles} </p>
      </div>
    )
  });
    return (
      <div>  
        <h1> Leaderboard </h1>
        <div>
        {display}
        </div>
      </div>
    );
  }
}


