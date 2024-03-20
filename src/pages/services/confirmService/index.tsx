import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { params } from "./type";
import VideoPlaylist from "@/components/ui/videoPlayList";

const ConfirmServicePage = () => {
  const { id } = useParams<params>();
  const [videoSources, setVideoSources] = useState(["24"]);
  const navigate = useNavigate();
  const handleServiceUrl = () => {
    switch (id) {
      case "3":
        navigate("/al-labeb/open-account");
        break;
      case "4":
        navigate("/al-labeb/deposit");
        break;
      case "40":
        navigate("/");
        break;
      default:
        navigate(-1);
        break;
    }
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    setVideoSources((pre) => (typeof id === "string" ? [...pre, id] : pre));
  }, [id]);

  return (
    <div className="flex h-screen flex-col items-center  justify-center gap-y-4">
      <div className="md:w-1/2 lg:w-1/3 ">
        <VideoPlaylist videoSources={videoSources} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleServiceUrl}
          className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
        >
          نعم
        </button>
        <button
          onClick={handleGoBack}
          className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
        >
          لا
        </button>
      </div>
    </div>
  );
};

export default ConfirmServicePage;
