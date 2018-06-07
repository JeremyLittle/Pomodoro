import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock'; // https://www.npmjs.com/package/react-countdown-clocks
import "./Stopwatch.css";


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
        };
    }
    render(){
        console.log(this.state)
        return(
            <div className= "center">
                    <div  md ={2}>
                    <ReactCountdownClock seconds={this.state.seconds} //Imported react component
                    color="#000"
                    alpha={0.9}
                    weight= {3}
                    size={100}
                    onComplete = {e=>this.switchTime(e)}  // Complete callback
                    paused = {this.state.isPaused}   // Pause timer
                    /* pausedText = {this.state.pauseString} */
                    />
                    </div>
                    <div  md={4}>
                    <h4> {this.state.clockType} time </h4>
                    <button bsStyle = "info"
                    onClick ={e=>this.pauseClick(e)}> {this.state.startorStop} </button>
                    </div>
              
            </div>
        );
    }
}