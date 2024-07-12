import React from "react";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video autoPlay muted loop className="background-video">
        <source src="https://videos.pexels.com/video-files/8322527/8322527-sd_960_506_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </div>
  );
};

export default BackgroundVideo;
