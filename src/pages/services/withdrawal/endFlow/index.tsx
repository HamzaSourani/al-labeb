import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import Video from "@/components/ui/video";
import withdrawal from "@/api/withdrawal";
const EndWithDrawalFlowPage = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { depositOrWithdrawalInfo } = useUserInfoContext();
  const videoSources = ["21", "22"];
  const handleNext = async () => {
    if (index === videoSources.length - 1) {
      await withdrawal(depositOrWithdrawalInfo);

      navigate("/al-labeb/end");
    } else {
      setIndex((pre) => pre + 1);
    }
  };

  return (
    <div className=" flex h-screen items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src={videoSources[index]} onNext={handleNext} previousUrl="/" />
      </div>
    </div>
  );
};

export default EndWithDrawalFlowPage;
