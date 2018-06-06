import React, { Component } from 'react';
import DummyForm from './DummyForm.js';
import firebase from 'firebase';
import Leaderboard from './Leaderboard.js';

let config = {
    apiKey: "AIzaSyDrsrZyL1WB9dPyuxGWF8toSqHvnXK1hQE",
    authDomain: "pomodoro-18245.firebaseapp.com",
    databaseURL: "https://pomodoro-18245.firebaseio.com",
    projectId: "pomodoro-18245",
    storageBucket: "",
    messagingSenderId: "83912180076"
    };
    firebase.initializeApp(config);
    
function writeUserData(name, cycles) {
    let postListRef = firebase.database().ref('/users')  // Has to match what the other do
    let newPostRef = postListRef.push();  //.push for list auto-key list
    newPostRef.set({
        name: name,
        cycles : cycles
    });
};
    let database = firebase.database();
    let rootRef = database.ref('/users')

export default class Firebase extends Component {
    constructor(props){
        super(props);
        this.state = {
            fireUsers : [],
        }
    }

    onSubmit = (fields) => {
        console.log(fields.name);
        let name = fields.name;
        let cycles = fields.cycles;
        writeUserData(name,cycles);
    }
    componentDidMount(){  // Lower case  and keeps updating the data even though it only runs once?
        rootRef.on('value', (snapshot) => {
            let fArray = [];
            snapshot.forEach(function(user) {
                console.log(user.key);  //forEach because not an array
                let obj = {id : user.key, data : user.val()}; // need those brackets again for con.key if key. Also key does not have ()
                 fArray.push(obj);  // Gives nested object
                }); 
            this.setState({fireUsers: fArray})
            console.log(this.state.fireUsers);
        });    
    }
    
  render() {
    return (
      <div>
        <DummyForm onSubmit={(fields)=> this.onSubmit(fields)}/>
        <Leaderboard users = {this.state.fireUsers}/>  {/*Passing down users as props*/}
      </div>
    );
  }
}


