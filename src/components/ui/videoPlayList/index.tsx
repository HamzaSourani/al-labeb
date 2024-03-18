import { useState, useEffect, useRef, useCallback } from "react";
import VideoPlayListProps from "./type";
import { useNavigate } from "react-router-dom";

const VideoPlaylist = ({ videoSources, nextUrl }: VideoPlayListProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [status, setStatus] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null!);

  const navigate = useNavigate();
  console.log(videoSources);
  const handlePlayPause = () => {
    if (status) {
      videoRef.current.pause();
      setStatus(false);
    } else {
      videoRef.current.play();
      setStatus(true);
    }
  };
  const handleNext = () => {
    navigate(nextUrl);
  };

  const playNextVideo = useCallback(() => {
    if (currentVideoIndex === videoSources.length - 1) {
      videoRef.current.pause();
      setStatus(false);
      setCurrentVideoIndex(0);
    }
    setCurrentVideoIndex((prevIndex) => prevIndex + 1);
  }, [videoSources, currentVideoIndex]);

  useEffect(() => {
    currentVideoIndex !== videoSources.length - 1 &&
      videoRef.current.addEventListener("ended", playNextVideo);
    const video = videoRef.current;
    return () => {
      video.removeEventListener("ended", playNextVideo);
    };
  }, [currentVideoIndex, playNextVideo, videoSources]);
  console.log(currentVideoIndex);

  const currentVideo = videoSources[currentVideoIndex];
  console.log(currentVideo);

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <video
        id="video-player"
        ref={videoRef}
        className="aspect-square"
        autoPlay
        src={`/assets/videos/${currentVideo}.mp4`}
      >
        {/* <source src={`/assets/videos/${currentVideo}.mp4`} type="video/mp4" /> */}
      </video>
      <div className="grid px-2 [grid-template-columns:auto_1fr]">
        <button
          className="flex flex-col items-center justify-center transition-transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          onClick={handleNext}
        >
          <img src="/assets/images/previous.png" alt="next" />
          <p>التالي</p>
        </button>
        {/* <div className="flex items-center justify-center gap-x-4">
          <button
            className="transition-transform hover:scale-105"
            onClick={handlePlayPause}
          >
            {status ? "pause" : "play"}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default VideoPlaylist;
