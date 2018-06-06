import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

const breakSeconds = 2;
const workSeconds = 4;

export default class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = ({
            isPaused: true,
            clockType: "Work",
            seconds: workSeconds,
            cycles: 0,

        })
        
    }

    pauseClick = e => {
        this.setState({isPaused:!this.state.isPaused});
    }
    
    switchTime= e => {
        if(this.state.clockType === "Work"){
        this.setState({
            isPaused: true,
            seconds: breakSeconds,
            clockType: "Break"
            });
        }
        else {
        let newCycles = this.state.cycles + 1;
        this.setState({
            isPaused: true,
            seconds: workSeconds,
            cycles: newCycles,
            clockType: "Work",
        });
        };
    }
    

    render(){
        console.log(this.state)
        return(
            <div float= 'center'>
                <ReactCountdownClock seconds={this.state.seconds} //Imported react component
                color="#000"
                alpha={0.9}
                size={100}
                onComplete = {e=>this.switchTime(e)}
                paused = {this.state.isPaused}
                /* pausedText = {this.state.pauseString} */
                />
                <h4> {this.state.clockType} time </h4>
                <button name="pause" onClick ={e=>this.pauseClick(e)}> Start/Stop </button>
            </div>
        );
    }
}