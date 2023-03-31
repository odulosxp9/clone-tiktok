import React, { useRef, useState } from "react";
import VideoFooter from "./componts/footer/VideoFooter";
import "./video.css"

function Video() {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    function handleStart(){   
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

  return (
    <div className="video">
        <video 
            className="video__player"
            ref={videoRef}
            loop
            onClick={handleStart}
            src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
          ></video>
          {/* Side bar */}
          <VideoFooter />
    </div>
  );
}

export default Video;
