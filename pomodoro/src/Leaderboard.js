import React, {Component} from 'react';


export default class Leaderboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      rank: 0
    }
  }
  
  render() {
    let descending = this.props.users.reverse();
    let display = descending.map((user) => {
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


