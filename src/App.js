import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import Home from './Home';
import About from './About';

function UserProfile(){
  const myparams = useParams();
  console.log('myparams',myparams)
  const { username, age } = useParams(); 

  return <h2>Hi { username }. Your age is {age}</h2>
}

function App(){
  return(
    <Router>
      <div>
        <nav>
          <ul> 
            <li>
              <Link to="/user/john">John's Profile</Link>
            </li>
            <li>
              <Link to="/user/alice">Alice's Profile</Link>
            </li>
            
          </ul>
        </nav>
        <Routes>
          <Route path="/user/:username/:age" element={<UserProfile/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;



// function App(){
//   return(
//     <Router>
//       <div>
//         <nav>
//           <ul> 
//             <li>
//               <Link to="/home">Home</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/home" exact element={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//         </Routes>
//       </div>
//     </Router>
//   )
// }
