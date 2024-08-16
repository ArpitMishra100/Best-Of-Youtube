
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Draggable from 'react-draggable';
import { FaDeleteLeft } from "react-icons/fa6";

const VideoPlayerModal = ({ show, handleClose, videoId }) => {
  const [modalSize, setModalSize] = useState({ width: '50%', height: '50%' });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);
      const screenHeight = window.innerHeight;
      console.log(screenHeight);
      let width, height;

      if (screenWidth >= 768) {
      
        width = '50%';
        height = '50%';
      } else {

        width = '90%';
        height = '90%';
      }

      setModalSize({ width, height });
    };

  
    handleResize();


    window.addEventListener('resize', handleResize);

   
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Draggable handle=".modal-content" bounds={{left: -200, right: 200, top: -300, bottom: 400}}>
      <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} >
        <div className="modal-dialog" style={{ maxWidth: modalSize.width, height: modalSize.height, border: "1px solid aqua" }}>
          <div className="modal-content">
            <Modal.Header
              className="modal-header"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'move' , backgroundColor: "black", color: "white" }}
            >
              <Modal.Title id="video-modal" style={{ flex: 1, textAlign: 'center' }}>
                Video Player
              </Modal.Title>
              <button
                type="button"
                className="close"
                onClick={handleClose}
                onTouchStart={handleClose}
                style={{ marginLeft: 'auto', fontSize: '1.5rem' ,color: "red", border: "0px" , backgroundColor: "black"}}
              >
                <FaDeleteLeft/>
              </button>
            </Modal.Header>
            <Modal.Body style={{ padding: 0, position: 'relative', paddingTop: '56.25%', backgroundColor: "black", color: "white" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                className="react-player"
                width="100%"
                height="100%"
                controls={true}
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </Modal.Body>
            <Modal.Footer style={{cursor: 'move', backgroundColor: "black", color: "white"}}>Note: The video belongs to the youtube channel owner. Click on Youtube to know their detials and watch this video on youtube.</Modal.Footer>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default VideoPlayerModal;


