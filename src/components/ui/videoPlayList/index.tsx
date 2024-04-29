import { useState, useEffect, useRef, useCallback } from "react";
import VideoPlayListProps from "./type";
import { useNavigate } from "react-router-dom";
import NextIcon from "@/components/svg/next";

const VideoPlaylist = ({ videoSources, nextUrl }: VideoPlayListProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null!);

  const navigate = useNavigate();

  const handleNext = () => {
    navigate(nextUrl!);
  };

  const playNextVideo = useCallback(
    () => {
      // if (currentVideoIndex === videoSources.length - 1) {
      //   videoRef.current.pause();
      //   setCurrentVideoIndex(0);
      // }
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    },
    [
      // videoSources, currentVideoIndex
    ],
  );

  useEffect(() => {
    currentVideoIndex !== videoSources.length - 1 &&
      videoRef.current.addEventListener("ended", playNextVideo);
    const video = videoRef.current;
    return () => {
      video.removeEventListener("ended", playNextVideo);
    };
  }, [currentVideoIndex, playNextVideo, videoSources]);

  const currentVideo = videoSources[currentVideoIndex];

  return (
    <div className="flex h-full w-full flex-col gap-4  overflow-hidden   ">
      <div className="relative aspect-square rounded-lg border border-primary">
        <img
          className={" absolute -z-10 aspect-square w-full  object-cover "}
          src="/assets/images/thumbnail.png"
          alt="video thumbnail"
        />
        <video
          key={currentVideoIndex}
          id="video-player"
          ref={videoRef}
          className="aspect-square rounded-lg"
          autoPlay
          src={`/assets/videos/${currentVideo}.mp4`}
        >
          {/* <source src={`/assets/videos/${currentVideo}.mp4`} type="video/mp4" /> */}
        </video>
      </div>
      {nextUrl && (
        <div className="flex justify-start p-4">
          <button
            className="flex flex-col items-center justify-center transition-transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            onClick={handleNext}
          >
            <NextIcon className="h-6  w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlaylist;
