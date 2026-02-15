 import React from 'react';
import '../my_app/Paint.css';
import { useNavigate } from 'react-router-dom';
const Login2 = () => {
  const Navigate2=useNavigate()
  function Handlehome()
  {
    Navigate2("/");
  }
    const handleSignups=()=>{
  Navigate2("/Signup")
    }
  return (
    
    <div class="signup-container2">
      <div class="vish">
        <div>
    <h1><center>Login</center></h1>
    </div>
    <form>
        <div class="form-group">
            
        
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
             <br></br>
             <br></br>
    
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required></input>
        
        
            
        </div>
        <center><button type="button" onClick={Handlehome}>Login</button></center>
        <h4>If you dont have an account,</h4>
        <button onClick={handleSignups}>Sign up</button>
    </form>
    </div>
</div>
  );
}

export default Login2;