import React from 'react';

class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevState.count, this.state.count);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    console.log("Component rendering");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleExample;

