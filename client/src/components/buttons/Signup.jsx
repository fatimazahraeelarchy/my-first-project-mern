import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"


const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    telephone: "",
    password: "",
  });
const navigate=useNavigate()
  const { username, email, telephone, password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", formData);
      console.log("Form data:", formData);
      alert("Registration Completed !Now login");
      navigate("/login")
    } catch (error) {
      console.error(error.message);
      alert("Registration failed.");
    }
  };

  return (
   
    <>
  
 <center>
  
  <div className="box">
    <div className="form">
      <h2>Signup</h2><center>
      <div className="inputbox">
        <span>Username</span>
        <br />
        <br />
        <input  type="text"
         name="username"
          value={username}
         onChange={handleChange}
         required />
        <i />
      </div>
      <div className="inputbox">
        <span>Email</span>
        <br />
        <br />
        <input  type="email"
          name="email"
          value={email}
         onChange={handleChange}
         required />
        <i />
      </div>
      <div className="inputbox">
        <span>Telephone:</span>
        <br />
        <br />
        <input type="text"
          name="telephone"
          value={telephone}
         onChange={handleChange}
         required />
        <i />
      </div>
      <div className="inputbox">
        <span>Password</span>
        <br />
        <br />
        <input  type="password"
          name="password"
         value={password}
         onChange={handleChange}
        required/>
        <i />
      </div>
      <br/>





        <input type="submit" defaultValue="Signup" onClick={handleSubmit}/></center>
      
    </div>
  </div>
  </center>
</> );
};

export default Signup;