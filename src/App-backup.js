import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Footer from './Footer';
import ClassCounter from './ClassCounter';
import LifecycleExample from './LifeCycleExample';
import ExampleComponent from './ExampleComponent';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';
import CounterComponent from './CounterComponent';
import Counter from './Counter';
import ComponentA from './ComponentA';
import ContextExample from './ContextExample';
import UseEffectExample from './UseEffectExample';
import CustomHookExample from './CustomHookExample';
import FocusInput from './FocusInput';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Greeting></Greeting>
//       {/* <Counter></Counter> */}
//       {/* <ClassCounter></ClassCounter> */}

//       <LifecycleExample></LifecycleExample>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;
// reconciliation

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent: true
    };
  }

  toggleComponent = () => {
    this.setState(prevState=> ({
      showComponent: !prevState.showComponent
    }))
  }

  render(){
    return(
      <>
      <button onClick={this.toggleComponent}>Toggle Component</button>
      <>{this.state.showComponent? "Show": "Hide"}</>
      {this.state.showComponent && <ExampleComponent/>}
      <ChildComponent/>
      {/* <CounterComponent></CounterComponent> */}
      <Counter></Counter>
      <ComponentA/>
      <ContextExample></ContextExample>
      {/* <UseEffectExample></UseEffectExample> */}
      <CustomHookExample></CustomHookExample>
      <FocusInput></FocusInput>
      </>
    )
  }
}
export default App;
