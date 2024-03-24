import Video from "@/components/ui/video";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SavingAccountExplanation = () => {
  const [videoSrc, setVideoSrc] = useState("10");
  const navigate = useNavigate();
  const handleNext = () => {
    videoSrc === "15"
      ? navigate("/al-labeb/open-account/terms-and-conditions")
      : setVideoSrc((pre) => String(Number(pre) + 1));
  };
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src={videoSrc} onNext={handleNext} previousUrl="/" />
      </div>
    </div>
  );
};

export default SavingAccountExplanation;
