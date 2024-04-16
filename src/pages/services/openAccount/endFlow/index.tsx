import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { openAccount } from "@/api/openAccount";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import SingleVideo from "@/components/pages/singleVideo";
import useValidation from "@/hooks/useValidation";
import pagesRoutes from "@/constants/pagesRoutes";

const EndOpenAccountFlowPage = () => {
  const [index, setIndex] = useState(0);
  const [isValid, setIsValid] = useValidation(true);
  const navigate = useNavigate();
  const { userInfo } = useUserInfoContext();
  const videoSources = ["21", "22", "20"];
  const handleNext = async () => {
    if (index === videoSources.length - 1) {
      setIsValid("unValid");
      await openAccount(userInfo);
      navigate(pagesRoutes.end);
    } else {
      setIndex((pre) => pre + 1);
    }
  };

  return (
    <SingleVideo
      videoNumber={videoSources[index]}
      validation={isValid}
      handleNext={handleNext}
    />
  );
};

export default EndOpenAccountFlowPage;
