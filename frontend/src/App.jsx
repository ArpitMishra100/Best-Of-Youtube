import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import { FaYoutube } from "react-icons/fa";

import "./App.css"


const App = () => {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const handleSearch = async (query) => {
   try{
    const response = await fetch(`http://localhost:5000/api/videos?query=${query}`);
    const data = await response.json();
    setVideos(data.videos); 
  }
  catch(error){
    console.error(error);
  }
  finally{
    setLoading(false);
  }
  };

  return (
    <div className="container mt-5" style={{color: "white" , backgroundColor: "#202222"}}>
      <h1 className="text-center mb-4">Best of Youtube <FaYoutube style={{color: "red"}}/></h1>
      <SearchBar onSearch={handleSearch} setLoading = {setLoading}  loading = {loading}/>
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
