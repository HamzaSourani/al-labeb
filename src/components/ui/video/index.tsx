import React, { useRef, useState } from "react";
import VideoProps from "./type";
import { useNavigate } from "react-router-dom";

const Video = ({ src, nextUrl, previousUrl }: VideoProps) => {
  const [status, setStatus] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null!);
  const navigate = useNavigate();
  const handlePlayPause = () => {
    if (status) {
      videoRef.current.pause();
      setStatus(false);
    } else {
      videoRef.current.play();
      setStatus(true);
    }
  };
  const handleReplay = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };
  const handleNext = () => {
    navigate(nextUrl);
  };
  const handlePrevious = () => {
    navigate(previousUrl);
  };
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <video ref={videoRef} className="aspect-square" autoPlay>
        <source src={`/assets/videos/${src}.mp4`} type="video/mp4" />
      </video>
      <div className="grid px-2 [grid-template-columns:auto_1fr_auto]">
        <button
          className="flex flex-col justify-center items-center hover:scale-105 transition-transform"
          onClick={handlePrevious}
        >
          <img src="/assets/images/previous.png" alt="previous" />
          <p>السابق</p>
        </button>
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="hover:scale-105 transition-transform"
            onClick={handlePlayPause}
          >
            {status ? (
              <img src="/assets/images/refresh.png" alt="replay" />
            ) : (
              <img src="/assets/images/refresh.png" alt="replay" />
            )}
          </button>
          <button
            className="hover:scale-105 transition-transform"
            onClick={handleReplay}
          >
            <img src="/assets/images/refresh.png" alt="replay" />
          </button>
        </div>
        <button
          className="flex flex-col justify-center items-center hover:scale-105 transition-transform"
          onClick={handleNext}
        >
          <img src="/assets/images/next.png" alt="next" />
          <p>التالي</p>
        </button>
      </div>
    </div>
  );
};

export default Video;
