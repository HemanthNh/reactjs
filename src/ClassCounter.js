import React, { Component } from "react";
class ClassCounter extends Component {
    constructor(props){ //properties
        super(props);
        this.state = { count: 0 };
    }
    render(){
       return(
        <>
        <p>Class Counter</p>
        <p>Count: {this.state.count}</p>
        <button onClick={()=> this.setState({count: this.state.count + 1})}> Increment </button>
        </>
       ) 
    }
}

export default ClassCounter;