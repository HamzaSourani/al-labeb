import { useState } from "react";
import { useNavigate } from "react-router-dom";
import openAccount from "@/api/openAccount";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import Video from "@/components/ui/video";
const EndOpenAccountFlowPage = () => {
  const [videoSrc, setVideoSrc] = useState("21");
  const navigate = useNavigate();
  const { userInfo } = useUserInfoContext();
  const handleNext = () => {
    if (videoSrc === "20") {
      openAccount(userInfo);

      navigate("/al-labeb/end");
    } else {
      setVideoSrc((pre) => String(Number(pre) - 1));
    }
  };

  return (
    <div className=" flex h-screen items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src={videoSrc} onNext={handleNext} previousUrl="/" />
      </div>
    </div>
  );
};

export default EndOpenAccountFlowPage;
