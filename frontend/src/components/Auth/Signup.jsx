import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import Cookies from 'js-cookie'


import "./Signup.css"

const Signup = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        username, email, password
      })
      console.log(response.data.token)
      Cookies.set("jwtToken",response.data.token,{expires:30})
      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Signup failed", error.response?.data || error.message);
      alert("Signup failed: " + (error.response?.data || "Unknown error"));
    }
  };
  const onClickLogin = ()=>{
    navigate("/login")
  }

  return (<>
    
    <div className="main-container">
    
    <form onSubmit={handleSignup} className="form-container">
    <div className="home">
                <a href ='/' className="anchor">
                  
                <FaHome />
                <span className="home-text">home</span>
                </a>
                
                </div>
      <h1 className="heading">Signup</h1>
      <input
      className="inputEl"
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
      className="inputEl"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
      className="inputEl"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="signup-button" type="submit">Signup</button>
      <p className="create-account-para">
          Already have an account
        </p>
      <button className="create-account-btn" type="button" onClick={onClickLogin}>Login</button>
    </form>
    </div>

  </>
      );
};

export default Signup;
