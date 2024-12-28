import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import './index.css';

const Register = () => {
  const [formData, setFormData] = useState({
    videoLink: '',
    keywords: ''
  });

  const { videoLink, keywords } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (<>
    <Header/>
    <div className="register-container">
      <h1 className='main-heading'>Repurpose video with AI</h1>
      <p className='para1'>Now Repurpose long video, 10x faster.</p>
      <p className='para2'>Sierra allows you to create new video content in just a few clicks, saving you time and effort.</p>
      <form onSubmit={e => onSubmit(e)} className="register-form">
        <div className="form-group">
          <label htmlFor="videoLink" className='label'>Video Link here</label>
          <input
            type="text"
            id="videoLink"
            placeholder="Paste your video link (Live, YouTube, Behance)"
            name="videoLink"
            className='video-input'
            value={videoLink}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="keywords" className='label'>Keywords</label>
          <input
            type="text"
            id="keywords"
            placeholder="Keyword to include relevant data (100 words)"
            name="keywords"
            className='keyword-input'
            value={keywords}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <button type="submit" className="cta-button">Call to Action</button>
      </form>
    </div>
  </>
    
  );
};

export default Register;
