import React, { useRef, useState } from "react";
import VideoProps from "./type";
import { useNavigate } from "react-router-dom";

const Video = ({
  src,
  nextUrl,
  previousUrl,
  disableNextButton,
}: VideoProps) => {
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
    <div className="flex h-full w-full flex-col gap-4">
      <video
        ref={videoRef}
        className="aspect-square"
        src={`/assets/videos/${src}.mp4`}
        autoPlay
      />
      <div className="grid px-2 [grid-template-columns:auto_1fr]">
        {/* <button
          className="flex flex-col justify-center items-center hover:scale-105 transition-transform"
          onClick={handlePrevious}
        >
          <img src="/assets/images/previous.png" alt="previous" />
          <p>السابق</p>
        </button> */}
        <button
          className="flex flex-col items-center justify-center transition-transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={disableNextButton}
        >
          <img src="/assets/images/previous.png" alt="next" />
          <p>التالي</p>
        </button>
        <div className="flex items-center justify-center gap-x-4">
          <button
            className="transition-transform hover:scale-105"
            onClick={handlePlayPause}
          >
            {status ? "pause" : "play"}
          </button>
          <button
            className="transition-transform hover:scale-105"
            onClick={handleReplay}
          >
            <img src="/assets/images/refresh.png" alt="replay" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
