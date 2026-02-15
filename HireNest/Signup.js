import React from 'react'
import '../my_app/Paint.css';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate=useNavigate();

  function Handlehome(){
    navigate("/")
  }
  return (
    <div class="signup-container">
      <div class="vish2">
        <h1>Sign Up</h1>
        <form >
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required></input>
            
            
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required></input>
            
        
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required></input>
            
            
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required></input>
            </div>
            <center><button type="button" onClick={Handlehome}>Sign Up</button></center>
        </form>
        </div>
    </div>
 
     
  );
}

export default Signup