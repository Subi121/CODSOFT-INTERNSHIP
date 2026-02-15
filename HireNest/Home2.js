import React from 'react';
import { Link } from 'react-router-dom';
import './Home2.css'; 
import AboutUs from './AboutUs';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Login2 from './Login2';
const Home2 = () => {
  const Navigate2=useNavigate();

  const handleLoginClick = () => {
    Navigate2("/Login2");
  };

  
  const handleSignupClick = () => {
    Navigate2("/Signup");
  };

  return (
    <div>
    <div id="background">
      <div className="navbar">
      


        <div className="logo">
        </div>
          <ul className="links">
            <li><Link to ="">Home</Link></li>
            <li><Link to="/AboutUs">About</Link></li>
            
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/ContactPage">Contact</Link></li>
          </ul>
          <div className="navbar-buttons">
            <button onClick={handleLoginClick} className="login-btn">Login</button>
            <button onClick={handleSignupClick} className="signup-btn">SignUp</button>
          </div>
        </div>

        <main>
          <div className="hero">
            
            <div className="left">
        <img src="https://img.lovepik.com/photo/40244/9463.jpg_wh860.jpg" alt="Example" />
         </div>
          <div class="vis">

            <p className="welcome-text"></p>
          
          <h1 className="fn">Welcome to HireNest!</h1>
           
            <h2 className="fof">A place where every talent meets it's purpose and every opportunity finds its match!!</h2>
           
            <button>Search Jobs!</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home2;