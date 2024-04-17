import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import NextIcon from "@/components/svg/next";
import PauseIcon from "@/components/svg/pause";
import PlayIcon from "@/components/svg/play";
import RefreshIcon from "@/components/svg/refresh";
import VideoProps from "./type";

const Video = ({ src, validation, onNext }: VideoProps) => {
  const [status, setStatus] = useState(true);
  const [goNext, setGoNext] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null!);
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
    setStatus(true);
  };

  const handleVideoEnd = () => {
    if (validation === "unSet" || validation === "valid") setGoNext(true);
    else setGoNext(false);
  };

  useEffect(() => {
    if (validation === "valid") setGoNext(true);
    else setGoNext(false);
  }, [validation]);

  useEffect(() => {
    const handleVideoEnd = () => setStatus(false);
    videoRef.current.addEventListener("ended", handleVideoEnd);
    const video = videoRef.current;
    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-lg shadow-sm shadow-gray-300">
      <div className="relative min-h-[36rem] overflow-hidden rounded-t-lg border border-primary">
        <img
          className={" absolute -z-10 aspect-square w-full  object-cover "}
          src="/assets/images/thumbnail.png"
          alt="video thumbnail"
        />
        <video
          ref={videoRef}
          className={classNames("aspect-square", {
            "opacity-0": !isVideoReady,
          })}
          onEnded={handleVideoEnd}
          src={`/assets/videos/${src}.mp4`}
          onCanPlay={() => {
            setIsVideoReady(true);
            setTimeout(() => {
              videoRef.current.play();
            }, 700);
          }}
        />
      </div>
      <div className="grid  p-4 [grid-template-columns:auto_1fr]">
        {onNext && (
          <button
            className=" flex flex-col items-center justify-center transition-transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            onClick={onNext}
            disabled={validation === "unValid"}
          >
            <NextIcon
              className={classNames(
                "h-6  w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10",
                {
                  "animate-go-next": goNext,
                },
              )}
            />
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
