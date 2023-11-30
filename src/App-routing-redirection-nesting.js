import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, Navigate } 
from "react-router-dom";
import NotFound from './NotFound';

function Home(){
  return <h2>Home</h2>
}


function About(){
  return (
    <div>
  <h2>About</h2>
<h3>Contact Details</h3>
<p>Phone: +91 785125478</p>
<p>Email: support@react.com</p>
    </div>
  )
}


function App(){
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
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Navigate to="/about"/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App;



// function Dashboard(){
//   return(
//     <div className='dashboard'>
//       <h2>Dashboard</h2>
//       <Outlet/>
//     </div>
//   )
// }

// function UserProfile(){
//   return <h3>User Profile</h3>
// }

// function UserSettings(){
//   return <h3>User Settings</h3>
// }

// function App(){
//   return(
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path='/dashboard' element={<Dashboard/>}>
//             <Route path='profile' element={<UserProfile/>}/>
//             <Route path='settings' element={<UserSettings/>}/>
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App;
