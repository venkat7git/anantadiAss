import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Head = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src='https://res.cloudinary.com/dbb5puzve/image/upload/v1734957368/sierra_logo-removebg-preview_xf5oyj.png' className='sierra-image'/>
          <p className='logo-para'>Sierra</p>
        </Link>
        
      </div>
    </header>
  );
};

export default Head;
