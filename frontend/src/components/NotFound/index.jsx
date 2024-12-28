import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the homepage after 3 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to homepage...</p>
    </div>
  );
};

export default NotFound;
