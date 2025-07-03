import React from 'react';


const VideoComponent = () => {
  const videoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    opacity: 0.3,
    zIndex: -1
  };

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={videoStyle}  
    >
      <source src="/tech/tech.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      
    </video>
  );
};
export default VideoComponent;