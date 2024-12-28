import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index';
import Register from './components/Register/index';
import UploadVideo from './components/UploadVideo/index';
import VideoList from './components/VideoList/index';
import NotFound from './components/NotFound'
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import './App.css';
import DemoRoute from './components/demoRoute';

const App = () => {
  return (
    <Router>
    
      <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path = "/uploadVideo" element = {<UploadVideo/>}/>
          <Route path = "/videoList" element={<VideoList/>} />
          <Route path="/notFound" element={<NotFound/>} />
          <Route path="*" element={<Login/>}/>
      </Routes>
    </Router>

  );
};

export default App;
