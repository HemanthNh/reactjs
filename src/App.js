import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, Navigate, Outlet } 
from "react-router-dom";

function Home(){
  return <h2>Home</h2>
}

function Login(){
  return <h2>Login</h2>
}

function Profile(){
  return <h2>Profile</h2>
}

function ProtectedComponent(){
  return <h2>Protected Component</h2>
}

function App() {
  const isAuthenticated = false;
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated ? (
          <li>
            <Link to="/protected">Protected</Link>
          </li>
          ) : null}
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        { isAuthenticated? (
        <Route path='/protected' element={<Outlet/>}>
          <Route index element={<ProtectedComponent/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
        ) : (
          <>
          <Route path='/protected/*' element={<Navigate to="/login"/>}/>
          {/* <Route path='/protected/profile' element={<Navigate to="/login"/>}/> */}
          </>

        )}
      </Routes>
    </Router>
  )
}

// Protected Routes 

export default App;