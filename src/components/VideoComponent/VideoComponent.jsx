import React from 'react';
import './VideoComponent.css'; 

const VideoComponent = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="background-video" 
    >
      <source src="/tech/tech.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
