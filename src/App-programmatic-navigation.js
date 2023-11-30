import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, Navigate, useNavigate } 
from "react-router-dom";


function Home(){
  const navigate = useNavigate();
  const goToAbout = ()=> {
    navigate('/about')
  }

  const back = () => {
    navigate(-1);
  }

  return(
    <div>
      <h2>Home</h2>
      <button onClick={goToAbout}>Go to About</button>
      <button onClick={back}>Back</button>
    </div>
  )
}

function About() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  return (
    <>
  <h2>About</h2>
  <button onClick={back}>Back</button>
    </>
  )
}

function App() {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;