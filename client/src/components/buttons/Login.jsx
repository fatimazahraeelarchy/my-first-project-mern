import React, { useState } from "react";
import axios from "axios";
import {useCookies} from "react-cookie"

import { useNavigate } from "react-router-dom";
import "./Login.css"
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();
  
  const onSubmit= async (event) => {
  
  
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      alert(response.data.message);
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/products");
    } catch (error) {
      alert(error.response.data.message);
    }};

 
    return (
    <>
  
 <center>
  
  <div className="box">
    <div className="form">
      <h2>Login</h2><center>
      <div className="inputbox">
        <span>Username</span>
        <br />
        <br />
        <input type="text" required="required" onChange={(e) => setUsername(e.target.value)} />
        <i />
      </div>
      <div className="inputbox">
        <span>Password</span>
        <br />
        <br />
        <input type="password" required="required" onChange={(e) => setPassword(e.target.value)}/>
        <i />
      </div>
      <br/>
        <input type="submit" defaultValue="Login" onClick={onSubmit} /></center>
      
    </div>
  </div>
  </center>
</>  )
  }



export default Login;
