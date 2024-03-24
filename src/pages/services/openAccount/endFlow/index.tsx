import { useState } from "react";
import { useNavigate } from "react-router-dom";
import openAccount from "@/api/openAccount";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import Video from "@/components/ui/video";
const EndOpenAccountFlowPage = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { userInfo } = useUserInfoContext();
  const videoSources = ["21", "22", "20"];
  const handleNext = async () => {
    if (index === videoSources.length - 1) {
      await openAccount(userInfo);

      navigate("/al-labeb/end");
    } else {
      setIndex((pre) => pre + 1);
    }
  };

  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src={videoSources[index]} onNext={handleNext} previousUrl="/" />
      </div>
    </div>
  );
};

export default EndOpenAccountFlowPage;
