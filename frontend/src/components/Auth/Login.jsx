import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import "./Login.css";
import Cookies from 'js-cookie'



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const token = Cookies.get("jwtToken");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        },{headers: {Authorization: `Bearer ${token}`  }
      }
      );
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/videoList");
    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);
      alert("Login failed: " + (error.response?.data || "Unknown error"));
    }
  };
  const onClickSignUp = ()=>{
    navigate("/signup")
  }

  return (
    <>
    
      <div className="main-container">
      
        <form onSubmit={handleLogin} className="form-container">
        <div className="home">
      <a href ='/' className="anchorTag">
        
      <FaHome />
      <span className="home-text">home</span>
      </a>
      
      </div>
        <h1 className="heading">Login</h1>
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
        <button className="login-button" type="submit">Login</button>
        <p className="create-account-para">
          Create an account
        </p>
      <button className="create-account-btn" type="button" onClick={onClickSignUp}>Sign Up?</button>
  
      </form>
      
      
      </div>
      
    </>
    
  );
};

export default Login;
