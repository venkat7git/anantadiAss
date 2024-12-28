import React, { useEffect, useState } from 'react';
import VideoHeader from '../videoHeader';
import axios, { Axios } from 'axios';
import { Rings } from 'react-loader-spinner'
import './index.css';
const apiConstants = {
  initial:"INITIAL",
  success:"SUCCESS",
  failure:"FAILURE",
  inProgress:"IN-PROGRESS"
}



const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [apiConst,setApiConst] = useState(apiConstants.inProgress);

  useEffect(() => {
    const fetchData = async () => {
      setApiConst(apiConstants.inProgress)
      const token = localStorage.getItem("token");
      try{
        const res = await axios.get("http://localhost:5000/api/videos",
          { headers: {"Authorization" : `Bearer ${token}`} }
      )
        console.log(res.data)
        setVideos(res.data)
        setApiConst(apiConstants.success)
      }catch(err){
        console.log(err)
      }
    };
    fetchData();
  }, []);


  const apiView = ()=>{
    switch(apiConst){
      case apiConstants.success:
        return successView();
      case apiConstants.inProgress:
        return loadingView();
      default:
        return null
    }
  }

  const loadingView = ()=>{
    return (<div className='loader-spinner'>
        <Rings
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="rings-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
    </div>
    )
  }
  const successView = ()=>{
    return (<>
      <VideoHeader/>
      <div className="video-list">
      {videos.map(video => (
        <div key={video._id} className="video-item">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <video src={video.url} controls />
        </div>
      ))}
    </div>
    </>
      
    )
  }


  return (<>
    {apiView()}
  </>
    
  );
};

export default VideoList;
