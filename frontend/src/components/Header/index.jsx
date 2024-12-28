import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src='https://res.cloudinary.com/dbb5puzve/image/upload/v1734957368/sierra_logo-removebg-preview_xf5oyj.png' className='sierra-image'/>
          <p className='logo-para'>Sierra</p>
        </Link>
        <div className='sign-container'>
        <div className="signup">
          <a href="/login" className="signup-link">Log in</a>
        </div>
        <div className="signup">
          <a href="/signup" className="signup-link">Sign up</a>
        </div>
        
        </div>

      </div>
    </header>
  );
};

export default Header;
