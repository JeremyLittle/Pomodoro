import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock'; // https://www.npmjs.com/package/react-countdown-clocks
import "./Stopwatch.css";
import 'antd/dist/antd.css';
import { Button, Col, Row } from 'antd';
import firebase from './Firebase.js';

const breakSeconds = 2;  //Break timer
const workSeconds = 4;   // Work timer


export default class Stopwatch extends Component {
    constructor(props){
        super(props);
            this.state = ({
                isPaused: true,
                clockType: "Work",
                seconds: workSeconds,
                cycles: 0,
                startorStop: "Start"
            }) 
    }
    pauseClick = e => {  //Flip state on pause button
        this.setState({isPaused:!this.state.isPaused});
        if(this.state.isPaused === true){  // Check for which button string to display
            this.setState({startorStop: "Stop"})
        }
        else{ this.setState({startorStop:"Start"})};
    }
    updateFireCycles= () =>{ // For pushing cycle counter to user cycle tracker on firebase
        let cyclesRef = firebase  
          .database()
          .ref(firebase.auth().currentUser.uid)
          .child("cycles")
          .set(this.state.cycles);
    }
    switchTime= e => {   // Function for switching the timer type
        if(this.state.clockType === "Work"){
        this.setState({
            isPaused: true,
            seconds: breakSeconds,
            clockType: "Break",
            startorStop: "Start"
            });
        }
        else {     
        let newCycles = this.state.cycles + 1;
        this.setState({
            isPaused: true,
            seconds: workSeconds,
            cycles: newCycles,
            clockType: "Work",
            startorStop: "Start"
        });
        this.updateFireCycles();
        };
    }
    componentDidMount(){  // Check spelling ya dunce
        const userRef= firebase.database()
        .ref(firebase.auth().currentUser.uid +"/cycles");
            userRef.on("value", snapshot => {
               this.setState({ cycles: snapshot.val()
               });
            });
    }
    render(){
        return(
            <div className= "center">
                <h2 align= "center" className = "text" style={{"font-size":"35px"}}> Cycle Timer</h2>
                <Row type = "flex" justify= "space-between" align = "middle">
                <Col span={8}>
                    <ReactCountdownClock seconds={this.state.seconds} //Imported react component
                    color="#000"
                    alpha={0.9}
                    weight= {3}
                    size={100}
                    onComplete = {e=>this.switchTime(e)}  // Complete callback
                    paused = {this.state.isPaused}   // Pause timer
                    />
                </Col>
                    <Col span={8} >
                    <h4 className= "text" > {this.state.clockType} period!</h4>
                    <Button type = "primary"
                    onClick ={e=>this.pauseClick(e)}> {this.state.startorStop} </Button>
                    </Col>
                    </Row>
            </div>
        );
    }
}