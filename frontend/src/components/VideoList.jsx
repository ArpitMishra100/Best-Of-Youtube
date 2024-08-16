

import React, { useState } from 'react';
import VideoItem from './VideoItem';
import VideoModal from './VideoModal';

const VideoList = ({ videos }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedVideoId(null);
    setShowModal(false);
  };

  return (
    <div className='videoContainer'>
      <div className="row">
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} onVideoSelect={handleVideoSelect} />
        ))}
      </div>
      {selectedVideoId && (
        <VideoModal
          show={showModal}
          handleClose={handleCloseModal}
          videoId={selectedVideoId}
        />
      )}
    </div>
  );
};

export default VideoList;
