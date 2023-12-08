import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
import './App.css';
import UncontrolledForm from "./UncontrolledForm";
import FormWithValidation from "./FormWithValidation";

const Home = lazy(()=> import('./Home'))
const About = lazy(()=> import('./About'))
const ControlledForm = lazy(()=> import('./ControlledForm'))

function App(){
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/controlled-form">Controlled Form</Link>
          </li>
          <li>
            <Link to="/uncontrolled-form">Uncontrolled Form</Link>
          </li>
          <li>
            <Link to="/form-validation">FormWithValidation</Link>
          </li>
        </ul>
      </nav>
      <div>
      {/* suspended routes */}
        <Suspense fallback={<div className="loading">Loading...</div>}> 
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/controlled-form" element={<ControlledForm/>}></Route>
            <Route path="/uncontrolled-form" element={<UncontrolledForm/>}></Route>
            <Route path="/form-validation" element={<FormWithValidation/>}></Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App;