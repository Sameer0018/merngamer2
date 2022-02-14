import React from 'react'
import About from './About'
import Home from './Home';
import Contact from './Contact';
import Signup from './Signup'; 
import Login from './Login';
import Logout from './Logout';
import 'bootstrap/dist/css/bootstrap.css';
//import Logout from './Logout';


import {BrowserRouter as  Router,Routes, Route,Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <Router>
         
         <header >
         <div className="flex">

         <div className="logo">
                <Link to="#"><img src="https://image.shutterstock.com/shutterstock/photos/1904703883/display_1500/stock-vector-gamer-mask-mascot-gaming-esport-logo-template-1904703883.jpg"width="20px" alt="Game Warrior Logo" /></Link>
            </div>
           {/* <Link className='li' to="/"> Home </Link>
           <Link className='li' to="/about"> About </Link>
           <Link className='li' to="/login"> Login </Link>
           <Link className='li' to="/contact"> Contact </Link>
           <Link className='li'to="/Signup">  Signup </Link>
          */}
         
         <nav>
                <button id="nav-toggle" className="hamburger-menu">
                    <span className="strip"></span>
                    <span className="strip"></span>
                    <span className="strip"></span>
                </button>
                <ul id="nav-menu-container">
                    {/* <li><a href="#">Home</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Horror</a></li>
                    <li><a href="#">Contact</a></li>
                */}

           <li><Link className='li' to="/"> Home </Link> </li>
             <li><Link className='li' to="/about"> About </Link></li>
           
            
            <li><Link className='li' to="/login"> Login </Link></li>  
                  <li><Link className='li' to="/contact"> Contact </Link></li>
           
           <li><Link className='li'to="/Signup">  Signup </Link></li>  
           <li><Link className='li'to="/logout">  Logout </Link></li>  
           
           {/* <li><Link className='li'to="/Logout">  Logout </Link></li>  
                    */}
                </ul>
            </nav>
            <Link to="/login" id="login-register-button">Login</Link>
            <Link to="Signup" id="login-register-button">Register</Link>
        
        </div>
         </header>
       
         <Routes>
   
       <Route path="/" element={<Home />}/>
       <Route path="/Navbar" element={<Navbar />}/>
     <Route path="/about" element={<About />}/>
       <Route path="/contact" element={<Contact />}/>
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         <Route path="/logout" element={<Logout  />} />
         
         {/* <Route path="/logout" element={<Logout />} />
        */}
   </Routes>
   
   </Router>
        
    </>
  )
}

export default Navbar
