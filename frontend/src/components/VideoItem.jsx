

import React from 'react';
import { FaGrinHearts } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const VideoItem = ({ video, onVideoSelect }) => {
  const { snippet, statistics, id } = video;
  const { title, thumbnails } = snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div className="col-md-4 mb-4">
    <div className="card" onClick={() => onVideoSelect(id)} style={{ backgroundColor: "#202222" , border: "0px",}}>
      <img src={thumbnails.high.url} className="card-img-top image" alt={title} style={{borderRadius: "5px"}} />
      <div className="card-body" style={{color: "white" , fontSize: "smaller", fontWeight: "400", paddingLeft: "0px"}}>
        <h5 className="card-title" style={{marginLeft: "10px" , fontSize: "larger"}}>{title}</h5>
        <p className="card-text" style={{marginLeft: "10px" ,marginBottom: "2px"}}><FaRegEye style={{marginRight: "2px", marginBottom: "2px", marginLeft: "2px", color: "greenyellow"}}/> {viewCount} </p>
        <p className="card-text" style={{marginLeft: "10px", marginTop: "2px"}}><FaGrinHearts style={{marginRight: "2px", marginBottom: "2px" ,  marginLeft: "2px", color: "orangered"}}/> {likeCount}</p>
      </div>
    </div>
  </div>
  );
};

export default VideoItem;
