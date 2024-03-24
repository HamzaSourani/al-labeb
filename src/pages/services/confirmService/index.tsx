import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { params } from "./type";
import VideoPlaylist from "@/components/ui/videoPlayList";
import NoIcon from "@/components/svg/no";
import YesIcon from "@/components/svg/yes";

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
        navigate("/al-labeb/withdrawal");
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
    <div className="flex  flex-col items-center   justify-center gap-y-4">
      <div className="shadow-shadow rounded-lg border  border-secondary  shadow md:w-1/2 lg:w-1/3 ">
        <VideoPlaylist videoSources={videoSources} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleServiceUrl}
          className="mr-2 rounded-lg  border border-primary bg-gray-200 p-2 px-4 text-center text-xl shadow  hover:bg-gray-300"
        >
          <YesIcon className="h-6 w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10" />
        </button>
        <button
          onClick={handleGoBack}
          className="mr-2 rounded-lg  border border-primary bg-gray-200 p-2 px-4 text-center text-xl shadow  hover:bg-gray-300"
        >
          <NoIcon className="h-6 w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10" />{" "}
        </button>
      </div>
    </div>
  );
};

export default ConfirmServicePage;
