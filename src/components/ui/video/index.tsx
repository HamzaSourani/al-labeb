import React, { useRef, useState } from "react";
import VideoProps from "./type";
import { useNavigate } from "react-router-dom";
import NextIcon from "@/components/svg/next";
import PauseIcon from "@/components/svg/pause";
import PlayIcon from "@/components/svg/play";
import RefreshIcon from "@/components/svg/refresh";

const Video = ({ src, onNext, previousUrl, disableNextButton }: VideoProps) => {
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

  const handlePrevious = () => {
    navigate(previousUrl!);
  };
  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-lg shadow-sm shadow-gray-300">
      <div className="overflow-hidden rounded-t-lg border border-primary">
        <video
          ref={videoRef}
          className="aspect-square"
          src={`/assets/videos/${src}.mp4`}
          autoPlay
        />
      </div>
      <div className="grid  p-4 [grid-template-columns:auto_1fr]">
        {/* {previousUrl&&<button
          className="flex flex-col justify-center items-center hover:scale-105 transition-transform"
          onClick={handlePrevious}
        >
          <img src="/assets/images/previous.png" alt="previous" />
          <p>السابق</p>
        </button>} */}
        {onNext && (
          <button
            className="flex flex-col items-center justify-center transition-transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            onClick={onNext}
            disabled={disableNextButton}
          >
            <NextIcon className="h-6  w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10" />
          </button>
        )}
        <div className="flex items-center justify-center gap-x-4">
          <button
            className="transition-transform hover:scale-105"
            onClick={handlePlayPause}
          >
            {status ? (
              <PauseIcon className="h-6  w-6 fill-secondary md:h-8 md:w-8 lg:h-10 lg:w-10" />
            ) : (
              <PlayIcon className="h-6  w-6 fill-secondary md:h-8 md:w-8 lg:h-10 lg:w-10" />
            )}
          </button>
          <button
            className="transition-transform hover:scale-105"
            onClick={handleReplay}
          >
            <RefreshIcon className="h-6  w-6 fill-secondary md:h-8 md:w-8 lg:h-10 lg:w-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
