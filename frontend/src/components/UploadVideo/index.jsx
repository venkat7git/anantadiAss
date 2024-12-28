import React, { useState } from 'react';
import Head from '../head';
import axios from 'axios';
import './index.css';

const UploadVideo = () => {
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    tags: '',
    url: ''
  });

  const { title, description, tags, url } = videoData;

  const onChange = e => setVideoData({ ...videoData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/videos/upload', videoData, {
        headers: { Authorization: token }
      });
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (<>
    <Head/>
    <form onSubmit={e => onSubmit(e)} className="upload-form">

      <h1 className='upload-video'>Upload Video</h1>
      <input type="text" placeholder="Title" name="title" value={title} onChange={e => onChange(e)} required />
      <input type="text" placeholder="Description" name="description" value={description} onChange={e => onChange(e)} required />
      <input type="text" placeholder="Tags (comma separated)" name="tags" value={tags} onChange={e => onChange(e)} required />
      <input type="text" placeholder="Video URL" name="url" value={url} onChange={e => onChange(e)} required />
      <button type="submit">Upload</button>
    </form>
  </>
    
  );
};

export default UploadVideo;
