import React, { Component } from 'react';

class ExampleComponent extends Component {

componentWillUnmount(){
    console.log("Component is unmounting,  cleanup will be performed.")
}

render(){
    return<p>Example Component</p>
}
}
export default ExampleComponent;