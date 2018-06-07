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
        if(isPaused == true){  // Check for which button string to display
            this.setState({startorStop: "Start"})
        }
        else{ this.setState({startorStop:"Stop"})}
    }
    
    switchTime= e => {   // Function for switching the timer type
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
            <div className= "center">
                <Grid>
                <Row>
                    <Col  md ={2}>
                    <ReactCountdownClock seconds={this.state.seconds} //Imported react component
                    color="#000"
                    alpha={0.9}
                    weight= {3}
                    size={100}
                    onComplete = {e=>this.switchTime(e)}  // Complete callback
                    paused = {this.state.isPaused}   // Pause timer
                    /* pausedText = {this.state.pauseString} */
                    />
                    </Col>
                    <Col  md={4}>
                    <h4> {this.state.clockType} time </h4>
                    <Button bsStyle = "info"
                    onClick ={e=>this.pauseClick(e)}> Start/Stop </Button>
                    </Col>
                </Row>
                </Grid>
            </div>
        );
    }
}