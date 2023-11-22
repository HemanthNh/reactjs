import React from "react";

class ChildComponent extends React.Component {
    render(){
        return <p className="test">{this.props.message}</p>
    }
}

export default ChildComponent;