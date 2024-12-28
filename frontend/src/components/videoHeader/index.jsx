import { IoSearch } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import {useNavigate} from 'react-router-dom'

import './index.css'

const VideoHeader = ()=>{
   const navigate = useNavigate();

   const onClickUpload = ()=>{
      navigate("/uploadVideo")
   }
   return (<>
         
       <div className="video-header-container">
   <div className="video-header-content">
      <div className='input-container'>
      <IoSearch />
      <span className="span-line">|</span>
      <input type="search" className="video-header-search-input"/>
         
      </div>
      <div className="filter-container">
         <LuFilter />
         <button type="button" className="filter-button">Hype</button>
         <button type="button" className="filter-button">Reach</button>
         <button type="button" className="filter-button">Impact</button>
         <button type="button" className="filter-button">Trend</button>
         <button type="button" className="filter-button">Engage</button>
      </div>
      </div>
      <button type="button" onClick={onClickUpload} className="filter-button">Upload</button>
      </div>
   </>
  )
     
}

export default VideoHeader