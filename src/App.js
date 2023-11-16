import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Footer from './Footer';
import Counter from './Counter';
import ClassCounter from './ClassCounter';
import LifecycleExample from './LifeCycleExample';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Greeting></Greeting>
      {/* <Counter></Counter> */}
      {/* <ClassCounter></ClassCounter> */}

      <LifecycleExample></LifecycleExample>
      <Footer></Footer>
    </div>
  );
}

export default App;
