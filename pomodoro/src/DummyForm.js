import React, { Component } from 'react';
import Firebase from './Firebase.js';

export default class DummyForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            cycles: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    onChange = (e) => {
        this.setState({               
            [e.target.name] : e.target.value // Need these brackets for some reason
        });  
    }
    handleSubmit(e){
        this.props.onSubmit(this.state);
        e.preventDefault();
        this.setState({name: "",
                    cycles: 0});
    }

  render(){
    return (
    
      <div className="Form">
        <h1> Gimme Dat Info </h1>
        <form>
        <div>
            <label> Name: </label>
            <input type = "text" name= "name" value = {this.state.name} 
            onChange = {(e) => this.onChange(e)}/>
        </div>
        <div>
            <label> Cycles: </label>
            <input type = "number" name = "cycles" value = {this.state.cycles}
            onChange = {(e) => this.onChange(e)}/>
        </div>
         <button onClick= {this.handleSubmit}> BAM! </button>  {/* onClick for button */}
      </form>    
      </div>
    
    );
  }
}


