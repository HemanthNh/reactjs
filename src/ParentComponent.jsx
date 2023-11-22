import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component {
    render(){
        const message = "Hello from Parent Component"
        return <ChildComponent message={message}/>
    }
}

export default ParentComponent;