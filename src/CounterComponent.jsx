import React from "react";

class CounterComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
        incrementCount = () => {
            this.setState((prevState) => ({count: prevState.count + 1}))
        }

        render() {
            return(
                <div>
                    <p>Count: {this.state.count}</p>
                    <button onClick={this.incrementCount}>Increment</button>
                </div>
            );
        }

    }

    export default CounterComponent;